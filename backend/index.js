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

User.hasMany(Lesson);
User.hasMany(Group);
User.hasMany(Attendance);
Module.hasMany(Group);
Module.hasMany(User);
Lesson.hasOne(Group);
Group.hasMany(User);
Group.hasMany(Lesson);
Attendance.hasMany(User);
Attendance.hasOne(Lesson);



sequelize
    .sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })