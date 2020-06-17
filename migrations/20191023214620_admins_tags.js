
exports.up = function(knex) {
  return knex.schema.createTable('admins_tags', function(table) {
    table.string('id').index().unique().notNull();
    table.string('admin_id').index().notNull();
    table.string('tag_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('admins_tags', function(table){
      table.foreign('admin_id').references('admins.id').onDelete('CASCADE');
      table.foreign('tag_id').references('tags.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('admins_tags')
};
