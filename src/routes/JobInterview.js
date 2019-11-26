const express = require('express');
const router = express.Router();
const { JobInterview } = require('../models/JobInterview');
const { handleUnauthorizedError, handleServerError } = require('../utils/ErrorHandler');
const { getSessionUser } = require('../utils/SessionHandler');

router.use(async (req, res, next) => {
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

router.get('/all', async (req, res) => {
  try {
    const jobInterviews = await JobInterview.find({ uid: req.user.uid });
    return res.status(200).send(JSON.stringify({ jobInterviews, }));
  } catch (err) {
    return handleServerError(req, res, 500, 'Job Interview GET all Error', err);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { title, company, status, date, type, linkedJobApplication } = req.body;
    const jobInterview = await JobInterview.create({ uid: req.user.uid, title, company, status, date, type, linkedJobApplication });
    return res.status(200).send(JSON.stringify({ jobInterview, }));
  } catch (err) {
    return handleServerError(req, res, 500, 'POST New Job Interview Error', err);
  }
});

router.post('/update', async (req, res) => {
  const { _id, uid, title, company, status, date, lastUpdatedDate, type, linkedJobApplication } = req.body;
  const jobInterview = await JobInterview.updateOne(
    { _id, },
    { uid, title, company, status, date, lastUpdatedDate, type, linkedJobApplication }
  );
  return res.status(200).send(JSON.stringify({ jobInterview, }));
});

if (process.env.ENV === 'DEV') {
  // NOTE::For Developement only.
  router.post('/dev/new', async (req, res) => {
    try {
      const { uid, title, company, status, date, lastUpdatedDate, type, linkedJobApplication } = req.body;
      const newInterview = await JobInterview.create({
        uid,
        title,
        company,
        status,
        date,
        lastUpdatedDate,
        type,
        linkedJobApplication,
      });
      return res.status(200).send(JSON.stringify(newInterview));
    } catch (err) {
      return handleServerError(req, res, 500, 'DEV: POST New Job Interview Error', err);
    }
  });

  // NOTE::DEV, overrides session and get's user job interviews.
  router.get('/:uid', async (req, res) => {
    try {
      const uid = req.params.uid;
      const jobInterviews = await JobInterview.find({ uid, });
      return res.status(200).send(JSON.stringify({ jobInterviews, }));
    } catch (err) {
      return handleServerError(req, res, 500, 'DEV: GET user Job Interview Error', err);
    }
  });
}

module.exports = router;
