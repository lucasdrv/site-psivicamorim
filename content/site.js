/* =====================================================================
   DADOS GERAIS DO SITE
   Aqui ficam as informações que aparecem em VÁRIOS lugares da página:
   nome, CRP, WhatsApp, Instagram, menu, texto do botão e rodapé.

   COMO EDITAR
   - Altere apenas o texto que está entre aspas "...".
   - Não apague as aspas, as vírgulas no fim das linhas nem as chaves { }.
   ===================================================================== */
window.CONTENT = window.CONTENT || {};

window.CONTENT.site = {
  // ----- Identidade (aparece no topo e no rodapé) -----
  nome: "Victória Amorim Corrêa",
  profissao: "Psicóloga",
  simbolo: "⌁",                      // símbolo ao lado do nome
  crp: "CRP 05/74553",

  // ----- Contato -----
  whatsapp: "5522997668167",         // somente números: 55 + DDD + número
  whatsappExibicao: "(22) 99766-8167", // como o número aparece escrito na página
  whatsappMensagem: "",              // (opcional) mensagem que já vem escrita no WhatsApp
  instagram: "psi.viamorim",         // usuário SEM o @ (deixe "" para esconder)

  // ----- Botão principal (topo, início e contato) -----
  botaoAgendar: "Agendar atendimento",

  // ----- Menu do topo -----
  // "link" precisa combinar com a seção da página. Para esconder um item, apague a linha inteira.
  menu: [
    { texto: "Início",        link: "#inicio" },
    { texto: "Sobre mim",     link: "#sobre" },
    { texto: "Abordagens",    link: "#abordagens" },
    { texto: "Como funciona", link: "#processo" },
    { texto: "Público",       link: "#publico" },
    { texto: "FAQ",           link: "#faq" },
    { texto: "Contato",       link: "#contato" }
  ],

  // ----- Rodapé -----
  rodape: {
    frase: "Psicologia, escuta e curiosidade pela história de cada pessoa.",
    copyright: "© 2026 Victória Amorim Corrêa. Todos os direitos reservados."
  }
};
