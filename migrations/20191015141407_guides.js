
exports.up = function(knex) {
  return knex.schema.createTable('guides', function(table) {
    table.string('id').index().unique().notNull();
    table.string('index').notNull();
    table.string('title').notNull();
    table.text('content').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('guides')
};
