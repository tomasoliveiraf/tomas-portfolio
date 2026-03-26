const reveals = document.querySelectorAll('.reveal');
const glow = document.querySelector('.cursor-glow');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.14,
    }
);

reveals.forEach((el) => observer.observe(el));

window.addEventListener('mousemove', (e) => {
    if (!glow) return;
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});