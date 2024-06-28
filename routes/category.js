var express = require('express');
var router = express.Router();
const CategoryController = require('../controller/category');
const adminSequre = require('../authentication/admin');


router.post('/create', adminSequre.sequre , CategoryController.CategoryCreate);
router.get('/find', adminSequre.sequre , CategoryController.CategoryFind);
router.delete('/delete/:categoryId',adminSequre.sequre, CategoryController.CategoryDelete);
router.patch('/update/:categoryId',adminSequre.sequre, CategoryController.CategoryUpdate);

module.exports = router;