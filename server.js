const express = require("express");
const dotenv = require('dotenv'); 
dotenv.config()
const mongoose = require("mongoose");
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
const routes = require("./routes");
const app = express();
const session = require('express-session');
const passport = require('passport');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Session


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session())

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacttasklist", { //|| "mongodb://localhost/reacttasklist" //Removed local for Michael's dev purposes.
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});




// var express  = require('express');
// var app      = express();
// var port     = process.env.PORT || 3000;
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
// var mongoose = require('mongoose');
// var passport = require('passport');
// var User = require('./models/user')
