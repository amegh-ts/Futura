const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    // username:{type:String,require:true,unique:true},  //require:true is user to make this feild compulsory
    username:{type:String},
    email:{type:String},
    password:{type:String},
},{timestamps:true}) //to add the date and time the value is added to DB or edited

module.exports=mongoose.model("users",UserSchema)  //here 'users' is the name of the collection you are creating