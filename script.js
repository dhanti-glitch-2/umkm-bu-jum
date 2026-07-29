// =========================================================
// 1. KONFIGURASI — ISI/EDIT BAGIAN INI SESUAI UMKM KAMU
// =========================================================
const CONFIG = {
  business: {
    name: "Nama UMKM Kamu",
    tagline: "Tagline singkat usaha kamu di sini",
    heroImage: "", // contoh: "assets/hero.jpg" — kosongkan jika belum punya foto
  },

  about: {
    text: "Ceritakan sejarah singkat usaha ini, sejak kapan berdiri, dan apa yang membuatnya istimewa. Fokus ke cerita yang personal, 2-4 kalimat saja.",
    image: "", // contoh: "assets/about.jpg"
  },

  // Nomor WhatsApp format internasional TANPA tanda + dan tanpa spasi, contoh: 6281234567890
  whatsapp: {
    number: "6281234567890",
    defaultMessage: "Halo, saya mau tanya-tanya soal produk di website.",
  },

  contact: {
    address: "Alamat lengkap usaha, Desa, Kecamatan, Kabupaten",
    hours: "Setiap hari, 08.00 - 20.00 WIB",
    // Buka Google Maps -> cari lokasi -> Share -> Embed a map -> copy src URL saja
    mapsEmbedUrl: "",
  },

  // Tambah/hapus objek di list ini sesuai jumlah produk kamu.
  // "image" bisa nama file di folder assets/ (contoh "assets/produk1.jpg") atau dikosongkan.
  products: [
    {
      name: "Nama Produk 1",
      price: "Rp 15.000",
      description: "Deskripsi singkat produk, bahan, atau keunggulannya.",
      image: "",
    },
    {
      name: "Nama Produk 2",
      price: "Rp 25.000",
      description: "Deskripsi singkat produk, bahan, atau keunggulannya.",
      image: "",
    },
    {
      name: "Nama Produk 3",
      price: "Rp 20.000",
      description: "Deskripsi singkat produk, bahan, atau keunggulannya.",
      image: "",
    },
  ],

  // Testimoni pelanggan (opsional). Kosongkan array ini kalau belum ada.
  testimonials: [
    // { name: "Nama Pelanggan", text: "Produknya enak/bagus, pelayanannya ramah!" },
  ],
};

// =========================================================
// 2. KODE RENDER — TIDAK PERLU DIUBAH KECUALI MAU CUSTOM
// =========================================================

function waLink(message) {
  const msg = message || CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`;
}

function setImageOrHide(imgEl, src) {
  if (src) {
    imgEl.src = src;
    imgEl.style.display = "block";
  } else {
    imgEl.closest(".hero-image-wrap, .about-image-wrap, .product-image-wrap")
      ?.style.setProperty("display", src ? "" : "flex");
    imgEl.style.display = "none";
  }
}

function render() {
  const { business, about, contact, products, testimonials } = CONFIG;

  document.title = business.name;
  document.getElementById("nav-name").textContent = business.name;
  document.getElementById("hero-title").textContent = business.name;
  document.getElementById("hero-tagline").textContent = business.tagline;
  document.getElementById("about-text").textContent = about.text;
  document.getElementById("contact-address").textContent = contact.address;
  document.getElementById("contact-hours").textContent = contact.hours;
  document.getElementById("footer-text").textContent = `© ${business.name} — dibuat dengan HTML statis`;

  setImageOrHide(document.getElementById("hero-image"), business.heroImage);
  setImageOrHide(document.getElementById("about-image"), about.image);

  const waHref = waLink();
  document.getElementById("nav-wa").href = waHref;
  document.getElementById("hero-wa").href = waHref;
  document.getElementById("contact-wa").href = waHref;

  // Products
  const grid = document.getElementById("products-grid");
  grid.innerHTML = products
    .map((p) => {
      const orderMsg = `Halo, saya mau pesan ${p.name}.`;
      return `
        <div class="product-card reveal">
          <div class="product-image-wrap">
            ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : ""}
          </div>
          <div class="product-body">
            <p class="product-name">${p.name}</p>
            <span class="product-price">${p.price}</span>
            <p class="product-desc">${p.description}</p>
            <a class="btn-order" href="${waLink(orderMsg)}" target="_blank" rel="noopener">Pesan</a>
          </div>
        </div>
      `;
    })
    .join("");

  // Testimonials (optional section)
  const testiSection = document.getElementById("testimonials-section");
  if (testimonials && testimonials.length > 0) {
    testiSection.style.display = "block";
    document.getElementById("testimonials-list").innerHTML = testimonials
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

  // Maps embed (optional)
  const mapEl = document.getElementById("contact-map");
  if (contact.mapsEmbedUrl) {
    mapEl.innerHTML = `<iframe src="${contact.mapsEmbedUrl}" loading="lazy" title="Lokasi"></iframe>`;
  } else {
    mapEl.textContent = "Tambahkan link embed Google Maps di CONFIG.contact.mapsEmbedUrl untuk menampilkan peta.";
  }
}

// Scroll-reveal animation
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

document.addEventListener("DOMContentLoaded", () => {
  render();
  initReveal();
});
