const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/userRoutes')

const connectDB = require('./config/database')

const app = express()
dotenv.config()
connectDB()

var corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/users', userRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server started at port: ' + port)
})