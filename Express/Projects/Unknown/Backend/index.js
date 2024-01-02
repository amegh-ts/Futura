const express = require('express')
const http = require('http');
const socketIO = require('socket.io');
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const server = http.createServer(app);
const io = socketIO(server);
app.use(cors())
dotenv.config()

// app.use(function (req,res,next) {
//     console.log('All time first check');
//     next()
// })


const userRouter = require('./Router/UserRouter')
const notificationRouter = require('./Router/NotificationRouter')
const chatRouter = require('./Router/ChatRouter')
const messageRouter = require('./Router/MessageRouter')


mongoose.connect(process.env.Mongo_Key).then(() => {
    console.log('Database Connected');
})


app.use(express.json())

app.use('/', userRouter)
app.use('/', notificationRouter)
app.use('/', chatRouter)
app.use('/api/messages', messageRouter)



app.listen(5000, () => {
    console.log('Connected to Server');
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});