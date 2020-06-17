
exports.up = function(knex) {
  return knex.schema.createTable('admins_guides', function(table) {
    table.string('admin_id').index().notNull();
    table.string('guide_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('admins_guides', function(table){
      table.unique(['admin_id', 'guide_id']);
      table.foreign('admin_id').references('admins.id').onDelete('CASCADE');
      table.foreign('guide_id').references('guides.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('admins_guides')
};
