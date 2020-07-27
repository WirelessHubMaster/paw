const express = require('express');
const router = express.Router();
const { sendSubscriptionMail, sendContactMail } = require('../helpers/sendMessage');

router.get('/', (req, res, next) => {
    res.render('index', {
        success: 'false'
    });})

router.post('/', (req, res, next) => {
    sendSubscriptionMail(req.body.email);
    res.render('index', {
        success: 'true'
    });
})


router.get('/contact', (req, res, next) => {
    res.render('contact',{
        success: 'false'
    });
})

router.post('/contact', (req, res, next) => {
    sendContactMail(req.body.name, req.body.email, req.body.subject, req.body.message);
    res.render('contact', {
        success: 'true'
    });
})


module.exports = router;