var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.send('Dobrodošli na našu testnu stranicu!!!');
});

module.exports = router;