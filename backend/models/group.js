const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index");

const Group = sequelize.define('Group', {
    // Model attributes are defined here
    groupType: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false //False is Lecture, True is Tutorial
    },
    // allowNull defaults to true
}, {
    timestamps: false
        // Other model options go here
});


module.exports = Group;