const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uid: Schema.ObjectId,
    name: String,
    username: String,
    email: String,
    createdAt: { type: Date, default: Date.now() },
    expiresAt: { type: Date, expires: 3600, default: Date.now() + 3600 * 1000 }
});

module.exports = { User: mongoose.model('User', UserSchema), UserSchema, };