// ==========================================
// PROJECT DATA - Define tudo aqui!
// Cada projeto tem uma propriedade 'categories' com um array
// das categorias a que pertence. As categorias disponíveis são:
// 'design', 'audio', 'audiovisual'
// Um projeto pode pertencer a múltiplas categorias simultaneamente.
// ==========================================

const allProjects = [

    {
        id: 'paris',
        title: 'PARIS',
        year: "Cover Artwork, 2026",
        yearSort: 2026,
        categories: ['design'],
        tags: ['Music', 'Artwork', 'Singles'],
        description: "Artwork design for Joana Sobral's single, <b><i>Paris</i></b>. Assets include <b>cover art, thumbnail, lettering and social media content.</b>",
        role: 'Graphic Designer',
        areas: 'Graphic Design, Design for Music',
        images: ['assets/design/paris/paris1.jpg', 'assets/design/paris/paris2.jpg', 'assets/design/paris/paris3.jpg', 'assets/design/paris/paris1.jpg'],
        video: ''
    },

    {
        id: 'winitroia',
        title: 'WINITRÓIA',
        year: '2025',
        yearSort: 2025,
        categories: ['design'],
        tags: ['Wine', 'Brand', 'Visual'],
        description: 'Freelance development of an <b>updated visual identity</b> for the wine distribution brand, <b><i>Winitróia</i></b>. The project includes the <b>modernization of the logo, iconography, utilities, among others.</b>',
        role: 'Graphic Designer',
        areas: 'Graphic Design, Branding',
        images: ['assets/design/winitroia/winitroia1.jpg', 'assets/design/winitroia/winitroia2.jpg', 'assets/design/winitroia/winitroia3.jpg', 'assets/design/winitroia/winitroia4.jpg', 'assets/design/winitroia/winitroia5.jpg', 'assets/design/winitroia/winitroia6.jpg', 'assets/design/winitroia/winitroia7.jpg', 'assets/design/winitroia/winitroia8.jpg', 'assets/design/winitroia/winitroia9.jpg', 'assets/design/winitroia/winitroia10.jpg', 'assets/design/winitroia/winitroia11.jpg', 'assets/design/winitroia/winitroia12.jpg', 'assets/design/winitroia/winitroia13.jpg'],
        video: ''
    },
    {
        id: 'escutar',
        title: 'LISTENING TO THE INVISIBLE',
        year: "Master's Thesis, 2025",
        yearSort: 2025,
        categories: ['audio'],
        tags: ['Music Production', 'Computacional Design'],
        description: "<b>Master's Thesis Project</b> in Design and Multimedia, at the Faculty of Science and Technology of the University of Coimbra, developed between May 2024 and July 2025, under the supervision of Professor <b>Mariana Seiça</b> and co-supervision of Professor <b>Amílcar Cardoso</b>.<br><br>The purpose of this dissertation is to <b>explore the potential of sound</b> - both in terms of data representation and artistic expression and interpretation - by developing a <b>sonification system</b> that uses data provided by Spotify's API to create personalized musical compositions, whose versatility is a reflection of the listening habits of a community of listeners based on their personal playlists. The system uses tools such as <b>MAX for Live and Ableton Live</b> to transcribe quantitative consumption data into musical elements, and takes the format of a <b>sound installation with a performative component</b>. This project also seeks to reflect on the role of sonification as an artistic practice based on the interpretation of data, in order to contribute to the exploration of the technique in the context of multimedia design.",
        role: 'Designer, Producer, Sound Engineer',
        areas: 'Music Production, Sound Design',
        images: ['assets/audio/escutar/escutar1.jpeg', 'assets/audio/escutar/escutar2.jpg', 'assets/audio/escutar/escutar3.jpeg', 'assets/audio/escutar/escutar4.jpeg'],
        video: 'https://youtu.be/B-UFFtwzrSo',
        linkText: 'LEARN MORE',
        linkUrl: 'https://estudogeral.uc.pt/handle/10316/120545'
    },
    {
        id: 'sasuc',
        title: 'SASUC',
        year: '2024-CURRENT',
        yearSort: 2024,
        categories: ['design'],
        tags: ['Branding', 'Visual Identity'],
        description: "My time in the communications department of the <b>Social Services of the University of Coimbra</b> consisted of expanding the newly created visual identity by developing various updated materials for the University's physical and digital media. The work carried out included various <b>posters, notices, signage, social media content, food menus, among many others</b> - for the benefit of different departments (food, scholarships, residences, etc). I was also heavily involved in creating strategies to promote many initiatives, often through video production for social media and for the website.",
        role: 'Communication Designer',
        areas: 'Communication Design, Video Production',
        images: ['assets/design/sasuc/sasuc8.jpg', 'assets/design/sasuc/sasuc1.jpg', 'assets/design/sasuc/sasuc5.png', 'assets/design/sasuc/sasuc6.png', 'assets/design/sasuc/sasuc7.png', 'assets/design/sasuc/sasuc2.jpg', 'assets/design/sasuc/sasuc9.jpg', 'assets/design/sasuc/sasuc10.jpg', 'assets/design/sasuc/sasuc11.jpg', 'assets/design/sasuc/sasuc12.jpg'],
        video: '',
        linkText: 'SEE MORE',
        linkUrl: 'https://www.instagram.com/sas_uc/'
    },
    {
        id: 'artworks',
        title: '+ DESIGN FOR MUSIC',
        year: '2024-CURRENT',
        yearSort: 2024,
        categories: ['design'],
        tags: ['Music', 'Artwork', 'Singles'],
        description: "With a particular interest in the translation of music into visual language, I have been working on the development of graphic identities for several individual music projects, focusing on the faithful visual interpretation of music through media such as cover artworks, banners, and social media content.<br><br>Along some of my own music, my work in this field features examples like:<br>• <b><i>Renaissance</i></b>, single by <b>Joana Sobral</b>; <br> • <b><i>Tempo Fugaz</i></b>, single by <b>Joana Sobral</b>; <br>• <b><i>Recomeça</i></b>, single by <b>Clã João Garcia</b>; <br>• <b><i>Oceans (Onde os Meus Pés Podem Falhar)</i></b>, single by <b>Clã João Garcia</b>; <br>",
        role: 'Graphic Designer',
        areas: 'Graphic Design, Design for Music',
        images: ['assets/design/artworks/artworks1.jpg', 'assets/design/artworks/artworks2.jpg', 'assets/design/artworks/artworks3.jpg', 'assets/design/artworks/artworks4.jpg', 'assets/design/artworks/artworks5.jpg'],
        video: ''
    },
    {
        id: 'ouvir-hoje',
        title: 'WHAT ARE WE LISTENING TODAY?',
        year: 'Short Film, 2024',
        yearSort: 2024,
        categories: ['audiovisual', 'design'],
        tags: ['Short Film', 'Sound'],
        description: "<b>Short documentary film</b> directed by Carolina Costa, in which I worked as <b>sound director and head of post-production</b>, also handling the sound mixing. In addition, I also worked as <b>designer</b>, responsible for creating the film's graphic aesthetics (posters, graphics, etc.). <br>The film was featured in the 2024 edition of the <b><i>Encontros de Cinema de Viana</i></b> film festival. <br><br> <i>Radio São Miguel 93.4 FM enters the homes and vehicles of its listeners, it is their daily companion. On the other side of the microphone, Manuela Freire is the voice fighting loneliness. She guides us through the corners of this radio station and its history.</i>",
        role: 'Sound Director, Editor',
        areas: 'Sound design, Video Post-Production, Audio Post-Production, Graphic Design',
        images: ['assets/other/gente/gente9.jpg', 'assets/other/gente/gente2.jpg', 'assets/other/gente/gente3.jpg', 'assets/other/gente/gente4.jpg', 'assets/other/gente/gente5.jpg', 'assets/other/gente/gente6.jpg', 'assets/other/gente/gente7.jpg', 'assets/other/gente/gente8.jpg', 'assets/other/gente/gente10.jpg'],
        video: '',
        linkText: 'LEARN MORE',
        linkUrl: 'https://letterboxd.com/film/o-que-e-que-a-gente-vai-ouvir-hoje/'
    },
    {
        id: 'lamire',
        title: 'LAMIRÉ',
        year: 'Album, 2023',
        yearSort: 2023,
        categories: ['audio', 'design'],
        tags: ['Music', 'Pop/Rock', 'Artwork', 'CD', ],
        description: "<b>Pop/rock</b> debut <b>studio album</b> released under my own music project, <b>Tomás Oliveira</b>. The project includes 10 tracks that I <b>composed, produced, and mixed</b>, where I also played all the instruments. It was showcased live with a band at a small launch party and several concerts. <br><br> For this album, I also developed the <b>graphic indentity</b> in its entirety. The visual component of this project includes the <b>cover artwork, banners, visualizers, content for social media</b>, as well as the conceptualization and independent production of the <b>physical CD</b> format. I also ended up collaborating with my colleague <b>Micael Nisa</b> on the creation of the music video for the single 'Despassarado.'",
        role: 'Composer, Musician, Producer, Mixing Engineer, Designer, Editor',
        areas: 'Music Production, Music, Graphic Design, Product Design',
        images: ['assets/audio/lamire/lamire1.png', 'assets/audio/lamire/lamire2.png', 'assets/audio/lamire/lamire3.png', 'assets/audio/lamire/lamire4.jpg', 'assets/audio/lamire/lamire5.jpg', 'assets/audio/lamire/lamire6.JPG', 'assets/audio/lamire/lamire7.JPG', 'assets/audio/lamire/lamire8.JPG', 'assets/audio/lamire/lamire9.jpg', 'assets/audio/lamire/lamire10.jpeg'],
        video: ['https://youtu.be/a8SZSNYCGrU?si=6TTePxhdFDsDaCSx', 'https://youtu.be/5MT288F68ak'],
        linkText: 'LISTEN TO THE ALBUM',
        linkUrl: 'https://onerpm.link/220884326842'
    },
    {
        id: 'la-larai',
        title: 'LA LARAI',
        year: 'Short Film, 2023',
        yearSort: 2023,
        categories: ['audiovisual', 'design'],
        tags: ['Short Film', 'Post-Production'],
        description: "<b>Short documentary film</b> directed by Carolina Costa, made in 2022, as part of the <b><i>Plano Frontal Film Residency</i></b> by the <b>AO NORTE</b> Audiovisual Production and Animation Association, during the <b><i>MDOC - Melgaço International Documentary Festival</i></b>. I worked as sound director and main editor, also taking on the role of designer — creating the aesthetics of the posters and related materials.<br> The film was presented in 2023, at the following year's edition of the festival.<br><br><i>From an early age, José Celeiro has found inspiration for life in music. Today, he shares this passion by opening the doors of his \"Casa das Concertinas\" to anyone who wants to come in.</i> ",
        role: 'Sound Director, Editor',
        areas: 'Sound design, Video Post-Production, Audio Post-Production, Graphic Design',
        images: ['assets/other/larai/larai1.jpg', 'assets/other/larai/larai2.png', 'assets/other/larai/larai11.jpg', 'assets/other/larai/larai8.png', 'assets/other/larai/larai12.jpg', 'assets/other/larai/larai13.jpg', 'assets/other/larai/larai14.jpg'],
        video: '',
        linkText: 'WATCH',
        linkUrl: 'https://lugardoreal.com/video/la-larai'
    },
    {
        id: 'berco',
        title: 'RAINBOW BABY',
        year: 'Short Film, 2023',
        yearSort: 2023,
        categories: ['audiovisual', 'design'],
        tags: ['Short Film', 'Post-Production'],
        description: "<b>Short documentary film</b> directed by Carolina Costa, on which I worked as <b>post-producer</b> (mainly in color grading and sound mixing). In addition, I also handled the <b>design</b>, creating the film's graphic visual identity (posters, graphics, social media content, etc.).<br>The film was featured in the 2023 editions of the <b><i>Caminhos do Cinema Português</i></b> and <b><i>Encontros de Cinema de Viana</i></b> film festivals, as well as in the 2024 edition of the <b><i>Tokyo Short Film Festival</i></b>.<br><br><i>Mom, in your room there are four beds... and three cribs.</i>",
        role: 'Designer, Editor, Mixing Engineer',
        areas: 'Graphic Design, Video Post-Production, Audio Post-Production',
        images: ['assets/other/berco/berco1.jpg', 'assets/other/berco/berco3.jpg', 'assets/other/berco/berco5.jpg', 'assets/other/berco/berco6.jpg'],
        video: 'https://youtu.be/6ludLvMZLXc'
    },
    {
        id: 'esplanada',
        title: 'HÁ UMA HORA NA ESPLANADA DO NAVIO DE ESPELHOS',
        year: 'Soundscape, 2023',
        yearSort: 2023,
        categories: ['audio'],
        tags: ['Music', 'Poetry', 'Sound', 'Soundscape'],
        description: "<b><i>Há Uma Hora na Esplanada do Navio de Espelhos</i></b> is a sound experience that seeks to musically reinterpret the work and life of Mário Cesariny, and the legacy he left behind. I built this piece based not only on the author's work, but also on musical projects that were created in homage to him - through techniques such as sampling and reinterpretation, adding instrumentation created by me and even recordings of my own voice. My main goal was to combine the traditional format with a more experimental nature, as a finished product in a mixed and mastered music format, ready to be listened to on all kinds of devices. <br><br>In April 2024, the piece was included in the performance recital <b><i>Há Um Sol Esplendente nas Coisas</i></b>, produced by the Bonifrates Cooperative in partnership with <b>FCTUC's Department of Computer Engineering</b> and the <b>Penedo da Saudade Cultural Center</b>. It was also featured in the exhibition attached to the recital, where it is accompanied by the graphic artwork in the video below, created by Professor <b>Mariana Seiça</b>.",
        role: 'Designer, Producer, Sound Engineer',
        areas: 'Music Production, Sound Design',
        images: ['assets/audio/esplanada/esplanada1.jpg', 'assets/audio/esplanada/esplanada2.jpg'],
        video: 'https://youtu.be/eBgwArEFQGE',
        linkText: 'LEARN MORE',
        linkUrl: 'https://www.behance.net/gallery/198510387/Ha-Uma-Hora-na-Esplanada-Soundscape'
    },
    {
        id: 'atrevome',
        title: 'A(TREVO)-ME',
        year: '2023',
        yearSort: 2023,
        categories: ['design'],
        tags: ['Brand', 'Visual', 'Social Media'],
        description: "Brand identity (including <b>logo variations, typography & post mockups and a podcast cover</b>) developed for the social media brand \u201ca(trevo)-me\u201d.",
        role: 'Graphic Designer',
        areas: 'Graphic Design, Branding',
        images: ['assets/design/atrevome/atrevome2.jpg', 'assets/design/atrevome/atrevome3.jpg', 'assets/design/atrevome/atrevome1.jpg'],
        video: 'https://youtu.be/VuI3AnUKyg4'
    },
    {
        id: 'alto-martir',
        title: 'MARTYR: ONE STEP AWAY FROM THE DEAD',
        year: 'Short Film, 2021',
        yearSort: 2021,
        categories: ['audiovisual', 'design'],
        tags: ['Short Film', 'Sound Design'],
        description: "<b>Short documentary film</b> directed by Carolina Costa, on which I worked as <b>editor</b>. In addition, I also handled the <b>design</b>, creating the film's graphic aesthetic (posters, graphics, social media content, etc.).<br>The film was featured in the 2021 editions of the <b><i>DocLisboa</i></b> and <b><i>Caminhos do Cinema Português</i></b> film festivals.<br><br><i>In a small village in the countryside of Portugal, living one step away from the dead holds unimaginable secrets.</i>",
        role: 'Designer, Editor',
        areas: 'Graphic design, Video Post-Production, Audio Post-Production',
        images: ['assets/other/alto/alto1.jpg', 'assets/other/alto/alto3.jpg', 'assets/other/alto/alto2.jpg', 'assets/other/alto/alto4.jpg', 'assets/other/alto/alto5.jpg', 'assets/other/alto/alto6.jpg', 'assets/other/alto/alto7.jpg', 'assets/other/alto/alto8.jpg', 'assets/other/alto/alto9.jpg'],
        video: 'https://youtu.be/85L27l6hYl8'
    },
    {
        id: 'serendipity',
        title: 'SERENDIPITY',
        year: 'Album, 2021',
        yearSort: 2021,
        categories: ['audio'],
        tags: ['Music', 'Pop'],
        description: 'Debut album by pop artist <b>Miguel Correia</b>, on which I was the executive producer. I <b>produced and mixed</b> 10 of the 11 tracks written by Miguel, on which I also played all the instruments. <br><br> It was my first time working with music in English!',
        role: 'Musician, Producer, Mixing Engineer',
        areas: 'Music Production',
        images: ['assets/audio/serendipity/serendipity1.jpg'],
        video: 'https://youtu.be/HPxAG745vqE?list=RDHPxAG745vqE',
        linkText: 'LISTEN TO THE ALBUM',
        linkUrl: 'https://youtube.com/playlist?list=OLAK5uy_lKosbOljM3oK3ca_vEiYVicgf_FSefivw&si=0r4M1yfTYAJhgiwQ'
    },
    {
        id: 'singles',
        title: 'SINGLES',
        year: '2021-Present Day',
        yearSort: 2021,
        categories: ['audio'],
        tags: ['Music'],
        description: 'Recording, production, instrumentation, mixing, and mastering of various individual tracks, released as singles by different artists.',
        role: 'Producer, Mixing Engineer',
        areas: 'Music Production, Mixing, Mastering',
        images: ['assets/audio/singles/singles2.png'],
        video: 'https://youtu.be/JdPMcDybYcU?list=RDJdPMcDybYcU',
        linkText: 'PLAYLIST WITH ALL OF THE SONGS',
        linkUrl: 'https://open.spotify.com/playlist/5wMIlKW2ASYNKVVem0YuVL?si=03e3a695b4174f57'
    },
    {
        id: 'cuidar',
        title: 'CUIDAR - UM OLHAR ATENTO',
        year: 'Photographic Exhibition, 2019',
        yearSort: 2019,
        categories: ['audiovisual'],
        tags: ['Photo editing'],
        description: 'During my time as a Visual Arts student at <I>Liceu Alves Martins</I> in Viseu (more specifically, in the 12th grade), a partnership between the school and the local health center <b><I>Casa de Saúde São Mateus</i></b> came about through the Multimedia Workshop subject, which gave three students the opportunity to hold a photographic exhibition to celebrate the first anniversary of the <I>Casa de Saúde São Mateus</I> Convalescence Unit. Thus, in January 2020, the exhibition <b><I>Cuidar - Um Olhar Atento</I></b> by André Gonçalves, Gonçalo Figueiredo and Tomás Oliveira was born.<br><br>Later, in order to enrich our project, we were asked to return to the <I>Casa de Saúde</I> in order to photograph the entire hospital, since the first wave of photographs was only aimed at the most recent Unit. This gave rise to a new range of photographic material, completing the exhibition.<br>The photographs were exhibited in <b>physical format</b> in the Convalescence Unit, and a conference was organized to inaugurate the exhibition.',
        role: 'Photographer, Editor',
        areas: 'Photography',
        images: ['assets/other/cuidar/cuidar1.jpg', 'assets/other/cuidar/cuidar2.jpg', 'assets/other/cuidar/cuidar3.jpg', 'assets/other/cuidar/cuidar4.jpg', 'assets/other/cuidar/cuidar5.jpg', 'assets/other/cuidar/cuidar6.jpg', 'assets/other/cuidar/cuidar7.jpg', 'assets/other/cuidar/cuidar8.jpg', 'assets/other/cuidar/cuidar9.jpg', 'assets/other/cuidar/cuidar10.jpg', 'assets/other/cuidar/cuidar11.jpg', 'assets/other/cuidar/cuidar12.jpg'],
        video: ''
    }
];

// O projeto académico mantém-se separado (acionado pelo botão)
const academicProject = {
    id: 'academic-main',
    title: 'ACADEMIC PROJECTS',
    year: 'VARIOUS',
    categories: ['design'],
    tags: ['Multidisciplinary', 'Cross-Media'],
    description: "During the two <b>Design & Multimedia</b> cycles offered by the Faculty of Science and Technology at the University of Coimbra (Bachelor's and Master's degrees), I developed several projects that I particularly enjoyed. Due to the variety of areas taught in the course, the projects (each individually described in the accompanying image) cover a range of fields, from editorial to computational design.",
    role: 'Student, Designer',
    areas: 'Graphic Design, Editorial Design, Computational Design, Sound Design, Audiovisual Production, Interaction Design',
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
};

// ==========================================
// FILTER STATE
// ==========================================

let activeFilter = 'all';

// ==========================================
// DOM ELEMENTS (declarados como let, inicializados em initApp)
// ==========================================

let navLinks;
let sections;
let mobileMenuToggle;
let sidenav;
let modal;
let modalOverlay;
let modalClose;
let lightbox;
let lightboxImage;
let lightboxClose;
let lightboxOverlay;
let lightboxPrev;
let lightboxNext;

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
// RENDER & FILTER PROJECTS
// ==========================================

function getFilteredProjects(filter) {
    if (filter === 'all') {
        // Ordena por ano (mais recente primeiro)
        return [...allProjects].sort((a, b) => b.yearSort - a.yearSort);
    }
    return allProjects
        .filter(p => p.categories.includes(filter))
        .sort((a, b) => b.yearSort - a.yearSort);
}

function renderProjects(filter) {
    const workGrid = document.querySelector('#work .work-grid');
    if (!workGrid) return;

    const projects = getFilteredProjects(filter || activeFilter);

    workGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const projectItem = createProjectElement(project);
        projectItem.style.animationDelay = `${index * 0.05}s`;
        workGrid.appendChild(projectItem);
    });

    // Mostrar/esconder botão de trabalho académico (só aparece no filtro 'design' ou 'all')
    const academicContainer = document.querySelector('.academic-trigger-container');
    if (academicContainer) {
        if (activeFilter === 'design' || activeFilter === 'all') {
            academicContainer.style.display = '';
        } else {
            academicContainer.style.display = 'none';
        }
    }

    initProjectModal();
}

function createProjectElement(project) {
    const div = document.createElement('div');
    div.className = 'project-item';
    div.setAttribute('data-project-id', project.id);

    const imageContent = project.images && project.images.length > 0 ?
        `<img src="${project.images[0]}" alt="${project.title}">` :
        `<div class="placeholder">${project.title}</div>`;

    // Gera badges de categorias para projetos multi-área ${categoryBadges}
    const categoryLabels = { design: 'Design', audio: 'Audio', audiovisual: 'Film & Photo' };
    const categoryBadges = `<div class="project-categories">${project.categories.map(c => `<span class="category-badge category-badge--${c}">${categoryLabels[c]}</span>`).join('')}</div>`;

    div.innerHTML = `
        <div class="project-image ${project.images && project.images.length > 0 ? 'has-image' : ''}">
            ${imageContent}
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <span class="project-year-badge">${project.yearSort}</span>
            
        </div>
    `;

    return div;
}

// ==========================================
// FIND PROJECT BY ID
// ==========================================

function findProject(projectId) {
    if (projectId === 'academic-main') return academicProject;
    return allProjects.find(p => p.id === projectId) || null;
}

// ==========================================
// FILTER BUTTONS
// ==========================================

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            activeFilter = this.getAttribute('data-filter');
            renderProjects(activeFilter);
        });
    });
}

// ==========================================
// IMAGE CAROUSEL
// ==========================================

function initCarousel(images) {
    currentImages = images;
    currentImageIndex = 0;
    updateCarouselDisplay();
}

function updateCarouselDisplay() {
    const carouselContainer = document.querySelector('.modal-carousel');

    if (!currentImages || currentImages.length === 0) {
        carouselContainer.innerHTML = '<div class="placeholder">Project Images</div>';
        return;
    }

    const showControls = currentImages.length > 1;

    carouselContainer.innerHTML = `
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

    const carouselImageEl = carouselContainer.querySelector('.carousel-image');
    if (carouselImageEl) {
        carouselImageEl.addEventListener('click', () => {
            openLightbox(carouselImageEl.src, currentImages, currentImageIndex);
        });
        carouselImageEl.style.cursor = 'zoom-in';
    }

    if (showControls) {
        const prevBtn = carouselContainer.querySelector('.carousel-prev');
        const nextBtn = carouselContainer.querySelector('.carousel-next');
        const indicators = carouselContainer.querySelectorAll('.carousel-indicator');

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

function renderVideoEmbed(video) {
    const videosContainer = document.querySelector('.modal-videos');

    if (!video || (typeof video === 'string' && video.trim() === '')) return;

    const urls = Array.isArray(video) ? video : [video];

    urls.forEach(videoUrl => {
        if (!videoUrl || videoUrl.trim() === '') return;

        const embedUrl = convertYouTubeUrl(videoUrl);
        if (!embedUrl) return;

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
        videosContainer.insertAdjacentHTML('beforeend', videoHTML);
    });
}

// ==========================================
// IMAGE LIGHTBOX
// ==========================================

function openLightbox(imageUrl, imagesArray, clickedIndex) {
    if (!lightbox || !lightboxImage) return;

    currentLightboxImages = imagesArray || [];
    currentImageIndex = clickedIndex || 0;

    lightboxImage.src = imageUrl;
    lightbox.classList.add('active');

    if (currentLightboxImages.length > 1) {
        lightbox.classList.add('has-multiple-images');
    } else {
        lightbox.classList.remove('has-multiple-images');
    }
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.classList.remove('has-multiple-images');
    currentLightboxImages = [];
    currentImageIndex = 0;
}

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
        e.stopPropagation();
        navigateLightbox('prev');
    }); 
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
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
    openModal('academic-main'); 
}

function initProjectModal() {
    const projectItems = document.querySelectorAll('.project-item');
    const academicButton = document.getElementById('academicWorkButton');

    projectItems.forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        newItem.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    if (academicButton) {
        // Remove listener antigo para evitar duplicados
        const newBtn = academicButton.cloneNode(true);
        academicButton.parentNode.replaceChild(newBtn, academicButton);
        newBtn.addEventListener('click', openAcademicModal);
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
                closeLightbox();
            } else if (modal.classList.contains('active')) {
                closeModal();
            }
        }
        
        if (lightbox && lightbox.classList.contains('active') && currentLightboxImages.length > 1) {
            if (e.key === 'ArrowLeft') {
                navigateLightbox('prev');
            } else if (e.key === 'ArrowRight') {
                navigateLightbox('next');
            }
        } else if (modal.classList.contains('active') && currentImages.length > 1) {
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

function openModal(projectId) {
    const project = findProject(projectId);

    if (!project) {
        console.error('Project not found:', projectId);
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

    const existingButton = modal.querySelector('.project-action-button');
    if (existingButton) {
        existingButton.remove();
    }
    
    document.querySelector('.modal-description').innerHTML =
        `<p>${project.description}</p>`;

    if (project.linkText && project.linkUrl) {
        const linkButton = document.createElement('a');
        linkButton.href = project.linkUrl;
        linkButton.target = '_blank';
        linkButton.rel = 'noopener noreferrer';
        linkButton.textContent = project.linkText;
        linkButton.className = 'project-action-button';
        
        const modalDescription = document.querySelector('.modal-description');
        modalDescription.insertAdjacentElement('afterend', linkButton); 
    }

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

    const carouselContainer = document.querySelector('.modal-carousel');
    const videosContainer = document.querySelector('.modal-videos');
    carouselContainer.innerHTML = '';
    videosContainer.innerHTML = '';

    if (project.images && project.images.length > 0) {
        initCarousel(project.images);
    } else {
        carouselContainer.innerHTML = '<div class="placeholder">Project Images</div>';
    }

    if (project.video && (Array.isArray(project.video) ? project.video.length > 0 : project.video.trim() !== '')) {
        renderVideoEmbed(project.video);
    }
}

// ==========================================
// INITIALIZE APP
// ==========================================

function initApp() {
    console.log('Portfolio initialized');

    // Inicializa os elementos do DOM aqui, depois do DOM estar carregado
    navLinks = document.querySelectorAll('.nav-link');
    sections = document.querySelectorAll('.section');
    mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    sidenav = document.querySelector('.sidenav');
    modal = document.getElementById('projectModal');
    modalOverlay = document.querySelector('.modal-overlay');
    modalClose = document.querySelector('.modal-close');

    lightbox = document.getElementById('imageLightbox');
    lightboxImage = lightbox ? lightbox.querySelector('.lightbox-image') : null;
    lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
    lightboxOverlay = lightbox ? lightbox.querySelector('.lightbox-overlay') : null;
    lightboxPrev = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
    lightboxNext = lightbox ? lightbox.querySelector('.lightbox-next') : null;

    renderProjects('all');
    initFilters();
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        openModal,
        closeModal,
        toggleMobileMenu
    };
}