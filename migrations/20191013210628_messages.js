
exports.up = function(knex) {
  return knex.schema.createTable('messages', function(table) {
    table.string('id').index().unique().notNull();
    table.string('member_id').index().notNull();
    table.text('message').nullable();
    table.enu('direction', ['to', 'from']);
    table.boolean('delivered').nullable();
    table.boolean('contains_approval');
    table.boolean('needs_validation');
    table.boolean('validated');
    table.timestamps();
  }).then(()=>{
    return knex.schema.alterTable('messages', function(table){
      table.foreign('member_id').references('members.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages')
};
