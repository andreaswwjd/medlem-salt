
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admins_guides').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins_guides').insert([
        {admin_id: 'uuid1', guide_id: '1'}
      ]);
    });
};
