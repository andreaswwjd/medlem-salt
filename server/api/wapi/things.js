/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

const { Thing } = require('../../models');
const express = require('express');
const router = express.Router();
const jwt = require('../../auth.js').jwt;


/**
 * GET things
 * @query [page]      - '...api/v1/things?page=1'
 * @query [pagesize]  - '...api/v1/things?pagesize=15'
 * @query [include]   - '...api/v1/things?include=owner,tags,primary_tag'
 * @query [tags]      - '...api/v1/things?tags=verktyg,trädgård'
 * @query [search]    - '...api/v1/things?search=gräs'
 * @query [orderby]   - '...api/v1/things?orderby=created_at'
 * @query [order]     - '...api/v1/things?order=ASC'
 */
router.get('/', async function (req, res) {
  const page = req.query.page || 1
  const owner = req.query.owner // no default value
  const pageSize = req.query.pagesize || 15
  const tags = req.query.tags ? req.query.tags.split(',') : []
  const search = req.query.search || ''
  const orderby = req.query.orderby || 'created_at'
  const order = req.query.order || 'DESC'
  let withRelated = req.query.include ? req.query.include.split(',') : []

  // Filter out only valid inludes.
  withRelated = withRelated
    .filter(included => ['owner', 'tags', 'primary_tag'].indexOf(included) !== -1)
    // Exclude sensitive columns
    .map(included => {
      if (included === 'owner') {
        return { owner: q => q.column('id', 'firstname', 'lastname', 'image') }
      }
      return included
    })

  const data = await Thing.query(q => {
      if (tags[0]) {
        q.join('tags_things', 'things.id', '=', 'tags_things.thing_id')
          .whereIn('tags_things.tag_slug', tags)
        if (search) {
          q.andWhere(function () {
            this.where('title', 'LIKE', '%' + search + '%')
              .orWhere('desc', 'LIKE', '%' + search + '%')
            // .orWhere('primary_tag', 'LIKE', '%'+search+'%')
          })
        }
      } else if (search) {
        q.where('title', 'LIKE', '%' + search + '%')
          .orWhere('desc', 'LIKE', '%' + search + '%')
        //  .orWhere('primary_tag', 'LIKE', '%'+search+'%')
      }

      if (owner) {
        q.where('owner_id', '=', owner)
      }
    })
    .orderBy(orderby, order)
    .fetchPage({
      page,
      pageSize,
      withRelated
    });

  res.json(data.toJSON())
});

/**
 * Create new thing
 */
router.post('/', jwt, async function (req, res) {
  const thing = { 
    owner_id: req.user.id,
    primary_tag: req.body.primary_tag || '', 
    title: req.body.title || '', 
    image: req.body.image || '', 
    desc: req.body.desc || '' 
  };

  const model =await Thing.forge(thing).save();
  res.send(model.toJSON());
});

/**
 * Delete a thing
 */
router.delete('/:id', jwt, async function (req, res) {
  const query = {
    id: req.params.id, 
    owner_id: req.user.id
  };
  const model = await Thing.forge(query).destroy();
  res.send('deleted thing ' + model);
});

router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500)
  res.render('Things error: ', { error: err });
});

module.exports = router;
