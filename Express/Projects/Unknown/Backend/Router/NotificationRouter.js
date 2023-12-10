const router = require('express').Router()
const notification = require('../Models/NotificationSchema')
const { verifyToken } = require('../VerifyToken');


// send notification
router.post('/sendNotification',verifyToken, async (req, res) => {
    // console.log('Postman data ?', req.body);
    const newNotification = new notification(req.body)
    try {
        const savedNotification = await newNotification.save()
        res.status(200).json(savedNotification)
    } catch (error) {
        console.log(error);
    }
})

// get notification
router.get('/getNotification', verifyToken, async (req, res) => {
    try {
        const datas = await notification.find()
        console.log(datas);
        res.status(200).json(datas)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
