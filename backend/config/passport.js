const passport = require("passport");
const { handleGoogleOAuth } = require("../src/features/auth/auth.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy; 

passport.use(
  new GoogleStrategy(
    {
      authorizationURL: process.env.GOOGLE_AUTH_URI,
      tokenURL: process.env.GOOGLE_TOKEN_URI,
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const data = await handleGoogleOAuth(profile);
        return cb(null, data);
      } catch (error) {
        return cb(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = { passport };
