/**
 * CONFIGURACIÓN CENTRAL — EXPERIENCIA DE CUMPLEAÑOS DE KIMBERLY
 * 
 * Puedes modificar los textos, fechas, recuerdos y rutas de fotografías fácilmente desde aquí.
 * Todos los campos admiten personalización inmediata.
 */

export const birthdayConfig = {
  // Información personal
  name: "Kimberly",
  shortName: "Kim",
  celebrationYear: "2026",
  
  // Escena 01: Intriga inicial
  intro: {
    greeting: "Hey, Kimberly...",
    pauseText: "Antes de que sigas mirando...",
    hookText: "tengo algo preparado especialmente para ti.",
    buttonText: "Abrir experiencia ✨",
    audioNotice: "(Sube un poquito el volumen para que se sienta mejor)"
  },

  // Escena 02: Cortometraje animado procedural ("La manzana, los brackets y el limón")
  comic: {
    badge: "HISTORIA 100% REAL (O CASI)",
    panels: [
      {
        id: 1,
        caption: "Todo comenzó hoy por la mañana... estaba pensando en que hoy es tu cumpleaños.",
        thought: "«Hoy cumple Kimberly... hay que hacer algo épico...»",
        doodle: "thinking"
      },
      {
        id: 2,
        caption: "Pero de pronto... me dio un hambre tremenda. Y vi una manzana roja perfecta.",
        thought: "«Una manzanita rápida para la energía cerebral.»",
        doodle: "apple"
      },
      {
        id: 3,
        caption: "Fui a pegarle un mordisco con toda la emoción del mundo...",
        thought: "«¡CRUNCH!... espera...»",
        doodle: "bite_fail"
      },
      {
        id: 4,
        caption: "RECORDÉ QUE TENGO BRACKETS. Mordisco denegado. Ley de la odontología número 1.",
        thought: "«No puedo morderla entera o desintegro un bracket.»",
        doodle: "brackets_warning"
      },
      {
        id: 5,
        caption: "Decidí actuar como persona civilizada: buscar un cuchillo para cortarla en rodajas finas.",
        thought: "«Ingeniería aplicada a la fruta.»",
        doodle: "knife"
      },
      {
        id: 6,
        caption: "Y por hacerme el chef profesional... ¡ZAS! Me corté un dedo.",
        thought: "«¡AUUUCH! Sangre inocente derramada.»",
        doodle: "cut_finger"
      },
      {
        id: 7,
        caption: "Fui a la cocina por un poco de agua o algo... y tropecé con medio limón que estaba en la mesa.",
        thought: "«No... no mires hacia arriba...»",
        doodle: "lemon_fall"
      },
      {
        id: 8,
        caption: "EL JUGO DE LIMÓN CAYÓ EXACTAMENTE EN EL CORTE. DOLOR GALÁCTICO.",
        thought: "«¡¿POR QUÉ EL UNIVERSO CONSPIRA CONTRA MÍ HOY?!»",
        doodle: "lemon_scream"
      },
      {
        id: 9,
        caption: "Uf...",
        thought: "«Sobreviví... apenas.»",
        doodle: "exhausted"
      },
      {
        id: 10,
        caption: "En fin... toda esta estupidez sólo para decirte que, aunque sea un desastre comiendo manzanas...",
        thought: "«Ojalá pudiera estar contigo hoy para felicitarte en persona.»",
        doodle: "sweet_shift"
      }
    ],
    nextButton: "Y bueno... hablando de hoy →"
  },

  // Escena 03: Gran Revelación
  reveal: {
    superTitle: "¡HOY ES TU DÍA!",
    mainTitle: "¡FELIZ CUMPLEAÑOS!",
    nameHighlight: "KIMBERLY",
    subtitle: "Una vuelta más al sol para una de las personas más geniales que conozco."
  },

  // Escena 04: Mensaje Personal (Cálido, conversacional, con complicidad)
  personalMessage: {
    badge: "UNA PEQUEÑA PAUSA SINCERA",
    title: "Bueno... ahora sí en serio.",
    paragraphs: [
      "Quería tomarme un momento para hacerte algo que no fuera el típico mensaje de texto de dos líneas que todo el mundo copia y pega en un cumpleaños.",
      "La verdad es que admiro un montón tu energía, tu forma de ver las cosas y esa capacidad que tienes para hacer que cualquier momento normal termine siendo una anécdota divertida.",
      "Tienes una personalidad demasiado especial, Kimberly. De esas que dejan marca en la gente con solo estar ahí, siendo tú misma, con tus ocurrencias y tu risa.",
      "Eres una persona sumamente importante para mí. Me alegra muchísimo coincidir contigo en esta vida y tener la suerte de compartir tantas conversaciones y risas.",
      "Así que hoy se celebra todo eso... y más."
    ]
  },

  // Escena 05: Galería de Fotos (Scrapbook)
  gallery: {
    title: "Álbum de Recuerdos",
    subtitle: "Pequeños instantes capturados en el tiempo (toca cualquier foto para verla de cerca)",
    photos: [
      {
        id: 1,
        src: "./assets/photos/foto01.jpg",
        caption: "Ese día de risas que no podían parar ✨",
        date: "Momento favorito",
        tag: "Inolvidable",
        rotation: -2,
        placeholderColor: "#F8B195",
        placeholderIcon: "camera"
      },
      {
        id: 2,
        src: "./assets/photos/foto02.jpg",
        caption: "Una de esas miradas de «¿qué estás inventando ahora?»",
        date: "Anécdota clásica",
        tag: "Cómplices",
        rotation: 3,
        placeholderColor: "#C06C84",
        placeholderIcon: "smile"
      },
      {
        id: 3,
        src: "./assets/photos/foto03.jpg",
        caption: "Café, charlas eternas y arreglar el mundo en una tarde",
        date: "Buenas pláticas",
        tag: "Café & Risas",
        rotation: -1.5,
        placeholderColor: "#6C5B7B",
        placeholderIcon: "coffee"
      },
      {
        id: 4,
        src: "./assets/photos/foto04.jpg",
        caption: "Simplemente tú siendo tú (y brillando sin esfuerzo)",
        date: "Especial",
        tag: "Auténtica",
        rotation: 2.5,
        placeholderColor: "#355C7D",
        placeholderIcon: "sparkles"
      },
      {
        id: 5,
        src: "./assets/photos/foto05.jpg",
        caption: "Cuando el plan era tranquilo pero terminó siendo una aventura",
        date: "Aventura improvisada",
        tag: "Momentos top",
        rotation: -3,
        placeholderColor: "#E9B872",
        placeholderIcon: "map"
      },
      {
        id: 6,
        src: "./assets/photos/foto06.jpg",
        caption: "La mejor sonrisa de todas. Guardada para siempre aquí.",
        date: "Hoy y siempre",
        tag: "La mejor",
        rotation: 1.8,
        placeholderColor: "#FF6B6B",
        placeholderIcon: "heart_sketch"
      }
    ]
  },

  // Escena 06: Recuerdos (Cápsulas de memoria)
  memories: [
    {
      id: "m1",
      number: "01",
      title: "Las pláticas interminables",
      text: "Empezamos hablando de una tontería y dos horas después estábamos debatiendo sobre teorías existenciales y chismes de la nada.",
      icon: "chat",
      tag: "Horas de vuelo"
    },
    {
      id: "m2",
      number: "02",
      title: "Tus consejos con sentido común",
      text: "Esa forma tan tuya de escuchar y decir justo la frase necesaria para devolverme a la realidad (o hacerme reír cuando más lo necesitaba).",
      icon: "sparkle",
      tag: "Voz sabia"
    },
    {
      id: "m3",
      number: "03",
      title: "Las risas sin explicación",
      text: "Cuando nos reímos de algo tan absurdo que nadie más a nuestro alrededor entiende de qué demonios nos estamos riendo.",
      icon: "laugh",
      tag: "Complicidad"
    },
    {
      id: "m4",
      number: "04",
      title: "La admiración silenciosa",
      text: "Ver cómo le pones ganas a lo que haces, cómo cuidas a los tuyos y la nobleza tan grande que llevas dentro.",
      icon: "star",
      tag: "De verdad"
    }
  ],

  // Escena 07: Pequeña sorpresa interactiva (Cupcake con vela)
  surprise: {
    promptQuestion: "Creo que todavía falta algo importante aquí...",
    buttonText: "¿Qué cosa? 👀",
    revealedTitle: "¡Pide un deseo!",
    instruction: "Toca la velita para apagar la llama y que se cumpla tu deseo ✨",
    wishGrantedTitle: "¡Deseo enviado al universo! 🎂✨",
    wishGrantedText: "Que todo lo bonito que le das al mundo regrese a ti multiplicado por diez. (Y sí, tienes derecho a pedir doble porción de pastel hoy)."
  },

  // Escena 08: Carta manuscrita en sobre físico
  letter: {
    badge: "PALABRAS DE PUÑO Y LETRA",
    envelopeTitle: "Casi se me olvida lo más importante...",
    envelopeSubtitle: "Hay cosas que se sienten más reales cuando se escriben a mano. Toca el sobre para abrirlo.",
    sealInitial: "K",
    buttonOpen: "Abrir carta ✉️",
    pages: [
      {
        id: 1,
        image: "./assets/letter/carta-01.jpg",
        altText: "Página 1 de la carta para Kimberly",
        note: "Página 1 de 2 — Escrita con calma pensando en ti"
      },
      {
        id: 2,
        image: "./assets/letter/carta-02.jpg",
        altText: "Página 2 de la carta para Kimberly",
        note: "Página 2 de 2 — Con todo el cariño del mundo"
      }
    ],
    fallbackLetterText: [
      "Querida Kimberly,",
      "Si estás leyendo esto, sobreviviste a la historia de la manzana y el limón.",
      "Quería dejarte plasmado en papel algo que a veces las palabras cotidianas no alcanzan a dimensionar: lo mucho que aprecio tenerte en mi vida.",
      "Gracias por tu autenticidad, por no cambiar tu esencia por encajar con nadie, por ser esa mezcla perfecta entre madurez y ocurrencias locas.",
      "Deseo de corazón que este año nuevo de vida te traiga toda la felicidad, paz y proyectos cumplidos que tanto te mereces.",
      "Nunca dejes de sonreír como lo haces.",
      "Con todo mi cariño,",
      "Andrés"
    ]
  },

  // Escena 09: Mensaje final y despedida afectiva
  finalMessage: {
    badge: "ANTES DE QUE CIERRES ESTO...",
    title: "Un último pensamiento",
    quote: "«Hay personas que hacen el mundo un poquito más cálido simplemente estando en él. Tú eres una de ellas.»",
    closingNote: "Pásala hermoso hoy, disfruta a tu gente, ríete hasta que te duela el estómago... y no te olvides de guardarme un pedacito de pastel.",
    signOff: "Feliz cumpleaños, Kimberly. ✨",
    replayButton: "Volver a ver la historia de la manzana 🍎",
    soundCredits: "Hecho con dedicación y cariño exclusivamente para ti."
  },

  // Secretos interactivos (Easter Eggs)
  easterEggs: [
    {
      id: "egg-star",
      trigger: "star-doodle",
      message: "⭐ Has encontrado una estrella secreta: ¡Kimberly tiene un 100% de probabilidad de tener un año brillante!"
    },
    {
      id: "egg-bracket",
      trigger: "bracket-doodle",
      message: "🦷 Recordatorio médico: Ninguna manzana resultó herida de gravedad... sólo mi orgullo."
    },
    {
      id: "egg-lemon",
      trigger: "lemon-doodle",
      message: "🍋 Nivel de ardor: 9999/10. Pero valió la pena para hacerte sonreír hoy."
    },
    {
      id: "egg-stamp",
      trigger: "postal-stamp",
      message: "💌 Sello oficial de autenticidad: Esta página no fue hecha por una IA aburrida, fue pensada para ti."
    }
  ]
};

export default birthdayConfig;
