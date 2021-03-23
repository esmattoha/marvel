// Dependencies 
const mongoose = require('mongoose');


const Schema = mongoose.Schema;               // Schema Define


const UserSchema = new Schema({             // Create a New Schema 
    gmail:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);    // Export MovieSchema
