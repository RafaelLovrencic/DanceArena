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
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173", // trenutno zbog testiranja dok još stranica nije na serveru
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});


// app.use(express.urlencoded({ extended: true }));

async function startMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB spojen");
  } catch (err) {
    console.error("Greška pri spajanju na MongoDB:", err);
  }
}

startMongo();



// Google OAuth konfiguracija
require("./src/config/passport")(passport);
app.use(passport.initialize());

app.use('/', homeRuter)
app.use("/auth", authRuter);
app.use("/unospodataka", unosRuter);

app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
