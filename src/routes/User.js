const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const crypto = require('crypto');
const { User } = require('../models/User');
const { createSession, deleteSession } = require('../utils/SessionHandler');
const { handleClientError, handleServerError, handleUnauthorizedError } = require('../utils/ErrorHandler');

const saltRounds = 12;

const cookieOptions = {
  httpOnly: true,
  signed: true,
  expires: Date.now() + 3600,
  maxAge: Date.now() + 3600 * 1000,
};

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

    // Generate a uniqid that has not been used already.
    let uid;
    do {
      uid = uniqid();
    } while (await User.countDocuments({ uid, }) > 0);
        
    // Hash password and create new user.
    const passwordDigest = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ uid, firstName, lastName, email, username, passwordDigest, });
    const newUserDoc = await newUser.save();

    // Create new user session and send as cookie.
    const newSession = await createSession(newUserDoc.uid);
    return res.cookie('sid', newSession.sid, cookieOptions).sendStatus(200);
        
  } catch (err) {
    if (err instanceof TypeError) {
      return handleClientError(req, res, 400, 'Bad Request', err.message);
    } else {
      return handleServerError(req, res, 500, 'Error Occurred', err.message);
    }
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password, } = req.body;
    const userDoc = await User.findOne({ email, });
        
    // Randomly wait a set time to help prevent user enumeration.
    if (crypto.randomBytes(1).readUInt8() % 2 === 0) {
      await new Promise((resolve) => { setTimeout(resolve, Math.random() * (300 - 100) + 100); });
    }
    if (!userDoc) {
      await new Promise((resolve) => { setTimeout(resolve, Math.random() * (400 - 350) + 350); });
      return res.sendStatus(401);
    }
    const isPasswordValid = await bcrypt.compare(password, userDoc.passwordDigest);

    if (isPasswordValid) {
      const newSession = await createSession(userDoc.uid);
      return res.cookie('sid', newSession.sid, cookieOptions).status(200).send('Login Success');
    } else {
      return res.sendStatus(401);
    }
  } catch (err) {
    if (err instanceof TypeError) {
      return handleClientError(req, res, 400, 'Bad Request', err.message);
    } else {
      return handleServerError(req, res, 500, 'Error Occurred', err.message);
    }
  }
});

router.post('/logout', async (req, res) => {
  try {
    if (!req.signedCookies.sid && process.env.ENV !== 'DEV') {
      return handleUnauthorizedError(req, res);
    } else {
      const sid = req.signedCookies.sid;
      await deleteSession(sid);
      // res.cookie('sid', {expires: Date.now()});
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  } catch (err) {
    return handleServerError(req, res, 500, 'Error Occurred', err.message);
  }
});

module.exports = router;
