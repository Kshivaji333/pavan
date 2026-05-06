/* ── CUSTOM CURSOR ── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animCursor);
  })();

  /* ── LOADER ── */
  const loaderCount = document.getElementById('loaderCount');
  const loaderFill  = document.getElementById('loaderFill');
  const loader      = document.getElementById('loader');
  let count = 0;
  const loadInterval = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 3;
    if (count >= 100) {
      count = 100;
      clearInterval(loadInterval);
      setTimeout(() => loader.classList.add('hidden'), 400);
    }
    loaderCount.textContent = count.toString().padStart(2, '0');
    loaderFill.style.width  = count + '%';
  }, 35);

  /* ── FILM STRIP ── */
  const filmTrack = document.getElementById('filmTrack');
  for (let i = 0; i < 60; i++) {
    const h = document.createElement('div');
    h.className = 'filmstrip-hole';
    filmTrack.appendChild(h);
  }

  /* ── TICKER ── */
  const tickerTrack = document.getElementById('tickerTrack');
  const tickerItems = [
    'Video Editing', 'Motion Graphics', 'Color Grading',
    'Sound Design', 'YouTube Content', 'Short Form', 'Cinematic',
    'After Effects', 'DaVinci Resolve', 'Premiere Pro'
  ];
  const repeated = [...tickerItems, ...tickerItems];
  repeated.forEach(txt => {
    const item = document.createElement('div');
    item.className = 'ticker-item';
    item.textContent = txt;
    tickerTrack.appendChild(item);
  });

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');
  const observer  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));

  /* ── NAV HIDE ON SCROLL ── */
  const navbar = document.getElementById('navbar');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    navbar.classList.toggle('hidden', y > lastY + 8 && y > 200);
    if (y < lastY || y < 60) navbar.classList.remove('hidden');
    lastY = y;
  });

  /* ── MOBILE MENU ── */
  function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const ham  = document.getElementById('hamburger');
    menu.classList.toggle('open');
    ham.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  }
  function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const ham  = document.getElementById('hamburger');
    menu.classList.remove('open');
    ham.classList.remove('open');
    document.body.style.overflow = '';
  }