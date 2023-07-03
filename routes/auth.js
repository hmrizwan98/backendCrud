// const router = require("express").Router();
// const user = require("../models/user");
// const Joi = require("joi");

// router.post("/", async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error) {
//       return res.status(400).send({ message: error.details[0].message });
//     }
//     if (!user) {
//       return res.status(401).send({ message: "Invalid Email or Password" });
//     }
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!validPassword) {
//       return res.status(401).send({ message: "Invalid Email or Password" });
//     }
//     const token = user.generateAuthToken();
//     res.status(200).send({ data: token, message: "Logged in successfully" });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// const validate = (data) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required().label("Email"),
//     password: Joi.string().required().label("Password"),
//   });
//   return schema.validate(data);
// };

const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
// router.post("/");

module.exports = router;
