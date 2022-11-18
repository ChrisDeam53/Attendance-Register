const db = require("../models");
const modules = db.module;
const user = db.user;

//findall modules assigned to the user
exports.findall = (req, res) => {
    // Validate request
    if (!req.body.user) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // What functions do we have mazen, please explain :((
}



