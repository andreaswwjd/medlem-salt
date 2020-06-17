
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admins_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins_groups').insert([
        {id: '1', admin_id: 'uuid1', group_id: 'uuid1'},
        {id: '2', admin_id: 'uuid2', group_id: 'uuid2'},
        {id: '3', admin_id: 'uuid3', group_id: 'uuid3'}
      ]);
    });
};
