import { useEffect, useRef, useState } from "react";
import type { Picture } from "../game/types";
import { PicturePreview } from "./PicturePreview";
import { useModalDialog } from "./useModalDialog";

const sparks = Array.from({ length: 28 }, (_, index) => ({
  angle: (360 / 28) * index + (index % 2 ? 6 : -6),
  distance: 38 + ((index * 37) % 22),
  delay: (index % 7) * 35,
  color: ["#ffd23f", "#ff5fa2", "#7c5cff", "#3ec7ff", "#ffffff"][index % 5],
}));

function reduceMotion() {
  return (
    document.documentElement.dataset.motion === "reduce" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

type MagicRevealProps = {
  picture: Picture;
  image: string;
  from: DOMRect | null;
  nextLabel: string;
  onNext: () => void;
  onClose: () => void;
};

export function MagicReveal({ picture, image, from, nextLabel, onNext, onClose }: MagicRevealProps) {
  const dialogRef = useModalDialog(onClose);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) nextRef.current?.focus({ preventScroll: true });
  }, [ready]);

  useEffect(() => {
    let alive = true;
    const img = imageRef.current;
    if (!img) return;
    img
      .decode()
      .catch(() => undefined)
      .then(() => {
        if (alive) setReady(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!ready || !frame || reduceMotion()) return;
    const end = frame.getBoundingClientRect();
    const start = from ?? end;
    const dx = start.left + start.width / 2 - (end.left + end.width / 2);
    const dy = start.top + start.height / 2 - (end.top + end.height / 2);
    const scale = Math.min(start.width / end.width, start.height / end.height);
    const grow = frame.animate(
      [
        { transform: `translate(${dx}px, ${dy}px) scale(${scale}) rotate(0deg)`, offset: 0 },
        { transform: `translate(${dx * 0.4}px, ${dy * 0.4}px) scale(${scale * 1.05}) rotate(-4deg)`, offset: 0.3 },
        { transform: "translate(0, 0) scale(1.08) rotate(3deg)", offset: 0.72 },
        { transform: "translate(0, 0) scale(0.97) rotate(-1deg)", offset: 0.86 },
        { transform: "translate(0, 0) scale(1) rotate(0deg)", offset: 1 },
      ],
      { duration: 1250, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
    );
    return () => grow.cancel();
  }, [ready, from]);

  return (
    <div className={ready ? "reveal-overlay ready" : "reveal-overlay"}>
      <div className="reveal-rays" aria-hidden="true" />
      <div className="reveal-burst" aria-hidden="true">
        {sparks.map((spark, index) => (
          <i
            key={index}
            style={{
              ["--angle" as string]: `${spark.angle}deg`,
              ["--distance" as string]: `${spark.distance}vmin`,
              ["--delay" as string]: `${spark.delay + 380}ms`,
              ["--spark" as string]: spark.color,
            }}
          />
        ))}
      </div>
      <div
        className="reveal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reveal-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="reveal-frame" ref={frameRef}>
          <img ref={imageRef} src={image} alt={`${picture.title} desenhado com detalhes.`} draggable={false} />
          <div className="reveal-pixels" aria-hidden="true">
            <PicturePreview picture={picture} />
          </div>
          <span className="reveal-flash" aria-hidden="true" />
          <span className="reveal-shine" aria-hidden="true" />
        </div>
        <h2 id="reveal-title">Que mágica! Apareceu o {picture.title.toLowerCase()}!</h2>
        <div className="reveal-actions">
          <button type="button" className="ghost" onClick={onClose}>
            Ver a matriz
          </button>
          <button type="button" className="verify" ref={nextRef} onClick={onNext}>
            {nextLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
