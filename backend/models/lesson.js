const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index");

const Lesson = sequelize.define('Lesson', {
    //attributes go in here
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
}, {
    // Other model options go here
});


module.exports = Lesson;