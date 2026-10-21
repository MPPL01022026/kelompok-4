# Risk Register

## 1. Tujuan
Risk Register ini mengikuti aktivitas WBS proyek **Website UMKM Bakso Jambo Langsa**, terutama pengembangan website, integrasi Supabase, pengujian, dan rilis.

## 2. Skala Penilaian
- **Probabilitas:** Rendah, Sedang, Tinggi.
- **Dampak:** Rendah (gangguan kecil), Sedang (perlu perbaikan atau penyesuaian), Tinggi (mengancam fitur utama, keamanan, atau jadwal).
- **Tingkat risiko** adalah penilaian awal secara kualitatif; tinjau ulang secara berkala.

## 3. Daftar Risiko

| ID | Risiko | WBS terkait | Probabilitas | Dampak | Tingkat | Mitigasi | Pemilik |
|---|---|---|---|---|---|---|---|
| R1 | Kebutuhan atau informasi UMKM belum lengkap/berubah | 1.2, 2.3 | Sedang | Sedang | Sedang | Konfirmasi menu, harga, lokasi, jam buka, dan kontak dengan pemilik; catat persetujuan | Analis kebutuhan |
| R2 | Ruang lingkup Sprint 1 melebar | 1.3, 6.5 | Sedang | Tinggi | Tinggi | Sepakati batas Sprint 1 dan pindahkan fitur tambahan ke backlog berikutnya | Koordinator |
| R3 | Desain tidak sesuai kebutuhan atau sulit digunakan | 3.1–3.4 | Sedang | Sedang | Sedang | Review sitemap/wireframe sebelum implementasi dan uji alur navigasi | UI/UX |
| R4 | Tampilan tidak responsif pada perangkat tertentu | 3.3, 4.2, 5.1 | Sedang | Sedang | Sedang | Uji breakpoint desktop/mobile dan perbaiki layout sebelum rilis | Frontend |
| R5 | Kebijakan akses Supabase salah konfigurasi sehingga data/foto dapat diakses atau diubah pihak yang tidak berhak | 2.4, 3.5, 4.4–4.6, 5.5 | Sedang | Tinggi | Tinggi | Terapkan prinsip hak minimum, uji akses anonim dan pengelola, serta jangan mengekspos service-role key | Integrasi/QA |
| R6 | Login pengelola atau unggah foto gagal | 3.4, 4.6, 5.3–5.5 | Sedang | Tinggi | Tinggi | Uji alur login, sesi, pesan error, dan unggah dari akun pengelola yang sah | Integrasi/QA |
| R7 | Format atau ukuran foto tidak tervalidasi dengan benar | 2.4, 5.3–5.4 | Sedang | Sedang | Sedang | Validasi tipe dan ukuran di sisi klien serta kebijakan layanan; uji kasus valid dan tidak valid | Integrasi/QA |
| R8 | Kuota atau batas paket Supabase tidak cukup | 4.4–4.6 | Sedang | Sedang | Sedang | Verifikasi batas paket, optimalkan ukuran gambar, dan siapkan prosedur bila kuota tercapai | Integrasi/QA |
| R9 | GitHub Pages atau path aset gagal setelah deployment | 4.7, 6.3 | Sedang | Tinggi | Tinggi | Uji URL publik, path relatif, file index, dan tautan sebelum demo | Frontend |
| R10 | Konflik kode atau review Pull Request terlambat | 4.1–4.7, 6.1 | Sedang | Sedang | Sedang | Gunakan branch, commit kecil, review terjadwal, dan komunikasi sebelum merge | Seluruh tim |
| R11 | Dokumentasi atau tautan README tidak sesuai dengan repository | 6.2 | Sedang | Sedang | Sedang | Periksa nama file, link relatif, dan isi dokumen sebelum pengumpulan | Koordinator/dokumentasi |
| R12 | Foto atau informasi dipakai tanpa izin | 2.3, 2.4, 4.5–4.6 | Rendah | Tinggi | Sedang–Tinggi | Minta izin pemilik UMKM dan gunakan konten yang disetujui | Koordinator + tim |
| R13 | Pengujian tidak mencakup skenario penting | 5.1–5.6 | Sedang | Tinggi | Tinggi | Buat checklist untuk tampilan, navigasi, unggah, batas ukuran, akses publik/pengelola, dan error | QA |
| R14 | Umpan balik terlambat sehingga backlog Sprint berikutnya kurang jelas | 6.4–6.5 | Sedang | Sedang | Sedang | Jadwalkan sesi umpan balik dan catat item backlog beserta prioritas | Koordinator |

## 4. Pemantauan Risiko

| ID Risiko | Status awal | Indikator pemicu |
|---|---|---|
| R1 | Perlu dipantau | Informasi UMKM belum dikonfirmasi atau berubah |
| R2 | Perlu dipantau | Permintaan fitur di luar ruang lingkup Sprint 1 |
| R3 | Perlu dipantau | Pengguna kesulitan memahami alur |
| R4 | Perlu dipantau | Konten terpotong atau navigasi rusak di layar tertentu |
| R5 | Perlu dipantau | Pengguna tanpa hak dapat mengubah atau membaca data terbatas |
| R6 | Perlu dipantau | Login/unggah gagal pada pengujian |
| R7 | Perlu dipantau | File yang tidak sesuai tetap dapat diunggah |
| R8 | Perlu dipantau | Kuota atau limit layanan mendekati batas |
| R9 | Perlu dipantau | Demo menghasilkan 404 atau aset gagal dimuat |
| R10 | Perlu dipantau | Pull Request tertunda atau konflik berulang |
| R11 | Perlu dipantau | Link dokumentasi rusak |
| R12 | Perlu dipantau | Izin foto/konten belum jelas |
| R13 | Perlu dipantau | Kasus uji penting belum dijalankan |
| R14 | Perlu dipantau | Umpan balik belum terkumpul sebelum evaluasi |

## 5. Prosedur Respons
1. Tinjau risiko saat koordinasi tim dan sebelum milestone.
2. Catat tanggal, status, tindakan, pemilik, dan hasil mitigasi.
3. Risiko berdampak tinggi—terutama keamanan akses Supabase dan kegagalan demo—harus ditangani sebelum rilis.
4. Jika risiko terjadi, buat catatan isu dan tindakan korektif.
5. Perbarui probabilitas dan dampak berdasarkan hasil pengujian aktual.
