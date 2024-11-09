const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
    try {
        const data = req.body;
        await Notification.createNotification(data);
        res.status(201).send("Notification created successfully.");
    } catch (error) {
        res.status(500).send("Error creating notification: " + error.message);
    }
};
