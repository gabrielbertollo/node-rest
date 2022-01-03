const express = require('express');
const authMiddleware = require('../middlewares/auth');

const User = require('../models/User');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        return res.send({ users });
    } catch (error) {
        return res.status(400).send({ error: 'Error loading users' });
    }
});

router.get('/authenticated', async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        return res.send({ user });
    } catch (error) {
        return res.status(400).send({ error: 'Error loading user' });
    }
});

module.exports = app => app.use('/users', router);