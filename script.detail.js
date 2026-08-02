function waLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

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
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const umkm = UMKM_LIST.find((u) => u.id === id);

  if (!umkm) {
    document.getElementById("detail-root").style.display = "none";
    document.getElementById("not-found").style.display = "block";
    document.title = "UMKM tidak ditemukan";
    return;
  }

  document.title = `${umkm.name} — ${VILLAGE.name}`;
  document.getElementById("footer-text").textContent = `© ${umkm.name} — bagian dari direktori UMKM ${VILLAGE.name}`;

  const defaultMsg = "Halo, saya mau tanya-tanya soal produk di website.";
  const waHref = waLink(umkm.whatsapp, defaultMsg);
  document.getElementById("nav-wa").href = waHref;
  document.getElementById("hero-wa").href = waHref;
  document.getElementById("order-wa").href = waHref;

  document.getElementById("umkm-name").textContent = umkm.name;
  document.getElementById("umkm-category").textContent = umkm.category;
  const logoEl = document.getElementById("umkm-logo");
  if (umkm.logo) {
    logoEl.src = umkm.logo;
  } else {
    logoEl.closest(".detail-logo-wrap").style.display = "none";
  }

  document.getElementById("umkm-story").textContent = umkm.story;
  document.getElementById("umkm-vision").textContent = umkm.vision;

  const grid = document.getElementById("products-grid");
  grid.innerHTML = (umkm.products || [])
    .map(
      (p) => `
      <div class="product-card reveal">
        <div class="product-image-wrap">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : ""}
        </div>
        <div class="product-body">
          <p class="product-name">${p.name}</p>
          <span class="product-price">${p.price}</span>
          <p class="product-desc">${p.description}</p>
        </div>
      </div>
    `
    )
    .join("");

  const orderList = document.getElementById("order-methods");
  orderList.innerHTML = (umkm.orderMethods || []).map((m) => `<li>${m}</li>`).join("");

  document.getElementById("contact-address").textContent = umkm.address;
  document.getElementById("contact-hours").textContent = umkm.hours;
  const deliveryLine = document.getElementById("delivery-line");
  if (umkm.deliveryArea) {
    document.getElementById("contact-delivery").textContent = umkm.deliveryArea;
  } else {
    deliveryLine.style.display = "none";
  }
  const mapEl = document.getElementById("contact-map");
  if (umkm.mapsEmbedUrl) {
    mapEl.innerHTML = `<iframe src="${umkm.mapsEmbedUrl}" loading="lazy" title="Lokasi ${umkm.name}"></iframe>`;
  } else {
    mapEl.textContent = "Peta belum ditambahkan untuk usaha ini.";
  }

  const social = umkm.social || {};
  const socialLinks = [];
  if (social.instagram) socialLinks.push(`<a href="${social.instagram}" target="_blank" rel="noopener">Instagram</a>`);
  if (social.facebook) socialLinks.push(`<a href="${social.facebook}" target="_blank" rel="noopener">Facebook</a>`);
  if (social.tiktok) socialLinks.push(`<a href="${social.tiktok}" target="_blank" rel="noopener">TikTok</a>`);
  if (social.email) socialLinks.push(`<a href="mailto:${social.email}">Email</a>`);
  document.getElementById("social-links").innerHTML = socialLinks.join("");

  if (umkm.testimonials && umkm.testimonials.length > 0) {
    document.getElementById("testimonials-section").style.display = "block";
    document.getElementById("testimonials-list").innerHTML = umkm.testimonials
      .map(
        (t) => `
        <div class="testimonial-item reveal">
          "${t.text}"
          <div class="testimonial-name">${t.name}</div>
        </div>
      `
      )
      .join("");
  }

  if (umkm.certifications && umkm.certifications.length > 0) {
    document.getElementById("certifications-section").style.display = "block";
    document.getElementById("certifications-list").innerHTML = umkm.certifications
      .map((c) => `<span class="cert-badge">${c}</span>`)
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  initReveal();
});
