'use strict'
//import { setHighchartsTheme } from '../javascripts/graphs/theme.js'
import { sort } from '../javascripts/helpers/sorting.js'
import { getGradeStats,getAllGradeStats } from '../javascripts/api/backendRecieve'
import { createCheckboxList } from '../javascripts/component/selectCheckbox.js'
import * as _ from 'lodash'
// const Highcharts = require('highcharts/highstock')
// require('highcharts/modules/exporting')(Highcharts)
//setHighchartsTheme(Highcharts)
let gradeGraph = null
let selected = 'FIN ANAL CONT SYS'

function inintializeGraph(data) {
  gradeGraph = Highcharts.chart({
    // shuold i even shuffle the color
    colors: ["#b2ebf2", "#4dd0e1", "#ab47bc", "#7e57c2", "#7986cb", "#42a5f5", "#4fc3f7",
    "#b2ebf2", "#1de9b6", "#7798BF", "#d4e157",'#f57f17','#ffa726','#ff7043','#8d6e63','#9e9e9e','#78909c'],

    chart: {
      type: 'line',
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
      title:{},
      categories:data.map((t)=>{return t.year[0]}),
      labels: {
        style: {
          color:'white',
          fontSize:13
        }
      }

    },
    yAxis: {
      max:4.0,
      labels:{

      }
    },
    title:{
      text:null
    },
    plotOptions:{
      series: {
        dataLabels: {
          enabled: true,
          style:{
            textShadow:'none',
            color:'white'
          }
        }
      }
    },
    tooltip: {

    },
    legend: {
      enabled:false,
      align: 'right',
      itemStyle:{
        fontSize:10,
        color:'white'
      }
    },
    series: [{
      name:data[0].name[0],
      data:data.map((t)=> {
        return {
          name:t.name[0],
          y:parseFloat(t.grade.toFixed(2)),
          color:'white'
        }
      })
    }]
  })
}

function setGraphData(data) {
  gradeGraph.series[0].setData(data.map((t)=> {
    return {
      name:t.name[0],
      y:parseFloat(t.grade.toFixed(2)),
      color:'white'
    }
  }))
  gradeGraph.xAxis[0].setCategories(data.map((t)=>{return t.year[0]}))
  $('.type-selected-graph').text(selected)
  $('.avg-grade').text('average: '+_.mean(data.map((d)=>d.grade)).toFixed(2))
}

function getSortType() {
  let temp = ''
  $('.with-gap').each(function () {
    if($(this).prop('checked')){
      temp = $(this).prop('id')
    }
  })
  return temp
}
function inintializeHandler(data) {
  $('.type-selected-graph').text(selected)
  const $tag = $('#tags')
  $tag.autocomplete({
    autoFocus: true,
    source: data.map((d)=>d._id),
    select: function(event , ui){
      $tag.blur()
      selected = ui.item.label
      getGradeStats(selected,getSortType()).then((data)=>setGraphData(data))
    }
  }).val(selected).data('autocomplete')

  $('#asc').click(function () {
    changeSort()
  })
  $('#dsc').click(function () {
    changeSort()
  })

}
function changeSort() {
  getGradeStats(selected,getSortType()).then((data)=>setGraphData(data))
}

export function inintializeGrade() {
  getAllGradeStats()
  .then(function (data) {
    inintializeHandler(data)
  })

  getGradeStats(selected,getSortType())
  .then(function (data) {
    $('.avg-grade').text('average: '+_.mean(data.map((d)=>d.grade)).toFixed(2))
    inintializeGraph(data)
  })
}
