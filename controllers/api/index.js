const router = require('express').Router();
const FavorRoute = require('./FavorRoute');
const OfferRoute = require('./OfferRoute');
const UserRoute = require('./UserRoute');
const TradeRoute = require('./TradeRoute');

router.use('/favors', FavorRoute);
router.use('/offers', OfferRoute);
router.use('/users', UserRoute);
router.use('/trades', TradeRoute);

module.exports = router;
