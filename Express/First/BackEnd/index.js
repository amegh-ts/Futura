const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())                     // cors is a middleware .app.use is the first thing to work so cors will get start first
dotenv.config() //to access the .env file in your directory

// Application level middlewares
app.use(function (req,res,next) {
    console.log('All time first check');
    next()
})

const userRouter = require('./Router/UserRouter')
const crudRouter = require('./Router/CrudRouter')


// create database
mongoose.connect(process.env.Secret_Key).then(() => {
    console.log('Database Connected');
})

app.use(express.json()) //to access the data stored in express() assigned to the app, Here express.json is used to access data passed from the front end


// app.use('/api/data',userRouter)
app.use('/', userRouter)
app.use('/', crudRouter)

app.listen(5000, () => {
    console.log('Connected to Server');
})

