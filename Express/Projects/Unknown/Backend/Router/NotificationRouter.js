const router = require('express').Router()
const notification = require('../Models/NotificationSchema')
const { verifyToken } = require('../VerifyToken');


// send notification
router.post('/sendNotification',verifyToken, async (req, res) => {
    const newNotification = new notification(req.body)
    try {
        const savedNotification = await newNotification.save()
        res.status(200).json(savedNotification)
    } catch (error) {
        res.status(500).json(error)
    }
})

// get notification
router.get('/getNotification', verifyToken, async (req, res) => {
    try {
        const data = await notification.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
