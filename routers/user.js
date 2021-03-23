// Dependencies
const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/user', userController.post_user);

module.exports = router;