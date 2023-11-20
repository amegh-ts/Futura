const mongoose=require('mongoose')

const AuthSchema=new mongoose.Schema({
    uname:{type:String,required:true},
    dob:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("authData",AuthSchema)
