
exports.up = function(knex) {
  return knex.schema.createTable('admins_groups', function(table) {
    table.string('id').index().unique().notNull();
    table.string('admin_id').index().notNull();
    table.string('group_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('admins_groups', function(table){
      table.foreign('admin_id').references('admins.id').onDelete('CASCADE');
      table.foreign('group_id').references('groups.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('admins_groups')
};
