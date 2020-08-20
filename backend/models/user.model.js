const mongoose = require('mongoose'); //require mongoose

// mongoose schema
const Schema = mongoose.Schema;

// username schema
const userSchema = new Schema({
  username: {  //single field = username
    //some validations for username below
    type: String, 
    required: true,
    unique: true,
    trim: true, // will trim whitespace
    minlength: 3
  },
}, {
  timestamps: true, //auto create when is create/modify
});

//model
const User = mongoose.model('User', userSchema);
//export 
module.exports = User;