/**
 * CONFIGURACIÓN CENTRAL — EXPERIENCIA DE CUMPLEAÑOS DE KIMBERLY
 */

export const birthdayConfig = {
  // Información personal
  name: "Kimberly",
  shortName: "Kim",
  celebrationYear: "2026",
  
  // Escena 01: Intriga inicial
  intro: {
    greeting: "Hola Kimberly",
    pauseText: "Hice un pequeño detalle para ti",
    hookText: "Te quiero decir algunas cosas",
    buttonText: "Comenzar ✨"
  },

  // Escena 02: Cortometraje animado ("La Manzana, los Brackets y el Limón")
  comic: {
    badge: "HISTORIA REAL",
    beats: [
      {
        id: 1,
        timeMs: 3800,
        text: "Hace rato estaba pensando que hoy es tu cumpleaños.",
        doodle: "thinking",
        sound: null
      },
      {
        id: 2,
        timeMs: 3400,
        text: "Pero me dio un antojo y me fui a tragar una manzana roja que vi.",
        doodle: "apple",
        sound: null
      },
      {
        id: 3,
        timeMs: 3400,
        text: "Fui directo a tragarla como puerquito.",
        doodle: "bite_approach",
        sound: null
      },
      {
        id: 4,
        timeMs: 3800,
        text: "Pero recordé que tengo brackets y me decepcioné.",
        doodle: "brackets_alert",
        sound: "bite"
      },
      {
        id: 5,
        timeMs: 3400,
        text: "Pero por una vez decidí actuar civilizadamente y fui a buscar un cuchillo.",
        doodle: "knife",
        sound: "slice"
      },
      {
        id: 6,
        timeMs: 3400,
        text: "Y como la vida de ensalada no tiene fin, me corté.",
        doodle: "cut_finger",
        sound: "slice"
      },
      {
        id: 7,
        timeMs: 4000,
        text: "Fui por algo para limpiarme... y tropecé con medio limón que estaba en la mesa.",
        doodle: "lemon_fall",
        sound: null
      },
      {
        id: 8,
        timeMs: 4500,
        text: "Y como claramente tenía que pasar, se me cayó el jugo de limón.",
        doodle: "lemon_scream",
        sound: "scream"
      },
      // Remate emocional
      {
        id: 9,
        timeMs: 5000,
        text: "Y no sabes cuánto me arde no poder estar hoy contigo.",
        doodle: "punchline",
        sound: "sparkle"
      },
      // Suspiro final
      {
        id: 10,
        timeMs: 3200,
        text: "Uf.",
        doodle: "sigh",
        sound: null
      }
    ],
    continueButton: "Ahora sí... Continuemos ✨"
  },

  // Escena 03: Gran Revelación
  reveal: {
    superTitle: "¡HOY ES TU DÍA!",
    mainTitle: "¡FELIZ CUMPLEAÑOS!",
    nameHighlight: "KIMBERLY",
    subtitle: "Una vuelta más al sol para una de las personas más geniales que conozco."
  },

  // Escena: Carta manuscrita
  letter: {
    sealInitial: "K",
    buttonOpen: "Abrir carta ✉️",
    pages: [
      {
        id: 1,
        image: "./assets/letter/carta-01.jpg",
        altText: "Página 1 de la carta para Kimberly"
      },
      {
        id: 2,
        image: "./assets/letter/carta-02.jpg",
        altText: "Página 2 de la carta para Kimberly"
      }
    ]
  },

  // Escena: Fotografías
  gallery: {
    photos: [
      {
        id: 1,
        src: "./assets/photos/foto01.jpg",
        caption: "Ese día de risas que no podían parar ✨",
        rotation: -2,
        placeholderColor: "#F8B195"
      },
      {
        id: 2,
        src: "./assets/photos/foto02.jpg",
        caption: "",
        rotation: 2,
        placeholderColor: "#C06C84"
      },
      {
        id: 3,
        src: "./assets/photos/foto03.jpg",
        caption: "",
        rotation: -1.5,
        placeholderColor: "#6C5B7B"
      },
      {
        id: 4,
        src: "./assets/photos/foto04.jpg",
        caption: "",
        rotation: 2,
        placeholderColor: "#355C7D"
      },
      {
        id: 5,
        src: "./assets/photos/foto05.jpg",
        caption: "",
        rotation: -2,
        placeholderColor: "#E9B872"
      },
      {
        id: 6,
        src: "./assets/photos/foto06.jpg",
        caption: "",
        rotation: 1.5,
        placeholderColor: "#FF6B6B"
      }
    ]
  },

  // Video After Effects con su nombre
  video: {
    src: "./assets/video/animacion-nombre.mp4",
    fallbackSrc: "./assets/video/video.mp4",
    caption: "Una pequeña animación para ti ✨"
  },

  // Escena: Recuerdos
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

  // Sección: Pedir un deseo / Regalo (Redacción más amigable y natural)
  wish: {
    title: "Oye... casi se me pasa preguntarte algo:",
    subtitle: "Si pudieras pedir cualquier cosa para consentirte o festejar este año... ¿qué se te antoja? (Cero pena, lo que sea cuenta).",
    placeholder: "Escribe aquí lo que se te antoje... una salida por café, un libro, un postre, un plan...",
    buttonSave: "Guardar deseo ✨",
    savedNotice: "Me tocará ver cómo me las ingenio para cumplirlo...",
    recipientEmail: "andrespepe014@gmail.com"
  },

  // Escena: Mensaje Personal
  personalMessage: {
    title: "Para ti, siempre.",
    paragraphs: [
      "Quería tomarme un momento para hacerte algo que no fuera el típico mensaje de texto de dos líneas que todo el mundo copia y pega en un cumpleaños.",
      "La verdad es que admiro un montón tu energía, tu forma de ver las cosas y esa capacidad que tienes para hacer que cualquier momento normal termine siendo una anécdota divertida.",
      "Tienes una personalidad demasiado especial, Kimberly. De esas que dejan marca en la gente con solo estar ahí, siendo tú misma, con tus ocurrencias y tu risa.",
      "Eres una persona sumamente importante para mí. Me alegra muchísimo coincidir contigo en esta vida y tener la suerte de compartir tantas conversaciones y risas.",
      "Así que hoy se celebra todo eso... y más."
    ]
  },

  // Escena: Cupcake interactivo
  surprise: {
    promptQuestion: "Falta una cosa más...",
    buttonText: "¿Qué cosa? 👀",
    revealedTitle: "Pide un deseo",
    instruction: "Toca la velita para apagar la llama ✨",
    wishGrantedTitle: "¡Deseo pedido! 🎂✨",
    wishGrantedText: "Que todo lo bonito que le das al mundo regrese a ti multiplicado por diez."
  },

  // Escena: Cierre
  finalMessage: {
    title: "Feliz cumpleaños, Kimberly.",
    quote: "«Hay personas que hacen el mundo un poquito más cálido simplemente estando en él. Tú eres una de ellas.»",
    closingNote: "Disfruta mucho tu día, ríete hasta que te duela el estómago... y guárdame un pedacito de pastel.",
    signOff: "Con cariño. ✨",
    credits: "Hecho especialmente para ti."
  }
};

export default birthdayConfig;
