/* Tarun Parmar — Portfolio (Modern Edition)
   Original interactions: cursor, nav, marquee dup, reveals, clock, hover states */
(function () {
  'use strict';

  /* ---------- Custom cursor (desktop only) ---------- */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  if (dot && ring && window.matchMedia('(hover: hover)').matches) {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
    function tick() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    }
    tick();

    document.querySelectorAll('a, button, .work-item').forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  /* ---------- Sticky nav scroll state ---------- */
  const nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Marquee duplicate (so it loops smoothly) ---------- */
  document.querySelectorAll('.marquee-track').forEach((track) => {
    track.innerHTML = track.innerHTML + track.innerHTML;
  });

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
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- Smooth scroll for anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Footer live time (IST) ---------- */
  const clock = document.querySelector('.footer-time-text');
  function updateClock() {
    if (!clock) return;
    const now = new Date();
    const opts = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' };
    clock.textContent = now.toLocaleTimeString('en-IN', opts) + ' IST';
  }
  updateClock();
  setInterval(updateClock, 30 * 1000);

  /* ---------- Year in footer ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Work item expand ---------- */
  document.querySelectorAll('.work-item').forEach((item) => {
    item.addEventListener('click', () => {
      const detailId = item.dataset.detail;
      if (!detailId) return;
      const detail = document.getElementById(detailId);
      if (!detail) return;
      const isOpen = detail.style.display === 'grid';
      document.querySelectorAll('.work-detail').forEach((d) => d.style.display = 'none');
      detail.style.display = isOpen ? 'none' : 'grid';
      if (!isOpen) detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

})();
