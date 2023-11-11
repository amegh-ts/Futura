const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
dotenv.config() //to access the .env file in your directory

const userRouter=require('./Router/UserRouter')


// create database
mongoose.connect(process.env.Secret_Key).then(()=>{
    console.log('Database Connected');
})

app.use(express.json()) //to access the data stored in express() assigned to the app, Hereexpress.json is used to access data passed from the front end

// app.use('/api/data',userRouter)
app.use('/',userRouter)


app.listen(7000,()=>{
    console.log('Connected to Server');
})