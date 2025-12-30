
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

  /*  ================== Specialities Section===============  */

  document.querySelectorAll(".spec-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".spec-item")
      .forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab")
      .forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

//contact section success message
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    msg.style.display = "block";
    form.reset();

    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  });
});


//  =================Patient Stories section=======================

document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('click', () => {
      alert('Video popup can open here');
    });
  });

// ===================DOCTOR SECTION ==================

document.querySelectorAll('.bd-pagination span').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bd-pagination span')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


