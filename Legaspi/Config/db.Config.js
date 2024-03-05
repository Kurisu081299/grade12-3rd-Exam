const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passsword: '1234',
    database: 'grade12_db',
    connectTimeout: 10000
});

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});