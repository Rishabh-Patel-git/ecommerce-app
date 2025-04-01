const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080; // Azure provides PORT dynamically

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, "dist/ecommerce-app")));

// Catch-all route to serve index.html for Angular routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/ecommerce-app", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
