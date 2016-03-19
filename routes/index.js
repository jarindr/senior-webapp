var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chulalongkorn data center' });
});
router.get('/graph', function(req, res, next) {
  res.render('graph')
});

module.exports = router;
