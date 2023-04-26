var express = require('express');
var router = express.Router();

const Celebrity = require('../models/Celebrity.model')

router.get('/all-celebrities', (req, res, next) => {
    Celebrity.find()
        .then((celebrities) => {

            res.render('celebrities/celebrities.hbs', {celebrities})
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/add-celebrities', (req, res, next) => {
    res.render('celebrities/new-celebrity.hbs')
})

router.post('/add-celebrities', (req, res, next) => {

    let newCelebrity = req.body
    Celebrity.create(
        newCelebrity
        )
        .then((createdCelebrity) => {
            console.log('Created celebrity:', createdCelebrity)
            res.redirect('/celebrities/all-celebrities')
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router;