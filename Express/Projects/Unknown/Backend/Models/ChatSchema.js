const mongoose=require('mongoose')
const ChatSchema=new mongoose.Schema({
    uname:{type:String,required:true},
    email:{type:String,unique:true,required:true},

})
