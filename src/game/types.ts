export type Operation = "sum" | "mul";

export type Settings = {
  operation: Operation;
  sumLimit: 10 | 20;
  tables: number[];
  pictureId: string;
};

export type Problem = {
  a: number;
  b: number;
  op: "+" | "×";
  result: number;
  label: string;
};

export type Picture = {
  id: string;
  theme: string;
  title: string;
  cols: number;
  rows: number;
  colors: Record<string, string>;
  pixels: string[];
};

export type Cell = {
  problem: Problem;
  colorKey: string;
};

export type PaletteEntry = {
  key: string;
  color: string;
  result: number;
};

export type Puzzle = {
  picture: Picture;
  cells: Cell[];
  palette: PaletteEntry[];
};

export type Mark = "empty" | "wrong";
