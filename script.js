// Set your existing dynamic birthday website URL below before publishing.
const DESTINATION_URL = "https://YOUR-DYNAMIC-BIRTHDAY-SITE-URL-HERE";
const SECRET_PASSWORD = "US1216";

const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const wishMessage = document.getElementById("wishMessage");
const hint = document.getElementById("hint");
const gate = document.getElementById("gate");
const openGate = document.getElementById("openGate");
const closeGate = document.getElementById("closeGate");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

candle.addEventListener("click", () => {
  wishMessage.classList.add("show");
  hint.textContent = "A wish for you, Ujala — may the beautiful things find you.";
  candle.setAttribute("aria-label", "Birthday candle lit. Happy Birthday, Ujala!");
  flame.style.filter = "drop-shadow(0 0 18px #ffdc86)";
});

function showGate() {
  gate.classList.add("open");
  gate.setAttribute("aria-hidden", "false");
  errorMessage.textContent = "";
  window.setTimeout(() => passwordInput.focus(), 100);
}
function hideGate() {
  gate.classList.remove("open");
  gate.setAttribute("aria-hidden", "true");
  passwordInput.value = "";
  errorMessage.textContent = "";
}
openGate.addEventListener("click", showGate);
closeGate.addEventListener("click", hideGate);
gate.addEventListener("click", (event) => {
  if (event.target === gate) hideGate();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideGate();
});

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const entered = passwordInput.value.trim();
  if (entered === SECRET_PASSWORD) {
    if (!DESTINATION_URL || DESTINATION_URL.includes("YOUR-DYNAMIC-BIRTHDAY-SITE-URL-HERE")) {
      errorMessage.textContent = "The birthday doorway needs its destination link first. Add your website URL in script.js.";
      return;
    }
    window.location.href = DESTINATION_URL;
  } else {
    errorMessage.textContent = "Not quite, little star ✨ Ask Ujala for the secret — it’s a sweet excuse to say hello.";
    passwordInput.value = "";
    passwordInput.focus();
  }
});
