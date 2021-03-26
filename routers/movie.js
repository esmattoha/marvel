// Dependencies
const express = require('express');
const multer = require('multer');

const movieController = require('../controllers/movie');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });

function fileFilter(req, file ,cb ){
    if(file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" || 
        file.mimetype === "image/png"){
          cb(null , true);
    }
    else{
      cb(null, false);
    }
} 

const upload = multer({storage: storage , fileFilter });

// const movieController = require('../controllers/movie');
const Movie = require('../models/movie');

const router = express.Router();

router.post('/movie', upload.single('imagePath'), movieController.post_movie);

router.get('/movies' , movieController.get_movies);

router.get('/movie/:id', movieController.get_movie);

module.exports = router;