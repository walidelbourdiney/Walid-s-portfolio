export function initHeader() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuBtn?.addEventListener("click", () => {
    navLinks?.classList.toggle("active");

    // Update aria-expanded
    const isExpanded = navLinks?.classList.contains("active");
    mobileMenuBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header")) {
      navLinks?.classList.remove("active");
      mobileMenuBtn?.setAttribute("aria-expanded", "false");
    }
  });

  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth" });

      // Close mobile menu
      navLinks?.classList.remove("active");
    });
  });
}
