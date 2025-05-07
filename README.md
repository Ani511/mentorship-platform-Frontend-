## 🧑‍🏫 Mentorship Matching Platform
A responsive and intuitive web application that helps mentors and mentees connect based on skills, interests, and goals. Built as a take-home assignment for a Frontend Engineer Intern role using vanilla HTML, CSS, and JavaScript — no frameworks or external libraries.

## 🌐 Deployed Application
👉 Visit the Live Site
https://mentorship-platform-frontend.netlify.app/

## 📁 Project Structure
<pre> /
├── index.html            // Homepage
├── login.html            // User login
├── register.html         // User registration
├── profile.html          // User profile creation/editing
├── discover.html         // Browse user profiles
├── requests.html         // Send & receive mentorship requests
│
├── css/
│   ├── index.css
│   ├── login.css
│   ├── register.css
│   ├── profile.css
│   ├── discover.css
│   └── requests.css
│
├── js/
│   ├── index.js
│   ├── login.js
│   ├── register.js
│   ├── profile.js
│   ├── discover.js
│   ├── requests.js
│   └── mockApi.js        // Handles mocked API behavior using localStorage
 </pre>
## ✅ Features
🔐 Authentication
   -**Register and login with email/password**
   -**Logout functionality**
   -**Mocked auth using localStorage**

👤 Profile Management
    -**Setup profile with name, role (mentor/mentee), skills, interests, and bio**
    -**Edit profile any time**
    -**All profile data is stored in browser localStorage**

🔍 User Discovery
    -**Browse other user profiles**
    -**Filter users by role, skills, or interests**
    -**View complete profile cards**

📩 Mentorship Requests
    -**Send requests from mentor to mentee**
    -**Accept or reject incoming requests**
    -**See status of all sent and received requests**

## 🛠️ Technologies Used
- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **LocalStorage** (to simulate backend behavior)
- **Netlify** (for deployment)

## 🚀 Deployment
To Deploy Your Own Version:
**Push your project to GitHub (make sure it's public or connected to Netlify properly).
Go to Netlify and log in.
Click on “Add new site” → “Import an existing project”.
Connect your GitHub account and choose the repository.
In build settings, leave it blank since it's a static site.
Set the entry point to index.html.
Click Deploy Site.**

Or Run Locally:
**Open the index.html file directly in your browser (double-click or drag into browser).
Alternatively, use Live Server in VS Code:
Right-click index.html
Click "Open with Live Server"**


## 📄 Deployment
Approach:
**Built a multi-page vanilla frontend to simulate a real-world mentorship platform.
Used localStorage to mimic backend operations like authentication, profile handling, and request exchange.**

Challenges Faced:
**Ensuring mock data behaves realistically.
Creating consistent design across all pages.
Handling feedback messages, errors, and UI states without any framework.**

Solutions:
**Modularized JS into pages and used common utility functions.
Designed consistent layout and interaction feedback using custom CSS.
Integrated mock API logic cleanly with user interactions.**

## 📬 Contact
For queries or suggestions, feel free to reach out on GitHub

