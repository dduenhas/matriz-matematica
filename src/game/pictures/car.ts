import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#d7ecff",
  a: "#2f6fe0",
  b: "#b9e7ff",
  c: "#8eb6ff",
  d: "#222222",
  e: "#ffe56a",
};

export const carPictures: Picture[] = [
  definePicture({
    id: "car-8",
    theme: "car",
    title: "Carro",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      "........",
      "..cccc..",
      ".abbbba.",
      "aabbbbaa",
      "aaaaaaae",
      ".dd..dd.",
      ".dd..dd.",
      "........",
    ],
  }),
  definePicture({
    id: "car-12",
    theme: "car",
    title: "Carro",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      "............",
      "....cccccc..",
      "..aabbbbbaa.",
      ".aabbbbbbbaa",
      "aabbbbbbbbba",
      "aaaaaaaaaaae",
      "aaaaaaaaaaae",
      "..ddd..ddd..",
      "..ddd..ddd..",
      "............",
    ],
  }),
  definePicture({
    id: "car-16",
    theme: "car",
    title: "Carro",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      "................",
      ".....ccccccccc..",
      "...aaabbbbbbbaa.",
      "..aabbbbbbbbbbaa",
      ".aabbbbbbbbbbbaa",
      "aaaaaaaaaaaaaaae",
      "aaaaaaaaaaaaaaae",
      "...ddd....ddd...",
      "...ddd....ddd...",
      "...ddd....ddd...",
      "................",
      "................",
    ],
  }),
];
