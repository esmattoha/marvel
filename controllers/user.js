// Dependencies
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const jwtOptions = {};
jwtOptions.secrectOrKey = "thisIsASecretKey";

// Post operation with User Sign_up route
exports.post_SignUp = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, 12).then((hashPassword) => {
    const user = new User({
      email: email,
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

// Post operation with User Login Route
exports.post_Login =(req, res ) =>{
  const email = req.body.email ; 
  const password = req.body.password ;

  User.findOne({ email : email})
  .exec()
  .then(user =>{
    if(!user){
      res.status(404).json({
        message:"Invalid Email , please try again! "
      })
    }
    bcrypt.compare(password, user.password)
    .then(isMatch=>{
      if(isMatch){
        const payload = ({ id: user._id});
        const token =jwt.sign(payload, jwtOptions.secrectOrKey);
        res.json({
          message:'Okay',
          token
        })
      }
      else{
        res.status(422).json({
          message:"Invalid Email or password! "
        })
      }
    })
  })
  .catch(err=>{
    res.status(422).json({
      message:" Something went wrong , Wait a second! "
    })
  })
}
