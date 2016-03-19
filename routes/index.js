var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chulalongkorn data center' });
});
router.get('/signin', function(req, res, next) {
  res.render('signin', {
    title: 'Chulalongkorn data center',
 });
});
module.exports = router;
