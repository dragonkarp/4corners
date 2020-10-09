const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
      type:String,
      unique: true
  },
  password: {
      type :String
  }
});

UserSchema.path('email').validate(function (email) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email.text); // Assuming email has a text attribute
 }, 'The e-mail field cannot be empty.')

const User = mongoose.model("User", UserSchema);

<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> 7c44f4ecc2230bfc89caf9d4d1e10e2261035d45
