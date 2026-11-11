import type { PaletteEntry } from "../game/types";

type PaletteProps = {
  palette: PaletteEntry[];
  tool: string;
  message: string | null;
  won: boolean;
  onTool: (tool: string) => void;
  onVerify: () => void;
  onClear: () => void;
};

export function Palette({ palette, tool, message, won, onTool, onVerify, onClear }: PaletteProps) {
  return (
    <aside className="palette">
      <div className="swatches">
        {palette.map((entry) => (
          <button
            key={entry.key}
            type="button"
            className={tool === entry.key ? "swatch selected" : "swatch"}
            data-tool={entry.key}
            aria-pressed={tool === entry.key}
            onClick={() => onTool(entry.key)}
          >
            <span className="swatch-color" style={{ background: entry.color }} />
            <span className="swatch-number">{entry.result}</span>
          </button>
        ))}
      </div>
      <div className="palette-actions">
        <button
          type="button"
          className={tool === "eraser" ? "eraser selected" : "eraser"}
          aria-pressed={tool === "eraser"}
          onClick={() => onTool("eraser")}
        >
          Borracha
        </button>
        {message && (
          <p className="feedback" role="status">
            {message}
          </p>
        )}
        <button type="button" className="verify" onClick={onVerify} disabled={won}>
          Verifique
        </button>
        <button type="button" className="ghost" onClick={onClear} disabled={won}>
          Limpar
        </button>
      </div>
    </aside>
  );
}
