/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();

var { Member } = require('../../models');



/**
 * GET me
 * @query [include]   - '...api/v1/me?include=group'
 */
router.get('/', async function(req, res) {

  let withRelated = req.query.include ? req.query.include.split(',') : [] 

  // Filter out only valid includes.
  withRelated = withRelated.filter(attr => ['group', 'attended_at'].indexOf(attr) !== -1)

  const members = await Member.where({id: req.user.id}).fetch({withRelated})
  res.json(members);
});

router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500)
  res.render('User error: ', { error: err });
});

module.exports = router;
