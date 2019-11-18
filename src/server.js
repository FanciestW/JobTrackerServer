const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { handleClientError, handleServerError } = require('./utils/ErrorHandler');
require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user', require('./routes/User'));

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
    return handleClientError(req, res, 400, 'Bad request', 'Please try again');
});

app.get('/status', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        return res.sendStatus(200).send(JSON.stringify({
            message: 'Server is online',
        }));
    } else {
        return handleServerError(req, res, 500, 'Server is not ready', 'Please try again later.');
    }
});

app.listen(process.env.PORT || 8080, () => console.log(`Server Online on Port ${process.env.PORT || 8080}`));