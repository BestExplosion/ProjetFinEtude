// attendre que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", () => {

  // ----------------------
  // SÉLECTION DES ÉLÉMENTS
  // ----------------------
  const sections = document.querySelectorAll("section, footer"); // toutes les sections et le footer
  const points = document.querySelectorAll(".point");           // les points de navigation
  const navTexts = document.querySelectorAll(".nav-text");      // les textes associés

  // ----------------------
  // NAVIGATION PAR CLICK
  // ----------------------
  points.forEach((point, i) => {
    point.addEventListener("click", () => {
      setActive(i); // mettre à jour le point actif
      sections[i].scrollIntoView({ behavior: "smooth" }); // scroll vers la section
    });
  });

  // ----------------------
  // SYNCHRO DES POINTS AU SCROLL
  // ----------------------
  window.addEventListener("scroll", () => {
    let current = 0;

    sections.forEach((sec, i) => {
      if (window.scrollY >= sec.offsetTop - 200) { // ajuster si nécessaire
        current = i;
      }
    });

    setActive(current); // mettre à jour le point actif
  });

  // ----------------------
  // FONCTION POUR METTRE À JOUR LES POINTS
  // ----------------------
  function setActive(index) {
    points.forEach(d => d.classList.remove("active"));
    navTexts.forEach(t => t.classList.remove("active"));

    points[index].classList.add("active");
    navTexts[index].classList.add("active");
  }

  // ----------------------
  // VIDÉO D'INTRO
  // ----------------------
  const introVideo = document.getElementById("introVideo");
  const firstSection = document.querySelector(".section");

  // s'assurer que la vidéo est bien muette pour autoplay
  introVideo.muted = true;
  introVideo.play().catch(() => {
    console.log("Autoplay bloqué par le navigateur");
  });

  // quand la vidéo se termine, scroll automatique vers la première section
  introVideo.addEventListener("ended", () => {
    firstSection.scrollIntoView({ behavior: "smooth" });
  });

const nav = document.getElementById("pointNav");
const intro = document.getElementById("intro");

window.addEventListener("scroll", () => {
  // si on a scrollé au-delà de la vidéo
  if (window.scrollY > intro.offsetHeight * 0.1) { // 10% de la hauteur vidéo
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});

// --------------------------
// CHANGEMENT DE SECTIONS
// --------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }

  });
}, {
  threshold: 0.4
});

document.querySelectorAll(".section").forEach(section => {
  if (section.id !== "intro") {
    observer.observe(section);
  }
});

});