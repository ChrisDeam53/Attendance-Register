const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index");

const Group = sequelize.define('Group', {
    // Model attributes are defined here
    groupType: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    lecturer: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // allowNull defaults to true
}, {
    // Other model options go here
});


module.exports = Group;