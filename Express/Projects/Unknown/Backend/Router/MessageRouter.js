const { createMessage, getMessages } = require('../Controller/MessageController')

const router = require('express').Router()


router.post('/', createMessage)
router.get('/:chatId', getMessages)


module.exports = router