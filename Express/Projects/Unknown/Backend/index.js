const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const socketIO = require('socket.io');

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
const { configureSocketIO } = require('./Router/ChatRouter')


configureSocketIO(io);

// Use the MONGO_DB_NAME variable from your .env file
// const mongoDbName = process.env.MONGO_DB_NAME || 'default_database_name';

// mongoose.connect(`${process.env.Mongo_Key}/${mongoDbName}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log(`Connected to the database: ${mongoDbName}`);
//     })
//     .catch((error) => {
//         console.error('Error connecting to the database:', error.message);
//     });


mongoose.connect(process.env.Mongo_Key).then(() => {
    console.log('Database Connected');
})


app.use(express.json())

app.use('/', userRouter)
app.use('/', notificationRouter)
app.use('/', router);



app.listen(5000, () => {
    console.log('Connected to Server');
})