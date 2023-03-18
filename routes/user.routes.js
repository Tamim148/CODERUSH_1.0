const express = require('express');
const router = express.Router();


router.post('/login', (req, res) => {
  res.send('LOGIN');
});

router.post('/signUp', (req, res) => {
  res.send('REGISTER');
});

router.get('/', (req, res) => {
  res.send('DASHBOARD');
});

router.get('/chooseType', (req, res) => {
  res.send('chooseType');
});


router.get('/header', (req, res) => {
  res.render('../public/user/header.ejs');
});

router.get('/experience', (req, res) => {
  res.send('experience');
});

router.get('/education', (req, res) => {
  res.send('education');
});

router.get('/skills', (req, res) => {
  res.send('skills');
});

router.get('/summary', (req, res) => {
  res.send('summary');
});

router.get('/selectTemplate', (req, res) => {
  res.send('selectTemplate');
});
module.exports = router;