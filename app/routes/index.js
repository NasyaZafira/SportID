const express = require('express')
const router = express.Router()
const { addKomen } = require('../controller/controllerComments')

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


module.exports = router