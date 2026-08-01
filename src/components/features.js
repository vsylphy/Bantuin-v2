const features = [
  {
    icon: "📱",
    title: "Responsive",
    desc: "Tampilan website tetap optimal di desktop, tablet, maupun smartphone.",
  },
  {
    icon: "⚡",
    title: "Cepat",
    desc: "Website ringan dengan performa tinggi sehingga nyaman digunakan.",
  },
  {
    icon: "🌍",
    title: "Online",
    desc: "UMKM dapat dikenal lebih luas melalui kehadiran digital.",
  },
  {
    icon: "🔒",
    title: "Aman",
    desc: "Dibangun dengan teknologi modern dan praktik pengembangan yang baik.",
  },
  {
    icon: "💼",
    title: "Profesional",
    desc: "Meningkatkan citra bisnis melalui website yang rapi dan terpercaya.",
  },
  {
    icon: "🎨",
    title: "Modern",
    desc: "Desain bersih dan mudah dikembangkan mengikuti kebutuhan bisnis.",
  },
];

export function Features() {
  return `
    <section id="fitur" class="section">

      <div class="container-custom">

        <div class="text-center max-w-2xl mx-auto">

          <p class="text-blue-600 font-semibold">
            Fitur
          </p>

          <h2 class="mt-3 text-4xl font-bold">
            Kenapa Memilih BANTU.IN?
          </h2>

          <p class="mt-5 text-paragraph leading-8">
            Kami menghadirkan solusi digital yang sederhana,
            cepat, dan profesional agar UMKM lebih mudah
            berkembang di era digital.
          </p>

        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          ${features
            .map(
              (feature) => `
            <div class="rounded-3xl border border-slate-200 p-8 hover:shadow-lg transition">

              <div class="text-5xl">
                ${feature.icon}
              </div>

              <h3 class="mt-6 text-2xl font-semibold">
                ${feature.title}
              </h3>

              <p class="mt-4 text-paragraph leading-7">
                ${feature.desc}
              </p>

            </div>
          `,
            )
            .join("")}

        </div>

      </div>

    </section>
  `;
}
