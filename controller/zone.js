const Zone = require('../model/zone');

exports.ZoneCreate = async (req, res) => {

    try {

        let {zoneName, subCategoryInfo , categoryInfo } = req.body

        let zoneCreate = await Zone.create({zoneName, subCategoryInfo , categoryInfo })

        res.status(201).json({
            status: 'Success',
            message: 'Zone Create SuccessFully',
            data: zoneCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ZoneFind = async (req, res) => {

    try {

        let zoneFind = await Zone.find().populate(['subCategoryInfo','categoryInfo'])
    
        let find = zoneFind.filter(el => el.subCategoryInfo === null || el.categoryInfo === null).map(el => el._id) 

        // console.log(find);

        for (const id of find) {
            if(id)
                {
                    await Zone.findByIdAndDelete(id)
                }
        }

        let updatedZoneFind = await Zone.find().populate(['subCategoryInfo','categoryInfo'])

        res.status(200).json({
            status: 'Success',
            message: 'Zone Find SuccessFully',
            data: updatedZoneFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ZoneDelete = async (req, res) => {

    try {

        let zoneId = req.params.zoneId

        let zoneDelete = await Zone.findByIdAndDelete(zoneId)

        if (!zoneDelete) {
            throw new Error('Zone Not Found')
        }

        res.status(301).json({
            status: 'Success',
            message: 'Zone Deleted SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.ZoneUpdate = async (req, res) => {

    try {

        let zoneId = req.params.zoneId

        let zoneUpdate = await Zone.findByIdAndUpdate(zoneId, req.body, { new: true })

        if (!zoneUpdate) {
            throw new Error('Zone Not Found')
        }

        res.status(201).json({
            status: 'Success',
            message: 'Zone Updated SuccessFully',
            data: zoneUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
