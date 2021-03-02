//Dependencies
var mysql = require("mysql");
 
// conecction to mysql info
var connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Mtaitano01",
  database: "burgers_db"
});

// this function makes the connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM.
module.exports = connection;