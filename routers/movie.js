// Dependencies
const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../upload/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });

const upload = multer({ storage: storage});

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

module.exports = router;