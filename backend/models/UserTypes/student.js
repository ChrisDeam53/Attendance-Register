const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../index");

const Student = sequelize.define('Student', {
    // Model attributes are defined here
}, {
    // Other model options go here
    timestamps: false
});

module.exports = Student;