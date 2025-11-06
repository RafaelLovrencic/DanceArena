const express = require("express");
const jwt = require("jsonwebtoken");
const Korisnici = require("../models/user");

var router = express.Router();

var path = require('path');
var fs = require('fs');

router.post("/", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ greska: "Nema tokena" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { ime, uloga, imeKluba } = req.body;

    const korisnik = await Korisnici.findById(decoded.id);
    if (!korisnik) return res.status(404).json({ greska: "Korisnik nije pronađen" });

    if (korisnik.uloga) {
      return res.status(403).json({ greska: "Uloga je već odabrana i ne može se promijeniti" });
    }

    if (!ime || ime.trim() === "") return res.status(400).json({ greska: "Ime ne može biti prazno" });
    if (!uloga || !["sudac", "voditelj", "organizator"].includes(uloga))
      return res.status(400).json({ greska: "Nevaljana uloga" });

    const azuriranKorisnik = await Korisnici.findByIdAndUpdate(
      decoded.id,
      {
        ime,
        uloga,
        imeKluba: uloga === "voditelj" ? imeKluba : null,
      },
      { new: true }
    );

    res.json({ poruka: "Profil uspješno ažuriran", korisnik: azuriranKorisnik });
  } catch (err) {
    console.error(err);
    res.status(500).json({ greska: "Greška pri ažuriranju profila" });
  }
});

// trenutno se ne koristi
router.post('/registracija', function(req, res) {
    console.log(req.body);

    const putanja = path.join(__dirname, '..', 'repository', 'korisnici.repository.json');
    const podaci = JSON.parse(fs.readFileSync(putanja, 'utf8'));

    podaci.push(req.body);

    fs.writeFileSync(putanja, JSON.stringify(podaci, null, 2));

    res.status(200).send();
})

module.exports = router;