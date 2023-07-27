const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'project1',
    password: '0987654321'
});

module.exports = pool.promise();