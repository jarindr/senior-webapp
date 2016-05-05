
import { changeState } from '../javascripts/helpers/history'

$(document).ready(()=>{
  $(document).on('click','#login',function(){

      if(window.location.pathname=="/"){

        changeState({ path:'/signin'})
      }else{
        // console.log('click')
        let user = $('#username').val()
        let pass = $('#password').val()
        console.log("inputs"+user+pass)
        if (user == 'admin' && pass == 'password'){
          changeState({ path:'/main' })
        } else {
          // console.log('else')
          $('#alert').css({
            'display' : 'block'
          })
        }
      }
  })

  // $('.left-nav').click(function () {
  //   $('.main-content').animate({'left': 0},'fast',function () {
  //
  //   })
  //
  // })

})
