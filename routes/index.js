const express = require('express');
const router = express.Router();
const enviar = require('./send');

router.get('/', (req, res) => {
    res.render('index');
  });

router.post('/index', (req, res) => {
    const message = req.body.texto;

    enviar(message);
    res.redirect('/');
});

  
module.exports = router;