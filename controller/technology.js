const Technology = require('../model/technology');

exports.TechnologyCreate = async (req, res) => {

    try {

        let {technologyName, zoneInfo, subCategoryInfo , categoryInfo } = req.body

        let technologyCreate = await Technology.create({technologyName, zoneInfo, subCategoryInfo , categoryInfo })

        res.status(201).json({
            status: 'Success',
            message: 'Technology Create SuccessFully',
            data: technologyCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.TechnologyFind = async (req, res) => {

    try {

        let technologyFind = await Technology.find().populate(['zoneInfo', 'subCategoryInfo', 'categoryInfo'])

        let find = technologyFind.filter(el => el.zoneInfo === null || el.subCategoryInfo === null || el.categoryInfo === null).map(el => el._id)


        for (const id of find) {
            if(id)
                {
                    await Technology.findByIdAndDelete(id)
                }
        }

        let updatedTechnologyFind = await Technology.find().populate(['zoneInfo', 'subCategoryInfo', 'categoryInfo'])

        res.status(200).json({
            status: 'Success',
            message: 'Technology Find SuccessFully',
            data: updatedTechnologyFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.TechnologyDelete = async (req, res) => {

    try {

        let technologyId = req.params.technologyId

        let technologyDelete = await Technology.findByIdAndDelete(technologyId)

        if (!technologyDelete) {
            throw new Error('Technology Not Found')
        }

        res.status(301).json({
            status: 'Success',
            message: 'Technology Deleted SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.TechnologyUpdate = async (req, res) => {

    try {

        let technologyId = req.params.technologyId

        let technologyUpdate = await Technology.findByIdAndUpdate(technologyId, req.body, { new: true })

        if (!technologyUpdate) {
            throw new Error('Technology Not Found')
        }

        res.status(201).json({
            status: 'Success',
            message: 'Technology Updated SuccessFully',
            data: technologyUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}