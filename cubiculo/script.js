// Fachada YouTube: carrega o iframe apenas quando clicas no vídeo
document.querySelectorAll('.yt-facade').forEach((el) => {
    const load = () => {
        el.classList.remove('yt-facade');
        el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    };
    el.addEventListener('click', load, { once: true });
});