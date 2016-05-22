
//import { setHighchartsTheme } from '../javascripts/graphs/theme.js'

import * as _ from 'lodash'
// const Highcharts = require('highcharts/highstock')
// require('highcharts/modules/exporting')(Highcharts)

//setHighchartsTheme(Highcharts)
import { getAllBioStats } from '../javascripts/api/backendRecieve'
import { toProvinceCode }  from '../javascripts/helpers/graphVal'

let mapGraph = null
let barGraph = null
function inintializeGraph(data) {

  // Initiate the chart
  mapGraph = new Highcharts.Map({
    chart :{
      backgroundColor: 'transparent',
      renderTo:'map',
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false,
    },
    title : {
      text : null
    },

    colorAxis: {
      type: 'logarithmic',
      dataClasses: [{
        to: 5
      }, {
        from: 5,
        to: 20
      }, {
        from: 20,
        to: 100
      }, {
        from: 100
      }],
      minColor: '#E3F2FD',
      maxColor: '#1565C0'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
        align: 'right'
      }
    },

    series : [{
      data : data.map((d)=>{
        return {
          'hc-key':toProvinceCode(d._id),
          'value':d.count
        }
      }),
      mapData: Highcharts.maps['countries/th/th-all'],
      joinBy: 'hc-key',
      name: 'Provice',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    },]
  })
}


function inintializeGraphBar(data) {
  barGraph = Highcharts.chart({
    // shuold i even shuffle the color
    colors: ["#4db6ac", "#4dd0e1", "#ab47bc", "#7e57c2", "#7986cb", "#42a5f5", "#4fc3f7",
    "#b2ebf2", "#1de9b6", "#7798BF", "#d4e157",'#f57f17','#ffa726','#ff7043','#8d6e63','#9e9e9e','#78909c'],

    chart: {
      type: 'column',
      renderTo: 'general-number-graph',
      backgroundColor: 'transparent',
      zoomType:'x',
      events: {
        load: function() {


        }
      },
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false,
    },
    xAxis: {
      title:{
      },
      categories:data.map((t)=>{return t._id.replace('คณะ','')}),
      labels: {
        style: {
          color:'white',
          fontSize:13
        }
      }

    },
    yAxis: {
      visible: true,
      title: {
        text: null
      },
      labels:{
        style: {
          color:'white'
        }
      }
    },
    title:{
      text:null
    },
    plotOptions:{
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          style: {
            color: 'black',
            fontSize: 15
          }
        },
        showInLegend: true
      },
      column:{
        dataLabels: {
          enabled: true,
          style: {
            color: 'white',
            fontSize: 10,
            textShadow:false

          }
        },
        borderWidth:1,
        borderColor:'grey'
      },
      series: {
        color:'white',
        turboThreshold:0,
        pointPadding: 0.1,
        groupPadding: 0.1

      }
    },
    tooltip: {
      valueSuffix: ' %',
      formatter:function () {
        return this.x+': '+(this.y*10).toFixed(3)
      }
    },
    legend: {
      enabled:false,
      verticalAlign: 'left',
      layout:'vertical',
      align: 'center',
      itemStyle:{
        fontSize:13
      }
    },
    series: [{
      colorByPoint: true,
      data:data.map((t)=>{return t.count})
    }]

  })
}
function setHandler() {
  $('#year-selection').on('change',function () {
    getAllBioStats($(this).val()).then((data)=> {
      mapGraph.series[0].setData(data.map((d)=>{
        return {
          'hc-key':toProvinceCode(d._id),
          'value':d.count
        }
      }))
      barGraph.series[0].setData(data.map((d)=>{
        return {
          y:d.count
        }
      }))
      barGraph.xAxis[0].setCategories(data.map((t)=>{return t._id}))
    })
  })
  $('#switcher').click(function () {
    $('#map').toggle()
    $('#general-number-graph').toggle()
    mapGraph.reflow()
  })
}
export function inintializePopulation() {
  setHandler()
  getAllBioStats('55').then((data)=> {
    inintializeGraph(data)
    inintializeGraphBar(data)
  })

}
