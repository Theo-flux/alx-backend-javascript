const express = require('express');
const router = require('./routes');

const PORT = 1245;
const app = express();

app.get('/', router);
app.get('/students', router);
app.get('/students/:major', router);

app.listen(PORT, () => {});

module.exports = app;
