import { inkOn } from "../game/color";
import type { Cell, Mark, Picture } from "../game/types";

type BoardProps = {
  picture: Picture;
  cells: Cell[];
  paint: (string | null)[];
  marks: Record<number, Mark>;
  won: boolean;
  selected: number | null;
  onCell: (index: number) => void;
};

export function Board({ picture, cells, paint, marks, won, selected, onCell }: BoardProps) {
  return (
    <div className="board-wrap">
      <div
        className={won ? "grid won" : "grid"}
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
              aria-pressed={selected === index}
              aria-label={
                won
                  ? "Casa do desenho"
                  : painted
                    ? `${entry.problem.label}, pintada`
                    : `${entry.problem.label}, sem cor`
              }
              onClick={() => onCell(index)}
            >
              {won ? "" : <span className="expr">{entry.problem.label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
