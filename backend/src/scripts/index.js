const crypto = require("crypto");

function generateRandomChars(length) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}

module.exports = { generateRandomChars };

