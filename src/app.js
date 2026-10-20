const statusPill = document.querySelector("#statusPill");
const runtimeMessage = document.querySelector("#runtimeMessage");
const appFile = document.querySelector("#appFile");
const fileInfo = document.querySelector("#fileInfo");

// Intentionally reports only whether a runtime JS file exists.
// It does not claim that the runtime works.
async function checkRuntime() {
  try {
    const response = await fetch("./runtime/boxedwine-shell.js", { method: "HEAD", cache: "no-store" });
    if (!response.ok) throw new Error("missing");
    statusPill.textContent = "File runtime ditemukan";
    statusPill.className = "pill warn";
    runtimeMessage.textContent = "File JavaScript ditemukan, tetapi dependensi, filesystem, dan kemampuan menjalankan aplikasi belum diverifikasi.";
  } catch {
    statusPill.textContent = "Belum tersedia";
    statusPill.className = "pill warn";
    runtimeMessage.textContent = "Runtime Boxedwine WebAssembly belum dipasang. Halaman ini masih launcher prototipe.";
  }
}
appFile.addEventListener("change", () => {
  const file = appFile.files?.[0];
  if (!file) { fileInfo.textContent = "Belum ada file dipilih."; return; }
  fileInfo.textContent = `${file.name} • ${(file.size / (1024 * 1024)).toFixed(2)} MB. Belum dijalankan atau diunggah.`;
});
checkRuntime();
