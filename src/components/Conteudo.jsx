import { usarTema } from "../context/ContextoTema";
import "./conteudo.css";

export default function Conteudo() {
  const { tema } = usarTema();

  return (
    <main className="conteudo">
      <p>
        Modo atual: <strong>{tema}</strong>
      </p>
      <div className="cartoes">
        <div className="cartao">Componente 1</div>
        <div className="cartao">Componente 2</div>
      </div>
    </main>
  );
}
