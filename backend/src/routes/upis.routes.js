var express = require('express');
var router = express.Router();


router.post('/registracija', function(req, res) {
    console.log(req.body);
    res.send();
})

module.exports = router;