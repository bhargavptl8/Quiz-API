var express = require('express');
var router = express.Router();
const AdminController = require('../controller/admin');


router.post('/signUp', AdminController.SignUp);
router.post('/login', AdminController.Login);


module.exports = router;
