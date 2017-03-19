const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const models = require('./models');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/users', require('./api/user'));

require('./config/swagger').setup(app);

module.exports = app;