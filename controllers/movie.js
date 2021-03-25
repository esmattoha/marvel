// Dependencies
const Movie = require("../models/movie");
const mongoose = require('mongoose');


// Post Operation with Movie Route 
// exports.post_movie = (req, res) => {
//   const movie = new Movie({
//     title: req.body.title,
//     description: req.body.description,
//     releaseDate: req.body.releaseDate,
//     genre: req.body.genre,
//     timeDuration: req.body.timeDuration,
//     point: req.body.point,
//   });
//   movie
//     .save()
//     .then((result) => {
//       res.status(201).send(result);
//     })
//     .catch((err) => {
//       res.status(422).json({
//         message: "Something went wrong , please try some time later! ",
//       });
//     });
// };

// Get operation with Movies route
exports.get_movies = (req, res)=>{
  Movie.find()
  .exec()
  .then(movies =>{
    res.send(movies);
  })
  .catch(err=>{
    return (new Error, err);
  })
};

// Get operation for a paticuler Movie
exports.get_movie = (req,res) =>{
  Movie.findById(req.params.id)
  .exec()
  .then(movie=>{
    if(movie){
      res.send(movie);
    }
    res.satus(404).json({
        message:"Could Not Found " 
      })
  })
  .catch(err=>{
    return (new Error, err);
  })
}
