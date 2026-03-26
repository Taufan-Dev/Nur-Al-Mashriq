# Nur Al-Mashriq 🌟

**Nur Al-Mashriq** (Cahaya dari Timur) adalah platform edukasi interaktif berbasis web yang didedikasikan untuk mengeksplorasi jejak gemilang *Islamic Golden Age* (Era Keemasan Islam). Platform ini menyajikan sejarah tokoh cendekiawan Muslim terkemuka, artikel-artikel sejarah mendalam, serta peta interaktif dari berbagai museum peradaban Islam di seluruh dunia yang mencakup pustaka artefak dan Tur Virtual 360°.

---

## ✨ Fitur Utama (Key Features)

- 🌍 **Dukungan Multi-Bahasa (Bilingual):** Fitur pergantian bahasa dinamis antara Bahasa Indonesia dan Bahasa Inggris (ID/EN) yang aktif di seluruh halaman website.
- 🌓 **Mode Gelap Dinamis (Dark Mode):** Antarmuka dengan tata letak profesional yang didukung perpindahan *dark mode*, mengusung tema warna emas elit (*Prestige Gold*) dengan elemen *glassmorphism*.
- 🗺️ **Peta Museum Interaktif:** Eksplorasi lokasi museum Islam ternama di berbagai benua menggunakan integrasi peta *Leaflet*.
- 🏛️ **Detail Museum & Tur 360°:** Jelajahi area museum langsung dari peramban menggunakan fitur *Virtual Tour 360°* terintegrasi.
- 🏺 **Galeri & Modal Artefak:** Dokumentasi artefak bersejarah dari berbagai zaman yang dibungkus dengan transisi animasi elegan dan tampilan modal interaktif layar penuh.
- 🔬 **Eksplorasi Ilmuwan:** Fitur pencarian responsif untuk mencari dan menyaring direktori biografi cendekiawan besar era keemasan Islam.
- 📖 **Penjelajah Artikel:** Format bacaan ensiklopedis dengan tata letak visual layar terbelah (*split-screen sticky sidebar*).
- 🔐 **Autentikasi Pengguna:** Tersedia alur antarmuka halaman Registrasi dan Login.

---

## 🛠️ Teknologi Pendukung (Tech Stack)

Aplikasi *frontend* ini dibangun menggunakan tumpukan teknologi modern:
- **Framework Utama:** [React](https://reactjs.org/) (Create Vite App)
- **Module Bundler:** [Vite](https://vitejs.dev/) (Build super cepat)
- **Styling UI:** [Tailwind CSS](https://tailwindcss.com/)
- **Navigasi Routing:** [React Router DOM](https://reactrouter.com/)
- **Peta Rendering:** [React Leaflet](https://react-leaflet.js.org/) & Leaflet.js
- **Virtual Reality / Tur 360:** [Pannellum](https://pannellum.org/)
- **Ikonografi:** [React Icons](https://react-icons.github.io/react-icons/) (Feather, dsb.)

---

## 🚀 Cara Instalasi (Installation Guide)

Ikuti langkah-langkah di bawah ini untuk menjalankan *Environment* aplikasi secara lokal di perangkat Anda:

### 1. Kloning Repositori
Clone proyek ini ke dalam komputer Anda melalui Terminal/Command Prompt:
```bash
git clone https://github.com/Taufan-Dev/Nur-Al-Mashriq.git
cd Nur-Al-Mashriq
```

### 2. Instalasi Dependensi
Pastikan [Node.js](https://nodejs.org/) versi terbaru sudah terinstal di perangkat Anda. Lalu jalankan perintah ini untuk mengunduh semua module yang dibutuhkan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Dev Server)
Untuk memulai server lokal dan melihat perubahannya secara real-time:
```bash
npm run dev
```
Setelah proses selesai, buka browser Anda dan akses tautan lokal yang disediakan (umumnya berada di alamat `http://localhost:5173/`).

### 4. Build untuk Tahap Produksi (*Deployment*)
Jika aplikasi sudah siap dan ingin dipublikasikan, Anda dapat mengkompilasi *source code* dengan:
```bash
npm run build
```
File statis yang telah diminifikasi siap pakai akan dihasilkan secara otomatis ke dalam folder `dist/`.

---

## 📂 Struktur Direktori Utama

- `src/components/` : Kumpulan komponen modular utama yang bisa digunakan kembali (*Header*, *Maps Component*, dsb).
- `src/context/` : Deklarasi manajemen status global (seperti *LanguageContext* untuk fitur dua bahasa).
- `src/data/` : Tempat penyimpanan semua data statis (lokasi museum, daftar artefak, profil ilmuwan).
- `src/pages/` : Komponen induk perhalaman (*Landing Page*, *Dashboard*, *Museum Detail*, dll).
- `src/sections/` : Kumpulan elemen tata letak spesifik untuk suatu halaman (*Hero Banner*, *Card List*, dll) guna menjaga kode tetap bersih.

---

## 💡 Tentang Proyek
Situs ini dirancang secara terperinci untuk mengabadikan peradaban sejarah (*Islamic Golden Age*) via medium digital. Fokus proyek ini terletak pada perpaduan interaksi **UI/UX yang sangat premium**, arsitektur kode modern, visual yang mencolok layaknya produk internasional, dan fungsionalitas edukatif yang utuh.
