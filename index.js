const express = require('express')
const { Sequelize } = require('sequelize')
const config = require('./app/config/config.json')
const routes = require('./app/routes/index')
const PORT = 3000

module.exports = config

//Menjadikan variabel app sebagai module express
const app = express()
appInit(app)

app.listen(PORT, () => {
    console.log('Listening to port 3000...')

    const db = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password,
        {
            host: config.development.host,
            dialect: config.development.dialect,
            logging: false
        }
    )
    db.authenticate()
    .then(() => {
        console.log('Succesfully connected to Local database')
    })
    .catch(thisError => {
        console.error('Failed to connect into Local database', thisError)
        process.exit()
    })
})

function appInit(app) {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(express.static('app/public'))

    app.set('views', 'app/views')
    app.set('view engine', 'ejs')
    app.use('/', routes)
}