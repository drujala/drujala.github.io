// Replace this placeholder with the full URL of your existing dynamic birthday website.
const DESTINATION_URL = "https://YOUR-DYNAMIC-BIRTHDAY-SITE-URL-HERE";
const SECRET_PASSWORD = "US1216";

const form = document.getElementById("passwordForm");
const input = document.getElementById("password");
const error = document.getElementById("errorMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() !== SECRET_PASSWORD) {
    error.textContent = "Not quite, little star ✨ Ask Ujala for the secret — it’s a sweet excuse to say hello.";
    input.value = "";
    input.focus();
    return;
  }
  if (!DESTINATION_URL || DESTINATION_URL.includes("YOUR-DYNAMIC-BIRTHDAY-SITE-URL-HERE")) {
    error.textContent = "Add your birthday website link in script.js first.";
    return;
  }
  window.location.href = DESTINATION_URL;
});
