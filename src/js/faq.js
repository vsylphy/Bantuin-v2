export function initFAQ() {
  const buttons = document.querySelectorAll(".faq-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      const icon = button.querySelector(".faq-icon");

      content.classList.toggle("hidden");

      icon.textContent = content.classList.contains("hidden") ? "+" : "−";
    });
  });
}
