const express = require('express');
const path = require ('path')
const routes = require('./routes');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);

module.exports = app;