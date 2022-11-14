const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../index");

const AcademicAdvisor = sequelize.define('Academic Advisor', {
    // Model attributes are defined here
}, {
    // Other model options go here
    timestamps: false
});

module.exports = AcademicAdvisor;