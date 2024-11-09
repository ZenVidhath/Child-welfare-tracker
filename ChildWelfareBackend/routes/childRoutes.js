const express = require('express');
const router = express.Router();
const childController = require('../controllers/childController');

router.post('/report', childController.reportChild);
router.get('/unfound', childController.getAllUnfoundChildren);

module.exports = router;
