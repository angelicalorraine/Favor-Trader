const router = require('express').Router();
const { User, Favor, Offer, Trade } = require('../../models');
//const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Favor }],
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Favor }]
            ,
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id!' });
            return;
        }
        res.status(200).json(userData);
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
