import { useModalDialog } from "./useModalDialog";

export function ClearProgressDialog({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  const dialogRef = useModalDialog(onCancel);

  return (
    <div
      className="overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCancel();
      }}
    >
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="clear-title"
        aria-describedby="clear-note"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 id="clear-title">Limpar o progresso?</h2>
        <p id="clear-note" className="dialog-note">
          Isso apaga todas as cores da matriz e o que você contou no ábaco. As contas da partida continuam as mesmas.
        </p>
        <div className="dialog-actions">
          <button type="button" className="ghost" onClick={onCancel}>
            Cancelar
          </button>
          <button type="button" className="danger" onClick={onConfirm}>
            Limpar tudo
          </button>
        </div>
      </div>
    </div>
  );
}
