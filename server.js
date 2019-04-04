// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

// Set up port
var PORT = process.env.PORT || 8080;

// Set up Express App
var app = express();

// Require routes
var routes = require("./routes/api")

// Designate our public folder as a static directory
app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have every request go through route middleware
app.use(routes);

// Use the deployed database or local

// Connect to the Mongo DB
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dbname”;

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);


// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});