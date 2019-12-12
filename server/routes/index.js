var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.write('Hello World');
  res.end();
});

module.exports = router;
