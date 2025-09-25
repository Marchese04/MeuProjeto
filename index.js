document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  const savedTheme = localStorage.getItem("theme") || "light-mode";
  body.classList.add(savedTheme);

  if (savedTheme === "dark-mode") {
    toggle.checked = true;
    icon.classList.replace("bi-sun", "bi-moon");
  } else {
    toggle.checked = false;
    icon.classList.replace("bi-moon", "bi-sun");
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      icon.classList.replace("bi-sun", "bi-moon");
      localStorage.setItem("theme", "dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      icon.classList.replace("bi-moon", "bi-sun");
      localStorage.setItem("theme", "light-mode");
    }
  });
});