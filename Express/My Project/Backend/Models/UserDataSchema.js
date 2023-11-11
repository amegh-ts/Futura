const mongoose=require('mongoose')

const UserDataSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    dob:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},

},{timestamps:true})

module.exports=mongoose.model("userData",UserDataSchema)