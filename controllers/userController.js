const db = require("../models");


module.exports = {
  // Post to server to ensure user does not exist. Creates user if true. 
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

    db.User.createUser(newUser, function (err, user) {
      if (err) throw err;
      res.send(user).end()
    });
  },

  // Andrew: when a log in is successful, this creates the req.user
  loginUser: function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log("User created:", req.user)
    res.json(req.user);
  }
}