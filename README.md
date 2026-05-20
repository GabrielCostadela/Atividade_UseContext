# Atividade UseContext — Alternador de Tema

Projeto de exemplo que demonstra o uso do Context API do React para alternar entre temas `claro` e `escuro`.

## Descrição

O projeto fornece um provedor de tema (`ProvedorTema`) que armazena o estado do tema em `localStorage`, aplica o tema ao elemento `document.documentElement` via atributo `data-theme` e disponibiliza a função `alternar` para alternar entre `claro` e `escuro`.

## Requisitos

- Node.js 16+ (ou versão compatível com Vite)
- npm ou yarn

## Instalação

Instale as dependências:

```bash
npm install
# ou
# yarn
```

## Executar em desenvolvimento

```bash
npm run dev
```

## Build e preview

```bash
npm run build
npm run preview
```

## Estrutura relevante

- [src/main.jsx](src/main.jsx#L1-L20): inicia a aplicação e envolve o `App` com o `ProvedorTema`.
- [src/context/ContextoTema.jsx](src/context/ContextoTema.jsx#L1-L80): exporta `ProvedorTema` e o hook `usarTema()`.
- [src/components/AlternadorTema.jsx](src/components/AlternadorTema.jsx#L1-L40): botão pronto que chama `alternar()` para mudar o tema.
- [src/styles/tema.css](src/styles/tema.css#L1-L40): variáveis CSS e regras para `[data-theme="escuro"]`.
- [src/App.jsx](src/App.jsx#L1-L200): componente principal da aplicação.

## Como usar o contexto de tema

O provedor já é aplicado em [src/main.jsx](src/main.jsx#L1-L20). Para consumir o tema em qualquer componente, importe o hook `usarTema`:

```jsx
import { usarTema } from "./context/ContextoTema";

function MeuComponente() {
  const { tema, alternar } = usarTema();

  return (
    <div>
      <p>Tema atual: {tema}</p>
      <button onClick={alternar}>Alternar tema</button>
    </div>
  );
}
```

O componente `AlternadorTema` já implementa esse padrão e exibe um rótulo (`🌞 Claro` ou `🌙 Escuro`) conforme o tema atual.

## Como o tema é aplicado

- O estado `tema` é salvo em `localStorage` com a chave `tema`.
- Sempre que o tema muda, o atributo `data-theme` do `document.documentElement` é atualizado — o CSS em [src/styles/tema.css](src/styles/tema.css#L1-L40) usa esse atributo para trocar variáveis de cor.

## Personalização

- Para alterar cores, edite as variáveis em [src/styles/tema.css](src/styles/tema.css#L1-L40).
- Para adicionar mais temas, adapte o `ProvedorTema` para suportar mais valores e atualize o CSS para responder a `[data-theme="<seu-tema>"]`.

## Contribuições

Sinta-se à vontade para abrir issues ou pull requests com melhorias.

---

Arquivo principal do contexto: [src/context/ContextoTema.jsx](src/context/ContextoTema.jsx#L1-L80)
