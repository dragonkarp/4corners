const express = require("express")
const router = require("express").Router();
// const passport = require("passport");
const userController = require("../../controllers/userController");
// const ppConfig = require("../../passportConfig/passport")
const User = require("../../models/user");
const { route } = require("./tasks");
const passport = require("../../config/passport")


// The landing page will have an html for login and create user on the same page.

router.route("/signup")
    .post(userController.createUser)

//Andrew: Adjusted this route to include the passport.authenticate method
router
    .post("/login", passport.authenticate('local'), userController.loginUser)


module.exports = router;
