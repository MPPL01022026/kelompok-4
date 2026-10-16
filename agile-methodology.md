# Agile Methodology — Sprint 1

## 1. Metode
Tim menggunakan Scrum sebagai kerangka kerja Agile sederhana. Pekerjaan dibagi menjadi sprint dengan tujuan yang jelas, backlog yang diprioritaskan, dan review berkala. Durasi sprint ditentukan kelompok dan dosen.

## 2. Tujuan Sprint 1
Menghasilkan fondasi proyek yang dapat dikembangkan bersama: repository GitHub, kebutuhan awal, rancangan UI/UX, website statis awal, dokumentasi, serta rencana integrasi galeri foto online.

## 3. Peran
- **Product Owner:** mewakili kebutuhan pengguna/pemilik usaha dan memprioritaskan backlog.
- **Scrum Master/Koordinator:** membantu proses berjalan dan mengatasi hambatan.
- **Development Team:** menganalisis, merancang, membuat, menguji, dan mendokumentasikan produk.

Satu orang dapat menjalankan lebih dari satu peran sesuai ukuran kelompok.

## 4. Contoh Sprint Backlog

| ID | Pekerjaan | Prioritas | Kriteria selesai |
|---|---|---|---|
| S1-01 | Membuat repository dan README | Tinggi | Struktur jelas dan bisa di-clone |
| S1-02 | Mengumpulkan kebutuhan UMKM | Tinggi | Kebutuhan disetujui/ditandai belum terverifikasi |
| S1-03 | Membuat UI halaman utama | Tinggi | Halaman responsif dan navigasi berfungsi |
| S1-04 | Membuat dokumen WBS dan Agile | Tinggi | Dokumen tersedia di `docs/` |
| S1-05 | Menyusun Function Point awal | Sedang | Asumsi dan hitungan terdokumentasi |
| S1-06 | Menyiapkan desain galeri online | Tinggi | Skema database dan kebijakan akses terdokumentasi |
| S1-07 | Menyusun rencana pengujian | Sedang | Kasus uji memiliki langkah dan hasil yang diharapkan |

## 5. Acara Scrum
- **Sprint Planning:** pilih backlog dan sepakati tujuan sprint.
- **Daily Scrum/check-in:** bahas progres, rencana, dan hambatan.
- **Sprint Review:** demonstrasikan hasil ke tim/dosen/pemangku kepentingan.
- **Retrospective:** tentukan hal yang berjalan baik dan perbaikan proses.

## 6. Definition of Done
Pekerjaan dianggap selesai apabila perubahan sudah direview, tidak menimbulkan kerusakan yang diketahui, memenuhi kriteria penerimaan, dokumentasi terkait diperbarui, dan perubahan digabungkan melalui Pull Request.

## 7. Risiko dan mitigasi
- Data usaha belum lengkap: tandai placeholder dan konfirmasi ke pemilik.
- Kunci konfigurasi salah: uji konfigurasi pada lingkungan demo.
- Upload foto disalahgunakan: wajibkan autentikasi pengelola, RLS, dan batas ukuran/format.
- Konflik kode: gunakan branch terpisah dan Pull Request.
