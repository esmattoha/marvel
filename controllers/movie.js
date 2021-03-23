// Dependencies
const Movie = require("../models/movie");

exports.post_movie = (req, res) => {
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
    //   res.status(422).json({
    //     message: "Something went wrong , please try some time later! ",
    //   });
    console.log(err);
    });
};
