const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSignUpData = new Schema({

    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    favoriteLanguage : {
        type : String,
        required : true,
    },
    profession : {
        type : String,
        required : true,
    },
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
  
})

const User = mongoose.model('user',userSignUpData)

module.exports = User