
exports.up = function(knex) {
  return knex.schema.createTable('members_roles', function(table) {
    table.string('member_id').index().notNull();
    table.string('role_id').index().notNull();
  }).then(()=>{
    return knex.schema.alterTable('members_roles', function(table){
      table.unique(['member_id', 'role_id']);
      table.foreign('member_id').references('members.id').onDelete('CASCADE');
      table.foreign('role_id').references('roles.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('members_roles')
};
