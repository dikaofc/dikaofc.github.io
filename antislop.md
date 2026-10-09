# antislop.md

Filter yang dipakai di atas `DESIGN.md`. `DESIGN.md` menetapkan identitas dan
mengisi ruang; file ini membuang yang tidak boleh ada di ruang itu.

Aturannya konkret dan bisa dicek. Kalau satu baris melanggar, ganti, jangan
dipertahankan dengan alasan "biar terdengar profesional".

## 1. Tanda baca

- **Dilarang em-dash (`—`).** Pakai koma, titik dua, tanda kurung, atau titik.
  Em-dash adalah penanda tulisan AI paling gampang dikenali.
- **Dilarang ellipsis hias (`…`)** di akhir kalimat. Pakai titik.
- Tanda hubung (`-`) tetap boleh untuk kata ulang dan rentang.

## 2. Kata dan frasa terlarang

Jangan pakai, dalam bahasa Indonesia maupun Inggris:

| Kategori | Contoh terlarang |
|---|---|
| Hype | inovatif, terdepan, cutting-edge, canggih, revolusioner, kelas dunia, terbaik, unggulan, game-changer, next-gen, state-of-the-art |
| Klise agensi | solusi digital, solusi terbaik untuk kebutuhanmu, kami siap membantu, tanpa paksaan, kepuasan pelanggan adalah prioritas |
| Kata sambung AI | tidak hanya ... tetapi juga, bukan hanya ... melainkan, selain itu, dengan demikian, oleh karena itu, di era digital, dalam dunia yang serba cepat |
| Verb boros | memberdayakan, mengoptimalkan sinergi, mentransformasi, menyelaraskan, mendorong pertumbuhan |
| Penutup manis | dibuat dengan cinta, dengan sepenuh hati, mari bersama-sama |

Kata benda konkret tetap boleh: "optimasi" sebagai pekerjaan teknis itu sah,
"mengoptimalkan sinergi" tidak.

## 3. Suara

- **Orang pertama "gw".** Bukan "kami", bukan "kita", bukan "tim kami". Situs
  ini satu orang.
- **Sapa "kamu".** Bukan "Anda", bukan "para pengguna", bukan "klien".
- **Kalimat pendek boleh.** Campur panjang-pendek. Kalimat tiga kata itu sah.
- **Boleh ngaku salah atau batas.** "Nggak bisa", "nggak masuk budget",
  "ini bakal lama" lebih dipercaya daripada janji mulus.
- **Bahasa gaul secukupnya.** "gw", "nggak", "udah", "beneran" boleh. Jangan
  jadi parodi.

## 4. Isi

- **Angka, bukan kata sifat.** "3 sampai 7 hari" mengalahkan "cepat".
- **Sebut hal spesifik.** Nama tool, nama file, langkah ke-n. Bukan "teknologi
  modern" atau "pendekatan terbaik".
- **Daftar tiga jangan dipaksa.** Tiga item hanya kalau memang ada tiga. Dua
  atau empat itu normal.
- **Nol emoji di prosa.** Emoji hanya di konteks yang memang santai dan jarang.
- **Jangan ulang judul di paragraf.** H1 sudah bilang "Layanan", paragrafnya
  tidak perlu mulai dengan "Layanan kami adalah ...".

## 5. Contoh (buruk → baik)

- "Kami menyediakan solusi digital terbaik untuk kebutuhan bisnis Anda." →
  "Butuh website atau bot? Ceritain maumu, nanti gw yang ngodingin."
- "Proses pengerjaan yang cepat dan efisien." → "Landing page 3 sampai 7 hari."
- "Tidak hanya cepat, tetapi juga aman." → "Cepat, dan tetap aman."
- "Dibuat dengan cinta untuk Anda." → "Dikerjain manual, bukan template."

## 6. Cara pakai

Sebelum menulis atau mengubah teks apa pun (komponen React, fallback statis di
`<nama>/index.html`, README, atau schema JSON-LD):

1. Tulis seperti ngomong ke satu orang.
2. Jalankan sweep: cari `—`, kata di tabel bagian 2, dan pola "tidak hanya".
3. Kalau ragu antara aman dan jujur, pilih jujur.
