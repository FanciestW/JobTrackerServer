const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const { User } = require('./models/User');
require('dotenv').config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.get('/api/users', (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            console.error(`An error occurred: ${err}`);
        } else {
            return res.status(200).send(data);
        }
    });
});

app.post('/api/user', (req, res) => {
    try {
        const { name, email, username } = req.body;
        const newUser = new User({ name, email, username, createdAt: new Date(), });
        newUser.save((err) => {
            if (err) res.status(500).send('Unable to save new user');
            else res.sendStatus(200);
        });
    } catch (err) {
        if (err instanceof TypeError) {
            return res.status(400).send(JSON.stringify('Received bad request data.'));
        } else {
            return res.status(400).send(JSON.stringify(err.message));
        }
    }
});

app.listen(process.env.PORT || 8080, () => console.log(`Server Online on Port ${process.env.PORT || 8080}`));