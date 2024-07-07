const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;

class JwtHelper {
  static generateToken(payload, recall) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: recall ? "1h" : "15s" });
  }

  static verifyToken(token) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (error) {
      return { error: "Token is invalid or expired" };
    }
  }
}

module.exports = JwtHelper;
