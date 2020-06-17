
exports.up = function(knex, Promise) {
  return knex.schema.createTable('members', function(table) {
    table.string('id').index().unique().notNull();
    table.string('pnr_hash').index().unique().notNull();
    table.string('pnr').index().unique().notNull();
    table.string('firstname').notNull();
    table.string('lastname').notNull();
    table.boolean('kontakt_via_målsman');
    table.string('email').index().nullable();
    table.string('tel').index().nullable();
    table.text('note').nullable();
    table.string('group_id').index().notNull();
    // FLOOR((CONCAT(SUBSTR(CURDATE(),1,4), SUBSTR(CURDATE(),6,2), SUBSTR(CURDATE(),9,2)) - SUBSTR(pnr,1,8)) / 10000) AS age
    table.timestamps();
  }).then(()=>{
    return knex.schema.alterTable('members', function(table){
    table.foreign('group_id').references('groups.id').onDelete('CASCADE');
    })
  })
  .then(()=>{
    return knex.schema.raw(`CREATE VIEW _members AS 
    SELECT *, (FLOOR((CURDATE() - SUBSTR(pnr,1,8)) / 10000)) AS age FROM members;`)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('members')
};
