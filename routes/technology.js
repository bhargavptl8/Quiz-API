var express = require('express');
var router = express.Router();
const TechnologyController = require('../controller/technology');
const adminSequre = require('../authentication/admin');


router.post('/create', adminSequre.sequre , TechnologyController.TechnologyCreate);
router.get('/find', adminSequre.sequre , TechnologyController.TechnologyFind);
router.delete('/delete/:technologyId',adminSequre.sequre, TechnologyController.TechnologyDelete);
router.patch('/update/:technologyId',adminSequre.sequre, TechnologyController.TechnologyUpdate);

module.exports = router;