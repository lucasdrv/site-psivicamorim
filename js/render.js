/* =====================================================================
   MONTA A PÁGINA A PARTIR DOS ARQUIVOS DA PASTA "content/"
   Você normalmente NÃO precisa editar este arquivo.
   Para mudar textos e imagens, edite os arquivos em content/.
   ===================================================================== */
(function () {
  "use strict";

  const C = window.CONTENT || {};
  const S = C.site || {};

  /* ---------- utilidades ---------- */
  const esc = (v) =>
    String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  const arr = (v) => (Array.isArray(v) ? v : []);

  const whatsappUrl = () => {
    const base = "https://wa.me/" + String(S.whatsapp || "").replace(/\D/g, "");
    return S.whatsappMensagem ? base + "?text=" + encodeURIComponent(S.whatsappMensagem) : base;
  };
  const instagramUrl = () => "https://instagram.com/" + String(S.instagram || "").replace(/^@/, "");

  const waBtn = (cls) =>
    `<a class="${cls}" href="${esc(whatsappUrl())}" target="_blank" rel="noopener">◉ &nbsp; ${esc(S.botaoAgendar)}</a>`;

  // Aplica uma imagem (arquivo ou URL) como fundo de um elemento
  function setImage(root, selector, img, cssVar) {
    const el = root.querySelector(selector);
    if (!el || !img || !img.arquivo) return;
    el.style.setProperty(cssVar, 'url("' + String(img.arquivo).replace(/"/g, "%22") + '")');
    if (img.descricao) el.setAttribute("aria-label", img.descricao);
  }

  // Preenche uma seção; se o conteúdo faltar ou "mostrar: false", trata sem quebrar a página
  function mount(selector, name, build) {
    const root = document.querySelector(selector);
    if (!root) return;
    const data = C[name];
    if (!data) {
      console.warn('[site] Conteúdo "' + name + '" não encontrado. Confira o arquivo content/' + name + ".js");
      return;
    }
    if (data.mostrar === false) { root.remove(); return; }
    try { build(root, data); }
    catch (e) { console.error('[site] Erro ao montar "' + name + '":', e); }
  }

  /* ---------- topo ---------- */
  mount(".site-header", "site", (root, d) => {
    root.innerHTML = `
      <div class="container nav-wrap">
        <a class="brand" href="#inicio" aria-label="${esc(d.nome)} - início">
          <span class="brand-mark">${esc(d.simbolo)}</span>
          <span><strong>${esc(d.nome)}</strong><small>${esc(d.profissao)}</small></span>
        </a>
        <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav" aria-label="Navegação principal">
          ${arr(d.menu).map((m) => `<a href="${esc(m.link)}">${esc(m.texto)}</a>`).join("")}
          ${waBtn("nav-cta")}
        </nav>
      </div>`;
  });

  /* ---------- início ---------- */
  mount("#inicio", "inicio", (root, d) => {
    root.innerHTML = `
      <div class="hero-bg"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${esc(d.etiqueta)}</p>
          <h1>${esc(d.titulo)}</h1>
          <p class="lead">${esc(d.texto)}</p>
          <div class="actions">
            ${waBtn("button primary")}
            <a class="button secondary" href="#sobre">${esc(d.botaoSecundario)} <span>→</span></a>
          </div>
        </div>
      </div>`;
    setImage(root, ".hero-bg", d.imagem, "--hero-image");
  });

  /* ---------- sobre mim ---------- */
  mount("#sobre", "sobre", (root, d) => {
    root.innerHTML = `
      <div class="container two-col">
        <div class="photo-card portrait" role="img"></div>
        <div class="content">
          <p class="eyebrow">${esc(d.etiqueta)}</p>
          <h2>${esc(d.titulo)}</h2>
          ${arr(d.paragrafos).map((p) => `<p>${esc(p)}</p>`).join("")}
          ${d.link ? `<a class="text-link" href="${esc(d.link.destino)}">${esc(d.link.texto)} <span>→</span></a>` : ""}
        </div>
      </div>`;
    setImage(root, ".portrait", d.imagem, "--img");
  });

  /* ---------- abordagens ---------- */
  mount("#abordagens", "abordagens", (root, d) => {
    root.innerHTML = `
      <div class="container approaches-grid">
        <div class="content intro">
          <p class="eyebrow">${esc(d.etiqueta)}</p>
          <h2>${esc(d.titulo)}</h2>
          <p>${esc(d.texto)}</p>
          ${d.link ? `<a class="text-link" href="${esc(d.link.destino)}">${esc(d.link.texto)} <span>→</span></a>` : ""}
        </div>
        <div class="cards">
          ${arr(d.cards).map((c) => `
            <article class="therapy-card">
              <div class="icon">${esc(c.icone)}</div>
              <h3>${esc(c.titulo)}</h3>
              <p>${esc(c.texto)}</p>
            </article>`).join("")}
        </div>
      </div>`;
  });

  /* ---------- como funciona ---------- */
  mount("#processo", "processo", (root, d) => {
    root.innerHTML = `
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">${esc(d.etiqueta)}</p>
          <h2>${esc(d.titulo)}</h2>
        </div>
        <div class="process-grid">
          <div class="steps">
            ${arr(d.passos).map((p, i) => `
              <article class="step"><span>${i + 1}</span><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></article>`).join("")}
          </div>
          <div class="photo-card office" role="img"></div>
        </div>
      </div>`;
    setImage(root, ".office", d.imagem, "--img");
  });

  /* ---------- para quem é ---------- */
  mount("#publico", "publico", (root, d) => {
    root.innerHTML = `
      <div class="container two-col reverse-mobile">
        <div class="photo-card botanical" role="img"></div>
        <div class="content">
          <p class="eyebrow">${esc(d.etiqueta)}</p>
          <h2>${esc(d.titulo)}</h2>
          <p>${esc(d.texto)}</p>
          <ul class="check-list">${arr(d.lista).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
        </div>
      </div>`;
    setImage(root, ".botanical", d.imagem, "--img");
  });

  /* ---------- perguntas frequentes ---------- */
  mount("#faq", "faq", (root, d) => {
    root.innerHTML = `
      <div class="container faq-grid">
        <div class="content">
          <p class="eyebrow">${esc(d.etiqueta)}</p>
          <h2>${esc(d.titulo)}</h2>
          <p>${esc(d.texto)}</p>
        </div>
        <div class="faq-list">
          ${arr(d.perguntas).map((q) => `
            <details><summary>${esc(q.pergunta)}</summary><p>${esc(q.resposta)}</p></details>`).join("")}
        </div>
      </div>`;
  });

  /* ---------- contato ---------- */
  mount("#contato", "contato", (root, d) => {
    const item = (href, icone, titulo, desc, extra) =>
      `<${href ? "a" : "div"}${href ? ` href="${esc(href)}" target="_blank" rel="noopener"` : ""}${extra || ""}>
        <span class="contact-icon">${icone}</span>
        <span><strong>${esc(titulo)}</strong><small>${esc(desc)}</small></span>
      </${href ? "a" : "div"}>`;

    root.innerHTML = `
      <div class="container contact-grid">
        <div>
          <p class="eyebrow">${esc(d.etiqueta)}</p>
          <h2>${esc(d.titulo)}</h2>
          <p>${esc(d.texto)}</p>
        </div>
        <div class="contact-info">
          ${S.whatsapp ? item(whatsappUrl(), "◉", S.whatsappExibicao || S.whatsapp, d.descricaoWhatsapp) : ""}
          ${S.instagram ? item(instagramUrl(), "◎", "@" + String(S.instagram).replace(/^@/, ""), d.descricaoInstagram, ' aria-label="Instagram"') : ""}
          ${d.local ? item("", "⌖", d.local.titulo, d.local.descricao) : ""}
        </div>
        ${waBtn("button primary light-button")}
      </div>`;
  });

  /* ---------- rodapé ---------- */
  mount(".footer", "site", (root, d) => {
    const r = d.rodape || {};
    root.innerHTML = `
      <div class="container footer-grid">
        <a class="brand footer-brand" href="#inicio">
          <span class="brand-mark">${esc(d.simbolo)}</span>
          <span><strong>${esc(d.nome)}</strong><small>${esc(d.profissao)}</small></span>
        </a>
        <div><strong>${esc(d.crp)}</strong><p>${esc(r.frase)}</p></div>
        <div class="footer-social">
          ${d.instagram ? `<a href="${esc(instagramUrl())}" target="_blank" rel="noopener">Instagram</a>` : ""}
          ${d.whatsapp ? `<a href="${esc(whatsappUrl())}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
        </div>
        <div class="footer-bottom">
          <span>${esc(r.copyright)}</span>
          <span><a href="#inicio">Início</a> · <a href="#sobre">Sobre</a> · <a href="#contato">Contato</a></span>
        </div>
      </div>`;
  });
})();
