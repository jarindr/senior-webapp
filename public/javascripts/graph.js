
import { setHighchartsTheme } from '../javascripts/graphs/theme.js'

const Highcharts = require('highcharts/highstock')
require('highcharts/modules/exporting')(Highcharts)

export function inintializeGraph() {

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

  var rankingCircleGraph = Circles.create({
    id:                  'ranking-circle-graph',
    radius:              50,
    value:               100,
    maxValue:            100,
    width:               2,
    text:                function(value){return 2 + 'ND'},
    colors:              ['#D3B6C6', 'white'],
    duration:            400,
    wrpClass:            'circles-wrp-ranking',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  })




  //setHighchartsTheme(Highcharts)

  const highschoolBarGraph = Highcharts.chart({
    chart: {
      type: 'bar',
      renderTo: 'highschool-bar-graph',


    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    xAxis: {
      categories:['Assumption College','Suankularb College','Saint Gabriel College','Triamudom Suksa School','Bangkok Christian College']
    },
    yAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      visible: false,

      title: {
        text: 'Number of Students'
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
          color:'white'
        }
      },
      series: {
        pointPadding: 0.05,
        groupPadding: 0.1,
      }
    },
    tooltip: {
      valueSuffix: ' students'
    },
    legend: {
      enabled:false,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },

    series: [{
      data: [{
        color: '#bb1667',
        y: 799
      }, {
        color: '#7E003E',
        y: 521
      },
      {
        color: '#D35A95',
        y: 731
      },
      {
        color: '#F3D1E2',
        y: 301
      },
      {
        color: '#3000018',
        y: 451
      }]
    }]
  })

  const FacultyBarGraph = Highcharts.chart({
    chart: {
      type: 'column',
      renderTo: 'faculty-bar-graph',
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
      visible:false,
      labels: {
        style: {
          color: 'white'
        }
      }
    },
    yAxis: {
      visible: true,
      labels: {
        style: {
          color: 'white'
        }
      },

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
      }
    },
    tooltip: {
      valueSuffix: ' students'
    },
    legend: {
      enabled:false
    },

    series: [{
      data: [{
        color: '#bb1667',
        y: 3.13
      }, {
        color: '#F3D1E2',
        y: 2.15
      },
      {
        color: '#F3D1E2',
        y: 4.00
      },
      {
        color: '#F3D1E2',
        y: 3.5
      },
      {
        color: '#F3D1E2',
        y: 2.6
      }]
    }]

  })
  const admissionLinerGraph = Highcharts.chart({
    chart: {
      type: 'line',
      renderTo: 'admission-line-graph',
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
        color:'white'
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
  // // // hack for reflowing highchart when initialize
  // setTimeout(function () {
  //   chart.reflow()
  // }, 0)

}
