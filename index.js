const express = require('express')
const { Sequelize } = require('sequelize')
const PORT = 3000

//Menjadikan variabel app sebagai module express
const app = express()

app.listen(PORT, () => {
    console.log('Listening to port 3000...')
})