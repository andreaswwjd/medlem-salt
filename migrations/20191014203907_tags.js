
exports.up = function(knex) {
  return knex.schema.createTable('tags', function(table) {
    table.string('id').index().unique().notNull();
    table.string('group_id').index().notNull();
    table.string('name').index().notNull();
    table.string('color').notNull();
    table.boolean('global').defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tags')
};
