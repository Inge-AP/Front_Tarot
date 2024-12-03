let selectedCards = [];
let selectedTheme = ""; // Tema seleccionado por el usuario
let data = {
  name: "",
  theme: "",
  number: "",
  codeCountry: "",
  descriptions: "",
};

// Función para iniciar las cartas y mezclar imágenes
function startTarot(theme) {
  document.getElementById("startContainer").style.display = "none";
  document.getElementById("carouselContainer").style.display = "block"; // Mostrar el contenedor de cartas

  const cardContainer = document.getElementById("cardContainer");
  cardContainer.classList.add("show");

  const numberOfCards = 14; // Número de cartas a mostrar en pantalla
  const angle = 120 / (numberOfCards - 1);

  // Array de imágenes para las cartas
  const cardData = [
    {
      image: "Cartas/Carta0.webp",
      name: "El Aventurero",
      descriptions: {
        amor: [
          "Es posible que te encuentres en el umbral de una nueva relación o que estés dejando atrás viejos patrones para dar paso a una relación más fresca y emocionante.",
          "Este es un momento para ser auténtico y seguir tu corazón sin preocuparte por el qué dirán o las expectativas de los demás.",
          "Estás listo para explorar nuevas posibilidades y disfrutar de cada momento sin preocuparte por el futuro.",
          "Es hora de liberarte de viejas heridas y abrirte a nuevas oportunidades de amor y felicidad.",
        ],
        dinero: [
          "Puede que estés iniciando una nueva etapa financiera, dejando atrás viejos hábitos para adoptar un enfoque renovado en la gestión de tu dinero.",
          "Cultiva una mentalidad de abundancia y confía en que tendrás lo necesario para alcanzar tus metas financieras.",
          "Para alcanzar el éxito financiero, a veces es imprescindible salir de tu zona de confort y explorar lo desconocido.",
          "Estás listo para superar las limitaciones del pasado y avanzar hacia la seguridad y estabilidad financiera.",
        ],
        futuro: [
          "Es posible que estén embarcándose en una nueva aventura juntos o que estén dejando atrás viejas disputas para renovar sus lazos familiares.",
          "Es un momento para dejar de lado las diferencias y trabajar juntos hacia un objetivo común.",
          "Es hora de salir de la rutina y crear recuerdos duraderos juntos.",
          "Dedica tiempo a conectarte con tus seres queridos de una manera lúdica y despreocupada.",
        ],
      },
    },
    {
      image: "Cartas/Carta1.webp",
      name: "El Sabio",
      descriptions: {
        amor: [
          "Eres el maestro de tu destino amoroso y tienes todas las herramientas a tu disposición para manifestar el amor que deseas.",
          "Es hora de actuar con confianza y seguridad en ti mismo para atraer el amor que deseas.",
          "Confía en tus instintos y sigue el camino que te lleva hacia la verdadera felicidad en el amor.",
          "Es posible que estés experimentando una renovación o un renacimiento en tu conexión amorosa, y tienes el poder de hacer que las cosas sucedan.",
        ],
        dinero: [
          "Cree en tus aptitudes y fortalezas para generar oportunidades financieras y alcanzar la prosperidad que buscas.",
          "Este es el momento de tomar la iniciativa y explorar alternativas para aumentar tus ingresos.",
          "Ten fe en ti mismo y en tu habilidad para enfrentar y superar cualquier obstáculo que surja en tu vida",
          "Confía en tu capacidad para hacer que las cosas sucedan y aprovecha al máximo las oportunidades que se te presenten.",
        ],
        futuro: [
          "Confía en tus habilidades para guiar y apoyar a tus seres queridos en su camino hacia el éxito y la felicidad.",
          "Ha llegado el momento de descubrir nuevas maneras de reforzar los vínculos familiares.",
          "Confía en tus habilidades para superar cualquier desafío que se presente y asegurar un futuro brillante para tu familia.",
          "Confía en tu capacidad para crear un ambiente familiar lleno de amor, paz y alegría.",
        ],
      },
    },
    {
      image: "Cartas/Carta2.webp",
      name: "La Intuición",
      descriptions: {
        amor: [
          "Es importante que confíes en tu intuición y explores más a fondo para descubrir la verdad detrás de la situación.",
          "Es posible que necesites tomar un enfoque más pasivo y reflexivo para comprender completamente la dinámica de tu relación.",
          "Tómate el tiempo necesario para explorar tus emociones más profundas y descubrir lo que realmente deseas en una relación.",
          "Es importante mantener la calma y abordar cualquier problema con comprensión y empatía.",
        ],
        dinero: [
          "Es importante que investigues a fondo y confíes en tu intuición para tomar decisiones financieras informadas.",
          "Mantén una mente abierta y presta atención a las señales sutiles que podrían indicar oportunidades o riesgos financieros.",
          "Confía en tu capacidad para encontrar soluciones creativas a los desafíos financieros que puedas enfrentar.",
          "Es importante investigar a fondo y buscar la verdad detrás de la situación para tomar decisiones financieras sólidas.",
        ],
        futuro: [
          "Es importante abordar cualquier problema con comprensión y empatía, y estar dispuesto a explorar más a fondo para descubrir la verdad.",
          "Mantén la calma y sé receptivo a las necesidades emocionales de tus seres queridos.",
          "Confía en tu capacidad para abordar cualquier problema familiar con comprensión y empatía.",
          "Es importante mantener la comunicación abierta y buscar la verdad detrás de la situación para promover la armonía y la comprensión en la familia.",
        ],
      },
    },
    {
      image: "Cartas/Carta3.webp",
      name: "La Fertilidad",
      descriptions: {
        amor: [
          "Tu relación amorosa está en un buen lugar y es probable que experimentes un período de armonía y estabilidad. La conexión emocional entre tú y tu pareja se fortalecerá, y podrías sentir un renovado sentido de intimidad y afecto.",
          "Es posible que estés iniciando una nueva relación o que experimentes un renacimiento en tu relación actual. La energía amorosa está presente y puede llevar a momentos románticos y apasionados. Confía en tu intuición y sigue tu corazón en asuntos del amor.",
          "Es importante que te concentres en amarte a ti mismo/a primero antes de buscar amor en otros. Trabaja en tu autoestima y en cuidar tus propias necesidades emocionales para crear relaciones más saludables y satisfactorias.",
          "Podrías encontrarte en un momento de autoexploración y descubrimiento personal en el ámbito amoroso. Esta es una oportunidad para reflexionar sobre lo que realmente deseas en una relación y tomar decisiones que te lleven hacia una conexión amorosa más auténtica y significativa.",
        ],
          dinero: [
          "Es importante que investigues a fondo y confíes en tu intuición para tomar decisiones financieras informadas.",
          "Mantén una mente abierta y presta atención a las señales sutiles que podrían indicar oportunidades o riesgos financieros.",
          "Confía en tu capacidad para encontrar soluciones creativas a los desafíos financieros que puedas enfrentar.",
          "Es importante investigar a fondo y buscar la verdad detrás de la situación para tomar decisiones financieras sólidas.",
        ],
        futuro: [
          "Es importante abordar cualquier problema con comprensión y empatía, y estar dispuesto a explorar más a fondo para descubrir la verdad.",
          "Mantén la calma y sé receptivo a las necesidades emocionales de tus seres queridos.",
          "Confía en tu capacidad para abordar cualquier problema familiar con comprensión y empatía.",
          "Es importante mantener la comunicación abierta y buscar la verdad detrás de la situación para promover la armonía y la comprensión en la familia.",
        ],
      },
    },
    {
      image: "Cartas/Carta4.webp",
      name: "El Líder",
      descriptions: {
        amor: [
          "Es importante establecer límites saludables y estructurar tu relación de manera sólida. Puede indicar un momento para tomar el liderazgo en la relación y asumir un papel más protector o responsable.",
          "Es posible que te encuentres buscando la estabilidad y la seguridad en tu relación amorosa. Recuerda la importancia de establecer una base sólida para el futuro de tu relación, basada en el respeto mutuo y la comunicación efectiva.",
          "La influencia de una figura paternal o autoritaria en tu relación. Es un momento para reflexionar sobre el papel del compromiso y la responsabilidad en tu vida amorosa.",
          "Este es un momento para demostrar liderazgo y determinación en tu relación amorosa. Establece límites claros y mantener una estructura saludable, puedes cultivar una conexión amorosa más sólida y duradera.",
        ],
        dinero: [
            "Conviértete en el arquitecto de tu estabilidad económica. Cada decisión puede ser la piedra angular de un futuro lleno de abundancia y éxito.",
            "Explora nuevos horizontes en tus finanzas. Tu intuición y creatividad pueden llevarte a descubrir caminos hacia una riqueza inesperada.",
            "Atrévete a desafiar lo establecido. Identifica patrones obsoletos y reescribe tu historia financiera con estrategias audaces.",
            "Redefine lo que significa prosperar. Encuentra en cada desafío una oportunidad para construir una estabilidad económica única y poderosa.",
          ],
          futuro: [
            "Profundiza en las dinámicas familiares para encontrar soluciones transformadoras. La verdad y la empatía son los puentes hacia una unión más fuerte.",
            "Construye un hogar emocionalmente seguro al abrir canales de comunicación auténticos. Cada conversación tiene el poder de sanar y fortalecer.",
            "Sé el líder que tu familia necesita en este momento. Con comprensión y visión, puedes transformar desafíos en momentos de conexión duradera.",
            "Reescribe la narrativa de tu hogar. Cada paso hacia la verdad y el respeto crea un legado de amor y armonía.",
          ],
      },
    },
    {
      image: "Cartas/Carta5.webp",
      name: "El Guía Espiritual",
      descriptions: {
        amor: [
          "Se requiere la búsqueda de consejos sabios y la adhesión a la tradición. Es un momento para reflexionar sobre la importancia de la estabilidad y la estructura en tu relación. Considera consultar con terceros para obtener orientación.",
          "Tienes la necesidad de volver a las raíces tradicionales y adoptar una ética laboral sólida. Puede representar el inicio de una nueva fase en tu relación, basada en la confianza y el compromiso.",
          "Este es un momento para tomar decisiones informadas y evitar actuar por impulso en asuntos del corazón. La educación y la investigación pueden ser clave para resolver problemas y fortalecer la conexión emocional.",
          "La influencia de Tauro, puede indicar la importancia de la estabilidad y la seguridad en tu relación amorosa. Es un momento para cultivar la confianza mutua y la lealtad.",
        ],
        dinero: [
            "Este es tu momento para dominar las finanzas con un enfoque estratégico. Las oportunidades están esperando que tomes la iniciativa.",
            "Fortalece tu seguridad económica explorando nuevas ideas. Con cada paso firme, estarás construyendo un futuro financiero sin límites.",
            "Establece metas con precisión y avanza con disciplina. La prosperidad es el resultado de un enfoque claro y acciones bien pensadas.",
            "Haz que cada movimiento financiero cuente. Construirás una base sólida mientras das pasos hacia una prosperidad genuina y sostenible.",
          ],
          futuro: [
            "Transforma los retos familiares en historias de superación y amor. Toma el timón y guía a los tuyos hacia un futuro compartido y lleno de alegría.",
            "Crea nuevas tradiciones que hablen del amor y la resiliencia de tu familia. Cada día es una oportunidad para fortalecer esos lazos.",
            "Abraza los cambios en tu hogar como puertas hacia nuevas posibilidades. La renovación familiar comienza con una perspectiva abierta.",
            "Haz que el amor y el respeto sean el núcleo de cada interacción. Con cada gesto, estarás construyendo un legado emocional profundo.",
          ],
      },
    },
    {
      image: "Cartas/Carta6.webp",
      name: "Los Amantes",
      descriptions: {
        amor: [
          "Te enfrentas a una gran decisión emocional. Es importante seguir tu corazón y tu intuición en este momento, ya que te guiarán hacia la opción correcta para ti y tu relación.",
          "Las decisiones amorosas son cruciales. Considera cuidadosamente todas las opciones disponibles y a elegir aquella que te brinde paz y armonía en tu relación.",
          "Estás en una encrucijada emocional. Es posible que te enfrentes a decisiones difíciles relacionadas con tu relación, pero confía en que siguiendo tu corazón encontrarás el camino hacia la felicidad.",
          "Este es un momento para reflexionar sobre tus sentimientos y deseos más profundos en tu relación amorosa. Recuerda que elegir con el corazón puede conducir a la paz y la satisfacción emocional en el amor.",
        ],
        dinero: [
            "Abraza los cambios con valentía y transforma las lecciones en herramientas para tu éxito financiero. Tu momento de prosperar ha llegado.",
            "Cada desafío económico es una oportunidad disfrazada. Identifica el potencial escondido y conviértelo en un triunfo personal.",
            "Establece estructuras firmes para tus finanzas y observa cómo crece tu confianza en el manejo del dinero.",
            "La clave está en construir una visión clara para tu economía. Con cada paso que des, estarás moldeando tu camino hacia la libertad financiera.",
          ],
          futuro: [
            "Es el momento de tomar las riendas y liderar con amor. Tu visión puede inspirar a tu familia y cimentar una base sólida de unión.",
            "Busca soluciones con corazón y lógica para crear un ambiente de comprensión en el hogar. Cada acción cuenta en la construcción de la armonía.",
            "Encuentra un balance entre el apoyo y la autoridad. Lidera a tu familia con sabiduría para superar desafíos y alcanzar nuevas alturas emocionales.",
            "Valora cada conexión emocional dentro de tu hogar y construye un espacio donde todos puedan florecer en confianza y amor.",
          ],
      },
    },
    {
      image: "Cartas/Carta7.webp",
      name: "El Control",
      descriptions: {
        amor: [
          "Es un recordatorio de que debes tomar el control de tu vida amorosa y dirigirte hacia la dirección que deseas. Puede indicar un momento para asumir el liderazgo en la relación y tomar decisiones importantes juntos para alcanzar la victoria en el amor.",
          "Estás en camino hacia una victoria emocional en tu relación. Es importante ser perseverante y trabajar en equipo para superar cualquier obstáculo que se presente en el camino hacia la armonía y la felicidad en el amor.",
          "Tienes el poder de dirigir tu vida amorosa hacia el éxito. Aprovecha tu determinación y esfuerzo para superar cualquier desafío y alcanzar la victoria en tu relación.",
          "Este es un momento para tomar el control de tu destino amoroso y avanzar con confianza hacia una relación feliz y satisfactoria. Confía en tu capacidad para superar los desafíos y alcanzar la victoria en el amor.",
        ],
        dinero: [
            "Tu capacidad para analizar y decidir será tu mayor aliada en este momento. Reflexiona y actúa con seguridad para maximizar tus oportunidades financieras.",
            "El éxito económico está a tu alcance, pero requiere de una mezcla de disciplina y creatividad. Encuentra el equilibrio perfecto y avanza.",
            "Cada decisión financiera que tomes hoy puede convertirse en un paso hacia la libertad económica. Mantén una mentalidad positiva y toma decisiones informadas.",
            "Haz de tus finanzas un reflejo de tu visión personal. Planifica con determinación y verás cómo tus metas se convierten en logros palpables.",
          ],
          futuro: [
            "Encuentra el verdadero significado de las relaciones familiares mediante la escucha activa y el entendimiento mutuo. Cada interacción es una oportunidad para fortalecer los lazos.",
            "Transforma cualquier desafío en el hogar en un puente hacia la armonía. Tu perspectiva puede hacer la diferencia entre la distancia y la cercanía.",
            "La comunicación honesta y abierta es el corazón de una familia unida. Sé un ejemplo al expresar tus emociones con claridad y empatía.",
            "Construye un legado de amor y respeto en tu hogar. Las pequeñas acciones diarias son las que marcan la diferencia a largo plazo.",
          ],
      },
    },
    {
      image: "Cartas/Carta8.webp",
      name: "Valor",
      descriptions: {
        amor: [
          "La valentía y el coraje serán fundamentales para superar los desafíos en tu relación. Es un momento para demostrar compasión y fuerza interior mientras trabajas en la armonía y la estabilidad emocional en tu vida amorosa.",
          "El autocontrol y la resiliencia son esenciales para cultivar una relación amorosa saludable y duradera. Confía en tu capacidad para dominar tus emociones y superar cualquier obstáculo en el amor.",
          "Tienes el poder de transformar tu relación con valentía y determinación. Aprovecha tu fuerza interior para superar cualquier dificultad y fortalecer los lazos emocionales en tu vida amorosa.",
          "Este es un momento para enfrentar los desafíos en tu relación con confianza y coraje. Con determinación y compasión, puedes superar cualquier obstáculo y construir una conexión amorosa más profunda y significativa.",
        ],
        dinero: [
            "Es el momento de identificar oportunidades inesperadas y convertirlas en pilares de tu éxito económico. La creatividad será tu mejor aliada.",
            "Los tiempos de cambio son ideales para reevaluar tus prioridades financieras y tomar decisiones que impulsen tu estabilidad a largo plazo.",
            "Confía en tu capacidad de transformar los retos financieros en aprendizajes que te acerquen a tus metas. Cada paso cuenta.",
            "Adopta una visión estratégica sobre tus recursos económicos. Con enfoque y persistencia, construirás un futuro lleno de abundancia.",
          ],
          futuro: [
            "Liderar con amor y determinación puede cambiar la dinámica de cualquier familia. Da el ejemplo y observa cómo las cosas mejoran a tu alrededor.",
            "Reconoce el valor de la diversidad en tu hogar y busca maneras de integrar las diferentes perspectivas en una visión común.",
            "Cada desafío emocional en tu familia es una oportunidad para crecer juntos. Trabaja en equipo y crea recuerdos que fortalezcan su vínculo.",
            "Construye un espacio de confianza y apoyo en tu hogar. Con cada acto de amor, estarás cimentando un futuro de armonía y felicidad.",
          ],
      },
    },
    {
      image: "Cartas/Carta9.webp",
      name: "El Solitario",
      descriptions: {
        amor: [
          "Es un momento para la introspección y la auto-reflexión en tu relación. Es posible que necesites tiempo a solas para evaluar tus sentimientos y prioridades. Esta carta también puede indicar que es mejor tomarse un tiempo para ti mismo antes de comprometerte completamente en una relación.",
          "Recuerda la importancia de encontrar la paz interior y la claridad mental en tu vida amorosa. Aprovecha este período de soledad para conectarte contigo mismo y entender tus necesidades y deseos emocionales.",
          "La autodisciplina y la paciencia son esenciales para el crecimiento personal y la conexión emocional en una relación. Tómate el tiempo necesario para reflexionar sobre tu relación y tomar decisiones fundamentadas.",
          "Este es un momento para buscar respuestas dentro de ti mismo y encontrar la claridad emocional en tu relación. Aprovecha la soledad para sintonizar con tus verdaderos sentimientos y establecer límites saludables en tu vida amorosa.",
        ],
        dinero: [
            "Confía en tu capacidad de superar cualquier adversidad financiera. Tu determinación es la llave para desbloquear nuevas oportunidades.",
            "Transforma cada obstáculo en una lección valiosa para el futuro. Mantén la calma y toma decisiones desde la sabiduría y la lógica.",
            "Reevalúa tus hábitos financieros y busca formas innovadoras de administrar tus recursos. A veces, pequeños ajustes generan grandes resultados.",
            "Este es el momento de adoptar una mentalidad de crecimiento y asumir riesgos calculados que te acerquen a tus metas económicas.",
          ],
          futuro: [
            "Sé el faro que ilumina el camino de tu familia en momentos de incertidumbre. Con empatía y visión, puedes guiar hacia soluciones positivas.",
            "Abraza el cambio en el hogar como una oportunidad para fortalecer las bases de tu vida familiar. La adaptabilidad es clave.",
            "Cada miembro de la familia tiene un papel vital. Reconoce y valora sus aportes mientras trabajas por una conexión más profunda y significativa.",
            "Construye un hogar donde el amor y la comprensión sean los pilares. La armonía empieza con pequeños actos de cuidado y respeto mutuo.",
          ],
      },
    },
    {
      image: "Cartas/Carta10.webp",
      name: "Pirámide de la Riqueza",
      descriptions: {
        amor: [
          "Hay un cambio positivo en tu relación. Puedes esperar que la suerte esté de tu lado y que las circunstancias cambien para mejor. Este es un momento de optimismo y esperanza en tu vida amorosa.",
          "Hay un mensaje de esperanza kármica en el amor. Las circunstancias están a punto de cambiar para mejor, y puedes esperar que la suerte esté de tu lado. Mantén una actitud positiva y confía en que el universo está trabajando a tu favor en tu relación.",
          "Los ciclos y las fluctuaciones son naturales en una relación. Mantén la fe y la confianza en el proceso, ya que el destino está trabajando a tu favor para mejorar tu vida amorosa.",
          "Este es un momento para estar abierto a nuevas oportunidades y experiencias en el amor. La suerte está cambiando a tu favor, y es posible que encuentres una conexión significativa o una mejora en tu relación actual.",
        ],
        dinero: [
            "Busca la sabiduría en cada experiencia financiera. Reflexiona sobre tus decisiones pasadas y utiliza ese conocimiento para avanzar.",
            "Estás en el camino hacia una transformación económica. Sé persistente y sigue aprendiendo de cada paso que des.",
            "La paciencia y la claridad son tus mejores aliadas en este momento. Construye tu seguridad económica sobre una base sólida de conocimiento.",
            "Abre tu mente a nuevas ideas y enfoques financieros. Las oportunidades más inesperadas pueden surgir cuando menos lo esperas.",
          ],
          futuro: [
            "Dedica tiempo a reflexionar sobre las dinámicas familiares y cómo puedes contribuir al bienestar colectivo. Las soluciones empiezan con una visión clara.",
            "Utiliza este período para construir puentes emocionales en el hogar. La introspección puede ayudarte a entender mejor a tus seres queridos.",
            "El cambio comienza dentro de ti. Sé el primero en mostrar paciencia y comprensión, y observa cómo tus relaciones familiares florecen.",
            "Valora el poder del tiempo en soledad para recargar tus energías y volver al hogar con una perspectiva renovada y positiva.",
          ],
      },
    },
    {
      image: "Cartas/Carta11.webp",
      name: "Sacrificio",
      descriptions: {
        amor: [
          "Es posible que necesites soltar una expectativa o deseo que has estado aferrando en tu relación amorosa. Al hacerlo, podrías descubrir una mayor claridad y comprensión entre tú y tu pareja.",
          "Considera tomar un tiempo para reflexionar sobre tu relación. A veces, hacer un sacrificio temporal puede llevar a un crecimiento emocional profundo y fortalecer la conexión con tu ser amado.",
          "Si sientes que tu relación está estancada, podría ser momento de dejar ir ciertas dinámicas o patrones que ya no te sirven. Esto puede abrir nuevas posibilidades y revitalizar la relación.",
          "Evalúa si hay algo en tu vida amorosa que te esté frenando. Al dejarlo ir, podrías encontrar un nuevo sentido de libertad y avanzar hacia una relación más equilibrada y satisfactoria.",
        ],
        dinero: [
            "El viento sopla a tu favor. Aprovecha las oportunidades financieras que se presenten y confía en que estás en el camino correcto.",
            "Las circunstancias están alineándose para favorecerte económicamente. Mantén una actitud proactiva y aprovecha el momento.",
            "La fortuna sonríe a quienes están preparados. Mantente alerta a las señales del universo y toma acción sin dudar.",
            "Abre tus brazos al cambio y deja que nuevas oportunidades fluyan hacia ti. Tu perseverancia está siendo recompensada.",
          ],
          futuro: [
            "Un cambio positivo está en camino. Aprovecha este momento para reforzar la conexión emocional con tus seres queridos.",
            "Confía en que el universo está trabajando para traer armonía y alegría a tu hogar. Mantén una actitud abierta y receptiva.",
            "Las dinámicas familiares están evolucionando. Sé parte activa de este proceso y contribuye con amor y empatía.",
            "Este es un momento ideal para fortalecer las relaciones en el hogar. Las semillas que plantes ahora darán frutos abundantes en el futuro.",
          ],
      },
    },
    {
      image: "Cartas/Carta12.webp",
      name: "La Condenada",
      descriptions: {
        amor: [
          "Es un momento para soltar expectativas o apegos que ya no sirven a tu relación. Al hacerlo, podrás ver tu situación amorosa con mayor claridad y abrirte a un crecimiento emocional profundo.",
          "Considera cambiar tu perspectiva sobre los desafíos en tu relación. A veces, un pequeño sacrificio puede ser necesario para avanzar y fortalecer el vínculo con tu pareja.",
          "Si te sientes atrapado en una relación, podría ser tiempo de soltar viejas dinámicas y abrir espacio para un nuevo comienzo. Este acto de renuncia puede permitir que el amor fluya de manera más libre y auténtica.",
          "Reflexiona sobre lo que realmente necesitas en una relación y deja atrás lo que no te permite avanzar. Esta claridad te ayudará a crecer tanto individualmente como en pareja.",
        ],
        dinero: [
            "A veces, es necesario soltar lo que no funciona para dar espacio a nuevas posibilidades. Evalúa tus finanzas con valentía.",
            "Reflexiona sobre los hábitos financieros que ya no te sirven y da el paso hacia una administración más eficiente de tus recursos.",
            "Un pequeño sacrificio ahora puede ser la llave para una estabilidad económica duradera. Piensa a largo plazo y actúa con decisión.",
            "El cambio comienza con una nueva perspectiva. Libérate de lo innecesario y crea espacio para oportunidades más significativas.",
          ],
          futuro: [
            "Renunciar a ciertos hábitos o expectativas puede ser la clave para la paz en tu hogar. El cambio positivo empieza contigo.",
            "Deja atrás los resentimientos y permite que la armonía regrese a tu vida familiar. Las relaciones saludables requieren valentía y amor.",
            "Reflexiona sobre cómo puedes contribuir al bienestar colectivo de tu familia. A veces, pequeños ajustes generan grandes transformaciones.",
            "Abre tu corazón y sé un agente de cambio en tu hogar. La unión familiar empieza con el compromiso de todos los involucrados.",
          ],
      },
    },
    {
      image: "Cartas/Carta13.webp",
      name: "Muerte",
      descriptions: {
        amor: [
          "Este es un momento para dejar ir las viejas dinámicas en tu relación que ya no funcionan. Al hacerlo, abrirás espacio para un nuevo comienzo más saludable y satisfactorio con tu pareja.",
          "Si has pasado por una ruptura reciente, acepta este cambio como una oportunidad para transformar tu vida amorosa. El reajuste puede ser difícil, pero te llevará hacia una conexión más auténtica en el futuro.",
          "Reflexiona sobre los patrones de comportamiento en tu vida amorosa que ya no te sirven. Dejar ir lo viejo te permitirá dar la bienvenida a una nueva fase de crecimiento y renovación emocional.",
          "Este es un tiempo para enfrentar la realidad de lo que ya no es viable en tu relación. Aceptar este cambio irreversible te ayudará a avanzar hacia un nuevo capítulo lleno de posibilidades.",
        ],
        dinero: [ 
            "Es momento de ajustar tus hábitos financieros y deshacerte de gastos o inversiones que ya no aportan valor. Redirige esos recursos hacia objetivos más claros y beneficiosos.",
            "Si atraviesas una pérdida económica, no la veas como un fracaso, sino como una oportunidad para empezar desde cero con una estrategia más sólida.",
            "Replantea tus decisiones financieras pasadas. Soltar lo que no funciona abrirá camino a movimientos más estratégicos y efectivos.",
            "Abraza los cambios inevitables en tus finanzas como una puerta hacia un enfoque renovado. Cada desafío trae consigo el potencial de una mayor estabilidad a largo plazo.",
          ],
          futuro: [
            "Este es el momento ideal para cerrar capítulos familiares llenos de conflictos y abrir espacio a una comunicación más auténtica que fomente la unión.",
            "Si sientes que las dinámicas familiares ya no fluyen, suelta viejas estructuras y permite que nuevas conexiones llenas de apoyo y empatía florezcan.",
            "Cuestiona las tradiciones familiares que ya no resuenan contigo. Al soltar aquello que pesa, puedes construir un entorno más armonioso y alineado con tus valores.",
            "Acepta los cambios en tu entorno familiar con valentía. Cada ajuste es una oportunidad para crecer juntos como unidad y fortalecer los lazos.",
          ],
      },
    },
    {
      image: "Cartas/Carta14.webp",
      name: "Equilibrio",
      descriptions: {
        amor: [
          "Este es un momento para buscar el equilibrio entre tus necesidades emocionales y las de tu pareja. Al encontrar un punto medio, podrás fortalecer la conexión y lograr una relación más armoniosa.",
          "Si te sientes dividido entre emociones opuestas en tu vida amorosa, ahora es el momento de reconciliar esos sentimientos. Al aceptar tanto la luz como la oscuridad en la relación, podrás alcanzar una mayor comprensión y estabilidad.",
          "Es crucial encontrar un balance entre lo material y lo espiritual en tu relación. Al hacerlo, puedes establecer una base más sólida que nutra tanto el alma como el corazón.",
          "Reflexiona sobre las polaridades en tu relación y trabaja para unir esos extremos. Este proceso de integración te ayudará a transformar la relación y llevarla a un nuevo nivel de equilibrio.",
        ],
        dinero: [
            "Equilibra tus deseos materiales con tus valores personales en tus decisiones económicas. Este balance es clave para lograr estabilidad y paz.",
            "Cuando enfrentes desafíos financieros, mezcla la lógica con tu intuición para encontrar soluciones más creativas y efectivas.",
            "Adapta tus planes financieros a las circunstancias actuales para mantener el balance entre seguridad y flexibilidad.",
            "Identifica y ajusta los desequilibrios en tu vida económica. Un enfoque claro y balanceado puede traer la prosperidad que buscas.",
          ],
          futuro: [
            "Crea un balance entre las necesidades materiales y emocionales en tu hogar. Esto traerá paz y estabilidad a las relaciones familiares.",
            "Si hay tensiones familiares, actúa como mediador y busca puntos de encuentro. La armonía surge del entendimiento mutuo.",
            "Promueve la igualdad y el respeto dentro de tu familia. Un ambiente equilibrado fortalece los lazos y genera un hogar más feliz.",
            "Acepta los cambios familiares como una evolución natural. Adaptarse te permitirá crear un ambiente más positivo y estable para todos.",
          ]
      },
    },
    {
      image: "Cartas/Carta15.webp",
      name: "El Terror",
      descriptions: {
        amor: [
          "Es importante estar consciente de las tentaciones y las pasiones que podrían desequilibrar tu relación amorosa. Reflexiona sobre si estás siendo influenciado por deseos que no benefician a tu relación y toma medidas para restablecer el equilibrio.",
          "Si estás enfrentando luchas internas o miedos en tu vida amorosa, este es un buen momento para confrontarlos. Al hacerlo, podrás liberarte de influencias negativas y fortalecer tu conexión con tu pareja.",
          "Evalúa si hay ataduras emocionales o dependencias que están afectando tu relación. Trabaja en liberarte de estas cadenas para poder experimentar un amor más libre y auténtico.",
          "Confrontar las influencias negativas que afectan tu vida amorosa es crucial en este momento. Al enfrentar y superar estos desafíos, podrás evolucionar y llevar tu relación a un nivel más saludable y equilibrado.",
        ],
        dinero: [
            "Es momento de ajustar tus hábitos financieros y deshacerte de gastos o inversiones que ya no aportan valor. Redirige esos recursos hacia objetivos más claros y beneficiosos.",
            "Si atraviesas una pérdida económica, no la veas como un fracaso, sino como una oportunidad para empezar desde cero con una estrategia más sólida.",
            "Replantea tus decisiones financieras pasadas. Soltar lo que no funciona abrirá camino a movimientos más estratégicos y efectivos.",
            "Abraza los cambios inevitables en tus finanzas como una puerta hacia un enfoque renovado. Cada desafío trae consigo el potencial de una mayor estabilidad a largo plazo.",
          ],
          futuro: [
            "Este es el momento ideal para cerrar capítulos familiares llenos de conflictos y abrir espacio a una comunicación más auténtica que fomente la unión.",
            "Si sientes que las dinámicas familiares ya no fluyen, suelta viejas estructuras y permite que nuevas conexiones llenas de apoyo y empatía florezcan.",
            "Cuestiona las tradiciones familiares que ya no resuenan contigo. Al soltar aquello que pesa, puedes construir un entorno más armonioso y alineado con tus valores.",
            "Acepta los cambios en tu entorno familiar con valentía. Cada ajuste es una oportunidad para crecer juntos como unidad y fortalecer los lazos.",
          ],
      },
    },
    {
      image: "Cartas/Carta16.webp",
      name: "La Catástrofe",
      descriptions: {
        amor: [
          "Este es un momento para cuestionar las estructuras en tu relación que ya no son sostenibles. Acepta los cambios necesarios, incluso si son dolorosos, para permitir que la relación evolucione y renazca con una base más sólida.",
          "Si te encuentras en una situación amorosa que se está desmoronando, considera esto como una oportunidad para un nuevo comienzo. Aunque el proceso puede ser difícil, el cambio traerá un crecimiento y una renovación emocional significativa.",
          "Evalúa si hay patrones o dinámicas en tu relación que necesitan ser destruidos para permitir el desarrollo de una conexión más auténtica. Es el momento de dejar ir lo que ya no sirve y abrirte a nuevas posibilidades.",
          "Este es un momento de transformación en tu vida amorosa. Permítete derribar las barreras que han estado impidiendo tu felicidad y trabaja en construir una relación que refleje tus verdaderos deseos y necesidades.",
        ],
        dinero: [
            "Equilibra tus deseos materiales con tus valores personales en tus decisiones económicas. Este balance es clave para lograr estabilidad y paz.",
            "Cuando enfrentes desafíos financieros, mezcla la lógica con tu intuición para encontrar soluciones más creativas y efectivas.",
            "Adapta tus planes financieros a las circunstancias actuales para mantener el balance entre seguridad y flexibilidad.",
            "Identifica y ajusta los desequilibrios en tu vida económica. Un enfoque claro y balanceado puede traer la prosperidad que buscas.",
          ],
          futuro: [
            "Crea un balance entre las necesidades materiales y emocionales en tu hogar. Esto traerá paz y estabilidad a las relaciones familiares.",
            "Si hay tensiones familiares, actúa como mediador y busca puntos de encuentro. La armonía surge del entendimiento mutuo.",
            "Promueve la igualdad y el respeto dentro de tu familia. Un ambiente equilibrado fortalece los lazos y genera un hogar más feliz.",
            "Acepta los cambios familiares como una evolución natural. Adaptarse te permitirá crear un ambiente más positivo y estable para todos.",
          ],
      },
    },
    {
      image: "Cartas/Carta17.webp",
      name: "La Suerte",
      descriptions: {
        amor: [
          "Este es un momento para mantener viva la esperanza en tu vida amorosa, incluso si las circunstancias parecen confusas o engañosas. Busca la verdad detrás de las apariencias y mantén tu conexión con lo espiritual para guiarte en el amor.",
          "Si sientes que hay dualidad o engaño en tu relación, es esencial que busques la verdad y la claridad. La esperanza y la inspiración divina te ayudarán a superar estos desafíos y a encontrar un propósito más profundo en tu vida amorosa.",
          "Confía en tu intuición y mantén la fe en tu relación, incluso si las cosas parecen inciertas. Este es un momento para buscar orientación espiritual y dejar que la esperanza te guíe a través de cualquier confusión o malentendido.",
          "Si te enfrentas a engaños o desilusiones en el amor, recuerda que la esperanza y la conexión espiritual pueden ayudarte a encontrar un camino hacia la verdad. Mantén la inspiración viva y busca un propósito más elevado en tu relación.",
        ],
        dinero: [
            "Enfrenta tus miedos financieros y libérate de patrones de gasto que te mantienen estancado. La claridad te llevará a decisiones más sólidas.",
            "Si notas que tus finanzas están siendo afectadas por influencias negativas, corta esas cadenas. Es tiempo de recuperar el control.",
            "Identifica los puntos débiles en tu economía y trabaja en superarlos. Una revisión honesta puede desbloquear nuevas oportunidades.",
            "Renueva tus estrategias económicas dejando atrás lo que ya no sirve. Este es el inicio de un crecimiento más sano y sostenible.",
          ],
          futuro: [
            "Si hay tensiones familiares no resueltas, es hora de enfrentarlas con honestidad. Liberarse de cargas emocionales unirá más a la familia.",
            "Revisa si hay dinámicas tóxicas en el hogar y trabaja en transformarlas. Un entorno positivo comienza con claridad y aceptación.",
            "Cambia patrones familiares que no funcionan y prioriza la comunicación sincera. El cambio traerá mayor conexión y apoyo.",
            "Acepta que el cambio es parte del crecimiento familiar. Abrir espacio para lo nuevo permitirá que todos evolucionen juntos.",
          ],
      },
    },
    {
      image: "Cartas/Carta18.webp",
      name: "La Ilusión",
      descriptions: {
        amor: [
          "Es importante prestar atención a las señales internas en tu relación. Si algo parece confuso o no está claro, es el momento de confiar en tu intuición y explorar más a fondo lo que podría estar oculto. La verdad podría estar disfrazada de ilusión.",
          "Podrías estar enfrentando malentendidos o confusiones en tu relación. Dedica tiempo a reflexionar y hablar honestamente con tu pareja para desvelar lo que realmente está sucediendo. La comunicación abierta es clave.",
          "Es posible que enfrentes una situación donde las apariencias engañan. Examina cuidadosamente tus emociones y las acciones de tu pareja. La introspección puede ayudarte a ver más allá de la superficie y a conectar con la verdad.",
          "Este es un momento para ser cauteloso y no dejarte llevar por fantasías o ilusiones en tu vida amorosa. Mantén la mente clara y busca la verdad detrás de cualquier situación que te cause inquietud.",
        ],
        dinero: [
            "Confía en tu intuición para detectar oportunidades financieras y mantén la mente abierta a caminos no convencionales.",
            "Analiza a fondo cualquier oferta que parezca demasiado buena para ser verdad. La prudencia será tu mejor aliada.",
            "Transforma el caos financiero en claridad revisando cada detalle antes de actuar. La paciencia y el análisis serán clave.",
            "Este es un momento para ser crítico y buscar estabilidad en lugar de ilusiones. Sé firme con tus objetivos y evita riesgos innecesarios.",
          ],
          futuro: [
            "Explora dinámicas familiares ocultas y abre espacio para conversaciones auténticas. Lo que no se dice puede ser clave para sanar.",
            "Elimina secretos y tensiones subyacentes en el hogar. Una verdad compartida fortalece los vínculos y alivia cargas emocionales.",
            "Enfrenta los malentendidos familiares con empatía y claridad. La armonía comienza cuando todos están en la misma página.",
            "Usa tu intuición para percibir lo que falta en las relaciones familiares. La honestidad abrirá puertas hacia un hogar más fuerte.",
          ],
      },
    },
    {
      image: "Cartas/Carta19.webp",
      name: "Energía",
      descriptions: {
        amor: [
          "Busca conexión con tu pareja en la naturaleza. Planifica caminatas o meditaciones al aire libre para fortalecer su vínculo. Esto renovará su energía vital y les permitirá sintonizarse con los ritmos naturales, mejorando su comprensión mutua y la armonía en la relación.",
          "Practica comunicación abierta semanalmente. Comparte pensamientos y sentimientos profundos. Este 'canto de claridad' disipará malentendidos, fortalecerá la confianza y los llevará a un nivel más elevado de intimidad y comprensión en su relación.",
          "Exploren juntos nuevas prácticas espirituales como yoga tántrico o meditación en pareja. Esto ampliará su conocimiento y los ayudará a acceder a una sabiduría más profunda sobre su relación y propósito compartido, iluminando su camino juntos.",
          "Cultiva paciencia en tiempos difíciles, reconociendo los ciclos del amor. Como la Pachamama, tu relación tiene estaciones. Abraza los desafíos como oportunidades de crecimiento. Mantén la fe en momentos oscuros, sabiendo que la renovación fortalecerá su conexión.",
        ],
        dinero: [
            "Alinea tus decisiones financieras con tu propósito personal. Invertir en lo que realmente importa transformará tu economía.",
            "Reconoce tus talentos únicos y úsalos como una fuente de ingresos. Lo auténtico siempre tiene valor en el mercado.",
            "Rompe patrones financieros limitantes enfrentando tus miedos. La claridad en tus decisiones atraerá abundancia.",
            "Simplifica tu vida económica eliminando gastos innecesarios. Invierte en lo que nutra tu crecimiento personal y profesional.",
          ],
          futuro: [
            "Organiza momentos familiares para celebrar logros y aprendizajes. Esto reforzará los lazos y generará una visión compartida para el futuro.",
            "Celebra la diversidad dentro de tu familia y encuentra fuerza en las diferencias. Este balance impulsará una conexión más profunda.",
            "Construye tradiciones que unan a todos los miembros del hogar. Esto creará un legado que se mantendrá firme con el tiempo.",
            "Dedica tiempo a reflexionar y compartir objetivos comunes. La unión familiar se fortalece cuando hay un propósito compartido.",
          ],
      },
    },
    {
      image: "Cartas/Carta20.webp",
      name: "La Claridad",
      descriptions: {
        amor: [
          "Dedica tiempo a la introspección antes de comprometerte más en tu relación. Medita sobre tus verdaderos deseos y necesidades. Esta autoevaluación te ayudará a mostrar tu auténtico ser a tu pareja, fortaleciendo la conexión y eliminando barreras ocultas.",
          "Desafía tus prejuicios sobre el amor y las relaciones. Explora nuevas formas de intimidad y conexión con tu pareja. Esto puede incluir terapia de pareja o talleres sobre diversidad en el amor, ampliando tu comprensión y aceptación mutua.",
          "Practica la vulnerabilidad con tu pareja. Comparte tus miedos y esperanzas más profundos. Este acto de 'quitarse la máscara' fomentará una intimidad más auténtica y una comprensión más profunda entre ustedes, llevando la relación a un nuevo nivel.",
          "Observa cómo tus experiencias pasadas influyen en tu relación actual. Identifica patrones que ya no te sirven. Esta claridad te permitirá liberarte de viejos hábitos, abriendo espacio para un amor más genuino y evolutivo.",
        ],
        dinero: [
            "Redescubre tu relación con el dinero identificando creencias que te limitan. Reescribe esas ideas y crea un camino alineado con tus verdaderos valores para atraer abundancia.",
            "Explora formas originales de generar ingresos. Revisa habilidades únicas que has subestimado y ábrete a nuevas oportunidades que impulsen tu crecimiento financiero.",
            "Sé brutalmente honesto contigo mismo sobre tus finanzas. Enfrenta tus miedos y hábitos ocultos. Este acto de claridad te empoderará para tomar decisiones más sabias.",
            "Libérate de gastos que solo alimentan apariencias y centra tus recursos en lo que realmente importa. Invertir en tu autenticidad traerá satisfacción y estabilidad.",
          ],
          futuro: [
            "Reúne a tu familia para compartir verdades que nunca se han dicho. La vulnerabilidad fortalecerá los lazos y abrirá una nueva etapa de conexión profunda.",
            "Celebra las diferencias en tu familia. Organiza actividades que destaquen la diversidad y exploren culturas o perspectivas únicas que amplíen su horizonte.",
            "Implementa un ‘día de autenticidad’ mensual. Que cada miembro de la familia exprese quién es sin máscaras. Esta práctica romperá barreras y fortalecerá la honestidad.",
            "Cuestiona los roles familiares tradicionales. Anima a cada miembro a descubrir nuevas facetas de sí mismos para promover el crecimiento individual y colectivo.",
          ],
      },
    },
    {
      image: "Cartas/Carta21.webp",
      name: "Nuestro Mundo",
      descriptions: {
        amor: [
          "Reflexiona sobre el ciclo actual de tu relación. Reconoce los logros y aprendizajes compartidos. Organiza una ceremonia íntima para celebrar este cierre y visualizar juntos el próximo capítulo, fortaleciendo su conexión y renovando su compromiso mutuo.",
          "Busca el equilibrio entre lo masculino y femenino en tu relación. Exploren actividades que fomenten la comprensión de ambas energías. Esta armonía los acercará a una conexión más profunda y completa, elevando su vínculo a un nivel cósmico.",
          "Comparte los conocimientos adquiridos en tu relación. Considera ser mentor de parejas más jóvenes o contribuir a tu comunidad. Esta acción de devolver al mundo enriquecerá tu conexión y les brindará un sentido de plenitud compartida.",
          "Crea un ritual diario que combine elementos terrenales y espirituales con tu pareja. Podría ser una meditación o una caminata consciente. Esta práctica los ayudará a mantener el equilibrio y la conexión con el universo en su vida cotidiana.",
        ],
        dinero: [
            "Cierra ciclos financieros con intención. Reflexiona sobre tus logros, aprende de los tropiezos y diseña una estrategia para una nueva etapa más próspera.",
            "Encuentra el balance perfecto entre ganar y dar. Un presupuesto equilibrado te conectará con un flujo inagotable de abundancia.",
            "Comparte tu sabiduría financiera. Enseñar a otros sobre dinero no solo beneficia a la comunidad, sino que también expande tu propia prosperidad.",
            "Integra tu espiritualidad en tus decisiones financieras. Un ritual consciente puede alinear tus acciones con tu propósito más elevado.",
          ],
          futuro: [
            "Celebra en familia el cierre de un ciclo importante. Reflexionen juntos sobre lo aprendido y creen un ritual que simbolice este nuevo inicio.",
            "Une generaciones con actividades que mezclen tradición y modernidad. Este intercambio reforzará el linaje familiar y creará un sentido de continuidad.",
            "Inicien un proyecto de servicio comunitario como familia. Usar sus habilidades colectivas para ayudar a otros fortalecerá su propósito compartido.",
            "Crea un espacio especial en tu hogar que represente unidad y propósito. Este rincón será un recordatorio del amor y la conexión entre ustedes.",
          ],
      },
    },
  ];

  obtenerDatos("theme", theme);
  console.log(theme);
  // Selección de descriptionses basadas en el tema
  const selectedCardData = cardData.map((card) => {
    if (!card.descriptions[theme]) {
      console.error(
        `El tema "${theme}" no existe en las descripciones de la carta:`,
        card
      );
      return { ...card, descriptions: ["Descripción no disponible"] }; // Valor predeterminado en caso de error
    }
    return {
      ...card,
      descriptions: card.descriptions[theme], // Selecciona la descripción del tema actual
    };
  });
  // Mezcla las cartas
  const shuffledCards = selectedCardData.sort(() => 0.5 - Math.random());
  for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.transform = `rotate(${i * angle - 60}deg)`;
    card.style.backgroundImage = "url('../Cartas/card-back.webp')"; // Imagen de reverso

    // Guardar la imagen y el nombre en data-attributes
    card.dataset.image = shuffledCards[i].image;
    card.dataset.name = shuffledCards[i].name;
    card.dataset.descriptions = shuffledCards[i].descriptions;

    card.addEventListener("click", selectCard);
    cardContainer.appendChild(card);

    // Animación inicial para desplegar las cartas
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform += " translateY(-40px)";
      card.style.transition = "transform 0.9s, opacity 0.5s";
    }, i * 100);
  }
  console.log(data);
}

// Función para seleccionar una carta
function selectCard(event) {
  if (
    selectedCards.length < 3 &&
    !event.target.classList.contains("selected")
  ) {
    event.target.classList.add("selected");
    // Calcula el z-index para que la última carta seleccionada esté en el frente
    event.target.style.zIndex = 10 + selectedCards.length;

    event.target.style.transform += " scale(1.2)";
    selectedCards.push({
      image: event.target.dataset.image,
      name: event.target.dataset.name,
      descriptions: event.target.dataset.descriptions.split(".,"),
    });
    event.target.style.pointerEvents = "none"; // Evitar seleccionar la misma carta nuevamente
    // Revela la imagen de la carta seleccionada con un efecto de giro
    setTimeout(() => {
      event.target.style.backgroundImage = `url('${event.target.dataset.image}')`;
      event.target.style.transition = "transform 1s ease, opacity 1s";
      event.target.style.transform = "rotateY(180deg)"; // Animación de giro
    }, 300);

    if (selectedCards.length === 3) {
      // Da un segundo adicional para visualizar la última carta seleccionada
      setTimeout(() => {
        // Recoge todas las cartas en un mazo más compacto y desplázalas hacia abajo
        const allCards = Array.from(document.querySelectorAll(".card"));
        allCards.forEach((card, index) => {
          // Agrupa las cartas en un mazo compacto
          card.style.transform = `translateY(${
            index * -5
          }px) rotate(0deg) scale(1)`;
          card.style.transition = "transform 0.5s ease-in-out";
        });

        // Mueve el mazo hacia abajo
        setTimeout(() => {
          allCards.forEach((card) => {
            card.style.transform += " translateY(900px)";
            card.style.transition = "transform 1s ease-in-out";
          });
        }, 500); // Ajuste del tiempo para la transición de desplazamiento hacia abajo
      }, 1000); // Espera 1 segundo antes de reagrupar las cartas

      // Espera un poco más antes de mostrar el resultado final
      setTimeout(() => {
        displayResult();
      }, 2500); // Ajuste de tiempo para mostrar el resultado después de la animación
    }
  }
}

//En este apartado comienza a mostrar el resultado

function displayResult() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.style.opacity = 0;
  cardContainer.style.transition = "opacity 0.5s";

  setTimeout(() => {
    cardContainer.style.display = "none";

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.style.display = "block";
    resultContainer.style.opacity = 0;
    resultContainer.style.transition = "opacity 2s ease";

    setTimeout(() => {
      resultContainer.style.opacity = 1;
    }, 100);

    // Crear las cartas seleccionadas en el contenedor de resultados
    const selectedCardsContainer = document.getElementById(
      "selectedCardsContainer"
    );
    selectedCardsContainer.innerHTML = ""; // Limpiar contenedor de cartas seleccionadas

    // Mostrar nombres de las cartas seleccionadas en una sola línea
    const selectedCardNames = document.getElementById("selectedCardNames");
    selectedCardNames.innerHTML = ""; // Limpiar nombres anteriores

    let namesText = selectedCards.map((card) => card.name).join(" - ");
    selectedCardNames.textContent = namesText; // Mostrar todos los nombres en una sola línea

    // Mostrar una descripción aleatoria de cada carta seleccionada en una sola línea
    const descriptions = document.getElementById("descriptions");
    descriptions.innerHTML = ""; // Limpiar contenedor de la descripción
    document.createElement
    // Función para seleccionar una descripción aleatoria y evitar elementos vacíos
    let descriptionsText = selectedCards
      .map((card) => {
        if (card.descriptions && card.descriptions.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * card.descriptions.length
          );
          return card.descriptions[randomIndex].trim();
        }
        return null;
      })
      .filter((description) => description)
      .map((description) =>
        description.endsWith(".") ? description : description + "."
      )
      .join("  "); // Concatenar descripciones

    descriptions.textContent = descriptionsText; // Mostrar descripciones en una sola línea
    // Añadir cada carta seleccionada al contenedor con un efecto "flip" escalonado
    obtenerDatos("descriptions", descriptionsText);
    console.log(descriptionsText);
    selectedCards.forEach((card, index) => {
      // Crear un nuevo elemento para cada carta
      const newCard = document.createElement("div");
      newCard.classList.add("selected-card");
      newCard.style.opacity = 0; // Inicialmente invisible
      // Asignar imagen de fondo específica para la carta seleccionada
      newCard.style.backgroundImage = `url('${card.image}')`;
      newCard.style.backgroundSize = "cover"; // Asegurar que la imagen cubra toda la carta
      selectedCardsContainer.appendChild(newCard);
      // Configurar el efecto "flip" escalonado
      setTimeout(() => {
        newCard.classList.add("flip");
        newCard.style.opacity = 1;
        newCard.style.transition = "transform 1s ease, opacity 1s";
        newCard.style.transform = "rotateY(-180deg)"; // Giro único
      }, index * 600); // Intervalo entre cartas para el efecto escalonado
    });
  }, 800);
  console.log(data);
}

//Inicio de la mensajería
const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startMensajeria();
  }
});

const phoneInput = document.getElementById("phoneContainer");

phoneInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitPhone();
  }
});

function nuevaPantalla() {
  window.addEventListener("load", () => {
    const formContainer = document.getElementById("formContainer");
    formContainer.classList.add("show");
  });
  document.getElementById("resultContainer").classList.remove("show");
  setTimeout(() => {
    document.getElementById("resultContainer").style.display = "none";
    document.getElementById("formContainer").style.display = "flex";
    document.getElementById("formContainer").classList.add("show");
  }, 500);
}

function startMensajeria() {
  const name = document.getElementById("nameInput").value.trim();
  const nameErrorMessage = document.getElementById("nameErrorMessage");
  nameErrorMessage.classList.add("none");

  // Verifica si el nombre tiene menos de 3 caracteres
  if (name.length < 3) {
    nameErrorMessage.classList.add("show"); // Muestra el mensaje de error
    nameErrorMessage.classList.remove("none");
    return; // Detener la función
  } else {
    nameErrorMessage.classList.remove("show"); // Oculta el mensaje de error
    nameErrorMessage.classList.add("none");
  }
  obtenerDatos("name", name);
  console.log(name);
  // Continúa con la siguiente pantalla si el nombre es válido
  document.getElementById("formContainer").classList.remove("show"); // Ocultar pantalla
  setTimeout(() => {
    document.getElementById("formContainer").style.display = "none"; // Ocultar después de la animación
    document.getElementById("phoneContainer").style.display = "flex"; // Mostrar pantalla
    document.getElementById("phoneContainer").classList.add("show"); // Añadir clase para la animación
  }, 500); // Esperar 500ms para que la animación de ocultar se complete
}

function submitPhone() {
 
  const countryCode = document.getElementById("countryCode").value;
  const phone = document.getElementById("phoneInput").value;
  const errorMessage = document.getElementById("errorMessage");
  const numErromessage = document.getElementById("numErrorMessage");
  nameErrorMessage.classList.add("none");
  if(isNaN(phone)){
      numErromessage.classList.add("show"); // Muestra el mensaje de error
      numErromessage.classList.remove("none");
          return; // Detener la función
      }else {
          numErromessage.classList.remove("show"); // Oculta el mensaje de error
          numErromessage.classList.add("none");
 }
  // Verifica si el indicativo está vacío
  if (!countryCode) {
    errorMessage.classList.add("show"); // Mostrar mensaje de error
    errorMessage.classList.remove("none");
    return; // Detener la función
  } else {
    errorMessage.classList.remove("show"); // Ocultar mensaje de error
    errorMessage.classList.add("none");
  }
 
  if (phone) {
    document.getElementById("phoneContainer").classList.remove("show"); // Ocultar pantalla
    setTimeout(() => {
      document.getElementById("phoneContainer").style.display = "none"; // Ocultar después de la animación
      document.getElementById("thankYouMessage").style.display = "block"; // Mostrar mensaje de agradecimiento
      document.getElementById("thankYouMessage").classList.add("show"); // Añadir clase para la animación
    }, 500); // Esperar 500ms para que la animación de ocultar se complete
  } else {
    alert("Por favor, ingresa tu número de teléfono.");
  }
  /* const API = HttpService.getInstance(); */
  obtenerDatos("codeCountry", countryCode);
  obtenerDatos("number", phone);
  const nombreCliente = data.name;
  const numeroCliente = `${data.codeCountry}${data.number}`;
  const numeroClienteParsed = numeroCliente;
  parseInt(numeroClienteParsed);
  const numeroMaestro = "593986439917";
  const Descripciones = data.descriptions;
  eliminarSimboloMas(numeroCliente);
  const link = "https://wa.me/" + numeroCliente;
  const datosMod = {
    sessionId: "1234",
    phoneNumberCliente: numeroClienteParsed,
    phoneNumberMaestro: "573217374091",
    nombreDelCliente: nombreCliente,
    message: `Nueva consulta de ${nombreCliente} (${numeroCliente}): \n\n${Descripciones} \n\nPonte en contacto con el cliente:\n\n${link}`,
  };
  // Crear mensaje
  const url =
    " https://gestor-de-mesajeria-via-whatsapp-g5hc.onrender.com/api/messages/CrearMensaje";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datosMod),
  })
    .then((response) => {
      console.log("respuesta del servidor" + JSON.stringify(response));
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return response.json();
    })
    .then((datosMod) => {
      console.log("Respuesta del servidor:", datosMod);
    })
    .catch((error) => {
      console.error("Error al realizar el POST:", error);
    });
}

function goBack() {
  location.reload();
}

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffbf00" },
    shape: { type: "circle", polygon: { nb_sides: 5 } },
    opacity: { value: 0.5 },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 6, direction: "none" },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" } },
  },
});

function createdMessage(sessionId, data) {
  const nombreCliente = data.name;
  const numeroCliente = data.codeCountry + data.phone;
  const numeroMaestro = "593986439917";
  const Descripciones = data.descriptions;
  eliminarSimboloMas(numeroCliente);
  const link = "https://wa.me/" + numeroCliente;
  const datosMod = {
    sessionId: "1234",
    phoneNumberCliente: numeroCliente,
    phoneNumberMaestro: numeroMaestro,
    nombreDelCliente: nombreCliente,
    message: `Nueva consulta de ${nombreCliente} (${numeroCliente}): \n\n${Descripciones} \n\nPonte en contacto con el cliente:\n\n${link}`,
  };
  return datosMod;
}

function obtenerDatos(campo, valor) {
  data[campo] = valor;
}

function eliminarSimboloMas(numeroCliente) {
  return numeroCliente.replace(/\+/g, "");
}
