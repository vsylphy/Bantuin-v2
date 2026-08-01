const steps = [
  {
    number: "01",
    title: "Daftar",
    desc: "Buat akun dan lengkapi informasi dasar mengenai UMKM yang ingin dipromosikan.",
  },
  {
    number: "02",
    title: "Pilih Layanan",
    desc: "Pilih layanan atau solusi digital yang sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    number: "03",
    title: "Website Siap",
    desc: "Tim kami membantu menghadirkan website profesional yang siap digunakan.",
  },
];

export function HowItWorks() {
  return `
    
    <section class="section bg-slate-50" id="cara-kerja">

        <div class="container-custom">

            <div class="text-center max-w-2xl mx-auto">

                <p class="text-blue-600 font-semibold">
                    Cara Kerja
                </p>

                <h2 class="mt-3 text-4xl font-bold">
                    Hanya 3 Langkah Mudah
                </h2>

                <p class="mt-5 text-paragraph leading-8">
                    Memulai digitalisasi UMKM kini menjadi lebih mudah, cepat, dan tanpa proses yang rumit.
                </p>

            </div>

            <div class="grid lg:grid-cols-3 gap-8 mt-20">

                ${steps
                  .map(
                    (step) => `
                
                <div class="relative bg-white rounded-3xl border border-slate-200 p-8 text-center hover:shadow-lg transition">

                    <div class="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">

                        ${step.number}

                    </div>

                    <h3 class="mt-6 text-2xl font-semibold">

                        ${step.title}

                    </h3>

                    <p class="mt-4 text-paragraph leading-7">

                        ${step.desc}

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
