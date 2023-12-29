import mysql from 'mysql2'

const con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ENTER SERVER PASSWORD HERE",
    database: "employeems",
    port: PORT
})

con.connect(function(err){
    if(err){
        console.log("db.js error:", err);
    } else{
        console.log("DB: connected");
    }
})

export default con;