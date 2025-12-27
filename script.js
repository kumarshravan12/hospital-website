
// MENU TOGGLE (safe)
function toggleMenu() {
  const nav = document.getElementById("headerNav");
  if (!nav) return;

  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// FORM SUBMIT SUCCESS MESSAGE
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("successMessage");

  // agar form is page par nahi hai
  if (!form || !msg) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // page reload band

    msg.style.display = "block"; // message show
    form.reset(); // form clear
  });
});

