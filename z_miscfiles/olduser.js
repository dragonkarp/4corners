const passport = require("passport");
const db = require("../models");

// Defining methods for the userController
module.exports = {

    createUser: function (req, res) {

        console.log("IN THE CONTROLLER")
        var newUser = new db.User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
          });
      
          db.User.createUser(newUser, function(err, user){
            if(err) throw err;
            res.send(user).end()
          });
        
    },

    loginUser: function(req, res) {
        passport.authenticate('local')
        console.log(req.user)
        res.send(req.user);

    }
};


// findTest: function(req, res) {
//     db.User
//       .find({})
//       .then(console.log("TEST"))
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
// },
// postTest: function(req, res) {
//     db.User
//         .create(req.body)
//         .then(console.log("TEST POST..."))
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
// }





//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }

// (req, res) {
//     const { email, password } = req.body;
//     User.findOne({ email }, (err, userData) => {
//         if (err)
//             res.status(500).json({ message : {msgBody : "Error has occured", msgError: true} })
//         if (userData)
//             res.status(400).json({ message : {msgBody : "Username is already taken", msgError: true} })
//         else {
//             const newUser = new User({ username, password })
//             newUser.save(err => {
//                 if (err)
//                 res.status(201).json({ message : {msgBody : "Account created!", msgError: false} })
//             })
//         }
//     })
// }


