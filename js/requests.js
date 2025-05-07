import { getCurrentUser, logoutUser } from "./mockApi.js";

let users = JSON.parse(localStorage.getItem("users")) || [];
let requests = JSON.parse(localStorage.getItem("requests")) || [];
const currentUser = getCurrentUser();

const incomingContainer = document.getElementById("incomingRequests");
const sentContainer = document.getElementById("sentRequests");

function saveRequests() {
  localStorage.setItem("requests", JSON.stringify(requests));
}

function renderRequests() {
  incomingContainer.innerHTML = "";
  sentContainer.innerHTML = "";

  requests.forEach((req, index) => {
    if (req.to === currentUser.email) {
      // Incoming request
      const fromUser = users.find(u => u.email === req.from);
      const div = document.createElement("div");
      div.className = "request-item";
      div.innerHTML = `
        <p><strong>${fromUser.name}</strong> sent you a mentorship request.</p>
        <p>Status: ${req.status}</p>
        ${
          req.status === "pending"
            ? `<button class="accept-btn" data-index="${index}">Accept</button>
               <button class="reject-btn" data-index="${index}">Reject</button>`
            : ""
        }
      `;
      incomingContainer.appendChild(div);
    }

    if (req.from === currentUser.email) {
      // Sent request
      const toUser = users.find(u => u.email === req.to);
      const div = document.createElement("div");
      div.className = "request-item";
      div.innerHTML = `
        <p>You sent a request to <strong>${toUser.name}</strong>.</p>
        <p>Status: ${req.status}</p>
      `;
      sentContainer.appendChild(div);
    }
  });

  // Handle buttons
  document.querySelectorAll(".accept-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const i = +e.target.dataset.index;
      requests[i].status = "accepted";
      saveRequests();
      renderRequests();
    });
  });

  document.querySelectorAll(".reject-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const i = +e.target.dataset.index;
      requests[i].status = "rejected";
      saveRequests();
      renderRequests();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!currentUser) return;

  renderRequests();
});
const requestForm = document.getElementById("requestForm");
if (requestForm) {
  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const menteeEmail = document.getElementById("menteeEmail").value.trim();
    const mentee = users.find(u => u.email === menteeEmail);

    if (mentee && mentee.role.toLowerCase() === "mentee") {
      requests.push({
        from: currentUser.email,
        to: menteeEmail,
        status: "pending"
      });
      saveRequests();
      renderRequests();
      alert("Request sent!");
    } else {
      alert("Invalid mentee email.");
    }
  });
}

// Logout handler
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    logoutUser();
    window.location.href = "index.html";
  });
}
