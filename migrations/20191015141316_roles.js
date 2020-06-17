
exports.up = function(knex) {
  return knex.schema.createTable('roles', function(table) {
    table.string('id').index().unique().notNull();
    table.string('name').index().notNull();
    table.string('color').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles')
};
