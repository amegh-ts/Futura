const router = require('express').Router()
const userData = require('../Models/UserDataSchema')

router.post('/post',async (req,res)=>{
    console.log('Post Data',req.body);
    const newUser=new userData(req.body)
    try {
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/allData',async(req,res)=>{
    try {
        const datas=await userData.find()
        console.log(datas);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports=router 