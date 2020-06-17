const crypto = require('crypto');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {id: 'uuid1', email: 'a@wapi.se', tel: null, firstname: 'Andreas', lastname: 'Lundström', scope: 'leader', password: 'a123!'},
        {id: 'uuid2', email: 'm@wapi.se', tel: null, firstname: 'Markus', lastname: 'Holmström', scope: 'leader', password: 'm123!'},
        {id: 'uuid3', email: 's@wapi.se', tel: null, firstname: 'Samuel', lastname: 'Erdtman', scope: 'admin', password: 's123!'}
      ].map(row => {
        const hash = crypto.createHash('sha256');
        row.salt = crypto.randomBytes(64).toString('hex');
        hash.update(row.password + row.salt);
        row.pass_hash = hash.digest('hex')
        delete row.password;
        return row;
      }));
    });
};

