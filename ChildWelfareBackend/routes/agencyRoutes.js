const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agencyController');

router.post('/create', agencyController.createAgency);

module.exports = router;
