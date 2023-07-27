const express = require('express')
const db = require('./db')
const PORT = 3001
const app = express()
const cors = require('cors')
const routes = require('./routes')
// const routes = require('./routes/AppRouter.js')


app.use(express.json())
app.use(cors())

app.use('/', routes)



app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`)
})




