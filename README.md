# Dapur Rasa

Landing page responsif untuk bisnis katering rumahan fiktif Dapur Rasa. Halaman ini membantu pengunjung melihat paket katering dan menghubungi bisnis melalui WhatsApp.

## Teknologi

- React
- Vite
- Tailwind CSS
- ESLint

## Menjalankan proyek

Pastikan Node.js dan npm sudah terpasang. Dari folder proyek, jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal.

## Perintah tersedia

| Perintah | Kegunaan |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat build produksi di folder `dist/` |
| `npm run preview` | Melihat hasil build produksi secara lokal |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Struktur utama

```text
src/
├── components/       # Komponen halaman yang dapat digunakan kembali
├── data/             # Data paket menu, keunggulan, dan langkah pemesanan
├── App.jsx           # Komposisi komponen halaman
├── constants.js      # Konstanta bersama, termasuk nomor WhatsApp
├── index.css         # Tailwind dan styling global
└── main.jsx          # Entry point React
```

## Konten dan kontak

- Data paket katering, alasan memilih Dapur Rasa, dan langkah pemesanan ada di `src/data/landingContent.js`.
- Nomor WhatsApp di `src/constants.js` (`WHATSAPP_NUMBER`) adalah **placeholder** (`6281234567890`), bukan kontak bisnis yang sebenarnya. Ganti dengan nomor resmi dalam format internasional tanpa tanda `+` sebelum situs dipublikasikan.
- Harga paket merupakan harga fiktif dan dapat disesuaikan.
- Foto makanan dan font dimuat dari Unsplash dan Google Fonts, sehingga memerlukan koneksi internet.

Proyek ini hanya berupa frontend statis; tidak menggunakan backend, autentikasi, atau database.
