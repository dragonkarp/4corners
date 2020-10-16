const express = require("express");
const dotenv = require('dotenv');
dotenv.config()


// // const passport = require('./passport');
// const passport = require('./passportConfig');
// const session = require('express-session');

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// app.use(
// 	session({
// 		secret: process.env.APP_SECRET || 'anything',
// 		resave: false,
// 		saveUninitialized: false
// 	})
// )

// //set up
// app.use(passport.initialize())
// app.use(passport.session());


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacttasklist", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});






