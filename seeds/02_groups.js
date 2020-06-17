
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {id: 'uuid1', name: 'Lötenkyrkan', note: null},
        {id: 'uuid2', name: 'Betlehemskyrkan', note: null},
        {id: 'uuid3', name: 'Salt Oskarshamn', note: null}
      ]);
    });
};
