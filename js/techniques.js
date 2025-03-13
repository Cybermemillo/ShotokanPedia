// Base de datos de técnicas de karate Shotokan
const techniquesData = {
    // DACHI WAZA - POSICIONES BAJAS
    'zenkutsu-dachi': {
        name: 'Zenkutsu Dachi',
        japanese: '前屈立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'basic',
        description: 'Posición adelantada, o de ataque, Posición del arquero.',
        details: [
            'Dimensiones: Anchura = 1 cadera; Longitud = 2 caderas',
            'Colocación de las piernas: pies paralelos apoyándose la planta completa de cada pie. Rodilla adelantada flexionada y pierna atrasada estirada.',
            'Distribución del peso: 60% del peso en la pierna adelantada y 40% en la atrasada.',
            'Cadera: hacia delante con ayuda de la pierna de atrás',
            'Aplicación: normalmente golpes directos, aunque también defensas, patadas y golpes circulares.'
        ],
        tags: ['posición', 'básico', 'adelantada', 'ataque']
    },
    'kokutsu-dachi': {
        name: 'Kokutsu Dachi',
        japanese: '後屈立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'intermediate',
        description: 'Posición retrasada, o de defensa en retroceso.',
        details: [
            'Dimensiones: Anchura = 0; Longitud = 2 caderas',
            'Colocación de las piernas: pies en línea, el de delante en la dirección de la técnica y el de detrás perpendicular a ésta.',
            'Distribución del peso: 60% del peso en la pierna atrasada y 40% en la pierna adelantada.',
            'Cadera: hacia atrás con ayuda de la pierna adelantada',
            'Aplicación: posición típica de defensas.'
        ],
        tags: ['posición', 'intermedio', 'retrasada', 'defensa']
    },
    'kiba-dachi': {
        name: 'Kiba Dachi',
        japanese: '騎馬立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'basic',
        description: 'Posición del jinete.',
        details: [
            'Dimensiones: Anchura = 2 caderas; Longitud = 0',
            'Colocación de las piernas: piernas abiertas lateralmente, rodillas flexionadas en ángulo recto, pies paralelos',
            'Distribución del peso: 50% del peso en cada pierna',
            'Cadera: hacia delante',
            'Aplicación: variada (ataques, defensas, patadas)'
        ],
        tags: ['posición', 'básico', 'estable', 'lateral']
    },
    
    // UKE WAZA - DEFENSAS CON UN BRAZO
    'gedan-barai': {
        name: 'Gedan Barai',
        japanese: '下段払い',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'basic',
        height: 'gedan',
        description: 'Defensa baja hacia el exterior para defender patadas u otros ataques gedan.',
        details: [
            'Se realiza un movimiento descendente y hacia el exterior con el antebrazo',
            'La mano que ejecuta parte desde el hombro contrario',
            'Contacto con la parte exterior del antebrazo'
        ],
        tags: ['defensa', 'básico', 'bajo', 'barrido']
    },
    'age-uke': {
        name: 'Age Uke',
        japanese: '上げ受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'basic',
        height: 'jodan',
        description: 'Defensa alta hacia arriba para bloquear ataques dirigidos a la cabeza.',
        details: [
            'Movimiento ascendente con rotación del antebrazo',
            'Contacto con la parte exterior del antebrazo',
            'Posición final con el puño a la altura de la frente'
        ],
        tags: ['defensa', 'básico', 'alto', 'ascendente']
    },
    
    // TSUKI WAZA - GOLPES DIRECTOS
    'oi-tsuki': {
        name: 'Oi Tsuki',
        japanese: '追い突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'basic', 
        height: ['chudan', 'jodan'],
        description: 'Golpe de puño con la mano de la pierna adelantada.',
        details: [
            'Se avanza con la pierna y se golpea con el puño del mismo lado',
            'La cadera gira completamente hacia el frente',
            'El puño gira al final del movimiento quedando los nudillos hacia abajo'
        ],
        tags: ['ataque', 'puño', 'básico', 'directo']
    },
    'gyaku-tsuki': {
        name: 'Gyaku Tsuki',
        japanese: '逆突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'basic', 
        height: ['chudan', 'jodan'],
        description: 'Golpe de puño con la mano contraria a la pierna adelantada.',
        details: [
            'Se golpea con el puño contrario a la pierna adelantada',
            'Utiliza la rotación de la cadera para generar potencia',
            'Considerada una de las técnicas más efectivas del karate'
        ],
        tags: ['ataque', 'puño', 'básico', 'directo']
    },
    
    // UCHI WAZA - GOLPES INDIRECTOS
    'shuto-uchi': {
        name: 'Shuto Uchi',
        japanese: '手刀打ち',
        category: 'uchi-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el canto externo de la mano.',
        details: [
            'Se golpea con el canto externo de la mano (lado del meñique)',
            'Utiliza un movimiento circular desde el hombro opuesto',
            'La mano permanece extendida con los dedos juntos'
        ],
        tags: ['ataque', 'indirecto', 'mano abierta', 'circular']
    },
    
    // KERI WAZA - PATADAS
    'mae-geri': {
        name: 'Mae Geri',
        japanese: '前蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'basic',
        height: ['chudan', 'jodan'],
        description: 'Patada frontal directa.',
        details: [
            'Se levanta la rodilla y se extiende la pierna hacia adelante',
            'Se golpea con la parte anterior de la planta del pie (koshi) o con los dedos del pie',
            'Puede ser keage (ascendente y percutante) o kekomi (penetrante)'
        ],
        tags: ['patada', 'básico', 'frontal', 'directa']
    },
    'yoko-geri': {
        name: 'Yoko Geri',
        japanese: '横蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Patada lateral.',
        details: [
            'La rodilla se levanta y luego se extiende la pierna hacia el lado',
            'Se golpea con el canto externo del pie (sokuto)',
            'Existen dos variantes principales: keage (ascendente) y kekomi (penetrante)'
        ],
        tags: ['patada', 'intermedio', 'lateral', 'potente']
    }
    // Más técnicas serían agregadas siguiendo el mismo patrón
};

// Función para crear una tarjeta de técnica
function createTechniqueCard(id, technique) {
    return `
        <div class="technique-card" data-id="${id}" data-category="${technique.category}" data-subcategory="${technique.subcategory}" data-level="${technique.level}">
            <div class="technique-header">
                <h3>${technique.name} <span class="japanese">${technique.japanese}</span></h3>
            </div>
            <div class="technique-content">
                <p>${technique.description}</p>
                <div class="technique-tags">
                    ${technique.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="technique-footer">
                <button class="details-btn">
                    Ver detalles <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}

// Inicialización cuando el documento está listo
$(document).ready(function() {
    // Cargar técnicas inicialmente
    cargarTecnicas();
    
    // Filtros de categoría
    $('.filter-btn[data-category]').click(function() {
        const category = $(this).data('category');
        if (category === 'all') {
            $('.technique-category').show();
        } else {
            $('.technique-category').hide();
            $(`#${category}`).show();
        }
    });
    
    // Filtros de subcategoría
    $('.filter-btn[data-subcategory]').click(function() {
        const subcategory = $(this).data('subcategory');
        $('.filter-btn[data-subcategory]').removeClass('active');
        $(this).addClass('active');
        
        $('.subcategory').hide();
        $(`.subcategory h3:contains('${getSubcategoryTitle(subcategory)}')`).parent().show();
    });
    
    // Filtros de nivel
    $('.filter-btn[data-level]').click(function() {
        const level = $(this).data('level');
        $('.filter-btn[data-level]').removeClass('active');
        $(this).addClass('active');
        
        filtrarPorNivel(level);
    });
    
    // Ver detalles de la técnica
    $(document).on('click', '.details-btn', function() {
        const id = $(this).closest('.technique-card').data('id');
        mostrarDetallesTecnica(id);
    });
    
    // Cerrar modal
    $('.close-modal').click(function() {
        $('#technique-modal').fadeOut();
    });
});

// Cargar todas las técnicas en sus respectivas secciones
function cargarTecnicas() {
    Object.entries(techniquesData).forEach(([id, technique]) => {
        const card = createTechniqueCard(id, technique);
        const container = $(`#${technique.category} .subcategory:contains('${getSubcategoryTitle(technique.subcategory)}') .techniques-grid`);
        if (container.length) {
            container.append(card);
        }
    });
}

// Filtrar técnicas por nivel
function filtrarPorNivel(level) {
    $('.technique-card').each(function() {
        const cardLevel = $(this).data('level');
        if (level === cardLevel || level === 'all') {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Mostrar detalles de una técnica en el modal
function mostrarDetallesTecnica(id) {
    const technique = techniquesData[id];
    if (!technique) return;
    
    let heightDisplay = '';
    if (Array.isArray(technique.height)) {
        heightDisplay = technique.height.join(', ');
    } else if (technique.height) {
        heightDisplay = technique.height;
    }
    
    const modalContent = `
        <div class="technique-detail-header">
            <h2>${technique.name}</h2>
            <div class="japanese">${technique.japanese}</div>
            <div class="technique-tags">
                <span class="tag">Categoría: ${getCategoryName(technique.category)}</span>
                <span class="tag">Nivel: ${getLevelName(technique.level)}</span>
                ${heightDisplay ? `<span class="tag">Altura: ${heightDisplay}</span>` : ''}
            </div>
        </div>
        
        <div class="technique-detail-section">
            <h3>Descripción</h3>
            <p>${technique.description}</p>
        </div>
        
        <div class="technique-detail-grid">
            <div class="technique-detail-section">
                <h3>Características principales</h3>
                <ul class="details-list">
                    ${technique.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    $('.technique-detail-content').html(modalContent);
    $('#technique-modal').fadeIn();
}

// Funciones auxiliares para obtener nombres legibles
function getSubcategoryTitle(subcategory) {
    const titles = {
        'posicion-baja': 'Posiciones Bajas',
        'posicion-alta': 'Posiciones Altas',
        'un-brazo': 'Defensas con Un Brazo',
        'doble': 'Defensas con Ambos Brazos',
        'mano-cerrada': 'Con el Puño Cerrado',
        'mano-abierta': 'Con la Mano Abierta',
        'basicas': 'Tipos de Patadas'
    };
    return titles[subcategory] || subcategory;
}

function getCategoryName(category) {
    const categories = {
        'dachi-waza': 'Posiciones',
        'uke-waza': 'Defensas',
        'tsuki-waza': 'Golpes Directos',
        'uchi-waza': 'Golpes Indirectos',
        'keri-waza': 'Patadas'
    };
    return categories[category] || category;
}

function getLevelName(level) {
    const levels = {
        'basic': 'Básico',
        'intermediate': 'Intermedio',
        'advanced': 'Avanzado'
    };
    return levels[level] || level;
}
