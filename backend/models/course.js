const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index");

const Course = sequelize.define('Course', {
    // Model attributes are defined here
    courseName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseCode: {
        type: DataTypes.STRING
            // allowNull defaults to true
    }

}, {
    // Other model options go here
    timestamps: false
});

module.exports = Course;

//console.log(User === sequelize.models.User); // true