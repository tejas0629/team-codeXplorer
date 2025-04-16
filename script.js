function toggleDarkMode() {
    const body = document.body;
    const slider = document.getElementById("slider-icon");

    body.classList.toggle("dark-mode");

    // Change the icon based on the mode
    if (body.classList.contains("dark-mode")) {
      slider.textContent = "🌙";
    } else {
      slider.textContent = "🌞";
    }
  }

  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }