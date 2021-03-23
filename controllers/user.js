// Dependencies
const User = require('../models/user');


exports.post_user = (req, res) =>{
    const  user = new User({
        gmail: req.body.gmail ,
        password : req.body.password
    });
    user.save()
    .then((result) =>{
        res.status(201).send(result);
    })
    .catch(err =>{
        res.status(422).json({
            message:"Something Went Wrong , Please Try Again!"
        })
    })
}

