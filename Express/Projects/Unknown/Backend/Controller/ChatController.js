const chatSchema=require('../Models/ChatSchema')

// create chat
const createChat=async(req,res)=>{
    const {firstId,secondId}=req.body
    try {
        const chat=await chatSchema.findOne({
            members:{$all: [firstId,secondId]}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


// get chats

// find chat

