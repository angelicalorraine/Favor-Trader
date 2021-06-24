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

});

// DELETE a
router.delete('/:id', async (req, res) => {

});

module.exports = router;