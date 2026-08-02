const WA_NUMBER = "6285178465471"; // TODO: ganti dengan nomor WA bisnis asli
const WA_MESSAGE = encodeURIComponent(
  "Halo BANTU.IN! Aku butuh bantuan, boleh dibantu?",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#about", label: "Tentang" },
  { href: "#features", label: "Fitur" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Kontak" },
];

function themeToggleIcon() {
  return `
    <button type="button" data-theme-toggle class="theme-toggle" aria-label="Ganti tema terang/gelap">
      <svg data-icon-sun class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        <circle cx="12" cy="12" r="4.2"/>
        <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/>
      </svg>
      <svg data-icon-moon class="hidden h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.4 14.7A8.6 8.6 0 1 1 9.3 3.6a7 7 0 0 0 11.1 11.1Z"/>
      </svg>
    </button>
  `;
}

export function Navbar() {
  return `
    <header class="sticky top-0 z-50 border-b" style="background: color-mix(in oklab, var(--surface) 90%, transparent); border-color: var(--border-soft); backdrop-filter: blur(10px);">

      <nav class="container-nav h-20 flex items-center justify-between gap-4">

        <!-- Logo -->
        <a href="#" class="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png" alt="BANTU.IN" class="h-9 w-9" />
          <span class="text-2xl font-extrabold tracking-tight" style="color: var(--ink)">
            BANTU<span style="color: var(--accent-strong)">.</span>IN
          </span>
        </a>

        <!-- Menu Desktop -->
        <ul class="hidden md:flex items-center gap-9">
          ${NAV_LINKS.map(
            (link) => `
            <li>
              <a href="${link.href}" class="nav-link">${link.label}</a>
            </li>
          `,
          ).join("")}
        </ul>

        <!-- Aksi kanan -->
        <div class="hidden md:flex items-center gap-3 shrink-0">
          ${themeToggleIcon()}
          <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn-primary">
            Chat Sekarang
          </a>
        </div>

        <!-- Mobile -->
        <div class="flex md:hidden items-center gap-2 shrink-0">
          ${themeToggleIcon()}
          <button type="button" data-mobile-toggle aria-label="Buka menu" aria-expanded="false" class="theme-toggle">
            <svg data-icon-menu class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
            <svg data-icon-close class="hidden h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <path d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile menu: accordion dropdown, nempel natural di bawah navbar -->
      <div data-mobile-menu class="mobile-panel md:hidden">
        <div class="mobile-panel-inner container-nav">
          <ul class="flex flex-col gap-1 pt-4">
            ${NAV_LINKS.map(
              (link) => `
              <li>
                <a href="${link.href}" data-mobile-link class="nav-link-mobile">${link.label}</a>
              </li>
            `,
            ).join("")}
          </ul>
          <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn-primary w-full mt-3 mb-4">
            Chat Sekarang
          </a>
        </div>
      </div>
    </header>
  `;
}
