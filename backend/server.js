// DEPENDENCIES
const express = require('express')
const app = express()
// const { Sequelize } = require('sequelize')
// const { addAbortSignal } = require('stream')

// CONFIGURATION/MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: ""
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
})