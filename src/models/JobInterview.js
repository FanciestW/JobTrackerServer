const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { JobApplicationSchema } = require('./JobApplication');

const JobInterviewSchema = Schema({
    title: String,
    company: String,
    date: Date,
    type: String,
    linkedJobApplication: { type: Schema.Types.ObjectId, ref: JobApplicationSchema },
});

module.exports = { JobInterview: mongoose.model('JobInterview', JobInterviewSchema), JobApplicationSchema, };