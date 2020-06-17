
exports.up = function(knex) {
  return knex.schema.createTable('filters', function(table) {
    table.string('id').index().unique().notNull();
    table.string('group_id').index().notNull();
    table.string('name').index().notNull();
    table.string('condition').index().notNull();
    table.string('color').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('filters')
};
