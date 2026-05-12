import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProvedorTema } from "./context/ContextoTema";
import "./styles/tema.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProvedorTema>
      <App />
    </ProvedorTema>
  </StrictMode>,
);
