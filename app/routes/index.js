const express = require('express')
const router = express.Router()
const { addKomen } = require('../controllers/controllerComments')
const {register}= require('../controllers/register')

router.get('/comments', function(req, res) {
    res.render('comment.ejs');
});

router.post('/comments', addKomen);
router.get('/homepagelight', function(req, res){
    res.render('pages/Homepage-light')
});
router.get('/homepagedark', function(req, res){
    res.render('pages/Homepage-dark')
});

router.get('/register', (req, res) => res.render('pages/register'))
router.post('/register', register)

module.exports = router