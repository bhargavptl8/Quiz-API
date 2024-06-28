const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategoryData = new Schema({

    subCategoryName: {
        type: String,
        required: true,
    },
    categoryInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
})

const SubCategory = mongoose.model('subCategory', subCategoryData)

module.exports = SubCategory