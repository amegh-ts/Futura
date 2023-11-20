const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
dotenv.config() 

console.log('Backend Started Successfully.....');

const userDataRouter=require('./Router/UserDataRouter')

// Createing DB
mongoose.connect(process.env.Secret_Key).then(()=>{
    console.log('Connected to Database');
})

app.use(express.json())

app.use('/',userDataRouter)

app.listen(7000,()=>{
    console.log('Connected to Server');
})