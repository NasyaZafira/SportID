const express = require('express')
const { Sequelize } = require('sequelize')
const PORT = 3000

//Menjadikan variabel app sebagai module express
const app = express()

//Memanggil fungsi appInit(app)
appInit(app)

app.listen(PORT, () => {
    console.log('Listening to port 3000...')
})

function appInit(app){
    app.use(express.static('app/public'))
    
    app.set('views', 'app/views')
    app.set('view engine', 'ejs')
    
    //Memanggil file .ejs
    app.get('/', (req, res) => {
        res.render('index')
    })
}