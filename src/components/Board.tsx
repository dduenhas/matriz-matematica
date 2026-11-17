import { useRef } from "react";
import { inkOn } from "../game/color";
import type { Cell, Mark, Picture } from "../game/types";

const twinkles = Array.from({ length: 10 }, (_, index) => index);

type BoardProps = {
  picture: Picture;
  cells: Cell[];
  paint: (string | null)[];
  marks: Record<number, Mark>;
  won: boolean;
  calling: boolean;
  selected: number | null;
  onCell: (index: number) => void;
  onMagic: (from: DOMRect) => void;
};

export function Board({ picture, cells, paint, marks, won, calling, selected, onCell, onMagic }: BoardProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div className="board-wrap" id="matriz" tabIndex={-1}>
      <div
        ref={gridRef}
        role="group"
        aria-label={
          won ? `Desenho completo: ${picture.title}.` : "Matriz de contas. Escolha uma cor e pinte a casa do resultado."
        }
        className={["grid", won ? "won" : "", calling ? "calling" : ""].filter(Boolean).join(" ")}
        style={{ ["--cols" as string]: picture.cols, ["--rows" as string]: picture.rows }}
      >
        {cells.map((entry, index) => {
          const painted = paint[index];
          const background = painted ? picture.colors[painted] : undefined;
          const mark = marks[index];
          const className = [
            "cell",
            painted ? "painted" : "",
            selected === index ? "selected" : "",
            mark === "wrong" ? "wrong" : "",
            mark === "empty" ? "empty" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={index}
              type="button"
              className={className}
              data-color-key={entry.colorKey}
              style={{
                background,
                color: background ? inkOn(background) : undefined,
              }}
              tabIndex={won ? -1 : undefined}
              aria-hidden={won || undefined}
              aria-pressed={selected === index}
              aria-label={
                painted ? `${entry.problem.label}, pintada` : `${entry.problem.label}, sem cor`
              }
              onClick={() => onCell(index)}
            >
              {won ? "" : <span className="expr">{entry.problem.label}</span>}
            </button>
          );
        })}

        {won && (
          <button
            type="button"
            className="magic-target"
            aria-label={`Tocar no ${picture.title.toLowerCase()} com a varinha mágica`}
            onClick={() => {
              const rect = gridRef.current?.getBoundingClientRect();
              if (rect) onMagic(rect);
            }}
          >
            {calling && (
              <>
                <span className="magic-twinkles" aria-hidden="true">
                  {twinkles.map((index) => (
                    <i key={index} />
                  ))}
                </span>
                <img className="magic-wand" src={`${import.meta.env.BASE_URL}varinha-256.png`} alt="" aria-hidden="true" draggable={false} />
                <span className="magic-call">Toque no desenho com a varinha mágica!</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
