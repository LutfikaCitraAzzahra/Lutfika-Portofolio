/* NAVBAR SHADOW + SCROLLED */
window.addEventListener("scroll", () => {
  const navWrap = document.querySelector(".nav-wrap");
  const mainNav = document.getElementById("mainNav");

  if (window.scrollY > 20) {
    navWrap.style.boxShadow = "0 8px 20px rgba(0,0,0,.18)";
    mainNav.classList.add("scrolled");
  } else {
    navWrap.style.boxShadow = "0 5px 18px rgba(0,0,0,.15)";
    mainNav.classList.remove("scrolled");
  }

  revealElements();
  animateSkill();
  revealPortfolio();
});


/* BUTTON HOVER */
document
  .querySelectorAll(".btn-about-outline, .btn-about-fill")
  .forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-2px)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0)";
    });
  });


/* LOAD ANIMATION */
window.addEventListener("load", () => {
  document.querySelector(".left-box")?.classList.add("show");
  document.querySelector(".right-box")?.classList.add("show");

  document.querySelectorAll(".fill").forEach((bar) => {
    bar.style.width = bar.getAttribute("data-width");
  });

  revealElements();
});


/* REVEAL ELEMENT */
function revealElements() {
  document.querySelectorAll(".reveal, .reveal-left, .hidden")
    .forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        el.classList.add("active", "show");
      }
    });
}


/* SKILL ANIMATION */
function animateSkill() {
  const section = document.querySelector("#skill");

  if (!section) return;

  const top = section.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    section.querySelectorAll(".skill-item").forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, i * 120);
    });
  }
}


/* PORTFOLIO ANIMATION */
function revealPortfolio() {
  document.querySelectorAll("#portfolio .reveal")
    .forEach((el, i) => {
      const top = el.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        setTimeout(() => {
          el.classList.add("active");
        }, i * 120);
      }
    });
}


/* CONTACT CARD */
const cards = document.querySelectorAll(".info-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach((card) => observer.observe(card));


/* kontak form pop up */
const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

if (form && popup) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 3000);

    form.reset();
  });
}