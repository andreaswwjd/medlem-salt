require('dotenv').config()

const knexfile  = require(process.cwd() + '/knexfile')
const knex      = require('knex')(knexfile[process.env.NODE_ENV || "development"])
const bookshelf = require('bookshelf')(knex)
const uuid      = require('bookshelf-uuid')
const virtuals  = require('bookshelf-virtuals-plugin')

bookshelf.plugin(uuid)
bookshelf.plugin(virtuals)


module.exports = bookshelf

