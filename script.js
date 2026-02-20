// On sélectionne  les sections ou le footer
const sections = document.querySelectorAll("section, footer");
const points = document.querySelectorAll(".point");
const navTexts = document.querySelectorAll(".nav-text");

/* CLICK */
//Scroll vers la section correspondante
points.forEach((point, i) => {
  point.addEventListener("click", () => {
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
/* setActive */
function setActive(index) {
  // Supprimer 'active' de tous les points et textes
  points.forEach(d => d.classList.remove("active"));
  navTexts.forEach(t => t.classList.remove("active"));
  // Ajouter 'active' au point et texte courant
  points[index].classList.add("active");
  navTexts[index].classList.add("active");
}
