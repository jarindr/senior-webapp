import {changeState} from '../javascripts/helpers/history.js'
export function inintializeNavigation() {
  $(document).on('click','#facInfo',function () {
    changeState({
      path:'/foreignersStatistic'
    })
  })
  $(document).on('click','#mainInfo',function () {
    changeState({
      path:'/main'
    })
  })
  $(document).on('click','#forInfo',function () {
    changeState({
      path:'/graduateStatistic'
    })
  })
  $(document).on('click','#subInfo',function () {
    changeState({
      path:'/gradeStatistic'
    })
  })
  $(document).on('click','#bioInfo',function () {
    changeState({
      path:'/population'
    })
  })
}
inintializeNavigation()
