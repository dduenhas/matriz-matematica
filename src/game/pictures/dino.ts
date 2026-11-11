import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#b7e3f8",
  a: "#3d9a46",
  b: "#d4f5a0",
  c: "#1f6b32",
  d: "#1a1a1a",
  e: "#f2c14e",
};

export const dinoPictures: Picture[] = [
  definePicture({
    id: "dino-8",
    theme: "dino",
    title: "Dinossauro",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      "...ccc..",
      "..aaaaa.",
      ".caaaada",
      "cbaaaaac",
      ".aaaaaa.",
      "..aa.aa.",
      "..aa.aa.",
      "..ee.ee.",
    ],
  }),
  definePicture({
    id: "dino-12",
    theme: "dino",
    title: "Dinossauro",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      "....ccc.....",
      "...caaaac...",
      "..cbaaaaac..",
      "..cbaaaaad..",
      "ccaabaaaaac.",
      ".aaaaaaaaa..",
      "..aaaaaaaa..",
      "...aa...aa..",
      "...aa...aa..",
      "...ee...ee..",
    ],
  }),
  definePicture({
    id: "dino-16",
    theme: "dino",
    title: "Dinossauro",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      "..........ccc...",
      ".........caaaaac",
      "........caaaaaaa",
      ".......cbaaaaaad",
      "..cccccbaaaaaad.",
      ".caaaaaaaaaaaaac",
      ".caaabaaaaaaaaa.",
      "..aaaaaaaaaaaa..",
      "...aaa...aaa....",
      "...aaa...aaa....",
      "...eee...eee....",
      "................",
    ],
  }),
];
