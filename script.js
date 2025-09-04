const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

let isMenuOpen = false;
let isAboutOpen = false;
let isSessionsOpen = false;
let isContactOpen = false;

burger.addEventListener("click", () => {
  if (!isAboutOpen && !isSessionsOpen && !isContactOpen) {
    isMenuOpen = !isMenuOpen;
    sidebar.classList.toggle("active");
    burger.classList.toggle("open");
  }
});

// Contact functionality
function toggleContact() {
  isContactOpen = !isContactOpen;
  sidebar.classList.remove("active");
  burger.classList.remove("open");
  burger.classList.add("contact-mode");
  isMenuOpen = false;
}
function closeContact() {
  isContactOpen = false;
  burger.classList.remove("contact-mode");
}

// Sessions functionality
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
    if (isAboutOpen) closeAbout();
    if (isSessionsOpen) closeSessions();
    if (isContactOpen) closeContact();
  }
});
// Smooth Scroll Down + Audio Toggle
const scrollBtn = document.querySelector(".scroll-down");
const audio = document.getElementById("bg-audio");
let isPlaying = false;

// handle button click
scrollBtn.addEventListener("click", () => {
  // toggle audio play/pause
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    scrollBtn.classList.add("playing");   // button turns white
  } else {
    audio.pause();
    isPlaying = false;
    scrollBtn.classList.remove("playing"); // button back to black
  }
});

// restart when track ends
audio.addEventListener("ended", () => {
  audio.currentTime = 0;
  audio.play(); // loop playback
});


// Custom Cursor
// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", e => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";

//   const colors = [
//     "rgba(255,255,255,0.7)",
//     "rgba(248, 247, 161, 0.82)",
//     "rgba(153, 229, 250, 0.7)",
//     "rgba(185, 247, 221, 0.7)",
//     "rgba(252, 247, 229, 0.87)"
//   ];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   cursor.style.background = randomColor;
// });

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});