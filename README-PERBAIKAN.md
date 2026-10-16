# Bakso Jambo Langsa — file perbaikan

## Struktur file
Letakkan file mengikuti struktur ini agar semua jalur file cocok:

```text
project/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── app.js
    └── supabase.js
```

## Yang diperbaiki
- Navigasi desktop dan mobile diperkuat, termasuk tombol menu, tombol Escape, dan akses keyboard.
- Tautan navigasi mengarah ke bagian yang cocok: Beranda, Menu, Galeri Foto, Tentang, Kontak.
- Pesan galeri dan error Supabase dibuat lebih jelas.
- Desain utama dan warna website dipertahankan.

## Catatan penting untuk galeri online
`js/supabase.js` masih berisi nilai contoh. Agar unggah foto dan galeri publik bekerja:
1. Isi `url` dan `anonKey` dengan URL proyek serta publishable/anon key dari Supabase.
2. Siapkan tabel `gallery_photos` dan bucket Storage `bakso-photos`.
3. Atur kebijakan akses (RLS) agar pengunjung dapat membaca foto, sedangkan hanya akun pengelola yang terautentikasi dapat mengunggah.
4. Ikuti petunjuk proyek yang sudah ada di `docs/project-setup.md` jika file tersebut tersedia.

Jangan pernah memakai `service_role` key di website/browser.
