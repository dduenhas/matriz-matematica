import type { Picture } from "../types";

export function definePicture(
  picture: Picture,
): Picture {
  if (picture.pixels.length !== picture.rows) {
    throw new Error(`${picture.id}: ${picture.pixels.length} linhas, esperadas ${picture.rows}`);
  }

  picture.pixels.forEach((row, index) => {
    if (row.length !== picture.cols) {
      throw new Error(`${picture.id}: linha ${index + 1} tem ${row.length} colunas (${row})`);
    }
  });

  const used = new Set(picture.pixels.join(""));
  for (const key of used) {
    if (!picture.colors[key]) {
      throw new Error(`${picture.id}: falta a cor "${key}"`);
    }
  }
  for (const key of Object.keys(picture.colors)) {
    if (!used.has(key)) {
      throw new Error(`${picture.id}: a cor "${key}" não aparece no desenho`);
    }
  }

  const total = Object.keys(picture.colors).length;
  if (total < 4 || total > 6) {
    throw new Error(`${picture.id}: use de 4 a 6 cores, há ${total}`);
  }

  return picture;
}
