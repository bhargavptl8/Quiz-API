const SubCategory = require('../model/subCategory');

exports.SubCategoryCreate = async (req, res) => {

    try {

        let { subCategoryName, categoryInfo } = req.body

        let adminSubCategoryCreate = await SubCategory.create({ subCategoryName, categoryInfo })

        res.status(201).json({
            status: 'Success',
            message: 'SubCategory Create SuccessFully',
            data: adminSubCategoryCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.SubCategoryFind = async (req, res) => {

    try {

        let adminSubCategoryFind = await SubCategory.find().populate('categoryInfo')

        let find  =  adminSubCategoryFind.filter(el => el.categoryInfo === null).map(el => el._id)

        console.log(find);

        // find.map(async(el) => {
        //     if(el)
        //         {
        //          await SubCategory.findByIdAndDelete(el)
        //         }
        // })

        for (const id of find) {
            if (id) {
                await SubCategory.findByIdAndDelete(id);
            }
        }

        let  updatedSubCategoryFind = await SubCategory.find().populate('categoryInfo')

        res.status(200).json({
            status: 'Success',
            message: 'SubCategory Find SuccessFully',
            data: updatedSubCategoryFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.SubCategoryDelete = async (req, res) => {

    try {

        let subCategoryId = req.params.subCategoryId

        let adminSubCategoryDelete = await SubCategory.findByIdAndDelete(subCategoryId)

        if (!adminSubCategoryDelete) {
            throw new Error('SubCategory Not Found')
        }

        res.status(301).json({
            status: 'Success',
            message: 'SubCategory Deleted SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.SubCategoryUpdate = async (req, res) => {

    try {

        let subCategoryId = req.params.subCategoryId

        let adminSubCategoryUpdate = await SubCategory.findByIdAndUpdate(subCategoryId, req.body, { new: true })

        if (!adminSubCategoryUpdate) {
            throw new Error('SubCategory Not Found')
        }

        res.status(201).json({
            status: 'Success',
            message: 'SubCategory Updated SuccessFully',
            data: adminSubCategoryUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
