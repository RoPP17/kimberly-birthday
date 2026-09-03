/**
 * MOTOR DE SONIDO PROCEDURAL Y GESTOR DE AUDIO
 * 
 * Funciona de forma autónoma con Web Audio API (cero dependencias externas)
 * y soporta reproducción transparente de archivos MP3 si se agregan en /assets/audio/
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isPlayingBgm = false;
    this.bgmTimer = null;
    this.bgmAudioElement = null;
    this.listeners = new Set();
    this.bgmNoteIndex = 0;
  }

  // Inicializar contexto de audio con la primera interacción del usuario
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn({
      isMuted: this.isMuted,
      isPlayingBgm: this.isPlayingBgm
    }));
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBgm();
      if (this.bgmAudioElement) {
        this.bgmAudioElement.pause();
      }
    } else {
      this.startBgm();
    }
    this.notify();
    return this.isMuted;
  }

  // ==========================================
  // EFECTOS DE SONIDO PROCEDURALES (Web Audio API)
  // ==========================================

  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {
      console.warn("Audio pop error:", e);
    }
  }

  playBite() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Clink metálico de brackets
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch (e) {}
  }

  playSlice() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Ruido blanco filtrado para efecto de corte ("swhoosh")
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3000, now);
      filter.frequency.exponentialRampToValueAtTime(800, now + 0.12);
      filter.Q.value = 3;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.15);
    } catch (e) {}
  }

  playLemonSizzle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Siseo efervescente de ardor
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(4500, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.4);
    } catch (e) {}
  }

  playCartoonScream() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Tono cómico deslizante tipo sirena de pánico
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(950, now + 0.15);
      osc.frequency.linearRampToValueAtTime(300, now + 0.35);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.42);
    } catch (e) {}
  }

  playSparkle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // Do, Mi, Sol, Do, Mi (Arpegio celestial)
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = now + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.12, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.38);
      });
    } catch (e) {}
  }

  playBlowCandle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Soplido suave
      const bufferSize = this.ctx.sampleRate * 0.35;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(200, now + 0.3);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.35);
    } catch (e) {}
  }

  // ==========================================
  // MÚSICA AMBIENTAL PROCEDURAL (Lo-Fi Chords)
  // ==========================================

  startBgm() {
    if (this.isPlayingBgm || this.isMuted) return;
    this.init();
    this.isPlayingBgm = true;

    // Intentar reproducir archivo MP3 local si existe en /assets/audio/
    if (!this.bgmAudioElement) {
      const candidates = [
        './assets/audio/musica.mp3',
        './assets/audio/musica-fondo.mp3',
        './assets/audio/cancion.mp3'
      ];

      const tryPlayCandidate = (index) => {
        if (index >= candidates.length) {
          this.runProceduralBgm();
          return;
        }

        const audio = new Audio(candidates[index]);
        audio.loop = true;
        audio.volume = 0.45;

        audio.play().then(() => {
          this.bgmAudioElement = audio;
          this.notify();
        }).catch(() => {
          tryPlayCandidate(index + 1);
        });
      };

      tryPlayCandidate(0);
    } else {
      this.bgmAudioElement.play().catch(() => this.runProceduralBgm());
    }
    this.notify();
  }

  stopBgm() {
    this.isPlayingBgm = false;
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
    if (this.bgmAudioElement) {
      this.bgmAudioElement.pause();
    }
    this.notify();
  }

  runProceduralBgm() {
    if (!this.ctx || this.bgmTimer) return;

    // Progresión de acordes nostálgicos y cálidos: Cmaj7 - Am7 - Fmaj7 - Gsus4
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C E G B)
      [220.00, 261.63, 329.63, 392.00], // Am7 (A C E G)
      [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F A C E)
      [196.00, 261.63, 293.66, 392.00]  // Gsus4 (G C D G)
    ];

    const playChordStep = () => {
      if (!this.isPlayingBgm || this.isMuted || !this.ctx) return;
      const currentChord = chords[this.bgmNoteIndex % chords.length];
      this.bgmNoteIndex++;

      const now = this.ctx.currentTime;
      currentChord.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(700, now);

        gain.gain.setValueAtTime(0.035, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + 3.5);
      });
    };

    playChordStep();
    this.bgmTimer = setInterval(playChordStep, 3800);
  }
}

export const soundEngine = new SoundEngine();
export default soundEngine;
