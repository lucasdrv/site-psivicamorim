/* =====================================================================
   SEÇÃO: COMO FUNCIONA
   - "passos": cada bloco { ... } é uma etapa. A numeração (1, 2, 3...)
     é automática, então você pode adicionar, remover ou trocar a ordem.
   ===================================================================== */
window.CONTENT = window.CONTENT || {};

window.CONTENT.processo = {
  mostrar: true,

  etiqueta: "COMO FUNCIONA",
  titulo: "Um processo seguro e acolhedor",

  passos: [
    { titulo: "Primeiro contato",  texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { titulo: "Avaliação inicial", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { titulo: "Sessões regulares", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { titulo: "Acompanhamento",    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ],

  imagem: {
    arquivo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    descricao: "Imagem ilustrativa de consultório"
  }
};
