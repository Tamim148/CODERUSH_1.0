const express = require('express');
const router = express.Router();
const indexModules = require('../controllers/index.controllers');
router.post('/login', (req, res) => {
  res.send('LOGIN');
});

router.post('/signUp', (req, res) => {
  res.send('REGISTER');
});

router.get('/', (req, res) => {
  res.send(indexModules.info);
});

router.get('/chooseType', (req, res) => {
  res.send('chooseType');
});


router.get('/header', indexModules.getHeader);

router.get('/experience', indexModules.getExperience);

router.get('/education', indexModules.getEducation);

router.get('/skills', indexModules.getSkills);

router.get('/summary', indexModules.getSummary);

router.get('/selectTemplate',indexModules.getSelectTemplate);

module.exports = router;