const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

router.post('/create', logController.createLog);

module.exports = router;
