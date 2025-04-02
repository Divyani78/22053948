const mysql = require("mysql2");

// Create a connection
const connection = mysql.createConnection({
  host: "localhost", // Change if using a remote DB
  user: "root", // Your MySQL username
  password: "yourpassword", // Your MySQL password
  database: "yourdatabase", // Your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
    return;
  }
  console.log("Connected to MySQL database ✅");
});

module.exports = connection;
