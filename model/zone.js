const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const zoneData = new Schema({

    zoneName: {
        type: String,
        required: true,
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

const Zone = mongoose.model('zone', zoneData)

module.exports = Zone