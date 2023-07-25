const express = require('express')
const db = require('./db')
const PORT = 3001
const app = express()
const cors = require('cors')



app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`)
})

