var express = require('express')
var router = express.Router()
var multer  = require('multer')
var upload = multer({ dest: './public/csv' })
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
  res.render('graduateStatistic')
})

router.get('/foreignersStatistic',function (req,res,next) {
  res.render('foreignersStatistic')
})
router.get('/population',function (req,res,next) {
  res.render('population')
})

router.get('/gradeStatistic',function (req,res,next) {
  res.render('gradeStatistic')
})

router.post('/upload', upload.single('upl'), function(req,res){
	console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
	console.log(req.file); //form files
	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	res.status(204).end()
})
module.exports = router;
