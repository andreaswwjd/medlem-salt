
exports.up = function(knex) {
  return knex.schema.createTable('members_filters', function(table) {
    table.string('member_id').index().notNull();
    table.string('filter_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('members_filters', function(table){
      table.unique(['member_id', 'filter_id']);
      table.foreign('member_id').references('members.id').onDelete('CASCADE');
      table.foreign('filter_id').references('filters.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('members_filters')
};
