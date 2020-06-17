
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('filters').del()
    .then(function () {
      // Inserts seed entries
      return knex('filters').insert([
        {id: '1', group_id: 'uuid1', color: '#FAFAFA', condition: 'age > 26', name: '>26år'},
      ]);
    });
};
