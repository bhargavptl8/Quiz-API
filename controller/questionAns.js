const QuestionAns = require('../model/questionAns');

exports.QuestionAnsCreate = async (req, res) => {

    try {

        let {question, optionA, optionB, optionC, optionD , technologyInfo, zoneInfo, subCategoryInfo , categoryInfo } = req.body

        let questionAnsCreate = await QuestionAns.create({question, optionA, optionB, optionC, optionD , technologyInfo, zoneInfo, subCategoryInfo , categoryInfo })

        res.status(201).json({
            status: 'Success',
            message: 'QuestionAns Create SuccessFully',
            data: questionAnsCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.QuestionAnsFind = async (req, res) => {

    try {

        let questionAnsFind = await QuestionAns.find().populate(['technologyInfo', 'zoneInfo', 'subCategoryInfo', 'categoryInfo'])

        let find = questionAnsFind.filter(el => el.technologyInfo === null || el.zoneInfo === null || el.subCategoryInfo === null || el.categoryInfo === null).map(el => el._id)

        for (const id of find) {
            if(id)
                {
                    await QuestionAns.findByIdAndDelete(id)
                }
        }

        let updatedQuestionAnsFind = await QuestionAns.find().populate(['technologyInfo', 'zoneInfo', 'subCategoryInfo', 'categoryInfo'])

        res.status(200).json({
            status: 'Success',
            message: 'QuestionAns Find SuccessFully',
            data: updatedQuestionAnsFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.QuestionAnsDelete = async (req, res) => {

    try {

        let questionAnsId = req.params.questionAnsId

        let questionAnsDelete = await QuestionAns.findByIdAndDelete(questionAnsId)

        if (!questionAnsDelete) {
            throw new Error('QuestionAns Not Found')
        }

        res.status(301).json({
            status: 'Success',
            message: 'QuestionAns Deleted SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.QuestionAnsUpdate = async (req, res) => {

    try {

        let questionAnsId = req.params.questionAnsId

        let questionAnsUpdate = await QuestionAns.findByIdAndUpdate(questionAnsId, req.body, { new: true })

        if (!questionAnsUpdate) {
            throw new Error('QuestionAns Not Found')
        }

        res.status(201).json({
            status: 'Success',
            message: 'QuestionAns Updated SuccessFully',
            data: questionAnsUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}