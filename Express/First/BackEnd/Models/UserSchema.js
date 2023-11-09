const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    // username:{type:String,required:true,unique:true},  //require:true is user to make this feild compulsory
    firstname:{type:String},
    lastname:{type:String},
    dob:{type:String},
    email:{type:String,unique:true},
    phone:{type:String,unique:true},
    password:{type:String},
},{timestamps:true}) //to add the date and time the value is added to DB or edited

module.exports=mongoose.model("users",UserSchema)  //here 'users' is the name of the collection you are creating