const express = require("express");
const cors = require("cors");
require("dotenv").config();
const EndPointCounter = require("express-list-endpoints");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const port = process.env.PORT || 2000;
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();
app.use(cors());
app.use(express.json());

const router = require("./routes");

app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  const endpointsCount = EndPointCounter(router).length;

  console.log("\n=========================================");
  console.log(`🚀 Server is running on port: ${port}`);
  console.log("=========================================");
  console.log(`📝 Total Endpoints: ${endpointsCount}`);
  console.log(`📄 API Docs: http://localhost:${port}/docs/`);
  console.log("=========================================");
  console.log("💡 Press CTRL + C to stop the server");
  console.log("=========================================\n");
});
