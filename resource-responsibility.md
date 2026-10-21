# Resource & Responsibility Plan

## 1. Tujuan
Dokumen ini menjabarkan peran tim, tanggung jawab terhadap WBS, dan sumber daya yang diperlukan untuk proyek **Website UMKM Bakso Jambo Langsa**.

## 2. Anggota dan Peran

Pembagian berikut adalah usulan berdasarkan kebutuhan WBS. Konfirmasikan dengan anggota sebelum dijadikan pembagian tugas final.

| Anggota | Peran utama | Tanggung jawab | WBS terkait |
|---|---|---|---|
| Rani Simahbengi | Koordinator proyek dan dokumentasi | Memantau jadwal, koordinasi, ruang lingkup Sprint 1, review progres, README, dokumen Sprint, umpan balik, dan backlog | 1.3, 1.4, 6.1, 6.2, 6.4, 6.5 |
| Anisa Aulia | Analis kebutuhan dan UI/UX | Mengumpulkan kebutuhan, memverifikasi informasi UMKM, menyusun kebutuhan fungsional/nonfungsional, sitemap, wireframe, dan sistem desain | 1.1, 1.2, 2.1–2.3, 3.1–3.3 |
| Zaskia Lexsa | Frontend developer | Struktur HTML, stylesheet responsif, JavaScript, galeri publik, integrasi UI, dan konfigurasi GitHub Pages | 3.1–3.4, 4.1–4.3, 4.5, 4.7 |
| M. Rizki Foenna | Integrasi dan QA | Aturan unggah/hak akses, skema Supabase, autentikasi dan unggah foto, pengujian fitur, pesan kesalahan, serta pemeriksaan rilis | 2.4, 3.4–3.5, 4.4–4.6, 5.3–5.6, 6.3 |

**Kolaborasi:** seluruh anggota ikut serta dalam 1.1, 1.3, 1.4, review Pull Request, pengujian lintas perangkat, dan persiapan demo. Peran di atas bukan pembatas kontribusi; ubah sesuai kesepakatan aktual.

## 3. Matriks RACI

- **R:** mengerjakan aktivitas.
- **A:** bertanggung jawab atas keputusan/hasil akhir.
- **C:** dimintai masukan.
- **I:** menerima informasi.

| Kelompok WBS | Rani | Anisa | Zaskia | M. Rizki |
|---|:---:|:---:|:---:|:---:|
| 1.1–1.4 Inisiasi dan perencanaan | A/R | R | C | C |
| 2.1–2.3 Analisis kebutuhan dan data UMKM | C | A/R | C | C |
| 2.4 Aturan unggah dan hak akses | C | C | C | A/R |
| 3.1–3.3 Sitemap, wireframe, desain | C | A/R | R | C |
| 3.4 Alur galeri dan autentikasi | I | C | R | A/R |
| 3.5 Skema dan kebijakan Supabase | I | C | C | A/R |
| 4.1–4.3 HTML, CSS, JavaScript | C | C | A/R | C |
| 4.4–4.6 Supabase, galeri, login/unggah | I | C | R | A/R |
| 4.7 GitHub Pages | A | I | R | C |
| 5.1–5.6 Pengujian | C | C | R | A/R |
| 6.1 Review Pull Request | A | C | R | R |
| 6.2 README dan dokumen Sprint | A/R | C | C | C |
| 6.3–6.5 Deploy, umpan balik, backlog | A/R | R | R | R |

## 4. Kebutuhan Sumber Daya

| Sumber daya | Penggunaan | Rencana |
|---|---|---|
| Laptop/komputer | Pengembangan dan pengujian | Perangkat anggota |
| Koneksi internet | GitHub, Supabase, dan deployment | Akses internet yang tersedia |
| Git dan GitHub | Version control, Pull Request, repo dan GitHub Pages | Repository kelompok |
| Editor kode dan browser | Menulis serta menguji HTML/CSS/JavaScript | Perangkat lunak yang tersedia |
| Supabase | Database, autentikasi pengelola, dan penyimpanan foto sesuai konfigurasi | Paket dan kuota diverifikasi tim |
| Materi UMKM | Menu, harga, lokasi, jam buka, kontak, dan foto | Dikonfirmasi dengan pemilik UMKM |
| Waktu anggota | Analisis, desain, implementasi, pengujian, dokumentasi | Mengikuti kalender kuliah dan estimasi manday |

## 5. Aturan Kolaborasi dan Keamanan
- Gunakan Pull Request untuk review perubahan kode bila memungkinkan.
- Jangan memasukkan password, service-role key, token, atau kredensial rahasia ke repository publik.
- Terapkan kebijakan akses Supabase dengan prinsip hak minimum; akses baca publik tidak berarti izin unggah publik.
- Verifikasi izin penggunaan foto dan informasi UMKM.
- Catat keputusan, kendala, dan perubahan pembagian tugas.

## 6. Persetujuan
Pembagian ini merupakan rancangan. Kelompok perlu mengonfirmasi penugasan, ketersediaan sumber daya, dan tanggung jawab final sebelum pelaksanaan.
