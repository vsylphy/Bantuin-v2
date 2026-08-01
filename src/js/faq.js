export function initFAQ() {
  const buttons = document.querySelectorAll("[data-faq-button]");
  if (!buttons.length) return;

  function closeItem(button) {
    const panel = button.nextElementSibling;
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("is-open");
    panel?.classList.remove("is-open");
  }

  function openItem(button) {
    const panel = button.nextElementSibling;
    button.setAttribute("aria-expanded", "true");
    button.classList.add("is-open");
    panel?.classList.add("is-open");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.classList.contains("is-open");

      // Accordion single-open: tutup yang lain dulu
      buttons.forEach((other) => {
        if (other !== button) closeItem(other);
      });

      isOpen ? closeItem(button) : openItem(button);
    });
  });
}
