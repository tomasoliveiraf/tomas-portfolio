// ==========================================
// PROJECT DATA - Define tudo aqui!
// ==========================================

const projectData = {
    design: [{
            id: 'winitroia',
            title: 'WINITRÓIA',
            year: '2025',
            tags: ['Visual Identity', 'Branding'],
            description: 'Descrição detalhada do projeto. Aqui podes explicar o contexto, objetivos, processo criativo e resultados alcançados.',
            role: 'Graphic Designer',
            areas: 'Graphic Design, Branding',
            images: ['assets/design/winitroia/winitroia1.jpg', 'assets/design/winitroia/winitroia2.jpg', 'assets/design/winitroia/winitroia3.jpg', 'assets/design/winitroia/winitroia4.jpg'],
            video: ''
        },
        {
            id: 'sasuc',
            title: 'SASUC',
            year: '2024-CURRENT',
            tags: ['Branding', 'Visual Identity'],
            description: 'Descrição do segundo projeto.',
            role: 'Communication Designer',
            areas: 'Communication Design',
            images: [],
            video: ''
        },
        {
            id: 'atrevome',
            title: 'A(TREVO)-ME',
            year: '2023',
            tags: ['Branding', 'Visual Identity'],
            description: 'Descrição do segundo projeto.',
            role: 'Graphic Designer',
            areas: 'Graphic Design',
            images: ['assets/design/atrevome/atrevome1.png', ],
            video: 'https://youtu.be/VuI3AnUKyg4'
        }
    ],
    audio: [{
            id: 'serendipity',
            title: 'Serendipity',
            year: '2021',
            tags: ['Music Production', 'Pop'],
            description: 'Descrição do projeto musical Serendipity.',
            role: 'Producer, Mixing Engineer',
            areas: 'Music Production, Mixing, Mastering',
            images: ['assets/audio/serendipity/serendipity1.jpg', ],
            video: 'https://youtu.be/HPxAG745vqE?list=RDHPxAG745vqE'
        },
        {
            id: 'lamire',
            title: 'Lamiré',
            year: '2023',
            tags: ['Music Production', 'Collaboration'],
            description: 'Descrição do projeto Lamiré.',
            role: 'Producer, Mixing Engineer',
            areas: 'Music Production, Sound Design',
            images: ['assets/audio/lamire/lamire1.png', ],
            video: 'https://youtu.be/5MT288F68ak'
        },
        {
            id: 'escutar',
            title: 'Listening To The Invisible',
            year: '2025',
            tags: ['Music Production', 'Computacional Design'],
            description: 'Descrição do projeto Lamiré.',
            role: 'Designer, Producer, Sound Engineer',
            areas: 'Music Production, Sound Design',
            images: ['assets/audio/escutar/escutar2.jpg', ],
            video: 'https://youtu.be/B-UFFtwzrSo'
        }
    ],
    audiovisual: [{
            id: 'cuidar',
            title: 'Cuidar - Um Olhar Atento',
            year: '2019',
            tags: ['Photo editing'],
            description: 'Descrição do projeto audiovisual.',
            role: 'Photographer, Editor',
            areas: 'Photography',
            images: ['assets/other/cuidar/cuidar1.jpg', 'assets/other/cuidar/cuidar2.jpg', 'assets/other/cuidar/cuidar3.jpg', 'assets/other/cuidar/cuidar4.jpg', 'assets/other/cuidar/cuidar5.jpg', 'assets/other/cuidar/cuidar6.jpg', 'assets/other/cuidar/cuidar7.jpg', 'assets/other/cuidar/cuidar8.jpg', 'assets/other/cuidar/cuidar9.jpg', 'assets/other/cuidar/cuidar10.jpg', 'assets/other/cuidar/cuidar11.jpg', ],
            video: ''
        },
        {
            id: 'alto-martir',
            title: 'Martyr: One Step Away From The Dead',
            year: '2021',
            tags: ['Film', 'Sound Design'],
            description: 'Descrição do projeto.',
            role: 'Designer, Post-Production Supervisor',
            areas: 'Graphic design, Video Post-Production, Audio Post-Production',
            images: ['assets/other/alto/alto1.jpg', 'assets/other/alto/alto3.jpg', 'assets/other/alto/alto4.jpg', 'assets/other/alto/alto5.jpg', ],
            video: 'https://youtu.be/85L27l6hYl8'
        },
        {
            id: 'berco',
            title: 'Rainbow Baby',
            year: '2025',
            tags: ['Short Film', 'Post-Production'],
            description: 'Descrição do projeto.',
            role: 'Designer, Editor, Mixing Engineer',
            areas: 'Graphic Design, Video Post-Production, Audio Post-Production',
            images: ['assets/other/berco/berco1.png'],
            video: 'https://youtu.be/6ludLvMZLXc'
        },
        {
            id: 'ouvir-hoje',
            title: 'O Que É Que a Gente Vai Ouvir Hoje?',
            year: '2024',
            tags: ['Documentary', 'Sound'],
            description: 'Designer, Editor, Mixing Engineer',
            role: 'Sound Engineer',
            areas: 'Captação de Som, Mixing',
            images: ['assets/other/gente/gente1.jpg', ],
            video: ''
        }
    ],
    // NOVO BLOCO ACADEMIC
    academic: [{
        id: 'academic-main',
        title: 'Academic Projects',
        year: 'VARIOUS',
        tags: ['Research', 'Conceptual', 'Experimental'],
        description: 'Aqui estão reunidos todos os projetos desenvolvidos no âmbito da formação académica, englobando diversas áreas de estudo e experimentação visual e sonora.',
        role: 'Student / Researcher',
        areas: 'Multidisciplinary',
        // ATENÇÃO: Confirma que estes caminhos estão corretos na tua estrutura de pastas
        images: [
            'assets/design/academic/academic1.jpg',
            'assets/design/academic/academic2.jpg',
            'assets/design/academic/academic3.jpg',
            'assets/design/academic/academic4.jpg',
            'assets/design/academic/academic5.jpg',
            'assets/design/academic/academic6.jpg',
            'assets/design/academic/academic7.jpg',
            'assets/design/academic/academic8.jpg',
            'assets/design/academic/academic9.jpg',
            'assets/design/academic/academic10.jpg',
            'assets/design/academic/academic11.jpg',
            'assets/design/academic/academic12.jpg',
        ],
        video: ''
    }]
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const sidenav = document.querySelector('.sidenav');
const modal = document.getElementById('projectModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');

// Elementos do Lightbox
const lightbox = document.getElementById('imageLightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

// ==========================================
// CAROUSEL STATE
// ==========================================

let currentImageIndex = 0;
let currentImages = [];
let currentLightboxImages = [];

// ==========================================
// FUNÇÃO PARA CONVERTER URL DO YOUTUBE PARA EMBED
// ==========================================

function convertYouTubeUrl(url) {
    if (!url || url.trim() === '') return '';

    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
        /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/
    ];

    for (let pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}`;
        }
    }

    if (url.includes('youtube.com/embed/')) {
        return url;
    }

    return url;
}

// ==========================================
// RENDER PROJECTS DYNAMICALLY
// ==========================================

function renderProjects() {
    Object.keys(projectData).forEach(category => {
        // Ignora a categoria 'academic' aqui, pois é tratada por um botão separado
        if (category === 'academic') return;

        const section = document.getElementById(category);
        if (!section) return;

        const workGrid = section.querySelector('.work-grid');
        if (!workGrid) return;

        workGrid.innerHTML = '';

        projectData[category].forEach(project => {
            const projectItem = createProjectElement(category, project);
            workGrid.appendChild(projectItem);
        });
    });

    initProjectModal();
}

function createProjectElement(category, project) {
    const div = document.createElement('div');
    div.className = 'project-item';
    div.setAttribute('data-category', category);
    div.setAttribute('data-project-id', project.id);

    const imageContent = project.images && project.images.length > 0 ?
        `<img src="${project.images[0]}" alt="${project.title}">` :
        `<div class="placeholder">${project.title}</div>`;

    div.innerHTML = `
        <div class="project-image ${project.images && project.images.length > 0 ? 'has-image' : ''}">
            ${imageContent}
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p class="project-meta">${project.year}</p>
        </div>
    `;

    return div;
}

// ==========================================
// FIND PROJECT BY CATEGORY AND ID
// ==========================================

function findProject(category, projectId) {
    const categoryProjects = projectData[category];
    if (!categoryProjects) return null;

    return categoryProjects.find(p => p.id === projectId);
}

// ==========================================
// IMAGE CAROUSEL
// ==========================================

function initCarousel(images) {
    currentImages = images; // Armazena as imagens do carrossel atual
    currentImageIndex = 0;
    updateCarouselDisplay();
}

function updateCarouselDisplay() {
    const imagesContainer = document.querySelector('.modal-images');

    if (!currentImages || currentImages.length === 0) {
        imagesContainer.innerHTML = '<div class="placeholder">Project Images</div>';
        return;
    }

    // Guarda o vídeo se existir
    const existingVideo = imagesContainer.querySelector('.modal-video');
    const videoHTML = existingVideo ? existingVideo.outerHTML : '';

    const showControls = currentImages.length > 1;

    const carouselHTML = `
        <div class="carousel-container">
            ${showControls ? '<button class="carousel-btn carousel-prev" aria-label="Previous image">‹</button>' : ''}
            <div class="carousel-image-wrapper">
                <img src="${currentImages[currentImageIndex]}" alt="Project image ${currentImageIndex + 1}" class="carousel-image">
            </div>
            ${showControls ? '<button class="carousel-btn carousel-next" aria-label="Next image">›</button>' : ''}
        </div>
        ${showControls ? `
        <div class="carousel-indicators">
            ${currentImages.map((_, index) => 
                `<button class="carousel-indicator ${index === currentImageIndex ? 'active' : ''}" 
                        data-index="${index}" 
                        aria-label="Go to image ${index + 1}"></button>`
            ).join('')}
        </div>
        ` : ''}
    `;

    // Reconstrói mantendo o vídeo no final
    imagesContainer.innerHTML = carouselHTML + videoHTML;

    // Tornar a imagem do carrossel clicável
    const carouselImageEl = imagesContainer.querySelector('.carousel-image');
    if (carouselImageEl) {
        carouselImageEl.addEventListener('click', () => {
            // ALTERADO: Passa o array completo de imagens e o índice atual
            openLightbox(carouselImageEl.src, currentImages, currentImageIndex);
        });
        // Adiciona um cursor para indicar que é clicável
        carouselImageEl.style.cursor = 'zoom-in';
    }

    if (showControls) {
        const prevBtn = imagesContainer.querySelector('.carousel-prev');
        const nextBtn = imagesContainer.querySelector('.carousel-next');
        const indicators = imagesContainer.querySelectorAll('.carousel-indicator');

        if (prevBtn) prevBtn.addEventListener('click', () => navigateCarousel('prev'));
        if (nextBtn) nextBtn.addEventListener('click', () => navigateCarousel('next'));
        
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                currentImageIndex = parseInt(e.target.dataset.index);
                updateCarouselDisplay();
            });
        });
    }
}

function navigateCarousel(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    }
    updateCarouselDisplay();
}

// ==========================================
// VIDEO EMBED
// ==========================================

function renderVideoEmbed(videoUrl) {
    const imagesContainer = document.querySelector('.modal-images');
    
    if (!videoUrl || videoUrl.trim() === '') {
        return;
    }

    const embedUrl = convertYouTubeUrl(videoUrl);
    
    if (!embedUrl) {
        console.error('URL de vídeo inválida:', videoUrl);
        return;
    }

    const videoHTML = `
        <div class="modal-video">
            <div class="video-container">
                <iframe 
                    src="${embedUrl}" 
                    title="Project video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;

    imagesContainer.insertAdjacentHTML('beforeend', videoHTML);
}

// ==========================================
// IMAGE LIGHTBOX (Ecrã Inteiro)
// ==========================================

function openLightbox(imageUrl, imagesArray, clickedIndex) {
    if (!lightbox || !lightboxImage) return;

    currentLightboxImages = imagesArray || []; // Guarda o array de imagens
    currentImageIndex = clickedIndex || 0;     // Guarda o índice da imagem clicada

    lightboxImage.src = imageUrl;
    lightbox.classList.add('active');

    // ADICIONADO: Controla a visibilidade dos botões de navegação
    if (currentLightboxImages.length > 1) {
        lightbox.classList.add('has-multiple-images');
    } else {
        lightbox.classList.remove('has-multiple-images');
    }
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.classList.remove('has-multiple-images'); // Limpa a classe
    currentLightboxImages = []; // Limpa o array
    currentImageIndex = 0;      // Reinicia o índice
}

// ADICIONADO: Navegação para o lightbox
function navigateLightbox(direction) {
    if (currentLightboxImages.length === 0) return;

    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % currentLightboxImages.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    }
    lightboxImage.src = currentLightboxImages[currentImageIndex];
}

function initLightbox() {
    if (!lightbox || !lightboxClose || !lightboxOverlay || !lightboxPrev || !lightboxNext) return; 

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede o overlay de fechar
        navigateLightbox('prev');
    }); 
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede o overlay de fechar
        navigateLightbox('next');
    });
}

// ==========================================
// NAVIGATION SYSTEM
// ==========================================

function initNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').replace('#', '');

            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            this.classList.add('active');

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ==========================================
// MOBILE MENU
// ==========================================

function initMobileMenu() {
    if (!mobileMenuToggle) return;

    mobileMenuToggle.addEventListener('click', function() {
        toggleMobileMenu();
    });

    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidenav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
}

function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    sidenav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    sidenav.classList.remove('active');
    document.body.classList.remove('menu-open');
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// ==========================================
// PROJECT MODAL
// ==========================================

function openAcademicModal() {
    // Abre o modal usando os dados que definimos em 'academic'
    openModal('academic', 'academic-main'); 
}

function initProjectModal() {
    const projectItems = document.querySelectorAll('.project-item');
    const academicButton = document.getElementById('academicWorkButton'); // NOVO: Seleciona o botão

    projectItems.forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        newItem.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const projectId = this.getAttribute('data-project-id');
            openModal(category, projectId);
        });
    });

    if (academicButton) { // NOVO: Adiciona o listener para o botão académico
        academicButton.addEventListener('click', openAcademicModal);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (lightbox && lightbox.classList.contains('active')) {
                closeLightbox(); // Fecha o lightbox primeiro
            } else if (modal.classList.contains('active')) {
                closeModal(); // Se o lightbox não estiver ativo, fecha o modal
            }
        }
        
        // ADICIONADO: Navegação no lightbox com setas
        if (lightbox && lightbox.classList.contains('active') && currentLightboxImages.length > 1) {
            if (e.key === 'ArrowLeft') {
                navigateLightbox('prev');
            } else if (e.key === 'ArrowRight') {
                navigateLightbox('next');
            }
        } 
        // Navegação no carrossel (só funciona se o lightbox não estiver ativo)
        else if (modal.classList.contains('active') && currentImages.length > 1) {
            if (e.key === 'ArrowLeft') {
                navigateCarousel('prev');
            } else if (e.key === 'ArrowRight') {
                navigateCarousel('next');
            }
        }
    });

    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

function openModal(category, projectId) {
    const project = findProject(category, projectId);

    if (!project) {
        console.error('Project not found:', category, projectId);
        return;
    }

    updateModalContent(project);

    modal.classList.add('active');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    currentImages = []; // Limpa as imagens do carrossel
    currentImageIndex = 0;
}

function updateModalContent(project) {
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-year').textContent = project.year;

    const tagsContainer = document.querySelector('.modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    document.querySelector('.modal-description').innerHTML =
        `<p>${project.description}</p>`;

    const detailsContainer = document.querySelector('.modal-details');
    detailsContainer.innerHTML = `
        <div class="detail-item">
            <strong>Role:</strong>
            <p>${project.role}</p>
        </div>
        <div class="detail-item">
            <strong>Areas:</strong>
            <p>${project.areas}</p>
        </div>
    `;

    // IMPORTANTE: Limpa o container de imagens completamente antes de adicionar novo conteúdo
    const imagesContainer = document.querySelector('.modal-images');
    imagesContainer.innerHTML = '';

    // Renderiza imagens (carrossel)
    if (project.images && project.images.length > 0) {
        initCarousel(project.images);
    } else {
        imagesContainer.innerHTML = '<div class="placeholder">Project Images</div>';
    }

    // Adiciona vídeo se existir (sempre depois das imagens)
    if (project.video && project.video.trim() !== '') {
        renderVideoEmbed(project.video);
    }
}

// ==========================================
// INITIALIZE APP
// ==========================================

function initApp() {
    console.log('Portfolio initialized');

    renderProjects();
    initNavigation();
    initMobileMenu();
    initLightbox(); 

    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }
}

// ==========================================
// RUN ON DOM LOADED
// ==========================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        openModal,
        closeModal,
        toggleMobileMenu
    };
}