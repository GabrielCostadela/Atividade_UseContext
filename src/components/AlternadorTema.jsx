import { usarTema } from "../context/ContextoTema";
import "./alternadorTema.css";

export default function AlternadorTema() {
  const { tema, alternar } = usarTema();

  return (
    <button
      className="alternador-tema"
      onClick={alternar}
      aria-label="Alternar tema"
    >
      {tema === "claro" ? "🌞 Claro" : "🌙 Escuro"}
    </button>
  );
}
