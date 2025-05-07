import { getUserProfile, setUserProfile } from "./utils.js";

const profileForm = document.getElementById("profileForm");
const bioField = document.getElementById("bio");
const skillsField = document.getElementById("skills");
const interestsField = document.getElementById("interests");
const profilePicInput = document.getElementById('profile-pic-upload');
const profilePicPreview = document.querySelector('.profile-pic');
const profileName = document.querySelector('.profile-name');

const users = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const viewUserId = localStorage.getItem("viewUserId");

let viewedUser = currentUser;

if (viewUserId && viewUserId !== currentUser.id.toString()) {
  viewedUser = users.find(u => u.id.toString() === viewUserId);
  profileForm.style.display = "none"; 
  profileName.textContent = viewedUser.name + "'s Profile";
} else {
  profileForm.style.display = "block";
  profileName.textContent = "Edit Profile";
}

if (viewedUser) {
  bioField.value = viewedUser.bio || "";
  skillsField.value = (viewedUser.skills || []).join(", ");
  interestsField.value = (viewedUser.interests || []).join(", ");
}

if (profilePicInput) {
  profilePicInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        profilePicPreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

if (profileForm && viewedUser.id === currentUser.id) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const bio = bioField.value;
    const skills = skillsField.value.split(",").map(s => s.trim());
    const interests = interestsField.value.split(",").map(i => i.trim());

    setUserProfile({ bio, skills, interests });
    alert("Profile updated successfully!");
  });
}
localStorage.removeItem("viewUserId");
