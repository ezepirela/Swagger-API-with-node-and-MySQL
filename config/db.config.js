const { createPool } = require('mysql2');

const db = createPool({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '04021998eze',
    database: 'heroku_12f1937794459fe',
    connectionLimit: 10
});

module.exports = db;