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
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYTScrape";
// mongodb://<dbuser>:<dbpassword>@ds253831.mlab.com:53831/heroku_75svw2wg

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);


// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
//Things to do: TESTING MODE: Does everything work? Variables, info gets to db, 
//making sure users can save notes, making sure hbs variables are pulling correctly ==============
//make sure hbs variables match our db
//connect to mongo as NYTScrape
// Make sure info reaches db
// Try to create a note and save it
// check instructions to see if another view is required.
// JS REACT DEVELOPER- drawing in js knowledge/ intermediate to advanced javascript coder as a current goal

// -- memorize 5-7 array methods
