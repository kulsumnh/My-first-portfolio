// ===== SCROLL-TRIGGERED ANIMATIONS =====
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px'
};

// Observer untuk gambar
const imgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-img').forEach(img => imgObserver.observe(img));

// Observer untuk animasi text (split-word, typewriter, animate-text, dll)
const textObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe semua elemen dengan animasi
document.querySelectorAll('.split-word, .typewriter, .animate-text, .blur-text, .slide-left, .slide-right, .section-title-reveal-text, .section-title-bounce, .reveal-text, .reveal-text-scroll').forEach(el => {
  textObserver.observe(el);
});

// Observer untuk project cards
document.querySelectorAll('.project-card').forEach(card => {
  textObserver.observe(card);
});

// Observer untuk Learning Journey elements
document.querySelectorAll('.timeline-item, .challenge-box, .achievement-box, .next-box').forEach(el => {
  textObserver.observe(el);
});

// Observer untuk Contact section
document.querySelectorAll('.contact-intro, .contact-links, .thank-you').forEach(el => {
  textObserver.observe(el);
});

// Observer untuk Footer
document.querySelectorAll('footer').forEach(el => {
  textObserver.observe(el);
});

// ===== HAMBURGER MENU =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');

  if (window.innerWidth <= 768) {
    document.body.style.overflow =
      navLinks.classList.contains('active') ? 'hidden' : 'auto';
  }
});

// Tutup menu saat klik link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
});

// Tutup menu klik area luar
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Reset saat resize ke desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
});