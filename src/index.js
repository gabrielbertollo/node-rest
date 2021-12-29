const express = require('express');
const bodyParser = require('body-parser');
const req = require('express/lib/request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

app.listen(3000);