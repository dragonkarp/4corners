const passport = require("passport");
//const { findOne } = require("../models/user");
const LocalStrategy = require("passport-local").Strategy 
const User = require("../models/user")

// email and password are from the client. done is invoked when successfully authenticated.
passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({ email }, (err, email) => {
        // Something went wrong with the database.
        if (err)
            return done(err)
        //If email does not exist, return error message.
        if (!email)
            return done(null, false, { message: 'Incorrect email' });
        // Checks if password is correct.
        User.comparePassword(password.done)
    })
}))

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to mak`e it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
