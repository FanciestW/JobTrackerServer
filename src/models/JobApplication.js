const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobApplicationSchema = new Schema({
  uid: { type: String, required: true },
  title: { type: String },
  company: { type: String },
  status: { type: String },
  appliedDate: { type: Date, default: null },
  lastUpdatedDate: { type: Date, default: Date.now },
  priority: { type: Number, default: 1 }, // A number from 0-3
});

module.exports = { JobApplication: mongoose.model('JobApplication', JobApplicationSchema), JobApplicationSchema, };