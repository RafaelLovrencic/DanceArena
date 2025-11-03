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
// app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB spojen");
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
