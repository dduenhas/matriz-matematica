import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#fff1df",
  a: "#f08a24",
  b: "#ffd0a8",
  c: "#c65312",
  d: "#241c16",
  e: "#ff8fab",
};

export const catPictures: Picture[] = [
  definePicture({
    id: "cat-8",
    theme: "cat",
    title: "Gato",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      "aa....aa",
      "baa..aab",
      "aadaadaa",
      "acaaaaca",
      "aa.ee.aa",
      ".aaaaaa.",
      "..a..a..",
      "........",
    ],
  }),
  definePicture({
    id: "cat-12",
    theme: "cat",
    title: "Gato",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      ".aa......aa.",
      ".aaa....aaa.",
      "baaaa..aaaab",
      "..aaadaadaa.",
      ".aaaaaaaaaa.",
      "..aaaceecaa.",
      "...aaaaaaa..",
      "....aaaaaa..",
      "....a....a..",
      "....d....d..",
    ],
  }),
  definePicture({
    id: "cat-16",
    theme: "cat",
    title: "Gato",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      ".aaa........aaa.",
      ".baaa......aaab.",
      "..aaaa....aaaa..",
      "..aaadaaaadaaa..",
      "..aaaaaaaaaaaa..",
      "...aaacceecaaa..",
      "....aaaaaaaaa...",
      ".....aaaaaaa....",
      "......aaaaaa....",
      "......a....a....",
      "......d....d....",
      "................",
    ],
  }),
];
