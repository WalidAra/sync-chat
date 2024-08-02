const prisma = require("../../config/prisma");
const { redisClient } = require("../../config/redis");

const ProviderSeeder = async () => {
  try {
    console.log("====================================");

    await prisma.provider.createMany({
      data: [{ name: "Google" }, { name: "Facebook" }, { name: "Direct" }],
    });

    console.log("done !!!");
    console.log("====================================");
  } catch (error) {
    console.error(error.message);
  }
};

// ProviderSeeder();

const FlushAll = async () => {
  try {
    await redisClient.connect();
    await redisClient.flushAll();
    console.log("====================================");
    console.log("done !!!");
    console.log("====================================");
  } catch (error) {
    console.error(error.message);
  }
};

// FlushAll();
