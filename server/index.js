/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

const consola = require('consola')
const cookieParser = require('cookie-parser')
const express = require('express');
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const auth = require('./auth.js').router


const app = express();
app.use(cookieParser())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));



// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 8080
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use('/api/v1', require('./api/v1'));
  app.use('/auth', auth);
  app.use(nuxt.render)

  app.listen(port, function() {
    consola.ready({
      message: `Listening at http://${host}:${port}`,
      badge: true
    });
  });
  
}

start()
