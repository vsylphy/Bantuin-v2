const faqs = [
  {
    question: "Apakah BANTU.IN gratis?",
    answer: "Ya. Anda dapat memulai secara gratis untuk mengenal layanan kami.",
  },
  {
    question: "Bagaimana cara membuat website?",
    answer:
      "Cukup pilih layanan, isi data UMKM, kemudian website akan diproses.",
  },
  {
    question: "Apakah bisa diakses melalui HP?",
    answer: "Ya. Semua website yang dibuat bersifat responsive.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer:
      "Tergantung kebutuhan, namun website sederhana dapat selesai dalam beberapa hari.",
  },
  {
    question: "Apakah website dapat dikembangkan lagi?",
    answer:
      "Tentu. Website dibuat agar mudah ditambah fitur baru di masa depan.",
  },
];

export function FAQ() {
  return `

<section id="faq" class="section">

<div class="container-custom">

<div class="text-center max-w-2xl mx-auto">

<p class="text-blue-600 font-semibold">

FAQ

</p>

<h2 class="mt-3 text-4xl font-bold">

Pertanyaan yang Sering Ditanyakan

</h2>

<p class="mt-5 text-paragraph">

Temukan jawaban dari beberapa pertanyaan yang paling sering diajukan.

</p>

</div>

<div class="mt-16 max-w-4xl mx-auto">

${faqs
  .map(
    (faq, index) => `

<div class="faq-item border rounded-2xl mb-4 overflow-hidden">

<button
class="faq-button w-full flex justify-between items-center p-6 text-left font-semibold"
data-index="${index}">

<span>${faq.question}</span>

<span class="faq-icon">+</span>

</button>

<div
class="faq-content hidden px-6 pb-6 text-paragraph">

${faq.answer}

</div>

</div>

`,
  )
  .join("")}

</div>

</div>

</section>

`;
}
