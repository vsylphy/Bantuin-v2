import rizkiImg from "../assets/images/team/rizki.png";
import davaImg from "../assets/images/team/dava.png";
import andikaImg from "../assets/images/team/andika.png";
import raihanImg from "../assets/images/team/raihan.png";
import ojanImg from "../assets/images/team/ojan.png";

const WA_NUMBER = "6281234567890"; // TODO: samakan dengan nomor di navbar.js & footer.js
const WA_MESSAGE = encodeURIComponent(
  "Halo BANTU.IN! Aku butuh bantuan, boleh dibantu?",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

// Kata yang dianimasikan ketik-hapus di headline
const TYPEWRITER_WORDS = [
  "jastip barang",
  "antar-jemput",
  "kerjain tugas",
  "beberes kamar",
];

// 5 anggota tim. Yang belum ada foto tampil sebagai placeholder di frame.
// Cara nambah foto: taruh file di src/assets/images/team/nama.png, import di
// baris atas (contoh: import namaImg from "../assets/images/team/nama.png";),
// lalu isi field `img` di bawah. Pasangan di TEAM_PAIRS otomatis ikut lengkap.
const TEAM = [
  { name: "Rizki", img: rizkiImg },
  { name: "Dava", img: davaImg },
  { name: "Andika", img: andikaImg },
  { name: "Raihan", img: raihanImg },
  { name: "Ojan", img: ojanImg },
];

// Dikelompokkan 2-2 untuk suatu saat nanti ditampilkan bergantian. Untuk
// sekarang rotasinya SENGAJA dimatikan di src/js/hero.js (lihat komentar di
// sana) karena baru 1 dari 5 foto yang asli — nanti otomatis nyala lagi
// begitu minimal 4 foto sudah lengkap, tanpa perlu ubah apa-apa di sini.
export const TEAM_PAIRS = [
  [TEAM[0], TEAM[1]],
  [TEAM[2], TEAM[3]],
  [TEAM[4], TEAM[0]],
];

const STATS = [
  { target: 8, suffix: "", label: "Profesional Tim" },
  { target: 4, suffix: "", label: "Jenis Layanan" },
  { target: 15, suffix: " mnt", label: "Rata-rata Respon" },
];

function trustAvatarMarkup(member) {
  if (member.img) {
    return `
      <div class="hero-avatar-sm hero-avatar-photo">
        <img src="${member.img}" alt="${member.name ?? "Tim BANTU.IN"}" />
      </div>
    `;
  }
  return `
    <div class="hero-avatar-sm hero-avatar-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8.2" r="3.4"/>
        <path d="M5 20c1-3.6 4-5.6 7-5.6s6 2 7 5.6"/>
      </svg>
    </div>
  `;
}

function photoFrame(frameClass) {
  return `
    <div class="hero-photo-frame ${frameClass}" data-frame>
      <img data-frame-img class="hero-photo-frame-img hidden" src="" alt="" />
      <div data-frame-placeholder class="hero-photo-frame-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="8" r="3.6"/>
          <path d="M4.5 20c1.2-4 4.5-6.2 7.5-6.2s6.3 2.2 7.5 6.2"/>
        </svg>
        <span>Segera Bergabung</span>
      </div>
    </div>
  `;
}

export function Hero() {
  return `
    <section class="hero-section relative overflow-hidden">
 
      <!-- Corak background -->
      <div class="hero-decor" aria-hidden="true">
        <div class="hero-blob hero-blob-1"></div>
        <div class="hero-blob hero-blob-2"></div>
        <div class="hero-dot-grid"></div>
      </div>
 
      <div class="container-nav relative z-10 hero-container">
 
        <div class="hero-columns">
 
          <!-- Kiri: teks -->
          <div class="hero-text" data-reveal>
 
            <div class="hero-badge">
              <div class="hero-badge-avatars">
                ${TEAM.slice(0, 4)
                  .map((m) => trustAvatarMarkup(m))
                  .join("")}
              </div>
              <span>8 profesional siap bantu kapan pun</span>
            </div>
 
            <h1 class="hero-heading mt-7">
              Butuh bantuan
              <span class="hero-typewriter-line">
                <span data-typewriter class="hero-typewriter"></span><span class="hero-cursor" aria-hidden="true"></span>
              </span>
              ?
            </h1>
 
            <p class="hero-sub mt-7">
              Jastip barang, antar-jemput dokumen, bantuan tugas kuliah, sampai bersih-bersih kamar.
              Cukup kirim chat, tim kami langsung bergerak.
            </p>
 
            <div class="hero-cta mt-10">
              <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn-primary">
                <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.36-1.4a9.9 9.9 0 0 0 4.68 1.19h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.24c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.12.09-1.8-.11-.42-.13-.95-.3-1.63-.6-2.87-1.24-4.75-4.13-4.9-4.32-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.65.5.24.55.82 1.94.9 2.08.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.65.78 1.94.92.28.14.47.21.53.33.07.12.07.67-.17 1.35Z"/></svg>
                Chat Sekarang
              </a>
              <a href="#features" class="btn-outline">
                Lihat Layanan
              </a>
            </div>
          </div>
 
          <!-- Kanan: visual utama (2 foto berdampingan) + kartu melayang -->
          <div class="hero-visual" data-reveal style="transition-delay:150ms">
            <div class="hero-visual-blob" aria-hidden="true"></div>
 
            <div class="hero-photo-row">
              ${photoFrame("hero-photo-frame-a")}
              ${photoFrame("hero-photo-frame-b")}
            </div>
 
            <div class="hero-float-tag">4 Layanan</div>
 
            <div class="hero-float-card hero-float-card-chat">
              <div class="hero-float-chat-row">
                <span class="hero-float-chat-avatar"></span>
                <div class="hero-float-chat-bubble">Titip belanja dong kak 🙏</div>
              </div>
              <div class="hero-float-chat-row hero-float-chat-row-reply">
                <div class="hero-float-chat-bubble hero-float-chat-bubble-reply">Siap kak, meluncur! 🛵</div>
              </div>
            </div>
 
            <div class="hero-float-card hero-float-card-stat">
              <div class="hero-float-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.5l2 2 4-4.5"/><circle cx="12" cy="12" r="9"/></svg>
              </div>
              <div>
                <p class="hero-float-stat-title">8 Profesional</p>
                <p class="hero-float-stat-sub">Siap bantu 24/7</p>
              </div>
            </div>
          </div>
        </div>
 
        <!-- Statistik -->
        <div class="hero-stats" data-reveal style="transition-delay:250ms">
          ${STATS.map(
            (s) => `
            <div class="hero-stat">
              <h3><span data-counter data-target="${s.target}" data-suffix="${s.suffix}">0</span></h3>
              <p>${s.label}</p>
            </div>
          `,
          ).join(`<div class="hero-stat-divider"></div>`)}
        </div>
      </div>
    </section>
  `;
}
