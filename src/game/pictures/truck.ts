import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#d7ecff",
  a: "#d23b3b",
  b: "#e0a15a",
  c: "#8fd4ff",
  d: "#222222",
  e: "#ffe56a",
};

export const truckPictures: Picture[] = [
  definePicture({
    id: "truck-8",
    theme: "truck",
    title: "Caminhão",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      ".bbbbbb.",
      ".bbbbbb.",
      "aabbbbb.",
      "acbbbbbe",
      "aabbbbb.",
      ".dd..dd.",
      ".dd..dd.",
      "........",
    ],
  }),
  definePicture({
    id: "truck-12",
    theme: "truck",
    title: "Caminhão",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      "............",
      ".bbbbbbbbb..",
      ".bbbbbbbbb..",
      "aabbbbbbbb..",
      "acbbbbbbbb..",
      "aabbbbbbbbe.",
      "aa.......ee.",
      ".dd.....dd..",
      ".dd.....dd..",
      "............",
    ],
  }),
  definePicture({
    id: "truck-16",
    theme: "truck",
    title: "Caminhão",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      ".bbbbbbbbbbbbb..",
      ".bbbbbbbbbbbbb..",
      ".bbbbbbbbbbbbb..",
      ".bbbbbbbbbbbbb..",
      "aaaabbbbbbbbbbb.",
      "acccabbbbbbbbbb.",
      "acccabbbbbbbbbbe",
      "aaaaa.........e.",
      "..ddd.......ddd.",
      "..ddd.......ddd.",
      "..d.d.......d.d.",
      "................",
    ],
  }),
];
