
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.string('id').index().unique().notNull();
    table.string('name').notNull();
    table.integer('year').notNull();
    table.string('note').nullable();
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
