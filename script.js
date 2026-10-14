  
    // Mobile navigation
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
      });
    });

    // Dark / light theme
    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      themeBtn.textContent = isLight ? "🌙" : "☀️";
      themeBtn.setAttribute("aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme");
    });

    // Project category filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {
          project.hidden =
            filter !== "all" && project.dataset.category !== filter;
        });
      });
    });

    // Reveal sections as they enter the screen
    const revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealItems.forEach(item => observer.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add("visible"));
    }

    // Footer year
    document.getElementById("year").textContent = new Date().getFullYear();
    