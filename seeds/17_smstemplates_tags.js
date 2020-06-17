
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('smstemplates_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('smstemplates_tags').insert([
        { smstemplate_id: '1', tag_id: '1' },
        { smstemplate_id: '2', tag_id: '3' }
      ]);
    });
};
