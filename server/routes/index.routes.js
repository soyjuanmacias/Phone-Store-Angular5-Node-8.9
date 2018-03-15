const express = require('express');
const router = express.Router();
const phones = require('./phones.routes');

router.use('/phones', phones);

module.exports = router;