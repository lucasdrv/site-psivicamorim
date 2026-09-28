/* =====================================================================
   SEÇÃO: ABORDAGENS TERAPÊUTICAS
   - "cards": cada bloco { ... } é um cartão. Para adicionar um novo,
     copie um bloco inteiro (com a vírgula entre eles).
   - "icone" pode ser qualquer símbolo ou letra curta.
   ===================================================================== */
window.CONTENT = window.CONTENT || {};

window.CONTENT.abordagens = {
  mostrar: true,

  etiqueta: "ABORDAGENS TERAPÊUTICAS",
  titulo: "Como posso te ajudar",
  texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  link: { texto: "Conheça as abordagens", destino: "#contato" },

  cards: [
    {
      icone: "◌",
      titulo: "Psicanálise",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      icone: "✦",
      titulo: "Terapia Cognitivo-Comportamental (TCC)",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      icone: "♡",
      titulo: "Outras abordagens",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
  ]
};
