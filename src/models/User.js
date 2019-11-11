const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uid: Schema.ObjectId,
    name: String,
    username: String,
    email: String,
    createdAt: Date,
});

module.exports = { User: mongoose.model('User', UserSchema), UserSchema, };