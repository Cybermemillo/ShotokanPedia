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
    'kosa-dachi': {
        name: 'Kosa Dachi',
        japanese: '交差立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'intermediate',
        description: 'Posición de los pies cruzados. También kosha dachi.',
        details: [
            'Dimensiones: Anchura = 0.5 caderas; Longitud = 0',
            'Colocación de las piernas: una pierna flexionada con el pie apoyándose en toda la planta y la otra cruzada por detrás, también flexionada, apoyando sólo la base de los dedos.',
            'Distribución del peso: 65% del peso en la pierna de delante y 35% en la de detrás.',
            'Cadera: neutra, sin forzar.',
            'Aplicación: variada (ataques, defensas).'
        ],
        tags: ['posición', 'intermedio', 'cruzada', 'transición']
    },
    'neko-ashi-dachi': {
        name: 'Neko Ashi Dachi',
        japanese: '猫足立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'intermediate',
        description: 'Posición del gato.',
        details: [
            'Dimensiones: Anchura = 0; Longitud = 0.5 caderas.',
            'Colocación de las piernas: el pie adelantado apoyando la base de los dedos y el atrasado, apoyando toda la planta, girado 45° hacia el exterior.',
            'Distribución del peso: 80% en la pierna atrasada; 20% en la adelantada.',
            'Cadera: neutra y en la dirección del pie atrasado.',
            'Aplicación: variada (ataques, defensas, mae geri).'
        ],
        tags: ['posición', 'intermedio', 'defensa', 'flexibilidad']
    },
    'fudo-dachi': {
        name: 'Fudo Dachi',
        japanese: '不動立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'intermediate',
        description: 'Posición sólida, o del guardián. Intermedia entre zenkutsu dachi y kiba dachi.',
        details: [
            'Dimensiones: Anchura = 1 cadera; Longitud = 2 caderas.',
            'Colocación de las piernas: ambos pies mirando al frente y totalmente apoyados. Rodillas flexionadas.',
            'Distribución del peso: 50% del peso en cada pierna.',
            'Cadera: neutra, sin forzar.',
            'Aplicación: variada (ataques, defensas).'
        ],
        tags: ['posición', 'intermedio', 'estable', 'firme']
    },
    'hangetsu-dachi': {
        name: 'Hangetsu Dachi',
        japanese: '半月立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'advanced',
        description: 'Posición de la media luna. Posición parecida a sanchin dachi pero más amplia.',
        details: [
            'Dimensiones: Anchura = 0.5 caderas; Longitud = 1.5 caderas.',
            'Colocación de las piernas: pies hacia dentro, rodillas ligeramente hacia dentro.',
            'Distribución del peso: equilibrado entre ambas piernas.',
            'Cadera: en tensión, ligeramente hacia arriba.',
            'Aplicación: técnicas de respiración y concentración de energía.'
        ],
        tags: ['posición', 'avanzado', 'equilibrio', 'concentración']
    },
    'shiko-dachi': {
        name: 'Shiko Dachi',
        japanese: '四股立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'intermediate',
        description: 'Posición del luchador de sumo.',
        details: [
            'Dimensiones: Anchura = 2 caderas; Longitud = 0.',
            'Colocación de las piernas: similar a kiba dachi pero con los pies 45° hacia fuera.',
            'Distribución del peso: 50% en cada pierna.',
            'Cadera: baja y firme.',
            'Aplicación: estabilidad para defensas y bloqueos potentes.'
        ],
        tags: ['posición', 'intermedio', 'estable', 'potente']
    },
    'sochin-dachi': {
        name: 'Sochin Dachi',
        japanese: '相振立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-baja',
        level: 'advanced',
        description: 'En la mayoría de los casos, igual que fudo dachi.',
        details: [
            'Dimensiones: Anchura = 1 cadera; Longitud = 2 caderas.',
            'Colocación de las piernas: similar a fudo dachi, con ligeras variaciones según escuela.',
            'Distribución del peso: aproximadamente 50% en cada pierna.',
            'Cadera: firme y centrada.',
            'Aplicación: técnicas de empuje y bloqueo.'
        ],
        tags: ['posición', 'avanzado', 'sólida', 'estable']
    },
    
    // DACHI WAZA - POSICIONES ALTAS
    'heiko-dachi': {
        name: 'Heiko Dachi',
        japanese: '平行立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-alta',
        level: 'basic',
        description: 'Posición con pies paralelos.',
        details: [
            'Sin flexionar las piernas. Pies hacia delante con una anchura igual a las caderas.',
            'Colocación natural y relajada.',
            'Distribución del peso: 50% en cada pierna.',
            'Cadera: relajada y natural.',
            'Aplicación: posición inicial, meditación y ejercicios básicos.'
        ],
        tags: ['posición', 'básico', 'natural', 'inicio']
    },
    'musubi-dachi': {
        name: 'Musubi Dachi',
        japanese: '結び立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-alta',
        level: 'basic',
        description: 'Posición de meditación en pie.',
        details: [
            'Sin flexionar las piernas. Pies juntos 45° hacia fuera.',
            'Talones juntos, puntas separadas.',
            'Distribución del peso: 50% en cada pierna.',
            'Cadera: relajada.',
            'Aplicación: saludo formal, inicio y fin de clase.'
        ],
        tags: ['posición', 'básico', 'formal', 'saludo']
    },
    'heisoku-dachi': {
        name: 'Heisoku Dachi',
        japanese: '閉足立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-alta',
        level: 'basic',
        description: 'Posición de saludo con pies juntos.',
        details: [
            'Sin flexionar las piernas. Pies juntos y hacia delante.',
            'Postura completamente erguida.',
            'Distribución del peso: 50% en cada pierna.',
            'Cadera: relajada y natural.',
            'Aplicación: ceremonial, saludo formal.'
        ],
        tags: ['posición', 'básico', 'formal', 'ceremonia']
    },
    'tsuru-ashi-dachi': {
        name: 'Tsuru Ashi Dachi',
        japanese: '鶴足立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-alta',
        level: 'advanced',
        description: 'Posición de la grulla.',
        details: [
            'Un pie en el suelo con la pierna algo flexionada. El otro pie detrás de la rodilla.',
            'Posición de equilibrio sobre una pierna.',
            'Distribución del peso: 100% en la pierna de apoyo.',
            'Cadera: centrada para mantener equilibrio.',
            'Aplicación: técnicas de equilibrio y patadas.'
        ],
        tags: ['posición', 'avanzado', 'equilibrio', 'patadas']
    },
    'sanchin-dachi': {
        name: 'Sanchin Dachi',
        japanese: '三戦立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-alta',
        level: 'intermediate',
        description: 'Posición del reloj de arena, o del oso.',
        details: [
            'Un pie adelantado una cadera. Los dos pies hacia dentro.',
            'Las rodillas hacia dentro. La cadera hacia arriba.',
            'Distribución del peso: equilibrado entre ambas piernas.',
            'Cadera: en tensión y elevada.',
            'Aplicación: técnicas de respiración y fortalecimiento interno.'
        ],
        tags: ['posición', 'intermedio', 'tensión', 'fortaleza']
    },
    'naifanchi-dachi': {
        name: 'Naifanchi Dachi',
        japanese: '内歩進立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-alta',
        level: 'intermediate',
        description: 'Similar al kiba dachi pero más alta.',
        details: [
            'Las piernas menos flexionadas que en kiba dachi.',
            'Posición más alta y móvil.',
            'Distribución del peso: 50% en cada pierna.',
            'Cadera: relajada pero firme.',
            'Aplicación: movimientos laterales rápidos.'
        ],
        tags: ['posición', 'intermedio', 'lateral', 'movilidad']
    },
    'moto-dachi': {
        name: 'Moto Dachi',
        japanese: '基立ち',
        category: 'dachi-waza',
        subcategory: 'posicion-alta',
        level: 'intermediate',
        description: 'Posición del caminante.',
        details: [
            'Muy semejante al zenkutsu dachi, pero los pies están más próximos.',
            'La cadera está más alta y la rodilla delantera está alineada con el talón.',
            'Distribución del peso: 60% delante, 40% atrás, pero más alto.',
            'Cadera: ligeramente adelantada.',
            'Aplicación: más cómoda y móvil que zenkutsu dachi, pero con menos penetración.'
        ],
        tags: ['posición', 'intermedio', 'adelantada', 'movilidad']
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
    'shuto-uke': {
        name: 'Shuto Uke',
        japanese: '手刀受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'intermediate',
        height: 'chudan',
        description: 'Defensa media hacia el exterior con el canto de la mano.',
        details: [
            'Se ejecuta con la mano abierta utilizando el canto externo (lado del meñique)',
            'La mano contraria apoya el movimiento desde la posición hikite',
            'Posición final con el brazo aproximadamente a 45 grados'
        ],
        tags: ['defensa', 'intermedio', 'medio', 'mano abierta']
    },
    'uchi-uke': {
        name: 'Uchi Uke',
        japanese: '内受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'basic',
        height: 'chudan',
        description: 'Defensa media hacia el exterior con el antebrazo.',
        details: [
            'Movimiento circular desde el interior hacia el exterior',
            'Contacto con la parte interior del antebrazo',
            'El puño queda apuntando hacia arriba en la posición final'
        ],
        tags: ['defensa', 'básico', 'medio', 'circular']
    },
    'empi-uke': {
        name: 'Empi Uke',
        japanese: '肘受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'intermediate',
        height: 'chudan',
        description: 'Defensa media con el codo.',
        details: [
            'Utiliza el codo como punto de contacto para la defensa',
            'Efectivo para ataques a corta distancia',
            'El brazo queda flexionado con el puño cerca del hombro contrario'
        ],
        tags: ['defensa', 'intermedio', 'medio', 'codo']
    },
    'soto-uke': {
        name: 'Soto Uke',
        japanese: '外受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'basic',
        height: 'chudan',
        description: 'Defensa media hacia el interior con el antebrazo.',
        details: [
            'Movimiento circular desde el exterior hacia el interior',
            'Contacto con la parte exterior del antebrazo',
            'El puño queda apuntando hacia arriba en la posición final'
        ],
        tags: ['defensa', 'básico', 'medio', 'circular']
    },
    'otoshi-uke': {
        name: 'Otoshi Uke',
        japanese: '落し受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'intermediate',
        height: 'chudan',
        description: 'Defensa media hacia abajo.',
        details: [
            'Movimiento descendente con el antebrazo',
            'Similar al gedan barai pero a altura media',
            'Efectivo para desviar ataques directos al torso'
        ],
        tags: ['defensa', 'intermedio', 'medio', 'descendente']
    },
    'tsuki-uke': {
        name: 'Tsuki Uke',
        japanese: '突き受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'intermediate',
        height: 'chudan',
        description: 'Defensa interceptando con el puño.',
        details: [
            'Utiliza el puño para interceptar el ataque entrante',
            'Movimiento directo y rápido como un golpe',
            'Combina elementos de defensa y ataque simultáneamente'
        ],
        tags: ['defensa', 'intermedio', 'intercepción', 'puño']
    },
    'uraken-uke': {
        name: 'Uraken Uke',
        japanese: '裏拳受け',
        category: 'uke-waza',
        subcategory: 'un-brazo',
        level: 'intermediate',
        height: 'chudan',
        description: 'Defensa interceptando con el revés de puño.',
        details: [
            'Utiliza la parte posterior del puño para desviar el ataque',
            'Movimiento circular desde dentro hacia fuera',
            'Puede convertirse fácilmente en un contraataque con uraken uchi'
        ],
        tags: ['defensa', 'intermedio', 'revés', 'puño']
    },
    
    // UKE WAZA - DEFENSAS CON AMBOS BRAZOS
    'morote-uke': {
        name: 'Morote Uke',
        japanese: '諸手受け',
        category: 'uke-waza',
        subcategory: 'doble',
        level: 'intermediate',
        height: 'chudan',
        description: 'Se realiza como uchi uke pero con el otro puño apoyado en el antebrazo cerca del codo para reforzar el bloqueo.',
        details: [
            'Un brazo ejecuta uchi-uke mientras el otro refuerza el bloqueo',
            'Proporciona mayor potencia y estabilidad en la defensa',
            'Efectivo contra ataques potentes o de oponentes más fuertes'
        ],
        tags: ['defensa', 'intermedio', 'reforzado', 'doble']
    },
    'jyuji-uke': {
        name: 'Jyuji Uke',
        japanese: '十字受け',
        category: 'uke-waza',
        subcategory: 'doble',
        level: 'intermediate',
        height: 'gedan',
        description: 'Defensa baja cruzando los brazos con los puños cerrados.',
        details: [
            'Los brazos se cruzan formando una X (jyuji significa "cruz")',
            'Los puños permanecen cerrados',
            'Defensa efectiva contra patadas bajas o armas largas'
        ],
        tags: ['defensa', 'intermedio', 'cruzado', 'bajo']
    },
    'jodan-jyuji-uke': {
        name: 'Jodan Jyuji Uke',
        japanese: '上段十字受け',
        category: 'uke-waza',
        subcategory: 'doble',
        level: 'intermediate',
        height: 'jodan',
        description: 'Defensa alta cruzando los brazos con las manos abiertas.',
        details: [
            'Brazos cruzados en X pero a nivel alto (protegiendo la cara/cabeza)',
            'Se ejecuta con las manos abiertas para mayor cobertura',
            'Útil contra ataques descendentes o técnicas de palo/arma'
        ],
        tags: ['defensa', 'intermedio', 'cruzado', 'alto']
    },
    'kakiwake-uke': {
        name: 'Kakiwake Uke',
        japanese: '掻き分け受け',
        category: 'uke-waza',
        subcategory: 'doble',
        level: 'intermediate',
        height: 'chudan',
        description: 'Defensa media empujando con ambos antebrazos hacia fuera en forma de "cuña" para librarse o efectuar un agarre.',
        details: [
            'Movimiento simultáneo de ambos brazos desde el centro hacia fuera',
            'Efectivo para romper agarres o abrir la guardia del oponente',
            'Las manos pueden estar abiertas o cerradas según la aplicación'
        ],
        tags: ['defensa', 'intermedio', 'separación', 'doble']
    },
    'wa-uke': {
        name: 'Wa Uke',
        japanese: '輪受け',
        category: 'uke-waza',
        subcategory: 'doble',
        level: 'intermediate',
        height: 'jodan',
        description: 'Defensa alta apartando los brazos flexionados a 90 grados hacia los laterales.',
        details: [
            'Ambos brazos se mueven simultáneamente hacia los lados',
            'Los codos quedan flexionados aproximadamente a 90 grados',
            'Defensa eficaz contra ataques a la cara o cuello'
        ],
        tags: ['defensa', 'intermedio', 'circular', 'alto']
    },
    
    // UKE WAZA - DEFENSAS CON PIES Y PIERNAS
    'nami-gaeshi-barai': {
        name: 'Nami Gaeshi Barai',
        japanese: '波返し払い',
        category: 'uke-waza',
        subcategory: 'pies-piernas',
        level: 'advanced',
        height: 'gedan',
        description: 'Patada con el pie barriendo.',
        details: [
            'Movimiento de barrido con el pie para desviar ataques bajos',
            'Se ejecuta normalmente con el borde exterior del pie',
            'Útil contra patadas bajas o barreduras'
        ],
        tags: ['defensa', 'avanzado', 'barrido', 'pie']
    },
    'mikazuki-uke': {
        name: 'Mikazuki Uke',
        japanese: '三日月受け',
        category: 'uke-waza',
        subcategory: 'pies-piernas',
        level: 'advanced',
        height: 'chudan',
        description: 'Patada semicircular con la planta del pie en forma semicircular.',
        details: [
            'Se realiza un movimiento semicircular con la planta del pie',
            'También conocida como Shokutei Uke (defensa con la planta)',
            'Defensa efectiva contra patadas frontales o laterales'
        ],
        tags: ['defensa', 'avanzado', 'circular', 'pie']
    },
    'ushiro-fumikomi-uke': {
        name: 'Ushiro Fumikomi Uke',
        japanese: '後踏込受け',
        category: 'uke-waza',
        subcategory: 'pies-piernas',
        level: 'advanced',
        height: 'chudan',
        description: 'Patadas con la planta del pie de forma directa ante patadas frontales o circulares tipo "low-kick".',
        details: [
            'También conocida como Gyaku Mawashi Mae Uke',
            'Patada directa que intercepta el ataque entrante',
            'Utiliza la planta del pie como superficie de contacto'
        ],
        tags: ['defensa', 'avanzado', 'patada', 'intercepción']
    },
    'hiza-mikazuki-uke': {
        name: 'Hiza Mikazuki Uke',
        japanese: '膝三日月受け',
        category: 'uke-waza',
        subcategory: 'pies-piernas',
        level: 'advanced',
        height: 'chudan',
        description: 'Patadas con el lateral de la rodilla.',
        details: [
            'Utiliza la parte lateral de la rodilla para bloquear',
            'Útil a muy corta distancia',
            'Puede combinarse con agarres de manos para mayor efectividad'
        ],
        tags: ['defensa', 'avanzado', 'rodilla', 'corta distancia']
    },
    
    // UKE WAZA - DEFENSAS DOBLES
    'doble-gedan-barai': {
        name: 'Doble Gedan Barai',
        japanese: '諸手下段払い',
        category: 'uke-waza',
        subcategory: 'defensas-dobles',
        level: 'intermediate',
        height: 'gedan',
        description: 'Ejecución simultánea de gedan barai con ambos brazos.',
        details: [
            'Ambos brazos realizan gedan barai simultáneamente',
            'Proporciona una amplia cobertura contra ataques bajos',
            'Puede servir como preparación para técnicas subsiguientes'
        ],
        tags: ['defensa', 'intermedio', 'doble', 'bajo']
    },
    'doble-uchi-uke': {
        name: 'Doble Uchi Uke',
        japanese: '諸手内受け',
        category: 'uke-waza',
        subcategory: 'defensas-dobles',
        level: 'intermediate',
        height: 'chudan',
        description: 'Ejecución simultánea de uchi uke con ambos brazos.',
        details: [
            'Ambos brazos realizan uchi uke simultáneamente',
            'Proporciona una amplia cobertura lateral',
            'Útil contra ataques múltiples o desde diferentes direcciones'
        ],
        tags: ['defensa', 'intermedio', 'doble', 'medio']
    },
    'kosa-uke': {
        name: 'Kosa Uke',
        japanese: '交差受け',
        category: 'uke-waza',
        subcategory: 'defensas-dobles',
        level: 'intermediate',
        height: ['gedan', 'chudan'],
        description: 'Combinación de gedan barai y uchi uke.',
        details: [
            'Un brazo ejecuta gedan barai mientras el otro realiza uchi uke',
            'Proporciona cobertura a dos niveles simultáneamente',
            'Efectiva contra combinaciones de ataques a diferentes alturas'
        ],
        tags: ['defensa', 'intermedio', 'combinada', 'múltiple nivel']
    },
    'gedan-barai-age-uke': {
        name: 'Gedan Barai + Age Uke',
        japanese: '下段払い上げ受け',
        category: 'uke-waza',
        subcategory: 'defensas-dobles',
        level: 'intermediate',
        height: ['gedan', 'jodan'],
        description: 'Combinación de gedan barai y age uke.',
        details: [
            'Un brazo ejecuta gedan barai mientras el otro realiza age uke',
            'Proporciona cobertura a nivel bajo y alto simultáneamente',
            'Útil contra combinaciones de ataques a la cabeza y piernas'
        ],
        tags: ['defensa', 'intermedio', 'combinada', 'múltiple nivel']
    },
    'ryo-zenwan-uke': {
        name: 'Ryo Zenwan Uke',
        japanese: '両前腕受け',
        category: 'uke-waza',
        subcategory: 'defensas-dobles',
        level: 'intermediate',
        height: 'chudan',
        description: 'Bloqueo que separa con un movimiento de arriba hacia abajo.',
        details: [
            'Ambos antebrazos se utilizan en un movimiento descendente',
            'Útil para separar los brazos del oponente o romper agarres',
            'Puede servir como preparación para contraataques'
        ],
        tags: ['defensa', 'intermedio', 'separación', 'descendente']
    },
    'aiwan-nagashi-uke': {
        name: 'Aiwan Nagashi Uke',
        japanese: '相腕流し受け',
        category: 'uke-waza',
        subcategory: 'defensas-dobles',
        level: 'intermediate',
        height: 'chudan',
        description: 'También conocida como Sokumen Awase Uke o Sokumen Aiwan Uke.',
        details: [
            'Los brazos se mueven en una dirección lateral coordinada',
            'Útil para desviar ataques mientras se mantiene la guardia',
            'Permite rápidas transiciones a contraataques'
        ],
        tags: ['defensa', 'intermedio', 'desviación', 'lateral']
    },
    
    // UKE WAZA - VARIANTES
    'sho-morote-uke': {
        name: 'Sho Morote Uke',
        japanese: '掌諸手受け',
        category: 'uke-waza',
        subcategory: 'variantes',
        level: 'advanced',
        height: 'chudan',
        description: 'Como un morote uke pero con la mano que refuerza el bloqueo abierta.',
        details: [
            'Variación de morote uke con la mano de refuerzo abierta',
            'Permite mayor sensibilidad y opciones de agarre',
            'Facilita transiciones a técnicas de control o proyección'
        ],
        tags: ['defensa', 'avanzado', 'variante', 'mano abierta']
    },
    'gedan-kake-uke': {
        name: 'Gedan Kake Uke',
        japanese: '下段掛け受け',
        category: 'uke-waza',
        subcategory: 'variantes',
        level: 'intermediate',
        height: 'gedan',
        description: 'Gedan barai en sentido contrario.',
        details: [
            'Similar a gedan barai pero con trayectoria invertida',
            'Movimiento desde el exterior hacia el interior',
            'Útil para desviar ataques bajos hacia el centro'
        ],
        tags: ['defensa', 'intermedio', 'bajo', 'variante']
    },
    'shuto-age-uke': {
        name: 'Shuto Age Uke',
        japanese: '手刀上げ受け',
        category: 'uke-waza',
        subcategory: 'variantes',
        level: 'intermediate',
        height: 'jodan',
        description: 'Como age uke pero con la mano abierta con el canto hacia arriba.',
        details: [
            'Variante de age uke ejecutada con la mano en posición de shuto',
            'Utiliza el canto de la mano como superficie de contacto',
            'Permite mayor sensibilidad y opciones de contraataque'
        ],
        tags: ['defensa', 'intermedio', 'alto', 'mano abierta']
    },
    'shuto-gedan-barai': {
        name: 'Shuto Gedan Barai',
        japanese: '手刀下段払い',
        category: 'uke-waza',
        subcategory: 'variantes',
        level: 'intermediate',
        height: 'gedan',
        description: 'Como gedan barai pero con la mano abierta parando con el canto de la mano.',
        details: [
            'Variante de gedan barai con la mano en posición de shuto',
            'Utiliza el canto de la mano como superficie de contacto',
            'Mayor alcance y posibilidades de control del ataque'
        ],
        tags: ['defensa', 'intermedio', 'bajo', 'mano abierta']
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
    'tate-tsuki': {
        name: 'Tate Tsuki',
        japanese: '立て突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe con el puño girado quedando la palma hacia el lado contrario.',
        details: [
            'El puño se gira 90 grados (vertical) al final del golpe',
            'Ideal para golpear entre las costillas o espacios estrechos',
            'Proporciona mayor alcance que el tsuki tradicional'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'vertical']
    },
    'ura-tsuki': {
        name: 'Ura Tsuki',
        japanese: '裏突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe con el puño invertido quedando la palma hacia arriba.',
        details: [
            'El puño se gira completamente con la palma hacia arriba',
            'Golpe ascendente que suele dirigirse al plexo solar o bajo la barbilla',
            'Potente a corta distancia'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'invertido']
    },
    'uraken': {
        name: 'Uraken',
        japanese: '裏拳',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el reverso de la mano, golpeando con los nudillos.',
        details: [
            'Se utiliza la parte posterior del puño como superficie de impacto',
            'Suele ejecutarse con un movimiento semicircular',
            'Efectivo para golpear la sien, mandíbula o costado del rostro'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'reverso']
    },
    'kizami-tsuki': {
        name: 'Kizami Tsuki',
        japanese: '刻み突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Tsuki metiendo el hombro.',
        details: [
            'Golpe rápido con el puño adelantado',
            'Se acompaña con un ligero movimiento del hombro hacia adelante',
            'Ideal para ataques sorpresa o como finta'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'directo']
    },
    'kagi-tsuki': {
        name: 'Kagi Tsuki',
        japanese: '鉤突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe con un puño hacia el lado contrario golpeando frente al pecho.',
        details: [
            'Golpe en forma de gancho hacia el lado contrario',
            'El puño describe una trayectoria horizontal',
            'Útil para golpear al oponente cuando está en ángulo'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'gancho']
    },
    'age-tsuki': {
        name: 'Age Tsuki',
        japanese: '上げ突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: 'jodan',
        description: 'Golpe de puño ascendente.',
        details: [
            'Similar a un uppercut del boxeo',
            'Trayectoria vertical ascendente',
            'Efectivo contra un oponente que baja la guardia'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'ascendente']
    },
    'yoko-tsuki': {
        name: 'Yoko Tsuki',
        japanese: '横突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe de puño lateral.',
        details: [
            'Se ejecuta hacia el lado, manteniendo el puño horizontal',
            'La cadera gira 90 grados',
            'Común desde kiba-dachi o posiciones laterales'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'lateral']
    },
    'ushiro-tsuki': {
        name: 'Ushiro Tsuki',
        japanese: '後ろ突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'advanced',
        height: 'chudan',
        description: 'Golpe de puño hacia atrás por encima del hombro contrario.',
        details: [
            'Se ejecuta girando el torso hacia atrás',
            'El puño pasa por encima del hombro opuesto',
            'Útil contra ataques por la espalda'
        ],
        tags: ['ataque', 'puño', 'avanzado', 'posterior']
    },
    'kirami-tsuki': {
        name: 'Kirami Tsuki',
        japanese: '切り突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'advanced',
        height: 'jodan',
        description: 'Golpe de puño de la pierna levantada apuntando hacia la cabeza del contrincante.',
        details: [
            'Se ejecuta simultáneamente con una elevación de rodilla',
            'Requiere buen equilibrio y coordinación',
            'Combina elementos de defensa y ataque'
        ],
        tags: ['ataque', 'puño', 'avanzado', 'combinación']
    },
    'maete-tsuki': {
        name: 'Maete Tsuki',
        japanese: '前手突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el puño adelantado, sin rotar la cadera y estirando el brazo.',
        details: [
            'Golpe directo sin rotación de cadera',
            'Movimiento rápido y económico',
            'Ideal para crear distancia o como técnica de control'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'directo']
    },
    'mawashi-tsuki': {
        name: 'Mawashi Tsuki',
        japanese: '回し突き',
        category: 'tsuki-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe circular de puño horizontal.',
        details: [
            'El puño describe un arco horizontal',
            'Similar al gancho del boxeo',
            'Efectivo a media distancia'
        ],
        tags: ['ataque', 'puño', 'intermedio', 'circular']
    },
    
    // TSUKI WAZA - GOLPES DIRECTOS CON MANO ABIERTA
    'teisho': {
        name: 'Teisho',
        japanese: '底掌',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el talón de la mano.',
        details: [
            'Se golpea con la base de la palma de la mano',
            'Los dedos se mantienen flexionados hacia atrás para protegerlos',
            'Efectivo para empujar o golpear sin lesionar los nudillos'
        ],
        tags: ['ataque', 'mano abierta', 'intermedio', 'palma']
    },
    'kumade': {
        name: 'Kumade',
        japanese: '熊手',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el talón de la mano y los nudillos teniendo la palma estirada y flexionando las falanges terminales de los dedos.',
        details: [
            'La mano adopta la forma de "garra de oso"',
            'Los dedos se flexionan en las articulaciones distales',
            'Efectivo para ataques a zonas blandas'
        ],
        tags: ['ataque', 'mano abierta', 'intermedio', 'garra']
    },
    'hiraken': {
        name: 'Hiraken',
        japanese: '平拳',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con los nudillos de la mano semi-cerrada.',
        details: [
            'Similar a kumade pero golpeando con los nudillos',
            'Los dedos se flexionan parcialmente',
            'Efectivo para golpear zonas duras sin dañar los dedos'
        ],
        tags: ['ataque', 'nudillos', 'intermedio', 'directo']
    },
    'ippon-ken': {
        name: 'Ippon Ken',
        japanese: '一本拳',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el nudillo del dedo índice.',
        details: [
            'Se usa el nudillo del dedo índice como punto de impacto',
            'Los demás dedos se pliegan formando un puño',
            'Útil para golpear puntos de presión'
        ],
        tags: ['ataque', 'nudillo', 'intermedio', 'precisión']
    },
    'nakadaka-ken': {
        name: 'Nakadaka Ken',
        japanese: '中高拳',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el nudillo del dedo corazón.',
        details: [
            'Se usa el nudillo del dedo medio como punto de impacto',
            'Mayor penetración que ippon-ken',
            'Requiere precisión para evitar lesiones'
        ],
        tags: ['ataque', 'nudillo', 'intermedio', 'penetración']
    },
    'ippon-nukite': {
        name: 'Ippon Nukite',
        japanese: '一本貫手',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el dedo índice.',
        details: [
            'Ataque de punta con el dedo índice extendido',
            'Los demás dedos se pliegan',
            'Alta precisión para puntos vulnerables'
        ],
        tags: ['ataque', 'dedo', 'intermedio', 'precisión']
    },
    'nihon-nukite': {
        name: 'Nihon Nukite',
        japanese: '二本貫手',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con los dedos índice y corazón, juntos o separados.',
        details: [
            'Ataque con dos dedos extendidos',
            'Mayor superficie de impacto que ippon-nukite',
            'Puede ejecutarse con los dedos juntos o separados'
        ],
        tags: ['ataque', 'dedos', 'intermedio', 'precisión']
    },
    'yonhon-nukite': {
        name: 'Yonhon Nukite',
        japanese: '四本貫手',
        category: 'tsuki-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con los cuatro dedos largos juntos.',
        details: [
            'Ataque con cuatro dedos extendidos y juntos',
            'Mayor superficie de impacto que otras variantes nukite',
            'Útil para ataques a la garganta o plexo solar'
        ],
        tags: ['ataque', 'dedos', 'intermedio', 'precisión']
    },
    
    // TSUKI WAZA - ATAQUES CON AMBOS PUÑOS
    'morote-tsuki': {
        name: 'Morote Tsuki',
        japanese: '諸手突き',
        category: 'tsuki-waza',
        subcategory: 'ambos-puños',
        level: 'intermediate',
        height: 'chudan',
        description: 'Dos tsukis simultáneos.',
        details: [
            'Golpe simultáneo con ambos puños',
            'Puede ejecutarse en varias variantes según la dirección',
            'Combina potencia de ambos brazos'
        ],
        tags: ['ataque', 'doble puño', 'intermedio', 'simultáneo']
    },
    'heiko-tsuki': {
        name: 'Heiko Tsuki',
        japanese: '平行突き',
        category: 'tsuki-waza',
        subcategory: 'ambos-puños',
        level: 'intermediate',
        height: 'chudan',
        description: 'Tsukis paralelos.',
        details: [
            'Dos golpes simultáneos a la misma altura',
            'Los puños mantienen una trayectoria paralela',
            'Requiere buena coordinación bilateral'
        ],
        tags: ['ataque', 'doble puño', 'intermedio', 'simultáneo']
    },
    'yama-tsuki': {
        name: 'Yama Tsuki',
        japanese: '山突き',
        category: 'tsuki-waza',
        subcategory: 'ambos-puños',
        level: 'advanced',
        height: ['jodan', 'gedan'],
        description: 'Tsukis frontales metiendo la cabeza. Uno por encima de la cabeza y otro por debajo e invertido.',
        details: [
            'Doble ataque simultáneo a diferentes alturas',
            'Un puño golpea arriba y otro abajo',
            'La cabeza se protege entre los brazos'
        ],
        tags: ['ataque', 'doble puño', 'avanzado', 'combinación']
    },
    'awase-tsuki': {
        name: 'Awase Tsuki',
        japanese: '合わせ突き',
        category: 'tsuki-waza',
        subcategory: 'ambos-puños',
        level: 'advanced',
        height: ['jodan', 'gedan'],
        description: 'Tsukis frontales sin meter la cabeza. Uno por encima de la cabeza y otro por debajo e invertido.',
        details: [
            'Similar a yama-tsuki pero sin protección de cabeza',
            'Mayor alcance que yama-tsuki',
            'Requiere timing preciso'
        ],
        tags: ['ataque', 'doble puño', 'avanzado', 'combinación']
    },
    'hasami-tsuki': {
        name: 'Hasami Tsuki',
        japanese: 'はさみ突き',
        category: 'tsuki-waza',
        subcategory: 'ambos-puños',
        level: 'advanced',
        height: 'chudan',
        description: 'Tsukis en tijera, desde ambos lados hacia el interior.',
        details: [
            'Los puños convergen desde los lados hacia el centro',
            'Movimiento similar a unas tijeras cerrándose',
            'Efectivo para atrapar y golpear'
        ],
        tags: ['ataque', 'doble puño', 'avanzado', 'tijera']
    },
    'hasami-nakadaka-ken': {
        name: 'Hasami Nakadaka Ken',
        japanese: 'はさみ中高拳',
        category: 'tsuki-waza',
        subcategory: 'ambos-puños',
        level: 'advanced',
        height: 'chudan',
        description: 'Doble nakadaka ken en tijera, desde ambos lados hacia el interior.',
        details: [
            'Variante de hasami-tsuki con nakadaka-ken',
            'Mayor precisión y penetración',
            'Requiere alto nivel técnico'
        ],
        tags: ['ataque', 'doble nudillo', 'avanzado', 'tijera']
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
    
    // UCHI WAZA - GOLPES INDIRECTOS CON OTRAS PARTES
    'yoko-enpi-uchi': {
        name: 'Yoko Enpi Uchi',
        japanese: '横肘打ち',
        category: 'taibuki-waza', // Cambiado de 'uchi-waza'
        subcategory: 'codo',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe con el codo lateral.',
        details: [
            'Movimiento del codo hacia el lateral',
            'Genera potencia desde la rotación del tronco',
            'Muy efectivo a corta distancia'
        ],
        tags: ['ataque', 'indirecto', 'codo', 'lateral']
    },
    'mawashi-enpi-uchi': {
        name: 'Mawashi Enpi Uchi',
        japanese: '回し肘打ち',
        category: 'taibuki-waza', // Cambiado de 'uchi-waza'
        subcategory: 'codo',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe con el codo circular.',
        details: [
            'Movimiento circular del codo, generalmente a la cabeza o costillas',
            'Combina rotación del tronco con el movimiento del codo',
            'Muy efectivo en combate cercano'
        ],
        tags: ['ataque', 'indirecto', 'codo', 'circular']
    },
    'otoshi-enpi-uchi': {
        name: 'Otoshi Enpi Uchi',
        japanese: '落とし肘打ち',
        category: 'taibuki-waza', // Cambiado de 'uchi-waza'
        subcategory: 'codo',
        level: 'intermediate',
        height: ['jodan', 'chudan'],
        description: 'Golpe con el codo descendente.',
        details: [
            'Movimiento descendente del codo desde arriba',
            'Utiliza el peso del cuerpo para aumentar la potencia',
            'Efectivo contra oponentes más bajos o agachados'
        ],
        tags: ['ataque', 'indirecto', 'codo', 'descendente']
    },
    'ushiro-enpi-uchi': {
        name: 'Ushiro Enpi Uchi',
        japanese: '後ろ肘打ち',
        category: 'taibuki-waza', // Cambiado de 'uchi-waza'
        subcategory: 'codo',
        level: 'advanced',
        height: 'chudan',
        description: 'Golpe con el codo hacia atrás.',
        details: [
            'Golpe con el codo dirigido hacia atrás',
            'Útil contra agarres por detrás',
            'Requiere buena conciencia espacial'
        ],
        tags: ['ataque', 'indirecto', 'codo', 'posterior']
    },
    'atama-uchi': {
        name: 'Atama Uchi',
        japanese: '頭打ち',
        category: 'taibuki-waza', // Cambiado de 'uchi-waza'
        subcategory: 'otras-partes',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Golpe con la cabeza.',
        details: [
            'Utiliza la parte frontal o superior de la cabeza',
            'Técnica de último recurso en distancia muy corta',
            'Requiere precaución en su ejecución'
        ],
        tags: ['ataque', 'indirecto', 'cabeza', 'emergencia']
    },
    'tetsui-uchi': {
        name: 'Tetsui Uchi',
        japanese: '鉄槌打ち',
        category: 'uchi-waza',
        subcategory: 'mano-cerrada',
        level: 'intermediate',
        height: ['chudan', 'jodan', 'gedan'],
        description: 'Golpe con la base del puño.',
        details: [
            'También conocido como "martillo de hierro"',
            'Se golpea con la parte lateral del puño (lado del meñique)',
            'Puede ejecutarse en varias direcciones (descendente, lateral, etc.)'
        ],
        tags: ['ataque', 'indirecto', 'puño', 'martillo']
    },
    'kakuto-uchi': {
        name: 'Kakuto Uchi',
        japanese: '鶴首打ち',
        category: 'taibuki-waza', // Cambiado de 'uchi-waza'
        subcategory: 'otras-partes',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Golpe con la muñeca. La mano hacia abajo para permitir el golpe.',
        details: [
            'Se golpea con la parte superior de la muñeca flexionada',
            'La mano se flexiona hacia abajo formando aproximadamente 90 grados',
            'Útil para golpear la mandíbula o debajo de la nariz'
        ],
        tags: ['ataque', 'indirecto', 'muñeca', 'avanzado']
    },
    'ude-mawashi-uchi': {
        name: 'Ude Mawashi Uchi',
        japanese: '腕回し打ち',
        category: 'taibuki-waza',
        subcategory: 'otras-partes',
        level: 'intermediate',
        height: 'chudan',
        description: 'Golpe horizontal con el antebrazo por el hueso radial.',
        details: [
            'Utiliza el radio (hueso del antebrazo) como superficie de impacto',
            'Movimiento circular del brazo',
            'Efectivo para golpear costillas o cuello'
        ],
        tags: ['ataque', 'indirecto', 'antebrazo', 'circular']
    },

    // UCHI WAZA - GOLPES CON AMBAS MANOS
    'hasami-tetsui-uchi': {
        name: 'Hasami Tetsui Uchi',
        japanese: 'はさみ鉄槌打ち',
        category: 'uchi-waza',
        subcategory: 'ambas-manos',
        level: 'advanced',
        height: 'chudan',
        description: 'Dos tetsuis simultáneos en tijera, desde ambos lados hacia el interior.',
        details: [
            'Golpe doble con los puños en forma de martillo',
            'Movimiento simultáneo desde el exterior hacia el interior',
            'Efectivo para atrapar y golpear un brazo o el cuello'
        ],
        tags: ['ataque', 'indirecto', 'doble', 'tijera']
    },
    'hasami-shuto-uchi': {
        name: 'Hasami Shuto Uchi',
        japanese: 'はさみ手刀打ち',
        category: 'uchi-waza',
        subcategory: 'ambas-manos',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Dos shutos simultáneos en tijera, desde ambos lados hacia el interior.',
        details: [
            'Golpe doble con el canto de ambas manos',
            'Movimiento simultáneo desde el exterior hacia el interior',
            'Permite combinar ataque y control'
        ],
        tags: ['ataque', 'indirecto', 'doble', 'tijera']
    },
    'hasami-haito-uchi': {
        name: 'Hasami Haito Uchi',
        japanese: 'はさみ背刀打ち',
        category: 'uchi-waza',
        subcategory: 'ambas-manos',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Dos haitos simultáneos en tijera, desde ambos lados hacia el interior.',
        details: [
            'Golpe doble con el canto interno de ambas manos',
            'Movimiento simultáneo desde el exterior hacia el interior',
            'Útil para ataques al cuello o clavículas'
        ],
        tags: ['ataque', 'indirecto', 'doble', 'tijera']
    },

    // UCHI WAZA - GOLPES CON LA MANO ABIERTA
    'haito-uchi': {
        name: 'Haito Uchi',
        japanese: '背刀打ち',
        category: 'uchi-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con el canto interno de la mano.',
        details: [
            'Se golpea con el lado del pulgar de la mano',
            'Movimiento circular del brazo',
            'Efectivo para ataques al cuello o costillas'
        ],
        tags: ['ataque', 'indirecto', 'mano abierta', 'circular']
    },
    'haishu-uchi': {
        name: 'Haishu Uchi',
        japanese: '背手打ち',
        category: 'uchi-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con la parte de detrás de la mano extendida.',
        details: [
            'Se golpea con el dorso de la mano abierta',
            'Movimiento circular amplio',
            'Útil como distracción o para crear espacio'
        ],
        tags: ['ataque', 'indirecto', 'mano abierta', 'revés']
    },
    'sho-uchi': {
        name: 'Sho Uchi',
        japanese: '掌打ち',
        category: 'uchi-waza',
        subcategory: 'mano-abierta',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe con la palma de la mano extendida.',
        details: [
            'Se golpea con toda la superficie de la palma',
            'Menor riesgo de lesión que con el puño',
            'Efectivo para empujar o golpear zonas amplias'
        ],
        tags: ['ataque', 'indirecto', 'mano abierta', 'palma']
    },
    'seiryuto-uchi': {
        name: 'Seiryuto Uchi',
        japanese: '青竜刀打ち',
        category: 'uchi-waza',
        subcategory: 'mano-abierta',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Golpe con la parte inferior del shuto.',
        details: [
            'Variante de shuto que usa la parte más cercana a la muñeca',
            'Mayor potencia que el shuto tradicional',
            'Requiere buena precisión'
        ],
        tags: ['ataque', 'indirecto', 'mano abierta', 'corte']
    },
    'washide-uchi': {
        name: 'Washide Uchi',
        japanese: '鷲手打ち',
        category: 'uchi-waza',
        subcategory: 'mano-abierta',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Golpe con los dedos juntos en forma de pico.',
        details: [
            'Los dedos se juntan formando un "pico de águila"',
            'Alta precisión para puntos vulnerables',
            'Requiere dedos fuertes y bien condicionados'
        ],
        tags: ['ataque', 'indirecto', 'dedos', 'precisión']
    },

    // KERI WAZA - PATADAS
    'mae-geri': {
        name: 'Mae Geri',
        japanese: '前蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'basic',
        height: ['chudan', 'jodan'],
        description: 'Patada frontal.',
        details: [
            'Se ejecuta elevando la rodilla y extendiendo la pierna con un movimiento recto hacia el frente',
            'Se puede realizar con la planta del pie (kekomi) o con los dedos doblados hacia atrás (keage)',
            'Fuerza generada desde la cadera con extensión rápida de la rodilla'
        ],
        tags: ['patada', 'básico', 'frontal', 'directo'],
        videoId: 'KjDM9TY4HvE',  // ID del video de YouTube para esta técnica
        imagePath: '../img/techniques/mae-geri.jpg'  // Ruta de la imagen para esta técnica
    },
    'yoko-geri': {
        name: 'Yoko Geri',
        japanese: '横蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: 'chudan',
        description: 'Patada lateral.',
        details: [
            'Se ejecuta con el canto exterior del pie (sokuto)',
            'La cadera rota 90° para una correcta ejecución',
            'Puede ser penetrante (kekomi) o ascendente (keage)'
        ],
        tags: ['patada', 'intermedio', 'lateral', 'penetrante']
    },
    'mawashi-geri': {
        name: 'Mawashi Geri',
        japanese: '回し蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Patada circular.',
        details: [
            'Se ejecuta con un movimiento semicircular',
            'Se golpea con el empeine (haisoku) o con los dedos del pie',
            'Requiere buena flexibilidad de cadera'
        ],
        tags: ['patada', 'intermedio', 'circular', 'flexible']
    },
    'kakato-geri': {
        name: 'Kakato Geri',
        japanese: '踵蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: ['chudan', 'jodan'],
        description: 'Golpe descendente con el talón.',
        details: [
            'Se eleva la pierna y se desciende enérgicamente',
            'Se golpea con el talón (kakato)',
            'Gran potencia por el uso de la gravedad y la masa del talón'
        ],
        tags: ['patada', 'intermedio', 'descendente', 'talón']
    },
    'ura-mawashi-geri': {
        name: 'Ura Mawashi Geri',
        japanese: '裏回し蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Patada circular inversa.',
        details: [
            'Movimiento circular en dirección contraria a mawashi geri',
            'Se golpea con el talón o la parte posterior del pie',
            'Requiere gran flexibilidad y control'
        ],
        tags: ['patada', 'avanzado', 'circular', 'reversa']
    },
    'ushiro-geri': {
        name: 'Ushiro Geri',
        japanese: '後ろ蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: 'chudan',
        description: 'Patada hacia atrás.',
        details: [
            'Se ejecuta girando el cuerpo y pateando hacia atrás',
            'Se golpea con el talón mientras se mira por encima del hombro',
            'Extremadamente potente por la aplicación de masa corporal'
        ],
        tags: ['patada', 'intermedio', 'posterior', 'potente']
    },
    'mikazuki-geri': {
        name: 'Mikazuki Geri',
        japanese: '三日月蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: 'gedan',
        description: 'Patada frontal recogiendo hacia dentro.',
        details: [
            'Movimiento en forma de media luna (mikazuki significa "media luna")',
            'Se ejecuta de fuera hacia adentro con la planta del pie',
            'Efectiva para barrer las piernas del oponente'
        ],
        tags: ['patada', 'intermedio', 'circular', 'barrido']
    },
    'nidan-tobi-geri': {
        name: 'Nidan Tobi Geri',
        japanese: '二段飛び蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: 'chudan',
        description: 'Dos patadas alternas en salto.',
        details: [
            'Se realizan dos patadas consecutivas durante un único salto',
            'Generalmente se combinan mae geri y yoko geri/mawashi geri',
            'Requiere gran control y coordinación en el aire'
        ],
        tags: ['patada', 'avanzado', 'salto', 'combinada']
    },
    'ura-mikazuki-geri': {
        name: 'Ura Mikazuki Geri',
        japanese: '裏三日月蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: 'gedan',
        description: 'Patada circular exterior con la parte exterior del pie.',
        details: [
            'Movimiento en forma de media luna en dirección opuesta a mikazuki geri',
            'Se ejecuta de dentro hacia fuera con el canto exterior del pie',
            'Útil para desestabilizar al oponente'
        ],
        tags: ['patada', 'intermedio', 'circular', 'exterior']
    },
    'mae-tobi-geri': {
        name: 'Mae Tobi Geri',
        japanese: '前飛び蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Patada frontal en salto.',
        details: [
            'Patada mae geri ejecutada durante un salto',
            'Permite alcanzar objetivos más altos o más distantes',
            'Requiere coordinación de todo el cuerpo'
        ],
        tags: ['patada', 'avanzado', 'salto', 'frontal']
    },
    'mawashi-tobi-geri': {
        name: 'Mawashi Tobi Geri',
        japanese: '回し飛び蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: 'jodan',
        description: 'Patada circular en salto.',
        details: [
            'Patada mawashi geri ejecutada durante un salto',
            'Mayor alcance y potencia que la versión sin salto',
            'Requiere excelente flexibilidad y control'
        ],
        tags: ['patada', 'avanzado', 'salto', 'circular']
    },
    'yoko-tobi-geri': {
        name: 'Yoko Tobi Geri',
        japanese: '横飛び蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: 'chudan',
        description: 'Patada lateral en salto.',
        details: [
            'Patada yoko geri ejecutada durante un salto',
            'Se puede realizar con desplazamiento horizontal',
            'Requiere gran potencia en las piernas'
        ],
        tags: ['patada', 'avanzado', 'salto', 'lateral']
    },
    'kin-geri': {
        name: 'Kin Geri',
        japanese: '金蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'basic',
        height: 'gedan',
        description: 'Patada a los genitales, directa de frente sin flexión de rodilla.',
        details: [
            'Movimiento rápido y directo hacia arriba',
            'Se ejecuta con el empeine hacia los genitales',
            'Usada principalmente en defensa personal'
        ],
        tags: ['patada', 'básico', 'autodefensa', 'directa']
    },
    'ushiro-tobi-geri': {
        name: 'Ushiro Tobi Geri',
        japanese: '後ろ飛び蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: 'chudan',
        description: 'Patada hacia atrás y en salto.',
        details: [
            'Patada ushiro geri ejecutada durante un salto',
            'Requiere giro completo del cuerpo en el aire',
            'Gran potencia por la combinación de salto y rotación'
        ],
        tags: ['patada', 'avanzado', 'salto', 'posterior']
    },
    'ushiro-ura-mawashi-tobi-geri': {
        name: 'Ushiro Ura Mawashi Tobi Geri',
        japanese: '後ろ裏回し飛び蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: 'jodan',
        description: 'Patada circular inversa en salto.',
        details: [
            'Combinación de giro, salto y patada circular inversa',
            'Una de las técnicas más complejas del karate',
            'Gran efecto sorpresa por su trayectoria inesperada'
        ],
        tags: ['patada', 'avanzado', 'salto', 'circular', 'reversa']
    },
    'gyaku-mawashi-geri': {
        name: 'Gyaku Mawashi Geri',
        japanese: '逆回し蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'advanced',
        height: ['chudan', 'jodan'],
        description: 'Patada en "S" con rotación externa de la pierna que patea.',
        details: [
            'Movimiento que comienza como mae geri y termina como mawashi geri',
            'Trayectoria en forma de "S" que dificulta el bloqueo',
            'Requiere excelente control de cadera y pierna'
        ],
        tags: ['patada', 'avanzado', 'compleja', 'engaño']
    },
    'mae-hiza-geri': {
        name: 'Mae Hiza Geri',
        japanese: '前膝蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: 'chudan',
        description: 'Rodillazo frontal.',
        details: [
            'Golpe directo con la rodilla hacia adelante',
            'Efectivo a corta distancia para golpear abdomen o plexo solar',
            'Se pueden usar las manos para controlar al oponente'
        ],
        tags: ['patada', 'intermedio', 'rodilla', 'corta distancia']
    },
    'mawashi-hiza-geri': {
        name: 'Mawashi Hiza Geri',
        japanese: '回し膝蹴り',
        category: 'keri-waza',
        subcategory: 'basicas',
        level: 'intermediate',
        height: 'chudan',
        description: 'Rodillazo circular.',
        details: [
            'Golpe circular con la rodilla, similar a mawashi geri',
            'Efectivo para impactar costillas o costado del abdomen',
            'Util en combate cuerpo a cuerpo'
        ],
        tags: ['patada', 'intermedio', 'rodilla', 'circular']
    },
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
    
    // Búsqueda en tiempo real
    $('#technique-search').on('input', function() {
        buscarTecnicas($(this).val().toLowerCase());
    });
    
    // Botón de búsqueda
    $('#search-button').click(function() {
        const searchTerm = $('#technique-search').val().toLowerCase();
        buscarTecnicas(searchTerm);
    });
    
    // Filtros de categoría
    $('.filter-btn[data-category]').click(function() {
        const category = $(this).data('category');
        $('.filter-btn[data-category]').removeClass('active');
        $(this).addClass('active');
        
        if (category === 'all') {
            $('.technique-category').show();
        } else {
            $('.technique-category').hide();
            $(`#${category}`).show();
        }
        
        // Añadir filtro activo
        updateActiveFilters('category', $(this).text(), category);
    });
    
    // Filtros de subcategoría
    $('.filter-btn[data-subcategory]').click(function() {
        const subcategory = $(this).data('subcategory');
        $('.filter-btn[data-subcategory]').removeClass('active');
        $(this).addClass('active');
        
        $('.subcategory').hide();
        $(`.subcategory h3:contains('${getSubcategoryTitle(subcategory)}')`).parent().show();
        
        // Añadir filtro activo
        updateActiveFilters('subcategory', $(this).text(), subcategory);
    });
    
    // Filtros de nivel
    $('.filter-btn[data-level]').click(function() {
        const level = $(this).data('level');
        $('.filter-btn[data-level]').removeClass('active');
        $(this).addClass('active');
        
        filtrarPorNivel(level);
        
        // Añadir filtro activo
        updateActiveFilters('level', $(this).text(), level);
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
    
    // Toggle para mostrar/ocultar filtros
    $('.filter-toggle-btn').click(function() {
        $('.filter-container').toggleClass('collapsed');
        $(this).find('i').toggleClass('fa-filter fa-times');
        if ($('.filter-container').hasClass('collapsed')) {
            $(this).html('<i class="fas fa-filter"></i> Filtros');
        } else {
            $(this).html('<i class="fas fa-times"></i> Cerrar');
        }
    });
    
    // Toggle para colapsar grupos de filtros
    $('.filter-group h3').click(function() {
        $(this).parent().toggleClass('collapsed');
    });
    
    // Limpiar filtros
    $('.clear-filters').click(function() {
        $('.filter-btn').removeClass('active');
        $('.filter-btn[data-category="all"]').addClass('active');
        $('.technique-category').show();
        $('.subcategory').show();
        $('.technique-card').show();
        $('.filter-tags').empty();
    });
});

// Función para buscar técnicas mientras se escribe
function buscarTecnicas(searchTerm) {
    // Si el término de búsqueda está vacío, mostrar todo
    if (!searchTerm) {
        $('.technique-card').show();
        $('.subcategory').show();
        $('.technique-category').show();
        return;
    }
    
    // Ocultar todas las técnicas inicialmente
    $('.technique-card').hide();
    
    // Filtrar y mostrar técnicas que coincidan con la búsqueda
    let encontrado = false;
    
    // Buscar en los datos de las técnicas
    Object.entries(techniquesData).forEach(([id, technique]) => {
        // Buscar en nombre, nombre japonés, descripción y etiquetas
        const nameMatch = technique.name.toLowerCase().includes(searchTerm);
        const japaneseMatch = technique.japanese.toLowerCase().includes(searchTerm);
        const descMatch = technique.description.toLowerCase().includes(searchTerm);
        const tagsMatch = technique.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Si hay coincidencia, mostrar la técnica
        if (nameMatch || japaneseMatch || descMatch || tagsMatch) {
            $(`.technique-card[data-id="${id}"]`).show();
            encontrado = true;
        }
    });
    
    // Mostrar/ocultar categorías y subcategorías según resultados
    $('.subcategory').each(function() {
        const visibleCards = $(this).find('.technique-card:visible').length;
        $(this).toggle(visibleCards > 0);
    });
    
    $('.technique-category').each(function() {
        const visibleSubcategories = $(this).find('.subcategory:visible').length;
        $(this).toggle(visibleSubcategories > 0);
    });
    
    // Mostrar mensaje si no hay resultados
    if (!encontrado) {
        // Podemos añadir un elemento para mostrar mensaje de "no se encontraron resultados"
        // O simplemente mantener las categorías vacías visibles
    }
}

// Cargar todas las técnicas en sus respectivas secciones
function cargarTecnicas() {
    Object.entries(techniquesData).forEach(([id, technique]) => {
        const card = createTechniqueCard(id, technique);
        
        // Solucionamos el problema usando los selectores exactos de HTML
        let selector = '';
        if (technique.category === 'tsuki-waza') {
            if (technique.subcategory === 'mano-cerrada') {
                selector = '#tsuki-waza .subcategory:contains("Con el Puño Cerrado") .techniques-grid';
            } else if (technique.subcategory === 'mano-abierta') {
                selector = '#tsuki-waza .subcategory:contains("Con la Mano Abierta") .techniques-grid';
            } else if (technique.subcategory === 'ambos-puños') {
                selector = '#tsuki-waza .subcategory:contains("Ataques con Ambos Puños") .techniques-grid';
            }
        } else if (technique.category === 'uchi-waza') {
            if (technique.subcategory === 'mano-cerrada') {
                selector = '#uchi-waza .subcategory:contains("Golpes con la Mano Cerrada") .techniques-grid';
            } else if (technique.subcategory === 'mano-abierta') {
                selector = '#uchi-waza .subcategory:contains("Golpes con la Mano Abierta") .techniques-grid';
            } else if (technique.subcategory === 'otras-partes') {
                selector = '#uchi-waza .subcategory:contains("Golpes con Otras Partes") .techniques-grid';
            } else if (technique.subcategory === 'ambas-manos') {
                selector = '#uchi-waza .subcategory:contains("Golpes con Ambas Manos") .techniques-grid';
            }
        } else if (technique.category === 'taibuki-waza') {
            if (technique.subcategory === 'codo') {
                selector = '#taibuki-waza .subcategory:contains("Golpes con Codo") .techniques-grid';
            } else if (technique.subcategory === 'otras-partes') {
                selector = '#taibuki-waza .subcategory:contains("Golpes con Otras Partes") .techniques-grid';
            }
        } else {
            const subcategoryTitle = getSubcategoryTitle(technique.subcategory);
            selector = `#${technique.category} .subcategory:contains('${subcategoryTitle}') .techniques-grid`;
        }
        
        console.log(`Intentando colocar ${id} en selector: ${selector}`);
        
        const container = $(selector);
        if (container.length) {
            container.append(card);
            console.log(`✅ Técnica ${id} colocada correctamente`);
        } else {
            console.warn(`❌ No se encontró contenedor para: ${id} (${technique.category}, ${technique.subcategory})`);
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
    
    // Valores predeterminados para multimedia si no están definidos
    const videoId = technique.videoId || 'TdYQ3jX8Y1c'; // ID de video predeterminado
    const imagePath = technique.imagePath || '../img/techniques/placeholder.jpg'; // Ruta de imagen predeterminada
    
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
        
        <div class="technique-info-sections">
            <div class="technique-detail-section">
                <h3>Descripción</h3>
                <p>${technique.description}</p>
            </div>
            
            <div class="technique-detail-section">
                <h3>Características principales</h3>
                <ul class="details-list">
                    ${technique.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="technique-multimedia">
            <div class="technique-image">
                <img src="${imagePath}" alt="${technique.name}" />
            </div>
            <div class="technique-video">
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
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
        'pies-piernas': 'Defensas con Pies y Piernas',
        'defensas-dobles': 'Defensas Dobles',
        'variantes': 'Variantes',
        'mano-cerrada': 'Golpes con la Mano Cerrada',
        'mano-abierta': 'Golpes con la Mano Abierta',
        'basicas': 'Tipos de Patadas',
        'ambas-manos': 'Golpes con Ambas Manos',
        'otras-partes': 'Golpes con Otras Partes',
        'ambos-puños': 'Ataques con Ambos Puños',
        'codo': 'Golpes con Codo'
    };
    return titles[subcategory] || subcategory;
}

function getCategoryName(category) {
    const categories = {
        'dachi-waza': 'Posiciones',
        'uke-waza': 'Defensas',
        'tsuki-waza': 'Golpes Directos',
        'uchi-waza': 'Golpes Indirectos',
        'taibuki-waza': 'Golpes con Otras Partes',
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

// Función para depurar y confirmar carga de técnicas
$(document).ready(function() {
    // Verificación de subcategorías de Uchi Waza
    console.log("Verificando técnicas de Uchi Waza:");
    
    // Lista de técnicas a verificar
    const techniquesList = ['tetsui-uchi', 'uraken-uchi', 'shuto-uchi', 'haito-uchi', 
                           'haishu-uchi', 'sho-uchi', 'seiryuto-uchi', 'washide-uchi'];
    
    techniquesList.forEach(id => {
        if (techniquesData[id]) {
            const technique = techniquesData[id];
            console.log(`Técnica ${id} encontrada: categoría=${technique.category}, subcategoría=${technique.subcategory}`);
            
            const subcategoryTitle = getSubcategoryTitle(technique.subcategory);
            const selector = `#${technique.category} .subcategory:contains('${subcategoryTitle}') .techniques-grid`;
            const container = $(selector);
            console.log(`Contenedor para ${id}: ${container.length > 0 ? 'encontrado' : 'NO encontrado'}`);
        } else {
            console.warn(`Técnica ${id} no encontrada en techniquesData`);
        }
    });
});

// Función para actualizar los filtros activos
function updateActiveFilters(type, text, value) {
    // Eliminar filtro existente del mismo tipo
    $(`.filter-tag[data-type="${type}"]`).remove();
    
    // Añadir nuevo filtro
    const filterTag = `<span class="filter-tag" data-type="${type}" data-value="${value}">
        ${text} <i class="fas fa-times"></i>
    </span>`;
    
    $('.filter-tags').append(filterTag);
    
    // Evento para eliminar filtro al hacer clic
    $('.filter-tag').click(function() {
        const type = $(this).data('type');
        
        if (type === 'category') {
            $('.filter-btn[data-category="all"]').addClass('active');
            $('.technique-category').show();
        } else if (type === 'subcategory') {
            $('.subcategory').show();
        } else if (type === 'level') {
            $('.technique-card').show();
        }
        
        $(this).remove();
    });
}