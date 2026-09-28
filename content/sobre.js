/* =====================================================================
   SEÇÃO: SOBRE MIM
   - "paragrafos": cada linha entre aspas é um parágrafo. Para adicionar
     outro parágrafo, copie uma linha e lembre da vírgula no fim.
   - Para usar sua foto: coloque em "images" e escreva  arquivo: "images/sobre.jpg"
   ===================================================================== */
window.CONTENT = window.CONTENT || {};

window.CONTENT.sobre = {
  mostrar: true,

  etiqueta: "SOBRE MIM",
  titulo: "Olá, eu sou Ana Silva",
  paragrafos: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  ],
  link: { texto: "Saiba mais sobre mim", destino: "#contato" },   // apague a linha para remover o botão

  imagem: {
    arquivo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    descricao: "Imagem ilustrativa de profissional em ambiente acolhedor"
  }
};
