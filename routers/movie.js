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

router.post('/movie', upload.single('imageUrl'), (req, res)=>{
    console.log(req.file);
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        genre: req.body.genre,
        timeDuration: req.body.timeDuration,
        point: req.body.point,
      });
      movie
        .save()
        .then((result) => {
          res.status(201).send(result);
        })
        .catch((err) => {
          res.status(422).json({
            message: "Something went wrong , please try some time later! ",
          });
        });
});

router.get('/movies' , movieController.get_movies);

router.get('/movie/:id', movieController.get_movie);

module.exports = router;