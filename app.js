const express = require('express');
const path = require ('path')
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');

require('./routes/send');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set()


app.use('/', routes);

module.exports = app;