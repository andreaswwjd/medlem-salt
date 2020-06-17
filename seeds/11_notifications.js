
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {id: '1', admin_id: 'uuid1', seen: false, link: '/medlem/uuid1', message: 'Ett sms-svar var otydligt och måste verifieras.'},
        {id: '2', admin_id: 'uuid1', seen: false, link: '/medlem/uuid1', message: 'Dags att skicka ut medlemsförnyelse!'},
        {id: '3', admin_id: 'uuid1', seen: false, link: '/medlem/uuid1', message: 'Arvid har uppdaterat sin info.'},
        {id: '4', admin_id: 'uuid1', seen: false, link: '/medlem/uuid1', message: 'Signe har förnyat sitt medlemskap för 2019!'}
      ]);
    });
};
