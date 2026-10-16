# Function Point Analysis — Estimasi Awal

## Tujuan
Dokumen ini memberikan estimasi ukuran fungsional awal untuk website Bakso Jambo Langsa. Angka berikut adalah **asumsi pembelajaran**, bukan hasil pengukuran final. Revisi setelah kebutuhan dan desain database disepakati.

## Kategori dan bobot IFPUG standar
| Jenis | Sederhana | Sedang | Kompleks |
|---|---:|---:|---:|
| External Input (EI) | 3 | 4 | 6 |
| External Output (EO) | 4 | 5 | 7 |
| External Inquiry (EQ) | 3 | 4 | 6 |
| Internal Logical File (ILF) | 7 | 10 | 15 |
| External Interface File (EIF) | 5 | 7 | 10 |

## Hitungan awal (contoh)
| Jenis | Kompleksitas asumsi | Jumlah | Bobot | Subtotal |
|---|---|---:|---:|---:|
| EI — formulir unggah foto | Sederhana | 1 | 3 | 3 |
| EI — login pengelola | Sederhana | 1 | 3 | 3 |
| EO — galeri foto ditampilkan | Sederhana | 1 | 4 | 4 |
| EQ — pengunjung membaca galeri | Sederhana | 1 | 3 | 3 |
| ILF — metadata foto galeri | Sederhana | 1 | 7 | 7 |
| EIF — tidak diidentifikasi pada lingkup awal | — | 0 | — | 0 |
| **Total UFP** | | | | **20** |

## Asumsi dan batasan
- Ini estimasi kasar untuk latihan, bukan hasil penilaian kompleksitas berdasarkan DET/FTR/RET secara formal.
- Autentikasi dan penyimpanan file disediakan oleh Supabase; cara menghitung fungsi eksternal perlu disepakati dengan dosen.
- Informasi menu dan kontak yang masih statis belum dihitung sebagai fitur dinamis.
- Tidak dilakukan Value Adjustment Factor (VAF) karena karakteristik umum sistem belum dinilai.

## Langkah berikutnya
1. Tetapkan batas sistem dan aktor.
2. Identifikasi semua transaksi input, output, dan inquiry.
3. Hitung DET, FTR, dan RET untuk menetapkan kompleksitas.
4. Review hasil dengan dosen dan dokumentasikan alasan setiap bobot.
