// Navigation system
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

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
    });
});

// Project data - adiciona aqui os dados dos teus projetos
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

// Modal functionality
const modal = document.getElementById('projectModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const projectItems = document.querySelectorAll('.project-item');

// Open modal function
function openModal(projectId) {
    const project = projectData[projectId];

    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    // Update modal content
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-year').textContent = project.year;

    // Update tags
    const tagsContainer = document.querySelector('.modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    // Update description
    document.querySelector('.modal-description').innerHTML = `<p>${project.description}</p>`;

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
            `<img src="${img}" alt="${project.title}">`
        ).join('');
    } else {
        imagesContainer.innerHTML = '<div class="placeholder">Project Images</div>';
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners for projects
projectItems.forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
    });
});

// Event listeners for closing modal
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevent modal content clicks from closing modal
document.querySelector('.modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
});