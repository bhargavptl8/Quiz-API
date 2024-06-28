var express = require('express');
var router = express.Router();
const CategoryController = require('../controller/category');
const SubCategoryController = require('../controller/subCategory');
const ZoneController = require('../controller/zone');
const TechnologyController = require('../controller/technology');
const QuestionAnsController = require('../controller/questionAns');


router.get('/category/find', CategoryController.CategoryFind);
router.get('/subcategory/find',SubCategoryController.SubCategoryFind);
router.get('/zone/find',ZoneController.ZoneFind);
router.get('/technology/find',TechnologyController.TechnologyFind);
router.get('/questionans/find',QuestionAnsController.QuestionAnsFind);


module.exports = router;