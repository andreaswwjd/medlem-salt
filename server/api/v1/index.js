/*jshint esversion: 6 */
/*jslint node: true */
'use strict';

var express = require('express');
var router = express.Router();
var { checkScope } = require('../../auth');

router.use('/me', checkScope(['member']), require('./me'));
router.use('/members', checkScope(['admin', 'leader']), require('./members'));
router.use('/groups', checkScope(['admin', 'leader']), require('./groups'));
router.use('/tags', checkScope(['admin', 'leader']), require('./tags'));


module.exports = router;
