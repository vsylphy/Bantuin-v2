export function initFooter() {
  // --- Scroll reveal: elemen [data-reveal] muncul halus saat masuk viewport ---
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (revealItems.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("in-view"));
  }

  // --- Tombol kembali ke atas ---
  const backToTop = document.querySelector("[data-back-to-top]");
  if (!backToTop) return;

  const toggleVisibility = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 480);
  };

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
