const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index");


const Attendance = sequelize.define('Attendance', {
        // Model attributes are defined here
        attendanceValue: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
                //0 for not attended, 1 for attended,2 for excused absence, 3 for late
        },
    }
    // Other model options go here
);


module.exports = Attendance;