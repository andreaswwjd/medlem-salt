
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: '1', name: 'Livskraft Norr', year: 2019, note: null },
        {id: '2', name: 'Livsväg',        year: 2019, note: null },
        {id: '3', name: 'Patrullriks',    year: 2019, note: null }
      ]);
    });
};
