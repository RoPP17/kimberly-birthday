/**
 * CONFIGURACIÓN CENTRAL — EXPERIENCIA DE CUMPLEAÑOS DE KIMBERLY
 * 
 * Contenido narrativo, escenas, recuerdos, cartas y textos de autor.
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
    buttonText: "Comenzar historia ✨",
    audioNotice: "(Sube un poquito el volumen para escucharlo mejor)"
  },

  // Escena 02: Cortometraje animado ("La Manzana, los Brackets y el Limón")
  comic: {
    badge: "CORTOMETRAJE CÓMICO • BASADO EN HECHOS REALES",
    beats: [
      {
        id: 1,
        timeMs: 4000,
        text: "Todo comenzó hoy por la mañana... Estaba pensando en que hoy es tu cumpleaños.",
        speech: "«Hoy cumple Kimberly... hay que hacer algo especial...»",
        doodle: "thinking",
        sound: null
      },
      {
        id: 2,
        timeMs: 3600,
        text: "Pero de repente... me dio un hambre tremenda. Y en la cocina vi una manzana roja perfecta.",
        speech: "«Una manzana rápida para no desmayarme.»",
        doodle: "apple",
        sound: null
      },
      {
        id: 3,
        timeMs: 3600,
        text: "Fui con toda la intención de pegarle un mordisco crujiente...",
        speech: "«¡A comer se ha dicho!... Espera...»",
        doodle: "bite_approach",
        sound: null
      },
      {
        id: 4,
        timeMs: 4200,
        text: "RECORDÉ QUE TENGO BRACKETS. Prohibido morder manzanas enteras desde el día 1.",
        speech: "«Si muerdo esto, desintegro tres brackets de un viaje.»",
        doodle: "brackets_alert",
        sound: "bite"
      },
      {
        id: 5,
        timeMs: 3800,
        text: "Así que decidí actuar civilizadamente: buscar un cuchillo para cortarla en rodajas finas.",
        speech: "«Ingeniería aplicada a la fruta.»",
        doodle: "knife",
        sound: "slice"
      },
      {
        id: 6,
        timeMs: 3800,
        text: "Y por hacerme el chef profesional cortando rápido... ¡ZAS! Me corté un dedo.",
        speech: "«¡AUUUCH! Dedo herido en combate.»",
        doodle: "cut_finger",
        sound: "slice"
      },
      {
        id: 7,
        timeMs: 4400,
        text: "Fui a buscar con qué limpiarme... y tropecé con medio limón que estaba en la mesa.",
        speech: "«No... por favor, universo, no...»",
        doodle: "lemon_fall",
        sound: null
      },
      {
        id: 8,
        timeMs: 5000,
        text: "EL JUGO DE LIMÓN CAYÓ EXACTAMENTE EN EL CORTE. DOLOR GALÁCTICO.",
        speech: "«¡¿POR QUÉ CON LIMÓN?! ¡¿QUÉ HICE YO?!»",
        doodle: "lemon_scream",
        sound: "scream"
      },
      // CORTE DRAMÁTICO / SILENCIO
      {
        id: 9,
        timeMs: 3200,
        text: "...",
        speech: "",
        doodle: "blackout",
        sound: null
      },
      // REMATE AFECTIVO INESPERADO
      {
        id: 10,
        timeMs: 5500,
        text: "Y no sabes cuánto me arde no poder estar hoy contigo.",
        speech: "«De verdad.»",
        doodle: "punchline",
        sound: "sparkle"
      },
      // SUSPIRO FINAL
      {
        id: 11,
        timeMs: 4000,
        text: "Uf.",
        speech: "«En fin... Ahora sí.»",
        doodle: "sigh",
        sound: null
      }
    ],
    continueButton: "Ahora sí... Continuemos ✨"
  },

  // Escena 03: Gran Revelación
  reveal: {
    superTitle: "¡HOY SE CELEBRA A LO GRANDE!",
    mainTitle: "¡FELIZ CUMPLEAÑOS!",
    nameHighlight: "KIMBERLY",
    subtitle: "Una vuelta más al sol para una de las personas más increíbles, auténticas y divertidas que conozco."
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
    subtitle: "Pequeños instantes capturados en el tiempo (toca cualquier foto para verla en pantalla completa)",
    photos: [
      {
        id: 1,
        src: "./assets/photos/foto01.jpg",
        caption: "Ese día de risas que no podían parar ✨",
        date: "Momento favorito",
        tag: "Inolvidable",
        rotation: -2,
        placeholderColor: "#F8B195"
      },
      {
        id: 2,
        src: "./assets/photos/foto02.jpg",
        caption: "Una de esas miradas de «¿qué estás inventando ahora?»",
        date: "Anécdota clásica",
        tag: "Cómplices",
        rotation: 2.5,
        placeholderColor: "#C06C84"
      },
      {
        id: 3,
        src: "./assets/photos/foto03.jpg",
        caption: "Café, charlas eternas y arreglar el mundo en una tarde",
        date: "Buenas pláticas",
        tag: "Café & Risas",
        rotation: -1.5,
        placeholderColor: "#6C5B7B"
      },
      {
        id: 4,
        src: "./assets/photos/foto04.jpg",
        caption: "Simplemente tú siendo tú (y brillando sin esfuerzo)",
        date: "Especial",
        tag: "Auténtica",
        rotation: 2,
        placeholderColor: "#355C7D"
      },
      {
        id: 5,
        src: "./assets/photos/foto05.jpg",
        caption: "Cuando el plan era tranquilo pero terminó siendo una aventura",
        date: "Aventura improvisada",
        tag: "Momentos top",
        rotation: -2.5,
        placeholderColor: "#E9B872"
      },
      {
        id: 6,
        src: "./assets/photos/foto06.jpg",
        caption: "La mejor sonrisa de todas. Guardada para siempre aquí.",
        date: "Hoy y siempre",
        tag: "La mejor",
        rotation: 1.5,
        placeholderColor: "#FF6B6B"
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
      title: "La admiración sincera",
      text: "Ver cómo le pones ganas a lo que haces, cómo cuidas a los tuyos y la nobleza tan grande que llevas dentro.",
      icon: "star",
      tag: "De verdad"
    }
  ],

  // NUEVA SECCIÓN 15: Pedir un deseo / Regalo
  wish: {
    badge: "UN DETALLE PARA TI",
    title: "Bueno... ahora te toca a ti.",
    subtitle: "Si pudieras pedir un regalo, un plan o un deseo cualquiera para este nuevo año de vida... ¿cuál sería? (Cero pena, no hay respuestas incorrectas).",
    placeholder: "Escribe aquí lo que se te ocurra... un libro, una salida por café, un postre, un deseo secreto...",
    buttonSave: "Guardar mi deseo en la carta ✨",
    savedTitle: "¡Deseo guardado con éxito! 🌟",
    savedMessage: "Tu deseo ha quedado registrado en este rincón especial. Me tocará ver cómo me las ingenio para cumplirlo...",
    shareWhatsappText: "Compartírselo a Andrés por WhatsApp 💬"
  },

  // Escena 07: Cupcake interactivo con vela
  surprise: {
    promptQuestion: "Creo que todavía falta algo importante aquí...",
    buttonText: "¿Qué cosa? 👀",
    revealedTitle: "¡Pide un deseo!",
    instruction: "Toca la velita para apagar la llama y que se cumpla tu deseo ✨",
    wishGrantedTitle: "¡Deseo enviado al universo! 🎂✨",
    wishGrantedText: "Que todo lo bonito que le das al mundo regrese a ti multiplicado por diez. (Y sí, tienes derecho a pedir doble porción de pastel hoy)."
  },

  // Escena 08: Carta manuscrita en sobre físico (100% fotográfica)
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
        note: "Página 1 de 2 — Escrita a mano con calma pensando en ti"
      },
      {
        id: 2,
        image: "./assets/letter/carta-02.jpg",
        altText: "Página 2 de la carta para Kimberly",
        note: "Página 2 de 2 — Con todo el cariño del mundo"
      }
    ]
  },

  // Escena 09: Mensaje final y despedida afectiva
  finalMessage: {
    badge: "ANTES DE QUE CIERRES ESTO...",
    title: "Un último pensamiento",
    quote: "«Hay personas que hacen el mundo un poquito más cálido simplemente estando en él. Tú eres una de ellas.»",
    closingNote: "Pásala hermoso hoy, disfruta a tu gente, ríete hasta que te duela el estómago... y no te olvides de guardarme un pedacito de pastel.",
    signOff: "Feliz cumpleaños, Kimberly. ✨",
    replayButton: "Volver a ver el cortometraje 🍎",
    soundCredits: "Hecho con dedicación y cariño exclusivamente para ti."
  },

  // Secretos interactivos (Easter Eggs)
  easterEggs: [
    {
      id: "egg-star",
      trigger: "star-doodle",
      message: "⭐ ¡Has descubierto una estrella secreta! Kimberly tiene un 100% de probabilidad de tener un año increíble."
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
      message: "💌 Sello oficial de autenticidad: Esta experiencia fue pensada y programada con muchísimo cariño para ti."
    }
  ]
};

export default birthdayConfig;
