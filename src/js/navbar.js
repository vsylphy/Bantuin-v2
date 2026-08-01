const STORAGE_KEY = "bantuin-theme";

function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
  syncToggleIcons(theme);
}

function syncToggleIcons(theme) {
  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn
      .querySelector("[data-icon-sun]")
      ?.classList.toggle("hidden", theme === "dark");
    btn
      .querySelector("[data-icon-moon]")
      ?.classList.toggle("hidden", theme !== "dark");
  });
}

export function initNavbar() {
  // Sinkronkan ikon toggle dengan tema yang sudah di-set anti-flicker script di index.html
  syncToggleIcons(getTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });
  });

  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const header = mobileToggle?.closest("header");
  const iconMenu = mobileToggle?.querySelector("[data-icon-menu]");
  const iconClose = mobileToggle?.querySelector("[data-icon-close]");

  if (!mobileToggle || !mobileMenu) return;

  function isOpen() {
    return mobileMenu.classList.contains("is-open");
  }

  function openMenu() {
    mobileMenu.classList.add("is-open");
    mobileToggle.setAttribute("aria-expanded", "true");
    iconMenu?.classList.add("hidden");
    iconClose?.classList.remove("hidden");
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    iconMenu?.classList.remove("hidden");
    iconClose?.classList.add("hidden");
  }

  mobileToggle.addEventListener("click", () =>
    isOpen() ? closeMenu() : openMenu(),
  );

  // Tutup kalau klik di luar navbar
  document.addEventListener("click", (e) => {
    if (isOpen() && header && !header.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeMenu();
  });

  document.querySelectorAll("[data-mobile-link]").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Tutup otomatis kalau layar dibesarkan ke ukuran desktop
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });
}
