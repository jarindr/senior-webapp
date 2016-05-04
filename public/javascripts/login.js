
import { changeState } from '../javascripts/helpers/history'

$(document).ready(()=>{
  $(document).on('click','#login',function(){

    if(window.location.pathname=="/"){
      changeState({ path:'/signin'})
    }else{
      changeState({ path:'/main' })
    }
  })

  // $('.left-nav').click(function () {
  //   $('.main-content').animate({'left': 0},'fast',function () {
  //
  //   })
  //
  // })

})
