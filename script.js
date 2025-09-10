// Simple page interactivity

// 1) "Click Me" button on index
document.addEventListener("DOMContentLoaded", () => {
  const helloBtn = document.getElementById("helloBtn");
  const output = document.getElementById("output");
  if (helloBtn && output) {
    helloBtn.addEventListener("click", () => {
      output.textContent = "Thanks for visiting the school website!";
    });
  }

  // 2) Highlight active nav link
  const path = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach((a) => {
    const file = a.getAttribute("href");
    if (file === path || (path === "" && file === "index.html")) {
      a.classList.add("active");
    }
  });

  // 3) Courses page: toggle details
  const courseList = document.getElementById("courseList");
  if (courseList) {
    courseList.addEventListener("click", (e) => {
      const btn = e.target.closest(".details-btn");
      if (!btn) return;
      const card = btn.closest(".course-card");
      card.classList.toggle("open");
      btn.textContent = card.classList.contains("open")
        ? "Hide Details"
        : "Details";
    });
  }
});
