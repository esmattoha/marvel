// Dependencies
const express = require('express');
const movieController = require('../controllers/movie');

const router = express.Router();

router.post('/movie', movieController.post_movie);

module.exports = router;