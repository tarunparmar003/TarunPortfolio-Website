/* Tarun.OS — interactions */
(function () {
  'use strict';

  /* ---------- Live time (lock screen + Dynamic Island) ---------- */
  const lockTime = document.querySelector('.lock-time');
  const lockDate = document.querySelector('.lock-date');
  const islandClock = document.querySelector('.di-clock');
  const statusTime = document.querySelector('.status-time');

  function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const hh = String(h).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    const time12 = (h % 12 || 12) + ':' + mm;
    const time24 = `${hh}:${mm}`;

    if (lockTime) lockTime.textContent = time24;
    if (islandClock) islandClock.textContent = time12;
    if (statusTime) statusTime.textContent = time12;

    if (lockDate) {
      const opts = { weekday: 'long', month: 'long', day: 'numeric' };
      lockDate.textContent = now.toLocaleDateString('en-US', opts);
    }
  }
  updateClock();
  setInterval(updateClock, 1000 * 30);

  /* ---------- Theme toggle (light / dark) ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('tos-theme', theme);
    if (sunIcon && moonIcon) {
      sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
      moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
    }
  }

  const saved = localStorage.getItem('tos-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
      toast(cur === 'dark' ? 'Light Mode' : 'Dark Mode');
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- Smooth scroll for app icons ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Contact form (client-side demo) ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      const name = form.querySelector('input[name="name"]').value || 'there';
      if (success) {
        success.textContent = `✓ Got it, ${name}! I'll reply within a day.`;
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
      setTimeout(() => success && success.classList.remove('show'), 6000);
      toast('Message sent');
    });
  }

  /* ---------- Dynamic Island click → quick info ---------- */
  const island = document.getElementById('island');
  if (island) {
    let expanded = false;
    island.addEventListener('click', () => {
      expanded = !expanded;
      const text = island.querySelector('.di-text');
      if (!text) return;
      if (expanded) {
        text.textContent = 'Open to work — Network / Implementation Engineer';
        island.style.padding = '8px 22px 8px 14px';
      } else {
        text.textContent = 'Available';
        island.style.padding = '8px 18px 8px 12px';
      }
    });
  }

  /* ---------- Lock screen swipe-up ---------- */
  const lockCta = document.querySelector('.lock-cta');
  if (lockCta) {
    lockCta.addEventListener('click', () => {
      const homeScreen = document.getElementById('home-screen');
      if (homeScreen) homeScreen.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---------- Toast ---------- */
  let toastTimeout;
  function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    clearTimeout(toastTimeout);
    requestAnimationFrame(() => el.classList.add('show'));
    toastTimeout = setTimeout(() => el.classList.remove('show'), 2200);
  }

  /* ---------- Footer year ---------- */
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Easter egg: tap avatar 3x to surprise ---------- */
  const avatar = document.querySelector('.avatar-circle');
  if (avatar) {
    let taps = 0, tapTimer;
    avatar.addEventListener('click', () => {
      taps++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => taps = 0, 800);
      if (taps >= 3) {
        avatar.style.transform = 'rotate(360deg) scale(1.05)';
        avatar.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        toast('👋 Hi from Tarun!');
        setTimeout(() => {
          avatar.style.transform = '';
          avatar.style.transition = '';
        }, 800);
        taps = 0;
      }
    });
  }
})();
