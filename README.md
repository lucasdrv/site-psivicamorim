# Landing Page Psicóloga

Site estático (HTML + CSS + JavaScript), pronto para o GitHub Pages.
Todo o texto e todas as imagens ficam em arquivos separados, fáceis de editar.

## Onde editar cada coisa

| O que você quer mudar | Arquivo |
|---|---|
| Nome, CRP, WhatsApp, Instagram, menu, texto do botão, rodapé | `content/site.js` |
| Primeira tela (título, texto, imagem de fundo) | `content/inicio.js` |
| Sobre mim (textos e foto) | `content/sobre.js` |
| Abordagens terapêuticas (cartões) | `content/abordagens.js` |
| Como funciona (etapas e foto) | `content/processo.js` |
| Para quem é (lista e foto) | `content/publico.js` |
| Perguntas frequentes | `content/faq.js` |
| Contato (textos e endereço) | `content/contato.js` |
| Suas fotos | pasta `images/` |
| Cores | topo do `style.css` (bloco `:root`) |
| Título e descrição no Google / prévia de link | `index.html` (`<title>` e `meta description`) |

## Como editar pelo GitHub
1. Abra o arquivo (por exemplo `content/sobre.js`) e clique no ícone de lápis.
2. Altere **somente o texto entre aspas** `"..."`.
3. Clique em **Commit changes**. O site atualiza em 1 a 2 minutos.

Regras para não quebrar o arquivo:
- Não apague as aspas, as vírgulas no fim das linhas, nem as chaves `{ }` e colchetes `[ ]`.
- Para usar aspas dentro de um texto, escreva `\"` (ou use aspas simples `'`).
- Para adicionar um item (parágrafo, cartão, pergunta, etapa), copie um item existente inteiro e cole logo abaixo, mantendo a vírgula entre eles.
- Para esconder uma seção inteira, troque `mostrar: true` por `mostrar: false` (e remova o item correspondente do menu em `content/site.js`).

## Como trocar imagens
1. Envie a foto para a pasta `images/` (Add file → Upload files).
2. No arquivo da seção, altere o campo `arquivo`, por exemplo `arquivo: "images/sobre.jpg"`.
3. Ajuste `descricao` com um texto curto que descreva a foto.

As imagens de demonstração vêm do Unsplash por URL. Para a versão final, use fotos próprias.

## Estrutura do projeto
```
index.html          estrutura da página (não precisa editar, exceto <title> e description)
style.css           visual e cores
content/            TEXTOS (um arquivo por seção)
images/             IMAGENS
js/render.js        monta a página a partir de content/
js/menu.js          menu do celular
```

## Publicar no GitHub Pages
1. Crie um repositório no GitHub e envie **todos** os arquivos e pastas (mantendo a estrutura).
2. Vá em Settings → Pages.
3. Em Build and deployment, escolha Deploy from a branch.
4. Selecione `main` e `/ (root)` e salve.

## Antes de publicar
Substitua os dados fictícios: nome, CRP, WhatsApp (`5500000000000`), Instagram, cidade/bairro, textos Lorem Ipsum e imagens de demonstração.

## Paleta
- Areia `#D8C6AA`
- Bordô `#6B2635`
- Cinza escuro `#333333`
- Off-white `#F7F5F0`
- Dourado `#B08A3E`
