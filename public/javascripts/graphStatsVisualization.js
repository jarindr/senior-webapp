
import { setHighchartsTheme } from '../javascripts/graphs/theme.js'

const Highcharts = require('highcharts/highstock')
require('highcharts/modules/exporting')(Highcharts)

export function inintializeStats() {

  var studentCircleGraph = Circles.create({
    id:                  'student-circle-graph',
    radius:              100,
    value:               87,
    maxValue:            100,
    width:               25,
    text:                function(value){return value + '%';},
    colors:              ['#D3B6C6', '#7E003E'],
    duration:            400,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text-student',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  })




  //setHighchartsTheme(Highcharts)
  const admissionLinerGraph = Highcharts.chart({
    chart: {
      type: 'line',
      renderTo: 'general-number-graph',
      backgroundColor: 'transparent',
      height: 200

    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    xAxis: {


    },
    yAxis: {
      visible: true,
      title: {
        text: null
      }
    },
    title:{
      text:null
    },
    plotOptions:{
      column:{
        dataLabels: {
          enabled: true,
          inside:true
        }
      },
      series: {
        pointPadding: 0.05,
        groupPadding: 0.1,
        color:'blue'
      }
    },
    tooltip: {
      valueSuffix: ' students'
    },
    legend: {
      enabled:false
    },

    series: [{
      data: randomData()
    }]

  })
  function randomData() {
    let temp = []
    for(var i=0;i<10;i++){
      temp.push({
        color: '#7E003E',
        y: Math.random()*5
      })
    }
    return temp
  }

}
