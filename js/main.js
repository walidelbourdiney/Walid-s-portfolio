// Import modules
import { initHeader } from "./modules/header.js";
import { loadSection } from "./modules/sections.js";
import { initAnimations } from "./modules/animations.js";

// Initialize components
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initAnimations();

  // Load sections
  loadSection("about", "sections/about.html");
  loadSection("projects", "sections/projects.html");
  loadSection("blog", "sections/blog.html");
  loadSection("contact", "sections/contact.html");

  // Set footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
