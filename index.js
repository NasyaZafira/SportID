const express = require('express')
const { Sequelize } = require('sequelize')
const PORT = 3000

//Menjadikan variabel app sebagai module express
const app = express()

//Static Files
app.use(express.static('app/public'))

// set the view engine to ejs
app.set('views', 'app/views');
app.set('view engine', 'ejs');

//Halaman homepage
app.get('/homepagelight', function(req, res){
    res.render('pages/Homepage-light')
});
app.get('/homepagedark', function(req, res){
    res.render('pages/Homepage-dark')
});

app.listen(PORT, () => {
    console.log('Listening to port 3000...')
})