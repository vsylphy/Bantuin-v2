// ─── Features.js ─────────────────────────────────────────────────────────────
// Desain selaras Hero & About: blob dekor, badge, kartu hover-lift,
// satu kartu "featured" (gelap) sebagai visual anchor di baris pertama.
// ─────────────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    title: "Responsive",
    desc: "Tampilan optimal di semua perangkat — HP, tablet, maupun desktop.",
    icon: `<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/><rect x="2" y="7" width="3" height="10" rx="1"/><rect x="19" y="9" width="3" height="6" rx="1"/></svg>`,
  },
  {
    title: "Cepat & Ringan",
    desc: "Performa tinggi, waktu muat singkat, nyaman diakses kapan pun.",
    icon: `<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    featured: true, // ← kartu gelap sebagai visual anchor
  },
  {
    title: "Jangkauan Luas",
    desc: "Hadir online 24/7 — pelanggan dari mana saja bisa temukan kamu.",
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>`,
  },
  {
    title: "Aman & Terpercaya",
    desc: "Dibangun dengan teknologi modern dan praktik pengembangan terbaik.",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  },
  {
    title: "Kesan Profesional",
    desc: "Meningkatkan citra bisnis melalui tampilan yang rapi dan kredibel.",
    icon: `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v4"/><path d="M8 14h8"/></svg>`,
  },
  {
    title: "Desain Modern",
    desc: "Tampilan bersih dan fleksibel yang terus bisa berkembang bersama bisnis.",
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  },
];

export function Features() {
  return `
    <section id="fitur" class="features-section">

      <!-- Dekorasi background -->
      <div class="features-decor" aria-hidden="true">
        <div class="features-blob features-blob-1"></div>
        <div class="features-blob features-blob-2"></div>
        <div class="features-dot-grid"></div>
      </div>

      <div class="container-nav relative" style="z-index:1">

        <!-- Header -->
        <div class="features-header" data-reveal>
          <div class="hero-badge" style="display:inline-flex">
            <span class="about-badge-dot"></span>
            <span>Kenapa pilih BANTU.IN?</span>
          </div>

          <h2 class="features-heading">
            Solusi lengkap,
            <span class="features-heading-accent">sekali chat</span>
          </h2>

          <p class="features-desc">
            Dari jastip sampai beberes kamar — semua bisa dibantu.
            Tim kami bergerak cepat supaya kamu bisa fokus ke hal lain.
          </p>
        </div>

        <!-- Grid kartu -->
        <div class="features-grid">
          ${FEATURES.map(
            (f, i) => `
          <div
            class="feature-card${f.featured ? " feature-card--featured" : ""}"
            data-reveal
            style="transition-delay:${i * 80}ms"
          >
            <span class="feature-card-num">0${i + 1}</span>
            <div class="feature-icon-wrap">${f.icon}</div>
            <p class="feature-card-title">${f.title}</p>
            <p class="feature-card-desc">${f.desc}</p>
          </div>`,
          ).join("")}
        </div>

        <!-- CTA -->
        <div class="features-cta" data-reveal style="transition-delay:520ms">
          <a href="#contact" class="btn-outline">
            Hubungi kami →
          </a>
        </div>

      </div>
    </section>
  `;
}
