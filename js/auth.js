import { registerUser, loginUser } from "./mockApi.js";

console.log("auth.js loaded");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error");

if (registerForm) {
  console.log("Register form found");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const result = registerUser({ name, email, password, role });

    if (result.error) {
      if (errorMsg) {
        errorMsg.textContent = result.error;
        errorMsg.style.color = "red";
      }
    } else {
      if (errorMsg) {
        errorMsg.textContent = "Registration successful! Redirecting to login...";
        errorMsg.style.color = "green";
      }
      setTimeout(() => {
        window.location.href = "login.html"; // Redirect after 2 seconds
      }, 2000);
    }
  });
}

if (loginForm) {
  console.log("Login form found");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const result = loginUser({ email, password });

    if (result.error) {
      if (errorMsg) {
        errorMsg.textContent = result.error;
        errorMsg.style.color = "red";
      }
    } else {
      if (errorMsg) {
        errorMsg.textContent = "Login successful! Redirecting...";
        errorMsg.style.color = "green";
      }
      setTimeout(() => {
        window.location.href = "profile.html"; // Redirect to profile page after login
      }, 2000);
    }
  });
}
