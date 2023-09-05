var express = require('express'); 
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
    res.render('node');
});

router.get('/message/:msgParam', function (req, res, next) {
    res.render('node', {message: req.params.msgParam});
});

router.post('/message', function (req, res, next) {
    var messageVariable = req.body.messageBody;
    res.redirect('/message/' + messageVariable);
});


module.exports = router; 
