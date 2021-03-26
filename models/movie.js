// Dependencies 
const mongoose = require('mongoose');


const Schema = mongoose.Schema;               // Schema Define


const MovieSchema = new Schema({             // Create a New Schema 
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    releaseDate:{
        type: String,
        required: true
    },
    genre:{
        type:String,
        required: true
    },
    timeDuration:{
        type: String,
        required:true
    },
    point:{
        type: Number,
        required: true
    },
    imagePath:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Movie', MovieSchema);    // Export MovieSchema
