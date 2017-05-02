
var mysql = require("mysql");
var private = require("../ignore/password.js");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: private.private,
  database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
