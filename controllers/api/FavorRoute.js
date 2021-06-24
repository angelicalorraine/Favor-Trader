const router = require('express').Router();
const { Favor, User, Trade, Offer } = require('../../models');
//const withAuth = require('../../utils/auth');




router.get('/', async (req, res) => {
    try {
        const favorData = await Favor.findAll({
            include: [{ model: User }, { model: Offer }, { model: Trade }],
        });
        res.status(200).json(favorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const favorData = await Favor.findByPk(req.params.id, {
            include: [{ model: User }, { model: Offer }, { model: Trade }]
            ,
        });
        if (!favorData) {
            res.status(404).json({ message: 'No favor found with that id!' });
            return;
        }
        res.status(200).json(favorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all
router.post('/', async (req, res) => {
    try {
        const newFavor = await Favor.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newFavor);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET a single
router.get('/:id', async (req, res) => {


});

// DELETE a 
router.delete('/:id', async (req, res) => {

});

module.exports = router;
