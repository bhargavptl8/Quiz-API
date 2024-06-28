const Category = require('../model/category');

exports.CategoryCreate = async (req, res) => {

    try {

        let { categoryName } = req.body

        let adminCategoryCreate = await Category.create({ categoryName })

        res.status(201).json({
            status: 'Success',
            message: 'Category Create SuccessFully',
            data: adminCategoryCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.CategoryFind = async (req, res) => {

    try {

        let adminCategoryFind = await Category.find()

        res.status(200).json({
            status: 'Success',
            message: 'Category Find SuccessFully',
            data: adminCategoryFind
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.CategoryDelete = async (req, res) => {

    try {

        let categoryId = req.params.categoryId

        let adminCategoryDelete = await Category.findByIdAndDelete(categoryId)

        if (!adminCategoryDelete) {
            throw new Error('Category Not Found')
        }

        res.status(301).json({
            status: 'Success',
            message: 'Category Deleted SuccessFully',
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.CategoryUpdate = async (req, res) => {

    try {

        let categoryId = req.params.categoryId
        
        let adminCategoryUpdate = await Category.findByIdAndUpdate(categoryId, req.body, { new: true })

        if (!adminCategoryUpdate) {
            throw new Error('Category Not Found')
        }

        res.status(201).json({
            status: 'Success',
            message: 'Category Updated SuccessFully',
            data: adminCategoryUpdate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}
