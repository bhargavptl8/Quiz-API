const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionAnsData = new Schema({

    question: {
        type: String,
        required: true,
    },
    optionA: {
        type: String,
        required: true,
    },
    optionB: {
        type: String,
        required: true,
    },
    optionC: {
        type: String,
        required: true,
    },
    optionD: {
        type: String,
        required: true,
    },
    technologyInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'technology'
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

const QuestionAns = mongoose.model('questionAns', questionAnsData)

module.exports = QuestionAns