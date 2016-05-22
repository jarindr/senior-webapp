import { changeState } from '../javascripts/helpers/history'
$(document).ready(()=>{
  $(document).on('click','#home',function(){
    changeState({ path:'/dashboard' })
  })
  $(document).on('click','#alldata',function(){
    console.log('datadata')
    changeState({ path:'/dashboard/data' })
  })
  $(document).on('click','#import',function(){
    changeState({ path:'/dashboard/import' })
  })
  $(document).on('click','#export',function(){
    changeState({ path:'/dashboard/export' })
  })
  $(document).on('click','#upload-csv',function(){
    $('#upl-btn').click()

  })
  $(document).on('change','#upl-btn',function () {
    $('#upl').submit()
    alert('upload done')
  })
  $(document).on('click','#show-import-manual',function(){
    $('#import-manual').css({
      'position' : 'relative'
    })
    $('#import-manual').animate({
      left : '0%'
    },500)
  })
  $(document).on('click','#show-export-manual',function(){
    $('#export-manual').css({
      'position' : 'relative'
    })
    $('#export-manual').animate({
      left : '0%'
    },500)
  })
  $(document).on('click','#remove-import',function(){
    $('#import-manual').css({
      'position' : 'absolute'
    })
    $('#import-manual').animate({
      left : '-100%'
    },500)
  })
  $(document).on('click','#remove-export',function(){
    $('#export-manual').css({
      'position' : 'absolute'
    })
    $('#export-manual').animate({
      left : '-100%'
    },500)
  })
})
