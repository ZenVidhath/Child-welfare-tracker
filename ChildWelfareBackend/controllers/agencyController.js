const Agency = require('../models/Agency');

exports.createAgency = async (req, res) => {
    try {
        const data = req.body;
        await Agency.createAgency(data);
        res.status(201).send("Agency created successfully.");
    } catch (error) {
        res.status(500).send("Error creating agency: " + error.message);
    }
};
