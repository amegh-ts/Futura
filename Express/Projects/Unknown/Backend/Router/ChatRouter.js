const { createChat, findUserChats, findChat } = require('../Controller/ChatController')

const router = require('express').Router()


router.post('/',createChat)
router.get('/:userId',findUserChats)
router.get('/find/:firstId/:secondId',findChat)

module.exports=router