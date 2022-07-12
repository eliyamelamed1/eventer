const express = require('express');
const { trying } = require('../controllers/account');
const asyncWrapper = require('../middleware/asyncWrapper');
const router = express.Router();

router.route('/').get(trying);

module.exports = router;
