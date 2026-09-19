// add eventlistener to the input for getting the value of input
const passwordInput = document.getElementById("passwordInput");
const hashResult = document.getElementById("hashResult");

const verifyPasswordInput = document.getElementById("verifyPasswordInput");
const verifyHashInput = document.getElementById("verifyHashInput");
const verifyResult = document.getElementById("verifyResult");

// reset the old hash password when user editng the normal password input
passwordInput.addEventListener("input", () => {
  if (hashResult.innerText !== "Hash result will appear here") {
    hashResult.innerText = "Hash result will appear here";
  }
});

// clear the verify password when user is editng the noral password input
const resetVerifyResult = () => {
  if (verifyResult.innerText !== "Verification result will appear here") {
    verifyResult.innerText = "Verification result will appear here";
  }
};
/*add event listener to verify both password input and hash input 
 if one of the input have changes, the verification is no more effective and use function resetVerifyResult to reset the input */

verifyPasswordInput.addEventListener("input", resetVerifyResult);
verifyHashInput.addEventListener("input", resetVerifyResult);

// function that generate hash
async function handleHash() {
  const password = passwordInput.value;
  //verify the input make sure the input have value inside
  if (!password) {
    alert("Please enter a password");
    return;
  }
  //   send request to the express backend
  try {
    const response = await fetch("/api/hash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await response.json();
    hashResult.innerText = data.hashedPassword || data.error;
  } catch (err) {
    hashResult.innerText = "Network error";
  }
}

async function copyHash() {
  const hashText = hashResult.innerText.trim();
  if (
    !hashText ||
    hashText.includes("appear here") ||
    hashText.includes("error")
  ) {
    alert("Nothing to copy!");
    return;
  }
  await navigator.clipboard.writeText(hashText);
  verifyHashInput.value = hashText;
  // 自动填入新哈希后，也顺便把上一次残留的验证结果清空
  resetVerifyResult();
  alert("Copied to clipboard and auto-filled into verification box!");
}

async function handleVerify() {
  const password = verifyPasswordInput.value.trim();
  const hash = verifyHashInput.value.trim();
  if (!password || !hash) {
    alert("Please enter both password and hash");
    return;
  }
  try {
    const response = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, hash }),
    });
    const data = await response.json();
    if (data.isMatch !== undefined) {
      verifyResult.innerText = data.isMatch
        ? "Match! (Password is correct)"
        : "No match! (Password is wrong)";
    } else {
      verifyResult.innerText = data.error || "Verification failed";
    }
  } catch (err) {
    verifyResult.innerText = "Network error";
  }
}
