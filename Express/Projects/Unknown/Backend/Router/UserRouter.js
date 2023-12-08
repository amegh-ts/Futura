const router = require('express').Router()
const users = require('../Models/UserSchema')
const Crypto = require('crypto-js')
const Jwt = require('jsonwebtoken');


// Signup
router.post('/signup', async (req, res) => {
    req.body.password = Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
    console.log('Postman data ?', req.body);
    const newUser = new users(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})


//signin

router.post('/signin', async (req, res) => {
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
        const accessToken=Jwt.sign({id:DB._id},process.env.Jwt_Key,{expiresIn:'5d'})          
        const {password,...others}=DB._doc   
        res.status(200).json({...others,accessToken})
    } catch (err) {
        res.status(400)
    }
})


module.exports = router
