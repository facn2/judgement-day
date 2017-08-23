const express = require('express');
const router = express.Router();

const home = require('./home');
const error = require('./error');

router.get('/', home);
router.use(error.client);
router.use(error.server);

module.exports = router;