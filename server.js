// DEPENDENCIES
var friends = require('./app/data/friends.js');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRouting = require('./app/routing/apiRoutes.js'); 
var htmlRouting = require('./app/routing/htmlRoutes.js');

// SETUP EXPRESS APP
var app = express();
var PORT = process.env.PORT || 3000;

// SETUP BODY PARSERS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
app.use(htmlRouting);
app.use(apiRouting);

//Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

