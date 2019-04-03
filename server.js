// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');

// Express
var app = express();

// Use morgan and body-parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// Set hbs
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Require routes
var routes = require("./routes/html-routes.js");

// Begin Routes
app.use('/', routes);


var port = process.env.PORT || 8080;
// Listen on port 8080
app.listen(port, function(){
    console.log('Application is up and running on port 8080!');
})