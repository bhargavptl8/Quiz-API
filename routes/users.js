var express = require('express');
var router = express.Router();
const userController = require('../controller/user');

/* GET users listing. */
router.post('/signup', userController.SignUp);
router.post('/login', userController.Login);


module.exports = router;
