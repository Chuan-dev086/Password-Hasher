const express = require("express");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/api/hash", async (req, res) => {
  try {
    const { password } = req.body || {};
    if (!password) {
      return res.status(400).json({ error: "Please enter a password" });
    }
    const hashedPassword = await bcrypt.hash(password.trim(), 10);
    return res.json({ hashedPassword });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Server hashing failed" });
  }
});

app.post("/api/verify", async (req, res) => {
  try {
    let { password, hash } = req.body || {};
    if (!password || !hash) {
      return res
        .status(400)
        .json({ error: "Please enter both password and hash" });
    }
    password = String(password).trim();
    hash = String(hash).trim();

    const isMatch = await bcrypt.compare(password, hash);
    return res.json({ isMatch });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(400).json({ error: "Invalid hash format" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
