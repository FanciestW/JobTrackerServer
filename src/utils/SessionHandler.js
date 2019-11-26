const { UserSession } = require('../models/UserSession');
const { User } = require('../models/User');
const uniqid = require('uniqid');

/**
 * Retreives the User document corresponding to a session.
 * @param {string} sid sessionID to get user on.
 * @returns {User} A user document object.
 */
async function getSessionUser(sid) {
  const session = await UserSession.findOne({ sid, }, { _id: 0, uid: 1, sid: 1});
  if (!session) return undefined;
  return await User.findOne({ uid: session.uid });
}

/**
 * Check if a sessionID validity and optional check against a userID.
 * @param {string} sid sessionID to run check on.
 * @param {string} uid [Optional] userID of the user to check against.
 * @returns {boolean} Returns true if sessionID is valid. False otherwise.
 */
async function sessionExists(sid, uid=undefined) {
  const session = await UserSession.findOne({ sid, uid, });
  return !!session;
}

/**
 * Creates a new session for a specific user and saves it to the database.
 * @param {string} uid userID of the user to issue the session to.
 * @returns {UserSession} New user session object created for the user.
 */
async function createSession(uid) {
  let sid;
  do {
    sid = uniqid();
  } while (await UserSession.countDocuments({ sid, }) > 0); 
  return await UserSession({ sid, uid }).save();
}

/**
 * Deletes a Session
 * @param {string} sid SessionID of the session to delete.
 * @returns {boolean} If successful deletion, return true. False otherwise.
 */
async function deleteSession(sid) {
  const res = await UserSession.deleteOne({ sid, });
  console.log(res);
  return true;
}

module.exports = { getSessionUser, sessionExists, createSession, deleteSession };