const express = require('express');
const router = express.Router();

const home = require('./home');
const error = require('./error');
const results = require('./results');

router.get('/', home);
router.get('/results', results)
router.use(error.client);
router.use(error.server);

module.exports = router;