 const burger = document.getElementById("burger");
    const sidebar = document.getElementById("sidebar");
    let isMenuOpen = false;
    let isAboutOpen = false;

    burger.addEventListener("click", () => {
      if (!isAboutOpen) {
        isMenuOpen = !isMenuOpen;
        sidebar.classList.toggle("active");
        burger.classList.toggle("open");
      }
    });

    // sessions functionality 

    function toggleSessions() {
      isSessionsOpen = !isSessionsOpen;
      sidebar.classList.remove("active");
      burger.classList.remove("open");
      burger.classList.add("sessions-mode");
      isMenuOpen = false;
    }

        function closeSessions() {
      isSessionsOpen = false;
      burger.classList.remove("sessions-mode");
    }
    // About functionality
    function toggleAbout() {
      isAboutOpen = !isAboutOpen;
      sidebar.classList.remove("active");
      burger.classList.remove("open");
      burger.classList.add("about-mode");
      isMenuOpen = false;
    }

    function closeAbout() {
      isAboutOpen = false;
      burger.classList.remove("about-mode");
    }

    // Close sidebar when clicking outside
    document.addEventListener("click", (e) => {
      if (!burger.contains(e.target) && !sidebar.contains(e.target)) {
        if (isMenuOpen) {
          sidebar.classList.remove("active");
          burger.classList.remove("open");
          isMenuOpen = false;
        }
        if (isAboutOpen) {
          closeAbout();
        }
      }
    });

    // Smooth Scroll Down
    document.querySelector(".scroll-down").addEventListener("click", () => {
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });

    // Custom Cursor
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";

      // Random gradient color on move
      const colors = [
        "rgba(255,255,255,0.7)",
        "rgba(248, 247, 161, 0.82)",
        "rgba(153, 229, 250, 0.7)",
        "rgba(185, 247, 221, 0.7)",
        "rgba(252, 247, 229, 0.87)"
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      cursor.style.background = randomColor;
    });