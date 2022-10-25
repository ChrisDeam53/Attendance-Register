const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database");

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
            // allowNull defaults to true
    }
}, {
    // Other model options go here
});

module.exports = User;

//console.log(User === sequelize.models.User); // true