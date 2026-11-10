# RuangTani — Sistem Informasi Kelompok Tani Marsudi Among Tani Desa Dawuhan

Aplikasi web modern berbasis **React (Vite)** dan **Tailwind CSS** untuk tata kelola hasil panen, lumbung gabah, klasifikasi budidaya, dan transparansi distribusi komoditas pangan **Kelompok Tani "Marsudi Among Tani" Desa Dawuhan, Kecamatan Banyumas, Kabupaten Banyumas, Jawa Tengah**.

Live Website: [https://ruangtani.orbitani.com/](https://ruangtani.orbitani.com/)  
Repositori GitHub: [https://github.com/maysaazhra/ruangtani](https://github.com/maysaazhra/ruangtani)

---

## 🌾 Profil Resmi Kelompok Tani & Wilayah Binaan
- **Nama Kelompok**: Kelompok Tani Marsudi Among Tani
- **Sekretariat**: Jalan Pesarehan Adipati Mrapat No 68, RT 03 / RW 02, Desa Dawuhan, Kec. Banyumas, Kab. Banyumas 53192
- **Tahun Pendirian**: Agustus 1979
- **Badan Hukum Kemenkumham RI**: Nomor AHU-0058238.AH.01.07. TAHUN 2016
- **Sertifikasi Halal**: ID33110018130760524-DINKOP PROV
- **Nomor Registrasi Poktan**: 33.02.110.011.1.01 (Kelas Kelompok: Madya)
- **Kepala Desa Dawuhan**: Bapak Ruswanto
- **Ketua Kelompok Tani**: Bapak Slamet
- **Total Anggota**: 148 Petani (116 Laki-Laki, 32 Perempuan)
- **Total Lahan Binaan**: 20.0 Hektar (termasuk 2.76 Ha lahan padi organik bersertifikat)
- **6 Blok Sawah Binaan**:
  1. Blok Blimbing (1.74 Ha, Ketua Blok: Pak Yatiman)
  2. Blok Serang (3.74 Ha, Ketua Blok: Pak Sukasno)
  3. Blok Wungu (2.87 Ha, Ketua Blok: Pak Sumarjo)
  4. Blok Krikil (7.20 Ha, Ketua Blok: Pak Suwarman)
  5. Blok Jembangan (3.03 Ha, Ketua Blok: Pak Taslim Miharjo)
  6. Blok Margono (1.42 Ha, Ketua Blok: Pak Sutarjo)

---

## 🚀 Fitur Utama & Kepatuhan Persyaratan

### 1. Hak Akses & Privasi (Public Mode vs Admin Mode)
- **Public Mode (Tanpa Login)**:
  - Mode *read-only*. Masyarakat dan pembeli dapat melihat Beranda, Profil Desa & Sejarah Kelompok Tani, Rekapitulasi Program Panen & Penjualan bulanan, serta Katalog Produk.
  - Pembelian produk langsung diarahkan ke nomor WhatsApp resmi kelompok tanpa perantara tengkulak.
- **Admin Mode (Dilindungi Login Operator)**:
  - Kredensial demo: **Username:** `admin` | **Password:** `admin123`
  - Akses ke Dashboard Operator, Form Input Panen 1 Layar, Riwayat Transaksi Panen (dengan kontrol Edit & Hapus), Manajemen Stok Lumbung (dengan simulasi penjualan), dan Laporan Ekspor PDF/Excel.

### 2. 4 Komoditas Pangan Utama
1. **Padi (Beras Organik Ciherang / Mentik Wangi)**: Beras pulen bersertifikat organik bebas pestisida kimia.
2. **Jagung (Pipil Kering Hibrida Unggul)**: Kadar air <14%, bulir emas bersih untuk pakan ternak dan pangan.
3. **Kedelai (Kuning Anjasmoro Pilihan)**: Biji besar kekuningan berprestasi Juara 1 Kabupaten & Juara 2 Provinsi Jawa Tengah.
4. **Kacang Hijau (Varietas Vima Unggul Dawuhan)**: Biji bernas berkilau, tinggi protein nabati, cepat empuk saat diolah.

### 3. Klasifikasi Pengelolaan Budidaya Petani
Setiap pencatatan panen dikelompokkan ke dalam 3 jenis pengelolaan lahan/petani:
- **Organik**: Lahan budidaya organik bersertifikat resmi, pemupukan bokashi, IMO, dan ecoenzym tanpa kimia sintetis.
- **Konversi**: Lahan dalam masa transisi/peralihan menuju sertifikasi budidaya organik penuh binaan kelompok.
- **Non-Organik**: Pertanian konvensional terkontrol binaan kelompok dengan standar GAP (*Good Agricultural Practices*).

*(Catatan: Kualitas mutu Grade A/B/C telah dihilangkan sesuai arahan terbaru).*

### 4. Siklus 3 Masa Tanam (MT)
Sistem mendeteksi dan mengelompokkan data berdasarkan 3 siklus masa tanam:
- **MT 01 (Okt - Jan)**: Masa Tanam 1 / Musim Rendeng (Musim Hujan - fokus padi sawah organik utama).
- **MT 02 (Feb - Mei)**: Masa Tanam 2 / Musim Gadu (Musim Peralihan - padi lanjutan dan palawija).
- **MT 03 (Juni - Sept)**: Masa Tanam 3 / Musim Kemarau (Rotasi tanaman kedelai Anjasmoro, kacang hijau Vima, dan jagung pipil).

### 5. Ekspor Laporan Resmi
- **Export PDF**: Menggunakan jsPDF & AutoTable lengkap dengan Kop Surat resmi Desa Dawuhan, nomor badan hukum, sertifikasi halal, dan tanda tangan Ketua serta Bendahara kelompok tani.
- **Export Excel (.xlsx)**: File spreadsheet terstruktur siap cetak dan olah data lanjutan.

---

## 🛠️ Menjalankan di Lokal & Deploy ke Vercel

### Instalasi & Menjalankan di Lokal
```bash
# 1. Install dependencies
npm install

# 2. Jalankan server development
npm run dev

# 3. Build untuk produksi
npm run build
```

### Mengunggah ke GitHub (Overwrite Langsung):
1. Buka repositori: [https://github.com/maysaazhra/ruangtani](https://github.com/maysaazhra/ruangtani)
2. Klik **Add file** ➔ **Upload files**
3. Tarik (*drag & drop*) seluruh folder dan file (`src/`, `public/`, `index.html`, `tailwind.config.js`, `postcss.config.js`, `vercel.json`, `package.json`, `README.md`)
4. Klik tombol hijau **Commit changes**
5. Vercel akan otomatis melakukan build dan redeploy ke [https://ruangtani.orbitani.com/](https://ruangtani.orbitani.com/).
