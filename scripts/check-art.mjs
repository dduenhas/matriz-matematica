import fs from "fs";
import path from "path";

const dir = "src/game/pictures";
let failed = 0;

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".ts") || file === "index.ts" || file === "define.ts") continue;
  const text = fs.readFileSync(path.join(dir, file), "utf8");
  const colorBlock = text.match(/const colors = \{([\s\S]*?)\}/)?.[1] ?? "";
  const colorKeys = [...colorBlock.matchAll(/^\s*"?([.a-e])"?\s*:/gm)].map((match) => match[1]);
  const chunks = text.split("definePicture(").slice(1);

  for (const chunk of chunks) {
    const id = chunk.match(/id: "([^"]+)"/)?.[1];
    const cols = Number(chunk.match(/cols: (\d+)/)?.[1]);
    const rows = Number(chunk.match(/rows: (\d+)/)?.[1]);
    const block = chunk.match(/pixels: \[([\s\S]*?)\]/)?.[1] ?? "";
    const pixels = [...block.matchAll(/"([^"]*)"/g)].map((match) => match[1]);
    const problems = [];
    if (pixels.length !== rows) problems.push(`rows ${pixels.length} != ${rows}`);
    pixels.forEach((row, index) => {
      if (row.length !== cols) problems.push(`line ${index + 1} len ${row.length} [${row}]`);
    });
    const used = new Set(pixels.join(""));
    for (const key of used) {
      if (!colorKeys.includes(key)) problems.push(`missing color ${key}`);
    }
    for (const key of colorKeys) {
      if (!used.has(key)) problems.push(`unused color ${key}`);
    }
    const glyph = { ".": "·", a: "█", b: "▓", c: "░", d: "●", e: "○" };
    console.log(`\n${id}`);
    for (const row of pixels) {
      console.log([...row].map((cell) => glyph[cell] ?? cell).join(""));
    }
    if (problems.length) {
      failed += 1;
      console.log("FAIL", id, problems.join(" | "));
    }
  }
}

process.exit(failed ? 1 : 0);
