import { buildProblems } from "./problems";
import type { PaletteEntry, Picture, Problem, Puzzle, Settings } from "./types";

function shuffle<T>(items: T[], rng: () => number): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(rng() * (index + 1));
    const current = copy[index];
    copy[index] = copy[swap];
    copy[swap] = current;
  }
  return copy;
}

function weightedSample(
  results: { result: number; problems: Problem[] }[],
  count: number,
  rng: () => number,
) {
  const pool = results.map((item) => ({
    item,
    weight: item.problems.length,
  }));
  const picked: { result: number; problems: Problem[] }[] = [];

  while (picked.length < count && pool.length > 0) {
    const total = pool.reduce((sum, entry) => sum + entry.weight, 0);
    let ticket = rng() * total;
    let index = pool.length - 1;
    for (let cursor = 0; cursor < pool.length; cursor += 1) {
      ticket -= pool[cursor].weight;
      if (ticket < 0) {
        index = cursor;
        break;
      }
    }
    picked.push(pool[index].item);
    pool.splice(index, 1);
  }

  return picked;
}

function colorKeys(picture: Picture): { key: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const row of picture.pixels) {
    for (const key of row) {
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
}

export function generatePuzzle(
  picture: Picture,
  settings: Settings,
  rng: () => number = Math.random,
): Puzzle {
  const keys = colorKeys(picture);
  const groups = buildProblems(settings);
  let results = [...groups.entries()].map(([result, problems]) => ({
    result,
    problems,
  }));

  const varied = results.filter((entry) => entry.problems.length >= 2);
  if (varied.length >= keys.length) results = varied;
  if (results.length < keys.length) {
    throw new Error("Não há resultados suficientes para este desenho.");
  }

  const chosen = weightedSample(results, keys.length, rng);
  const richest = [...results].sort(
    (a, b) => b.problems.length - a.problems.length || a.result - b.result,
  )[0];
  if (
    richest &&
    richest.problems.length > 1 &&
    !chosen.some((entry) => entry.result === richest.result)
  ) {
    const poorest = chosen.reduce((lowest, entry) =>
      entry.problems.length < lowest.problems.length ? entry : lowest,
    );
    chosen[chosen.indexOf(poorest)] = richest;
  }
  chosen.sort((a, b) => b.problems.length - a.problems.length || a.result - b.result);

  const assignment = new Map<string, { result: number; problems: Problem[] }>();
  keys.forEach((entry, index) => {
    assignment.set(entry.key, {
      result: chosen[index].result,
      problems: shuffle(chosen[index].problems, rng),
    });
  });

  const cursor = new Map<string, number>();
  const cells = picture.pixels.flatMap((row) =>
    [...row].map((key) => {
      const bucket = assignment.get(key);
      if (!bucket) throw new Error(`Cor ausente no desenho: ${key}`);
      const offset = cursor.get(key) ?? 0;
      cursor.set(key, offset + 1);
      return {
        colorKey: key,
        problem: bucket.problems[offset % bucket.problems.length],
      };
    }),
  );

  const palette: PaletteEntry[] = [...assignment.entries()]
    .map(([key, bucket]) => ({
      key,
      color: picture.colors[key],
      result: bucket.result,
    }))
    .sort((a, b) => a.result - b.result || a.key.localeCompare(b.key));

  return { picture, cells, palette };
}
