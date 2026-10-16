# Rencana Pengujian

| ID | Skenario | Langkah | Hasil yang diharapkan |
|---|---|---|---|
| T-01 | Buka halaman | Buka URL website | Halaman dan navigasi tampil tanpa error |
| T-02 | Navigasi mobile | Buka di layar sempit, klik tombol menu | Menu terbuka/tertutup dan tautan bekerja |
| T-03 | Supabase belum dikonfigurasi | Gunakan placeholder config | Pesan konfigurasi tampil, bukan galeri palsu |
| T-04 | Galeri kosong | Konfigurasi Supabase tanpa foto | Pesan belum ada foto tampil |
| T-05 | Login gagal | Masukkan kredensial tidak valid | Pesan gagal masuk tampil |
| T-06 | Upload gambar valid | Login dan pilih JPG/PNG/WebP di bawah 5 MB | File tersimpan dan metadata tercatat |
| T-07 | Upload file terlalu besar | Pilih file di atas 5 MB | Upload ditolak oleh validasi frontend |
| T-08 | Upload format tidak didukung | Pilih format selain JPG/PNG/WebP | File ditolak |
| T-09 | Pengunjung anonim membaca galeri | Buka website tanpa login | Foto publik tampil |
| T-10 | Pengunjung anonim mencoba upload | Tanpa login, periksa area pengelola | Form upload tidak ditampilkan |
| T-11 | Logout | Klik tombol keluar | Sesi berakhir dan form login tampil |
| T-12 | Layout responsif | Uji desktop dan mobile | Tidak ada overflow utama; konten terbaca |

## Catatan pelaksanaan
- Jalankan pengujian setelah konfigurasi Supabase dan kebijakan akses dibuat.
- Pengujian T-07 dan T-08 di frontend bukan pengganti validasi Storage/server-side.
- Simpan bukti pengujian (screenshot, tanggal, browser, hasil aktual) untuk laporan sprint.
- Catat bug sebagai issue GitHub dan hubungkan dengan Pull Request perbaikannya.
