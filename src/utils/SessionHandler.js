const { UserSession } = require('../models/UserSession');
const uniqid = require('uniqid');

async function checkSession(sid) {
    // TODO::Check session validity.
    UserSession.countDocuments({});
    await UserSession.find({ sid, });
}

/**
 * Given a user's sessionID, check if action is allowed.
 * @param {string} sid sessionID to run check on.
 * @param {string} uid userID of the user to check against.
 * @returns {boolean} Returns true if sessionID is conducting valid action. False otherwise.
 */
async function checkSessionAction(sid, uid) {
    // TODO::Check session action validity
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

module.exports = { checkSession, createSession };