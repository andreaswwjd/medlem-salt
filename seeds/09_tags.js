
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: '1', group_id: 'uuid1', color: '#BCD89C', name: 'Scout'},
        {id: '2', group_id: 'uuid1', color: '#FFEAAE', name: 'Tonårsgruppen'},
        {id: '3', group_id: 'uuid1', color: '#FFEAAE', name: 'Unga vuxna'}
      ]);
    });
};
