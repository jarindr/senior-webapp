export const action = {

  getRouteActions : function (location) {
    switch (location.pathname) {

      case "/signin":
      $('#login-form').slideUp().load('signin-form #login-form').slideDown()
      $('#login').text('Login')
      break

      case "/":
      $(".vc-child").load('/ .vc-child')
      break
      
      case "/main":
      $(".vc-child").load('main')
      break

      default :


    }
  }
}
