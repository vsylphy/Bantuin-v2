// ─── faq.js ────────────────────────────────────────────────────────────────
// Selaras Hero/About/Features/HowItWorks: blob dekor, badge eyebrow,
// data-reveal. Accordion single-open dengan animasi height yang halus
// (pola sama seperti mobile-panel di navbar).
// ─────────────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: "Bagaimana cara pesan layanan BANTU.IN?",
    answer:
      "Chat lewat WhatsApp, kirim detail kebutuhanmu — barang, lokasi, tugas, atau kondisi ruangan. Kami hitung harga dan konfirmasi dulu sebelum kamu bayar.",
  },
  {
    question: "Apa saja yang termasuk dalam biaya jastip?",
    answer:
      "Harga barang, biaya jasa, dan ongkos antar. Semuanya dihitung dan dikonfirmasi di awal, jadi nggak ada biaya siluman yang muncul belakangan.",
  },
  {
    question: "Apakah bantuan akademik termasuk mengerjakan ujian?",
    answer:
      "Tidak. Kami bantu riset, desain, editing, proofreading, coding, dan konsultasi — bukan mengerjakan ujian atau tugas utuh untuk diklaim sebagai karya sendiri.",
  },
  {
    question: "Ada bukti kalau barang sudah diantar?",
    answer:
      "Ada. Setiap antar-jemput difoto saat barang diambil dan saat diterima, jadi kamu tetap tenang meskipun nggak melihat langsung prosesnya.",
  },
  {
    question: "Wilayah mana saja yang dilayani?",
    answer:
      "Saat ini kami fokus di area Bandung, khususnya sekitar Universitas Teknologi Bandung. Chat kami dulu untuk mengecek jangkauan ke lokasimu.",
  },
  {
    question: "Berapa lama waktu respon BANTU.IN?",
    answer:
      "Rata-rata 15 menit setelah kamu chat. Tim langsung cek ketersediaan dan konfirmasi harga sebelum lanjut ke pengerjaan.",
  },
];

export function FAQ() {
  return `
    <section id="faq" class="faq-section">

      <!-- Dekorasi background (pola identik section lain) -->
      <div class="faq-decor" aria-hidden="true">
        <div class="faq-blob faq-blob-1"></div>
        <div class="faq-dot-grid"></div>
      </div>

      <div class="container-nav relative z-10">

        <div class="faq-header" data-reveal>
          <div class="hero-badge" style="display:inline-flex">
            <span class="about-badge-dot"></span>
            <span>FAQ</span>
          </div>

          <h2 class="faq-heading">
            Pertanyaan yang
            <span class="faq-heading-accent">sering ditanyakan</span>
          </h2>

          <p class="faq-desc">
            Masih ragu? Ini jawaban dari pertanyaan yang paling sering masuk ke kami.
          </p>
        </div>

        <div class="faq-list">
          ${FAQS.map(
            (faq, index) => `
            <div class="faq-item" data-reveal style="transition-delay:${index * 60}ms">
              <button class="faq-button" data-faq-button data-index="${index}" aria-expanded="false">
                <span>${faq.question}</span>
                <span class="faq-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </button>
              <div class="faq-panel" data-faq-panel>
                <div class="faq-panel-inner">
                  <p>${faq.answer}</p>
                </div>
              </div>
            </div>
          `,
          ).join("")}
        </div>
      </div>
    </section>
  `;
}
