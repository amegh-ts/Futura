const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
dotenv.config()

console.log('Backend Started Successfully.....!');