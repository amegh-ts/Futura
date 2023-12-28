const { createChat, findUserChats, findChat } = require('../Controller/ChatController')

const router = require('express').Router()


router.post('/createchat',createChat)
router.get('/chats/:userId',findUserChats)
router.get('/chat/find/:firstId/:secondId',findChat)

module.exports=router