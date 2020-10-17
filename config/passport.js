const passport = require("passport");
//const { findOne } = require("../models/user");
const LocalStrategy = require("passport-local").Strategy
const db = require("../models/")

// //Andrew Code
// // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
// passport.use(new LocalStrategy(
//     // Our user will sign in using an email, rather than a "username"
//     {
//         usernameField: "email"
//     },
//     function (email, password, done) {
//         // When a user tries to sign in this code runs
//         db.User.findOne({
//             email: email
//         }).then(function (dbUser) {
//             // If there's no user with the given email
//             if (!dbUser) {
//                 return done(null, false, {
//                     message: "Incorrect email."
//                 });
//             }
//             // If there is a user with the given email, but the password the user gives us is incorrect
//             else if (!dbUser.validPassword(password)) {
//                 return done(null, false, {
//                     message: "Incorrect password."
//                 });
//             }
//             // If none of the above, return the user
//             return done(null, dbUser);
//         });
//     }
// ));

// Andrew: adjusted the method for local strategy to grab the email and properly compare if the input password matches the password in the database

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        db.User.getUserByEmail(email, function (err, user) {
            console.log(user)
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }
            db.User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }
));

// email and password are from the client. done is invoked when successfully authenticated.
// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'passwd'
// },
//     (email, password, done) => {
//         User.find({ email }, (err, email) => {
//             // Something went wrong with the database.
//             if (err)
//                 return done(err)
//             //If email does not exist, return error message.
//             if (!email)
//                 return done(null, false, { message: 'Incorrect email' });
//             // Checks if password is correct.
//             User.comparePassword(password.done)
//         })
//     }))

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'passwd'
//   },

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to mak`e it all work
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;
