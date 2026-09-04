# Password Hasher & Verifier 🔐

A full-stack password hashing and verification tool built with Node.js, Express, and bcryptjs. Designed to generate secure bcrypt hashes and perform accurate verification matches.

## 🌟 Features

- **Password Hashing**: Encrypts plain passwords using industry-standard bcrypt algorithm (Salt Rounds = 10).
- **Password Verification**: Accurately verifies if a plain password matches a given bcrypt hash.
- **Input Sanitization**: Automatically trims leading and trailing whitespace to prevent verification errors caused by accidental spaces.
- **User-Friendly UI**: Includes a one-click copy feature that automatically fills the hash into the verification box.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, bcryptjs
- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Chuan-dev086/Password-Hasher.git](https://github.com/Chuan-dev086/Password-Hasher.git)
   cd Password-Hasher

```

2. **Install dependencies**
```bash
npm install

```


3. **Start the server**
```bash
node server.js

```


4. **Open the application**
Visit `http://localhost:3000` in your browser.

```

文件更新保存后，在终端运行以下三行命令把英文说明书推送到 GitHub：

```bash
git add README.md
git commit -m "docs: update README.md to English version"
git push
