const express = require('express')
const {
    Sequelize
} = require('sequelize')
const PORT = 3000

//Menjadikan variabel app sebagai module express
const app = express()

app.listen(PORT, () => {
    console.log('Listening to port 3000...')
})

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static('app/public'));
app.set('views', 'app/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('login')
})