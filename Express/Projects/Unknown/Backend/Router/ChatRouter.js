const express = require('express');
const router = express.Router();
const Message = require('../Models/ChatSchema');

router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving messages' });
  }
});

module.exports = router;
