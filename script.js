// ==========================================
// PROJECT DATA
// ==========================================

const projectData = {
    'design-1': {
        title: 'Project Title',
        year: '2024',
        tags: ['Graphic Design', 'Branding'],
        description: 'Descrição detalhada do projeto. Aqui podes explicar o contexto, objetivos, processo criativo e resultados alcançados.',
        role: 'Designer Principal',
        areas: 'Identidade Visual, Design Editorial',
        images: [
            // Adiciona URLs das imagens aqui
            // 'caminho/para/imagem1.jpg',
            // 'caminho/para/imagem2.jpg',
        ]
    },
    'design-2': {
        title: 'Another Project',
        year: '2023',
        tags: ['UI/UX', 'Web Design'],
        description: 'Descrição do segundo projeto.',
        role: 'UI/UX Designer',
        areas: 'Interface Design, Prototipagem',
        images: []
    },
    'audio-1': {
        title: 'Serendipity',
        year: '2021',
        tags: ['Music Production', 'Electronic'],
        description: 'Descrição do projeto musical Serendipity.',
        role: 'Producer, Mix & Master',
        areas: 'Produção Musical, Mixing, Mastering',
        images: []
    },
    'audio-2': {
        title: 'Lamiré',
        year: '2023',
        tags: ['Music Production', 'Collaboration'],
        description: 'Descrição do projeto Lamiré.',
        role: 'Producer, Sound Engineer',
        areas: 'Produção Musical, Sound Design',
        images: []
    },
    'av-1': {
        title: 'Cuidar - Um Olhar Atento',
        year: '2019',
        tags: ['Documentary', 'Post-Production'],
        description: 'Descrição do projeto audiovisual.',
        role: 'Editor, Sound Designer',
        areas: 'Edição de Vídeo, Pós-produção Audio',
        images: []
    },
    'av-2': {
        title: 'O Alto do Mártir',
        year: '2021',
        tags: ['Film', 'Sound Design'],
        description: 'Descrição do projeto.',
        role: 'Sound Designer',
        areas: 'Sound Design, Audio Post-Production',
        images: []
    },
    'av-3': {
        title: 'Carim',
        year: '2025',
        tags: ['Short Film', 'Post-Production'],
        description: 'Descrição do projeto.',
        role: 'Editor',
        areas: 'Edição, Color Grading',
        images: []
    },
    'av-4': {
        title: 'O Que É Que a Gente Vai Ouvir Hoje?',
        year: '2024',
        tags: ['Documentary', 'Sound'],
        description: 'Descrição do projeto.',
        role: 'Sound Engineer',
        areas: 'Captação de Som, Mixing',
        images: []
    }
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
const projectItems = document.querySelectorAll('.project-item');

// ==========================================
// NAVIGATION SYSTEM
// ==========================================

function initNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get target section id from href
            const targetId = this.getAttribute('href').replace('#', '');

            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active to clicked link
            this.classList.add('active');

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }

            // Scroll to top smoothly
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

    // Close menu when clicking outside
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

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// ==========================================
// PROJECT MODAL
// ==========================================

function initProjectModal() {
    // Open modal when clicking on project items
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Prevent modal content clicks from closing modal
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

function openModal(projectId) {
    const project = projectData[projectId];

    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    // Update modal content
    updateModalContent(project);

    // Show modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
}

function updateModalContent(project) {
    // Update title and year
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-year').textContent = project.year;

    // Update tags
    const tagsContainer = document.querySelector('.modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    // Update description
    document.querySelector('.modal-description').innerHTML =
        `<p>${project.description}</p>`;

    // Update details
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

    // Update images
    const imagesContainer = document.querySelector('.modal-images');
    if (project.images && project.images.length > 0) {
        imagesContainer.innerHTML = project.images.map(img =>
            `<img src="${img}" alt="${project.title}" loading="lazy">`
        ).join('');
    } else {
        imagesContainer.innerHTML =
            '<div class="placeholder">Project Images</div>';
    }
}

// ==========================================
// INITIALIZE APP
// ==========================================

function initApp() {
    console.log('Portfolio initialized');

    // Initialize all features
    initNavigation();
    initMobileMenu();
    initProjectModal();

    // Show home section by default
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

// Debounce function for performance
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions if needed (for ES6 modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        openModal,
        closeModal,
        toggleMobileMenu
    };
}