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

router.get('/statsVisualization', function(req, res, next) {
  res.render('statsVisualization')
})

router.get('/testDatabase',function (req,res,next) {

  var group = [
    {$group: {
      _id: '$FACCODE',
      name:{$push:'$FACNAME'},
      GRAD1: {$sum: '$GRAD1'},
      total:{$sum:'$TOT_1'}
    }}
  ]

  const data = graduateStatsCollection.aggregate(group, function(err, logs){
    if (err) { return def.reject(err) }
    res.send( logs.map((fac)=>{
      return {name:fac.name[0],y:fac.GRAD1/fac.total}
    }))
  })




})
module.exports = router;
