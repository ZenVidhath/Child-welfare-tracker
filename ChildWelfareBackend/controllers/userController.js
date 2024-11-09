const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const data = req.body;
        await User.createUser(data);
        res.status(201).send("User created successfully.");
    } catch (error) {
        res.status(500).send("Error creating user: " + error.message);
    }
};
