function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

function render() {
  document.title = VILLAGE.name;
  document.getElementById("nav-name").textContent = VILLAGE.name;
  document.getElementById("hero-title").textContent = VILLAGE.name;
  document.getElementById("hero-tagline").textContent = VILLAGE.tagline;
  document.getElementById("footer-text").textContent = `© ${VILLAGE.name} — Direktori UMKM`;

  const heroImg = document.getElementById("hero-image");
  if (VILLAGE.heroImage) {
    heroImg.src = VILLAGE.heroImage;
  } else {
    heroImg.closest(".hero-image-wrap").style.display = "none";
  }

  const grid = document.getElementById("umkm-grid");
  grid.innerHTML = UMKM_LIST.map((umkm) => {
    const logoHtml = umkm.logo ? `<img src="${umkm.logo}" alt="${umkm.name}" />` : "";
    return `
      <a class="umkm-card reveal" href="umkm.html?id=${encodeURIComponent(umkm.id)}">
        <div class="umkm-card-logo">${logoHtml}</div>
        <p class="umkm-card-name">${umkm.name}</p>
        <span class="umkm-card-category">${umkm.category}</span>
      </a>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  initReveal();
});
