const express = require('express')
const cors = require('cors')

const app = express()

// config Json Response
app.use(express.json())

//cors
app.use(cors ({ credentials: true, origin: 'http://localhost:3000'}))

// public folder
app.use (express.static('public'))

//routes
const PetRoutes = require('./routes/PetRoutes')
const UserRoutes = require('./routes/UserRoutes')

app.use('/pets', PetRoutes)
app.use('/users', UserRoutes)

app.listen(5000)