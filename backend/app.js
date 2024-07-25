console.clear();
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const EndPointCounter = require("express-list-endpoints");

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const { createServer } = require("http");
const { passport } = require("./config/passport.js");
const { socketInitializer } = require("./config/socket.js");

const port = process.env.PORT || 2000;

const swaggerDocument = YAML.load("./swagger.yaml");
const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

const router = require("./src/features/index.js");

app.use("/api", router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const httpServer = createServer(app);

socketInitializer(httpServer);

httpServer.listen(port, () => {
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
