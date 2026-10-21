# Risk Register

## 1. Tujuan
Risk Register digunakan untuk mencatat risiko yang dapat memengaruhi proyek **Digitalisasi UMKM Bakso Jambo Langsa**, menilai tingkat risikonya, dan menetapkan tindakan mitigasi.

## 2. Skala Penilaian
**Probabilitas**
- Rendah: kecil kemungkinan terjadi.
- Sedang: mungkin terjadi.
- Tinggi: cukup mungkin atau berulang terjadi.

**Dampak**
- Rendah: gangguan kecil, tidak mengubah target utama.
- Sedang: memerlukan perbaikan atau penyesuaian jadwal.
- Tinggi: mengancam fungsi utama, keamanan, atau target penyerahan.

Tingkat risiko awal merupakan penilaian kualitatif dan perlu diperbarui berdasarkan kondisi proyek.

## 3. Daftar Risiko

| ID | Risiko | Probabilitas | Dampak | Tingkat | Strategi Mitigasi | Pemilik Risiko |
|---|---|---|---|---|---|---|
| R1 | Website gagal dimuat setelah deployment | Sedang | Tinggi | Tinggi | Uji URL publik, path aset, dan konfigurasi Pages sebelum review | Frontend Developer |
| R2 | Foto gagal diunggah atau tidak tampil | Sedang | Tinggi | Tinggi | Uji unggah, URL publik, format/ukuran file, dan aturan akses layanan | Integrasi / QA |
| R3 | Kunci rahasia atau kredensial terekspos di repositori | Rendah | Tinggi | Sedang–Tinggi | Jangan commit secret; gunakan konfigurasi aman dan rotasi kredensial bila terekspos | Integrasi / QA |
| R4 | Kuota atau batas paket layanan gratis terlampaui | Sedang | Sedang | Sedang | Periksa batas layanan, optimalkan ukuran gambar, dan siapkan alternatif | Integrasi / QA |
| R5 | Konflik perubahan kode saat kolaborasi | Sedang | Sedang | Sedang | Gunakan branch, commit kecil, review, dan komunikasi sebelum merge | Seluruh anggota |
| R6 | Perubahan kebutuhan dari pemilik UMKM | Sedang | Sedang | Sedang | Catat kebutuhan yang disepakati dan nilai dampak setiap perubahan | Project Coordinator |
| R7 | Keterlambatan penyelesaian tugas | Sedang | Tinggi | Tinggi | Pantau progres berkala, identifikasi hambatan lebih awal, dan redistribusikan tugas | Project Coordinator |
| R8 | Konten atau foto digunakan tanpa izin | Rendah | Tinggi | Sedang–Tinggi | Gunakan foto yang diizinkan pemiliknya dan simpan sumber/izin penggunaan | Analis Kebutuhan / tim |
| R9 | Tampilan tidak konsisten pada perangkat berbeda | Sedang | Sedang | Sedang | Uji ukuran layar dan browser yang umum digunakan | Frontend Developer |
| R10 | Dokumen atau tautan README tidak sesuai dengan isi repo | Sedang | Sedang | Sedang | Periksa nama file, tautan relatif, dan kelengkapan dokumen sebelum penyerahan | Dokumentasi |

## 4. Pemantauan dan Respons
- Tinjau register pada setiap pertemuan progres atau ketika terjadi perubahan besar.
- Catat tanggal identifikasi, status, tindakan yang dilakukan, dan risiko residual jika diperlukan.
- Risiko dengan dampak tinggi harus ditangani sebelum milestone terkait dinyatakan selesai.
- Jika risiko terjadi, catat sebagai isu aktual dan tentukan tindakan korektif, pemilik, serta target penyelesaian.

## 5. Status Awal

| ID | Status Awal | Indikator Pemicu |
|---|---|---|
| R1 | Perlu dipantau | Website tidak dapat diakses atau aset gagal dimuat |
| R2 | Perlu dipantau | Pengujian unggah/tampil foto gagal |
| R3 | Perlu dipantau | Secret terdeteksi dalam kode atau riwayat commit |
| R4 | Perlu dipantau | Penggunaan mendekati batas paket |
| R5 | Perlu dipantau | Merge tertunda karena konflik |
| R6 | Perlu dipantau | Permintaan fitur baru mengubah ruang lingkup |
| R7 | Perlu dipantau | Tugas melewati tanggal target |
| R8 | Perlu dipantau | Izin penggunaan konten tidak jelas |
| R9 | Perlu dipantau | Layout terpotong atau fungsi terganggu di layar tertentu |
| R10 | Perlu dipantau | Tautan dokumentasi menghasilkan 404 |

**Catatan:** Probabilitas dan dampak di atas adalah penilaian awal, bukan hasil pengukuran historis. Tim perlu memperbaruinya sesuai keadaan aktual.
