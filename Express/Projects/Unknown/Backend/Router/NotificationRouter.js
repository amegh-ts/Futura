const router = require('express').Router()
const notification = require('../Models/NotificationSchema')
const { verifyToken } = require('../VerifyToken');

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



module.exports = router
