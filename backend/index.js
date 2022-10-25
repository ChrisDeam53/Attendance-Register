const sequelize = require("./database");
//const sequelize = new Sequelize('sqlite::memory:');

const User = require("./models/user");

sequelize
    .sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })