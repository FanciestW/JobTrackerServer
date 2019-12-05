const express = require('express');
const router = express.Router();
const Axios = require('axios');
const { handleUnauthorizedError } = require('../utils/ErrorHandler');
const { getSessionUser } = require('../utils/SessionHandler');

router.use( async (req, res, next) => {
  if (!req.signedCookies.sid && process.env.ENV !== 'DEV') {
    return handleUnauthorizedError(req, res);
  } else {
    const sid = req.signedCookies.sid;
    const user = await getSessionUser(sid);
    if (user) {
      req.user = user;
    } else {
      return handleUnauthorizedError(req, res);
    }
  }
  next();
});

router.get('/search', async (req, res) => {
  const params = req.query;
  const githubRes = await Axios.get('https://jobs.github.com/positions.json', { params, });
  const jobs = githubRes.data;
  return res.status(200).send(JSON.stringify({ jobs }, null, 2));
});

router.get('/', async (req, res) => {
  const githubRes = await Axios.get('https://jobs.github.com/positions.json');
  const jobs = githubRes.data;
  return res.status(200).send(JSON.stringify({ jobs }, null, 2));
});

module.exports = router;
