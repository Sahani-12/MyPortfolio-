// 1. Typing Animation
var typed = new Typed(".auto-type", {
  strings: ["Full Stack Developer", "MERN Stack Expert", "Problem Solver", "AI Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// 2. Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  const icon = menuBtn.querySelector("i");
  if (navbar.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close menu on link click
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.querySelector("i").classList.remove("fa-times");
    menuBtn.querySelector("i").classList.add("fa-bars");
  });
});

// 3. 3D Tilt Effect
VanillaTilt.init(document.querySelectorAll(".skill, .project-card, .photo-frame"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.1
});

// 4. LeetCode Stats (Correct Username: Anandsahani617)
async function fetchLeetCodeStats() {
    const username = "Anandsahani617"; 
    const statsDiv = document.getElementById("leetcode-stats");

    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await response.json();

        if (data.status === "error") {
             statsDiv.innerHTML = "<p>User not found</p>";
             return;
        }

        statsDiv.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 15px; color: #fff;">
                🧠 Total Solved: <strong style="color: var(--main-color);">${data.totalSolved}</strong>
            </div>
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; font-size: 1.1rem;">
                <span style="color: #4ade80;">Easy: ${data.easySolved}</span>
                <span style="color: #facc15;">Medium: ${data.mediumSolved}</span>
                <span style="color: #f43f5e;">Hard: ${data.hardSolved}</span>
            </div>
            <a href="https://leetcode.com/u/${username}/" target="_blank" class="btn" style="margin-top: 20px; display: inline-block;">View Profile ↗</a>
        `;

    } catch (err) {
        console.error(err);
        statsDiv.innerHTML = "<p>Could not load LeetCode stats.</p>";
    }
}
fetchLeetCodeStats();