var express = require('express');
var router = express.Router();
const QuestionAnsController = require('../controller/questionAns');
const adminSequre = require('../authentication/admin');


router.post('/create', adminSequre.sequre , QuestionAnsController.QuestionAnsCreate);
router.get('/find', adminSequre.sequre , QuestionAnsController.QuestionAnsFind);
router.delete('/delete/:questionAnsId',adminSequre.sequre, QuestionAnsController.QuestionAnsDelete);
router.patch('/update/:questionAnsId',adminSequre.sequre, QuestionAnsController.QuestionAnsUpdate);

module.exports = router;