const express = require('express');
const router = express.Router();
const indexModules = require('../controllers/index.controllers');
const userModules = require('../controllers/user.controllers');

router.post('/login', (req, res) => {
  res.send('LOGIN');
});

router.get('/', indexModules.getIndex);

router.get('/chooseType', (req, res) => {
  res.send('chooseType');
});


router.get('/header', indexModules.getHeader);

router.get('/experience', indexModules.getExperience);

router.get('/education', indexModules.getEducation);

router.get('/skills', indexModules.getSkills);

router.get('/summary', indexModules.getSummary);

router.get('/selectTemplate',indexModules.getSelectTemplate);

router.get('/signUp', userModules.getSignup);
router.post('/signUp', userModules.postSignUp);

router.post('/generate-pdf', indexModules.postGeneratePDF);
router.get('/login', userModules.getLogin);

module.exports = router;