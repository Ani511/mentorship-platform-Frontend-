export function getUserProfile() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function setUserProfile({ bio, skills, interests }) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const current = JSON.parse(localStorage.getItem("currentUser"));
  const updatedUsers = users.map(u => {
    if (u.id === current.id) {
      return { ...u, bio, skills, interests };
    }
    return u;
  });
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  localStorage.setItem("currentUser", JSON.stringify({ ...current, bio, skills, interests }));
}
