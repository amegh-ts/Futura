const { createMessage } = require('../Controller/MessageController')

const router = require('express').Router()


router.post('/',createMessage)


module.exports=router