import { getCurrentUser } from "./mockApi.js";

const userList = document.getElementById("userList");
const currentUser = getCurrentUser();

const dummyUsers = [
  {
    id: "u1",
    name: "Raima Sen",
    role: "Mentor",
    skills: ["UI/UX", "Web Design"],
    interests: ["Product Design", "EdTech"],
    email: "dummy1@example.com"
  },
  {
    id: "u2",
    name: "Rohan Mehta",
    role: "Mentee",
    skills: ["C++", "DSA"],
    interests: ["Competitive Programming", "Startups"],
    email: "dummy2@example.com"
  },
  {
    id: "u3",
    name: "Sneha Sharma",
    role: "Mentor",
    skills: ["Data Science", "Machine Learning"],
    interests: ["AI", "Research"],
    email: "dummy3@example.com"
  },
  {
    id: "u4",
    name: "Arjun Patel",
    role: "Mentee",
    skills: ["HTML", "CSS", "JS"],
    interests: ["Frontend Dev", "UI Polish"],
    email: "dummy4@example.com"
  }
];

// Load existing users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Add dummy users only if their email is not already in localStorage
dummyUsers.forEach(dummy => {
  if (!users.some(u => u.email === dummy.email)) {
    users.push(dummy);
  }
});

// Update localStorage
localStorage.setItem("users", JSON.stringify(users));

// Show all users except current one
if (userList && currentUser) {
  users.forEach(user => {
    if (user.id !== currentUser.id) {
      const userItem = document.createElement("div");
      userItem.classList.add("user-item");
      userItem.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Skills:</strong> ${user.skills.join(", ")}</p>
        <p><strong>Interests:</strong> ${user.interests.join(", ")}</p>
        <button class="request-btn">Request Mentorship</button>
      `;
      userList.appendChild(userItem);
    }
  });
}
const roleFilter = document.getElementById("roleFilter");
const skillFilter = document.getElementById("skillFilter");
const interestFilter = document.getElementById("interestFilter");

function renderUsers(filteredUsers) {
  userList.innerHTML = "";

  filteredUsers.forEach(user => {
    if (user.id !== currentUser.id) {
      const userItem = document.createElement("div");
      userItem.classList.add("user-item");
      userItem.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Skills:</strong> ${user.skills.join(", ")}</p>
        <p><strong>Interests:</strong> ${user.interests.join(", ")}</p>
        <button class="view-profile-btn" data-id="${user.id}">View Profile</button>
        <button class="request-btn">Request Mentorship</button>
      `;
      userList.appendChild(userItem);
    }
  });

  // View profile click handler
  document.querySelectorAll(".view-profile-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const userId = e.target.dataset.id;
      localStorage.setItem("viewUserId", userId);
      window.location.href = "profile.html";
    });
  });
}

// Initial render
renderUsers(users);

// Filter logic
function applyFilters() {
  const role = roleFilter.value.toLowerCase();
  const skill = skillFilter.value.toLowerCase();
  const interest = interestFilter.value.toLowerCase();

  const filtered = users.filter(user => {
    const matchesRole = !role || user.role.toLowerCase() === role;
    const matchesSkill = !skill || user.skills.some(s => s.toLowerCase().includes(skill));
    const matchesInterest = !interest || user.interests.some(i => i.toLowerCase().includes(interest));
    return matchesRole && matchesSkill && matchesInterest && user.id !== currentUser.id;
  });

  renderUsers(filtered);
}

// Event listeners
roleFilter.addEventListener("change", applyFilters);
skillFilter.addEventListener("input", applyFilters);
interestFilter.addEventListener("input", applyFilters);
