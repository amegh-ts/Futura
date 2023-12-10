const mongoose=require('mongoose')

const NotificationSchema=new mongoose.Schema({
    user:{type:String,required:true},
    priority:{type:String,required:true},
    notification:{type:String,required:true}
},{timestamps:true})

module.exports=mongoose.model("notification",NotificationSchema)  //here 'users' is the name of the collection you are creating
