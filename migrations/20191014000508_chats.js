
exports.up = function(knex) {
  return knex.schema.createTable('chats', function(table) {
    table.string('id').index().unique().notNull();
    table.string('thread_id').index().notNull();
    table.string('admin_id').index().notNull();
    table.text('message').nullable();
    table.timestamps();
  }).then(()=>{
    return knex.schema.alterTable('chats', function(table){
      table.foreign('admin_id').references('admins.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chats')
};
