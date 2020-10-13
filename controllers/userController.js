const db = require("../models");
//const { getMaxListeners } = require("../models/task");

// Defining methods for the userController
module.exports = {
// Post to server to ensure user does not exist. Creates user if true. 
    createUser: function(req, res) {
        const { email, password, firstName, lastName, username } = req.body;
        db.User.findOne({ email }, (err, userData) => {
            if (err)
                res.status(500).json({ message : {msgBody : "Error has occured", msgError: true} })
            if (userData)
                res.status(400).json({ message : {msgBody : "Username is already taken", msgError: true} })
            else {
                const newUser = new db.User({ email, password, firstName, lastName, username})
                newUser.save(err => {
                    if (err)
                        res.status(500).json({ message : {msgBody : "Error has occured", msgError: false} })
                    else 
                    res.status(201).json({ message : {msgBody : "Account successfully created! =D", msgError: false} })
                })
            }
        })
    },
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