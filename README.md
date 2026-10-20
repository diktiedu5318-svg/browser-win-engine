# Browser Win Engine (starter)

Ini adalah prototipe launcher + GitHub Pages. Belum menyertakan Boxedwine, filesystem Wine, atau build WebAssembly, jadi belum dapat menjalankan aplikasi Windows.

## Struktur
- `index.html` — UI launcher
- `src/app.js` — pilih file dan status runtime
- `src/style.css` — tampilan responsif
- `public/runtime/README.txt` — lokasi output runtime
- `.github/workflows/pages.yml` — deploy statis ke GitHub Pages

## Deploy dari Chromebook
1. Buat repo terpisah bernama `browser-win-engine`.
2. Upload semua file dan folder ini ke root repo.
3. Settings → Pages → Source: GitHub Actions.
4. Commit ke branch `main`; workflow akan menerbitkan halaman.
5. Buka URL yang muncul di Settings → Pages.

## Build Boxedwine melalui cloud
Dokumentasi upstream menjelaskan build Emscripten di `project/emscripten`; perintah tepatnya bisa berbeda antar-revisi.
1. Pakai GitHub Codespaces atau lingkungan cloud Linux dengan Emscripten (periksa batas gratis).
2. Clone https://github.com/danoon2/Boxedwine.
3. Ikuti instruksi build pada revisi yang diunduh; baca `project/emscripten/buildFlags.txt`.
4. Build dan uji melalui HTTP; identifikasi semua file output (HTML/JS/WASM/filesystem/data), bukan hanya `.wasm`.
5. Salin output lengkap yang boleh didistribusikan ke `public/runtime/`.
6. Integrasikan launcher dengan shell upstream, lalu uji ulang sebelum mengklaim bisa menjalankan aplikasi.

Dokumentasi:
- https://www.boxedwine.org/documentation/build/
- https://www.boxedwine.org/documentation/web-build-configuration/

## Offline
Halaman statis dapat di-cache, tetapi runtime offline perlu service worker dan semua aset runtime/filesystem tersedia di cache. Starter ini belum mengimplementasikannya.

Jangan sertakan filesystem Windows/Wine atau game proprietary kecuali lisensinya mengizinkan redistribusi. Tidak semua program Windows atau game 3D akan kompatibel.
