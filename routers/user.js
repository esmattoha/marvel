// Dependencies
const express = require('express');

// Routes import 
const userController = require('../controllers/user');              

const router = express.Router();

router.post('/signup', userController.post_SignUp);

router.post('/login', userController.post_Login);

module.exports = router;