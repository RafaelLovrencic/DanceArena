var express = require('express');
var fs = require('fs');
var path = require('path');

var router = express.Router();


router.post('/registracija', function(req, res) {
    console.log(req.body);

    const putanja = path.join(__dirname, '..', 'repository', 'korisnici.repository.json');
    const podaci = JSON.parse(fs.readFileSync(putanja, 'utf8'));

    podaci.push(req.body);

    fs.writeFileSync(putanja, JSON.stringify(podaci, null, 2));

    res.send(200);
})

module.exports = router;