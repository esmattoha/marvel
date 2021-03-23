// Dependencies
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Post operation with User Sign_up route
exports.post_user = (req, res) => {
  const gmail = req.body.gmail;
  const password = req.body.password;

  bcrypt.hash(password, 12).then((hashPassword) => {
    const user = new User({
      gmail: gmail,
      password: hashPassword,
    });
    user
      .save()
      .then((result) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        res.status(422).json({
          message: "Something Went Wrong , Please Try Again!",
        });
      });
  });
};
