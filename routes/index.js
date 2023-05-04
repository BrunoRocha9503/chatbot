const express = require('express');
const router = express.Router();
const enviar = require('./send');

router.get('/', (req, res) => {
    res.render('index');
  });

router.post('/index', (req, res) => {
    const message ={
        texto: req.body.texto
    };
    enviar(message);
    res.redirect('/index');
});

  
module.exports = router;