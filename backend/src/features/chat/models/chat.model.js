const { redisHelper } = require("../../../../config/redisHelper");


const getUserLastChatModel = async (id) => {
  try {
    const userLastChat = await redisHelper.get(`LM_${id}`);
    return userLastChat;
  } catch (error) {
    console.error(error.message);
  }
};

const storeUserLastChat = async (id, chatId) => {
  try {
    await redisHelper.set(`LM_${id}`, chatId);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getUserLastChatModel,
  storeUserLastChat,
};
