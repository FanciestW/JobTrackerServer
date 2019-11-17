const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { handleClientError, handleServerError } = require('../utils/ErrorHandler');

router.use(function (req, res, next) {
    console.log('User Router Accessed');
    next();
});

router.get('/', (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            console.error(`An error occurred: ${err}`);
        } else {
            return res.status(200).send(data);
        }
    });
});

router.post('/', (req, res) => {
    try {
        const { name, email, username } = req.body;
        const newUser = new User({ name, email, username, });
        newUser.save((err) => {
            if (err) res.status(500).send('Unable to save new user');
            else res.sendStatus(200);
        });
    } catch (err) {
        if (err instanceof TypeError) {
            return res.status(400).send(JSON.stringify('Received bad request data.'));
        } else {
            return res.status(400).send(JSON.stringify(err.message));
        }
    }
});

router.post('/signup', (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const newUser = new User({ name, email, username, });
        newUser.save((err) => {
            if (err) return handleServerError(req, res, 500, err, err.message);
            else return res.sendStatus(200);
        });
    } catch (err) {
        if (err instanceof TypeError) {
            return handleClientError(req, res, 400, 'Bad Request', err.message);
        } else {
            return handleServerError(req, res, 500, 'Error Occurred', err.message);
        }
    }
});

router.post('/login', (req, res) => {
    // TODO::Implement User login.
});

module.exports = router;
