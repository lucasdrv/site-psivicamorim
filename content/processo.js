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
    { titulo: "Primeiro contato",  texto: "Você entra em contato pelo WhatsApp para conhecer a disponibilidade, modalidade e informações iniciais sobre o atendimento." },
    { titulo: "Primeiro encontro", texto: "Conversamos sobre o motivo que trouxe você à terapia e sobre o funcionamento do processo." },
    { titulo: "Construção do processo", texto: "A partir dos encontros, vamos compreendendo as questões que aparecem e construindo o trabalho terapêutico." },
    { titulo: "Continuidade",    texto: "A frequência das sessões é definida de acordo com as necessidades do processo e o enquadre terapêutico." }
  ],

  passos: [
    { titulo: "Entrevista", texto: "Levantamento da demanda e das informações relevantes para a avaliação."},
    { titulo: "Planejamento", texto: "Definição dos aspectos que precisam ser investigados e dos instrumentos adequados."},
    { titulo: "Aplicação", texto: "Realização das etapas avaliativas planejadas."},
    { titulo: "Análise", texto: "Integração dos resultados dos instrumentos com as informações clínicas e históricas."},
    { titulo: "Devolutiva", texto: "Conversa para apresentação e compreensão dos resultados."},
    { titulo: "Documento", texto: "Entrega do documento correspondente à avaliação realizada."}
  ],

  imagem: {
    arquivo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    descricao: "Imagem ilustrativa de consultório"
  }
};
