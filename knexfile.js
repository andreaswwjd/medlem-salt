require('dotenv').config()

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASS,
      database: 'salt'
    },
    seeds: {
      directory: './seeds'
    }
  },

  // production: {
  //   client: 'mysql',
  //   connection: process.env.JAWSDB_URL
  // }

};
