const router = require('express').Router()
const authData = require('../Models/AuthSchema')

router.post('/signup',async (req,res)=>{
    console.log('Signup Data:',req.body);
    const newUser=new authData(req.body)
    try {
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports=router