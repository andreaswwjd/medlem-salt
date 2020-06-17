
exports.up = function(knex) {
  return knex.schema.createTable('events_members', function(table) {
    table.string('id').index().unique().notNull();
    table.string('event_id').index().notNull();
    table.string('member_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('events_members', function(table){
      table.unique(['event_id', 'member_id']);
      table.foreign('event_id').references('events.id').onDelete('CASCADE');
      table.foreign('member_id').references('members.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('events_members')
};
