const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uid: Schema.ObjectId,
    name: String,
    username: String,
    email: String,
    passwordDigest: String,
    createdAt: { type: Date, default: Date.now() },
});

module.exports = { User: mongoose.model('User', UserSchema), UserSchema, };