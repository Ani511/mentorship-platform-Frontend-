let users = JSON.parse(localStorage.getItem("users")) || [];
let requests = JSON.parse(localStorage.getItem("requests")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

export function registerUser({ name, email, password, role }) {
  if (users.some(u => u.email === email)) {
    return { error: "Email already registered." };
  }
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role,
    bio: "",
    skills: [],
    interests: []
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
}

export function loginUser({ email, password }) {
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return { error: "Invalid credentials" };
  localStorage.setItem("currentUser", JSON.stringify(user)); // Store currentUser in localStorage
  return { success: true };
}

export function getCurrentUser() {
  return currentUser; // Return the current logged-in user
}

export function logoutUser() {
  localStorage.removeItem("currentUser"); // Log the user out by removing currentUser from localStorage
}
