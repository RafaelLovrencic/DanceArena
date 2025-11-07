const express = require("express");
const User = require("../models/user");
const Kategorije = require("../models/kategorije");
const Natjecanje = require("../models/natjecanje");


const router = express.Router();


router.get("/", async (req, res) => {
    try {
        
        const natjecanja = await Natjecanje.find()
            .populate("organizatorId")
            .populate("kategorije")
            .populate("suci");
        res.json(natjecanja);

    } catch (err) {
        console.error("Greška pri dohvaćanju natjecanja:", err);    
        res.status(500).json( {poruka: "Greška pri dohvaćanju natjecanja"} );
    }
});

router.get("/:id", async (req, res) => {
    try {

        const natjecanje = await Natjecanje.findById(req.params.id)
            .populate("organizatorId")
            .populate("kategorije")
            .populate("suci");

        if (!natjecanje) {
            return res.status(404).json({ poruka: "Natjecanje nije pronađeno" });
        }
        res.json(natjecanje);

    } catch (err) {
        console.error("Greška pri dohvaćanju natjecanja:", err);
        res.status(500).json({ poruka: "Greška pri dohvaćanju natjecanja" });
    }
});

router.put("/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const updateData = req.body;

        const updated = await Natjecanje.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        if (!updated) {
            return res.status(404).json({ poruka: "Natjecanje nije pronađeno" });
        }
        res.json({ poruka: "Natjecanje ažurirano", natjecanje: updated });
    
    } catch (err) {
        console.error("Greška pri ažuriranju natjecanja:", err);
        res.status(500).json({ poruka: "Greška pri ažuriranju natjecanja" });
    }
});

router.delete("/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const deleted = await Natjecanje.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ poruka: "Natjecanje nije pronađeno" });
        }
        res.json({ poruka: "Natjecanje uspješno obrisano", natjecanje: deleted });
    
    } catch (err) {
        console.error("Greška pri brisanju natjecanja:", err);
        res.status(500).json({ poruka: "Greška pri brisanju natjecanja" });
    }
});

router.post("/add", async (req, res) => {
    try {

        const { ime, opis, datum, lokacija, organizatorId, kategorije, suci } = req.body;

        const novoNatjecanje = new Natjecanje({
            ime,
            opis,
            datum,
            lokacija,
            organizatorId,
            kategorije,
            suci,
        });

        await novoNatjecanje.save();
        res.status(201).json({ poruka: "Natjecanje uspješno dodano", natjecanje: novoNatjecanje });
    
    } catch (err) {
        console.error("Greška pri dodavanju natjecanja:", err);
        res.status(500).json({ poruka: "Greška pri dodavanju natjecanja" });
    }
});

module.exports = router;
