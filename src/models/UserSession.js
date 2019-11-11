const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { UserSchema } = require('./User');

const UserSessionSchema = Schema({
    sessionId: Schema.ObjectId,
    userId: { type: Schema.Types.ObjectId, ref: UserSchema },
    createdAt: { type: Date, default: Date.now() },
    expiresAt: { type: Date, expires: 3600, default: Date.now() + 3600 * 1000 }
});

module.exports = { UserSession: mongoose.model('User_Session', UserSessionSchema), UserSessionSchema };