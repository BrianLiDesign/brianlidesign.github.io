let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (!header) return;
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease';
    }
    lastScrollY = window.scrollY;
});