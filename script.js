const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll(".nav-menu a");
const pages = document.querySelectorAll(".page");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Meny-toggle
hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// SPA-navigasjon
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    pages.forEach(p => p.classList.add("hidden"));
    document.getElementById(`page-${page}`).classList.remove("hidden");
    toggleMenu(); // Lukk menyen etter klikk
  });
});
