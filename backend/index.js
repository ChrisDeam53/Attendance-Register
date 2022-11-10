const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../backend/database.sqlite"

})

module.exports = sequelize;

//const sequelize = new Sequelize('sqlite::memory:');

const User =
    require("./models/user");
const Module =
    require("./models/module");
const Lesson =
    require("./models/lesson");
const Group =
    require("./models/group");
const Attendance =
    require("./models/attendance");

//Many groups in one module, one module per group
Module.hasMany(Group);
Group.hasOne(Module);

//Many users in 
Module.belongsToMany(User, { through: "User Modules" });
User.belongsToMany(Module, { through: "User Modules" });

//Array of Lessons in a group
Lesson.hasOne(Group);
Group.hasMany(Lesson);

//Array of groups in User, array of users in each group
Group.belongsToMany(User, { through: "User Groups" });
User.belongsToMany(Group, { through: "User Groups" });

//Attendance Table
Lesson.belongsToMany(User, { through: Attendance });
User.belongsToMany(Lesson, { through: Attendance });





sequelize
    .sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })