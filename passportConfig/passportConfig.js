const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require("../models/user")

passport.serializeUser((user, done) => {
	console.log('serialize user')
	console.log(user)
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ')
	User.findOne(
		{ _id: id }).then(
			(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

passport.use( new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		User.findOne({ email: email }, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userMatch)
		})
	}
))


module.exports = passport; 