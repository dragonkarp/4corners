// const passport = require("passport");
// //const { findOne } = require("../models/user");
// const LocalStrategy = require("passport-local").Strategy 
// const User = require("../models/user")


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.getUserByUsername(username, function(err, user){
//         if(err) throw err;
//         if(!user){
//           return done(null, false, {message: 'Unknown User'});
//         }
//         User.comparePassword(password, user.password, function(err, isMatch){
//           if(err) throw err;
//            if(isMatch){
//              return done(null, user);
//            } else {
//              return done(null, false, {message: 'Invalid password'});
//            }
//        });
//      });
//     }
//   ));

// email and password are from the client. done is invoked when successfully authenticated.
// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'passwd'
//     }, 
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
//     })
// }))

// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'passwd'
//   },

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to mak`e it all work
// passport.serializeUser(function (user, cb) {
//     cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
// });
