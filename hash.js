const bcrypt = require("bcrypt");
// the password of users
const userPassword = "mySuperSecretPassword123";
// 决定加密的“安全等级”（数字越大，加密越慢，黑客破解也越难，通常设为 10 或 12 比较合适）
const saltRounds = 10;

async function hashPassword(plainPassword) {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    console.log("Original Password:", plainPassword);
    console.log("Password Hashed:", hashedPassword);

    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log("Login Verification Results(Password Matching):", isMatch);
  } catch (error) {
    console.error("An error occurred while hashing the password:", error);
  }
}

hashPassword(userPassword)
