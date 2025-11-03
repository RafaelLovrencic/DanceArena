const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();


app.use(cors());
app.use(express.json()); // da dopustimo JSON body u POST requestu

app.get('/', (req, res) => {
    res.send('Dobrodošli na našu testnu stranicu!!!');
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Povezani ste s MongoDB Atlasom"))
    .catch(err => console.error("Greška pri povezivanju s MongoDB Atlasom:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
