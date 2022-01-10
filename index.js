const express = require('express')
const {
    Sequelize
} = require('sequelize')
const PORT = 3000
const router = require('./app/routes/routesLogin')
const config = require('./app/config/config.json')
module.exports = config

//Menjadikan variabel app sebagai module express
const app = express()

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(express.static('app/public'))
app.set('views', 'app/views')
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(PORT, () => {
    console.log('Listening to port 3000...')
    const db = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password, {
            host: config.development.host,
            dialect: config.development.dialect,
            logging: false
        }
    )
    db.authenticate()
        .then(() => {
            console.log('Berhasil Connect to Database')
        })
        .catch(thisError => {
            console.error('Gagal', thisError)
            process.exit()
        })
})

app.get('/', (req, res) => {
    res.render('login')
})