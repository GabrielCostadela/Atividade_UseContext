import { createContext, useContext, useState, useEffect } from "react";

const ContextoTema = createContext(null);

export function ProvedorTema({ children }) {
  const [tema, setTema] = useState(() => {
    try {
      return localStorage.getItem("tema") || "claro";
    } catch (e) {
      return "claro";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    try {
      localStorage.setItem("tema", tema);
    } catch (e) {}
  }, [tema]);

  const alternar = () => setTema((t) => (t === "claro" ? "escuro" : "claro"));

  return (
    <ContextoTema.Provider value={{ tema, alternar }}>
      {children}
    </ContextoTema.Provider>
  );
}

export function usarTema() {
  return useContext(ContextoTema);
}

export default ContextoTema;
