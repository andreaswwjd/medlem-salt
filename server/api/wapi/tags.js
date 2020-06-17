/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var { Tag } = require('../../models');

var express = require('express');
var router = express.Router();



/**
 * GET tags
 * @query [page]      - '...api/v1/tags?page=1'
 * @query [pagesize]  - '...api/v1/tags?pagesize=15'
 * @query [include]   - '...api/v1/tags?include=things,things.tags,things.owner'
 * @query [limit]        - '...api/v1/tags?limit=5'
 * @query [orderby]   - '...api/v1/tags?orderby=created_at' 
 * @query [order]     - '...api/v1/tags?order=ASC' 
 */
router.get('/', async function(req, res) {

  const page = req.query.page || 1
  const pageSize = req.query.pagesize || 15
  const limit = req.query.limit || 5
  const orderby = req.query.orderby || 'created_at'
  const order = req.query.order || 'DESC'
  
  // Sanitize include
  let withRelated = req.query.include ? req.query.include.split(',').filter(included=>{
    return ['things', 'things.tags', 'things.primary_tag', 'things.owner'].indexOf(included) !== -1
  }).map(included => {
    // Exclude sensitive data
    if(included === 'things.owner') {
      included = {
        'things.owner': q => q.column('id', 'firstname', 'lastname', 'image')
      }
    }
    return included
  }) : []

  // If 'things.tags'
  withRelated = /things/.test(req.query.include) ? [...withRelated, { 
    // things: q => q.orderBy(orderby, order).limit(limit).offset(0)
    things: q => q.groupBy('things.id').havingRaw('COUNT(things.id) < '+limit).orderBy(orderby, order)
  }] : withRelated

  const limiter = {
    page,
    pageSize,
    withRelated
  };
  const data = await Tag.forge().fetchPage(limiter)
  res.json(data.toJSON());
});


/**
 * GET things from tag
 * @query [page]      - '...api/v1/tags/:slug?page=1'
 * @query [pagesize]  - '...api/v1/tags/:slug?pagesize=15'
 * @query [orderby]   - '...api/v1/tags/:slug?orderby=created_at' 
 * @query [order]     - '...api/v1/tags/:slug?order=ASC' 
 */
router.get('/:slug', async function(req, res) {

  const slug = req.params.slug
  const limit = (req.query.pagesize || 15)
  const offset = ((req.query.page || 1) - 1) * (req.query.pagesize || 15)
  const orderby = req.query.orderby || 'created_at'
  const order = req.query.order || 'DESC'

  const query = { slug: slug };
  const limiter = {
    withRelated: ['things.tags', { 
      things: q => q.orderBy(orderby, order).limit(limit).offset(offset)
    }]
  }
  const data = await Tag.forge(query).fetch(limiter)
  res.json(data.toJSON());
});

router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500)
  res.render('Tags error: ', { error: err });
});

module.exports = router;
