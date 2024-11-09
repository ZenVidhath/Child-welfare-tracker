const Child = require('../models/Child');

exports.reportChild = async (req, res) => {
    try {
        const data = req.body;
        await Child.createChild(data);
        res.status(201).send("Child reported successfully.");
    } catch (error) {
        res.status(500).send("Error reporting child: " + error.message);
    }
};

exports.getAllUnfoundChildren = async (req, res) => {
    try {
        const children = await Child.getUnfoundChildren();
        res.json(children);
    } catch (error) {
        res.status(500).send("Error retrieving children: " + error.message);
    }
};
