const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobApplicationSchema = new Schema({
    userId: String,
    title: String,
    company: String,
    status: String,
    appliedDate: Date,
    lastUpdatedDate: Date,
    priority: String,
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);