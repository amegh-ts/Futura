const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    // username:{type:String,required:true,unique:true},  //require:true is user to make this feild compulsory
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    dob:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    phone:{type:String,unique:true,required:true},
    password:{type:String,required:true},
},{timestamps:true}) //to add the date and time the value is added to DB or edited

module.exports=mongoose.model("users",UserSchema)  //here 'users' is the name of the collection you are creating