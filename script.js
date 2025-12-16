const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

/* Toggle hamburger */
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');

    // Lock scroll saat menu mobile aktif
    if (window.innerWidth <= 768) {
        document.body.style.overflow =
            navLinks.classList.contains('active') ? 'hidden' : 'auto';
    }
});

/* Tutup menu saat klik link */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

/* Tutup menu klik area luar */
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document
            .querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

/* Reset saat resize ke desktop */
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});
