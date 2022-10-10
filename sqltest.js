const mysql = require('mysql2');
const connection = mysql.createConnection(config);

var config = {
    server: 'LAPTOP-9RL4OPHU', //update me
    userName: 'admin', //update me
    password: 'admin' //update me
};

connection.on('connect', function(err) {
    // If no error, then good to proceed.
    console.log("Connected");
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end(function(err) {
    // The connection is terminated now
});