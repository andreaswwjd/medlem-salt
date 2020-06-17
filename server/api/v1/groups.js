/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();

var { Group } = require('../../models');

/**
 * GET Groups
 * @query [page]      - '...api/v1/group?page=1'
 * @query [pagesize]  - '...api/v1/group?pagesize=15'
 * @query [include]   - '...api/v1/group?include=things'
 */
router.get('/', async function(req, res) {
  res.json({groups: 'test'});

  // const page = req.query.page || 1
  // const pageSize = req.query.pagesize || 15
  // let withRelated = req.query.include ? req.query.include.split(',') : [] 

  // // Filter out only valid includes.
  // withRelated = withRelated.filter(attr => ['age', 'group', 'messages', 'attended_at', 'tags', 'group.members.tags', 'group.members.attended_at'].indexOf(attr) !== -1)

  // const query = {
  //   page,
  //   pageSize,
  //   withRelated,
  //   // columns: ['id', 'firstname', 'lastname', 'pnr']
  // };
  // // ...['age','>','26']
  // // tag/id?include=members.tags&where=age>26,group=id,tag=scout
  // const members = await Member.where(...['age','>','26']).fetchPage(query)
  // res.json(members);
});


/**
 * GET user's things
 * @query [page]      - '...api/v1/users/:groupId?page=1'
 * @query [pagesize]  - '...api/v1/users/:groupId?pagesize=15'
 * @query [include]   - '...api/v1/users/:groupId?include=things.tags'
 * @query [orderby]   - '...api/v1/users/:groupId?orderby=created_at' 
 * @query [order]     - '...api/v1/users/:groupId?order=ASC' 
 */
router.get('/:groupId', async function(req, res) {

  const groupId = req.params.groupId
  const limit = (req.query.pagesize || 15)
  const offset = ((req.query.page || 1) - 1) * (req.query.pagesize || 15)
  const orderby = req.query.orderby || 'created_at'
  const order = req.query.order || 'DESC'

  let withRelated = []
  if (req.query.include) {

    // Sanitize input
    withRelated = req.query.include.split(',').filter(included => {
      ['members', 'members.tags', 'members.roles', 'smstemplates' ].indexOf(included) !== -1
    })
    
    // Fix pagination if things are included
    if (/members/.test(req.query.include)) {
      withRelated = [...withRelated, { members: q => q.orderBy(orderby, order).limit(limit).offset(offset) }]
    }
    
  }
  const query = {id: groupId};
  const limiter = {
    withRelated: ['members', 'members.tags', 'members.roles', 'members.attended_at'],
    // columns: ['id', 'firstname', 'lastname', 'image']
  };

  let groups = await Group.where(query).fetch(limiter);
  groups = groups ? groups.toJSON() : [];
  res.json(groups);
});

router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500)
  res.render('User error: ', { error: err });
});

module.exports = router;
