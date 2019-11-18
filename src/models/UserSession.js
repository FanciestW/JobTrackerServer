const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { UserSchema } = require('./User');

const UserSessionSchema = Schema({
    sid: { type: String, unique: true, required: true },
    uid: { type: Schema.Types.ObjectId, ref: UserSchema, required: true },
    createdAt: { type: Date, default: Date.now(), required: true },
    expiresAt: { type: Date, expires: 3600, default: Date.now() + 3600 * 1000, required: true },
});

module.exports = { UserSession: mongoose.model('User_Session', UserSessionSchema), UserSessionSchema };
