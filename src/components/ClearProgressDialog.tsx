import { useModalDialog } from "./useModalDialog";

export function ClearProgressDialog({
  onCancel,
  onConfirm,
  onRestart,
}: {
  onCancel: () => void;
  onConfirm: () => void;
  onRestart: () => void;
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
          Limpar tudo apaga as cores e o ábaco nesta fase. Voltar à fase 1 faz o mesmo e começa de novo no primeiro
          desenho, com as mesmas contas de operação.
        </p>
        <div className="dialog-actions">
          <button type="button" className="ghost" onClick={onCancel}>
            Cancelar
          </button>
          <button type="button" className="danger" onClick={onConfirm}>
            Limpar tudo
          </button>
          <button type="button" className="danger" onClick={onRestart}>
            Voltar à fase 1
          </button>
        </div>
      </div>
    </div>
  );
}
