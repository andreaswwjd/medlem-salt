/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();

var { Tag } = require('../../models');
// var { knex } = require('../../bookshelf');



/**
 * GET tags
 * @query [page]      - '...api/v1/tags?page=1'
 * @query [pagesize]  - '...api/v1/tags?pagesize=15'
 * @query [include]   - '...api/v1/tags?include=things'
 * @query [groups]   - '...api/v1/tags?groups=groupIds'
 */
router.get('/', async function(req, res) {

  const page = req.query.page || 1
  const pageSize = req.query.pagesize || 15
  const groups = req.query.groups ? req.user.groups_ids.filter(id => req.query.groups.split(',').includes(id)) : req.user.groups_ids
  let withRelated = req.query.include ? req.query.include.split(',') : [] 

  // Filter out only valid includes.
  withRelated = withRelated.filter(attr => ['members'].indexOf(attr) !== -1)

  const query = {
    page,
    pageSize,
    withRelated,
    // columns: ['id', 'firstname', 'lastname', 'pnr']
  };
  // ...['age','>','26']
  // tag/id?include=tags.tags&where=age>26,group=id,tag=scout
  const tags = await Tag.query(qb => qb.whereIn('group_id', groups).orWhere({global: 1})).fetchPage(query)
  res.json(tags);
});

/**
 * GET user's things
 * @query [page]      - '...api/v1/users/:userId?page=1'
 * @query [pagesize]  - '...api/v1/users/:userId?pagesize=15'
 * @query [include]   - '...api/v1/users/:userId?include=things.tags'
 * @query [orderby]   - '...api/v1/users/:userId?orderby=created_at' 
 * @query [order]     - '...api/v1/users/:userId?order=ASC' 
 */
/*router.get('/:userId', async function(req, res) {

  const userId = req.params.userId
  const limit = (req.query.pagesize || 15)
  const offset = ((req.query.page || 1) - 1) * (req.query.pagesize || 15)
  const orderby = req.query.orderby || 'created_at'
  const order = req.query.order || 'DESC'

  let withRelated = []
  if (req.query.include) {

    // Sanitize input
    withRelated = req.query.include.split(',').filter(included => {
      ['things', 'things.tags', 'things.primary_tag' ].indexOf(included) !== -1
    })

    // Fix pagination if things are included
    if (/things/.test(req.query.include)) {
      withRelated = [...withRelated, { things: q => q.orderBy(orderby, order).limit(limit).offset(offset) }]
    }
  }
  const query = {id: userId};
  const limiter = {
    withRelated,
    columns: ['id', 'firstname', 'lastname', 'image']
  };

  let users = await User.forge(query).fetch(limiter);
  users = users ? users.toJSON() : [];
  res.json(users);
});
*/
router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500)
  res.render('User error: ', { error: err });
});

module.exports = router;
