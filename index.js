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
app.get('/homepage', function(req, res) {
    res.render('pages/homepage');
});

app.get('/register', function(req, res) {
    res.render('pages/register');
});

app.get('/report', function(req, res) {
    res.render('pages/report');
});
app.get('/tentang-kami', function(req, res) {
    res.render('pages/tentang-kami');
});
app.get('/kebijakan-privasi', function(req, res) {
    res.render('pages/kebijakan-privasi');
});

app.listen(PORT, () => {
    console.log('Listening to port 3000...')
})

