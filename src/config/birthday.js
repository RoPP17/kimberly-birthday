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
        timeMs: 4000,
        text: "Hace rato estaba pensando que hoy es tu cumpleaños.",
        doodle: "thinking",
        sound: null
      },
      {
        id: 2,
        timeMs: 3600,
        text: "Pero me dio un antojo y me fui a tragar una manzana roja que vi.",
        doodle: "apple",
        sound: null
      },
      {
        id: 3,
        timeMs: 3600,
        text: "Fui directo a tragarla como puerquito.",
        doodle: "bite_approach",
        sound: null
      },
      {
        id: 4,
        timeMs: 4000,
        text: "Pero recordé que tengo brackets y me decepcioné.",
        doodle: "brackets_alert",
        sound: "bite"
      },
      {
        id: 5,
        timeMs: 3600,
        text: "Pero por una vez decidí actuar civilizadamente y fui a buscar un cuchillo.",
        doodle: "knife",
        sound: "slice"
      },
      {
        id: 6,
        timeMs: 3800,
        text: "Y como la vida del salado no tiene fin, me corté.",
        doodle: "cut_finger",
        sound: "slice"
      },
      {
        id: 7,
        timeMs: 4200,
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
    subtitle: "Un año más de vejez para la shurs Kim ✨"
  },

  // Escena: Carta manuscrita en formato imagen
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

  // Escena: Fotografías (Mapeadas con sus extensiones exactas JPG y PNG)
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
        src: "./assets/photos/foto03.png",
        caption: "",
        rotation: -1.5,
        placeholderColor: "#6C5B7B"
      },
      {
        id: 4,
        src: "./assets/photos/foto04.png",
        caption: "",
        rotation: 2,
        placeholderColor: "#355C7D"
      },
      {
        id: 5,
        src: "./assets/photos/foto05.png",
        caption: "",
        rotation: -2,
        placeholderColor: "#E9B872"
      },
      {
        id: 6,
        src: "./assets/photos/foto06.png",
        caption: "",
        rotation: 1.5,
        placeholderColor: "#FF6B6B"
      }
    ]
  },

  // Video After Effects / MATLAB con su nombre
  video: {
    src: "./assets/video/animacion-nombre.mp4",
    fallbackSrc: "./assets/video/animacion-nombre.mp4",
    caption: "Una pequeña animación para ti ✨"
  },

  // Escena: Cosas que no se me olvidan (Textos dictados por Roberto Andrés)
  memories: [
    {
      id: "m1",
      number: "01",
      title: "Las conversaciones tontas",
      text: "Cuando no importa con qué tema se comience, siempre terminamos en plática rara, hablando del futuro y teniendo conversaciones funables.",
      icon: "chat",
      tag: "Cómplices"
    },
    {
      id: "m2",
      number: "02",
      title: "La gran seguridad que me das",
      text: "Esa forma en la que siempre estoy seguro de que existe alguien que realmente me aprecia, alguien para quien mi cumpleaños no es simplemente una fecha sin más y una persona que siempre quisiera tener cerca.",
      icon: "sparkle",
      tag: "Incondicional"
    },
    {
      id: "m3",
      number: "03",
      title: "Tu risa maniática",
      text: "Es cuando digo algo estúpido y muy indebido y decides simplemente reírte, así que realmente considero que sea algo gracioso.",
      icon: "laugh",
      tag: "Risas"
    },
    {
      id: "m4",
      number: "04",
      title: "Lo de verdad muy importante que eres para mí",
      text: "Muchas veces actúo incluso a propósito como que no me importaras, como si fueras alguien sin más, una amiga; pero realmente eres un elemento importante en mi vida. Aunque no hablemos mucho y a veces no tengamos las mejores pláticas, sencillamente la seguridad que me da tenerte hace que seas muy importante en mi vida.",
      icon: "star",
      tag: "De verdad"
    }
  ],

  // Sección: Pedir un deseo (Textos dictados por Roberto Andrés)
  wish: {
    title: "Obligatorio rellenar este mensaje",
    subtitle: "Si pudieras pedir un deseo, cualquier cosa... ¿qué es lo que pedirías? Cero pena, cuenta lo que sea (obviamente no pidas algo imposible).",
    placeholder: "Escribe aquí lo que se te antoje pedir...",
    buttonSave: "Guardar deseo ✨",
    savedNotice: "Me tocará ver cómo me las ingenio para cumplirlo...",
    recipientEmail: "andrespepe014@gmail.com"
  },

  // Escena: Mensaje Personal Sincero (5x Feliz Cumpleaños + Texto íntimo)
  personalMessage: {
    headlineRepetitions: [
      "¡Feliz cumpleaños!",
      "¡Feliz cumpleaños!",
      "¡Feliz cumpleaños!",
      "¡Feliz cumpleaños!",
      "¡Feliz cumpleaños!"
    ],
    paragraphs: [
      "Kimberly, no quiero enrollarme con palabras complicadas o formas rebuscadas de intentar expresarme; simplemente quiero que leas esto y de corazón sepas que te quiero mucho.",
      "Y que para ti mi cumpleaños es una fecha muy importante, y hoy claramente es tu cumpleaños; sin embargo, eso no quita que para mí también sea una fecha sumamente importante de una persona muy importante para mí.",
      "De verdad creo que coincidir contigo fue top de las mejores cosas que me han pasado.",
      "Aún recuerdo la vez que no sabías sobre qué era el proyecto Steam del colegio y te pregunté, me respondiste, me mandaste un sticker tonto y comenzamos ahí a hablar por WhatsApp, hasta que a la final hablar contigo por WhatsApp a diario era un elemento fundamental de mi vida.",
      "Nunca olvidaré que una de las experiencias más bonitas que yo he tenido en mi vida ha sido estar operado y pasar el día jugando The Binding of Isaac, leyendo Juego de Tronos y hablando contigo todo el día, todos los días.",
      "Ojalá cumplas 120 años, Kimberly. Muchísimas gracias."
    ],
    signOff: "Con todo mi cariño, Roberto Andrés ✨"
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

  // Escena: Cierre (Texto dictado por Roberto Andrés)
  finalMessage: {
    title: "Feliz cumpleaños, Kimberly.",
    quote: "«Hay personas que hacen el mundo un poquito más soportable con el simple hecho de existir. Obvio, tú eres una de esas personas.»",
    closingNote: "Disfruta mucho tu día, ríete hasta que te duela el estómago... y guárdame un pedacito de pastel.",
    signOff: "Con cariño. ✨",
    credits: "Hecho especialmente para ti."
  }
};

export default birthdayConfig;
