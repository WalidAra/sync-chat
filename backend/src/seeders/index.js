const prisma = require("../../config/prisma");

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

ProviderSeeder();