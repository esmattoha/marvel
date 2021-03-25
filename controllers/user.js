// Dependencies
const User = require("../models/user");
const bcrypt = require("bcrypt");

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
  .then(result =>{
    if(!result){
      res.status(404).json({
        message:"Invalid Email , please try again! "
      })
    }
    bcrypt.compare(password, result.password)
    .then(isMatch=>{
      if(isMatch){
        res.status(201).json({
          message:" Login Successfull! "
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
