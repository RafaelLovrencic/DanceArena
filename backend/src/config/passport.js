const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Korisnici = require("../models/user");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let korisnik = await Korisnici.findOne({ "oauthProvider.providerId": profile.id });

          if (!korisnik) {
            korisnik = await Korisnici.create({
              ime: profile.displayName,
              email: profile.emails?.[0]?.value || "",
              photo: profile.photos?.[0]?.value || "",
              oauthProvider: {
                providerId: profile.id,
                type: "google",
              },
            });
          }

          return done(null, korisnik);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
