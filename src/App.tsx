import { useEffect, useRef, useState } from "react";
import { Abacus } from "./components/Abacus";
import { Board } from "./components/Board";
import { Palette } from "./components/Palette";
import { SettingsDialog } from "./components/SettingsDialog";
import { generatePuzzle } from "./game/generate";
import { firstPictureId, nextPictureId, phaseOf, pictureById } from "./game/pictures";
import { loadSettings, saveSettings } from "./game/storage";
import type { Mark, Puzzle, Settings } from "./game/types";

function makePuzzle(settings: Settings): Puzzle {
  const picture = pictureById(settings.pictureId);
  if (!picture) throw new Error("Desenho não encontrado.");
  return generatePuzzle(picture, settings);
}

function modeLabel(settings: Settings) {
  if (settings.operation === "sum") return `Soma até ${settings.sumLimit}`;
  if (settings.tables.length === 1) return `Tabuada do ${settings.tables[0]}`;
  return `Tabuadas ${settings.tables.join(", ")}`;
}

export function App() {
  const [settings, setSettings] = useState(loadSettings);
  const [puzzle, setPuzzle] = useState(() => makePuzzle(loadSettings()));
  const [paint, setPaint] = useState<(string | null)[]>(() => Array(puzzle.cells.length).fill(null));
  const [tool, setTool] = useState(puzzle.palette[0]?.key ?? "eraser");
  const [selected, setSelected] = useState<number | null>(null);
  const [marks, setMarks] = useState<Record<number, Mark>>({});
  const [won, setWon] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [abacus, setAbacus] = useState([0, 0]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const advanceTimer = useRef<number | null>(null);

  function cancelAdvance() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  useEffect(() => cancelAdvance, []);

  function start(next: Settings) {
    cancelAdvance();
    const generated = makePuzzle(next);
    setSettings(next);
    saveSettings(next);
    setPuzzle(generated);
    setPaint(Array(generated.cells.length).fill(null));
    setTool(generated.palette[0]?.key ?? "eraser");
    setSelected(null);
    setMarks({});
    setWon(false);
    setMessage(null);
    setAbacus([0, 0]);
    setSettingsOpen(false);
  }

  function onCell(index: number) {
    if (won) return;
    setSelected(index);
    setPaint((current) => {
      if (current[index] === (tool === "eraser" ? null : tool)) return current;
      const next = current.slice();
      next[index] = tool === "eraser" ? null : tool;
      return next;
    });
    setMarks((current) => {
      if (!(index in current)) return current;
      const next = { ...current };
      delete next[index];
      return next;
    });
    setMessage(null);
  }

  function verify() {
    if (won) return;
    const nextMarks: Record<number, Mark> = {};
    let empty = 0;
    let wrong = 0;
    puzzle.cells.forEach((cell, index) => {
      const chosen = paint[index];
      if (!chosen) {
        nextMarks[index] = "empty";
        empty += 1;
      } else if (chosen !== cell.colorKey) {
        nextMarks[index] = "wrong";
        wrong += 1;
      }
    });
    setMarks(nextMarks);
    if (empty === 0 && wrong === 0) {
      setWon(true);
      setMessage(null);
      const nextId = nextPictureId(settings.pictureId);
      if (nextId) {
        cancelAdvance();
        advanceTimer.current = window.setTimeout(() => {
          advanceTimer.current = null;
          start({ ...settings, pictureId: nextId });
        }, 1600);
      }
      return;
    }
    if (empty > 0 && wrong > 0) {
      setMessage("Há contas sem cor e cores que não combinam com o resultado.");
    } else if (empty > 0) {
      setMessage("Ainda há contas sem cor.");
    } else {
      setMessage("Algumas cores não combinam com o resultado.");
    }
  }

  function clearPaint() {
    if (won) return;
    setPaint(Array(puzzle.cells.length).fill(null));
    setMarks({});
    setMessage(null);
  }

  const phase = phaseOf(settings.pictureId);
  const upcomingId = nextPictureId(settings.pictureId);
  const upcoming = upcomingId ? pictureById(upcomingId) : undefined;
  const selectedCell = selected === null ? null : puzzle.cells[selected];
  const prompt = selectedCell
    ? `Quanto é ${selectedCell.problem.a} + ${selectedCell.problem.b}?`
    : "Arraste as contas para a esquerda para contar.";

  return (
    <div className="page">
      <header className="top">
        <div>
          <h1>Matriz Matemática</h1>
          <p className="mode">
            Fase {phase.index + 1} de {phase.total} · {modeLabel(settings)} · {puzzle.picture.title} ·{" "}
            {puzzle.picture.cols}×{puzzle.picture.rows}
          </p>
          <p className="hint">Calcule e pinte com a cor do resultado.</p>
        </div>
        <div className="top-actions">
          <button type="button" className="ghost" onClick={() => start(settings)}>
            Nova partida
          </button>
          <button
            type="button"
            className="icon"
            aria-label="Configurações"
            onClick={() => setSettingsOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M19.14 12.94a7.4 7.4 0 0 0 .05-.94 7.4 7.4 0 0 0-.05-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.2 7.2 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.58.23-1.12.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58a7.4 7.4 0 0 0-.05.94c0 .32.02.63.05.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.23.4.32.64.22l2.39-.96c.5.4 1.05.73 1.63.94l.36 2.54c.05.24.25.42.5.42h3.84c.25 0 .45-.18.5-.42l.36-2.54c.58-.21 1.12-.54 1.63-.94l2.39.96c.23.1.51 0 .64-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z"
              />
            </svg>
          </button>
        </div>
      </header>

      {won && (
        <div className="win" role="status">
          <div className="confetti" aria-hidden="true">
            {Array.from({ length: 14 }, (_, index) => (
              <i key={index} />
            ))}
          </div>
          <p>
            {upcoming
              ? `Você completou o ${puzzle.picture.title.toLowerCase()}! Próxima fase: ${upcoming.title}.`
              : "Você completou todas as fases!"}
          </p>
          <button
            type="button"
            className="verify"
            onClick={() =>
              start({
                ...settings,
                pictureId: upcoming?.id ?? firstPictureId(settings.pictureId),
              })
            }
          >
            {upcoming ? "Próxima fase" : "Jogar de novo"}
          </button>
        </div>
      )}

      <main className={settings.operation === "sum" ? "stage stage-sum" : "stage stage-mul"}>
        <Board
          picture={puzzle.picture}
          cells={puzzle.cells}
          paint={paint}
          marks={marks}
          won={won}
          selected={selected}
          onCell={onCell}
        />
        <Palette
          palette={puzzle.palette}
          tool={tool}
          message={message}
          won={won}
          onTool={setTool}
          onVerify={verify}
          onClear={clearPaint}
        />
        {settings.operation === "sum" && (
          <Abacus
            rows={settings.sumLimit === 20 ? 2 : 1}
            counts={abacus}
            prompt={prompt}
            onChange={(row, count) =>
              setAbacus((current) => current.map((value, index) => (index === row ? count : value)))
            }
            onClear={() => setAbacus([0, 0])}
          />
        )}
      </main>

      {settingsOpen && (
        <SettingsDialog settings={settings} onCancel={() => setSettingsOpen(false)} onApply={start} />
      )}
    </div>
  );
}
