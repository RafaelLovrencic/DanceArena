const GoogleStrategy = require("passport-google-oauth20").Strategy;
const Korisnici = require("../models/User");

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
          const korisnik = await Korisnici.findOne({ google_id: profile.id });

          if (!korisnik) {
            korisnik = await user.create({
              ime: profile.displayName,
              email: profile.emails[0].value,
              photo: profile.photo[0].value,

              oauthProvider: {
                providerId: profile.id,
                type: "google",
              },

              google_id: profile.id,
              role: "user",
              uloga: null

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
