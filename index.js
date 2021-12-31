const express = require('express')
const { Sequelize } = require('sequelize')
const config = require('./config')

//Menjadikan variabel app sebagai module express
const app = express()

//Menentukan port localhost serta autentikasi database
app.listen(config.PORT, () => {
    console.log('Listening on port 3000...')
    const db = new Sequelize(
        config.DB_NAME,
        config.DB_USERNAME,
        config.DB_PASSWORD,
        {
            host: config.DB_HOST,
            port: config.DB_PORT,
            dialect: config.DB_DIALECT,
            logging: false
        }
    )
    db.authenticate()
    .then(() => {
        console.log('Successfully connected to local database')
    })
    .catch(thisError => {
        console.error('Failed to connect into local database', thisError)
        process.exit()
    })
})