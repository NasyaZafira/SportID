// load the things we need
var express = require('express');
// const { Sequelize } = require('sequelize')
var app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

//Static Files
app.use( express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/icon', express.static(__dirname + 'public/icon'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
// use res.render to load up an ejs view file
// bagian Register Page
app.get('/', function(req, res) {
    res.render('pages/register');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });