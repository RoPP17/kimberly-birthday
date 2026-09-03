# 🎉 Experiencia Web Interactiva de Cumpleaños — Kimberly

Una experiencia digital inmersiva, artesanal y narrativa creada especialmente para **Kimberly**. Diseñada con estética de *scrapbook cálido*, humor absurdo, microinteracciones táctiles, sistema de audio y narrativa por escenas.

---

## 🚀 Inicio Rápido (Local)

1. Abre tu terminal en esta carpeta:
   ```bash
   cd "Proyectos de Programación/kimberly-birthday"
   ```
2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre el enlace en tu navegador o escanea la URL local desde tu teléfono (si están en la misma red Wi-Fi).

---

## 📸 Cómo agregar las Fotografías Reales

Coloca tus fotos dentro de la carpeta:
`public/assets/photos/`

Con los siguientes nombres de archivo:
* `foto01.jpg`
* `foto02.jpg`
* `foto03.jpg`
* `foto04.jpg`
* `foto05.jpg`
* `foto06.jpg`

*(Si deseas agregar más fotos o cambiar las frases, edita la sección `gallery` en `src/config/birthday.js`)*.

---

## ✉️ Cómo agregar la Carta Escrita a Mano

Escanea o toma fotos nítidas de tu carta escrita a mano y colócalas en:
`public/assets/letter/`

Con los siguientes nombres:
* `carta-01.jpg` (Página 1)
* `carta-02.jpg` (Página 2)

El sobre 3D se abrirá automáticamente mostrando tus páginas reales con soporte para zoom y deslizamiento táctil en móviles.

---

## 🎵 Cómo agregar Música o Audios Propios (Opcional)

El proyecto cuenta con un **sintetizador de audio procedural en Web Audio API** que funciona de forma autónoma con cero archivos externos (genera sonidos cómicos de brackets, corte, limón y acordes Lo-Fi).

Si deseas usar una canción real o mensaje de voz:
Coloca tu archivo en:
`public/assets/audio/musica-fondo.mp3`

El reproductor lo detectará y reproducirá automáticamente.

---

## ✍️ Personalizar Textos y Anécdotas

Toda la narrativa se controla desde un único archivo central:
[`src/config/birthday.js`](./src/config/birthday.js)

Ahí puedes modificar:
* Saludos e intriga.
* Diálogos del cómic ("La manzana, los brackets y el limón").
* Mensaje personal y recuerdos.
* Deseos del cupcake sorpresa.
* Mensaje final y secretos ocultos.

---

## 🌐 Publicar en GitHub Pages (Paso a Paso)

El proyecto está 100% configurado con `base: './'` y scripts de despliegue para GitHub Pages.

### Paso 1: Crear el repositorio en GitHub
1. Entra a tu cuenta [github.com/RoPP17](https://github.com/RoPP17) y crea un nuevo repositorio llamado:
   `kimberly-birthday` (público).

### Paso 2: Subir el código desde la terminal
```bash
git init
git add .
git commit -m "feat: Experiencia interactiva de cumpleaños para Kimberly"
git branch -M main
git remote add origin https://github.com/RoPP17/kimberly-birthday.git
git push -u origin main
```

### Paso 3: Desplegar a GitHub Pages
Ejecuta el script automático incluido:
```bash
npm run deploy
```

*(O en los Settings de tu repositorio en GitHub: ve a **Pages** -> Source: **Deploy from a branch** -> Rama: **gh-pages** o activa GitHub Actions)*.

¡Listo! Kimberly podrá abrir el enlace directamente desde su teléfono con una experiencia fluida y hermosa.
