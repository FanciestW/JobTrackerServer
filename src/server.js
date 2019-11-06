const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const mongodbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect(mongodbUri, mongodbOptions, (err) => {
    if (err) {
        console.error(`Unable to connecto MongoDB with error: ${err}`);
    } else {
        console.log('Connected to MongoDB.');
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api', (req, res) => {
    res.sendStatus(404);
});

app.listen(8080, () => console.log('Server Online'));