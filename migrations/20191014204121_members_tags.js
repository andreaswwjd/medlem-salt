
exports.up = function(knex) {
  return knex.schema.createTable('members_tags', function(table) {
    table.string('member_id').index().notNull();
    table.string('tag_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('members_tags', function(table){
      table.unique(['member_id', 'tag_id']);
      table.foreign('member_id').references('members.id').onDelete('CASCADE');
      table.foreign('tag_id').references('tags.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('members_tags')
};
