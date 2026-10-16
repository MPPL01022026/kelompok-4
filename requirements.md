# Kebutuhan Sistem

## Tujuan
Menyediakan website informasi sederhana untuk UMKM Bakso Jambo Langsa dengan galeri foto yang dapat diperbarui pengelola.

## Aktor
- Pengunjung umum
- Pengelola yang telah diautentikasi
- Tim pengembang

## Kebutuhan fungsional
- FR-01: Sistem menampilkan halaman beranda dan pengenalan usaha.
- FR-02: Sistem menampilkan bagian menu contoh; data harus dikonfirmasi sebelum dipublikasikan sebagai informasi resmi.
- FR-03: Pengunjung dapat melihat foto galeri dan keterangannya.
- FR-04: Pengelola dapat login menggunakan Supabase Auth.
- FR-05: Pengelola dapat mengunggah foto JPG, PNG, atau WebP maksimal 5 MB.
- FR-06: Metadata foto disimpan di database dan foto disimpan di Storage.
- FR-07: Foto yang telah disimpan dapat dibaca pengunjung publik.
- FR-08: Pengelola dapat logout.
- FR-09: Website menampilkan pesan status ketika galeri dimuat atau operasi gagal.

## Kebutuhan nonfungsional
- NFR-01: Tampilan menyesuaikan layar desktop dan ponsel.
- NFR-02: Kredensial rahasia tidak disimpan di repository.
- NFR-03: Akses tulis dibatasi melalui autentikasi dan kebijakan server.
- NFR-04: Form memiliki label dan pesan status yang mudah dipahami.
- NFR-05: Gambar menggunakan lazy loading.
- NFR-06: Website dapat di-host sebagai frontend statis.

## Di luar lingkup awal
- Pembayaran online dan pemesanan meja.
- Keranjang belanja.
- Panel administrasi lengkap untuk edit/hapus foto.
- Analitik dan integrasi layanan pesan antar.

## Pertanyaan terbuka
- Data usaha dan daftar harga resmi apa yang akan dipublikasikan?
- Siapa pemilik akun pengelola?
- Apakah foto perlu moderasi sebelum muncul?
- Apakah dibutuhkan fitur edit dan hapus foto?
