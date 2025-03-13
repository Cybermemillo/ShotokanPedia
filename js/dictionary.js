// Diccionario de términos de Karate Shotokan

// Base de datos de términos
const dictionaryTerms = [
    {
        id: "age-uke",
        term: "Age Uke",
        japanese: "上げ受け",
        romaji: "Age Uke",
        meaning: "Defensa ascendente o bloqueo hacia arriba",
        category: "techniques",
        details: "Técnica de defensa que consiste en un movimiento ascendente del brazo para bloquear ataques dirigidos a la parte superior del cuerpo o la cabeza."
    },
    {
        id: "bunkai",
        term: "Bunkai",
        japanese: "分解",
        romaji: "Bunkai",
        meaning: "Análisis y aplicación práctica de los movimientos de un kata",
        category: "concepts",
        details: "Estudio detallado de las técnicas contenidas en un kata para comprender sus aplicaciones reales en situaciones de defensa personal."
    },
    {
        id: "chudan",
        term: "Chudan",
        japanese: "中段",
        romaji: "Chūdan",
        meaning: "Nivel medio (del cuerpo)",
        category: "concepts",
        details: "Término que describe la zona media del cuerpo, aproximadamente desde la cadera hasta los hombros. Las técnicas dirigidas a esta zona se denominan técnicas chudan."
    },
    {
        id: "dojo",
        term: "Dojo",
        japanese: "道場",
        romaji: "Dōjō",
        meaning: "Lugar de entrenamiento, literalmente 'lugar del camino'",
        category: "concepts",
        details: "Espacio dedicado a la práctica y estudio de las artes marciales. Tradicionalmente se considera un lugar sagrado donde se cultiva tanto la técnica como el espíritu."
    }
    // Se pueden agregar más términos siguiendo este formato
];

// Generar alfabeto japonés para el selector
const hiraganaBasic = [
    "あ", "い", "う", "え", "お", 
    "か", "き", "く", "け", "こ", 
    "さ", "し", "す", "せ", "そ", 
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の", 
    "は", "ひ", "ふ", "へ", "ほ", 
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん"
];

// Variables para la paginación
let currentPage = 1;
const termsPerPage = 9;
let filteredTerms = [...dictionaryTerms];

// Inicialización
$(document).ready(function() {
    // Cargar alfabeto japonés
    loadAlphabet();
    
    // Cargar términos iniciales
    updateTermsList();
    
    // Configurar eventos de búsqueda
    $('#term-search').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        filterTerms(searchTerm);
    });
    
    // Configurar filtros de categoría
    $('.category-filter').click(function() {
        $('.category-filter').removeClass('active');
        $(this).addClass('active');
        
        const category = $(this).data('category');
        filterByCategory(category);
    });
    
    // Configurar navegación de páginas
    $('.pagination').on('click', '.page-button:not(.disabled)', function() {
        if ($(this).hasClass('prev')) {
            if (currentPage > 1) currentPage--;
        } else if ($(this).hasClass('next')) {
            if (currentPage < Math.ceil(filteredTerms.length / termsPerPage)) currentPage++;
        } else {
            currentPage = parseInt($(this).text());
        }
        
        updateTermsList();
        updatePagination();
    });
});

// Cargar alfabeto en la interfaz
function loadAlphabet() {
    const grid = $('.alphabet-grid');
    
    // Añadir botón para todos los términos
    grid.append('<button class="alphabet-btn active" data-letter="all">全</button>');
    
    // Añadir botones para cada letra
    hiraganaBasic.forEach(letter => {
        grid.append(`<button class="alphabet-btn" data-letter="${letter}">${letter}</button>`);
    });
    
    // Evento de clic para filtrar por letra
    $('.alphabet-btn').click(function() {
        $('.alphabet-btn').removeClass('active');
        $(this).addClass('active');
        
        const letter = $(this).data('letter');
        filterByLetter(letter);
    });
}

// Filtrar términos por texto de búsqueda
function filterTerms(searchText) {
    if (!searchText) {
        filteredTerms = [...dictionaryTerms];
    } else {
        filteredTerms = dictionaryTerms.filter(term => {
            return term.term.toLowerCase().includes(searchText) || 
                   term.meaning.toLowerCase().includes(searchText) ||
                   term.romaji.toLowerCase().includes(searchText);
        });
    }
    
    currentPage = 1;
    updateTermsList();
    updatePagination();
}

// Filtrar términos por categoría
function filterByCategory(category) {
    if (category === 'all') {
        filteredTerms = [...dictionaryTerms];
    } else {
        filteredTerms = dictionaryTerms.filter(term => term.category === category);
    }
    
    currentPage = 1;
    updateTermsList();
    updatePagination();
}

// Filtrar términos por letra japonesa
function filterByLetter(letter) {
    if (letter === 'all') {
        filteredTerms = [...dictionaryTerms];
    } else {
        filteredTerms = dictionaryTerms.filter(term => {
            // Simplificado para este ejemplo - en la realidad necesitaría una
            // lógica más compleja para filtrar correctamente por kana
            return term.japanese.includes(letter);
        });
    }
    
    currentPage = 1;
    updateTermsList();
    updatePagination();
}

// Actualizar la lista de términos mostrados
function updateTermsList() {
    const grid = $('.terms-grid');
    grid.empty();
    
    const startIndex = (currentPage - 1) * termsPerPage;
    const endIndex = Math.min(startIndex + termsPerPage, filteredTerms.length);
    
    const currentTerms = filteredTerms.slice(startIndex, endIndex);
    
    if (currentTerms.length === 0) {
        grid.append('<p class="no-results">No se encontraron términos que coincidan con tu búsqueda.</p>');
        return;
    }
    
    currentTerms.forEach(term => {
        grid.append(`
            <div class="term-card" data-id="${term.id}">
                <div class="term-header">
                    <h3>${term.term}</h3>
                    <div><span class="term-japanese">${term.japanese}</span> <span class="term-romaji">${term.romaji}</span></div>
                </div>
                <div class="term-content">
                    <p class="term-meaning">${term.meaning}</p>
                    <div class="term-categories">
                        <span class="term-category">${getCategoryLabel(term.category)}</span>
                    </div>
                </div>
            </div>
        `);
    });
    
    // Evento de clic para mostrar detalles (podría expandirse)
    $('.term-card').click(function() {
        const id = $(this).data('id');
        const term = dictionaryTerms.find(t => t.id === id);
        if (term) alert(term.details); // Simple para el ejemplo, se podría implementar un modal
    });
}

// Actualizar los controles de paginación
function updatePagination() {
    const pagination = $('.pagination');
    pagination.empty();
    
    const totalPages = Math.max(1, Math.ceil(filteredTerms.length / termsPerPage));
    
    // Botón Anterior
    const prevBtn = $('<button class="page-button prev">' +
                      '<i class="fas fa-chevron-left"></i> Anterior</button>');
    if (currentPage === 1) prevBtn.addClass('disabled');
    pagination.append(prevBtn);
    
    // Botones de página
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(startPage + maxButtons - 1, totalPages);
    
    if (endPage - startPage + 1 < maxButtons) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const btn = $(`<button class="page-button">${i}</button>`);
        if (i === currentPage) btn.addClass('active');
        pagination.append(btn);
    }
    
    // Botón Siguiente
    const nextBtn = $('<button class="page-button next">' +
                      'Siguiente <i class="fas fa-chevron-right"></i></button>');
    if (currentPage === totalPages) nextBtn.addClass('disabled');
    pagination.append(nextBtn);
}

// Función auxiliar para obtener etiquetas de categorías
function getCategoryLabel(category) {
    const labels = {
        'techniques': 'Técnica',
        'stances': 'Posición',
        'concepts': 'Concepto',
        'commands': 'Comando',
        'counting': 'Conteo'
    };
    return labels[category] || category;
}
