const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { UserSchema } = require('./User');

const JobApplicationSchema = new Schema({
  jobAppId: Schema.ObjectId,
  userId: { type: Schema.Types.ObjectId, ref: UserSchema },
  title: String,
  company: String,
  status: String,
  appliedDate: Date,
  lastUpdatedDate: Date,
  priority: String,
});

module.exports = { JobApplication: mongoose.model('JobApplication', JobApplicationSchema), JobApplicationSchema, };