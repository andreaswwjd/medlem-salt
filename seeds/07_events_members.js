
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events_members').del()
    .then(function () {
      // Inserts seed entries
      return knex('events_members').insert([
        {id: '1', event_id: '1', member_id: 'uuid1'},
      ]);
    });
};
