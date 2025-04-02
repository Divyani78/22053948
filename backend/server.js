const express = require("express");
const app = express();

const PORT = process.env.PORT || 5050; // Use environment variable or default to 5050

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
