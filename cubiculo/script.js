// Fachada YouTube: carrega o iframe apenas quando clicas no vídeo
document.querySelectorAll('.yt-facade').forEach((el) => {
    const load = () => {
        el.classList.remove('yt-facade');
        el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1&rel=0&playsinline=1" title="Vídeo de processo" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    };
    el.addEventListener('click', load, { once: true });
});

// Logo interativo: cada barra é um elemento e reage ao rato como teclas / equalizador
(() => {
    const svg = document.querySelector('.logo-bars');
    if (!svg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const bars = [...svg.querySelectorAll('path')];
    const vb = svg.viewBox.baseVal;

    // posição horizontal de cada barra (0 a 1), da esquerda para a direita
    bars.sort((a, b) => a.getBBox().x - b.getBBox().x);
    const centers = bars.map((b) => {
        const bb = b.getBBox();
        return (bb.x + bb.width / 2) / vb.width;
    });

    // --- ajustes ---
    const RADIUS = 0.16;      // raio de influência do rato (fração da largura)
    const PRESS = 0.16;       // quanto as barras sob o rato descem (0 a 1)
    const KICK = 0.7;         // quanto o movimento rápido do rato agita as barras
    const SPRING = 0.025;     // força de regresso (mais baixo = mais mole)
    const DAMP = 0.88;        // mais alto = mais balanço
    const FOLLOW = 0.07;      // quão devagar o "foco" segue o rato (0 a 1)
    const IDLE_AMP = 0.025;   // movimento em repouso (0.025 = 2,5% da altura)
    const IDLE_SPEED = 0.0005;
    const MIN = 0.5;          // as barras nunca descem abaixo disto

    const n = bars.length;
    const s = new Float32Array(n).fill(1);   // escala atual de cada barra
    const v = new Float32Array(n);           // velocidade
    let mouse = null;                         // posição x do rato (0 a 1) ou null
    let focus = 0.5;                          // posição suavizada do foco
    let amount = 0;                           // 0 a 1: quanto o rato está a atuar
    let last = null;
    let visible = true;
    let raf = null;

    bars.forEach((b) => {
        b.style.transformBox = 'fill-box';
        b.style.transformOrigin = '50% 100%';
        b.style.willChange = 'transform';
    });

    const frame = (t) => {
        // o foco desliza até ao rato e a intensidade entra/sai gradualmente
        if (mouse !== null) focus += (mouse - focus) * FOLLOW;
        amount += ((mouse !== null ? 1 : 0) - amount) * 0.06;

        for (let i = 0; i < n; i++) {
            // alvo: 1 (cheia), menos o "toque" do rato, menos a respiração lenta
            let target = 1;
            if (amount > 0.001) {
                const d = (centers[i] - focus) / RADIUS;
                target -= PRESS * amount * Math.exp(-d * d * 2);
            }
            target -= IDLE_AMP * (0.5 + 0.5 * Math.sin(t * IDLE_SPEED * 2 + i * 0.9)) *
                      (0.6 + 0.4 * Math.sin(t * IDLE_SPEED * 0.7 + i * 0.35));

            v[i] += (target - s[i]) * SPRING;
            v[i] *= DAMP;
            s[i] = Math.min(1, Math.max(MIN, s[i] + v[i]));
            bars[i].style.transform = `scaleY(${s[i].toFixed(4)})`;
        }
        raf = visible ? requestAnimationFrame(frame) : null;
    };
    const start = () => { if (!raf && visible) raf = requestAnimationFrame(frame); };

    const onMove = (e) => {
        const r = svg.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        if (last) {
            const speed = Math.hypot(x - last.x, (y - last.y) * (r.height / r.width));
            for (let i = 0; i < n; i++) {
                const d = (centers[i] - x) / RADIUS;
                const influence = Math.exp(-d * d * 2);
                // movimento rápido "puxa" as barras para baixo e elas voltam com balanço
                v[i] -= Math.min(0.02, influence * speed * KICK);
            }
        }
        if (mouse === null) focus = x;
        last = { x, y };
        mouse = x;
    };
    const onLeave = () => { mouse = null; last = null; };

    svg.addEventListener('pointermove', onMove);
    svg.addEventListener('pointerdown', onMove);
    svg.addEventListener('pointerleave', onLeave);
    svg.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') onLeave(); });

    // só anima quando o logo está visível
    new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
    }).observe(svg);

    start();
})();