/* =====================================================================
   SEÇÃO: INÍCIO (a primeira tela da página)
   Edite os textos entre aspas "..." e a imagem de fundo.

   IMAGEM
   - Para usar uma foto sua: coloque o arquivo na pasta "images" e escreva
     o caminho, por exemplo:  arquivo: "images/inicio.jpg"
   - "descricao" é o texto alternativo (acessibilidade e Google).
   ===================================================================== */
window.CONTENT = window.CONTENT || {};

window.CONTENT.inicio = {
  mostrar: true,                     // true = aparece | false = esconde a seção

  etiqueta: "SAÚDE MENTAL É PRIORIDADE",
  titulo: "Cuidar da mente também é uma forma de cuidar de si.",
  texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  botaoSecundario: "Conheça meu trabalho",   // (o botão principal vem de site.js)

  imagem: {
    arquivo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
    descricao: "Ambiente acolhedor de atendimento"
  }
};
