
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('guides').del()
    .then(function () {
      // Inserts seed entries
      return knex('guides').insert([
        {
          id: '1',
          index: '1',
          title: 'Title 1',
          content: '<p>Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Aut magni dolore eius unde ea nemo sunt, veritatis tenetur consequatur explicabo nihil. Ab ratione vel ipsa quos. Nobis hic odit accusantium.</p>',
        },
        {
          id: '2',
          index: '2',
          title: 'Title 2',
          content: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni dolore eius unde ea nemo sunt, veritatis tenetur consequatur explicabo nihil. Ab ratione vel ipsa quos. <br> Nobis hic odit accusantium.</p>',
        }
      ]);
    });
};