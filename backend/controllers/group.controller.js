const db = require("../models");
const module = db.module;
const group = db.group;
const user = db.user;
const usermodule = db.usermodules;

//findall groups assigned to the the module
async function findall(req, res) {
    const moduleId = req.params.moduleId;

    // const user; //await models.user.findByPk(id);    //should be able to get username, which object is that stored in?

    //check if the user is a student or lecturer? 


    const groups = await sequelize.sync().then(() => {
        group.findall({ //wrong object? yes, those queried properties are not in the group model
            where: {
                userName: _userId, //you need link tables to do this properly
                courseCode: _moduleId
                    //conditionals
            }
        }).then(() => {
            console.log("Successful query")
        }).catch((error) => {
            console.error('Query error : ', error);
        });
    }).catch((error) => {
        console.error('Sync error : ', error);
    });

    if (groups) {
        res.status(200).json(groups);
    } else {
        res.status(404).send('404 - Not found');
    }

}

module.exports = {
    findall,
}