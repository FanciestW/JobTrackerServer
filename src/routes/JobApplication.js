const express = require('express');
const router = express.Router();
const { JobApplication } = require('../models/JobApplication');
const { getSessionUser } = require('../utils/SessionHandler');
const { handleServerError, handleUnauthorizedError } = require('../utils/ErrorHandler');

router.use( async(req, res, next) => {
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
    const jobApplications = await JobApplication.find({ uid: req.user.uid, });
    return res.status(200).send(JSON.stringify({ jobApplications, }));
  } catch (err) {
    return handleServerError(req, res, 500, 'Job Application GET all Error', err);
  }
});

router.post('/new', async (req, res) => {
  try {
    const { title, company, status, appliedDate, lastUpdatedDate, priority } = req.body;
    const jobApplication = await JobApplication.create({ uid: req.user.uid, title, company, status, appliedDate, lastUpdatedDate, priority });
    return res.status(200).send(JSON.stringify({ jobApplication, }));
  } catch (err) {
    return handleServerError(req, res, 500, 'POST New Job Application Error', err);
  }
});

router.post('/update', async (req, res) => {
  const { _id, title, company, status, appliedDate, priority } = req.body;
  const jobApplicationLookup = await JobApplication.findById(_id,);
  if (req.user.uid !== jobApplicationLookup.uid) {
    return handleUnauthorizedError(req, res);
  } else {
    const jobApplication = await JobApplication.findByIdAndUpdate(
      _id,
      { title, company, status, appliedDate, lastUpdatedDate: Date.now(), priority },
      { new: true }
    );
    return res.status(200).send(JSON.stringify({ jobApplication, }));
  }
});

if (process.env.ENV === 'DEV') {

  // NOTE::For Developement only.
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

  // NOTE::DEV, overrides session and get's user job applications.
  router.get('/:uid', async (req, res) => {
    try {
      const uid = req.params.uid;
      const jobApplications = await JobApplication.find({ uid, });
      return res.status(200).send(JSON.stringify({ jobApplications, }));
    } catch (err) {
      return handleServerError(req, res, 500, 'DEV: GET user Job Applications Error', err);
    }
  });
}

module.exports = router;
