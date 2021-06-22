const router = require('express').Router();
// Add const { Model1, Model2} = require('../models');
//For Auth
//const withAuth = require('../utils/auth');

router.get('/', function (req, res, next) {
  res.render('homePage', { title: 'Express' });
});






module.exports = router;
