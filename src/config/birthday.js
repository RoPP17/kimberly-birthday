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
    greeting: "Hey, Kimberly...",
    pauseText: "Antes de que sigas mirando...",
    hookText: "tengo algo preparado para ti.",
    buttonText: "Comenzar ✨",
    audioNotice: "(Sube el volumen para escucharlo mejor)"
  },

  // Escena 02: Cortometraje animado ("La Manzana, los Brackets y el Limón")
  comic: {
    badge: "HISTORIA REAL",
    beats: [
      {
        id: 1,
        timeMs: 3800,
        text: "Hoy por la mañana estaba pensando en que hoy es tu cumpleaños.",
        speech: "«Hoy cumple Kimberly... hay que hacer algo especial...»",
        doodle: "thinking",
        sound: null
      },
      {
        id: 2,
        timeMs: 3400,
        text: "Pero me dio un hambre tremenda. Y vi una manzana roja en la cocina.",
        speech: "«Una manzanita rápida.»",
        doodle: "apple",
        sound: null
      },
      {
        id: 3,
        timeMs: 3400,
        text: "Fui directo a pegarle un mordisco con toda la emoción...",
        speech: "«A comer... ¡espera!...»",
        doodle: "bite_approach",
        sound: null
      },
      {
        id: 4,
        timeMs: 3800,
        text: "RECORDÉ QUE TENGO BRACKETS. Mordisco cancelado por ley odontológica.",
        speech: "«Si muerdo esto, adiós brackets.»",
        doodle: "brackets_alert",
        sound: "bite"
      },
      {
        id: 5,
        timeMs: 3400,
        text: "Decidí actuar como persona civilizada y buscar un cuchillo para cortarla.",
        speech: "«A cortarla en rodajitas.»",
        doodle: "knife",
        sound: "slice"
      },
      {
        id: 6,
        timeMs: 3400,
        text: "Y por hacerme el chef profesional... ¡ZAS! Me corté un dedo.",
        speech: "«¡AUUUCH! Sangre inocente.»",
        doodle: "cut_finger",
        sound: "slice"
      },
      {
        id: 7,
        timeMs: 4000,
        text: "Fui por algo para limpiarme... y tropecé con medio limón que estaba en la mesa.",
        speech: "«No... por favor, no...»",
        doodle: "lemon_fall",
        sound: null
      },
      {
        id: 8,
        timeMs: 4500,
        text: "EL JUGO DE LIMÓN CAYÓ EXACTAMENTE EN EL CORTE. DOLOR GALÁCTICO.",
        speech: "«¡¿POR QUÉ EL LIMÓN?! ¡¿QUÉ HICE YO?!»",
        doodle: "lemon_scream",
        sound: "scream"
      },
      // Momento de respiración y vendaje (NO una pantalla en blanco)
      {
        id: 9,
        timeMs: 3400,
        text: "...",
        speech: "«Silencio dramático...»",
        doodle: "pause_silence",
        sound: null
      },
      // Remate afectivo directo
      {
        id: 10,
        timeMs: 5000,
        text: "Y no sabes cuánto me arde no poder estar hoy contigo.",
        speech: "",
        doodle: "punchline",
        sound: "sparkle"
      },
      // Suspiro final
      {
        id: 11,
        timeMs: 3200,
        text: "Uf.",
        speech: "",
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

  // Escena 04: Mensaje Personal (Cálido y directo, sin etiquetas académicas)
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

  // Escena 05: Fotografías (Solo la primera lleva texto personalizado; las demás son limpias)
  gallery: {
    photos: [
      {
        id: 1,
        src: "./assets/photos/foto01.jpg",
        caption: "Ese día de risas que no podían parar ✨", // La única con mensaje personalizado
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

  // Escena 06: Recuerdos
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

  // Sección: Pedir un deseo / Regalo
  wish: {
    title: "Bueno... ahora te toca a ti.",
    subtitle: "Si pudieras pedir un regalo, un plan o un deseo cualquiera para este nuevo año... ¿cuál sería?",
    placeholder: "Escribe aquí lo que se te ocurra... un libro, un café, una salida, un deseo secreto...",
    buttonSave: "Guardar deseo ✨",
    savedNotice: "Me tocará ver cómo me las ingenio para cumplirlo...",
    recipientEmail: "pepesanchezrobertoandres@gmail.com"
  },

  // Escena 07: Cupcake interactivo
  surprise: {
    promptQuestion: "Falta una cosa más...",
    buttonText: "¿Qué cosa? 👀",
    revealedTitle: "Pide un deseo",
    instruction: "Toca la velita para apagar la llama ✨",
    wishGrantedTitle: "¡Deseo pedido! 🎂✨",
    wishGrantedText: "Que todo lo bonito que le das al mundo regrese a ti multiplicado por diez."
  },

  // Escena 08: Carta manuscrita (Sin textos explicativos obvios)
  letter: {
    envelopeTitle: "Casi se me olvida la parte más importante...",
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

  // Escena 09: Cierre
  finalMessage: {
    title: "Feliz cumpleaños, Kimberly.",
    quote: "«Hay personas que hacen el mundo un poquito más cálido simplemente estando en él. Tú eres una de ellas.»",
    closingNote: "Disfruta mucho tu día, ríete hasta que te duela el estómago... y guárdame un pedacito de pastel.",
    signOff: "Con cariño. ✨",
    credits: "Hecho especialmente para ti."
  }
};

export default birthdayConfig;
