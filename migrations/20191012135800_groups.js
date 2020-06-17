
exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', function(table) {
    table.string('id').index().unique().notNull();
    table.string('name').notNull();
    table.string('note').nullable();
    // Settings
    table.boolean('auto_messageing').defaultTo(true).notNull();
    table.integer('link_validity_days').nullable().comment('Null betyder att sms-länken inte har någon giltighetsperiod. Dvs alltid giltig.');
    table.integer('medlemsavgift').nullable();

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups')
};
