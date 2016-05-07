
import { setHighchartsTheme } from '../javascripts/graphs/theme.js'
import { sort } from '../javascripts/helpers/sorting.js'
import { getGraduateStats } from '../javascripts/api/backendRecieve'
var _ = require('lodash')
const Highcharts = require('highcharts/highstock')
require('highcharts/modules/exporting')(Highcharts)
//setHighchartsTheme(Highcharts)

let admissionLinerGraph = null

function inintializeGraph(data) {
  admissionLinerGraph = Highcharts.chart({
    // shuold i even shuffle the color
    colors: _.shuffle(["#4db6ac", "#4dd0e1", "#ab47bc", "#7e57c2", "#7986cb", "#42a5f5", "#4fc3f7",
    "#b2ebf2", "#1de9b6", "#7798BF", "#d4e157",'#f57f17','#ffa726','#ff7043','#8d6e63','#9e9e9e','#78909c']),

    chart: {
      type: 'column',
      renderTo: 'general-number-graph',
      backgroundColor: 'transparent',
      zoomType:'x',
      events: {
        load: function() {


        }
      }
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
      categories:data.map((t)=>{return t.name.replace('คณะ','')}),
      labels: {
        style: {
          color:'white'
        }
      }

    },
    yAxis: {
      visible: true,
      title: {
        text: null
      },
      labels:{
        formatter:function(){
          return (this.value*100).toFixed(1)+" %"
        },
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
          formatter:function(){
            return (this.y*100).toFixed(2)+" %"
          },
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
      data:data.map((t)=>{return t.y})
    }]

  })
}



function inintializeHandler() {
  $('.type-selected-graph').text($('.select-query-honor').find('option:selected').text())

  $('#fixed').click(function () {
    changeSort('fixed')
  })

  $('#asc').click(function () {
    changeSort('asc')
  })

  $('#dsc').click(function () {
    changeSort('dsc')
  })

  $('.select-query-honor').on('change',function () {
    $('.with-gap').each(function () {
      if($(this).prop('checked')){
        $('.type-selected-graph').text($('.select-query-honor').find('option:selected').text())
        changeSort($(this).prop('id'))
      }
    })

  })
}

function changeSort(type) {
  getGraduateStats($('.select-query-honor').val()).then(function (data) {
    admissionLinerGraph.series[0].setData(sort(data,type).map((t)=>{return t.y}))
    admissionLinerGraph.xAxis[0].setCategories(sort(data,type).map((t)=>{return t.name.replace('คณะ','')}))
  })
}
export function inintializeStats() {
  getGraduateStats()
  .then(function (data) {
    inintializeGraph(data)
    inintializeHandler()
  })

}
