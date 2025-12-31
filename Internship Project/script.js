document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
});

/* ================== Specialities Section===============  */

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


// ================== ABOUT SECTION ==================

const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    { threshold: 0.3 }
);

document
    .querySelectorAll(".tree-text, .about-right h2, .about-right p, .badge-card")
    .forEach(el => observer.observe(el));

// ================== CONTACT SECTION ==================

const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
