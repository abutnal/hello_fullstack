var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('./database');

router.use(cors());

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())

// ...rest of the initial code omitted for simplicity.
const { check, validationResult } = require('express-validator');

// Public directory access
// router.use(express.static(__dirname + '../public'));




/* GET home page. */
router.post('/api/login', [
    check('email', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty()
	], function(req, res) {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
  	return res.json({errors});
  }		
  else{
  	return res.json('success')
  }
 
});







module.exports = router;
