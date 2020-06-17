
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('smstemplates').del()
    .then(function () {
      // Inserts seed entries
      return knex('smstemplates').insert([
        {
          id: '1',
          group_id: 'uuid1',
          trigger: 'continous',
          renewal_message: '',
          revisal_message: '',
          active: true,
        },{
          id: '2',
          group_id: 'uuid1',
          trigger: 'continous',
          renewal_message: '',
          revisal_message: '',
          active: false,
        },
      ]);
    });
};
