
import { setHighchartsTheme } from '../javascripts/graphs/theme.js'
import { sort } from '../javascripts/helpers/sorting.js'
import { getGraduateStats } from '../javascripts/api/backendRecieve'

const Highcharts = require('highcharts/highstock')
require('highcharts/modules/exporting')(Highcharts)

let admissionLinerGraph = null

function inintializeGraph(data) {
  admissionLinerGraph = Highcharts.chart({
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
      categories:sort(data,'asc').map((t)=>{return t.name.slice(3)})
    },
    yAxis: {
      visible: true,
      title: {
        text: null
      },
      labels:{
        formatter:function(){
          return (this.value*100).toFixed(1)+" %"
        }
      }
    },
    title:{
      text:null
    },
    plotOptions:{
      bar:{
        dataLabels: {
          enabled: true,
          format:'{y} person/year',
          align:'right',
          inside:false,
          color:'black'
        }
      },
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
            color: 'black',
            fontSize: 12
          }
        }
      },
      series: {
        color:'grey',
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
      data:sort(data,'asc').map((t)=>{return t.y})
    }]

  })
}



function inintializeHandler() {

  $('#asc').click(function () {
    changeSort('asc')
  })
  $('#dsc').click(function () {
    changeSort('dsc')
  })
  $('.select-query-honor').on('change',function () {
    changeSort()
  })
}

function changeSort(type) {
  type = type || 'asc'
  getGraduateStats($('.select-query-honor').val()).then(function (data) {
    admissionLinerGraph.series[0].setData(sort(data,type).map((t)=>{return t.y}))
    admissionLinerGraph.xAxis[0].setCategories(sort(data,type).map((t)=>{return t.name.slice(3)}))
  })
}
export function inintializeStats() {
  getGraduateStats()
  .then(function (data) {
    inintializeGraph(data)
    inintializeHandler()
  })

}
