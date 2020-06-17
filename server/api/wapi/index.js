/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();

// router.use('/things', require('./things'));
// router.use('/users', require('./users'));
// router.use('/tags', require('./tags'));

router.get('/', function(req, res) {
  res.send('index\n');
});

module.exports = router;
