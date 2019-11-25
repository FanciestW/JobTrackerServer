const express = require('express');
const router = express.Router();
const { JobApplication } = require('../models/JobApplication');
const { UserSession } = require('../models/UserSession');
const { handleServerError, handleUnauthorizedError } = require('../utils/ErrorHandler');

router.use((req, res, next) => {
  if (!req.signedCookies.sid && process.env.ENV != 'DEV') {
    return handleUnauthorizedError(req, res);
  }
  next();
});

router.get('/all', async (req, res) => {
  try {
    const sid = req.signedCookies.sid;
    const session = await UserSession.findOne({ sid, }, { _id: 0, sid: 1, uid: 1});
    const jobApplications = await JobApplication.find({ uid: session.uid, });
    return res.status(200).send(JSON.stringify({ jobApplications, }));
  } catch (err) {
    return handleServerError(req, res, 500, 'Job Application GET all Error', err);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { title, company, status, appliedDate, lastUpdatedDate, priority } = req.body;
    const sid = req.signedCookies.sid;
    const session = await UserSession.findOne({ sid, }, { _id: 0, sid: 1, uid: 1});
    const jobApplication = await JobApplication.create({ uid: session.uid, title, company, status, appliedDate, lastUpdatedDate, priority });
    return res.status(200).send(JSON.stringify({ jobApplication, }));
  } catch (err) {
    return handleServerError(req, res, 500, 'POST New Job Application Error', err);
  }
});

// FIXME::For Developement only.
router.post('/dev/new', async (req, res) => {
  try {
    const { uid, title, company, status, appliedDate, lastUpdatedDate, priority } = req.body;
    const newApplication = await JobApplication({
      uid,
      title,
      company,
      status,
      appliedDate,
      lastUpdatedDate,
      priority,
    }).save();
    return res.status(200).send(JSON.stringify(newApplication));
  } catch (err) {
    return handleServerError(req, res, 500, 'DEV: POST New Job Application Error', err);
  }
});

// FIXME::DEV, overrides session and get's user job applications.
router.get('/:uid', async (req, res) => {
  try {
    const uid = req.params.uid;
    const jobApplications = await JobApplication.find({ uid, });
    return res.status(200).send(JSON.stringify({ jobApplications, }));
  } catch (err) {
    return handleServerError(req, res, 500, 'GET user Job Applications Error', err);
  }
});

module.exports = router;
