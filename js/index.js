document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const navLinks = document.querySelectorAll('.slider-nav a');
    let current = 0;
    const slideCount = images.length;
    let interval;

    function goToSlide(idx) {
        const target = images[idx];
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            current = idx;
            // Optional: update nav active state
            navLinks.forEach((a, i) => {
                a.style.opacity = (i === idx) ? '1' : '0.75';
            });
        }
    }

    function nextSlide() {
        current = (current + 1) % slideCount;
        goToSlide(current);
    }

    // Autoplay every 5 seconds
    interval = setInterval(nextSlide, 10000);

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 10000);
    });

    // Allow manual nav
    navLinks.forEach((a, i) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(i);
            clearInterval(interval);
            interval = setInterval(nextSlide, 10000);
        });
    });

    // Initialize
    goToSlide(0);
});