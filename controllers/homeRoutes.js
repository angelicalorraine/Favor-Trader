const router = require('express').Router();
const { Favor, Trade, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const favorData = await Favor.findAll({
      include: [
        { model: User }, { model: Trade }
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

router.get('/activityFeed', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const favorData = await Favor.findAll({
      include: [
        { model: User }, { model: Trade }
      ],
    });

    // Serialize data so the template can read it
    const favors = favorData.map((favor) => favor.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('activityFeed', {
      favors,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/favor/:id', async (req, res) => {
  try {
    const favorData = await Favor.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
      ],
    });

    const favors = favorData.get({ plain: true });

    res.render('profile', {
      ...favors,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Favor }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});






module.exports = router;
