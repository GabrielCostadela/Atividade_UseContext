import AlternadorTema from "./AlternadorTema";
import "./cabecalho.css";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1>UseContext — Tema</h1>
      <div className="acoes-cabecalho">
        <AlternadorTema />
      </div>
    </header>
  );
}
