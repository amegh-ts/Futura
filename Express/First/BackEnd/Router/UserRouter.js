const router=require('express').Router()   //Router used to access database. it is a module insite express package

const users=require('../Models/UserSchema')  //here the users variable is the same name given in the useschema.js

router.post('/postmethods',async(req,res)=>{
    console.log('Postman data ?',req.body);  // request.body contain datas comming from the front end
    const newUser= new users(req.body)
    // const newUser= new users({
    //     username:req.body.bname,
    //     email:req.body.bemail,
    //     password:req.body.bpassword
    // })

    // for error handling
    try{
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)
    } catch(err){
        res.status(500).json(err)
    }
});  // post used to get front end values to backend


module.exports=router


