const MessageSchema = require('../Models/MessageSchema')

// create message
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body
    console.log(req.body);
    const message = new MessageSchema({
        chatId, senderId, text
    })

    try {
        const response = await message.save()
        res.status(200).json(response)
        console.log(response);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

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