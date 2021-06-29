const router = require('express').Router();
const { Favor, User, Trade } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/activityFeed', async (req, res) => {
    try {
        const favorData = await Favor.findAll({
            include: [{ model: User }, { model: Trade }],
        });
        res.status(200).json(favorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const favorData = await Favor.findByPk(req.params.id, {
            include: [{ model: User }, { model: Trade }]
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
router.post('/', withAuth, async (req, res) => {
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


router.put('/:id', withAuth, async (req, res) => {
    try {
        const newFavor = await Favor.update({
            title: req.body.title,
            description: req.body.description,
            difficulty: req.body.difficulty
        },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );
        res.status(200).json(newFavor);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const favorData = await Favor.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!favorData) {
            res.status(404).json({ message: 'No favor found with this id!' });
            return;
        }

        res.status(200).json(favorData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
