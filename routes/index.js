const express = require('express');
const router = express.Router();
const send = require('./send');
const receive = require('./receive');
const enviar = require('./send');

const messages = enviar();

router.get('/', (req, res) => {
    res.render('index');
  });

router.post('/index', (req, res) => {
    const message ={
        texto: req.body.texto
    };
    messages.push(message);
    res.redirect('/index');
});

  
module.exports = router;