
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', function(table) {
    table.string('id').index().unique().notNull();
    table.string('email').index().unique().notNull();
    table.string('tel').index().unique().nullable();
    table.string('firstname').notNull();
    table.string('lastname').notNull();
    table.enu('scope', ['leader','admin','tagger']).defaultTo('leader').notNull();
    table.string('salt').unique().notNull();
    table.string('pass_hash').notNull();
    // TODO: Mail me settings
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins')
};
