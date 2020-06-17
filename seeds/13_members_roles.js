
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('members_roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('members_roles').insert([
        { member_id: 'uuid1', role_id: '1' },
        { member_id: 'uuid1', role_id: '3' }
      ]);
    });
};
