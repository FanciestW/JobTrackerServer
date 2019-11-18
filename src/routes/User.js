const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { handleClientError, handleServerError } = require('../utils/ErrorHandler');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');

const saltRounds = 12;

router.use((req, res, next) => {
    console.log('User Router Accessed');
    next();
});

// FIXME::Development route, Remove for production
router.get('/all', (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            console.error(`An error occurred: ${err}`);
        } else {
            return res.status(200).send(data);
        }
    });
});

// FIXME::Development route, Remove for production
router.post('/', (req, res) => {
    try {
        const { firstName, lastName, email, passwordDigest, username } = req.body;
        const newUser = new User({ firstName, lastName, email, passwordDigest, username, });
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

//FIXME::Development route, Remove for production
router.put('/:uid', async(req, res) => {
    try {
        const { fullName, email, passwordDigest, username, } = req.body;
        const uid = req.params.uid;
        const userFind = await User.findOne({ uid, });
        if (!userFind) {
            User.updateOne({ uid, }, { fullName, email, passwordDigest, username, }, (err) => {
                if (err) {
                    return handleServerError(req, res, 500, 'Operation Failed', 'Unable to update user');
                } else {
                    return res.sendStatus(200);
                }
            });
        } else {
            return res.sendStatus(400).send('User already exists');
        }
    } catch (err) {
        if (err instanceof TypeError) {
            return handleClientError(req, res, 400, 'Bad Request', err.message);
        } else {
            return handleServerError(req, res, 500, 'Error Occurred', err.message);
        }
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, username, password } = req.body;
        let uid;
        do {
            uid = uniqid();
        } while (await User.countDocuments({ uid, }) > 0);
        
        const passwordDigest = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ firstName, lastName, email, username, passwordDigest, });
        newUser.save((err) => {
            if (err) return handleServerError(req, res, 500, err, err.message);
            else return res.sendStatus(200);
        });
        // TODO::Create User Session and save as cookie.
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
