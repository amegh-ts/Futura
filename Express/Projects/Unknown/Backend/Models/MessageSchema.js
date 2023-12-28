const mongoose=require('mongoose')

const MessageSchema=new mongoose.Schema({
    chatId:{type:String,required:true},
    senderId:{type:String,required:true},
    text:String
},{
    timestamps:true
})

module.exports=mongoose.model("messages",MessageSchema)  //here 'users' is the name of the collection you are creating
