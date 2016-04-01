
import { changeState } from '../helpers/history'
import {inintializeGraph } from '../graph.js'

export function getRouteActions (location) {

  switch (location.pathname) {

    case "/":
    $(".app").load('lander .lander-component',()=>{
    })
    break

    case "/signin":
    $(".app").load('lander .lander-component',()=>{
      $('.signin-component').slideDown()
      $('#login').text('Login')
    })
    break

    case "/main":
    $(".app").hide().load('main .main-component',()=>{
      inintializeGraph()
      $(".app").fadeIn('slow')
    })
    break

  }
}
