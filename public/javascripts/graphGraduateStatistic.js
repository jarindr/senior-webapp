
//import { setHighchartsTheme } from '../javascripts/graphs/theme.js'
import { sort } from '../javascripts/helpers/sorting.js'
import { getGraduateStats } from '../javascripts/api/backendRecieve'
import { createCheckboxList } from '../javascripts/component/selectCheckbox.js'
import * as _ from 'lodash'
// const Highcharts = require('highcharts/highstock')
// require('highcharts/modules/exporting')(Highcharts)
//setHighchartsTheme(Highcharts)

let admissionLinerGraph = null

function inintializeGraph(data) {
  admissionLinerGraph = Highcharts.chart({
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
      categories:data.map((t)=>{return t.name.replace('คณะ','')}),
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
  $(document).off('a').mouseup(function a(e){
    const container = $(".checkbox-list-container")
    const button = $('#controller')

    if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0
    &&!button.is(e.target)) // ... nor a descendant of the container
    {
      container.slideUp()
    }
  })
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
  $('#controller').off().click(function (e) {
    $('.checkbox-list-container').slideToggle()
  })

  $('.select-query-honor').on('change',function () {

    $('.with-gap').each(function () {
      if($(this).prop('checked')){
        $('.type-selected-graph').text($('.select-query-honor').find('option:selected').text())
        changeSort($(this).prop('id'))
      }
    })

  })

  $('.stat-content').on('click','.checkbox-list-container ul li label',function (e) {
    const id = $(this).parent().prop('id')
    setTimeout( ()=> {
      const type = getSortType()
      const uncheckBoxes = getAllUncheckedBox()
      getGraduateStats($('.select-query-honor').val()).then(function (data) {
        const listArr = _.filter(sort(data,type),(d)=>{return _.includes(uncheckBoxes,d.name)})
        admissionLinerGraph.series[0].setData(listArr)
        admissionLinerGraph.xAxis[0].setCategories(listArr.map((t)=>{return t.name.replace('คณะ','')}))
      })
    }, 0)


  })
}

function getAllUncheckedBox() {
  let arr = []
  $("input[type=checkbox]").each(function () {
    if($(this).prop('checked')){
      arr.push($(this).parent().prop('id'))
    }
  })
  return arr
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

function initSelectCheckBox(data) {
  getGraduateStats($('.select-query-honor').val()).then(function (data) {
    const lists = createCheckboxList(data.map((d)=>d.name))
    $('.checkbox-list-container ul').empty().append(lists)
  })
}

function changeSort(type) {
  getGraduateStats($('.select-query-honor').val()).then(function (data) {
    const uncheckBoxes = getAllUncheckedBox()
    admissionLinerGraph.series[0].setData(_.filter(sort(data,type),(d)=>{return _.includes(uncheckBoxes,d.name)}))
    admissionLinerGraph.xAxis[0]
    .setCategories(_.filter(sort(data,type),(d)=>{return _.includes(uncheckBoxes,d.name)})
    .map((t)=>{return t.name.replace('คณะ','')}))
  })
}

export function inintializeStats() {
  getGraduateStats()
  .then(function (data) {
    inintializeGraph(data)
    initSelectCheckBox()
    inintializeHandler()
  })

}
