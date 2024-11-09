const Log = require('../models/Log');

exports.createLog = async (req, res) => {
    try {
        const data = req.body;
        await Log.createLog(data);
        res.status(201).send("Log created successfully.");
    } catch (error) {
        res.status(500).send("Error creating log: " + error.message);
    }
};
