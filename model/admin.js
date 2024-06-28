const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSignUpData = new Schema({

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

const Admin = mongoose.model('admin',adminSignUpData)

module.exports = Admin