// ==========================================
// PROJECT DATA - Define tudo aqui!
// ==========================================

const projectData = {
    design: [{
            id: 'winitroia',
            title: 'WINITRÓIA',
            year: '2025',
            tags: ['Graphic Design', 'Branding'],
            description: 'Descrição detalhada do projeto. Aqui podes explicar o contexto, objetivos, processo criativo e resultados alcançados.',
            role: 'Designer Principal',
            areas: 'Identidade Visual, Design Editorial',
            images: ['assets/design/winitroia1.jpg', 'assets/design/winitroia2.jpg', 'assets/design/winitroia3.jpg', 'assets/design/winitroia4.jpg'],
            video: 'https://youtu.be/B-UFFtwzrSo'
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
            video: '' // Adicionar URL do YouTube embed se necessário
        },
        {
            id: 'atrevome',
            title: 'A(TREVO)-ME',
            year: '2023',
            tags: ['Branding', 'Visual Identity'],
            description: 'Descrição do segundo projeto.',
            role: 'Graphic Designer',
            areas: 'Graphic Design',
            images: [],
            video: ''
        }
    ],
    audio: [{
            id: 'serendipity',
            title: 'Serendipity',
            year: '2021',
            tags: ['Music Production', 'Electronic'],
            description: 'Descrição do projeto musical Serendipity.',
            role: 'Producer, Mix & Master',
            areas: 'Produção Musical, Mixing, Mastering',
            images: [],
            video: '' // Pode ser Spotify embed, YouTube, etc.
        },
        {
            id: 'lamire',
            title: 'Lamiré',
            year: '2023',
            tags: ['Music Production', 'Collaboration'],
            description: 'Descrição do projeto Lamiré.',
            role: 'Producer, Sound Engineer',
            areas: 'Produção Musical, Sound Design',
            images: [],
            video: ''
        }
    ],
    audiovisual: [{
            id: 'cuidar',
            title: 'Cuidar - Um Olhar Atento',
            year: '2019',
            tags: ['Documentary', 'Post-Production'],
            description: 'Descrição do projeto audiovisual.',
            role: 'Editor, Sound Designer',
            areas: 'Edição de Vídeo, Pós-produção Audio',
            images: [],
            video: '' // URL do YouTube, Vimeo, etc.
        },
        {
            id: 'alto-martir',
            title: 'O Alto do Mártir',
            year: '2021',
            tags: ['Film', 'Sound Design'],
            description: 'Descrição do projeto.',
            role: 'Sound Designer',
            areas: 'Sound Design, Audio Post-Production',
            images: [],
            video: ''
        },
        {
            id: 'carim',
            title: 'Carim',
            year: '2025',
            tags: ['Short Film', 'Post-Production'],
            description: 'Descrição do projeto.',
            role: 'Editor',
            areas: 'Edição, Color Grading',
            images: [],
            video: ''
        },
        {
            id: 'ouvir-hoje',
            title: 'O Que É Que a Gente Vai Ouvir Hoje?',
            year: '2024',
            tags: ['Documentary', 'Sound'],
            description: 'Descrição do projeto.',
            role: 'Sound Engineer',
            areas: 'Captação de Som, Mixing',
            images: [],
            video: ''
        }
    ]
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

// ==========================================
// CAROUSEL STATE
// ==========================================

let currentImageIndex = 0;
let currentImages = [];

// ==========================================
// RENDER PROJECTS DYNAMICALLY
// ==========================================

function renderProjects() {
    Object.keys(projectData).forEach(category => {
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
// IMAGE CAROUSEL (MELHORADO)
// ==========================================

function initCarousel(images) {
    currentImages = images;
    currentImageIndex = 0;
    updateCarouselDisplay();
}

function updateCarouselDisplay() {
    const imagesContainer = document.querySelector('.modal-images');

    if (!currentImages || currentImages.length === 0) {
        imagesContainer.innerHTML = '<div class="placeholder">Project Images</div>';
        return;
    }

    const showControls = currentImages.length > 1;

    imagesContainer.innerHTML = `
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
// VIDEO EMBED (NOVO)
// ==========================================

function renderVideoEmbed(videoUrl) {
    const imagesContainer = document.querySelector('.modal-images');
    
    if (!videoUrl || videoUrl.trim() === '') {
        return; // Não adiciona vídeo se não houver URL
    }

    // Cria container do vídeo
    const videoHTML = `
        <div class="modal-video">
            <div class="video-container">
                <iframe 
                    src="${videoUrl}" 
                    title="Project video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;

    imagesContainer.insertAdjacentHTML('beforeend', videoHTML);
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

function initProjectModal() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        newItem.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const projectId = this.getAttribute('data-project-id');
            openModal(category, projectId);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
        if (modal.classList.contains('active') && currentImages.length > 1) {
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
    currentImages = [];
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

    // Renderiza imagens (carrossel)
    if (project.images && project.images.length > 0) {
        initCarousel(project.images);
    } else {
        const imagesContainer = document.querySelector('.modal-images');
        imagesContainer.innerHTML = '<div class="placeholder">Project Images</div>';
    }

    // Adiciona vídeo se existir
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