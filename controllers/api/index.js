const router = require('express').Router();
const api1 = require('./api1');
const api2 = require('./api2');
const api3 = require('./api3');

router.use('/', api1);
router.use('/', api2);
router.use('/', api3);

module.exports = router;
