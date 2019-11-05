const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.listen(8080, () => console.log('Server Online'));