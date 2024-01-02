const MessageSchema = require('../Models/MessageSchema')

// create message
const createMessage = async (req, res) => {
    try {
        const { chatId, senderId, text } = req.body;

        if (!chatId || !senderId || !text) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        const message = new Message({ chatId, senderId, text });
        const savedMessage = await message.save();

        // Emit the new message to all connected clients in the chat room
        io.to(chatId).emit('newMessage', savedMessage);

        res.status(201).json({ message: 'Message created successfully.', data: savedMessage });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).json({ error: 'Internal Server Error.' });
    }
};


// get message
const getMessages = async (req, res) => {
    const { chatId } = req.params;
    try {
        const messages = await MessageSchema.find({ chatId })
        res.status(200).json(messages)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


module.exports = { createMessage, getMessages };