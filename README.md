# 🔐 Password Hasher & Verifier
A full-stack password hashing and verification tool built with Node.js, Express, and bcryptjs. Designed to generate secure bcrypt hashes and perform accurate verification matches.
---
## ✨ Features
- ✅ **Password Hashing** - Encrypts plain passwords using industry-standard bcrypt algorithm (Salt Rounds = 10)
- ✅ **Password Verification** - Accurately verifies if a plain password matches a given bcrypt hash
- ✅ **Input Sanitization** - Automatically trims leading and trailing whitespace to prevent verification errors caused by accidental spaces
- ✅ **User-Friendly UI** - Includes a one-click copy feature that automatically fills the hash into the verification box
---
## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Backend** | Node.js, Express.js, bcryptjs |
| **Frontend** | HTML5, CSS3, JavaScript (Fetch API) |

---

## 🚀 How to Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Chuan-dev086/Password-Hasher.git
cd Password-Hasher
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
node server.js
```

### 4️⃣ Open the Application

Visit `http://localhost:3000` in your browser.

---

## 📋 Usage Instructions

1. **Generate Hash** - Enter a password in the input field and click the "Generate Hash" button
2. **Copy Hash** - Click the generated hash value to automatically copy it and fill the verification field
3. **Verify Password** - Enter the original password and click the "Verify" button to confirm if it matches

---

## 📁 Project Structure

```
Password-Hasher/
├── server.js           # Express server configuration
├── package.json        # Project dependencies
├── public/
│   ├── index.html      # Frontend interface
│   ├── style.css       # Stylesheet
│   └── script.js       # Frontend logic
└── README.md           # Project documentation
```

---

## 🔒 Security Features

- Uses **bcryptjs** library for password hashing to prevent rainbow table attacks
- Salt rounds set to **10**, balancing security and performance
- Server-side verification without storing plain text passwords on the client

---

## 💡 Resources

- [bcryptjs Documentation](https://github.com/dcodeIO/bcrypt.js)
- [Express.js Official Website](https://expressjs.com/)
- [Node.js Official Website](https://nodejs.org/)
