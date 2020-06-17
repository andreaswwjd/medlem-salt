/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

const jsonwebtoken = require('jsonwebtoken')
const jwt = require('express-jwt')
const pathToRegexp = require('path-to-regexp')
const express = require('express')
const router = express.Router()
const { Admin, Member } = require('./models')
const crypto = require('crypto');

const SECRET = "dummy" // TODO replace with env something
router.use( 
  jwt({
    secret: SECRET,
    getToken(req) {
        return req.cookies.access_token;
    }
  }).unless({
      path: [pathToRegexp('/auth/login')]
  })
);

router.post('/login', function(req, res, next) {
    !!req.body.username ? loginFn(req, res, next) : checkIdFn(req, res, next)
});

router.get('/user', (req, res, next) => {
    res.json({ user: req.user })
});

router.post('/logout', (req, res, next) => {
    res.clearCookie("access_token");
    res.json({ status: 'OK' });
});


function loginFn(req, res, next) {
  console.log('Login...')
  const { username, password } = req.body

  new Admin({ "email": username }).fetch({withRelated: ['groups']})
    .then((user)=>{
      user = user.toJSON()

      const hash = crypto.createHash('sha256');
      hash.update(password + user.salt);
      const pass_hash = hash.digest('hex');

      if (pass_hash != user.pass_hash) {
          console.log('pwd', pass_hash, user.pass_hash)
          throw new Error('Invalid username or password')
      }

      const accessToken = jsonwebtoken.sign({
          id: user.id,
          name: user.firstname+' '+user.lastname,
          email: user.email,
          tel: user.tel,
          scope: [user.scope],
          groups: user.groups,
          groups_ids: user.groups.map(group => group.id)
      }, SECRET);

      res.cookie('access_token', accessToken)
      res.json({
          token: { accessToken }
      });

    })
    .catch((e)=>{
      res.status(401).send('Invalid username or password');
    })
}

function checkIdFn(req, res, next) {
  console.log('Check...')
  const { pnr, id } = req.body

  new Member({ pnr, id }).fetch({withRelated: ['group','attended_at']})
    .then((user)=>{
      user = user.toJSON()

      const hash = crypto.createHash('sha256');
      hash.update(pnr);
      const pnr_hash = hash.digest('hex');

      if (pnr_hash != user.pnr_hash) {
          throw new Error('Invalid check')
      }

      const accessToken = jsonwebtoken.sign({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          tel: user.tel,
          kontakt_via_målsman: user.kontakt_via_målsman,
          scope: ['member'],
          group: user.group,
          attended_at: user.attended_at
      }, SECRET);

      res.cookie('access_token', accessToken)
      res.json({
          token: { accessToken }
      });

    })
    // .catch((e)=>{
    //   res.status(401).send('Invalid check');
    // })

}


const checkScope = function(scopes) {
  return [router, function (req, res, next) {
    const { scope } = req.user;
    if (!!scope && scopes.some(role => scope.includes(role))) {
      next()
    } else {
      throw new Error('Unauthorized')
    }
  }]
}

router.use((err, req, res, next) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
});

module.exports.checkScope = checkScope;
module.exports.router = router;