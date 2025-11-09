const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();

const homeRuter = require('./src/routes/home.routes')
const authRuter = require("./src/routes/auth.routes");
const unosRuter = require("./src/routes/unos.routes");

const app = express();


app.use(express.json()); // da dopustimo JSON body u POST requestu

app.use(express.json()); // da dopustimo JSON body u POST requestu

app.get('/', (req, res) => {
    res.send('Dobrodošli na našu testnu stranicu!!!');
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Povezani ste s MongoDB Atlasom"))
    .catch(err => console.error("Greška pri povezivanju s MongoDB Atlasom:", err));



const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// Google OAuth konfiguracija
require("./src/config/passport")(passport);
app.use(passport.initialize());

app.use('/', homeRuter)
app.use("/auth", authRuter);
app.use("/unospodataka", unosRuter);

app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
