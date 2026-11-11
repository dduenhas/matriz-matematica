export type A11yPrefs = {
  largeText: boolean;
  contrast: boolean;
  reduceMotion: boolean;
};

const KEY = "matriz-matematica-a11y";

export const defaultA11y: A11yPrefs = {
  largeText: false,
  contrast: false,
  reduceMotion: false,
};

export function loadA11y(): A11yPrefs {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultA11y;
    const parsed = JSON.parse(raw) as Partial<A11yPrefs>;
    return {
      largeText: parsed.largeText === true,
      contrast: parsed.contrast === true,
      reduceMotion: parsed.reduceMotion === true,
    };
  } catch {
    return defaultA11y;
  }
}

export function saveA11y(prefs: A11yPrefs) {
  localStorage.setItem(KEY, JSON.stringify(prefs));
}

export function applyA11y(prefs: A11yPrefs) {
  const root = document.documentElement;
  root.dataset.text = prefs.largeText ? "large" : "regular";
  root.dataset.contrast = prefs.contrast ? "high" : "regular";
  root.dataset.motion = prefs.reduceMotion ? "reduce" : "full";
}
