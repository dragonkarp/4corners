const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
      type:String,
      unique: true,
      required: true
  },
  username: {
      type: String,
      unique: true,
      min: 6,
      max: 15,
      required: true
  },
  password: {
      type :String,
      min: 8,
      max: 15,
      required: true
  },
});

// Hash the password.
UserSchema.pre("save", function(next) {
    if (!this.isModified('password'))
        return next();
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err)
            return next(err);
        this.password = passwordHash;
        next();
    })
})

UserSchema.method.comparePassword = function(password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return cb(err);
        else {
            // isMatch is a bool.
            if (!isMatch)
                return cb(null, isMatch, { message: "Invalid password." }); // Returns error is password does not match the password in the database. -mike li
            return cb(null, this) // "this" is the user. It is returned if the password is correct. -mike li
        }
    })
}


const User = mongoose.model("User", UserSchema);

module.exports = User;




// UserSchema.path('email').validate(function (email) {
//     var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//     return emailRegex.test(email.text); // Assuming email has a text attribute
//  }, 'The e-mail field cannot be empty.')