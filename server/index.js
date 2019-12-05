const express = require("express");
const mongoose = require("mongoose");
const routes = require("../routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3002;

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// ROUTES
app.use(routes);

// Define any API routes before this runs
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/topnotch_db");

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});