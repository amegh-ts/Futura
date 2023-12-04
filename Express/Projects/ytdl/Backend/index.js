const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


console.log("Backend started");
const musicRouter = require('./Router/MusicRouter')


app.use(express.json())

app.use('/', musicRouter)


app.listen(5000, () => {
    console.log('Connected to Server');
})
