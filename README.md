# Nur Al-Mashriq 🌟

**Universitas Kuningan**

**- KETUA TIM: TAUFAN HIDAYATUL AKBAR**

**- ANGGOTA 1: HERSYA YUDINA**

**LINK HOSTING: https://nur-al-mashriq.vercel.app/**

**LINK REPOSITORY: https://github.com/Taufan-Dev/Nur-Al-Mashriq.git**

**Nur Al-Mashriq (Cahaya dari Timur)** adalah platform edukasi interaktif berbasis web yang bertujuan menghadirkan pembelajaran sejarah Islamic Golden Age secara inovatif dan relevan dengan teknologi masa kini. Terinspirasi dari kontribusi ilmuwan seperti Al-Khwarizmi dan Ibnu Sina, platform ini menggabungkan artikel historis, peta interaktif, serta tur virtual 360° museum untuk menciptakan pengalaman belajar yang imersif.

Website ini dikembangkan untuk meningkatkan minat belajar, memudahkan eksplorasi pengetahuan, serta mengoptimalkan pembelajaran digital melalui teknologi interaktif. Pemilihan subtema pendidikan didasarkan pada pentingnya inovasi dalam metode pembelajaran yang adaptif, terverifikasi, dan berorientasi pada perkembangan teknologi.

---

## ✨ Fitur Utama (Key Features)

- 🌍 **Dukungan Multi-Bahasa (Bilingual):** Fitur pergantian bahasa dinamis antara Bahasa Indonesia dan Bahasa Inggris (ID/EN) yang aktif di seluruh halaman website tujuannya untuk memperkenalkan lebih luas lagi di semua kalangan.

  <img width="196" height="83" alt="image" src="https://github.com/user-attachments/assets/d6c480aa-c4db-44b3-9de3-c897516301b0" /><img width="190" height="77" alt="image" src="https://github.com/user-attachments/assets/f6cef6dd-e25c-49dc-bd13-933536d7fdab" />

- 🌓 **Mode Gelap Dinamis (Dark Mode):** Antarmuka dengan tata letak profesional yang didukung perpindahan *dark mode*, mengusung tema warna emas elit (*Prestige Gold*) dengan elemen *glassmorphism*.
- 🗺️ **Peta Museum Interaktif:** Eksplorasi lokasi museum Islam ternama di berbagai benua menggunakan integrasi peta *Leaflet*.

  <img width="1919" height="880" alt="image" src="https://github.com/user-attachments/assets/274e0a12-1411-48d3-a128-6a7f0dad9bb6" /> <img width="1699" height="818" alt="image" src="https://github.com/user-attachments/assets/6a6f1387-df76-4783-99fb-914059fa6948" />


- 🏛️ **Detail Museum & Tur 360°:** Jelajahi area museum langsung dari peramban menggunakan fitur *Virtual Tour 360°* terintegrasi.

  <img width="1920" height="2858" alt="image" src="https://github.com/user-attachments/assets/31544374-92b3-442f-9661-b2e99cdbf363" />

- 🏺 **Galeri & Modal Artefak:** Dokumentasi artefak bersejarah dari berbagai zaman yang dibungkus dengan transisi animasi elegan dan tampilan modal interaktif layar penuh.

  <img width="1711" height="730" alt="image" src="https://github.com/user-attachments/assets/4dbf9d0b-5323-4c0d-9bb3-10f66faa815b" /> <img width="1171" height="572" alt="image" src="https://github.com/user-attachments/assets/4ef0e2b7-2931-4770-81e5-c09cd83c932a" />


- 🔬 **Eksplorasi Ilmuwan:** Fitur pencarian responsif untuk mencari dan menyaring direktori biografi cendekiawan besar era keemasan Islam.

  <img width="1918" height="1517" alt="image" src="https://github.com/user-attachments/assets/85f3ac08-33f8-4de3-b668-97a107db1a94" />

- 📖 **Penjelajah Artikel:** Format bacaan ensiklopedis dengan tata letak visual layar terbelah (*split-screen sticky sidebar*).

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


---

## 📂 Struktur Direktori Utama

- `src/components/` : Kumpulan komponen modular utama yang bisa digunakan kembali (*Header*, *Maps Component*, dsb).
- `src/context/` : Deklarasi manajemen status global (seperti *LanguageContext* untuk fitur dua bahasa).
- `src/data/` : Tempat penyimpanan semua data statis (lokasi museum, daftar artefak, profil ilmuwan).
- `src/pages/` : Komponen induk perhalaman (*Landing Page*, *Dashboard*, *Museum Detail*, dll).
- `src/sections/` : Kumpulan elemen tata letak spesifik untuk suatu halaman (*Hero Banner*, *Card List*, dll) guna menjaga kode tetap bersih.

