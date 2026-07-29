# Website UMKM (Static HTML — untuk Vercel)

## Cara isi konten
1. Buka `script.js`, edit bagian **KONFIGURASI** di paling atas file — isi nama usaha,
   tagline, cerita singkat, nomor WhatsApp, alamat, jam buka, dan daftar produk.
2. Kalau punya foto (hero, foto usaha, foto produk), taruh filenya di folder `assets/`,
   lalu tulis path-nya di konfigurasi, contoh: `heroImage: "assets/hero.jpg"`.
3. Untuk peta lokasi: buka Google Maps → cari lokasi → Share → Embed a map → copy
   src URL, taruh di `contact.mapsEmbedUrl`.
4. Coba buka `index.html` langsung di browser untuk lihat hasilnya sebelum deploy.

## Struktur file
```
umkm-vercel/
├── index.html      <- struktur halaman (tidak perlu diedit)
├── style.css       <- tampilan/desain (tidak perlu diedit kecuali mau custom)
├── script.js       <- EDIT DI SINI: semua konten (nama, produk, kontak, dll)
└── assets/         <- taruh foto-foto kamu di sini
```

## Deploy ke Vercel
**Cara paling mudah — tanpa GitHub (drag & drop):**
1. Buka https://vercel.com, daftar/login (bisa pakai email atau GitHub).
2. Di dashboard, klik "Add New..." → "Project".
3. Pilih tab untuk upload folder secara langsung (drag & drop folder `umkm-vercel` ini).
4. Vercel otomatis deteksi ini static site, klik "Deploy".
5. Tunggu beberapa detik, website langsung online dengan URL publik (contoh:
   `nama-usaha.vercel.app`).

**Cara lewat GitHub (kalau mau auto-update setiap edit):**
1. Push folder ini ke sebuah repository GitHub.
2. Di vercel.com, klik "Add New..." → "Project" → pilih repo tadi.
3. Framework Preset pilih "Other" (karena HTML statis biasa), Root Directory biarkan default.
4. Klik "Deploy".
5. Setiap kali kamu push perubahan ke GitHub, Vercel otomatis re-deploy.

## Custom domain (opsional)
Setelah deploy, di dashboard project → tab "Domains" → tambahkan domain sendiri
kalau sudah punya (misal beli domain .id atau pakai subdomain desa.id).
