const express = require('express');
const router = express.Router();
const chatbotService = require('../services/chatbot');

router.post('/', async (req, res) => {
  const message = req.body.message;
  const reply = await chatbotService.getReply(message);
  res.json({ reply });
});

module.exports = router;