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
          "Estás en un período de estabilidad financiera y prosperidad. Es posible que experimentes un aumento en tus ingresos o que encuentres nuevas oportunidades para mejorar tu situación económica.",
          "Puedes estar considerando nuevas inversiones o proyectos financieros que te brinden seguridad a largo plazo. Confía en tu intuición y en tus habilidades para tomar decisiones financieras inteligentes y exitosas.",
          "Es importante mantener un equilibrio entre el trabajo y el disfrute de la vida. No te obsesiones demasiado con el dinero y recuerda disfrutar de las cosas simples y significativas que la vida tiene para ofrecer.",
          "Es un buen momento para revisar tus hábitos financieros y establecer metas realistas para el futuro. Con un enfoque cuidadoso y disciplinado, puedes alcanzar tus objetivos financieros y asegurar tu bienestar económico a largo plazo.",
        ],
        futuro: [
          "Tu relación con los miembros de tu familia está en un momento de armonía y apoyo mutuo. Es probable que disfrutes de momentos de unión y conexión con tus seres queridos, creando recuerdos felices juntos.",
          "Puedes estar experimentando un período de cambios en la dinámica familiar. Es importante comunicarse abierta y honestamente con los miembros de tu familia para superar cualquier desafío y fortalecer los lazos familiares.",
          "Es posible que estés considerando expandir tu familia o iniciar un nuevo capítulo en tu vida familiar, como mudarte a un nuevo hogar o planear un evento importante con tus seres queridos.",
          "Este es un momento para valorar y apreciar a tu familia, reconociendo el apoyo y el amor incondicional que te brindan. Aprovecha la oportunidad para expresar gratitud y fortalecer los lazos familiares.",
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
          "Hay necesidad de adoptar un enfoque estructurado y disciplinado hacia tus finanzas. Es un momento para establecer metas financieras claras y trabajar hacia su cumplimiento con determinación y liderazgo.",
          "Es posible que te encuentres asumiendo un papel de liderazgo en asuntos financieros o buscando el consejo de una figura paternal o autoritaria en temas de dinero. Toma decisiones financieras informadas y establecer un plan a largo plazo.",
          "Hay necesidad de establecer límites y estructuras en tus gastos y presupuesto. Es un momento para ejercer el control y la responsabilidad en tus asuntos financieros.",
          "Este es un momento para establecer una base sólida para tu seguridad financiera futura. Adopta una mentalidad de liderazgo y compromiso, puedes lograr tus objetivos financieros y construir una base financiera estable y segura.",
        ],
        futuro: [
          "Hay  necesidad de establecer una estructura sólida y roles definidos dentro de la familia. Puede ser un momento para asumir un papel de liderazgo y proporcionar orientación y apoyo a los miembros de la familia.",
          "Es posible que te encuentres buscando equilibrar las necesidades de cada miembro de la familia y establecer reglas claras y límites saludables. Mantén la disciplina y la autoridad en el hogar.",
          "Hay influencia de una figura paternal o autoritaria en la dinámica familiar. Es un momento para reflexionar sobre la importancia del respeto y la responsabilidad en las relaciones familiares.",
          "Este es un momento para fortalecer los lazos familiares y cultivar un ambiente de seguridad y estabilidad en el hogar. Al proporcionar estructura y liderazgo, puedes promover la armonía y el bienestar en tu familia.",
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
          "En el ámbito financiero, la presencia de El Sumo Sacerdote sugiere la importancia de seguir principios financieros sólidos y adherirse a la tradición. Es un momento para buscar consejos financieros de personas de confianza.",
          "Este es un momento para adoptar un enfoque estructurado y disciplinado hacia tus finanzas. La educación financiera y la investigación pueden ser clave para tomar decisiones informadas y alcanzar tus metas financieras.",
          "La influencia de Tauro, destaca la necesidad de establecer una base financiera sólida y segura. Es un momento para mantener el control y la responsabilidad en tus asuntos financieros.",
          "Es posible que te encuentres iniciando un nuevo camino financiero o buscando oportunidades de inversión tradicionales y seguras. Este es un momento para tomar decisiones prudentes y evitar riesgos innecesarios.",
        ],
        futuro: [
          "En el ámbito familiar, importancia de la tradición y la estructura. Es un momento para buscar orientación de figuras de autoridad en la familia y seguir principios éticos sólidos.",
          "Este es un momento para fortalecer los lazos familiares mediante el respeto a las tradiciones y el establecimiento de roles definidos. La rutina y la disciplina pueden ser beneficiosas para promover la armonía en el hogar.",
          "La influencia de Tauro, destaca la necesidad de mantener la estabilidad y la seguridad en la familia. Es un momento para cultivar la confianza y el respeto mutuo entre los miembros de la familia.",
          "Es posible que te encuentres buscando la orientación de una figura paternal o autoritaria en asuntos familiares. Este es un momento para valorar las enseñanzas y la sabiduría transmitida por generaciones anteriores.",
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
          "Te encuentras en una encrucijada importante en cuanto a tus finanzas. Es crucial considerar todas las opciones con cuidado y seguir tu intuición para tomar la mejor decisión.",
          "Las decisiones financieras son primordiales en este momento. Evalua tus prioridades financieras y elegir el camino que te brinde estabilidad y seguridad económica.",
          "Estás en un momento de decisiones cruciales en cuanto a tus recursos monetarios. Confía en tu instinto y elige el camino que te conduzca hacia el éxito financiero y la tranquilidad.",
          "Este es un momento para reflexionar sobre tus metas y valores financieros. Recuerda que seguir tu corazón en asuntos monetarios puede llevarte a la prosperidad y la satisfacción financiera.",
        ],
        futuro: [
          "Te encuentras en una encrucijada emocional en tu hogar. Es importante considerar cómo afectarán tus decisiones a los miembros de tu familia y buscar la armonía en tus relaciones familiares.",
          "Las decisiones familiares son cruciales en este momento. Considera cuidadosamente todas las opciones disponibles y a elegir aquella que promueva la paz y la unión en tu familia.",
          "Estás en un momento de decisiones importantes en tu hogar. Confía en tu intuición y elige el camino que te brinde mayor felicidad y armonía en tu familia.",
          "Este es un momento para reflexionar sobre tus valores y prioridades familiares. Recuerda que las decisiones tomadas desde el corazón pueden fortalecer los lazos familiares y promover la felicidad en el hogar.",
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
          "Es hora de tomar el control de tus finanzas y dirigirlas hacia el éxito. Es importante establecer metas financieras claras y trabajar con determinación para alcanzarlas.",
          "Estás en camino hacia el éxito financiero. Confía en tu capacidad para superar los desafíos y lograr la estabilidad económica con determinación y esfuerzo.",
          "Toma medidas decisivas para mejorar tu situación financiera y alcanzar tus objetivos monetarios. Con determinación y enfoque, puedes superar cualquier obstáculo y alcanzar la victoria en tus finanzas.",
          "Este es un momento para dirigir tus recursos financieros con confianza hacia el éxito y la prosperidad. Confía en tu capacidad para tomar decisiones financieras sabias y alcanzar la estabilidad económica.",
        ],
        futuro: [
          "Es hora de asumir un papel de liderazgo en tu familia y tomar decisiones importantes para el bienestar de todos. Confía en tu capacidad para guiar a tus seres queridos hacia un futuro exitoso y armonioso.",
          "Estás en camino hacia una victoria familiar. Es importante mantener la determinación y trabajar en equipo para superar cualquier dificultad y alcanzar la armonía en el hogar.",
          "Toma las riendas de tu vida familiar y dirigirla hacia el éxito. Con determinación y esfuerzo, puedes superar cualquier obstáculo y lograr la victoria en tus relaciones familiares.",
          "Este es un momento para liderar a tu familia con determinación y confianza hacia un futuro próspero y feliz. Confía en tu capacidad para tomar decisiones sabias y alcanzar la armonía en el hogar.",
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
          "La determinación y la resistencia serán clave para superar dificultades financieras. Es un momento para mantener la calma y confiar en tu capacidad para resolver problemas y alcanzar el éxito financiero.",
          "Tienes la fuerza interior para superar cualquier desafío financiero que enfrentes. Confía en tu capacidad para tomar decisiones sabias y trabajar con diligencia para alcanzar tus metas financieras.",
          "Puedes transformar tu situación financiera con valentía y determinación. Aprovecha tu fuerza interior para tomar el control de tus finanzas y alcanzar la estabilidad económica.",
          "Este es un momento para enfrentar los desafíos financieros con confianza y coraje. Con determinación y esfuerzo, puedes superar cualquier obstáculo y construir una base financiera sólida y segura.",
        ],
        futuro: [
          "La compasión y la fuerza serán fundamentales para resolver conflictos familiares. Es un momento para demostrar paciencia y determinación mientras trabajas para fortalecer los lazos familiares.",
          "La Fuerza te anima a mantener la calma y la compasión mientras enfrentas desafíos en tu vida familiar. Confía en tu fuerza interior para superar cualquier obstáculo y promover la armonía en el hogar.",
          "Tienes el poder de transformar las dinámicas familiares con valentía y determinación. Aprovecha tu fuerza interior para resolver conflictos y fortalecer los lazos emocionales en tu familia.",
          "Este es un momento para enfrentar los desafíos familiares con compasión y coraje. Con paciencia y determinación, puedes superar cualquier obstáculo y crear un ambiente familiar más armonioso y amoroso.",
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
          "Es un momento para la planificación cuidadosa y la evaluación de tus metas financieras. Tómate el tiempo necesario para reflexionar sobre tus decisiones financieras y encontrar la estabilidad económica.",
          "Busca la claridad y la sabiduría mientras te alejas del estrés y la distracción en tus asuntos financieros. Utiliza este período de soledad para evaluar tus prioridades financieras y establecer un plan a largo plazo.",
          "La autodisciplina y la paciencia son esenciales para alcanzar la seguridad financiera. Utiliza este tiempo a solas para tomar decisiones financieras fundamentadas y evitar gastos innecesarios.",
          "Este es un momento para buscar respuestas dentro de ti mismo y encontrar la estabilidad financiera. Aprovecha la soledad para sintonizar con tus verdaderas necesidades y establecer metas financieras realistas.",
        ],
        futuro: [
          "Es un momento para la reflexión y la introspección en la dinámica familiar. Puede ser beneficioso tomarse un tiempo a solas para evaluar las relaciones familiares y encontrar la paz interior.",
          "Busca la sabiduría y la claridad emocional mientras te alejas del caos y la distracción en tu vida familiar. Tómate el tiempo necesario para conectarte contigo mismo y comprender tus necesidades y deseos familiares.",
          "La autodisciplina y la paciencia son fundamentales para resolver conflictos y promover la armonía en la familia. Utiliza este período de soledad para reflexionar sobre las relaciones familiares y establecer límites saludables.",
          "Este es un momento para buscar respuestas dentro de ti mismo y encontrar la claridad emocional en tu relación familiar. Aprovecha la soledad para sintonizar con tus verdaderos sentimientos y fortalecer los lazos familiares.",
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
          "Hay un cambio positivo en tu situación financiera. Puedes esperar que las circunstancias mejoren y que la suerte esté de tu lado. Este es un momento de optimismo y esperanza en tus finanzas.",
          "Hay un mensaje de esperanza kármica en el aspecto financiero. Las circunstancias están a punto de cambiar para mejor, y puedes esperar que la suerte esté de tu lado. Mantén una actitud positiva y confía en que el universo está trabajando a tu favor en tus finanzas.",
          "Los ciclos y las fluctuaciones son naturales en tus finanzas. Mantén la fe y la confianza en el proceso, ya que el destino está trabajando a tu favor para mejorar tu situación financiera.",
          "Este es un momento para estar abierto a nuevas oportunidades y experiencias en el ámbito financiero. La suerte está cambiando a tu favor, y es posible que encuentres nuevas fuentes de ingresos o una mejora en tu estabilidad financiera.",
        ],
        futuro: [
          "Hay cambios positivos en la dinámica familiar. Puedes esperar que las circunstancias mejoren y que la suerte esté de tu lado. Este es un momento de optimismo y esperanza en tu vida familiar.",
          "Hay un mensaje de esperanza kármica en la familia. Las circunstancias están a punto de cambiar para mejor, y puedes esperar que la suerte esté de tu lado. Mantén una actitud positiva y confía en que el universo está trabajando a tu favor en tu familia.",
          "Los ciclos y las fluctuaciones son naturales en las relaciones familiares. Mantén la fe y la confianza en el proceso, ya que el destino está trabajando a tu favor para mejorar tu vida familiar.",
          "Este es un momento para estar abierto a nuevas oportunidades y experiencias en la familia. La suerte está cambiando a tu favor, y es posible que encuentres una armonía renovada y un mayor entendimiento en tu familia.",
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
          "Podrías encontrarte en una situación en la que es necesario hacer un sacrificio financiero para lograr un objetivo mayor. A largo plazo, esta decisión puede llevarte a una posición más sólida y estable.",
          "Reflexiona sobre tu relación con el dinero y considera si necesitas cambiar tu perspectiva. Soltar una creencia limitante o un hábito financiero puede abrirte a nuevas oportunidades de crecimiento.",
          "Si te sientes estancado en tu situación financiera, podría ser el momento de dejar ir un gasto o inversión que no está rindiendo frutos. Esta decisión puede liberarte para enfocarte en metas más productivas.",
          "Considera tomar un tiempo para reevaluar tus prioridades financieras. Hacer un sacrificio temporal ahora podría permitirte alcanzar un mayor éxito financiero en el futuro.",
        ],
        futuro: [
          "Podrías enfrentarte a la necesidad de renunciar a una expectativa o plan familiar. Aunque puede ser difícil, esto puede abrir la puerta a nuevas oportunidades y una mayor armonía en el hogar.",
          "Es un buen momento para adoptar una perspectiva diferente sobre una situación familiar que ha estado causando tensión. Considera hacer un sacrificio que podría beneficiar a todos en el largo plazo.",
          "Si sientes que la dinámica familiar está estancada, reflexiona sobre qué aspectos pueden necesitar un cambio. A veces, soltar el control puede permitir que las relaciones familiares crezcan de manera más saludable.",
          "Considera la posibilidad de renunciar a algo personal para el bienestar general de la familia. Este acto de sacrificio puede fortalecer los lazos familiares y generar un ambiente más unido y comprensivo.",
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
          "Podrías estar en una situación en la que necesites dejar atrás un gasto o inversión que no te está beneficiando. Al soltarlo, podrás ver nuevas oportunidades financieras con mayor claridad.",
          "Es un buen momento para reevaluar tus prioridades financieras y soltar aquellos compromisos que te están limitando. Cambiar tu perspectiva sobre el dinero puede abrirte a nuevas posibilidades de crecimiento.",
          "Si sientes que tu situación financiera está estancada, considera hacer un sacrificio temporal para liberar recursos que puedan ser utilizados de manera más efectiva.",
          "Reflexiona sobre tus hábitos financieros y adopta una nueva forma de manejarlos. Dejar atrás lo que ya no es útil te permitirá avanzar hacia una mayor estabilidad y éxito financiero.",
        ],
        futuro: [
          "Es posible que necesites renunciar a ciertos hábitos o expectativas para mejorar la armonía familiar. Cambiar la forma en que ves la situación puede traer una mayor comprensión y unidad en tu hogar.",
          "Considera adoptar una nueva perspectiva en una situación familiar difícil. A veces, soltar el control y permitir que las cosas sigan su curso puede ser el sacrificio necesario para avanzar.",
          "Si sientes que las relaciones familiares están tensas, podría ser el momento de dejar atrás viejos resentimientos. Este acto de liberación puede abrir un camino hacia la sanación y el crecimiento familiar.",
          "Reflexiona sobre lo que estás aferrando en tu vida familiar que ya no es útil. Soltar esas ataduras puede traer claridad y permitir que la paz regrese a tu hogar.",
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
          "Es hora de reevaluar tus hábitos financieros y soltar inversiones o gastos que ya no son útiles. Este cambio te permitirá redirigir tus recursos hacia algo más productivo y beneficioso.",
          "Si enfrentas una pérdida financiera, acéptala como parte de un ciclo natural de reajuste. Este es un momento para aprender de la experiencia y comenzar un nuevo capítulo en tu vida económica.",
          "Reflexiona sobre las decisiones financieras que has tomado hasta ahora. Dejar atrás lo que no funciona te permitirá avanzar con una estrategia más sólida y efectiva.",
          "Acepta los cambios inevitables en tu situación financiera. Este reajuste puede ser un desafío, pero es una oportunidad para transformar tu enfoque y mejorar tu estabilidad a largo plazo.",
        ],
        futuro: [
          "Es un buen momento para dejar atrás viejas disputas familiares y permitir que nuevas formas de comunicación y comprensión tomen su lugar. Este reajuste traerá paz y unidad al hogar.",
          "Si sientes que las dinámicas familiares están obsoletas, ahora es el momento de aceptar el cambio. Soltar lo viejo permitirá que nuevas formas de conexión y apoyo florezcan en tu familia.",
          "Reflexiona sobre las tradiciones o hábitos familiares que ya no resuenan contigo. Dejar ir estas viejas formas abrirá la puerta a un entorno más armonioso y adaptable.",
          "Enfrenta los cambios en tu vida familiar con valentía, sabiendo que este reajuste es parte del ciclo natural de la vida. Aceptar lo inevitable permitirá que tu familia evolucione y crezca junta.",
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
          "Es importante encontrar un equilibrio entre tus objetivos materiales y tus valores espirituales en tus decisiones financieras. Al hacerlo, podrás crear una estabilidad que respalde tanto tu bienestar físico como emocional.",
          "Si te enfrentas a desafíos financieros, busca una solución que combine tanto la lógica como la intuición. Esta mezcla de enfoques te ayudará a navegar por la situación de manera más efectiva.",
          "Este es un buen momento para equilibrar tus deseos de seguridad financiera con la necesidad de flexibilidad y cambio. Al adaptarte a las circunstancias, podrás mantener la estabilidad en medio de la incertidumbre.",
          "Reflexiona sobre la dualidad en tu vida económica y trabaja para unir esos elementos opuestos. Al encontrar un equilibrio entre lo que ganas y lo que gastas, podrás mejorar tu situación financiera de manera sostenible.",
        ],
        futuro: [
          "Busca equilibrar las necesidades materiales y emocionales dentro de tu familia. Al hacerlo, podrás crear un ambiente más armonioso y estable en el hogar.",
          "Si hay tensiones familiares, trata de mediar entre las diferentes perspectivas. Al actuar como un puente entre lo místico y lo terrenal, puedes facilitar la reconciliación y la paz en la familia.",
          "Este es un buen momento para promover la igualdad y la conciliación entre los miembros de tu familia. Al encontrar un equilibrio, todos podrán sentirse más conectados y apoyados.",
          "Acepta que la vida familiar es un proceso constante de cambio y adaptación. Al equilibrar los elementos opuestos en la dinámica familiar, podrás mantener la armonía a medida que evolucionan las circunstancias.",
        ],
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
          "En el ámbito financiero, ten cuidado con las tentaciones que podrían llevarte a tomar decisiones imprudentes. Reflexiona sobre tus motivaciones y asegúrate de que tus decisiones estén alineadas con tus valores y metas a largo plazo.",
          "Si estás luchando con adicciones o patrones de gasto descontrolado, este es el momento de confrontarlos. Al hacerlo, podrás liberarte de las ataduras materiales que te impiden alcanzar la estabilidad financiera.",
          "Evalúa si los miedos o inseguridades están influyendo en tus decisiones financieras. Trabaja en superar estas barreras emocionales para poder tomar decisiones más equilibradas y efectivas.",
          "Confronta las influencias negativas que podrían estar afectando tu vida económica. Al liberarte de estas cadenas, podrás tomar el control de tu situación financiera y avanzar hacia una mayor estabilidad y crecimiento.",
        ],
        futuro: [
          "En el ámbito familiar, es importante ser consciente de las tentaciones o influencias negativas que podrían estar creando tensiones. Trabaja en identificar y eliminar estos factores para restaurar la armonía en el hogar.",
          "Si hay miedos o inseguridades dentro de tu familia, este es un momento para enfrentarlos abiertamente. Al hacerlo, podrás ayudar a tu familia a liberarse de las cadenas emocionales que los retienen y fortalecer los lazos familiares.",
          "Reflexiona sobre si las ataduras materiales o emocionales están afectando la dinámica familiar. Tomar decisiones para liberarse de estas ataduras permitirá que la familia crezca y evolucione en un ambiente más positivo.",
          "Este es un buen momento para confrontar y superar las influencias que están desequilibrando el ambiente familiar. Al hacerlo, podrás ayudar a crear un entorno más estable y saludable para todos los miembros de la familia.",
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
          "En el ámbito financiero, podrías estar enfrentando la destrucción de estructuras económicas que ya no son sostenibles. Acepta estos cambios como una oportunidad para reorganizar tus finanzas y establecer una base más sólida para el futuro.",
          "Si te encuentras en una situación financiera difícil, este es el momento de dejar ir lo que no está funcionando y buscar nuevas estrategias. Aunque el proceso puede ser desafiante, el cambio traerá consigo oportunidades para un renacimiento financiero.",
          "Evalúa si hay hábitos financieros o inversiones que necesitan ser eliminados para permitir un crecimiento económico. Acepta los cambios necesarios y utiliza esta transformación como un impulso para la renovación financiera.",
          "Este es un momento de cambio y transformación en tu vida económica. Permítete derribar las estructuras que han estado impidiendo tu progreso financiero y trabaja en la construcción de un futuro más estable y próspero.",
        ],
        futuro: [
          "En el ámbito familiar, es posible que ciertas estructuras o dinámicas estén a punto de desmoronarse. En lugar de resistir estos cambios, acéptalos como una oportunidad para reconstruir una base familiar más fuerte y saludable.",
          "Si hay conflictos o tensiones dentro de tu familia, este es un buen momento para confrontarlos directamente. Aunque puede ser doloroso, este proceso es necesario para permitir un renacimiento y una mejora en las relaciones familiares.",
          "Considera si las tradiciones o reglas familiares están impidiendo el crecimiento y la evolución de los miembros de la familia. Es el momento de cuestionar y destruir lo que ya no es funcional para permitir una nueva dinámica familiar.",
          "Este es un periodo de cambio profundo en la familia. Aprovecha esta oportunidad para dejar ir lo que ya no funciona y trabajar juntos en la creación de un ambiente familiar más armonioso y resiliente.",
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
          "En el ámbito financiero, mantén viva la esperanza y la fe, incluso si las situaciones parecen confusas o engañosas. Busca la verdad detrás de las apariencias y confía en la guía espiritual para tomar decisiones financieras sabias.",
          "Si sientes que hay dualidad o engaño en tus asuntos financieros, es esencial que busques la verdad y la claridad. La esperanza y la inspiración divina te ayudarán a superar estos desafíos y a encontrar un propósito más profundo en tu vida económica.",
          "Confía en tu intuición y mantén la fe en tus decisiones financieras, incluso si las cosas parecen inciertas. Busca orientación espiritual para guiarte a través de cualquier confusión o incertidumbre económica.",
          "Este es un momento para buscar un propósito más elevado en tus asuntos financieros. Si te enfrentas a engaños o desilusiones, la esperanza y la conexión espiritual te ayudarán a encontrar un camino hacia la estabilidad y el éxito económico.",
        ],
        futuro: [
          "En el ámbito familiar, es importante mantener la esperanza y la fe, incluso si las situaciones parecen confusas o engañosas. Busca la verdad detrás de las apariencias y confía en la guía espiritual para mantener la armonía en la familia.",
          "Si hay engaños o malentendidos en la familia, este es un momento para buscar la verdad y la claridad. La esperanza y la inspiración divina te ayudarán a superar cualquier desafío y a fortalecer los lazos familiares.",
          "Confía en tu intuición y mantén la fe en las relaciones familiares, incluso si las cosas parecen inciertas. Busca orientación espiritual para guiarte a través de cualquier confusión o conflicto.",
          "Este es un momento para buscar un propósito más profundo en tus relaciones familiares. Si te enfrentas a engaños o desilusiones, la esperanza y la conexión con lo espiritual te ayudarán a encontrar un camino hacia la verdad y la reconciliación.",
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
          "En tus finanzas, podría haber una situación que no es lo que parece. Asegúrate de revisar todos los detalles y no te dejes engañar por promesas que parecen demasiado buenas para ser verdad. La precaución es vital.",
          "Podrías estar tentado a tomar decisiones financieras basadas en expectativas poco realistas. Es esencial analizar a fondo cualquier inversión o gasto antes de comprometerte. La intuición y la lógica deben ir de la mano.",
          "Es posible que te enfrentes a ofertas que parecen atractivas pero que podrían ocultar riesgos. Haz tu investigación y no te dejes llevar por ilusiones de éxito rápido. La realidad puede ser diferente de lo que se presenta.",
          "Este es un momento para ser extremadamente cuidadoso con tus decisiones financieras. La ilusión de prosperidad puede estar encubriendo problemas. Mantén la mente clara y busca la verdad en cada transacción.",
        ],
        futuro: [
          "Dentro de tu familia, podrían surgir dinámicas ocultas que están influyendo en el ambiente general. Utiliza tu intuición para percibir lo que no se dice abiertamente y busca claridad en las relaciones familiares.",
          "Hay una posibilidad de que algunos miembros de la familia estén guardando secretos o no sean completamente transparentes. Enfrenta estos temas con tacto y trata de desvelar la verdad para fortalecer los lazos familiares.",
          "Podrías sentir una tensión subyacente o emociones no expresadas en el entorno familiar. Es un buen momento para tener conversaciones sinceras y explorar los sentimientos que se han mantenido ocultos.",
          "Si hay alguna confusión o malentendido en la familia, tómate un momento para meditar y entender el trasfondo de la situación. La claridad y la verdad emergen cuando te permites ver más allá de las ilusiones.",
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
          "Invierte en educación y desarrollo personal. Busca cursos que expandan tu mente y habilidades. Esta inversión actuará como un canto de sabiduría, atrayendo oportunidades de crecimiento financiero y profesional, alineándote con tu propósito vital y mejorando tu energía general.",
          "Explora negocios ecológicos y sostenibles. Investiga mercados en energías renovables o economía circular. Esto puede ser financieramente rewarding y te conectará con la energía de la Pachamama, creando abundancia en armonía con los ciclos naturales.",
          "Practica gratitud diaria por tus recursos. Crea un ritual de agradecimiento, visualizando energía vital fluyendo hacia tus finanzas. Esto cambiará tu mentalidad sobre el dinero, transformando el caos interno en claridad y atrayendo más oportunidades de prosperidad.",
          "Analiza tus patrones financieros como ciclos naturales. Identifica fases de abundancia y escasez. Usa esta iluminación para diseñar estrategias que optimicen tus recursos, creando un flujo financiero sostenible que nutra todos los aspectos de tu vida.",
        ],
        futuro: [
          "Organiza reuniones familiares al aire libre. Planifica jardinería colectiva o excursiones. Esto fortalecerá los lazos familiares y los ayudará a sintonizarse con los ciclos naturales, promoviendo armonía y vitalidad en el hogar, conectándolos con la energía de la naturaleza.",
          "Comparte sabiduría intergeneracional. Organiza sesiones donde los mayores cuenten historias y los jóvenes enseñen tecnología. Este intercambio actuará como un canto de sabiduría, iluminando el pasado y el futuro, creando un puente de comprensión entre generaciones.",
          "Crea rituales familiares para los solsticios o lunas llenas. Estas ceremonias conectarán a tu familia con la Pachamama y proporcionarán estabilidad en tiempos caóticos, fomentando un sentido de pertenencia y continuidad, alineándose con los ciclos naturales.",
          "Implementa 'círculos de palabra' regulares donde cada miembro se exprese libremente. Esta práctica transformará el caos interno en claridad y comprensión, fortaleciendo los vínculos familiares y creando un ambiente de apoyo mutuo, como una fuerza divina en el hogar.",
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
          "Realiza una profunda autoevaluación de tus valores y cómo se relacionan con el dinero. Identifica creencias limitantes sobre la abundancia. Esta claridad te ayudará a alinear tus acciones financieras con tu verdadero ser, atrayendo mayor prosperidad.",
          "Explora formas no convencionales de generar ingresos que se alineen con tu autenticidad. Considera habilidades únicas que has pasado por alto. Esta apertura a la diversidad en tus finanzas puede abrir nuevas oportunidades de crecimiento económico.",
          "Practica la transparencia financiera contigo mismo. Enfrenta tus miedos sobre el dinero y examina tus hábitos ocultos. Este 'despertar' financiero te permitirá tomar decisiones más conscientes y efectivas con tus recursos.",
          "Evalúa cómo tu imagen externa puede estar influyendo en tus decisiones financieras. Libérate de gastos que solo alimentan apariencias. Invertir en tu verdadero ser y necesidades auténticas llevará a una mayor satisfacción y estabilidad económica.",
        ],
        futuro: [
          "Organiza una reunión familiar donde cada miembro comparta una verdad personal que nunca antes había revelado. Este ejercicio de autenticidad fortalecerá los lazos familiares y promoverá una comprensión más profunda entre todos.",
          "Fomenta la aceptación de la diversidad en tu familia. Organiza actividades que celebren las diferencias individuales. Esto podría incluir compartir historias de vida únicas o explorar juntos diferentes culturas y perspectivas.",
          "Implementa un 'día sin máscaras' familiar mensual, donde todos se comprometan a ser completamente auténticos. Esta práctica ayudará a eliminar tensiones ocultas y fomentará una comunicación más abierta y honesta en el hogar.",
          "Reflexiona sobre los roles familiares establecidos. Cuestiona si estos reflejan realmente quiénes son. Anima a cada miembro a explorar nuevas facetas de sí mismos, promoviendo el crecimiento individual y colectivo en la familia.",
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
          "Evalúa el ciclo financiero actual en tu vida. Reconoce logros y aprendizajes. Diseña un plan para cerrar esta etapa y prepararte para la siguiente, considerando tanto aspectos materiales como espirituales de la abundancia.",
          "Busca el equilibrio entre ganar y dar en tus finanzas. Establece un presupuesto que incluya tanto inversiones como donaciones. Esta práctica te conectará con el flujo universal de abundancia, atrayendo más prosperidad a tu vida.",
          "Comparte tu conocimiento financiero. Considera mentoría o talleres gratuitos sobre manejo del dinero. Esta acción de devolver a la comunidad no solo ayudará a otros, sino que también atraerá más abundancia a tu vida.",
          "Crea un ritual para conectar tus finanzas con tu espiritualidad. Podría ser una meditación antes de tomar decisiones económicas importantes. Esta práctica te ayudará a alinear tus acciones financieras con tu propósito superior y la conciencia cósmica.",
        ],
        futuro: [
          "Organiza una reunión familiar para celebrar el cierre de un ciclo importante. Reflexionen sobre los logros y desafíos superados juntos. Creen un símbolo o ritual que represente este momento, fortaleciendo los lazos y preparándose para el próximo capítulo.",
          "Fomenta el equilibrio entre diferentes generaciones en tu familia. Organiza actividades que combinen sabiduría ancestral con ideas modernas. Este intercambio creará una sensación de plenitud y continuidad en tu linaje familiar.",
          "Inicia un proyecto familiar de servicio comunitario. Compartan juntos los conocimientos y habilidades adquiridos. Esta acción de devolver al mundo no solo beneficiará a otros, sino que también creará un sentido de propósito compartido en la familia.",
          "Crea un espacio sagrado en el hogar que represente la unión de lo terrenal y lo celestial. Úsenlo para reuniones familiares especiales. Este lugar simbólico ayudará a mantener la conexión familiar con el universo y entre ustedes mismos.",
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
