const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../index");

const CourseLeader = sequelize.define('Course Leader', {
    // Model attributes are defined here
}, {
    // Other model options go here
    timestamps: false
});

module.exports = CourseLeader;