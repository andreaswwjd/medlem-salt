
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        {
          id: '1',
          thread_id: '1',
          admin_id: 'uuid1',
          message: encodeURI('Finns det nåt sätt att ändra en medlems personnummer? Det råkade bli fel!')
        },{
          id: '2',
          thread_id: '1',
          admin_id: 'uuid1',
          message: encodeURI('Ja! Om du går höverklickar på personnummret så kan du välja "redigera".')
        },{
          id: '3',
          thread_id: '2',
          admin_id: 'uuid1',
          message: encodeURI('Hej! Vad tycker ni om nya registret? Har ni feedback på nåt som skulle kunna bli bättre?')
        },
      ]);
    });
};
