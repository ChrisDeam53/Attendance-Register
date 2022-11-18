const db = require("../models");
const modules = db.module;
const user = db.user;
const usermodules = db.usermodules

//findall modules assigned to the user
exports.findall = (req, res) => {
    // Validate request
    if (!req.body.user) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const userId = user.findOne({
        where: {
            username: req.params.username
        }
    })
    .then
    const usermodules = usermodules.findall({ 
        where: {
            userId: userId
        },
        attributes: ['ModuleId']
    }) 
    .then
    const modules = await module.findall({
        where: {
            id: usermodules
        }
    })
    
    
}






