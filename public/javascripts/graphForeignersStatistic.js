
//import { setHighchartsTheme } from '../javascripts/graphs/theme.js'
import { sort } from '../javascripts/helpers/sorting.js'
import { getGraduateStats,getForeignersStats } from '../javascripts/api/backendRecieve'
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
      type: 'pie',
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
      series: {
        color:'white',
        turboThreshold:0,
        pointPadding: 0.1,
        groupPadding: 0.1,
        dataLabels:{
          enabled:true,
          style: {
            color: 'white',
            fontSize: 15,
            textShadow:'none'
          },
          formatter:function () {
            return this.key + ": " + this.y
          }
        }

      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
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
      name: 'percentage',
      colorByPoint: true,
      data: getSpecificData(data,$('.select-query-honor').val())
    }],
    drilldown: {
      series: [{
        name: 'Foreigners',
        id: 'Foreigners',
        data: [
          ['v11.0', 24.13],
          ['v8.0', 17.2],
          ['v9.0', 8.11],
          ['v10.0', 5.33],
          ['v6.0', 1.06],
          ['v7.0', 0.5]
        ]
      }]
    }
  })
}

function getSpecificData(data,id) {
  const ans = _.filter(data,(d)=>d[0].fac ===  id)[0].map((d)=>{return{name:d.name,y:d.y}}).splice(2)
  return ans
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
  $('#controller').click(function (e) {
    $('.checkbox-list-container').slideToggle()
  })

  $('.select-query-honor').on('change',function () {

    $('.with-gap').each(function () {
      if($(this).prop('checked')){
        $('.type-selected-graph').text($('.select-query-honor').find('option:selected').text())
        changeSort($(this).prop('id'))
      }
    })
    getForeignersStats().then(function (data) {
      initSelectCheckBox(data)
    })

  })

  $('.stat-content').on('click','.checkbox-list-container ul li label',function (e) {
    const id = $(this).parent().prop('id')
    setTimeout( ()=> {
      const type = getSortType()
      const uncheckBoxes = getAllUncheckedBox()

      getForeignersStats().then(function (data) {
        data = getSpecificData(data,$('.select-query-honor').val())
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
  getForeignersStats().then(function (data) {
    const lists = createCheckboxList(_.uniq(getSpecificData(data,$('.select-query-honor').val()).map(e=>e.name)))
    $('.checkbox-list-container ul').empty().append(lists)
  })
}


function changeSort(type) {
  getForeignersStats().then(function (data) {
    const uncheckBoxes = getAllUncheckedBox()
    data = getSpecificData(data,$('.select-query-honor').val())
    admissionLinerGraph.series[0].setData(_.filter(sort(data,type)))
  })
}

export function inintializeGraphForeignersStatistic() {

  getForeignersStats()
  .then(function (data) {
    let ans = _.uniq(data.map(d=>d[0].fac))
    for(const d of ans){
      $('.select-query-honor').append('<option value='+d+'>'+d+'</option>')
    }
    inintializeGraph(data)
    initSelectCheckBox()
    inintializeHandler()

  })

}
