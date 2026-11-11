import type { Picture } from "../game/types";

export function PicturePreview({ picture }: { picture: Picture }) {
  return (
    <div
      className="preview"
      style={{ gridTemplateColumns: `repeat(${picture.cols}, 1fr)` }}
      aria-hidden="true"
    >
      {picture.pixels.flatMap((row, y) =>
        [...row].map((key, x) => (
          <span key={`${y}-${x}`} style={{ background: picture.colors[key] }} />
        )),
      )}
    </div>
  );
}
