var express = require('express');
var router = express.Router();
const graduateStatsCollection = require('../database/connection.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
})

router.get('/lander',function (req,res,next) {
  res.render('lander', {
    login: 'Login Chula Users'
  })
})

router.get('/signin', function(req, res, next){
  res.render('index')
})
router.post('/signin', function(req, res, next){
  res.redirect('main')
})


router.get('/signin-form', function(req, res, next){
  res.render('signin')
})

router.get('/graph', function(req, res, next) {
  res.render('graph')
});
router.get('/dashboard', function(req,res,next){
  res.render('dashboard')
})
router.get('/dashboard/admin', function(req,res,next){
  res.render('admin')
})
router.get('/main', function(req, res, next) {
  res.render('main', {
    title: 'Chulalongkorn data center',
  })
})
router.get('/graduateStatistic', function(req, res, next) {
  res.render('statsVisualization')
})

router.get('/foreignersStatistic',function (req,res,next) {
  res.render('foreignersStatistic')
})
module.exports = router;
