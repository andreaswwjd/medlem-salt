/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();
// var { knex } = require('../../bookshelf');

var { Member } = require('../../models');
var { makePdf } = require('../../pdf-maker');



/**
 * GET members
 * @query [page]      - '...api/v1/members?page=1'
 * @query [pagesize]  - '...api/v1/members?pagesize=15'
 * @query [include]   - '...api/v1/members?include=things'
 * @query [groups]   - '...api/v1/members?groups=uuid1,uuid2'
 * 
 * @query [search]   - '...api/v1/members?search=Andreas'
 * @query [age]   - '...api/v1/members?age=26'
 * @query [condition]   - '...api/v1/members?condition=<'
 * @query [tags]   - '...api/v1/members?tags=uuid1,uuid2'
 * @query [roles]   - '...api/v1/members?roles=uuid1,uuid2'
 * @query [camps]   - '...api/v1/members?camps=uuid1,uuid2'
 * @query [notes]   - '...api/v1/members?notes=uuid1,uuid2'
 */
router.get('/', async function(req, res){
  const responce = await getMembers(req, res)
  res.json(responce)
})

router.get('/pdf', async function(req, res){
  const { data } = await getMembers(req, res)
  const pdf = await makePdf('list.ejs', { members: data })
  res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
  res.send(pdf)
})

router.get('/:memberId', async function(req, res){
  const memberId = req.params.memberId

  let withRelated = req.query.include ? req.query.include.split(',') : [] 
  withRelated = withRelated.filter(attr => ['group', 'tags', 'roles', 'attended_at', 'messages'].indexOf(attr) !== -1)
  const query = { withRelated };

  const member = await Member.where({id: memberId}).fetch(query)
  res.json(member)
})

const getMembers = async function (req, res) {

  const page = req.query.page || 1
  const pageSize = req.query.pagesize || 15
  let groups = req.query.groups ? req.user.groups_ids.filter(id => req.query.groups.split(',').includes(id)) : req.user.groups_ids
  let withRelated = req.query.include ? req.query.include.split(',') : [] 

  // Filter out only valid includes.
  withRelated = withRelated.filter(attr => ['group', 'tags', 'roles', 'attended_at', 'messages'].indexOf(attr) !== -1)

  // Filters
  const tags  = req.query.tags  ? req.query.tags.split(',') : []
  const roles = req.query.roles ? req.query.roles.split(',') : []
  const camps = req.query.camps ? req.query.camps.split(',') : []
  const notes = req.query.notes ? req.query.notes.split(',') : []

  const age = req.query.age
  const condition = age && req.query.condition ? req.query.condition : '='
  const search = req.query.search ? '%'+req.query.search.replace(' ','%')+'%' : undefined

  const query = {
    page,
    pageSize,
    withRelated,
    // columns: ['id', 'firstname', 'lastname', 'pnr']
  };

  console.log(groups)

  const members = await Member.query(qb => {
    
    // Joins
    if (tags[0]) qb = qb.join('members_tags','_members.id','=','members_tags.member_id')
    if (roles[0]) qb = qb.join('members_roles','_members.id','=','members_roles.member_id')
    if (camps[0]) qb = qb.join('events_members','_members.id','=','events_members.member_id')
    // if (notes[0]) qb = qb.join('members_notes','_members.id','=','members_notes.member_id')

    // Filters
    qb = qb.whereIn('group_id', groups)
    if (tags[0]) qb = qb.whereIn('tag_id', tags)
    if (roles[0]) qb = qb.whereIn('role_id', roles)
    if (camps[0]) qb = qb.whereIn('event_id', camps)
    // if (notes[0]) qb = qb.whereIn('note_id', notes)
    if (age) qb = qb.where('age', condition, age)
    if (search) {
      qb = qb.where(builder => {
        return builder.where('firstname', 'LIKE', search)
          .orWhere('lastname', 'LIKE', search)
          .orWhere('email', 'LIKE', search)
          .orWhere('tel', 'LIKE', search)
          .orWhere('age', 'LIKE', search)
          .orWhere('pnr', 'LIKE', search)
      })
      
    }
    return qb

  }).fetchPage(query)

  return { 
    pagination: members.pagination, 
    data: members.toJSON()
  };
}


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

