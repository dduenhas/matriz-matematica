import type { Problem, Settings } from "./types";

export function buildProblems(settings: Settings): Map<number, Problem[]> {
  const groups = new Map<number, Problem[]>();

  const add = (problem: Problem) => {
    const list = groups.get(problem.result);
    if (list) list.push(problem);
    else groups.set(problem.result, [problem]);
  };

  if (settings.operation === "sum") {
    const limit = settings.sumLimit;
    for (let a = 0; a <= limit; a += 1) {
      for (let b = 0; b <= limit; b += 1) {
        if (a + b <= limit) {
          add({
            a,
            b,
            op: "+",
            result: a + b,
            label: `${a}+${b}`,
          });
        }
      }
    }
    return groups;
  }

  const tables = [...new Set(settings.tables)]
    .filter((table) => table >= 1 && table <= 10)
    .sort((a, b) => a - b);

  for (const table of tables) {
    for (let factor = 1; factor <= 10; factor += 1) {
      add({
        a: table,
        b: factor,
        op: "×",
        result: table * factor,
        label: `${table}×${factor}`,
      });
    }
  }

  return groups;
}
