var express = require('express');
var router = express.Router();

router.get('/all-celebrities', (req, res, next) => {
    res.render('celebrities/celebrities.hbs')
})

router.get('/add-celebrities', (req, res, next) => {
    res.render('celebrities/new-celebrity.hbs')
})

module.exports = router;