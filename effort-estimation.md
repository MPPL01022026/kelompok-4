# Effort Estimation (Manday)

## 1. Tujuan dan Dasar
Estimasi ini mengikuti seluruh aktivitas WBS yang diberikan untuk proyek **Website UMKM Bakso Jambo Langsa**.

- **1 manday = 8 jam kerja efektif.**
- Manday mengukur usaha orang, bukan durasi kalender.
- Semua angka adalah estimasi awal, bukan catatan jam kerja aktual.
- WBS dan estimasi perlu ditinjau ulang jika ruang lingkup Sprint 1 berubah.

Rumus: `Manday = estimasi jam kerja / 8`

## 2. Estimasi Usaha per Aktivitas WBS

| ID WBS | Aktivitas | Estimasi (jam) | Estimasi (manday) |
|---|---|---:|---:|
| 1.1 | Mengidentifikasi masalah dan tujuan website | 4 | 0.50 |
| 1.2 | Mengumpulkan kebutuhan dari pemilik UMKM | 4 | 0.50 |
| 1.3 | Menentukan ruang lingkup Sprint 1 | 2 | 0.25 |
| 1.4 | Menentukan peran anggota tim | 2 | 0.25 |
| 2.1 | Menyusun kebutuhan fungsional | 4 | 0.50 |
| 2.2 | Menyusun kebutuhan nonfungsional | 3 | 0.38 |
| 2.3 | Memverifikasi data menu, harga, lokasi, jam buka, dan kontak | 3 | 0.38 |
| 2.4 | Menentukan aturan unggah foto dan hak akses | 4 | 0.50 |
| 3.1 | Menyusun sitemap dan alur navigasi | 3 | 0.38 |
| 3.2 | Membuat wireframe halaman utama | 5 | 0.62 |
| 3.3 | Menentukan warna, tipografi, dan komponen responsif | 3 | 0.38 |
| 3.4 | Merancang alur galeri foto dan autentikasi pengelola | 4 | 0.50 |
| 3.5 | Merancang skema tabel dan kebijakan akses Supabase | 5 | 0.62 |
| 4.1 | Membuat struktur HTML | 6 | 0.75 |
| 4.2 | Membuat stylesheet responsif | 10 | 1.25 |
| 4.3 | Membuat navigasi dan interaksi JavaScript | 8 | 1.00 |
| 4.4 | Menyiapkan proyek Supabase | 5 | 0.62 |
| 4.5 | Membuat galeri baca-publik | 6 | 0.75 |
| 4.6 | Membuat login pengelola dan unggah foto | 10 | 1.25 |
| 4.7 | Menyiapkan GitHub Pages | 3 | 0.38 |
| 5.1 | Menguji tampilan desktop dan mobile | 4 | 0.50 |
| 5.2 | Menguji navigasi dan aksesibilitas dasar | 3 | 0.38 |
| 5.3 | Menguji unggah format foto yang diizinkan | 3 | 0.38 |
| 5.4 | Menguji batas ukuran file | 2 | 0.25 |
| 5.5 | Menguji akses publik dan pengelola | 4 | 0.50 |
| 5.6 | Memeriksa pesan kesalahan dan dokumentasi | 3 | 0.38 |
| 6.1 | Review kode melalui Pull Request | 3 | 0.38 |
| 6.2 | Memperbarui README dan dokumen Sprint | 4 | 0.50 |
| 6.3 | Deploy versi demo | 2 | 0.25 |
| 6.4 | Mengumpulkan umpan balik | 2 | 0.25 |
| 6.5 | Menyusun backlog Sprint berikutnya | 2 | 0.25 |
| **Total** | | **126** | **15.75** |

## 3. Ringkasan Usaha per Fase WBS

| Fase | Total jam | Total manday |
|---|---:|---:|
| 1. Inisiasi dan perencanaan | 12 | 1.50 |
| 2. Analisis kebutuhan | 14 | 1.75 |
| 3. Perancangan | 20 | 2.50 |
| 4. Implementasi | 48 | 6.00 |
| 5. Pengujian | 19 | 2.38 |
| 6. Rilis dan evaluasi | 13 | 1.62 |
| **Total** | **126** | **15.75** |

## 4. Interpretasi
- Total estimasi adalah **126 jam atau 15.75 manday** untuk seluruh aktivitas yang tercantum pada WBS.
- Angka ini adalah usaha gabungan tim; bukan berarti proyek berlangsung selama 15.75 hari kalender.
- Aktivitas analisis, desain, implementasi, dan pengujian dapat dikerjakan oleh anggota berbeda secara paralel jika dependensi terpenuhi.
- Estimasi mencakup aktivitas 1.1–6.5 yang diberikan. Deliverable Sprint 1 seperti repository template dan dokumen lain dianggap sebagai hasil dari aktivitas perencanaan/dokumentasi, bukan tambahan terpisah agar tidak dihitung ganda.

## 5. Penyesuaian Setelah Pengerjaan
Catat jam aktual setiap aktivitas dan bandingkan dengan estimasi. Perbarui estimasi jika fitur Supabase, autentikasi, aturan akses, atau persyaratan pengujian ternyata lebih kompleks.
