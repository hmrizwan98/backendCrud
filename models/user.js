const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Users", userSchema);

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
//     expiresIn: "7d",
//   });
// };

// const User = mongoose.model("user", userSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     firstName: Joi.string().required().label("First Name"),
//     lastName: Joi.string().required().label("Last Name"),
//     email: Joi.string().email().required().label("Email"),
//     password: passwordComplexity().required().label("First Name"),
//   });
// };

// module.exports = { User, validate };
