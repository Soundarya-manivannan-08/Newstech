const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // open/close nav
    menuToggle.classList.toggle('open'); // animate hamburger
});

// Close menu when a link is clicked
document.querySelectorAll('#nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.classList.remove('open');
    });
});

    // ===== script.js =====

// Fade-in sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.about-content, .grid-3, .card');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

