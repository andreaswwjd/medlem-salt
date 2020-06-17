
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: '1', color: '#FAFAFA', name: 'Styrelseledarmot'},
        {id: '2', color: '#FAFAFA', name: 'Ordförande'},
        {id: '3', color: '#FAFAFA', name: 'Kassör'}
      ]);
    });
};
