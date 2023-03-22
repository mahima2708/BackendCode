const sql= require('mysql2');

const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodecomplete',
    password: 'root'
});

module.exports = pool.promise();
