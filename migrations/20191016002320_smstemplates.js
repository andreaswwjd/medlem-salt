
exports.up = function(knex, Promise) {
  return knex.schema.createTable('smstemplates', function(table) {
    table.string('id').index().unique().notNull();
    table.string('group_id').index().notNull();
    table.enu('trigger', ['continous', 'date', 'manual']).notNull();
    table.integer('month').nullable();
    table.integer('date').nullable();
    table.text('renewal_message').nullable().comment('If left empty, default template will be used.');
    table.text('revisal_message').nullable().comment('If left empty, default template will be used.');
    table.boolean('active').notNull();
    table.timestamps();
  }).then(()=>{
    return knex.schema.alterTable('smstemplates', function(table){
    table.foreign('group_id').references('groups.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('smstemplates')
};
