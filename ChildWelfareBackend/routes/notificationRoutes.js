const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/create', notificationController.createNotification);

module.exports = router;
