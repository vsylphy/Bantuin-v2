// ─── about.js ────────────────────────────────────────────────────────────────
// Desain About yang selaras dengan Hero: blob dekor, badge, floating card,
// data-reveal scroll animation, palet warna identik.
// ─────────────────────────────────────────────────────────────────────────────

const ABOUT_CHECKS = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "Website Profesional",
    desc: "Tampilan modern yang membangun kepercayaan pelanggan.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>`,
    title: "Respon Cepat",
    desc: "Tim kami siap bergerak rata-rata dalam 15 menit.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 1 0 18A9 9 0 0 1 12 2z"/><path d="M12 2v18M2 12h20"/></svg>`,
    title: "Fully Responsive",
    desc: "Optimal di semua perangkat — HP, tablet, maupun desktop.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    title: "Terpercaya & Aman",
    desc: "Privasi terjaga, transaksi nyaman dan transparan.",
  },
];

export function About() {
  return `
    <section id="about" class="about-section">

      <!-- Dekorasi background (sama dengan hero) -->
      <div class="about-decor" aria-hidden="true">
        <div class="about-blob about-blob-1"></div>
        <div class="about-blob about-blob-2"></div>
        <div class="about-dot-grid"></div>
      </div>

      <div class="container-nav relative z-10">
        <div class="about-grid">

          <!-- ── Kiri: Visual ── -->
          <div class="about-visual" data-reveal>

            <!-- Kartu ilustrasi utama -->
            <div class="about-card-main">

              <!-- Floating avatar strip (mirip hero-badge) -->
              <div class="about-team-strip">
                <span class="about-team-dot"></span>
                <span class="about-team-dot about-team-dot-2"></span>
                <span class="about-team-dot about-team-dot-3"></span>
                <span class="about-strip-label">Tim aktif sekarang</span>
              </div>

              <!-- Ilustrasi abstrak / pattern -->
              <div class="about-illustration" aria-hidden="true">
                <div class="about-illus-ring about-illus-ring-1"></div>
                <div class="about-illus-ring about-illus-ring-2"></div>
                <div class="about-illus-ring about-illus-ring-3"></div>
                <div class="about-illus-center">
                  <svg class="about-illus-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>

              <!-- Progress bar kecil (dekoratif / bisa di-animate) -->
              <div class="about-progress-group">
                <div class="about-progress-row">
                  <span>Kepuasan Pelanggan</span>
                  <span class="about-progress-pct">98%</span>
                </div>
                <div class="about-progress-track">
                  <div class="about-progress-fill" style="--pct:98%"></div>
                </div>
                <div class="about-progress-row" style="margin-top:0.75rem">
                  <span>Pesanan Selesai</span>
                  <span class="about-progress-pct">500+</span>
                </div>
                <div class="about-progress-track">
                  <div class="about-progress-fill" style="--pct:85%"></div>
                </div>
              </div>
            </div>

            <!-- Floating card kiri-bawah (mirip hero-float-card) -->
            <div class="about-float-card about-float-card-mission">
              <div class="about-float-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <p class="about-float-title">Misi Kami</p>
                <p class="about-float-sub">Solusi nyata, bukan janji</p>
              </div>
            </div>

            <!-- Badge verified (pojok kanan atas, mirip hero) -->
            <div class="about-verified" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>

          </div>

          <!-- ── Kanan: Teks ── -->
          <div class="about-text" data-reveal style="transition-delay:150ms">

            <!-- Badge atas (sama persis dengan hero-badge) -->
            <div class="hero-badge" style="display:inline-flex">
              <span class="about-badge-dot"></span>
              <span>Kenali BANTU.IN lebih dekat</span>
            </div>

            <h2 class="about-heading">
              Bantuan nyata,<br>
              <span class="about-heading-accent">tanpa ribet</span>
            </h2>

            <p class="about-desc">
              BANTU.IN hadir untuk mahasiswa dan warga Bandung yang butuh
              bantuan sehari-hari dari jastip, antar-jemput, kerjain tugas,
              sampai beberes kamar. Cukup chat, tim kami langsung bergerak.
            </p>

            <!-- Check-list items -->
            <ul class="about-checklist">
              ${ABOUT_CHECKS.map(
                (c) => `
              <li class="about-check-item">
                <div class="about-check-icon">${c.icon}</div>
                <div>
                  <p class="about-check-title">${c.title}</p>
                  <p class="about-check-desc">${c.desc}</p>
                </div>
              </li>`,
              ).join("")}
            </ul>

          </div>

        </div>
      </div>
    </section>
  `;
}
