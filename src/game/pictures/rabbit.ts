import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#e3f6d4",
  a: "#fbfbf8",
  b: "#f7a8c4",
  c: "#ef7d2a",
  d: "#3a3230",
  e: "#ffd1e3",
};

export const rabbitPictures: Picture[] = [
  definePicture({
    id: "rabbit-8",
    theme: "rabbit",
    title: "Coelho",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      ".aa..aa.",
      ".ab..ba.",
      ".aa..aa.",
      ".aaaaaa.",
      "aaadaada",
      "aa.ee.aa",
      ".ac..ca.",
      ".dd..dd.",
    ],
  }),
  definePicture({
    id: "rabbit-12",
    theme: "rabbit",
    title: "Coelho",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      "..aa....aa..",
      "..ab....ba..",
      "..ab....ba..",
      "..aa....aa..",
      "...aaaaaa...",
      "..aaadaadaa.",
      ".aaaaaaaaaa.",
      "..aaaeeaaa..",
      "...ac..ca...",
      "...dd..dd...",
    ],
  }),
  definePicture({
    id: "rabbit-16",
    theme: "rabbit",
    title: "Coelho",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      "...aa........aa.",
      "...ab........ba.",
      "...ab........ba.",
      "...aa........aa.",
      ".....aaaaaaaa...",
      "....aaadaadaaa..",
      "...aaaaaaaaaaaa.",
      "...aaaaaeeaaaa..",
      "....aaaaaaaaaa..",
      ".....ac....ca...",
      ".....aa....aa...",
      ".....dd....dd...",
    ],
  }),
];
