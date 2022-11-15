const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../../index");

const Lecturer = sequelize.define('Lecturer', {
    // Model attributes are defined here
}, {
    // Other model options go here
    timestamps: false
});

module.exports = Lecturer;