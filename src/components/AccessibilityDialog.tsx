import type { A11yPrefs } from "../game/a11y";
import { useModalDialog } from "./useModalDialog";

const commands = [
  ["Tab", "Vai para o próximo botão, casa ou haste."],
  ["Shift+Tab", "Volta para o controle anterior."],
  ["Enter ou Espaço", "Aciona o botão em foco ou pinta a casa com a cor escolhida."],
  ["Esc", "Fecha a janela aberta e devolve o foco ao botão que a abriu."],
  ["Seta para a esquerda", "No ábaco, conta mais uma conta da haste em foco."],
  ["Seta para a direita", "No ábaco, devolve uma conta."],
  ["Home e End", "No ábaco, esvazia a haste ou leva as 10 contas para o lado contado."],
];

export function AccessibilityDialog({
  prefs,
  onChange,
  onClose,
}: {
  prefs: A11yPrefs;
  onChange: (prefs: A11yPrefs) => void;
  onClose: () => void;
}) {
  const dialogRef = useModalDialog(onClose);

  function toggle(key: keyof A11yPrefs) {
    onChange({ ...prefs, [key]: !prefs[key] });
  }

  return (
    <div
      className="overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="dialog dialog-read"
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-title"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 id="a11y-title">Acessibilidade</h2>
        <p className="dialog-note">
          Ajustes recomendados pelo W3C nas WCAG e nas práticas WAI-ARIA. Cada interruptor altera a página agora.
        </p>

        <fieldset>
          <legend>Aparência</legend>
          <div className="a11y-options">
            <label className="a11y-option">
              <input type="checkbox" checked={prefs.largeText} onChange={() => toggle("largeText")} />
              Texto maior
            </label>
            <label className="a11y-option">
              <input type="checkbox" checked={prefs.contrast} onChange={() => toggle("contrast")} />
              Alto contraste
            </label>
            <label className="a11y-option">
              <input type="checkbox" checked={prefs.reduceMotion} onChange={() => toggle("reduceMotion")} />
              Reduzir animações
            </label>
          </div>
        </fieldset>

        <h3>Comandos de teclado</h3>
        <div className="skill-table">
          <table>
            <caption className="visually-hidden">Comandos de teclado da aplicação</caption>
            <thead>
              <tr>
                <th scope="col">Comando</th>
                <th scope="col">O que faz</th>
              </tr>
            </thead>
            <tbody>
              {commands.map(([command, effect]) => (
                <tr key={command}>
                  <th scope="row">{command}</th>
                  <td>{effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="dialog-note">
          As casas anunciam a conta e se já têm cor. O ábaco é um controle deslizante: o leitor de tela ouve o valor de
          0 a 10. Erros de conferência usam contorno e uma mensagem, não só a cor. O contraste alto preserva as cores
          do desenho, porque elas são o conteúdo da tarefa.
        </p>
        <div className="dialog-actions">
          <button type="button" className="verify" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
