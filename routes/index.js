const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


