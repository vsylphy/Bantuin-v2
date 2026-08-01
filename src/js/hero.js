import { TEAM_PAIRS } from "../components/hero.js";

const TYPEWRITER_WORDS = [
  "jastip barang",
  "antar-jemput",
  "kerjain tugas",
  "beberes kamar",
];

function initTypewriter() {
  const el = document.querySelector("[data-typewriter]");
  if (!el) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED = 65;
  const DELETE_SPEED = 38;
  const PAUSE_AFTER_TYPE = 1400;
  const PAUSE_AFTER_DELETE = 300;

  function tick() {
    const current = TYPEWRITER_WORDS[wordIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % TYPEWRITER_WORDS.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  function animateCounter(el) {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 },
    );
    counters.forEach((el) => observer.observe(el));
  } else {
    counters.forEach(animateCounter);
  }
}

function renderFrameContent(frameEl, member) {
  const img = frameEl.querySelector("[data-frame-img]");
  const placeholder = frameEl.querySelector("[data-frame-placeholder]");
  if (!img || !placeholder) return;

  if (member && member.img) {
    img.src = member.img;
    img.alt = member.name ? `Tim BANTU.IN, ${member.name}` : "Tim BANTU.IN";
    img.classList.remove("hidden");
    placeholder.classList.add("hidden");
  } else {
    img.classList.add("hidden");
    placeholder.classList.remove("hidden");
  }
}

function crossfadeFrame(frameEl, member) {
  frameEl.classList.add("is-fading");
  setTimeout(() => {
    renderFrameContent(frameEl, member);
    frameEl.classList.remove("is-fading");
  }, 320);
}

function initPhotoRotation() {
  const frameA = document.querySelector(".hero-photo-frame-a");
  const frameB = document.querySelector(".hero-photo-frame-b");
  if (!frameA || !frameB || !TEAM_PAIRS.length) return;

  let index = 0;
  renderFrameContent(frameA, TEAM_PAIRS[0][0]);
  renderFrameContent(frameB, TEAM_PAIRS[0][1]);

  if (TEAM_PAIRS.length < 2) return;

  setInterval(() => {
    index = (index + 1) % TEAM_PAIRS.length;
    crossfadeFrame(frameA, TEAM_PAIRS[index][0]);
    crossfadeFrame(frameB, TEAM_PAIRS[index][1]);
  }, 4000);
}

export function initHero() {
  initTypewriter();
  initCounters();
  initPhotoRotation();
}
