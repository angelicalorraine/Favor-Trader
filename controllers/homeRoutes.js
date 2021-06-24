const router = require('express').Router();
const { Favor, Offer, Trade, User } = require('../models');
//For Auth
//const withAuth = require('../utils/auth');

// router.get('/', function (req, res, next) {
//   res.render('homePage', { title: 'Express' });
// });

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const favorData = await Favor.findAll({
      include: [
        { model: User }, { model: Offer }, { model: Trade }
      ],
    });

    // Serialize data so the template can read it
    const favors = favorData.map((favor) => favor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homePage', {
      favors,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
