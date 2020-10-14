const express = require("express")
const router = require("express").Router();
// const passport = require("passport");
const userController = require("../../controllers/userController");
// const ppConfig = require("../../passportConfig/passport")
const User = require("../../models/user");
const { route } = require("./tasks");

// The landing page will have an html for login and create user on the same page.

router.route("/signup")
    .post(userController.createUser)
    
router.route("/login")
    .post(userController.loginUser)


module.exports = router;
