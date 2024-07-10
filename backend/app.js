require("dotenv").config();

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const EndPointCounter = require("express-list-endpoints");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const port = process.env.PORT || 2000;
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

const { handleGoogleOAuth } = require("./src/features/auth/auth.model.js");

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

const router = require("./src/features/index.js");

app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  const endpointsCount = EndPointCounter(router).length;

  console.log("\n=========================================");
  console.log(`🚀 Server is running on port: ${port}`);
  console.log("=========================================");
  console.log(`📝 Total Endpoints:`, endpointsCount);
  console.log(`📄 API Docs: http://localhost:${port}/docs/`);
  console.log("=========================================");
  console.log("💡 Press CTRL + C to stop the server");
  console.log("=========================================\n");
});
