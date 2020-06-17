
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('members_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('members_tags').insert([
        { member_id: 'uuid1', tag_id: '1' },
        { member_id: 'uuid1', tag_id: '3' }
      ]);
    });
};
