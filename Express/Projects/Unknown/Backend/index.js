const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
dotenv.config()

// app.use(function (req,res,next) {
//     console.log('All time first check');
//     next()
// })


const userRouter = require('./Router/UserRouter')
const notificationRouter = require('./Router/NotificationRouter')
const chatRouter = require('./Router/ChatRouter')


mongoose.connect(process.env.Mongo_Key).then(() => {
    console.log('Database Connected');
})


app.use(express.json())

app.use('/', userRouter)
app.use('/', notificationRouter)
app.use('/api/chats', chatRouter)



app.listen(5000, () => {
    console.log('Connected to Server');
})