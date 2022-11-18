const db = require("../models");
const module = db.module;
const group = db.group;
const user = db.user;
const usermodule = db.usermodules;


//findall groups assigned to the the module
exports.findall = (req, res) => {
    // Validate request --needs some other validation logic presumably, checking auth token?  no
    if (!req.params.moduleId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //req.<smth>.userName
    //where do you put this???? store in a const, then do res.send ? or res.data = var?
    const result = queryGroups(userId, moduleId);   //They aren't strictly ids, they're just named that




}

async function queryGroups(_userId, _moduleId)
{
    return await sequelize.sync().then(() => {
        group.findall({ //wrong object? yes, those queried properties are not in the group model
            where: {
                userName: _userId,
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
}
