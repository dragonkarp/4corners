const express = require("express");
<<<<<<< HEAD




// // const passport = require('./passport');
// const passport = require('./passportConfig');
// const session = require('express-session');





=======
const passport = require('./passport')
const session = require('express-session')
>>>>>>> 7c44f4ecc2230bfc89caf9d4d1e10e2261035d45
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

<<<<<<< HEAD




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




=======
app.use(
	session({
		secret: process.env.APP_SECRET || 'anything',
		resave: false,
		saveUninitialized: false
	})
)

//set up
app.use(passport.initialize())
app.use(passport.session());
>>>>>>> 7c44f4ecc2230bfc89caf9d4d1e10e2261035d45
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reacttasklist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
