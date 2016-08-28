var express = require('express');
var router = express.Router();
var home = require(__base + 'controllers/home');

/* GET home page. */
router.get('/', home.homePage);

module.exports = router;
