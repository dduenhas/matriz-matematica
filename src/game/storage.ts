import type { Settings } from "./types";
import { pictureById } from "./pictures";

const KEY = "matriz-matematica-settings";

export const defaultSettings: Settings = {
  operation: "sum",
  sumLimit: 10,
  tables: [2, 3, 4, 5],
  pictureId: "dino-8",
};

function isSumLimit(value: unknown): value is 10 | 20 {
  return value === 10 || value === 20;
}

export function sanitizeSettings(value: unknown): Settings {
  const source = value && typeof value === "object" ? (value as Partial<Settings>) : {};
  const tables = Array.isArray(source.tables)
    ? [...new Set(source.tables.filter((table) => Number.isInteger(table) && table >= 1 && table <= 10))].sort(
        (a, b) => a - b,
      )
    : [];

  const pictureId =
    typeof source.pictureId === "string" && pictureById(source.pictureId)
      ? source.pictureId
      : defaultSettings.pictureId;

  return {
    operation: source.operation === "mul" ? "mul" : "sum",
    sumLimit: isSumLimit(source.sumLimit) ? source.sumLimit : 10,
    tables: tables.length > 0 ? tables : [...defaultSettings.tables],
    pictureId,
  };
}

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...defaultSettings, tables: [...defaultSettings.tables] };
    return sanitizeSettings(JSON.parse(raw));
  } catch {
    return { ...defaultSettings, tables: [...defaultSettings.tables] };
  }
}

export function saveSettings(settings: Settings) {
  localStorage.setItem(KEY, JSON.stringify(settings));
}
