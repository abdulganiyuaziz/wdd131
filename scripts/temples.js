const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const links = document.querySelectorAll("nav a");
const figures = document.querySelectorAll(".gallery figure");

// Hamburger menu toggle
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Filtering logic
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;

    figures.forEach(fig => {
      const year = Number(fig.dataset.year);
      const size = fig.dataset.size;

      fig.style.display = "block";

      if (filter === "old" && year >= 1900) fig.style.display = "none";
      if (filter === "new" && year < 1900) fig.style.display = "none";
      if (filter === "large" && size !== "large") fig.style.display = "none";
      if (filter === "small" && size !== "small") fig.style.display = "none";
    });

    navMenu.classList.remove("show");
  });
});

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
