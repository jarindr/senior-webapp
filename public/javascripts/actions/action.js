
import { changeState }                         from '../helpers/history'
import {inintializeGraph }                     from '../graph.js'
import { inintializeParticle }                 from '../particle.js'
import { inintializeMain }                     from '../main.js'
import { inintializeStats }                    from '../graphStatsVisualization.js'
import { inintializeGraphForeignersStatistic } from '../graphForeignersStatistic.js'

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
      console.log('yo')
      inintializeGraph()
      inintializeMain()
    })
    break

    case "/graduateStatistic":
    app.load('statsVisualization .stats-component',()=>{
      inintializeStats()
    })

    break
    case '/dashboard':
    app.load('dashboard .home',()=>{

    })
    break
    case '/dashboard/data':
    app.load('admin .data',()=>{

    })
    break
    case "/dashboard/import":
    app.load('admin .import',()=>{

    })
    break
    case "/dashboard/export":
    app.load('admin .export',()=>{

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

    case "/graduateStatistic":
    inintializeStats()
    break

    case "/foreignersStatistic":

    inintializeGraphForeignersStatistic()
    break
  }
}
