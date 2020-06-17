
exports.up = function(knex) {
  return knex.schema.createTable('notifications', function(table) {
    table.string('id').index().unique().notNull();
    table.string('admin_id').index().notNull();
    table.text('message').nullable();
    table.string('link').nullable();
    table.boolean('seen');
    table.timestamps();
  }).then(()=>{
    return knex.schema.alterTable('notifications', function(table){
      table.foreign('admin_id').references('admins.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('notifications')
};
