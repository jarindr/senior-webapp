
import { setHighchartsTheme } from '../javascripts/graphs/theme.js'

export function inintializeGraph() {

  var myCircle = Circles.create({
    id:                  'student-circle-graph',
    radius:              100,
    value:               43,
    maxValue:            100,
    width:               25,
    text:                function(value){return value + '%';},
    colors:              ['#D3B6C6', '#4B253A'],
    duration:            400,
    wrpClass:            'circles-wrp',
    textClass:           'circles-text',
    valueStrokeClass:    'circles-valueStroke',
    maxValueStrokeClass: 'circles-maxValueStroke',
    styleWrapper:        true,
    styleText:           true
  });


  const Highcharts = require('highcharts/highstock')
  require('highcharts/modules/exporting')(Highcharts)

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
        color: '#00FF00',
        y: 799
      }, {
        color: '#FF00FF',
        y: 521
      },
      {
        color: '#FF00FF',
        y: 731
      },
      {
        color: '#FF00FF',
        y: 301
      },
      {
        color: '#FF00FF',
        y: 451
      }]
    }]
  })

  const FacultyBarGraph = Highcharts.chart({
    chart: {
      type: 'column',
      renderTo: 'faculty-bar-graph',
      backgroundColor: 'transparent'

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
        color: '#00FF00',
        y: 3.12
      }, {
        color: '#FF00FF',
        y: 2.18
      },
      {
        color: '#FF00FF',
        y: 3.74
      },
      {
        color: '#FF00FF',
        y: 2.89
      },
      {
        color: '#FF00FF',
        y: 3.42
      }]
    }]
  })



  // // hack for reflowing highchart when initialize
  // setTimeout(function () {
  //   chart.reflow()
  // }, 0)




}
