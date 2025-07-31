// script.js

// 3D tilt effect
VanillaTilt.init(document.querySelectorAll(".skill, .project-card, .glass-section, .hero-img img"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});

// Scroll reveal animations
AOS.init({
  duration: 1000,
  once: true
});

// LeetCode stats updater
const statsDiv = document.getElementById("leetcode-stats");
const profileURL = "https://leetcode.com/u/Anandsahani617/"; // Replace with your profile

async function fetchLeetCodeStats() {
  try {
    const response = await fetch(`https://leetprofile.com/api/leetcode/${profileURL.split("/").pop()}`);
    const data = await response.json();
    statsDiv.innerHTML = `
      Problems Solved: <span>${data.totalSolved}</span> | Easy: <span>${data.easySolved}</span> | Medium: <span>${data.mediumSolved}</span> | Hard: <span>${data.hardSolved}</span><br>
      <a href='${profileURL}' target='_blank' style='color:#00ffe5;'>Visit Profile ↗</a>
    `;
  } catch (err) {
    statsDiv.innerHTML = "<p>Could not load LeetCode stats</p>";
  }
}

fetchLeetCodeStats();

// Dark/Light mode toggle (optional)
const toggleTheme = document.getElementById("theme-toggle");
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleTheme.innerText = document.body.classList.contains("light-mode") ? "🌙 Dark Mode" : "☀️ Light Mode";
  });
}


{/* <script> */}
  async function fetchLeetCodeData() {
    const username = "AnandSahani7"; // replace with your real LeetCode ID
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    const data = await res.json();

    document.getElementById("total-solved").textContent = data.totalSolved;
    document.getElementById("easy-count").textContent = data.easySolved;
    document.getElementById("medium-count").textContent = data.mediumSolved;
    document.getElementById("hard-count").textContent = data.hardSolved;
  }

  fetchLeetCodeData();
// </script>