var express = require('express');
var router = express.Router();
const ZoneController = require('../controller/zone');
const adminSequre = require('../authentication/admin');


router.post('/create', adminSequre.sequre , ZoneController.ZoneCreate);
router.get('/find', adminSequre.sequre , ZoneController.ZoneFind);
router.delete('/delete/:zoneId',adminSequre.sequre, ZoneController.ZoneDelete);
router.patch('/update/:zoneId',adminSequre.sequre, ZoneController.ZoneUpdate);

module.exports = router;