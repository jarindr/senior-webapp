
import { changeState } from '../helpers/history'
import {inintializeGraph } from '../graph.js'
import { inintializeParticle } from '../particle.js'
import { inintializeMain } from '../main.js'
import { inintializeStats } from '../graphStatsVisualization.js'
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
      inintializeMain()
    })
    break

    case "/statsVisualization":
    app.load('statsVisualization .stats-component',()=>{
      inintializeStats()
    })
    break
  }
}

export function getRouteActionsPop (location) {

  switch (location.pathname) {

    case "/":
    app.load('lander .lander-component',()=>{
      inintializeParticle('particle')
    })
    break

    case "/signin":
    app.load('lander .lander-component',()=>{
      inintializeParticle('particle')
      $('.signin-component').slideDown()
      $('#login').text('Login')
    })
    break

    case "/main":
    inintializeGraph()
    inintializeMain()
    break

    case "/statsVisualization":
    inintializeStats()    
    break
  }
}
