// ─── howItWorks.js ─────────────────────────────────────────────────────────
// Selaras dengan About & Features: blob dekor, badge eyebrow, data-reveal.
// Bedanya: bentuknya timeline bernomor dengan garis penghubung putus-putus,
// bukan grid kartu, biar section ini punya identitas visual sendiri.
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    title: "Chat kebutuhanmu",
    desc: "Kirim detail: barang, lokasi, tugas, atau kondisi ruangan — apapun kebutuhannya.",
  },
  {
    title: "Kami hitung & konfirmasi",
    desc: "Harga, biaya jasa, dan estimasi waktu dikonfirmasi dulu sebelum kamu bayar.",
  },
  {
    title: "Helper kerjakan",
    desc: "Helper yang sesuai kemampuan langsung turun tangan menyelesaikan permintaanmu.",
  },
  {
    title: "Terima & kasih rating",
    desc: "Cek hasilnya, minta revisi kalau perlu, lalu beri rating buat helper-nya.",
  },
];

export function HowItWorks() {
  return `
    <section id="cara-kerja" class="how-section">

      <!-- Dekorasi background (pola identik Hero/About/Features) -->
      <div class="how-decor" aria-hidden="true">
        <div class="how-blob how-blob-1"></div>
        <div class="how-blob how-blob-2"></div>
        <div class="how-dot-grid"></div>
      </div>

      <div class="container-nav relative z-10">

        <div class="how-header" data-reveal>
          <div class="hero-badge" style="display:inline-flex">
            <span class="about-badge-dot"></span>
            <span>Cara Kerja</span>
          </div>

          <h2 class="how-heading">
            Dari chat pertama,
            <span class="how-heading-accent">sampai selesai</span>
          </h2>

          <p class="how-desc">
            Nggak ada proses ribet. Cuma empat langkah ini yang bakal kamu lalui
            setiap kali butuh bantuan dari kami.
          </p>
        </div>

        <div class="how-steps">
          ${STEPS.map(
            (step, i) => `
            <div class="how-step" data-reveal style="transition-delay:${i * 100}ms">
              <div class="how-step-marker">
                <span class="how-step-circle">${i + 1}</span>
              </div>
              <div class="how-step-body">
                <h3 class="how-step-title">${step.title}</h3>
                <p class="how-step-desc">${step.desc}</p>
              </div>
            </div>
          `,
          ).join("")}
        </div>

      </div>
    </section>
  `;
}
