var express = require('express');
var router = express.Router();
const SubCategoryController = require('../controller/subCategory');
const adminSequre = require('../authentication/admin');


router.post('/create', adminSequre.sequre , SubCategoryController.SubCategoryCreate);
router.get('/find', adminSequre.sequre , SubCategoryController.SubCategoryFind);
router.delete('/delete/:subCategoryId', adminSequre.sequre , SubCategoryController.SubCategoryDelete);
router.patch('/update/:subCategoryId', adminSequre.sequre , SubCategoryController.SubCategoryUpdate);

module.exports = router;