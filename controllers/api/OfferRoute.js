const router = require('express').Router();
const { Offer, Favor } = require('../../models');
//const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const offerData = await Offer.findAll({
            include: [{ model: Favor }],
        });
        res.status(200).json(offerData);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const offerData = await Offer.findByPk(req.params.id, {
            include: [{ model: Favor }]
            ,
        });
        if (!offerData) {
            res.status(404).json({ message: 'No offer found with that id!' });
            return;
        }
        res.status(200).json(offerData);
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
