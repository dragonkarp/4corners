const passport = require("passport");
const { findOne } = require("../models/user");
const LocalStrategy = require("passport-local").Strategy 
const User = require("./models/User")

// email and password are from the client. done is invoked when successfully authenticated.
passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({ email }, (err, email) => {
        // Something went wrong with the database.
        if (err)
            return done(err)
        //If email does nto exist, return error message.
        if (!email)
            return done(null, false, { message: 'Incorrect email' });
        // Checks if password is correct.
        email.comparePassword(password.done)
    })
}))
