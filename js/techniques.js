const techniquesData = {
    'choku-zuki': {
        name: 'Choku Zuki',
        japanese: '直突き',
        type: 'attack',
        category: 'tsuki-waza',
        level: 'basic',
        height: ['chudan', 'jodan'],
        description: 'Golpe directo de puño desde la posición natural',
        keyPoints: [
            'Alineación correcta del puño',
            'Rotación completa en el impacto',
            'Retracción rápida'
        ],
        commonMistakes: [
            'Elevar el hombro',
            'No rotar completamente el puño',
            'Tensar demasiado el brazo que no golpea'
        ],
        tags: ['puño', 'básico', 'golpe directo', 'zuki'],
        relatedTechniques: ['oi-zuki', 'gyaku-zuki'],
        videoId: 'technique-video-id'
    }
    // ... más técnicas
};

$(document).ready(function() {
    let activeFilters = new Set();
    let searchTerm = '';

    // Función de búsqueda y filtrado
    function filterTechniques() {
        const filteredTechniques = Object.entries(techniquesData).filter(([id, technique]) => {
            // Comprobar término de búsqueda
            if (searchTerm && !technique.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !technique.japanese.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }

            // Comprobar filtros activos
            if (activeFilters.size > 0) {
                return Array.from(activeFilters).every(filter => {
                    const [type, value] = filter.split(':');
                    switch (type) {
                        case 'type':
                            return value === 'all' || technique.type === value;
                        case 'category':
                            return technique.category === value;
                        case 'level':
                            return technique.level === value;
                        case 'height':
                            return technique.height.includes(value);
                        default:
                            return true;
                    }
                });
            }
            return true;
        });

        displayTechniques(filteredTechniques);
        updateActiveFilters();
    }

    // Mostrar técnicas filtradas
    function displayTechniques(techniques) {
        const grid = $('.techniques-grid');
        grid.empty();

        techniques.forEach(([id, technique]) => {
            grid.append(`
                <div class="technique-card" data-id="${id}">
                    <div class="technique-header">
                        <h3>${technique.name}</h3>
                        <span class="japanese">${technique.japanese}</span>
                    </div>
                    <div class="technique-tags">
                        ${technique.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <p>${technique.description}</p>
                    <button class="details-btn">Ver detalles</button>
                </div>
            `);
        });
    }

    // Actualizar filtros activos
    function updateActiveFilters() {
        const filterTags = $('.filter-tags');
        filterTags.empty();

        activeFilters.forEach(filter => {
            const [type, value] = filter.split(':');
            filterTags.append(`
                <span class="filter-tag" data-filter="${filter}">
                    ${value}
                    <i class="fas fa-times"></i>
                </span>
            `);
        });
    }

    // Event listeners
    $('#technique-search').on('input', function() {
        searchTerm = $(this).val();
        filterTechniques();
    });

    $('.filter-btn').click(function() {
        const btn = $(this);
        const filter = `${btn.data('type') || btn.data('category') || btn.data('level') || btn.data('height')}:${btn.text().toLowerCase()}`;

        if (btn.hasClass('active')) {
            btn.removeClass('active');
            activeFilters.delete(filter);
        } else {
            btn.addClass('active');
            activeFilters.add(filter);
        }

        filterTechniques();
    });

    $('.clear-filters').click(function() {
        activeFilters.clear();
        $('.filter-btn').removeClass('active');
        $('#technique-search').val('');
        searchTerm = '';
        filterTechniques();
    });

    // Delegación de eventos para tags de filtro
    $('.filter-tags').on('click', '.filter-tag', function() {
        const filter = $(this).data('filter');
        activeFilters.delete(filter);
        $(`.filter-btn[data-${filter.split(':')[0]}="${filter.split(':')[1]}"]`).removeClass('active');
        filterTechniques();
    });

    // Función para mostrar el modal con los detalles de la técnica
    function showTechniqueDetails(id) {
        const technique = techniquesData[id];
        if (!technique) return;

        const modalContent = `
            <div class="technique-detail-header">
                <h2>${technique.name}</h2>
                <span class="japanese">${technique.japanese}</span>
                <div class="technique-tags">
                    ${technique.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>

            <div class="technique-detail-grid">
                <div class="technique-detail-section">
                    <h4>Puntos Clave</h4>
                    <ul class="key-points-list">
                        ${technique.keyPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>

                <div class="technique-detail-section">
                    <h4>Errores Comunes</h4>
                    <ul class="common-mistakes-list">
                        ${technique.commonMistakes.map(mistake => `<li>${mistake}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="technique-detail-section">
                <h4>Descripción</h4>
                <p>${technique.description}</p>
            </div>

            ${technique.videoId ? `
                <div class="technique-video-section">
                    <h4>Demostración</h4>
                    <div class="video-container">
                        <iframe width="100%" height="315" 
                                src="https://www.youtube.com/embed/${technique.videoId}" 
                                frameborder="0" 
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
            ` : ''}

            <div class="technique-detail-section">
                <h4>Técnicas Relacionadas</h4>
                <div class="related-techniques">
                    ${technique.relatedTechniques.map(tech => 
                        `<span class="related-technique-tag" data-id="${tech}">${techniquesData[tech]?.name || tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        $('.technique-detail-content').html(modalContent);
        $('#technique-modal').fadeIn(300);
    }

    // Event listeners para el modal
    $('.techniques-grid').on('click', '.details-btn', function() {
        const id = $(this).closest('.technique-card').data('id');
        showTechniqueDetails(id);
    });

    $('.close-modal').click(function() {
        $('#technique-modal').fadeOut(300);
    });

    $(window).click(function(e) {
        if ($(e.target).is('#technique-modal')) {
            $('#technique-modal').fadeOut(300);
        }
    });

    // Event listener para técnicas relacionadas en el modal
    $('.technique-detail-content').on('click', '.related-technique-tag', function() {
        const id = $(this).data('id');
        showTechniqueDetails(id);
    });

    // Cargar técnicas inicialmente
    filterTechniques();
});
