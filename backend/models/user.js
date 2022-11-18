const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index");

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
            // allowNull defaults to true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleType: {
        type: DataTypes.TINYINT,
        defaultValue: 0
            //Integers will represent role types, these will be decided later. Defaults to 0, (lowest level of access)
    }

}, {
    // Other model options go here
    timestamps: false
});

module.exports = User;

//console.log(User === sequelize.models.User); // true