const reveals = document.querySelectorAll('.reveal');
const glow = document.querySelector('.cursor-glow');

// Revela os elementos ao entrar no ecrã e deixa de os vigiar depois
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

reveals.forEach((el) => observer.observe(el));

// Cursor glow: só em dispositivos com rato, movido com transform (sem recalcular layout)
if (glow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let x = 0;
    let y = 0;
    let ticking = false;

    window.addEventListener('mousemove', (e) => {
        x = e.clientX;
        y = e.clientY;
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            glow.style.transform = `translate3d(${x - 180}px, ${y - 180}px, 0)`;
            ticking = false;
        });
    }, { passive: true });
}

// YouTube: o iframe só é criado quando o utilizador clica
document.querySelectorAll('.yt-facade').forEach((el) => {
    const load = () => {
        el.classList.remove('yt-facade');
        el.removeAttribute('role');
        el.removeAttribute('tabindex');
        el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1" title="Vídeo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    };
    el.addEventListener('click', load, { once: true });
    el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            load();
        }
    });
});