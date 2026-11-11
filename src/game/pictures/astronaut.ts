import { definePicture } from "./define";
import type { Picture } from "../types";

const colors = {
  ".": "#1b2444",
  a: "#f7f8fb",
  b: "#3ec6ff",
  c: "#e24b4b",
  d: "#141414",
  e: "#f6d365",
};

export const astronautPictures: Picture[] = [
  definePicture({
    id: "astronaut-8",
    theme: "astronaut",
    title: "Astronauta",
    cols: 8,
    rows: 8,
    colors,
    pixels: [
      "..aeaa..",
      ".abbbba.",
      ".abddba.",
      "..aaaa..",
      ".caaaac.",
      ".aaaaaa.",
      "..a..a..",
      "..d..d..",
    ],
  }),
  definePicture({
    id: "astronaut-12",
    theme: "astronaut",
    title: "Astronauta",
    cols: 12,
    rows: 10,
    colors,
    pixels: [
      "............",
      "...aaaaae...",
      "..aabbbbaee.",
      "..aabddba.e.",
      "..aabbbbaee.",
      "...aaaaaa...",
      "..ccaaaaacc.",
      "...aaaaaaa..",
      "....aa..aa..",
      "....dd..dd..",
    ],
  }),
  definePicture({
    id: "astronaut-16",
    theme: "astronaut",
    title: "Astronauta",
    cols: 16,
    rows: 12,
    colors,
    pixels: [
      "................",
      ".....aaaaaaaa...",
      "....abbbbbbba.e.",
      "....abbeebbba.ee",
      "....abbbbbbba.e.",
      ".....aaaaaaaa...",
      "....ccaaaaaacc..",
      "....ccaaaaaacc..",
      ".....aaaaaaaa...",
      ".....aa....aa...",
      ".....aa....aa...",
      ".....dd....dd...",
    ],
  }),
];
