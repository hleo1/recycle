"use strict";

const mysql = require("mysql");

const config = {
  host: "regenizedb.cqd3aklkco2y.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "fs_regenize",
  password: "byronschildren",
  database: "fs_regenize"
};

var connection = mysql.createConnection(config);
connection.connect(err => {
  if (err){
    console.log(err);
  } else{
    console.log("Database Connected: " + config.host + ":" + config.port);
  }
  
});

module.exports = connection;