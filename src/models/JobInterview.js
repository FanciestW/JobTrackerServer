const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobInterviewSchema = Schema({
  uid: { type: String, required: true },
  title: { type: String },
  company: { type: String },
  status: { type: String },
  date: { type: Date, default: null },
  lastUpdatedDate: { type: Date, default: Date.now },
  type: { type: String },
  linkedJobApplication: { type: Schema.Types.ObjectId },
});

module.exports = { JobInterview: mongoose.model('JobInterview', JobInterviewSchema), JobInterviewSchema, };