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

  /* ── VIDEO GALLERY GENERATION ── */
  const videos = [
    { title: 'Creative Daily Stitch', type: 'REEL', file: 'From KlickPin CF Creative daily stitch inspiration for people who love beauty for modern homes for everyday tailoring - Pin-920001030130773167.mp4' },
    { title: 'Country Progress', type: 'CLIP', file: 'From KlickPin CF Curious country progress reflections with charm and ideas for creative people for modern conversatio - Pin-692358142757858909.mp4' },
    { title: 'Driftwood Decor', type: 'PROMO', file: 'From KlickPin CF Driftwood nautical decor tips on a budget that bring color comfort and meaning for coastal mood bo - Pin-905223593865059846.mp4' },
    { title: 'Vision Board Ideas', type: 'INSPIRATION', file: 'From KlickPin CF Save these 11 Unique vision board ideas that are worth saving if you love elegant details and creative inspiration for anyone who loves beautiful - Pin-1103030133784843312.mp4' },
    { title: 'Tharun Speaks', type: 'INTERVIEW', file: 'tharun-speaks-elM9UbG1.mp4' }
  ];

  function generateVideoThumbnail(videoFile, callback) {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = 0.5;
    }, { once: true });

    video.addEventListener('seeked', () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL('image/jpeg'));
    }, { once: true });

    video.src = 'work/' + videoFile;
    video.muted = true;
    video.play();
  }

  function renderVideoGrid() {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = '';
    
    videos.forEach((video, index) => {
      const article = document.createElement('article');
      article.className = 'video-card short reveal';
      article.style.setProperty('--delay', `${0.1 + index * 0.08}s`);
      
      const thumbnailDiv = document.createElement('div');
      thumbnailDiv.className = 'video-thumb';
      
      // Generate thumbnail from video
      generateVideoThumbnail(video.file, (dataUrl) => {
        thumbnailDiv.style.backgroundImage = `url('${dataUrl}')`;
        thumbnailDiv.style.backgroundSize = 'cover';
        thumbnailDiv.style.backgroundPosition = 'center';
      });
      
      const badge = document.createElement('div');
      badge.className = 'video-badge';
      badge.textContent = video.type;
      
      const playBtn = document.createElement('div');
      playBtn.className = 'play-btn';
      playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>';
      playBtn.onclick = () => playVideo('work/' + video.file);
      
      const overlay = document.createElement('div');
      overlay.className = 'video-card-overlay';
      overlay.innerHTML = `
        <div class="video-card-kicker">${video.type} / Short Form</div>
        <div class="video-card-title">${video.title}</div>
      `;
      
      article.appendChild(thumbnailDiv);
      article.appendChild(badge);
      article.appendChild(playBtn);
      article.appendChild(overlay);
      grid.appendChild(article);
    });
    
    // Re-run reveal animation for new elements
    const newRevealEls = grid.querySelectorAll('.reveal:not(.visible)');
    newRevealEls.forEach(el => observer.observe(el));
  }

  function playVideo(videoFile) {
    const modal = document.getElementById('videoModal');
    const videoElement = document.getElementById('modalVideo');
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    videoElement.src = videoFile;
    modal.classList.add('open');
    // Hide custom cursor during video playback
    if (cursor) cursor.style.display = 'none';
    if (cursorRing) cursorRing.style.display = 'none';
    document.body.style.cursor = 'auto';
    videoElement.play();
  }

  function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoElement = document.getElementById('modalVideo');
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    modal.classList.remove('open');
    videoElement.pause();
    videoElement.src = '';
    // Show custom cursor after video
    if (cursor) cursor.style.display = 'block';
    if (cursorRing) cursorRing.style.display = 'block';
    document.body.style.cursor = 'none';
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
  });

  // Render videos on page load
  renderVideoGrid();