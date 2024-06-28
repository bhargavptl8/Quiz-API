const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologyData = new Schema({

    technologyName: {
        type: String,
        required: true,
    },
    zoneInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'zone'
    },
    subCategoryInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'subCategory'
    },
    categoryInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
})

const Technology = mongoose.model('technology', technologyData)

module.exports = Technology