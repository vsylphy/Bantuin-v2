const WA_NUMBER = "6281234567890"; // TODO: samakan dengan nomor di navbar.js
const WA_MESSAGE = encodeURIComponent(
  "Halo BANTU.IN! Aku butuh bantuan, boleh dibantu?",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const MAPS_QUERY_LINK =
  "https://www.google.com/maps/search/?api=1&query=Universitas+Teknologi+Bandung";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5535512928827!2d107.5985471747573!3d-6.948221993051982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6279d52ed8b%3A0xfbc31838ba12ddbf!2sUniversitas%20Teknologi%20Bandung!5e1!3m2!1sid!2sid!4v1785540903490!5m2!1sid!2sid";

const LAYANAN_LINKS = [
  { label: "Jastip Barang", href: "#features" },
  { label: "Antar-Jemput", href: "#features" },
  { label: "Bantuan Akademik", href: "#features" },
  { label: "Bersih-Bersih", href: "#features" },
];

const PERUSAHAAN_LINKS = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#", // TODO: ganti link asli
    icon: `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/>`,
  },
  {
    label: "TikTok",
    href: "#", // TODO: ganti link asli
    icon: `<path d="M14 3v10.2a3.3 3.3 0 1 1-2.4-3.18"/><path d="M14 3c0 2.6 2 4.5 4.5 4.7"/>`,
  },
  {
    label: "WhatsApp",
    href: WA_LINK,
    icon: `<path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.19h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.24c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.12.09-1.8-.11-.42-.13-.95-.3-1.63-.6-2.87-1.24-4.75-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.65.5.24.55.82 1.94.9 2.08.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.65.78 1.94.92.28.14.47.21.53.33.07.12.07.67-.17 1.35Z"/>`,
  },
];

function footerColumn(title, links, delay) {
  return `
    <div data-reveal style="transition-delay:${delay}ms">
      <p class="footer-heading">${title}</p>
      <ul class="flex flex-col gap-3 mt-5">
        ${links
          .map(
            (l) => `
          <li>
            <a href="${l.href}" class="footer-link">
              <span>${l.label}</span>
            </a>
          </li>
        `,
          )
          .join("")}
      </ul>
    </div>
  `;
}

export function Footer() {
  return `
    <footer class="footer-surface border-t" style="border-color: var(--border-soft)">

      <!-- Wave lembut, dua lapis buat efek "ombak" yang bergoyang pelan -->
      <div class="footer-wave" aria-hidden="true">
        <div class="footer-wave-track footer-wave-track-1">
          <svg class="footer-wave-svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,55 C100,20 200,90 300,55 C400,20 500,90 600,55 C700,20 800,90 900,55 C1000,20 1100,90 1200,55 L1200,100 L0,100 Z"/>
          </svg>
          <svg class="footer-wave-svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,55 C100,20 200,90 300,55 C400,20 500,90 600,55 C700,20 800,90 900,55 C1000,20 1100,90 1200,55 L1200,100 L0,100 Z"/>
          </svg>
        </div>
        <div class="footer-wave-track footer-wave-track-2">
          <svg class="footer-wave-svg footer-wave-svg-accent" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,65 C150,30 300,100 450,65 C600,30 750,100 900,65 C1050,30 1200,100 1200,65 L1200,100 L0,100 Z"/>
          </svg>
          <svg class="footer-wave-svg footer-wave-svg-accent" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,65 C150,30 300,100 450,65 C600,30 750,100 900,65 C1050,30 1200,100 1200,65 L1200,100 L0,100 Z"/>
          </svg>
        </div>
      </div>

      <!-- Watermark wordmark raksasa, samar, di belakang konten -->
      <span class="footer-watermark" aria-hidden="true">BANTU.IN</span>

      <div class="container-nav pt-16 sm:pt-20 pb-10 footer-content">

        <!-- Baris atas: brand + kolom link + kontak -->
        <div class="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]">

          <!-- Brand -->
          <div data-reveal style="transition-delay:0ms">
            <a href="#" class="flex items-center gap-2.5">
              <img src="/logo.png" alt="BANTU.IN" class="h-9 w-9" />
              <span class="text-2xl font-extrabold tracking-tight" style="color: var(--ink)">
                BANTU<span style="color: var(--accent-strong)">.</span>IN
              </span>
            </a>
            <p class="mt-5 text-sm leading-relaxed max-w-xs" style="color: var(--ink-muted)">
              Jastip, antar-jemput, bantuan akademik, sampai bersih-bersih. Cukup kirim chat, kami yang urus sisanya.
            </p>

            <div class="flex items-center gap-3 mt-6">
              ${SOCIALS.map(
                (s) => `
                <a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}" class="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg>
                </a>
              `,
              ).join("")}
            </div>
          </div>

          ${footerColumn("Layanan", LAYANAN_LINKS, 80)}
          ${footerColumn("Perusahaan", PERUSAHAAN_LINKS, 160)}

          <!-- Kontak -->
          <div data-reveal style="transition-delay:240ms">
            <p class="footer-heading">Kontak</p>
            <ul class="flex flex-col gap-4 mt-5 text-sm" style="color: var(--ink-muted)">
              <li class="flex items-start gap-3">
                <svg class="h-4.5 w-4.5 mt-0.5 shrink-0" style="color: var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="10" r="2.6"/></svg>
                <span>Dekat Universitas Teknologi Bandung, Bandung</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="h-4.5 w-4.5 mt-0.5 shrink-0" style="color: var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/></svg>
                <a href="mailto:halo@bantu.in" class="hover:underline underline-offset-4">halo@bantu.in</a>
              </li>
              <li class="flex items-start gap-3">
                <svg class="h-4.5 w-4.5 mt-0.5 shrink-0" style="color: var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.19h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Z"/></svg>
                <a href="${WA_LINK}" target="_blank" rel="noopener" class="hover:underline underline-offset-4">+62 812-3456-7890</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Peta lokasi -->
        <div data-reveal style="transition-delay:280ms" class="map-frame mt-14 sm:mt-16">
          <iframe
            class="map-embed"
            src="${MAPS_EMBED_SRC}"
            width="100%"
            height="100%"
            style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Lokasi BANTU.IN"
          ></iframe>
          <div class="map-tint" aria-hidden="true"></div>

          <div class="map-card">
            <p class="text-xs font-semibold uppercase tracking-wide" style="color: var(--accent-strong)">Lokasi Kami</p>
            <p class="text-sm font-semibold mt-1" style="color: var(--ink)">Dekat Universitas Teknologi Bandung</p>
            <a href="${MAPS_QUERY_LINK}" target="_blank" rel="noopener" class="map-card-link">
              Buka di Google Maps
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>
            </a>
          </div>
        </div>

        <!-- Garis pembatas bergradasi, echo dari motif logo -->
        <div class="footer-divider mt-14 sm:mt-16"></div>

        <!-- Baris bawah -->
        <div class="footer-bottom">
          <div class="footer-bottom-brand">
            <img src="/logo.png" alt="" class="h-5 w-5" />
            <span>Hak cipta 2026 BANTU.IN. Semua hak dilindungi.</span>
          </div>
          <div class="footer-bottom-links">
            <a href="#">Kebijakan Privasi</a>
            <span class="footer-bottom-dot"></span>
            <a href="#">Syarat Layanan</a>
          </div>
        </div>
      </div>

      <!-- Tombol kembali ke atas -->
      <button type="button" data-back-to-top aria-label="Kembali ke atas" class="back-to-top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>
      </button>
    </footer>
  `;
}
