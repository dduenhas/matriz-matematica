import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#f4e7ff",
  a: "#fffdf8",
  b: "#f48cb8",
  c: "#f2c14e",
  d: "#3a3158",
  e: "#c9b0f0",
};

export const unicornPictures: Picture[] = [
  definePicture({
    id: "unicorn-8",
    theme: "unicorn",
    title: "Unicórnio",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      "....c...",
      "...a.bb.",
      "..aaabbb",
      ".aaaaad.",
      "baaaaaae",
      ".aaaaaa.",
      ".aa..aa.",
      ".dd..dd.",
    ],
  }),
  definePicture({
    id: "unicorn-12",
    theme: "unicorn",
    title: "Unicórnio",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      "......c.....",
      ".....ccbbb..",
      "....aaaabbb.",
      "...aaaaaabbb",
      "...aaaaaad.b",
      "..aaaaaaaaa.",
      "..baaaaaaaa.",
      "...aa....aa.",
      "...aa....aa.",
      "...ee....ee.",
    ],
  }),
  definePicture({
    id: "unicorn-16",
    theme: "unicorn",
    title: "Unicórnio",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      "........c.......",
      ".......cc.bbb...",
      "......aaaaabbb..",
      ".....aaaaaaabbb.",
      "....aaaaaaaadbb.",
      "...baaaaaaaaaab.",
      "...aaaaaaaaaaa..",
      "....aaaaaaaaaa..",
      ".....aa....aa...",
      ".....aa....aa...",
      ".....ee....ee...",
      "................",
    ],
  }),
];
