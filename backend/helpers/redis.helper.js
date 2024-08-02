const { redisClient } = require("../config/redis");

class RedisHelper {
  constructor() {
    redisClient.connect();
  }

  async set(key, value) {
    try {
      return await redisClient.set(key, value);
    } catch (error) {
      console.error(error.message);
    }
  }

  async get(key) {
    try {
      return await redisClient.get(key);
    } catch (error) {
      console.error(error.message);
    }
  }

  async exists(key) {
    try {
      return await redisClient.exists(key);
    } catch (error) {
      console.error(error.message);
    }
  }

  async keys(pattern) {
    try {
      return await redisClient.keys(pattern);
    } catch (error) {
      console.error(error.message);
    }
  }

  async delete(key) {
    try {
      await redisClient.del(key);
    } catch (error) {
      console.error("Delete Error:", error.message);
      return null;
    }
  }

  async pushInList(key, value) {
    try {
      await redisClient.lPush(key, value);
    } catch (error) {
      console.error("Push Error:", error.message);
      return null;
    }
  }

  async popFromList(key) {
    try {
      return await redisClient.rPop(key);
    } catch (error) {
      console.error("Pop Error:", error.message);
      return null;
    }
  }

  async getList(key){
    return await redisClient.lRange(key, 0, -1);
  }
}

const redisHelper = new RedisHelper();
module.exports = { redisHelper };
