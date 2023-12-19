const mongoose=require('mongoose')
const RecoverySchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    otp:{type:String,required:true},
    otpExpiration:{type:Date,required:true}
})

module.exports=mongoose.model('Nodemailer',RecoverySchema)

