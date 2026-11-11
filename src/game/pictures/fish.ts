import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#8fd4f2",
  a: "#ff8a2a",
  b: "#ffe08a",
  c: "#e23b4a",
  d: "#1b2a4a",
  e: "#ffffff",
};

export const fishPictures: Picture[] = [
  definePicture({
    id: "fish-8",
    theme: "fish",
    title: "Peixe",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      "...ee...",
      ".cc..cc.",
      "caaaaaac",
      "baaadaab",
      "caaaaaac",
      ".cbaabc.",
      "..c..c..",
      "........",
    ],
  }),
  definePicture({
    id: "fish-12",
    theme: "fish",
    title: "Peixe",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      "....ee......",
      "...cc..cc...",
      "..caaaaaac..",
      ".cbaaaaaaaac",
      ".cbaaaadaaac",
      "..caaaaaaac.",
      "...ccaaaac..",
      "....ccccc...",
      "............",
      ".....ee.....",
    ],
  }),
  definePicture({
    id: "fish-16",
    theme: "fish",
    title: "Peixe",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      "................",
      "......ee........",
      "....cc....cc....",
      "...caaaaaaaaac..",
      "..cbaaaaaaaaaac.",
      "..cbaaaaaadaaaac",
      "..cbaaaaaaaaaac.",
      "...caaaaaaaaaac.",
      "....ccaaaaaacc..",
      "......cccccc....",
      "................",
      "........ee......",
    ],
  }),
];
