import { useEffect, useRef, useState } from "react";
import { pictureById, themes } from "../game/pictures";
import type { Operation, Settings } from "../game/types";
import { PicturePreview } from "./PicturePreview";

const sizes = [
  { id: 8, label: "8×8" },
  { id: 12, label: "12×10" },
  { id: 16, label: "16×12" },
] as const;

type SizeId = (typeof sizes)[number]["id"];

function themeOf(pictureId: string) {
  return pictureId.slice(0, pictureId.lastIndexOf("-"));
}

function sizeOf(pictureId: string): SizeId {
  const size = Number(pictureId.slice(pictureId.lastIndexOf("-") + 1));
  return size === 12 || size === 16 ? size : 8;
}

export function SettingsDialog({
  settings,
  onCancel,
  onApply,
}: {
  settings: Settings;
  onCancel: () => void;
  onApply: (settings: Settings) => void;
}) {
  const [draft, setDraft] = useState(settings);
  const [size, setSize] = useState<SizeId>(sizeOf(settings.pictureId));
  const dialogRef = useRef<HTMLDivElement>(null);
  const theme = themeOf(draft.pictureId);
  const canPlay = draft.operation === "sum" || draft.tables.length > 0;

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  function chooseSize(next: SizeId) {
    setSize(next);
    setDraft((current) => ({ ...current, pictureId: `${themeOf(current.pictureId)}-${next}` }));
  }

  function chooseTheme(themeId: string) {
    setDraft((current) => ({ ...current, pictureId: `${themeId}-${size}` }));
  }

  function chooseOperation(operation: Operation) {
    setDraft((current) => ({ ...current, operation }));
  }

  function toggleTable(table: number) {
    setDraft((current) => {
      const tables = current.tables.includes(table)
        ? current.tables.filter((item) => item !== table)
        : [...current.tables, table].sort((left, right) => left - right);
      return { ...current, tables };
    });
  }

  return (
    <div className="overlay" onMouseDown={onCancel}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={(event) => {
          if (event.key === "Escape") onCancel();
        }}
      >
        <h2 id="settings-title">Configurações</h2>
        <p className="dialog-note">Isso começa uma partida nova.</p>

        <fieldset>
          <legend>Operação</legend>
          <div className="choice-row">
            <button
              type="button"
              className={draft.operation === "sum" ? "choice selected" : "choice"}
              aria-pressed={draft.operation === "sum"}
              onClick={() => chooseOperation("sum")}
            >
              Soma
            </button>
            <button
              type="button"
              className={draft.operation === "mul" ? "choice selected" : "choice"}
              aria-pressed={draft.operation === "mul"}
              onClick={() => chooseOperation("mul")}
            >
              Multiplicação
            </button>
          </div>
        </fieldset>

        {draft.operation === "sum" ? (
          <fieldset>
            <legend>Soma até</legend>
            <div className="choice-row">
              {[10, 20].map((limit) => (
                <button
                  key={limit}
                  type="button"
                  className={draft.sumLimit === limit ? "choice selected" : "choice"}
                  aria-pressed={draft.sumLimit === limit}
                  onClick={() => setDraft((current) => ({ ...current, sumLimit: limit as 10 | 20 }))}
                >
                  Até {limit}
                </button>
              ))}
            </div>
          </fieldset>
        ) : (
          <fieldset>
            <legend>Tabuadas</legend>
            <div className="tables">
              {Array.from({ length: 10 }, (_, index) => index + 1).map((table) => (
                <button
                  key={table}
                  type="button"
                  className={draft.tables.includes(table) ? "table selected" : "table"}
                  aria-pressed={draft.tables.includes(table)}
                  onClick={() => toggleTable(table)}
                >
                  {table}
                </button>
              ))}
            </div>
            {draft.tables.length === 0 && <p className="dialog-warn">Escolha pelo menos uma tabuada.</p>}
          </fieldset>
        )}

        <fieldset>
          <legend>Tamanho</legend>
          <div className="choice-row">
            {sizes.map((option) => (
              <button
                key={option.id}
                type="button"
                className={size === option.id ? "choice selected" : "choice"}
                aria-pressed={size === option.id}
                onClick={() => chooseSize(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Desenho</legend>
          <div className="themes">
            {themes.map((item) => {
              const picture = pictureById(`${item.id}-${size}`);
              if (!picture) return null;
              const selected = theme === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={selected ? "theme selected" : "theme"}
                  aria-pressed={selected}
                  onClick={() => chooseTheme(item.id)}
                >
                  <PicturePreview picture={picture} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="dialog-actions">
          <button type="button" className="ghost" onClick={onCancel}>
            Cancelar
          </button>
          <button type="button" className="verify" disabled={!canPlay} onClick={() => onApply(draft)}>
            Jogar
          </button>
        </div>
      </div>
    </div>
  );
}
