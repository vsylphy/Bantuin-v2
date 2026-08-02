// ─── cta.js ────────────────────────────────────────────────────────────────
// Kartu gelap (gradasi forest→pine), echo dari feature-card--featured di
// Features, dipakai sebagai penutup yang menonjol sebelum Footer.
// ─────────────────────────────────────────────────────────────────────────────

const WA_NUMBER = "6285178465471"; // TODO: samakan dengan nomor di navbar.js/footer.js/hero.js
const WA_MESSAGE = encodeURIComponent(
  "Halo BANTU.IN! Aku butuh bantuan, boleh dibantu?",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export function CTA() {
  return `
    <section id="cta" class="cta-section">
      <div class="container-nav">

        <div class="cta-card" data-reveal>

          <!-- Dekorasi dalam kartu -->
          <div class="cta-decor" aria-hidden="true">
            <div class="cta-dot-grid"></div>
            <div class="cta-glow cta-glow-1"></div>
            <div class="cta-glow cta-glow-2"></div>
          </div>

          <div class="cta-content">
            <div class="cta-badge">
              <span class="cta-badge-dot"></span>
              <span>Mulai Sekarang</span>
            </div>

            <h2 class="cta-heading">Siap dibantu sekarang?</h2>

            <p class="cta-desc">
              Dari jastip sampai beberes kamar, satu chat aja tim kami langsung bergerak.
            </p>

            <a href="${WA_LINK}" target="_blank" rel="noopener" class="cta-button">
              <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.19h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.24c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.12.09-1.8-.11-.42-.13-.95-.3-1.63-.6-2.87-1.24-4.75-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.65.5.24.55.82 1.94.9 2.08.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.65.78 1.94.92.28.14.47.21.53.33.07.12.07.67-.17 1.35Z"/></svg>
              Chat Sekarang
            </a>

            <div class="cta-trust">
              <div class="cta-trust-dots">
                <span></span><span></span><span></span>
              </div>
              <span>Dipercaya 8 profesional, siap bantu 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
