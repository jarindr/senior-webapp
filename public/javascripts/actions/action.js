
import { changeState }                         from '../helpers/history'
import {inintializeGraph }                     from '../graph.js'
import { inintializeParticle }                 from '../particle.js'
import { inintializeMain }                     from '../main.js'
import { inintializeStats }                    from '../graphGraduateStatistic.js'
import { inintializeGraphForeignersStatistic } from '../graphForeignersStatistic.js'
import { inintializeGrade }                    from '../gradeStats.js'
import { inintializePopulation }               from '../graphPopulation.js'

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
      $('body').css({overflow:'auto'})
      inintializeGraph()
      inintializeMain()
    })
    break

    case "/graduateStatistic":
    app.load('graduateStatistic .stat-component',()=>{
      inintializeStats()
    })
    break

    case "/foreignersStatistic":
    app.load('foreignersStatistic .stat-component',()=>{
      inintializeGraphForeignersStatistic()
    })
    break

    case "/population":
    app.load('population .stat-component',()=>{
      inintializePopulation()
    })
    break

    case "/gradeStatistic":
    app.load('gradeStatistic .stat-component',()=>{
    inintializeGrade()
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
      $('body').css({overflow:'hidden'})
    })
    break

    case "/main":
    app.load('main .main-component',()=>{
      $('body').css({overflow:'auto'})
      inintializeGraph()
      inintializeMain()
    })
    break

    case "/graduateStatistic":
    app.load('graduateStatistic .stat-component',()=>{
      inintializeStats()
    })
    break

    case "/foreignersStatistic":
    inintializeGraphForeignersStatistic()
    break

    case "/population":
    inintializePopulation()
    break

    case "/gradeStatistic":
    inintializeGrade()
    break
  }
}
