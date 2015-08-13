var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/phones', function(req, res, next) {
  res.render('partials/phone-list');
});

router.get('/phones/:phoneId', function(req, res, next) {
  res.render('partials/phone-detail');
});

module.exports = router;