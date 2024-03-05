const mysql=require("mysql2");
const dotenv=require("dotenv").config();
const dbConn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'grade12_db'
})

dbConn.connect(function(err){
    if(err) throw err;
    console.log ("database connected");
})
module.exports = dbConn;