var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chulalongkorn data center' })
});
router.get('/signin', function(req, res, next) {
  res.render('signin', {
    title: 'Chulalongkorn data center',
  })
})
router.post('/signin', function(req, res, next){
  console.log(req.body.username)
  res.redirect('main')
})

router.get('/main', function(req, res, next) {
  res.render('main', {
    title: 'Chulalongkorn data center',
  })
})
module.exports = router;
