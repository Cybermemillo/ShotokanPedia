// JavaScript principal para ShotokanPedia

$(document).ready(function() {
    // Menú responsive
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('active');
    });

    // Smooth scrolling para enlaces internos
    $('a[href*="#"]').on('click', function(e) {
        if(this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Cambiar clase activa en la navegación
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop();
        
        // Animación de aparición de elementos al hacer scroll
        $('.feature, .section-title').each(function() {
            const elemPos = $(this).offset().top;
            if (scrollPos + $(window).height() * 0.8 > elemPos) {
                $(this).addClass('visible');
            }
        });
    });
});

// Añadir funcionalidad para mostrar información sobre tipos de patadas
$(document).ready(function() {
    // Función para mostrar/ocultar las diferentes clasificaciones de patadas
    $('.classification-group h4').click(function() {
        $(this).next('ul').slideToggle();
        $(this).toggleClass('active');
    });
    
    // Inicializar la primera clasificación como visible
    $('.classification-group ul:first').show();
    $('.classification-group h4:first').addClass('active');
});

// Función para cargar contenido dinámicamente (ejemplo)
function loadContent(section) {
    // Esta función podría usarse para cargar contenido sin recargar la página
    console.log(`Cargando contenido para: ${section}`);
}

// Objeto con la información de todos los katas
const katasInfo = {
    'heian-shodan': {
        title: 'Heian Shodan',
        kanji: '平安初段',
        level: '5º Kyu',
        movements: 21,
        duration: '40-50s',
        meaning: 'Paz y Tranquilidad, Primer Nivel',
        description: 'Desarrollado por el Maestro Gichin Funakoshi como una simplificación del kata Kanku Dai para facilitar el aprendizaje de los principiantes.',
        features: [
            { icon: 'fa-fist-raised', text: 'Técnicas básicas de bloqueo y golpeo' },
            { icon: 'fa-horse', text: 'Énfasis en zenkutsu-dachi (posición frontal)' },
            { icon: 'fa-directions', text: 'Patrón de movimiento en forma de \'H\' (Embusen)' }
        ],
        bunkai: [
            { name: 'Gedan Barai', description: 'Bloqueo bajo contra patada, o barrido de pierna' },
            { name: 'Oi-Zuki', description: 'Golpe directo en avance para crear distancia' }
        ],
        videoId: 'c9a9jfl2xlU'
    },
    'taikyoku-shodan': {
        title: 'Taikyoku Shodan',
        kanji: '太極初段',
        level: '8º Kyu',
        movements: 20,
        duration: '40-45s',
        meaning: 'Primer Nivel del Curso Supremo',
        description: 'Desarrollado por el Maestro Gichin Funakoshi como kata introductorio para principiantes. El término "Taikyoku" deriva del concepto chino "Tai Chi" (太極), que representa el principio supremo del universo.',
        features: [
            { icon: 'fa-fist-raised', text: 'Técnicas básicas: solo gedan-barai y oi-zuki' },
            { icon: 'fa-horse', text: 'Posición fundamental: zenkutsu-dachi' },
            { icon: 'fa-square', text: 'Patrón de movimiento en forma de \'I\' (Embusen)' }
        ],
        bunkai: [
            { name: 'Gedan Barai', description: 'Defensa básica contra ataque bajo o agarre' },
            { name: 'Oi-Zuki', description: 'Contraataque básico tras la defensa' }
        ],
        videoId: '87AP2ChcgVM'
    },
    'taikyoku-nidan': {
        title: 'Taikyoku Nidan',
        kanji: '太極二段',
        level: '8º Kyu',
        movements: 20,
        duration: '40-45s',
        meaning: 'Segundo Nivel del Curso Supremo',
        description: 'Es la segunda kata de la serie Taikyoku, introduciendo variaciones sobre el primer nivel. Mantiene la misma estructura de movimiento que Taikyoku Shodan pero reemplaza los golpes directos por golpes de revés (uraken-uchi).',
        features: [
            { icon: 'fa-hand-back-fist', text: 'Técnica principal: uraken-uchi (golpe con el revés del puño)' },
            { icon: 'fa-horse', text: 'Posición fundamental: zenkutsu-dachi' },
            { icon: 'fa-square', text: 'Patrón de movimiento en forma de \'I\' (Embusen)' }
        ],
        bunkai: [
            { name: 'Gedan Barai', description: 'Defensa baja seguida de contraataque' },
            { name: 'Uraken-Uchi', description: 'Golpe circular con el dorso del puño a la sien o mandíbula' }
        ],
        videoId: 'YRl6y7WkfXA'
    },
    'taikyoku-sandan': {
        title: 'Taikyoku Sandan',
        kanji: '太極三段',
        level: '8º Kyu',
        movements: 20,
        duration: '40-45s',
        meaning: 'Tercer Nivel del Curso Supremo',
        description: 'La tercera y última kata de la serie Taikyoku. Introduce el bloqueo alto (age-uke) manteniendo la estructura básica de las anteriores, completando así la introducción a los bloqueos fundamentales del karate.',
        features: [
            { icon: 'fa-shield', text: 'Técnica principal: age-uke (bloqueo ascendente)' },
            { icon: 'fa-horse', text: 'Posición fundamental: zenkutsu-dachi' },
            { icon: 'fa-square', text: 'Patrón de movimiento en forma de \'I\' (Embusen)' }
        ],
        bunkai: [
            { name: 'Age-Uke', description: 'Defensa contra ataques descendentes a la cabeza' },
            { name: 'Gyaku-Zuki', description: 'Contraataque con puño contrario a la pierna adelantada' }
        ],
        videoId: 'FDYZYDP_gOc'
    },
    'heian-nidan': {
        title: 'Heian Nidan',
        kanji: '平安二段',
        level: '4º Kyu',
        movements: 26,
        duration: '40-50s',
        meaning: 'Paz y Tranquilidad, Segundo Nivel',
        description: 'Segundo kata de la serie Heian, introduce técnicas más complejas como el uraken-uchi y el movimiento circular de cadera en las defensas. Es el primer kata que incluye patadas (mae-geri).',
        features: [
            { icon: 'fa-hand-back-fist', text: 'Introducción de uraken-uchi (golpe con el revés del puño)' },
            { icon: 'fa-foot-alt', text: 'Primera aparición de mae-geri (patada frontal)' },
            { icon: 'fa-arrows-spin', text: 'Énfasis en el movimiento circular de cadera' }
        ],
        bunkai: [
            { name: 'Uraken-Uchi', description: 'Golpe circular al rostro tras bloqueo' },
            { name: 'Mae-Geri', description: 'Patada frontal como contraataque' }
        ],
        videoId: '4lVVkKel4dc'
    },

    'heian-sandan': {
        title: 'Heian Sandan',
        kanji: '平安三段',
        level: '4º Kyu',
        movements: 20,
        duration: '40-50s',
        meaning: 'Paz y Tranquilidad, Tercer Nivel',
        description: 'Tercer kata de la serie Heian, caracterizado por sus movimientos rápidos y cambios de ritmo. Introduce técnicas de defensa y ataque simultáneos (morote-uke) y movimientos de transición complejos.',
        features: [
            { icon: 'fa-hands', text: 'Morote-uke (bloqueo reforzado) y técnicas simultáneas' },
            { icon: 'fa-bolt', text: 'Cambios de ritmo y velocidad (técnicas rápidas y lentas)' },
            { icon: 'fa-arrows-up-down', text: 'Variaciones en el nivel de las técnicas' }
        ],
        bunkai: [
            { name: 'Morote-Uke', description: 'Defensa contra ataques potentes o agarres' },
            { name: 'Nukite', description: 'Contraataque con punta de dedos a zonas vitales' }
        ],
        videoId: 'CmUmAdxfO_o'
    },

    'heian-yondan': {
        title: 'Heian Yondan',
        kanji: '平安四段',
        level: '3º Kyu',
        movements: 27,
        duration: '40-50s',
        meaning: 'Paz y Tranquilidad, Cuarto Nivel',
        description: 'Cuarto kata de la serie Heian, considerado uno de los más dinámicos. Introduce técnicas avanzadas como defensas a diferentes niveles, patadas laterales y movimientos de giro complejos.',
        features: [
            { icon: 'fa-person-running', text: 'Kata más dinámico con giros y pivotes' },
            { icon: 'fa-foot-alt', text: 'Yoko-geri keage y kekomi (patadas laterales)' },
            { icon: 'fa-layer-group', text: 'Defensas a múltiples niveles' }
        ],
        bunkai: [
            { name: 'Yoko-Geri', description: 'Patadas laterales contra ataques circulares' },
            { name: 'Tate-Shuto-Uke', description: 'Defensa con mano de sable vertical contra ataques descendentes' }
        ],
        videoId: 'TtkkIxL29po'
    },

    'heian-godan': {
        title: 'Heian Godan',
        kanji: '平安五段',
        level: '3º Kyu',
        movements: 23,
        duration: '40-50s',
        meaning: 'Paz y Tranquilidad, Quinto Nivel',
        description: 'El último y más avanzado kata de la serie Heian, caracterizado por sus técnicas de nivel superior y movimientos complejos. Introduce el salto (nidan-geri) y las técnicas de mano abierta (mikazuki-geri).',
        features: [
            { icon: 'fa-person-falling', text: 'Técnicas de salto y giros complejos' },
            { icon: 'fa-hand-peace', text: 'Defensas con mano abierta (shuto-uke)' },
            { icon: 'fa-arrows-cross', text: 'Combinaciones de técnicas avanzadas' }
        ],
        bunkai: [
            { name: 'Nidan-Geri', description: 'Patada doble en salto contra dos oponentes' },
            { name: 'Mikazuki-Geri', description: 'Patada circular para crear distancia o desviar' }
        ],
        videoId: 'La_5ZsEQht0'
    },

    'tekki-shodan': {
        title: 'Tekki Shodan',
        kanji: '鉄騎初段',
        level: '3º Kyu',
        movements: 29,
        duration: '40-50s',
        meaning: 'Jinete de Hierro, Primer Nivel',
        description: 'Primer kata de la serie Tekki, ejecutado completamente en kiba-dachi (posición del jinete). Originalmente llamado Naihanchi, este kata enfatiza las técnicas de corta distancia y el fortalecimiento de las piernas.',
        features: [
            { icon: 'fa-horse', text: 'Posición única: kiba-dachi (posición del jinete)' },
            { icon: 'fa-arrows-left-right', text: 'Movimientos laterales y defensas compactas' },
            { icon: 'fa-hand-fist', text: 'Técnicas de corta distancia y contraataques' }
        ],
        bunkai: [
            { name: 'Kiba-Dachi', description: 'Posición estable para defensas y contraataques' },
            { name: 'Yoko-Uchi', description: 'Golpes laterales desde posición estática' }
        ],
        videoId: 'gatI8x9z3d4'
    },

    'bassai-dai': {
        title: 'Bassai Dai',
        kanji: '披塞大',
        level: '2º Kyu',
        movements: 42,
        duration: '60s',
        meaning: 'Penetrar la Fortaleza',
        description: 'Uno de los katas más importantes del estilo Shotokan. Representa la ruptura de una fortaleza o penetrar a través de una defensa. Se caracteriza por sus transiciones rápidas entre técnicas potentes y movimientos explosivos.',
        features: [
            { icon: 'fa-bolt', text: 'Cambios dinámicos de dirección y ritmo' },
            { icon: 'fa-mountain', text: 'Técnicas potentes y movimientos explosivos' },
            { icon: 'fa-shield-alt', text: 'Énfasis en defensas y contraataques inmediatos' }
        ],
        bunkai: [
            { name: 'Yama-Zuki', description: 'Doble golpe simultáneo a nivel alto y bajo' },
            { name: 'Kosa-Uke', description: 'Defensa cruzada contra agarres y ataques frontales' }
        ],
        videoId: 'NtiK0dIg-_I'
    },

    'kanku-dai': {
        title: 'Kanku Dai',
        kanji: '観空大',
        level: '2º Kyu',
        movements: 65,
        duration: '90s',
        meaning: 'Contemplar el Cielo',
        description: 'El kata más largo de los Sentei Kata, comienza con las manos elevadas formando un triángulo mirando al cielo. Contiene una amplia variedad de técnicas y era el kata favorito del Maestro Funakoshi.',
        features: [
            { icon: 'fa-star', text: 'Movimientos que combinan suavidad y potencia' },
            { icon: 'fa-dharmachakra', text: 'Gran variedad de técnicas y posiciones' },
            { icon: 'fa-wind', text: 'Transiciones fluidas entre movimientos' }
        ],
        bunkai: [
            { name: 'Manji-Uke', description: 'Defensa simultánea a nivel alto y bajo' },
            { name: 'Kagi-Zuki', description: 'Golpe en gancho desde posición lateral' }
        ],
        videoId: 'p6pEyTYhuBg'
    },

    'jion': {
        title: 'Jion',
        kanji: '慈恩',
        level: '2º Kyu',
        movements: 47,
        duration: '60s',
        meaning: 'Amor y Gratitud',
        description: 'Nombrado por el templo Jion-ji, este kata enfatiza las técnicas básicas ejecutadas con máxima potencia. Se caracteriza por sus movimientos precisos y su ritmo constante.',
        features: [
            { icon: 'fa-fist-raised', text: 'Énfasis en técnicas básicas con máxima potencia' },
            { icon: 'fa-drum', text: 'Ritmo constante y movimientos precisos' },
            { icon: 'fa-square-full', text: 'Patrón de movimiento simétrico y equilibrado' }
        ],
        bunkai: [
            { name: 'Jiju-Uke', description: 'Secuencia de defensas cruzadas' },
            { name: 'Soto-Uke/Gyaku-Zuki', description: 'Combinación de defensa externa y contraataque' }
        ],
        videoId: 'JSr4Z1oDq3M'
    },

    'enpi': {
        title: 'Enpi',
        kanji: '燕飛',
        level: '2º Kyu',
        movements: 37,
        duration: '45s',
        meaning: 'Vuelo de la Golondrina',
        description: 'Kata que imita los movimientos de una golondrina, con cambios rápidos de altura y dirección. Se caracteriza por sus técnicas de ataque y defensa en distintos niveles y sus movimientos explosivos.',
        features: [
            { icon: 'fa-dove', text: 'Cambios rápidos de nivel y dirección' },
            { icon: 'fa-bolt', text: 'Técnicas explosivas y veloces' },
            { icon: 'fa-arrows-up-down', text: 'Transiciones entre técnicas altas y bajas' }
        ],
        bunkai: [
            { name: 'Tate-Uraken', description: 'Golpe ascendente con el dorso del puño' },
            { name: 'Tobikomi-Uraken', description: 'Ataque penetrante con uraken' }
        ],
        videoId: '6IOVxeSxI6c'
    },

    'hangetsu': {
        title: 'Hangetsu',
        kanji: '半月',
        level: '2º Kyu',
        movements: 41,
        duration: '55s',
        meaning: 'Media Luna',
        description: 'Kata caracterizado por su respiración específica y movimientos lentos y controlados. Enfatiza el desarrollo de la potencia interna y el control de la respiración.',
        features: [
            { icon: 'fa-lungs', text: 'Respiración específica (hangetsu breathing)' },
            { icon: 'fa-circle-half-stroke', text: 'Movimientos en patrón de media luna' },
            { icon: 'fa-person-walking', text: 'Desplazamientos lentos y controlados' }
        ],
        bunkai: [
            { name: 'Hangetsu-Dachi', description: 'Posición de media luna para control y potencia' },
            { name: 'Uchi-Uke/Gyaku-Zuki', description: 'Combinación de bloqueo interior y contraataque' }
        ],
        videoId: 'dsOBD_KRZNo'
    },

    'tekki-nidan': {
        title: 'Tekki Nidan',
        kanji: '鉄騎二段',
        level: '2º Kyu',
        movements: 24,
        duration: '45s',
        meaning: 'Jinete de Hierro, Segundo Nivel',
        description: 'Segunda kata de la serie Tekki, manteniendo el trabajo en kiba-dachi pero introduciendo técnicas más avanzadas y combinaciones más complejas.',
        features: [
            { icon: 'fa-horse', text: 'Trabajo exclusivo en kiba-dachi' },
            { icon: 'fa-hand-fist', text: 'Técnicas de contraataque avanzadas' },
            { icon: 'fa-arrows-left-right', text: 'Mayor variedad de técnicas laterales' }
        ],
        bunkai: [
            { name: 'Morote-Zuki', description: 'Doble golpe simultáneo desde kiba-dachi' },
            { name: 'Kagi-Zuki', description: 'Golpe en gancho desde posición lateral' }
        ],
        videoId: 'mI7dAWS-MvA'
    },

    'tekki-sandan': {
        title: 'Tekki Sandan',
        kanji: '鉄騎三段',
        level: '2º Kyu',
        movements: 26,
        duration: '45s',
        meaning: 'Jinete de Hierro, Tercer Nivel',
        description: 'Kata final de la serie Tekki, representa el nivel más avanzado de las técnicas en kiba-dachi. Incluye combinaciones complejas y técnicas de defensa personal avanzadas.',
        features: [
            { icon: 'fa-horse', text: 'Técnicas avanzadas en kiba-dachi' },
            { icon: 'fa-people-arrows', text: 'Defensas contra múltiples atacantes' },
            { icon: 'fa-hand-back-fist', text: 'Combinaciones complejas de contraataque' }
        ],
        bunkai: [
            { name: 'Hiza-Geri', description: 'Defensas y ataques con la rodilla' },
            { name: 'Morote-Uke', description: 'Bloqueos reforzados desde kiba-dachi' }
        ],
        videoId: 'MI7kfWcKGWk'
    },

    'bassai-sho': {
        title: 'Bassai Sho',
        kanji: '披塞小',
        level: '1º Dan',
        movements: 27,
        duration: '60s',
        meaning: 'Penetrar la Fortaleza Menor',
        description: 'Versión más refinada y avanzada de Bassai Dai. Aunque más corto en duración, incorpora técnicas más sofisticadas y requiere mayor control y precisión técnica.',
        features: [
            { icon: 'fa-feather', text: 'Movimientos más sutiles y refinados' },
            { icon: 'fa-hand-peace', text: 'Énfasis en técnicas de mano abierta' },
            { icon: 'fa-arrows-to-circle', text: 'Combinaciones circulares y lineales' }
        ],
        bunkai: [
            { name: 'Morote-Uke', description: 'Defensa doble contra ataques circulares' },
            { name: 'Yama-Tsuki', description: 'Golpes simultáneos a diferentes niveles' }
        ],
        videoId: 'wjG34qgZhOk'
    },

    'kanku-sho': {
        title: 'Kanku Sho',
        kanji: '観空小',
        level: '1º Dan',
        movements: 48,
        duration: '60s',
        meaning: 'Contemplar el Cielo Menor',
        description: 'Versión más corta pero técnicamente más exigente que Kanku Dai. Incorpora elementos únicos como la defensa con codo (empi-uke) y requiere gran control del centro de gravedad.',
        features: [
            { icon: 'fa-circle-nodes', text: 'Técnicas circulares avanzadas' },
            { icon: 'fa-person-walking', text: 'Cambios rápidos de dirección' },
            { icon: 'fa-hand-back-fist', text: 'Combinación de técnicas tradicionales y únicas' }
        ],
        bunkai: [
            { name: 'Empi-Uke', description: 'Defensa con codo contra ataques cercanos' },
            { name: 'Nidan-Geri', description: 'Patada doble en salto con giro' }
        ],
        videoId: 'rfj66KZBEdQ'
    },

    'nijushiho': {
        title: 'Nijushiho',
        kanji: '二十四步',
        level: '1º Dan',
        movements: 24,
        duration: '60s',
        meaning: 'Veinticuatro Pasos',
        description: 'Kata caracterizado por sus técnicas de control y agarres, con énfasis en movimientos circulares y cambios de dirección. Su nombre deriva de sus 24 movimientos principales.',
        features: [
            { icon: 'fa-rotate', text: 'Movimientos circulares y espirales' },
            { icon: 'fa-hands-holding', text: 'Técnicas de control y proyección' },
            { icon: 'fa-compass', text: 'Cambios precisos de dirección' }
        ],
        bunkai: [
            { name: 'Tsukami-Uke', description: 'Técnicas de agarre y control articular' },
            { name: 'Kake-Uke', description: 'Bloqueos en forma de gancho' }
        ],
        videoId: 'EcDQB6aVuEw'
    },

    'sochin': {
        title: 'Sochin',
        kanji: '壯鎭',
        level: '1º Dan',
        movements: 41,
        duration: '60s',
        meaning: 'Preservar la Paz',
        description: 'Kata caracterizado por el uso de la posición sochin-dachi y movimientos potentes. Enfatiza la estabilidad y la fuerza, combinando técnicas lentas y explosivas.',
        features: [
            { icon: 'fa-mountain', text: 'Énfasis en sochin-dachi (posición de fuerza y calma)' },
            { icon: 'fa-compress-arrows-alt', text: 'Combinación de técnicas lentas y explosivas' },
            { icon: 'fa-dumbbell', text: 'Movimientos que desarrollan la potencia interna' }
        ],
        bunkai: [
            { name: 'Sochin-Dachi', description: 'Posición de base para técnicas de empuje y bloqueo' },
            { name: 'Tettsui-Uchi', description: 'Golpes de martillo desde diferentes ángulos' }
        ],
        videoId: 'W-b3iwgJHM4'
    },

    'gojushiho-dai': {
        title: 'Gojushiho Dai',
        kanji: '五十四步大',
        level: '1º Dan',
        movements: 54,
        duration: '70s',
        meaning: 'Cincuenta y Cuatro Pasos Mayor',
        description: 'Kata superior que contiene 54 movimientos, caracterizado por sus técnicas circulares y defensas de mano abierta. Requiere gran control del equilibrio y precisión técnica.',
        features: [
            { icon: 'fa-circle-notch', text: 'Técnicas circulares avanzadas' },
            { icon: 'fa-hand-paper', text: 'Énfasis en técnicas de mano abierta' },
            { icon: 'fa-balance-scale', text: 'Control preciso del equilibrio' }
        ],
        bunkai: [
            { name: 'Shuto-Uke', description: 'Defensas circulares con mano de sable' },
            { name: 'Hiza-Geri', description: 'Técnicas de rodilla y control del oponente' }
        ],
        videoId: '7nt1w865DxI'
    },

    'gojushiho-sho': {
        title: 'Gojushiho Sho',
        kanji: '五十四步小',
        level: '2º Dan',
        movements: 54,
        duration: '70s',
        meaning: 'Cincuenta y Cuatro Pasos Menor',
        description: 'Variante más refinada de Gojushiho Dai, con los mismos 54 movimientos pero ejecutados de manera más sutil. Enfatiza la precisión y la velocidad sobre la potencia.',
        features: [
            { icon: 'fa-feather-alt', text: 'Movimientos más refinados y precisos' },
            { icon: 'fa-bolt', text: 'Mayor velocidad en las transiciones' },
            { icon: 'fa-wind', text: 'Técnicas fluidas y elegantes' }
        ],
        bunkai: [
            { name: 'Kake-Uke', description: 'Bloqueos en forma de gancho' },
            { name: 'Hasami-Uke', description: 'Defensas en tijera a diferentes niveles' }
        ],
        videoId: 'lbmOlFU65sI'
    },

    'chinte': {
        title: 'Chinte',
        kanji: '珍手',
        level: '2º Dan',
        movements: 32,
        duration: '45s',
        meaning: 'Manos Extrañas/Raras',
        description: 'Kata que contiene movimientos poco comunes y técnicas circulares únicas. Su nombre hace referencia a las técnicas inusuales que contiene, incluyendo movimientos que imitan aspectos de las artes marciales chinas.',
        features: [
            { icon: 'fa-hands', text: 'Técnicas circulares y poco comunes' },
            { icon: 'fa-yin-yang', text: 'Influencia de las artes marciales chinas' },
            { icon: 'fa-dharmachakra', text: 'Movimientos en espiral y rotaciones' }
        ],
        bunkai: [
            { name: 'Mawashi-Uke', description: 'Defensas circulares contra múltiples ataques' },
            { name: 'Otoshi-Uke', description: 'Bloqueos descendentes con control del oponente' }
        ],
        videoId: 'DeiRayvmWPA'
    },

    'unsu': {
        title: 'Unsu',
        kanji: '雲手',
        level: '3º Dan',
        movements: 48,
        duration: '60s',
        meaning: 'Manos de Nube',
        description: 'Considerado uno de los katas más avanzados del estilo Shotokan. Sus movimientos fluidos imitan las nubes en movimiento, combinando técnicas de defensa y ataque con desplazamientos únicos y giros acrobáticos.',
        features: [
            { icon: 'fa-cloud', text: 'Movimientos fluidos como las nubes' },
            { icon: 'fa-person-falling', text: 'Técnicas acrobáticas y giros en el aire' },
            { icon: 'fa-hurricane', text: 'Cambios rápidos de dirección y nivel' }
        ],
        bunkai: [
            { name: 'Falling Techniques', description: 'Defensas y contraataques desde posición de caída' },
            { name: 'Spinning Defense', description: 'Defensas giratorias contra múltiples atacantes' }
        ],
        videoId: '6EPYsquJ5kQ'
    },

    'meikyo': {
        title: 'Meikyo',
        kanji: '明鏡',
        level: '2º Dan',
        movements: 33,
        duration: '50s',
        meaning: 'Espejo Brillante',
        description: 'Kata que representa la claridad mental, como un espejo que refleja la realidad sin distorsiones. Se caracteriza por sus movimientos lentos y controlados, alternados con técnicas explosivas.',
        features: [
            { icon: 'fa-mirror', text: 'Movimientos simétricos y equilibrados' },
            { icon: 'fa-yin-yang', text: 'Contraste entre suavidad y potencia' },
            { icon: 'fa-arrows-up-down', text: 'Cambios de nivel y dirección precisos' }
        ],
        bunkai: [
            { name: 'Nami-Gaeshi', description: 'Barridos y técnicas de desequilibrio' },
            { name: 'Kaisho-Ken', description: 'Técnicas de mano abierta en diferentes ángulos' }
        ],
        videoId: '3CGMOnM3poQ'
    },

    'wankan': {
        title: 'Wankan',
        kanji: '王冠',
        level: '2º Dan',
        movements: 24,
        duration: '45s',
        meaning: 'Corona Real',
        description: 'El kata más corto del estilo Shotokan, pero no por ello menos exigente. Originario de Okinawa, se caracteriza por sus técnicas compactas y movimientos circulares únicos.',
        features: [
            { icon: 'fa-crown', text: 'Técnicas compactas y precisas' },
            { icon: 'fa-circle-notch', text: 'Movimientos circulares característicos' },
            { icon: 'fa-compress', text: 'Énfasis en distancia corta' }
        ],
        bunkai: [
            { name: 'Close Combat', description: 'Técnicas de combate cercano y agarres' },
            { name: 'Circular Blocks', description: 'Defensas circulares y contraataques' }
        ],
        videoId: 'WfSChFnL4_s'
    }
};

// Función para mostrar la información del kata
function showKataInfo(kataId) {
    const kata = katasInfo[kataId];
    if (!kata) return;

    const kataHTML = `
        <div class="container">
            <div class="kata-header scroll-design">
                <div class="scroll-content">
                    <h2 class="kata-title">${kata.title}</h2>
                    <div class="kata-japanese">
                        <span class="kanji">${kata.kanji}</span>
                        <span class="romaji">(${kata.title})</span>
                    </div>
                    <div class="kata-brief">
                        <span class="level">Nivel: ${kata.level}</span>
                        <span class="moves">Movimientos: ${kata.movements}</span>
                        <span class="duration">Duración: ${kata.duration}</span>
                    </div>
                </div>
            </div>

            <div class="kata-content">
                <div class="kata-main-info">
                    <div class="kata-section">
                        <h3>Significado y Origen</h3>
                        <p class="kata-meaning">"${kata.meaning}"</p>
                        <p>${kata.description}</p>
                    </div>

                    <div class="kata-section">
                        <h3>Características Principales</h3>
                        <ul class="kata-features">
                            ${kata.features.map(feature => `
                                <li>
                                    <i class="fas ${feature.icon}"></i>
                                    <span>${feature.text}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div class="kata-section">
                        <h3>Aplicaciones Principales (Bunkai)</h3>
                        <div class="bunkai-grid">
                            ${kata.bunkai.map(b => `
                                <div class="bunkai-item">
                                    <h4>${b.name}</h4>
                                    <p>${b.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="kata-media-section">
                    <div class="kata-video">
                        <h3>Demostración</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${kata.videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#kata-details').html(kataHTML).fadeIn(500);
    
    $('html, body').animate({
        scrollTop: $('#kata-details').offset().top - 100
    }, 800);
}

// Función para cargar la información del kata (ejemplo)
function loadKataInfo(kataId) {
    // En un futuro, esto podría hacer una llamada AJAX para cargar la información
    // Por ahora, solo hace scroll hasta la sección del kata
    const kataSection = $('#' + kataId);
    if (kataSection.length) {
        $('html, body').animate({
            scrollTop: kataSection.offset().top - 100
        }, 800);
    }
}

// Event listeners
$(document).ready(function() {
    // Ocultar la sección de detalles inicialmente
    $('#kata-details').hide();

    // Mostrar/ocultar categorías de katas
    $('.kata-category-btn').click(function() {
        const category = $(this).data('category');
        $('.kata-category-btn').removeClass('active');
        $(this).addClass('active');
        
        $('.kata-grid').hide();
        $(`.${category}-katas`).show();

        // Ocultar los detalles del kata cuando se cambia de categoría
        $('#kata-details').hide();
    });

    // Activar botón de kata seleccionado y mostrar su información
    $('.kata-btn').click(function() {
        $('.kata-btn').removeClass('active');
        $(this).addClass('active');
        
        const kataId = $(this).data('kata');
        showKataInfo(kataId);
    });
});
