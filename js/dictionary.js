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
    },
    // Jerarquías
    {
        id: "shihan",
        term: "Shihan",
        japanese: "師範",
        romaji: "Shihan",
        meaning: "Maestro, Instructor Jefe",
        category: "hierarchy",
        details: "Título honorífico otorgado a instructores de alto nivel que han alcanzado un profundo entendimiento técnico y filosófico del arte marcial. Generalmente designa a un maestro de maestros."
    },
    {
        id: "sensei",
        term: "Sensei",
        japanese: "先生",
        romaji: "Sensei",
        meaning: "Maestro, Profesor",
        category: "hierarchy",
        details: "Término utilizado para referirse al instructor o maestro en el dojo. Literalmente significa 'el que ha nacido antes' o 'el que va por delante', indicando el respeto hacia alguien con más experiencia y conocimiento."
    },
    {
        id: "sempai",
        term: "Sempai",
        japanese: "先輩",
        romaji: "Senpai",
        meaning: "Compañero más antiguo, estudiante avanzado",
        category: "hierarchy",
        details: "Estudiante con mayor experiencia y antigüedad que ayuda al sensei y sirve como ejemplo para los kohai (estudiantes más nuevos). Tiene la responsabilidad de guiar a los principiantes en el entrenamiento."
    },
    {
        id: "kohai",
        term: "Kohai",
        japanese: "後輩",
        romaji: "Kōhai",
        meaning: "Compañero más nuevo, estudiante junior",
        category: "hierarchy",
        details: "Estudiante con menos antigüedad o experiencia. Debe mostrar respeto hacia los sempai y el sensei, y aprender de ellos siguiendo su ejemplo."
    },

    // Direcciones
    {
        id: "hidari",
        term: "Hidari",
        japanese: "左",
        romaji: "Hidari",
        meaning: "Izquierda",
        category: "directions",
        details: "Término utilizado para indicar el lado izquierdo o una técnica ejecutada con el lado izquierdo del cuerpo."
    },
    {
        id: "mae",
        term: "Mae",
        japanese: "前",
        romaji: "Mae",
        meaning: "Frontal, adelante",
        category: "directions",
        details: "Dirección hacia el frente o adelante. Se usa frecuentemente para describir técnicas que se ejecutan hacia adelante, como mae-geri (patada frontal)."
    },
    {
        id: "migi",
        term: "Migi",
        japanese: "右",
        romaji: "Migi",
        meaning: "Derecha",
        category: "directions",
        details: "Término utilizado para indicar el lado derecho o una técnica ejecutada con el lado derecho del cuerpo."
    },
    {
        id: "ushiro",
        term: "Ushiro",
        japanese: "後ろ",
        romaji: "Ushiro",
        meaning: "Atrás, hacia atrás",
        category: "directions",
        details: "Dirección hacia atrás. Se utiliza para describir técnicas que se ejecutan hacia atrás, como ushiro-geri (patada hacia atrás)."
    },
    {
        id: "yoko",
        term: "Yoko",
        japanese: "横",
        romaji: "Yoko",
        meaning: "Lateral, hacia el costado",
        category: "directions",
        details: "Dirección hacia el costado o lateral. Se usa para describir técnicas que se ejecutan hacia el lado, como yoko-geri (patada lateral)."
    },

    // Términos de entrenamiento
    {
        id: "seiza",
        term: "Seiza",
        japanese: "正座",
        romaji: "Seiza",
        meaning: "Sentarse en posición arrodillada, sobre los talones",
        category: "training",
        details: "Posición formal de sentarse sobre los talones con la espalda recta. Se utiliza al inicio y final de la clase para el saludo y a veces durante explicaciones del sensei o para la meditación."
    },
    {
        id: "mokuso",
        term: "Mokuso",
        japanese: "黙想",
        romaji: "Mokusō",
        meaning: "Meditación, concentrarse cerrando los ojos",
        category: "training",
        details: "Breve período de meditación con los ojos cerrados que suele realizarse al inicio y final de la clase para preparar o calmar la mente y centrarse en el entrenamiento."
    },
    {
        id: "mokuso-yame",
        term: "Mokuso Yame",
        japanese: "黙想やめ",
        romaji: "Mokusō Yame",
        meaning: "Fin de la meditación",
        category: "commands",
        details: "Orden que indica el final del período de meditación, tras la cual los practicantes abren los ojos y se preparan para el saludo o la siguiente instrucción."
    },
    {
        id: "yoi",
        term: "Yoi",
        japanese: "用意",
        romaji: "Yoi",
        meaning: "Preparado, atención, estado de alerta",
        category: "commands",
        details: "Comando que indica prepararse para la acción. Los practicantes adoptan una postura preparatoria, generalmente con los pies juntos y las manos a los costados o frente al cuerpo."
    },
    {
        id: "kamae",
        term: "Kamae",
        japanese: "構え",
        romaji: "Kamae",
        meaning: "Actitud defensiva o de guardia",
        category: "concepts",
        details: "Postura de guardia o preparación tanto física como mental. Representa una posición desde la cual se pueden ejecutar técnicas defensivas u ofensivas con eficacia."
    },
    {
        id: "hajime",
        term: "Hajime",
        japanese: "始め",
        romaji: "Hajime",
        meaning: "Comenzar",
        category: "commands",
        details: "Orden que indica el inicio de una actividad, como un combate, una demostración de kata o un ejercicio específico."
    },
    {
        id: "yame",
        term: "Yame",
        japanese: "やめ",
        romaji: "Yame",
        meaning: "Parar, terminar",
        category: "commands",
        details: "Orden para detener inmediatamente la actividad que se está realizando. Los practicantes deben detenerse en la posición en que están y esperar nuevas instrucciones."
    },
    {
        id: "yasume",
        term: "Yasume",
        japanese: "休め",
        romaji: "Yasume",
        meaning: "Descanso",
        category: "commands",
        details: "Comando que indica un período de descanso. Los practicantes generalmente adoptan una postura relajada pero atenta, a menudo con los pies separados al ancho de los hombros."
    },
    
    // Términos técnicos organizados alfabéticamente
    {
        id: "age",
        term: "Age",
        japanese: "上げ",
        romaji: "Age",
        meaning: "Ascendente",
        category: "techniques",
        details: "Término que describe un movimiento ascendente. Se utiliza en varias técnicas como age-uke (bloqueo ascendente) o age-zuki (golpe ascendente)."
    },
    {
        id: "ashi",
        term: "Ashi",
        japanese: "足",
        romaji: "Ashi",
        meaning: "Pierna, pie",
        category: "anatomy",
        details: "Término que se refiere a la pierna o al pie. Aparece en numerosas técnicas como ashi-barai (barrido con el pie) o en nombres de posturas como tsuru-ashi-dachi (posición de la grulla)."
    },
    {
        id: "ashi-barai",
        term: "Ashi Barai",
        japanese: "足払い",
        romaji: "Ashi Barai",
        meaning: "Barrido de pie",
        category: "techniques",
        details: "Técnica de barrido donde se utiliza la planta del pie para barrer los tobillos o pies del oponente con el objetivo de desequilibrarlo o derribarlo."
    },
    {
        id: "bunkai",
        term: "Bunkai",
        japanese: "分解",
        romaji: "Bunkai",
        meaning: "Análisis, descomposición",
        category: "concepts",
        details: "Estudio y aplicación práctica de los movimientos de un kata, descomponiendo cada técnica para comprender sus posibles usos en situaciones reales de defensa personal."
    },
    {
        id: "chudan",
        term: "Chudan",
        japanese: "中段",
        romaji: "Chūdan",
        meaning: "Nivel medio (zona del torso)",
        category: "concepts",
        details: "Uno de los tres niveles de ataque o defensa en karate, que comprende el área del cuerpo desde la cadera hasta los hombros, incluyendo el abdomen, costillas y pecho."
    },
    {
        id: "dachi",
        term: "Dachi",
        japanese: "立ち",
        romaji: "Dachi",
        meaning: "Posición, postura",
        category: "stances",
        details: "Término que se refiere a las diversas posturas o posiciones de pie utilizadas en karate. Las distintas posturas proporcionan estabilidad, movilidad y potencia para ejecutar técnicas."
    },
    {
        id: "do",
        term: "Do",
        japanese: "道",
        romaji: "Dō",
        meaning: "Camino, vía",
        category: "concepts",
        details: "Concepto filosófico que representa el camino de perfeccionamiento personal a través de la práctica constante. En Karate-Do, indica que la práctica va más allá del combate, buscando el desarrollo integral del practicante."
    },
    {
        id: "dojo",
        term: "Dojo",
        japanese: "道場",
        romaji: "Dōjō",
        meaning: "Lugar del camino, sala de entrenamiento",
        category: "concepts",
        details: "Lugar dedicado a la práctica y estudio de las artes marciales. Tradicionalmente se considera un espacio sagrado donde se cultiva tanto la técnica como el espíritu."
    },
    {
        id: "empi",
        term: "Empi",
        japanese: "肘",
        romaji: "Empi",
        meaning: "Codo",
        category: "anatomy",
        details: "Término que se refiere al codo. Se utiliza en técnicas como empi-uchi (golpe con el codo) en sus distintas variantes: mae-empi (codo frontal), yoko-empi (codo lateral), etc."
    },
    {
        id: "fudo-dachi",
        term: "Fudo Dachi",
        japanese: "不動立ち",
        romaji: "Fudō Dachi",
        meaning: "Posición inamovible",
        category: "stances",
        details: "Postura firme y estable, intermedia entre zenkutsu-dachi y kiba-dachi. El peso se distribuye equitativamente entre ambas piernas, que están ligeramente flexionadas."
    },
    {
        id: "gedan",
        term: "Gedan",
        japanese: "下段",
        romaji: "Gedan",
        meaning: "Nivel bajo",
        category: "concepts",
        details: "Uno de los tres niveles de ataque o defensa en karate que comprende el área desde la cadera hacia abajo. Las técnicas gedan generalmente se dirigen a las piernas o la zona baja del abdomen."
    },
    {
        id: "gedan-barai",
        term: "Gedan Barai",
        japanese: "下段払い",
        romaji: "Gedan Barai",
        meaning: "Bloqueo bajo, barrido descendente",
        category: "techniques",
        details: "Técnica de defensa que consiste en un movimiento descendente del brazo para bloquear ataques dirigidos a la parte inferior del cuerpo o desviar patadas."
    },
    {
        id: "geri",
        term: "Geri",
        japanese: "蹴り",
        romaji: "Geri",
        meaning: "Patada",
        category: "techniques",
        details: "Término general para las técnicas de patada en karate. Existen numerosas variantes según la dirección, altura, superficie de impacto y ejecución."
    },
    {
        id: "gyaku",
        term: "Gyaku",
        japanese: "逆",
        romaji: "Gyaku",
        meaning: "Inverso, contrario",
        category: "concepts",
        details: "Término que indica una acción contraria o inversa. Por ejemplo, gyaku-zuki es un golpe con el puño contrario al pie adelantado."
    },
    {
        id: "haisoku",
        term: "Haisoku",
        japanese: "背足",
        romaji: "Haisoku",
        meaning: "Empeine",
        category: "anatomy",
        details: "Parte superior del pie (empeine) utilizada como superficie de golpeo en algunas patadas, especialmente en mawashi-geri (patada circular)."
    },
    {
        id: "haito",
        term: "Haito",
        japanese: "背刀",
        romaji: "Haito",
        meaning: "Canto interno de la mano",
        category: "anatomy",
        details: "Lado interior de la mano (lado del pulgar) utilizado como arma de golpeo en técnicas como haito-uchi (golpe con el canto interno de la mano)."
    },
    {
        id: "hara",
        term: "Hara",
        japanese: "腹",
        romaji: "Hara",
        meaning: "Vientre, centro vital",
        category: "concepts",
        details: "Centro físico y energético del cuerpo situado en el bajo abdomen. En las artes marciales se considera el origen de la fuerza y la energía (ki), y es fundamental mantenerlo estable durante la ejecución de técnicas."
    },
    {
        id: "heiko-dachi",
        term: "Heiko Dachi",
        japanese: "平行立ち",
        romaji: "Heikō Dachi",
        meaning: "Posición de pies paralelos",
        category: "stances",
        details: "Postura básica con los pies separados al ancho de los hombros y paralelos entre sí. Es una posición natural utilizada a menudo para ejercicios básicos y como posición de espera."
    },
    {
        id: "jodan",
        term: "Jodan",
        japanese: "上段",
        romaji: "Jōdan",
        meaning: "Nivel alto (cabeza y cuello)",
        category: "concepts",
        details: "Uno de los tres niveles de ataque o defensa en karate que comprende el área desde los hombros hacia arriba, incluyendo la cabeza y el cuello."
    },
    {
        id: "kara",
        term: "Kara",
        japanese: "空",
        romaji: "Kara",
        meaning: "Vacío",
        category: "concepts",
        details: "Primer kanji de 'karate' que significa 'vacío'. Representa tanto la idea de practicar sin armas (manos vacías) como el concepto zen de vaciar la mente para alcanzar la plenitud."
    },
    {
        id: "kata",
        term: "Kata",
        japanese: "型",
        romaji: "Kata",
        meaning: "Forma, patrón",
        category: "concepts",
        details: "Secuencia preestablecida de movimientos que simulan un combate contra múltiples oponentes imaginarios. Los kata preservan y transmiten las técnicas tradicionales y los principios del karate."
    },
    {
        id: "kiai",
        term: "Kiai",
        japanese: "気合",
        romaji: "Kiai",
        meaning: "Grito de energía, unión del espíritu",
        category: "concepts",
        details: "Grito o vocalización que acompaña a ciertas técnicas para potenciar la fuerza física mediante la concentración mental y la correcta respiración. Representa la liberación explosiva de energía (ki)."
    },
    {
        id: "kiba-dachi",
        term: "Kiba Dachi",
        japanese: "騎馬立ち",
        romaji: "Kiba Dachi",
        meaning: "Posición del jinete",
        category: "stances",
        details: "Postura con las piernas separadas lateralmente y las rodillas dobladas, similar a estar montando a caballo. El peso se distribuye igualmente entre ambas piernas, que se mantienen paralelas."
    },
    {
        id: "kihon",
        term: "Kihon",
        japanese: "基本",
        romaji: "Kihon",
        meaning: "Fundamentos, técnicas básicas",
        category: "concepts",
        details: "Práctica de las técnicas fundamentales del karate, que incluye posturas, golpes, bloqueos y patadas básicas. El entrenamiento de kihon es esencial antes de avanzar a formas más complejas."
    },
    {
        id: "kime",
        term: "Kime",
        japanese: "極め",
        romaji: "Kime",
        meaning: "Decisión, foco, concentración de fuerza",
        category: "concepts",
        details: "Concentración total de la fuerza física y mental en un punto y momento específicos para maximizar la potencia de una técnica. Se caracteriza por una contracción breve e intensa de los músculos relevantes."
    },
    {
        id: "kokutsu-dachi",
        term: "Kokutsu Dachi",
        japanese: "後屈立ち",
        romaji: "Kokutsu Dachi",
        meaning: "Posición hacia atrás",
        category: "stances",
        details: "Postura defensiva con aproximadamente 70% del peso sobre la pierna trasera, que está flexionada. El pie delantero apunta hacia adelante mientras el trasero está girado unos 45 grados hacia afuera."
    },
    {
        id: "kumite",
        term: "Kumite",
        japanese: "組手",
        romaji: "Kumite",
        meaning: "Encuentro de manos, combate",
        category: "concepts",
        details: "Práctica de combate que permite aplicar las técnicas de karate con un oponente real. Puede ser preestablecido (kihon kumite) o libre (jiyu kumite), dependiendo del nivel de los practicantes."
    },
    {
        id: "mae-geri",
        term: "Mae Geri",
        japanese: "前蹴り",
        romaji: "Mae Geri",
        meaning: "Patada frontal",
        category: "techniques",
        details: "Patada directa hacia adelante que puede ejecutarse con la punta del pie (koshi) para ataques precisos o con la planta (kekomi) para golpes penetrantes. Es una de las patadas más básicas y versátiles."
    },
    {
        id: "mawashi",
        term: "Mawashi",
        japanese: "回し",
        romaji: "Mawashi",
        meaning: "Circular, rotatorio",
        category: "concepts",
        details: "Término que indica un movimiento circular o rotatorio. Se aplica a varias técnicas como mawashi-geri (patada circular) o mawashi-zuki (golpe circular)."
    },
    {
        id: "musubi-dachi",
        term: "Musubi Dachi",
        japanese: "結び立ち",
        romaji: "Musubi Dachi",
        meaning: "Posición formal con talones juntos",
        category: "stances",
        details: "Postura formal donde los talones están juntos y las puntas de los pies separadas formando un ángulo de aproximadamente 45 grados. Se utiliza frecuentemente para el saludo formal (rei)."
    },
    {
        id: "neko-ashi-dachi",
        term: "Neko Ashi Dachi",
        japanese: "猫足立ち",
        romaji: "Neko Ashi Dachi",
        meaning: "Posición del gato",
        category: "stances",
        details: "Postura defensiva donde aproximadamente el 90% del peso descansa sobre la pierna trasera. El pie delantero toca ligeramente el suelo con la planta, listo para ejecutar una patada o avanzar rápidamente."
    },
    {
        id: "nukite",
        term: "Nukite",
        japanese: "貫手",
        romaji: "Nukite",
        meaning: "Mano en punta, golpe con punta de dedos",
        category: "techniques",
        details: "Técnica de ataque donde los dedos extendidos y rígidos se utilizan para golpear puntos vulnerables del cuerpo. Puede ejecutarse con uno, dos o cuatro dedos según la variante."
    },
    {
        id: "oi-zuki",
        term: "Oi Zuki",
        japanese: "追い突き",
        romaji: "Oi Zuki",
        meaning: "Golpe del mismo lado",
        category: "techniques",
        details: "Golpe directo con el puño del mismo lado que la pierna adelantada. Generalmente se ejecuta avanzando un paso para aumentar la potencia y el alcance del golpe."
    },
    {
        id: "rei",
        term: "Rei",
        japanese: "礼",
        romaji: "Rei",
        meaning: "Saludo, respeto",
        category: "etiquette",
        details: "Saludo formal que muestra respeto y cortesía. Puede realizarse de pie (ritsu-rei) o arrodillado (za-rei). Es fundamental en la etiqueta del dojo y se practica al entrar y salir, y antes y después de entrenar con compañeros."
    },
    {
        id: "shiko-dachi",
        term: "Shiko Dachi",
        japanese: "四股立ち",
        romaji: "Shiko Dachi",
        meaning: "Posición del luchador de sumo",
        category: "stances",
        details: "Postura amplia y estable similar a la posición de un luchador de sumo. Los pies están separados más allá del ancho de los hombros y girados hacia afuera en ángulos de 45 grados."
    },
    {
        id: "shuto",
        term: "Shuto",
        japanese: "手刀",
        romaji: "Shuto",
        meaning: "Canto de la mano, mano de sable",
        category: "anatomy",
        details: "Borde externo de la mano (lado del dedo meñique) utilizado tanto para técnicas de ataque (shuto-uchi) como de defensa (shuto-uke). Es una de las armas naturales más versátiles en karate."
    },
    {
        id: "tsuki",
        term: "Tsuki",
        japanese: "突き",
        romaji: "Tsuki",
        meaning: "Golpe directo, puñetazo",
        category: "techniques",
        details: "Técnica básica de golpeo con el puño en línea recta. Existen numerosas variantes según la posición, dirección y forma de ejecución (oi-zuki, gyaku-zuki, kizami-zuki, etc.)."
    },
    {
        id: "uke",
        term: "Uke",
        japanese: "受け",
        romaji: "Uke",
        meaning: "Bloqueo, defensa",
        category: "techniques",
        details: "Término que se refiere a las técnicas defensivas o bloqueos utilizados para desviar o detener ataques. Los bloqueos en karate no son meramente defensivos sino que también pueden causar daño al atacante."
    },
    {
        id: "uraken",
        term: "Uraken",
        japanese: "裏拳",
        romaji: "Uraken",
        meaning: "Revés de puño",
        category: "techniques",
        details: "Golpe realizado con el dorso del puño (nudillos hacia afuera). Puede ejecutarse en varias direcciones y es especialmente efectivo en ataques rápidos a zonas como la sien o la mandíbula."
    },
    {
        id: "waza",
        term: "Waza",
        japanese: "技",
        romaji: "Waza",
        meaning: "Técnica",
        category: "concepts",
        details: "Término general que se refiere a las técnicas o habilidades marciales. En karate se clasifica en kihon-waza (técnicas básicas), uke-waza (técnicas defensivas), tsuki-waza (técnicas de golpeo), etc."
    },
    {
        id: "yoko-geri",
        term: "Yoko Geri",
        japanese: "横蹴り",
        romaji: "Yoko Geri",
        meaning: "Patada lateral",
        category: "techniques",
        details: "Patada ejecutada lateralmente utilizando el canto exterior del pie (sokuto) como superficie de impacto. Tiene dos variantes principales: yoko-geri keage (ascendente) y yoko-geri kekomi (penetrante)."
    },
    {
        id: "zanshin",
        term: "Zanshin",
        japanese: "残心",
        romaji: "Zanshin",
        meaning: "Conciencia constante, vigilancia",
        category: "concepts",
        details: "Estado de alerta y preparación constante. Representa la conciencia completa antes, durante y después de ejecutar una técnica, manteniendo la concentración y disposición para responder a posibles contraataques."
    },
    {
        id: "zenkutsu-dachi",
        term: "Zenkutsu Dachi",
        japanese: "前屈立ち",
        romaji: "Zenkutsu Dachi",
        meaning: "Posición adelantada",
        category: "stances",
        details: "Postura ofensiva con aproximadamente 60% del peso en la pierna delantera, que está flexionada. La pierna trasera se mantiene recta, proporcionando estabilidad y potencia para ataques frontales."
    },
    // Nuevos términos
    {
        id: "ai",
        term: "Ai",
        japanese: "合い",
        romaji: "Ai",
        meaning: "Armonía, unificación, amor",
        category: "concepts",
        details: "Concepto fundamental en las artes marciales japonesas que representa la armonía entre cuerpo y mente, así como entre los practicantes. También implica la idea de unificación y adaptación a las acciones del oponente."
    },
    {
        id: "atama",
        term: "Atama",
        japanese: "頭",
        romaji: "Atama",
        meaning: "Cabeza",
        category: "anatomy",
        details: "Término que se refiere a la cabeza. En karate, se considera una zona vital que debe protegerse y también puede utilizarse como arma en técnicas avanzadas de impacto."
    },
    {
        id: "ago",
        term: "Ago",
        japanese: "顎",
        romaji: "Ago",
        meaning: "Mandíbula",
        category: "anatomy",
        details: "Parte inferior de la cara que comprende la mandíbula. Es un punto vulnerable en combate y objetivo de algunas técnicas específicas como el ago-uchi (golpe a la mandíbula)."
    },
    {
        id: "aka",
        term: "Aka",
        japanese: "赤",
        romaji: "Aka",
        meaning: "Rojo",
        category: "competition",
        details: "Color que identifica a uno de los competidores en torneos de karate. El competidor designado como 'aka' lleva cinturón rojo durante el combate para diferenciarlo de su oponente (ao, azul)."
    },
    {
        id: "arigato",
        term: "Arigato",
        japanese: "ありがとう",
        romaji: "Arigatō",
        meaning: "Gracias",
        category: "etiquette",
        details: "Expresión de agradecimiento utilizada en el dojo para mostrar respeto y gratitud hacia el sensei, los compañeros o por la oportunidad de entrenar. Forma parte de la etiqueta tradicional del karate."
    },
    {
        id: "ate",
        term: "Ate",
        japanese: "当て",
        romaji: "Ate",
        meaning: "Golpear, impactar",
        category: "techniques",
        details: "Sufijo que describe una técnica de golpe o impacto directo con una parte específica del cuerpo. Aparece en términos como hiji-ate (golpe con el codo) o hiza-ate (golpe con la rodilla)."
    },
    {
        id: "ashikubi",
        term: "Ashikubi",
        japanese: "足首",
        romaji: "Ashikubi",
        meaning: "Tobillo",
        category: "anatomy",
        details: "Articulación que une el pie con la pierna. En karate es importante mantener fuertes los tobillos para tener una base estable en las posturas y realizar correctamente las técnicas de patada."
    },
    {
        id: "aihanmi",
        term: "Aihanmi",
        japanese: "相半身",
        romaji: "Aihanmi",
        meaning: "Posición simétrica",
        category: "stances",
        details: "Situación en la que dos oponentes tienen el mismo pie adelantado, creando una posición simétrica. Esta posición tiene implicaciones específicas en términos de distancia, ángulos de ataque y estrategias defensivas."
    },
    {
        id: "atemi",
        term: "Atemi",
        japanese: "当て身",
        romaji: "Atemi",
        meaning: "Golpe a un punto vital",
        category: "techniques",
        details: "Técnica de golpeo dirigida a puntos vitales o vulnerables del cuerpo del oponente. Los atemi son utilizados tanto como técnicas de ataque primario como para crear aperturas para otras técnicas."
    },
    {
        id: "banzai",
        term: "Banzai",
        japanese: "万歳",
        romaji: "Banzai",
        meaning: "Diez mil años de felicidad",
        category: "expressions",
        details: "Expresión japonesa tradicional que significa literalmente 'diez mil años'. Se utiliza como grito de celebración o victoria, similar a '¡viva!' en español. Históricamente también se usaba como grito de guerra."
    },
    {
        id: "bo",
        term: "Bo",
        japanese: "棒",
        romaji: "Bō",
        meaning: "Bastón largo",
        category: "weapons",
        details: "Arma tradicional de kobudo que consiste en un bastón largo de madera, generalmente de roble, de aproximadamente 1.80 metros de longitud. Es una de las armas fundamentales en el entrenamiento de artes marciales de Okinawa."
    },
    {
        id: "bushi",
        term: "Bushi",
        japanese: "武士",
        romaji: "Bushi",
        meaning: "Guerrero",
        category: "history",
        details: "Término japonés que designaba a la clase guerrera en el Japón feudal, comúnmente conocidos como samurái. Los bushi seguían un estricto código de conducta llamado Bushido ('el camino del guerrero')."
    },
    {
        id: "bushido",
        term: "Bushido",
        japanese: "武士道",
        romaji: "Bushidō",
        meaning: "Camino del guerrero",
        category: "concepts",
        details: "Código ético que seguían los samuráis del Japón feudal. Se basaba en principios como la lealtad, el honor, la sinceridad, la valentía, la compasión, el respeto y la rectitud. Su influencia sigue presente en las artes marciales modernas."
    },
    {
        id: "chakugan",
        term: "Chakugan",
        japanese: "着眼",
        romaji: "Chakugan",
        meaning: "Mirada",
        category: "concepts",
        details: "Término que se refiere a la forma correcta de enfocar la mirada durante la práctica del karate. Implica mantener la mirada firme y concentrada, pero sin fijarse exclusivamente en un punto, lo que permitiría detectar movimientos periféricos."
    },
    {
        id: "dai",
        term: "Dai",
        japanese: "大",
        romaji: "Dai",
        meaning: "Grande",
        category: "terminology",
        details: "Carácter japonés que significa 'grande' o 'mayor'. Se utiliza frecuentemente en los nombres de kata para indicar la versión principal o más amplia, como en Bassai Dai o Kanku Dai, en contraste con sus versiones 'Sho' (pequeño)."
    },
    {
        id: "daisho",
        term: "Daisho",
        japanese: "大小",
        romaji: "Daishō",
        meaning: "Grande y pequeño",
        category: "weapons",
        details: "Par de sables tradicionalmente llevados por los samuráis: el katana (sable largo) y el wakizashi (sable corto). El término combina los kanji de 'grande' (dai) y 'pequeño' (sho), simbolizando la complementariedad de estas dos armas."
    },
    {
        id: "de-ashi",
        term: "De Ashi",
        japanese: "出足",
        romaji: "De Ashi",
        meaning: "Pie adelantado",
        category: "terminology",
        details: "Término que se refiere al pie que se adelanta en un movimiento o técnica. El control del de-ashi es crucial para mantener el equilibrio y generar potencia en los desplazamientos y ataques."
    },
    {
        id: "dojo-kun",
        term: "Dojo Kun",
        japanese: "道場訓",
        romaji: "Dōjō Kun",
        meaning: "Preceptos del dojo",
        category: "etiquette",
        details: "Conjunto de principios morales y éticos que guían la conducta de los practicantes de karate tanto dentro como fuera del dojo. Suelen recitarse al finalizar el entrenamiento como recordatorio de los valores del arte marcial."
    },
    {
        id: "encho-sen",
        term: "Encho Sen",
        japanese: "延長戦",
        romaji: "Enchō Sen",
        meaning: "Prolongación del combate",
        category: "competition",
        details: "En competición, período adicional de combate que se concede cuando existe un empate al final del tiempo reglamentario. Durante el encho-sen, la primera técnica válida determina el ganador."
    },
    {
        id: "ensan-no-metsuke",
        term: "Ensan No Metsuke",
        japanese: "遠山の目付け",
        romaji: "Enzan No Metsuke",
        meaning: "Mirar a la montaña distante",
        category: "concepts",
        details: "Concepto visual en karate que describe una forma de mirar sin fijar la vista en un punto específico. Permite percibir todo el entorno y detectar movimientos periféricos, similar a contemplar una montaña lejana."
    },
    {
        id: "embusen",
        term: "Embusen",
        japanese: "演武線",
        romaji: "Embusen",
        meaning: "Diagrama del kata",
        category: "concepts",
        details: "Línea o patrón de movimiento que se sigue durante la ejecución de un kata. Representa el recorrido o la trayectoria que realiza el practicante, generalmente en forma de I, H, T u otras configuraciones específicas."
    },
    {
        id: "fumikiri",
        term: "Fumikiri",
        japanese: "踏み切り",
        romaji: "Fumikiri",
        meaning: "Golpe cortante con el pie",
        category: "techniques",
        details: "Técnica de patada que utiliza un movimiento cortante, generalmente ejecutada con el canto externo del pie (sokuto). Su objetivo es cortar o penetrar en las defensas del oponente con un movimiento preciso y afilado."
    },
    {
        id: "fumikomi",
        term: "Fumikomi",
        japanese: "踏み込み",
        romaji: "Fumikomi",
        meaning: "Golpe aplastante con el pie",
        category: "techniques",
        details: "Técnica de patada descendente o pisotón que utiliza el talón o la planta del pie para golpear hacia abajo con fuerza. Se utiliza contra objetivos bajos como rodillas, empeines o pies del oponente."
    },
    {
        id: "gi",
        term: "Gi",
        japanese: "着",
        romaji: "Gi",
        meaning: "Uniforme de entrenamiento",
        category: "equipment",
        details: "Traje de entrenamiento utilizado en karate y otras artes marciales japonesas. Está compuesto por una chaqueta (uwagi), pantalón (zubon) y cinturón (obi). Tradicionalmente es de color blanco, simbolizando la pureza y la seriedad del entrenamiento."
    },
    {
        id: "geta",
        term: "Geta",
        japanese: "下駄",
        romaji: "Geta",
        meaning: "Sandalias de madera",
        category: "culture",
        details: "Calzado tradicional japonés consistente en una base de madera elevada por dos soportes transversales. Históricamente, algunos maestros de karate entrenaban con geta para fortalecer pies y tobillos y mejorar el equilibrio."
    },
    {
        id: "gomen",
        term: "Gomen",
        japanese: "ごめん",
        romaji: "Gomen",
        meaning: "Perdón",
        category: "etiquette",
        details: "Expresión japonesa de disculpa utilizada en el dojo cuando se comete un error o se golpea involuntariamente a un compañero durante el entrenamiento. Es parte importante de la etiqueta y respeto mutuo en la práctica del karate."
    },
    {
        id: "go-no-sen",
        term: "Go No Sen",
        japanese: "後の先",
        romaji: "Go No Sen",
        meaning: "Contraataque",
        category: "strategy",
        details: "Principio estratégico que consiste en responder al ataque del oponente después de que este haya sido iniciado. Implica reconocer la técnica del oponente y reaccionar con una respuesta apropiada en el momento óptimo."
    },
    {
        id: "ganmen",
        term: "Ganmen",
        japanese: "顔面",
        romaji: "Ganmen",
        meaning: "Cara",
        category: "anatomy",
        details: "Término que se refiere a la cara o rostro. En karate, es una zona objetivo para ciertas técnicas, pero también una región que debe protegerse con especial cuidado en la práctica y competición."
    },
    {
        id: "go-shin",
        term: "Go Shin",
        japanese: "護身",
        romaji: "Goshin",
        meaning: "Defensa personal",
        category: "concepts",
        details: "Término que se refiere a las técnicas y métodos de autoprotección y defensa personal. El objetivo principal del go-shin es la seguridad y supervivencia del practicante en situaciones de peligro real."
    },
    {
        id: "hachi",
        term: "Hachi",
        japanese: "八",
        romaji: "Hachi",
        meaning: "Ocho",
        category: "counting",
        details: "Número ocho en japonés. Se utiliza en la numeración de técnicas, movimientos o durante el conteo en clase. En algunas tradiciones de karate, este número tiene significados específicos."
    },
    {
        id: "hai",
        term: "Hai",
        japanese: "はい",
        romaji: "Hai",
        meaning: "Sí, de acuerdo",
        category: "commands",
        details: "Expresión de afirmación o confirmación utilizada en el dojo para indicar entendimiento o acuerdo con las instrucciones del sensei. Es parte del protocolo formal de comunicación en el entrenamiento tradicional."
    },
    {
        id: "hammi",
        term: "Hammi",
        japanese: "半身",
        romaji: "Hanmi",
        meaning: "Posición en diagonal",
        category: "stances",
        details: "Postura en la que el cuerpo se coloca en diagonal respecto al oponente, presentando un perfil reducido. Permite combinar defensa (al exponer menos superficie corporal) con posibilidades ofensivas desde ángulos inesperados."
    },
    {
        id: "hiosi",
        term: "Hiosi",
        japanese: "拍子",
        romaji: "Hyōshi",
        meaning: "Ritmo",
        category: "concepts",
        details: "Concepto que se refiere al ritmo, cadencia y timing en la ejecución de técnicas. Un buen hiosi permite optimizar la energía, la coordinación y el momento de impacto en las técnicas de karate."
    },
    {
        id: "henka",
        term: "Henka",
        japanese: "変化",
        romaji: "Henka",
        meaning: "Variación, cambio",
        category: "concepts",
        details: "Término que describe una variación o modificación de una técnica básica. Los henka permiten adaptar las técnicas tradicionales a diferentes situaciones y oponentes, mostrando la flexibilidad y profundidad del karate."
    },
    {
        id: "hobaku-waza",
        term: "Hobaku Waza",
        japanese: "捕縛技",
        romaji: "Hobaku Waza",
        meaning: "Técnicas de control y sujeción",
        category: "techniques",
        details: "Conjunto de técnicas de control, retención y esposamiento utilizadas principalmente en aplicaciones de defensa personal y en contextos policiales o de seguridad. Incluyen métodos para inmovilizar a un agresor controlando sus articulaciones."
    },
    {
        id: "hana",
        term: "Hana",
        japanese: "鼻",
        romaji: "Hana",
        meaning: "Nariz",
        category: "anatomy",
        details: "Término que se refiere a la nariz. En karate, es una zona vulnerable que puede ser objetivo de técnicas específicas, pero en entrenamiento se protege para prevenir lesiones."
    },
    {
        id: "hanza",
        term: "Hanza",
        japanese: "半座",
        romaji: "Hanza",
        meaning: "Sentado con las piernas cruzadas",
        category: "stances",
        details: "Posición de sentado con las piernas cruzadas, utilizada en algunas ocasiones para meditación, ceremonias o explicaciones durante el entrenamiento. Difiere de seiza, que es la posición formal arrodillada."
    },
    {
        id: "ao",
        term: "Ao",
        japanese: "青",
        romaji: "Ao",
        meaning: "Azul",
        category: "competition",
        details: "Color que identifica a uno de los competidores en torneos de karate. El competidor designado como 'ao' lleva cinturón azul durante el combate para diferenciarlo de su oponente (aka, rojo)."
    },
    {
        id: "haiwan",
        term: "Haiwan",
        japanese: "背腕",
        romaji: "Haiwan",
        meaning: "Antebrazo",
        category: "anatomy",
        details: "Parte del brazo entre la muñeca y el codo. Utilizado en muchas técnicas de bloqueo como superficie de contacto."
    },
    {
        id: "han-za-rei",
        term: "Han Za Rei",
        japanese: "半座礼",
        romaji: "Han Za Rei",
        meaning: "Saludo con una rodilla apoyada",
        category: "etiquette",
        details: "Forma de saludo intermedia entre el saludo de pie (ritsu-rei) y el saludo formal arrodillado (za-rei). Se realiza apoyando una rodilla en el suelo."
    },
    {
        id: "ha",
        term: "Ha",
        japanese: "歯",
        romaji: "Ha",
        meaning: "Diente",
        category: "anatomy",
        details: "Diente. En karate, es una zona que debe protegerse adecuadamente durante el entrenamiento."
    },
    {
        id: "heigan",
        term: "Heigan",
        japanese: "平眼",
        romaji: "Heigan",
        meaning: "Mirada paralela al suelo",
        category: "concepts",
        details: "Técnica de mirada donde los ojos se mantienen nivelados y enfocados hacia el horizonte, permitiendo una buena percepción periférica y manteniendo la cabeza en posición correcta."
    },
    {
        id: "hiraken",
        term: "Hiraken",
        japanese: "平拳",
        romaji: "Hiraken",
        meaning: "Puño semi-cerrado",
        category: "anatomy",
        details: "Configuración de la mano donde el puño está parcialmente cerrado, con los dedos doblados por la segunda articulación. Se utiliza para golpear superficies más amplias que con el puño cerrado."
    },
    {
        id: "hyoshi",
        term: "Hyoshi",
        japanese: "拍子",
        romaji: "Hyōshi",
        meaning: "Ritmo",
        category: "concepts",
        details: "Ritmo o cadencia en la ejecución de técnicas o katas. El correcto hyoshi implica encontrar el equilibrio adecuado entre velocidad, pausa y fluidez en los movimientos."
    },
    {
        id: "ibuki-sankai",
        term: "Ibuki Sankai",
        japanese: "息吹三回",
        romaji: "Ibuki Sankai",
        meaning: "Respiración profunda, concentrada y sonora",
        category: "breathing",
        details: "Técnica de respiración profunda y audible, realizada tres veces, que se utiliza para centrar la mente y preparar el cuerpo antes de ejercicios intensos o katas avanzados."
    },
    {
        id: "ibuki-nogare",
        term: "Ibuki Nogare",
        japanese: "息吹逃れ",
        romaji: "Ibuki Nogare",
        meaning: "Respiración diafragmática con contracción abdominal sin ruido",
        category: "breathing",
        details: "Técnica de respiración que combina la contracción abdominal del ibuki tradicional pero sin emitir sonido. Desarrolla el control respiratorio y la potencia interna de forma más sutil."
    },
    {
        id: "ipon-kumite",
        term: "Ippon Kumite",
        japanese: "一本組手",
        romaji: "Ippon Kumite",
        meaning: "Combate a un paso",
        category: "kumite",
        details: "Forma básica de práctica de combate donde se realiza un solo ataque y una defensa con contraataque. Permite desarrollar el tiempo, la distancia y la precisión técnica."
    },
    {
        id: "jyu-kumite",
        term: "Jyu Kumite",
        japanese: "自由組手",
        romaji: "Jiyū Kumite",
        meaning: "Combate libre",
        category: "kumite",
        details: "Práctica de combate libre donde los participantes pueden utilizar cualquier técnica dentro de las normas establecidas. A diferencia del combate de competición, está orientado al aprendizaje más que a la puntuación."
    },
    {
        id: "jun-kaiten",
        term: "Jun Kaiten",
        japanese: "順回転",
        romaji: "Jun Kaiten",
        meaning: "Giro de cadera en el mismo sentido que la técnica",
        category: "concepts",
        details: "Movimiento de la cadera en la misma dirección que la técnica ejecutada, lo que produce un efecto de empuje y aumenta la potencia y alcance del golpe."
    },
    {
        id: "karategi",
        term: "Karategi",
        japanese: "空手着",
        romaji: "Karategi",
        meaning: "Traje de karate",
        category: "equipment",
        details: "Uniforme tradicional utilizado para la práctica del karate. Consiste en una chaqueta (uwagi), pantalones (zubon) y un cinturón (obi). El color estándar es blanco, simbolizando pureza y compromiso con el entrenamiento."
    },
    {
        id: "keage",
        term: "Keage",
        japanese: "蹴上げ",
        romaji: "Keage",
        meaning: "Ascendente",
        category: "techniques",
        details: "Término que describe una patada o movimiento ascendente, como en yoko-geri keage (patada lateral ascendente). Implica un movimiento de látigo con retroceso tras el impacto."
    },
    {
        id: "kebanashi",
        term: "Kebanashi",
        japanese: "蹴放し",
        romaji: "Kebanashi",
        meaning: "Percutante",
        category: "techniques",
        details: "Tipo de patada caracterizada por un impacto rápido y explosivo, similar a un latigazo, donde la pierna retrocede inmediatamente después del contacto."
    },
    {
        id: "kento",
        term: "Kento",
        japanese: "拳頭",
        romaji: "Kentō",
        meaning: "Nudillos",
        category: "anatomy",
        details: "Articulaciones de los dedos que forman la superficie principal de golpeo del puño cerrado (seiken). Son el área que recibe mayor endurecimiento mediante entrenamiento con makiwara."
    },
    {
        id: "kihon-kumite",
        term: "Kihon Kumite",
        japanese: "基本組手",
        romaji: "Kihon Kumite",
        meaning: "Combate básico",
        category: "kumite",
        details: "Práctica de combate con técnicas básicas y movimientos predeterminados. Es fundamental para el desarrollo de la coordinación, el tiempo y la distancia antes de avanzar al combate libre."
    },
    {
        id: "kiritsu",
        term: "Kiritsu",
        japanese: "起立",
        romaji: "Kiritsu",
        meaning: "Ponerse de pie",
        category: "commands",
        details: "Orden para levantarse desde la posición seiza (arrodillado). Es parte del protocolo formal del dojo y se utiliza al finalizar los períodos de meditación o después del saludo formal."
    },
    {
        id: "kosaho",
        term: "Kosaho",
        japanese: "攻撃方",
        romaji: "Kōshahō",
        meaning: "Contraataques",
        category: "techniques",
        details: "Conjunto de técnicas ofensivas ejecutadas como respuesta a un ataque. Implica aprovechar las aperturas creadas tras una defensa exitosa."
    },
    {
        id: "koshi-kaiten",
        term: "Koshi Kaiten",
        japanese: "腰回転",
        romaji: "Koshi Kaiten",
        meaning: "Acción de la cadera",
        category: "concepts",
        details: "Movimiento rotacional de la cadera que genera potencia y estabilidad en las técnicas de karate. Es fundamental para transmitir la fuerza desde el suelo a través del cuerpo hasta el punto de impacto."
    },
    {
        id: "koshi",
        term: "Koshi",
        japanese: "甲指",
        romaji: "Koshi",
        meaning: "Base de los dedos del pie",
        category: "anatomy",
        details: "Término que se refiere a la parte anterior de la planta del pie, utilizada como superficie de impacto en algunas patadas como mae-geri koshi (patada frontal con la punta del pie)."
    },
    {
        id: "kyokushinkai-kumite",
        term: "Kyokushinkai Kumite",
        japanese: "極真会組手",
        romaji: "Kyokushinkai Kumite",
        meaning: "Combinaciones de combate estilo Kyokushin",
        category: "kumite",
        details: "Forma de combate característica del estilo Kyokushin, donde se enfatiza el contacto pleno y la resistencia física. Incluye técnicas de mano y pie a todos los niveles excepto a la cabeza con las manos."
    },
    {
        id: "maai",
        term: "Maai",
        japanese: "間合い",
        romaji: "Maai",
        meaning: "Distancia",
        category: "concepts",
        details: "Concepto que se refiere a la distancia óptima entre los oponentes en un combate. Incluye no solo el espacio físico sino también el tiempo y oportunidad para ejecutar técnicas efectivas."
    },
    {
        id: "makiwara",
        term: "Makiwara",
        japanese: "巻藁",
        romaji: "Makiwara",
        meaning: "Tabla para endurecer los nudillos",
        category: "equipment",
        details: "Implemento tradicional de entrenamiento consistente en una tabla elástica forrada con paja o materiales similares. Se utiliza para desarrollar la potencia del golpe y endurecer las superficies de impacto."
    },
    {
        id: "mawari-ashi",
        term: "Mawari Ashi",
        japanese: "回り足",
        romaji: "Mawari Ashi",
        meaning: "Desplazamiento circular",
        category: "movement",
        details: "Técnica de desplazamiento donde los pies se mueven describiendo un arco o círculo. Permite cambiar la posición mientras se mantiene la orientación hacia el oponente."
    },
    {
        id: "mimi",
        term: "Mimi",
        japanese: "耳",
        romaji: "Mimi",
        meaning: "Orejas",
        category: "anatomy",
        details: "Término que se refiere a las orejas. En el contexto del karate, son una zona vulnerable que debe protegerse durante el entrenamiento y el combate."
    },
    {
        id: "nakadaka-ken",
        term: "Nakadaka Ken",
        japanese: "中高拳",
        romaji: "Nakadaka Ken",
        meaning: "Puño del dedo medio",
        category: "techniques",
        details: "Configuración de la mano donde el dedo medio sobresale ligeramente del puño. Se utiliza para golpear puntos específicos o zonas vulnerables del oponente."
    },
    {
        id: "onaka",
        term: "Onaka",
        japanese: "お腹",
        romaji: "Onaka",
        meaning: "Estómago",
        category: "anatomy",
        details: "Término que se refiere al estómago o abdomen. Es una zona objetivo en muchas técnicas de ataque y también un área importante para el control respiratorio y la generación de poder."
    },
    {
        id: "oss",
        term: "Oss",
        japanese: "押忍",
        romaji: "Osu",
        meaning: "Entiendo y entendido",
        category: "etiquette",
        details: "Expresión de respeto que significa tanto 'lo entiendo' como 'entendido'. Se utiliza como saludo, para mostrar comprensión ante instrucciones del maestro o como expresión de perseverancia y esfuerzo."
    },
    {
        id: "otagai-ni-rei",
        term: "Otagai Ni Rei",
        japanese: "お互いに礼",
        romaji: "Otagai Ni Rei",
        meaning: "Saludo entre alumnos",
        category: "etiquette",
        details: "Comando para el saludo formal entre estudiantes. Muestra respeto mutuo y agradecimiento por la oportunidad de entrenar juntos y aprender unos de otros."
    },
    {
        id: "ritsu-rei",
        term: "Ritsu Rei",
        japanese: "立礼",
        romaji: "Ritsu Rei",
        meaning: "Saludo de pie",
        category: "etiquette",
        details: "Saludo formal realizado de pie, con una ligera inclinación del torso hacia adelante. Es la forma más común de saludar durante el entrenamiento normal y situaciones menos formales."
    },
    {
        id: "rokkutsu",
        term: "Rokkutsu",
        japanese: "肋骨",
        romaji: "Rokkotsu",
        meaning: "Costillas",
        category: "anatomy",
        details: "Término que se refiere a las costillas. Son una zona vulnerable en combate, pero también importante para la protección de órganos vitales y el control respiratorio."
    },
    {
        id: "sakutsu",
        term: "Sakutsu",
        japanese: "鎖骨",
        romaji: "Sakotsu",
        meaning: "Clavícula",
        category: "anatomy",
        details: "Término que se refiere a la clavícula. Es un punto vulnerable en el combate, especialmente a presiones y golpes dirigidos."
    },
    {
        id: "sanbon-kumite",
        term: "Sanbon Kumite",
        japanese: "三本組手",
        romaji: "Sanbon Kumite",
        meaning: "Combate a tres pasos",
        category: "kumite",
        details: "Forma de práctica de combate donde el atacante realiza tres ataques consecutivos mientras avanza, y el defensor ejecuta tres defensas retrocediendo, seguidas de un contraataque al final."
    },
    {
        id: "sayonara",
        term: "Sayonara",
        japanese: "さよなら",
        romaji: "Sayonara",
        meaning: "Despedida",
        category: "etiquette",
        details: "Expresión formal de despedida utilizada al finalizar la clase o al abandonar el dojo. Muestra respeto y agradecimiento por la sesión de entrenamiento."
    },
    {
        id: "seito",
        term: "Seito",
        japanese: "生徒",
        romaji: "Seito",
        meaning: "Estudiante, alumno",
        category: "hierarchy",
        details: "Término que designa a un estudiante o alumno de karate. En la jerarquía del dojo, está por debajo del senpai (estudiante avanzado) y el sensei (maestro)."
    },
    {
        id: "sen",
        term: "Sen",
        japanese: "先",
        romaji: "Sen",
        meaning: "Iniciativa en el combate",
        category: "strategy",
        details: "Concepto estratégico que se refiere a la iniciativa o primera acción en el combate. Tomar 'sen' significa anticiparse al oponente y actuar primero, dictando así el ritmo del enfrentamiento."
    },
    {
        id: "sensei-ni-rei",
        term: "Sensei Ni Rei",
        japanese: "先生に礼",
        romaji: "Sensei Ni Rei",
        meaning: "Saludo al maestro",
        category: "etiquette",
        details: "Comando para el saludo formal dirigido al maestro o instructor. Es una muestra de respeto y gratitud hacia quien transmite el conocimiento del arte marcial."
    },
    {
        id: "senpai-ni-rei",
        term: "Senpai Ni Rei",
        japanese: "先輩に礼",
        romaji: "Senpai Ni Rei",
        meaning: "Saludo al veterano",
        category: "etiquette",
        details: "Comando para el saludo formal dirigido a los estudiantes veteranos o avanzados. Reconoce su mayor experiencia y su papel como ejemplos para los estudiantes más nuevos."
    },
    {
        id: "shiden-ni-rei",
        term: "Shiden Ni Rei",
        japanese: "師伝に礼",
        romaji: "Shiden Ni Rei",
        meaning: "Saludo al altar o dojo",
        category: "etiquette",
        details: "Comando para el saludo formal dirigido al altar o área ceremonial del dojo. Representa el respeto por la tradición, los fundadores del arte y el espacio de entrenamiento."
    },
    {
        id: "shiro",
        term: "Shiro",
        japanese: "白",
        romaji: "Shiro",
        meaning: "Blanco",
        category: "terminology",
        details: "Color blanco, tradicionalmente asociado con la pureza y la inocencia. En karate, el uniforme (gi) es tradicionalmente blanco, simbolizando la pureza de intenciones del practicante."
    },
    {
        id: "someni-rei",
        term: "Someni Rei",
        japanese: "正面に礼",
        romaji: "Shōmen Ni Rei",
        meaning: "Saludo al frente",
        category: "etiquette",
        details: "Comando para el saludo formal dirigido al frente o área principal del dojo, generalmente donde se encuentra la imagen del fundador o los símbolos del estilo."
    },
    {
        id: "taisho",
        term: "Taisho",
        japanese: "体操",
        romaji: "Taisō",
        meaning: "Calentamiento",
        category: "training",
        details: "Ejercicios de calentamiento realizados al inicio de la clase para preparar el cuerpo y prevenir lesiones. Incluyen estiramientos, movilidad articular y activación cardiovascular."
    },
    {
        id: "tatami",
        term: "Tatami",
        japanese: "畳",
        romaji: "Tatami",
        meaning: "Área de entrenamiento",
        category: "equipment",
        details: "Superficie acolchada utilizada como área de entrenamiento en las artes marciales. Originalmente esterillas de paja tejida, actualmente suelen ser colchonetas sintéticas que proporcionan amortiguación y seguridad."
    },
    {
        id: "tensho",
        term: "Tensho",
        japanese: "転掌",
        romaji: "Tenshō",
        meaning: "Envolver, cubrir",
        category: "techniques",
        details: "Técnica defensiva fluida que utiliza movimientos circulares de las palmas de las manos para desviar y controlar ataques. También es el nombre de un kata en algunos estilos como Goju-ryu."
    },
    {
        id: "todome",
        term: "Todome",
        japanese: "詰め",
        romaji: "Todome",
        meaning: "Remate o final",
        category: "techniques",
        details: "Técnica definitiva o golpe final que se ejecuta para poner fin a un combate. En aplicación práctica, sería el golpe decisivo dirigido a un punto vulnerable tras una secuencia de técnicas preparatorias."
    },
    {
        id: "tobi-ashi",
        term: "Tobi Ashi",
        japanese: "飛び足",
        romaji: "Tobi Ashi",
        meaning: "Desplazamiento en salto",
        category: "movement",
        details: "Técnica de desplazamiento que implica un salto o elevación de ambos pies del suelo simultáneamente. Se utiliza para cubrir distancias rápidamente o para evitar barridos."
    },
    {
        id: "tsumasaki",
        term: "Tsumasaki",
        japanese: "爪先",
        romaji: "Tsumasaki",
        meaning: "Punta de los dedos del pie",
        category: "anatomy",
        details: "Término que se refiere a la punta de los dedos del pie. Se utiliza como superficie de impacto en algunas patadas precisas dirigidas a puntos vulnerables específicos."
    },
    {
        id: "tsukite",
        term: "Tsukite",
        japanese: "突き手",
        romaji: "Tsukite",
        meaning: "Brazo que ejecuta la acción",
        category: "techniques",
        details: "Brazo o mano que ejecuta el ataque o técnica principal, en contraste con hikite (la mano que retrocede). El correcto uso del tsukite en coordinación con el hikite es fundamental para generar potencia."
    },
    {
        id: "yori-ashi",
        term: "Yori Ashi",
        japanese: "寄り足",
        romaji: "Yori Ashi",
        meaning: "Desplazamiento de ambos pies",
        category: "movement",
        details: "Técnica de desplazamiento donde ambos pies se mueven secuencialmente en la misma dirección sin cruzarse. Permite mantener una postura estable mientras se cierra o aumenta la distancia con el oponente."
    },
    {
        id: "za-rei",
        term: "Za Rei",
        japanese: "座礼",
        romaji: "Za Rei",
        meaning: "Saludo de rodillas",
        category: "etiquette",
        details: "Saludo formal realizado desde la posición de seiza (arrodillado). Es la forma más respetuosa de saludo y se utiliza al inicio y final de la clase, o en ceremonias especiales."
    }
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
let filteredTerms = [];

// Inicialización
$(document).ready(function() {
    // Añadir los nuevos términos
    const termMap = {};
    
    // Crear mapa de términos existentes para verificar duplicados
    dictionaryTerms.forEach(term => {
        termMap[term.id] = true;
    });
    
    // Añadir nuevos términos evitando duplicados
    [
        { 
            id: "karatedo", 
            term: "Karatedo", 
            japanese: "空手道", 
            romaji: "Karate-dō", 
            meaning: "Camino de la mano vacía", 
            category: "concepts",
            details: "El término completo para el arte marcial, que enfatiza que karate es más que técnicas de combate, sino un camino (dō) de desarrollo personal y espiritual."
        },
        {
            id: "obi",
            term: "Obi",
            japanese: "帯",
            romaji: "Obi",
            meaning: "Cinturón",
            category: "equipment",
            details: "Faja o cinturón que sujeta el karategi y cuyo color indica el nivel o grado del practicante. El sistema de cinturones va normalmente desde blanco (principiante) hasta negro (nivel avanzado)."
        },
        {
            id: "ryu",
            term: "Ryu",
            japanese: "流",
            romaji: "Ryū",
            meaning: "Escuela, estilo",
            category: "terminology",
            details: "Término que designa una escuela o estilo particular de karate. Ejemplos incluyen Shotokan-ryu, Goju-ryu, Wado-ryu y Shito-ryu, cada uno con sus propias características técnicas y filosóficas."
        },
        {
            id: "ichi",
            term: "Ichi",
            japanese: "一",
            romaji: "Ichi",
            meaning: "Uno",
            category: "counting",
            details: "El número uno en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "ni",
            term: "Ni",
            japanese: "二",
            romaji: "Ni",
            meaning: "Dos",
            category: "counting",
            details: "El número dos en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "san",
            term: "San",
            japanese: "三",
            romaji: "San",
            meaning: "Tres",
            category: "counting",
            details: "El número tres en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "shi",
            term: "Shi",
            japanese: "四",
            romaji: "Shi",
            meaning: "Cuatro",
            category: "counting",
            details: "El número cuatro en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias. A veces se usa 'yon' en su lugar debido a que 'shi' también puede significar 'muerte'."
        },
        {
            id: "go",
            term: "Go",
            japanese: "五",
            romaji: "Go",
            meaning: "Cinco",
            category: "counting",
            details: "El número cinco en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "roku",
            term: "Roku",
            japanese: "六",
            romaji: "Roku",
            meaning: "Seis",
            category: "counting",
            details: "El número seis en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "shichi",
            term: "Shichi",
            japanese: "七",
            romaji: "Shichi",
            meaning: "Siete",
            category: "counting",
            details: "El número siete en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "ku",
            term: "Ku",
            japanese: "九",
            romaji: "Ku",
            meaning: "Nueve",
            category: "counting",
            details: "El número nueve en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "jyu",
            term: "Jyu",
            japanese: "十",
            romaji: "Jū",
            meaning: "Diez",
            category: "counting",
            details: "El número diez en japonés, utilizado durante el conteo en clase o para designar técnicas o secuencias."
        },
        {
            id: "mune",
            term: "Mune",
            japanese: "胸",
            romaji: "Mune",
            meaning: "Pecho",
            category: "anatomy",
            details: "Término que se refiere al pecho o tórax. En karate, es una zona objetivo para ciertas técnicas y también una región que se debe proteger adecuadamente."
        },
        {
            id: "shinzo",
            term: "Shinzo",
            japanese: "心臓",
            romaji: "Shinzō",
            meaning: "Corazón",
            category: "anatomy",
            details: "Término que se refiere al corazón. En karate, es considerada una zona vital que debe protegerse y nunca ser objeto directo de ataque en entrenamientos o competiciones."
        },
        {
            id: "kubi",
            term: "Kubi",
            japanese: "首",
            romaji: "Kubi",
            meaning: "Cuello",
            category: "anatomy",
            details: "Término que se refiere al cuello. Es una zona vulnerable que debe protegerse en combate, aunque también es objetivo de ciertas técnicas avanzadas."
        },
        {
            id: "nodo",
            term: "Nodo",
            japanese: "喉",
            romaji: "Nodo",
            meaning: "Garganta",
            category: "anatomy",
            details: "Término que se refiere a la garganta o tráquea. Es una zona extremadamente vulnerable que debe protegerse y, por razones de seguridad, nunca es objetivo directo en entrenamientos o competiciones."
        },
        {
            id: "me",
            term: "Me",
            japanese: "目",
            romaji: "Me",
            meaning: "Ojos",
            category: "anatomy",
            details: "Término que se refiere a los ojos. Son una zona vital que debe protegerse especialmente, y están prohibidos como objetivo en la práctica del karate deportivo."
        },
        {
            id: "hikite",
            term: "Hikite",
            japanese: "引き手",
            romaji: "Hikite",
            meaning: "Mano que recoge",
            category: "techniques",
            details: "Acción de recoger la mano hacia la cadera al ejecutar un golpe con la otra mano. Este movimiento es fundamental para generar potencia y equilibrio en las técnicas de golpeo."
        },
        {
            id: "tori",
            term: "Tori",
            japanese: "取り",
            romaji: "Tori",
            meaning: "El que ataca",
            category: "terminology",
            details: "En ejercicios de kumite preestablecido, se refiere a la persona que ejecuta las técnicas ofensivas o toma la iniciativa en el ataque."
        },
        {
            id: "ukete",
            term: "Ukete",
            japanese: "受け手",
            romaji: "Ukete",
            meaning: "El que defiende",
            category: "terminology",
            details: "En ejercicios de kumite preestablecido, se refiere a la persona que ejecuta las técnicas defensivas o responde a los ataques del tori."
        }
        // Añadir más términos según necesidad
    ].forEach(term => {
        // Solo añadir si no existe ya
        if (!termMap[term.id]) {
            dictionaryTerms.push(term);
            termMap[term.id] = true;
        }
    });
    
    // Ordenar términos alfabéticamente
    dictionaryTerms.sort((a, b) => a.term.localeCompare(b.term));
    
    // Asignar términos ordenados a los filtrados para la vista inicial
    filteredTerms = [...dictionaryTerms];
    
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
    
    // Evento de clic para mostrar detalles en un modal
    $('.term-card').click(function() {
        const id = $(this).data('id');
        const term = dictionaryTerms.find(t => t.id === id);
        if (term) {
            showTermDetail(term);
        }
    });
}

// Función para mostrar los detalles del término en el modal
function showTermDetail(term) {
    // Generar el contenido HTML para el modal
    const modalContent = `
        <div class="term-detail-header">
            <h2>${term.term}</h2>
            <div class="term-japanese-detail">
                <span class="kanji">${term.japanese}</span>
                <span class="romaji">${term.romaji}</span>
            </div>
        </div>
        
        <div class="term-detail-body">
            <div class="term-meaning-detail">
                <h3>Significado</h3>
                <p>${term.meaning}</p>
            </div>
            
            <div class="term-description-detail">
                <h3>Detalles</h3>
                <p>${term.details}</p>
            </div>
            
            <div class="term-metadata">
                <span class="term-category-detail">Categoría: ${getCategoryLabel(term.category)}</span>
            </div>
        </div>
    `;
    
    // Insertar el contenido en el modal y mostrarlo
    $('.term-detail-content').html(modalContent);
    $('#term-modal').fadeIn();
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
        'counting': 'Conteo',
        'anatomy': 'Anatomía',
        'etiquette': 'Etiqueta',
        'kumite': 'Combate',
        'training': 'Entrenamiento',
        'breathing': 'Respiración',
        'equipment': 'Equipamiento',
        'movement': 'Movimiento',
        'strategy': 'Estrategia',
        'hierarchy': 'Jerarquía',
        'terminology': 'Terminología',
        'directions': 'Direcciones',
        'competition': 'Competición',
        'weapons': 'Armas',
        'history': 'Historia',
        'culture': 'Cultura',
        'expressions': 'Expresiones'
    };
    return labels[category] || category;
}
