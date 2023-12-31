const router = require('express').Router()
const users = require('../Models/UserSchema')
const Crypto = require('crypto-js')
const Jwt = require('jsonwebtoken');
const { verifyToken, verifyTokenAndAuthorization } = require('../VerifyToken');
const { accountRecovery } = require('../Controller/appController');


// Signup
router.post('/signup', async (req, res) => {
    req.body.password = Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
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
    try {
        const DB = await users.findOne({ email: req.body.email })
        !DB && res.status(401).json({ response: 'Please check Your Email' })
        const hashedPassword = Crypto.AES.decrypt(DB.password, process.env.Crypto_js)
        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
        originalPassword != req.body.password && res.status(401).json({ response: "Password and Email doesn't match" })
        const accessToken = Jwt.sign({ id: DB._id }, process.env.Jwt_Key, { expiresIn: '5d' })
        const { password, ...others } = DB._doc
        res.status(200).json({ ...others, accessToken })
    } catch (err) {
        console.log(err);
        res.status(500).json({ response: 'Internal Server Error' });
    }
})

//all users
router.get('/alldata', async (req, res) => {
    try {
        const data = await users.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Profile
router.get('/profile/:id', verifyToken, verifyTokenAndAuthorization, async (req, res) => {
    try {
        const id = await users.findById(req.params.id)
        const hashedPassword = Crypto.AES.decrypt(id.password, process.env.Crypto_js)
        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
        const { password, ...others } = id._doc
        res.status(200).json({ ...others, originalPassword })
    } catch (error) {
        res.status(500).json(error)
    }
})

//update profile
router.put('/updateprofile/:id',verifyToken, async (req, res) => {
    try {
        const updateData = await users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//update password
router.put('/updatepass/:id',verifyToken, async (req, res) => {
    try {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
        const updateData = await users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateData)
    } catch (err) {
        res.status(500).json(err)
    }
})

// account recovery
router.post('/recovery',accountRecovery)


module.exports = router
