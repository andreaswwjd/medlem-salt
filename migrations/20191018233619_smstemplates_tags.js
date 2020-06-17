
exports.up = function(knex) {
  return knex.schema.createTable('smstemplates_tags', function(table) {
    table.string('smstemplate_id').index().notNull();
    table.string('tag_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('smstemplates_tags', function(table){
      table.unique(['smstemplate_id', 'tag_id']);
      table.foreign('smstemplate_id').references('smstemplates.id').onDelete('CASCADE');
      table.foreign('tag_id').references('tags.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('smstemplates_tags')
};
