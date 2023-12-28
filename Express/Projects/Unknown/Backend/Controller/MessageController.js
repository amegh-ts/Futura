const messageSchema = require('../Models/MessageSchema')

// create message
const createMessage= async(req,res)=>{
    const {chatId,senderId,text}=req.body
    const message=new messageSchema({
        chatId,senderId,text
    })
}

// get message