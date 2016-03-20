
import { changeState } from '../javascripts/helpers/history'

$(document).ready(()=>{

  $(document).on('click','#login',function(){

    if(window.location.pathname=="/"){
      changeState({ path:'/signin' })
    }else{
      
      window.location.href = '/main'
    }
  })

})
