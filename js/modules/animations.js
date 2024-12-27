export function initAnimations() {
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Observe all elements with fade-in class
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Skill bar animations
  document.querySelectorAll(".skill-bar").forEach((bar) => {
    const level = bar.dataset.level || "0";
    bar.style.setProperty("--level", `${level}%`);
  });
}
