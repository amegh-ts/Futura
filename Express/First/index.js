
const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config() //to access the .env file in your directory


// create database
mongoose.connect(process.env.Secret_Key).then(()=>{
    console.log('Database Connected');
})


app.listen(3000,()=>{
    console.log('Connected to Server');
})