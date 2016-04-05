
import { setHighchartsTheme } from '../javascripts/graphs/theme.js'

export function inintializeGraph() {
  $(".dial").val(86).knob({
    "min":1,
    "max":100,
    "fgColor":'#F8BBD0',
    'thickness':.2,
    'readOnly':true,
    'angleArc':300,
    'inputColor':'white',
    'width':'40px'
    })
    var i= 0
    var a = setInterval(function () {
      $(".dial").val(i).trigger('change')
      i++
      if(i==79){
        clearInterval(a)
        $(".dial").val(i+'%')
      }
    }, 10)


    const Highcharts = require('highcharts/highstock')
    require('highcharts/modules/exporting')(Highcharts)

    setHighchartsTheme(Highcharts)

    const chart = Highcharts.chart({
      chart: {
        type: 'bar',
        renderTo: 'graph',

      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: '°C'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2]
      }]
    })
    setTimeout(function () {
      chart.reflow()
    }, 0)



  }
