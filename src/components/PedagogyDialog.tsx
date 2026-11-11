import { useState } from "react";
import { computingSkills, mathSkills, pedagogyLead, pedagogyPlainText, type SkillRow } from "../content/pedagogy";
import { useModalDialog } from "./useModalDialog";

function SkillTable({ rows }: { rows: SkillRow[] }) {
  return (
    <div className="skill-table">
      <table>
        <caption className="visually-hidden">Habilidades, texto oficial e relação com o jogo</caption>
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Ano</th>
            <th scope="col">Habilidade</th>
            <th scope="col">Nesta aplicação</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.code}>
              <th scope="row">{row.code}</th>
              <td>{row.year}</td>
              <td>
                <span className="skill-axis">{row.axis}.</span> {row.text}
              </td>
              <td>{row.offer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PedagogyDialog({ onClose }: { onClose: () => void }) {
  const dialogRef = useModalDialog(onClose);
  const [copyNote, setCopyNote] = useState("");

  async function copyText() {
    const text = pedagogyPlainText();
    const article = document.getElementById("pedagogy-body");
    if (article) {
      const range = document.createRange();
      range.selectNodeContents(article);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.left = "0";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.focus();
    field.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    field.remove();
    if (article) {
      const range = document.createRange();
      range.selectNodeContents(article);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopyNote("Texto copiado.");
    } catch {
      setCopyNote(
        copied
          ? "Texto copiado."
          : "Não foi possível copiar sozinho. O texto está selecionado: use Ctrl+C.",
      );
    }
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
        aria-labelledby="pedagogy-title"
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <article className="readable" id="pedagogy-body">
          <h2 id="pedagogy-title">Fundamentação pedagógica</h2>
          {pedagogyLead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h3>BNCC de Matemática</h3>
          <p>
            Documento homologado de 2018, unidade temática Números. A aplicação oferece uma situação de cálculo e
            registro. Onde a habilidade pede elaborar problemas, subtração ou divisão, isso não acontece nesta partida.
          </p>
          <SkillTable rows={mathSkills} />

          <h3>Complemento de Computação à BNCC</h3>
          <p>
            Parecer CNE/CEB nº 2/2022 e Resolução CNE/CEB nº 1, de 4 de outubro de 2022. Os eixos mobilizados são
            Pensamento Computacional e Mundo Digital.
          </p>
          <SkillTable rows={computingSkills} />

          <h3>Competências gerais</h3>
          <p>
            A proposta se aproxima da competência 2, pensamento científico, crítico e criativo, porque a criança testa
            um resultado e o revisa na conferência; da competência 4, comunicação, porque lê a expressão e usa um código
            visual comum; e da competência 5, cultura digital, porque resolve a situação num artefato computacional.
          </p>
          <p className="dialog-note">
            Fontes: BNCC (MEC, 2018); anexo ao Parecer CNE/CEB nº 2/2022. Os textos das habilidades foram conferidos com
            esse anexo na edição pública dados-2026.07.1.
          </p>
        </article>
        <div className="dialog-actions">
          <p className="copy-note" role="status">
            {copyNote}
          </p>
          <button type="button" className="ghost" onClick={() => void copyText()}>
            Copiar texto
          </button>
          <button type="button" className="verify" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
