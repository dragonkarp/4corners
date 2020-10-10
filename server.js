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
// app.use(express.static("client/build"));

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

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});
//|| "mongodb://localhost/reacttasklist"

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



 // "scripts": {
  //   "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
  //   "start:prod": "node server.js",
  //   "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run build\" ",
  //   "client": "cd client && npm run start",
  //   "seed": "node scripts/seedDB.js",
  //   "install": "cd client && npm install",
  //   "build": "cd client && npm run build",
  //   "heroku-postbuild": "npm run build"
  // },