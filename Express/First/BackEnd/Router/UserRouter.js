const router = require('express').Router()   //Router used to access database. it is a module inside express package

const users = require('../Models/UserSchema')  //here the users variable is the same name given in the useschema.js

const Crypto = require('crypto-js')

const Jwt=require('jsonwebtoken');
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken');

router.post('/postmethods', async (req, res) => {
    req.body.password = Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
    console.log('Postman data ?', req.body);  // request.body contain datas coming from the front end
    const newUser = new users(req.body)
    // const newUser= new users({
    //     username:req.body.bname,
    //     email:req.body.bemail,
    //     password:req.body.bpassword
    // })

    // for error handling
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
});  // post used to get front end values to backend

router.get('/alldata', async (req, res) => {
    try {
        const datas = await users.find()
        console.log(datas);
        res.status(200).json(datas)
    } catch (err) {
        res.status(500).json(err)
    }
})

//to find the value by its id
router.get('/getmethod/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        // const datas = await users.find()
        const ids = await users.findById(req.params.id)
        console.log(ids);
        res.status(200).json(ids)
    } catch (err) {
        res.status(500).json(err)
    }
})
  
// to update values in data base
router.put('/updatedata/:id', async (req, res) => {
    try {
        const updateData = await users.findByIdAndUpdate(req.params.id, {
            $set: req.body       //query containing the req from body
        }, { new: true })  // new: true used to add new data if not given it will not update
        res.status(200).json(updateData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// login
router.post('/login', async (req, res) => {
    console.log('Backend login', req.body);
    try {
        const DB = await users.findOne({ email: req.body.email })
        !DB && res.status(401).json({ response: 'Please check Your Email' })
        console.log('Backend Data', DB);
        const hashedPassword = Crypto.AES.decrypt(DB.password, process.env.Crypto_js)
        console.log('Hashed Password is ', hashedPassword);
        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
        console.log('Original Password is', originalPassword);
        originalPassword != req.body.password && res.status(401).json({response:"Password and Email doesn't match"})
        const accessToken=Jwt.sign({
            id:DB._id
        },process.env.Jwt_Key,
        {expiresIn:'5d'})          // time in which the token is valid for
        const {password,...others}=DB._doc    // here ...others is used to allow all other data to be passed to the frontend other than the password. and _doc is used to store the necessary data and only pass that, else all useless data will be passed

        res.status(200).json({...others,accessToken})
    } catch (err) {
        res.status(400)
    }
})




// method to use backend verification //test

router.get("/verifytest/:id",verifyToken,verifyTokenAndAuthorization,async(req,res)=>{
    try {
        const verifytest=await users.findById(req.params.id)
        res.status(200).json(verifytest)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router

// "start": "set PORT=3006 && react-scripts start",
