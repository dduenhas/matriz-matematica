let context: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined" || !("AudioContext" in window)) return null;
  context ??= new AudioContext();
  if (context.state === "suspended") void context.resume();
  return context;
}

function tone(ctx: AudioContext, frequency: number, start: number, length: number, volume: number, type: OscillatorType) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
  osc.connect(gain).connect(ctx.destination);
  osc.start(start);
  osc.stop(start + length + 0.05);
}

export function playMagicCall() {
  const ctx = audio();
  if (!ctx) return;
  const now = ctx.currentTime + 0.05;
  [1318.5, 1568, 1975.5, 2637].forEach((frequency, index) => {
    tone(ctx, frequency, now + index * 0.09, 0.5, 0.08, "sine");
  });
}

export function playReveal() {
  const ctx = audio();
  if (!ctx) return;
  const now = ctx.currentTime + 0.03;

  const noise = ctx.createBuffer(1, ctx.sampleRate * 0.7, ctx.sampleRate);
  const data = noise.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  const source = ctx.createBufferSource();
  source.buffer = noise;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.Q.value = 1.2;
  filter.frequency.setValueAtTime(400, now);
  filter.frequency.exponentialRampToValueAtTime(5200, now + 0.6);
  const swoosh = ctx.createGain();
  swoosh.gain.setValueAtTime(0.0001, now);
  swoosh.gain.exponentialRampToValueAtTime(0.18, now + 0.25);
  swoosh.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
  source.connect(filter).connect(swoosh).connect(ctx.destination);
  source.start(now);

  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    tone(ctx, frequency, now + 0.45 + index * 0.07, 1.4, 0.09, "triangle");
  });
  [2093, 2637, 3136, 2637, 3520].forEach((frequency, index) => {
    tone(ctx, frequency, now + 0.75 + index * 0.08, 0.35, 0.035, "sine");
  });
}
