// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// buat koneksi database menggunakan method createConnection
const db = mysql.createConnection({
    // host, user, password, database
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// connect ke db
db.connect((err) => {
    if (err) {
        console.log("Error connecting" + err.stack);
        return;
    }
    else {
        console.log("Connected to database");
        return;
    }
});

// export db
module.exports = db;