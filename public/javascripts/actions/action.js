
import { changeState } from '../helpers/history'
import {inintializeGraph } from '../graph.js'
import { inintializeParticle } from '../particle.js'
const app = $('.app')

export function getRouteActionsPush (location) {

  switch (location.pathname) {
    case "/":
    break

    case "/signin":
    $('.signin-component').slideDown()
    break

    case "/main":
    app.load('main .main-component',()=>{
      inintializeGraph()
    })
    break
  }
}
export function getRouteActionsPop (location) {

  switch (location.pathname) {

    case "/":
    app.load('lander .lander-component',()=>{
      inintializeParticle()
    })
    break

    case "/signin":
    app.load('lander .lander-component',()=>{
      inintializeParticle()
      $('.signin-component').slideDown()
      $('#login').text('Login')
    })
    break

    case "/main":
    inintializeGraph()
    break
  }
}
