var express = require('express');

var router = express.Router();


router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://wesmir.cz/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.render('pokus', { title: ' - Javascript ES6 tahák' });
    let ref = (req.header('referer') || '').split('/')[2];
    ref = req.headers.referer;

    console.log(ref);
});


module.exports = router;
