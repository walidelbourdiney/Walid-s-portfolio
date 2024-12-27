export async function loadSection(id, path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Failed to load section");

    const html = await response.text();
    console.log(`Loading ${id} section:`, html.substring(0, 100)); // Debug log

    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = html;
      
      if (id === 'about') {
        setTimeout(() => {
          // Debug logs
          console.log('Features:', document.querySelectorAll('.feature').length);
          console.log('Skills container:', document.querySelector('.skills-container'));
          
          initSkillBars();
          const features = document.querySelectorAll('.feature');
          const skillsContainer = document.querySelector('.skills-container');
          
          features.forEach((feature, index) => {
            console.log(`Feature ${index}:`, feature.innerHTML); // Debug log
            feature.style.opacity = '1';
            feature.style.visibility = 'visible';
          });
          
          if (skillsContainer) {
            skillsContainer.style.opacity = '1';
            skillsContainer.style.visibility = 'visible';
          }
        }, 100);
      }
    }

    initSectionHandlers(id);
  } catch (error) {
    console.error(`Error loading section ${id}:`, error);
  }
}

function initSectionHandlers(id) {
  switch (id) {
    case "contact":
      initContactForm();
      break;
    case "projects":
      initProjectFilters();
      break;
  }
}

function initContactForm() {
  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      // Here you would typically send the form data to a server
      console.log("Form submitted:", Object.fromEntries(formData));
      form.reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  });
}

function initProjectFilters() {
  const filters = document.querySelectorAll(".project-filter");
  const projects = document.querySelectorAll(".project-card");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const category = filter.dataset.category;

      filters.forEach((f) => f.classList.remove("active"));
      filter.classList.add("active");

      projects.forEach((project) => {
        if (category === "all" || project.dataset.category === category) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
}

function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const level = bar.dataset.level;
    bar.style.setProperty('--level', `${level}%`);
  });
}
