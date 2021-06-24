const router = require('express').Router();
const { Favor, Offer, Trade, User } = require('../models');
//For Auth
//const withAuth = require('../utils/auth');

router.get('/', function (req, res, next) {
  res.render('homePage', { title: 'Express' });
});






module.exports = router;
