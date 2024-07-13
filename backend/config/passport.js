const passport = require("passport");
const { handleGoogleOAuth, handleGitHubOAuth } = require("../src/features/auth/auth.model");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

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

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const data = await handleGitHubOAuth(profile, accessToken);
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
