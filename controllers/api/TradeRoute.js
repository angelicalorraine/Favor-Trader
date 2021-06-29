const router = require('express').Router();
const { Trade, Favor, User } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const tradeData = await Trade.findAll({
            include: [{ model: Favor }],
        });
        res.status(200).json(tradeData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const tradeData = await Trade.findByPk(req.params.id, {
            include: [{ model: Favor }]
            ,
        });
        if (!tradeData) {
            res.status(404).json({ message: 'No trade found with that id!' });
            return;
        }
        res.status(200).json(tradeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE a
router.post('/', async (req, res) => {
try {
    const newTrade = await Trade.create({
      ...req.body,
      buyer_id: req.session.user_id,
    });

    res.status(200).json(newTrade);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;