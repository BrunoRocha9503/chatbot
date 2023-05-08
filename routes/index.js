const express = require('express');
const router = express.Router();
const enviar = require('./send');
const receber = require('./receive');

router.get('/', (req, res) => {
    const resposta = "";
    res.render('index', {resposta: resposta});
  });

router.post('/index', (req, res, next) => {
    const message = req.body.texto;
    enviar(message);
    res.redirect('index');
});

router.get('/index', (req, res) => {
  receber((resposta) => {
    if (resposta) {
      res.render('index', { resposta: resposta });
    } else {
      res.render('index', { mensagem: 'Não foi possível receber a resposta.' });
    }
});
});

module.exports = router;