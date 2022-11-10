const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index");


const Module = sequelize.define('Module', {
    //attributes go in here
    moduleCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    moduleName: {
        type: DataTypes.STRING,
        allowNull: false

    },
    courseLeader: {
        type: DataTypes.STRING,
        allowNull: true
    },
    moduleLeader: {
        type: DataTypes.STRING,
        allowNull: true
    },

}, {
    // Other model options go here
});




module.exports = Module;