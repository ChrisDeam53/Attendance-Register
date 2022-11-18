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
    moduleLeader: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    // Other model options go here
    timestamps: false
});




module.exports = Module;