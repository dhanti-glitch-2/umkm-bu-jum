// =========================================================
// DATA UMKM DESA KARANGGENENG
// =========================================================
// Ini SATU-SATUNYA file yang perlu diedit untuk mengisi konten.
// Tambah UMKM baru = copy salah satu objek di bawah, paste, lalu
// ganti isinya. "id" dipakai di URL, jadi harus unik dan tanpa spasi
// (pakai tanda "-"), contoh: "warung-bu-jum".
// =========================================================

const VILLAGE = {
  name: "Desa Karanggeneng",
  tagline: "Menjelajahi produk lokal dari UMKM Desa Karanggeneng",
  heroImage: "", // contoh: "assets/desa-hero.jpg"
};

const UMKM_LIST = [
  {
    id: "contoh-umkm-1",

    // 1. Identitas Usaha
    name: "Nama UMKM 1",
    logo: "", // contoh: "assets/logo1.png"
    category: "Kuliner", // contoh: Kuliner, Kerajinan, Pertanian, dll

    // 2. Profil & Cerita
    story: "Ceritakan sejarah singkat berdirinya usaha ini, sejak kapan, dan siapa yang memulai.",
    vision: "Apa yang membuat usaha ini berbeda/istimewa dibanding yang lain.",

    // 3. Produk/Layanan
    products: [
      {
        name: "Nama Produk 1",
        image: "", // contoh: "assets/produk1-1.jpg"
        description: "Bahan, keunggulan, ukuran/varian produk ini.",
        price: "Rp 15.000",
      },
      {
        name: "Nama Produk 2",
        image: "",
        description: "Bahan, keunggulan, ukuran/varian produk ini.",
        price: "Rp 20.000",
      },
    ],

    // 4. Cara Pemesanan/Pembelian
    // Nomor WA format internasional TANPA "+" dan tanpa spasi, contoh: 6281234567890
    whatsapp: "6281234567890",
    orderMethods: ["Datang langsung", "COD sekitar desa", "Transfer + kirim via ojol"],

    // 5. Lokasi & Jam Operasional
    address: "Alamat lengkap usaha, Dusun/RT-RW, Desa Karanggeneng",
    mapsEmbedUrl: "", // src URL dari Google Maps > Share > Embed a map
    hours: "Setiap hari, 08.00 - 20.00 WIB",
    deliveryArea: "Sekitar Desa Karanggeneng dan kecamatan terdekat",

    // 6. Kontak & Media Sosial (kosongkan string kalau tidak punya)
    social: {
      instagram: "",
      facebook: "",
      tiktok: "",
      email: "",
    },

    // 7. Kepercayaan/Testimoni
    testimonials: [
      { name: "Nama Pelanggan", text: "Produknya enak/bagus, pelayanannya ramah!" },
    ],
    certifications: ["PIRT", "Halal"], // kosongkan array [] kalau belum ada
  },

  {
    id: "contoh-umkm-2",
    name: "Nama UMKM 2",
    logo: "",
    category: "Kerajinan",

    story: "Ceritakan sejarah singkat berdirinya usaha ini.",
    vision: "Keunggulan/keunikan usaha ini.",

    products: [
      {
        name: "Nama Produk A",
        image: "",
        description: "Deskripsi singkat produk.",
        price: "Rp 30.000",
      },
    ],

    whatsapp: "6281234567891",
    orderMethods: ["Datang langsung", "Transfer"],

    address: "Alamat lengkap usaha kedua, Desa Karanggeneng",
    mapsEmbedUrl: "",
    hours: "Senin - Sabtu, 09.00 - 17.00 WIB",
    deliveryArea: "",

    social: {
      instagram: "",
      facebook: "",
      tiktok: "",
      email: "",
    },

    testimonials: [],
    certifications: [],
  },
];
