const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryData = new Schema({
    categoryName : {
        type : String,
        required : true,
    }
})

const Category = mongoose.model('category',categoryData)

module.exports = Category