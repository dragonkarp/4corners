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

// Andrew: Changed the order of the code here, routes needs to go after passport.initialization and session.
app.use(session({
		secret: 'keyboard cat',
		resave: true,
		saveUninitialized: true
	})
)

// Passport init
app.use(passport.initialize())
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI  || "mongodb://localhost/reacttasklist", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});






