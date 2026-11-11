import type { Picture } from "../types";
import { astronautPictures } from "./astronaut";
import { carPictures } from "./car";
import { catPictures } from "./cat";
import { dinoPictures } from "./dino";
import { fishPictures } from "./fish";
import { rabbitPictures } from "./rabbit";
import { truckPictures } from "./truck";
import { unicornPictures } from "./unicorn";

export const themes = [
  { id: "dino", title: "Dinossauro" },
  { id: "astronaut", title: "Astronauta" },
  { id: "truck", title: "Caminhão" },
  { id: "car", title: "Carro" },
  { id: "unicorn", title: "Unicórnio" },
  { id: "cat", title: "Gato" },
  { id: "fish", title: "Peixe" },
  { id: "rabbit", title: "Coelho" },
] as const;

export const pictures: Picture[] = [
  ...dinoPictures,
  ...astronautPictures,
  ...carPictures,
  ...truckPictures,
  ...unicornPictures,
  ...catPictures,
  ...fishPictures,
  ...rabbitPictures,
];

const byId = new Map(pictures.map((picture) => [picture.id, picture]));

export function pictureById(id: string): Picture | undefined {
  return byId.get(id);
}

export function picturesForTheme(theme: string): Picture[] {
  return pictures.filter((picture) => picture.theme === theme);
}

export function phaseOf(id: string): { index: number; total: number } {
  const picture = pictureById(id);
  const index = picture ? themes.findIndex((theme) => theme.id === picture.theme) : 0;
  return { index: Math.max(0, index), total: themes.length };
}

export function nextPictureId(id: string): string | null {
  const picture = pictureById(id);
  if (!picture) return null;
  const index = themes.findIndex((theme) => theme.id === picture.theme);
  const next = themes[index + 1];
  if (!next) return null;
  const size = picture.id.slice(picture.theme.length + 1);
  const candidate = `${next.id}-${size}`;
  return pictureById(candidate)?.id ?? null;
}

export function firstPictureId(id: string): string {
  const picture = pictureById(id);
  const size = picture ? picture.id.slice(picture.theme.length + 1) : "8";
  const candidate = `${themes[0].id}-${size}`;
  return pictureById(candidate)?.id ?? themes[0].id + "-8";
}
