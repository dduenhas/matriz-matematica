import { useRef } from "react";

type AbacusProps = {
  rows: 1 | 2;
  counts: number[];
  prompt: string;
  onChange: (row: number, count: number) => void;
  onClear: () => void;
};

function clamp(value: number) {
  return Math.min(10, Math.max(0, value));
}

function Rod({ count, onChange }: { count: number; onChange: (count: number) => void }) {
  const rodRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; index: number; count: number; moved: boolean } | null>(null);
  const stepRef = useRef(28);

  return (
    <div className="rod-line">
      <div
        className="rod"
        ref={rodRef}
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={10}
        aria-valuenow={count}
        aria-label="Haste do ábaco"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") onChange(clamp(count + 1));
          if (event.key === "ArrowRight") onChange(clamp(count - 1));
          if (event.key === "Home") onChange(0);
          if (event.key === "End") onChange(10);
        }}
        onPointerDown={(event) => {
          const bead = (event.target as HTMLElement).closest<HTMLElement>("[data-bead]");
          if (!bead || !rodRef.current) return;
          stepRef.current = bead.getBoundingClientRect().width + 2;
          rodRef.current.setPointerCapture(event.pointerId);
          drag.current = {
            x: event.clientX,
            index: Number(bead.dataset.bead),
            count,
            moved: false,
          };
        }}
        onPointerMove={(event) => {
          const gesture = drag.current;
          if (!gesture) return;
          const steps = Math.round((gesture.x - event.clientX) / stepRef.current);
          if (steps === 0) return;
          gesture.moved = true;
          let next = clamp(gesture.count + steps);
          if (steps > 0) next = Math.max(next, gesture.index + 1);
          if (steps < 0) next = Math.min(next, gesture.index);
          onChange(next);
        }}
        onPointerUp={() => {
          const gesture = drag.current;
          drag.current = null;
          if (!gesture || gesture.moved) return;
          if (gesture.index >= gesture.count) onChange(gesture.index + 1);
          else onChange(gesture.index);
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <span
            key={index}
            data-bead={index}
            className={["bead", index < 5 ? "red" : "white", index === count ? "gap" : ""].filter(Boolean).join(" ")}
            aria-label={`Conta ${index + 1}, ${index < count ? "contada" : "parada"}`}
          />
        ))}
      </div>
      <span className="rod-count">{count}</span>
    </div>
  );
}

export function Abacus({ rows, counts, prompt, onChange, onClear }: AbacusProps) {
  const total = counts.slice(0, rows).reduce((sum, count) => sum + count, 0);

  return (
    <section className="abacus" aria-label="Ábaco">
      <div className="abacus-head">
        <p>{prompt}</p>
        <div className="abacus-total" aria-live="polite">
          <span>Contadas</span>
          <strong>{total}</strong>
        </div>
        <button type="button" className="ghost" onClick={onClear}>
          Esvaziar
        </button>
      </div>
      {Array.from({ length: rows }, (_, row) => (
        <Rod key={row} count={counts[row] ?? 0} onChange={(count) => onChange(row, count)} />
      ))}
    </section>
  );
}
