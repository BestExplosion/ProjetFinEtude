const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");
const navTexts = document.querySelectorAll(".nav-text");

/* CLICK */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    setActive(i);
    sections[i].scrollIntoView({ behavior: "smooth" });
  });
});

/* SCROLL SYNC */
window.addEventListener("scroll", () => {
  let current = 0;

  sections.forEach((sec, i) => {
    if (scrollY >= sec.offsetTop - 200) {
      current = i;
    }
  });

  setActive(current);
});

function setActive(index) {
  dots.forEach(d => d.classList.remove("active"));
  navTexts.forEach(t => t.classList.remove("active"));

  dots[index].classList.add("active");
  navTexts[index].classList.add("active");
}
