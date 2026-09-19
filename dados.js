/*
 * dados.js
 * ------------------------------------------------------------
 * FONTE ÚNICA DE DADOS E APRESENTAÇÃO DO ecrã principal.
 *
 * O index.html contém apenas a estrutura semântica.
 * Cores, imagens, textos, dimensões, sombras e cartões são
 * definidos aqui para que o visual possa ser alterado sem
 * mexer na estrutura HTML.
 */

const DADOS = {
  pagina: {
    titulo: "Recursos do Cão",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolha o ano",
    subtituloMenu: "Selecione o ano de escolaridade para começar",
    mensagemRodape: "Escolha o ano e comece a aprender!",
    infoRodape: "Recursos educativos para o 1.º ciclo"
  },

  /* Paleta principal */
  cores: {
    fundo: "#EAF8FF",
    fundoTopo: "#66D9F7",
    branco: "#FFFFFF",
    texto: "#0C4B83",
    textoSecundario: "#1766A6",
    azul: "#13B7F1",
    azulEscuro: "#0B76C8",
    amarelo: "#FFB914",
    amareloClaro: "#FFF3C9",
    verde: "#43C83E",
    verdeEscuro: "#159D3A",
    laranja: "#FF9418",
    laranjaEscuro: "#EF6E12",
    roxo: "#A54BEF",
    roxoEscuro: "#7130B7",
    rosa: "#F5339A",
    rosaEscuro: "#C61770",
    linha: "#9ADDF8",
    sombra: "rgba(20, 91, 140, .18)"
  },

  /* Variáveis de desenho */
  dimensoes: {
    raioCartao: "24px",
    raioBotao: "18px",
    raioPequeno: "12px",
    larguraMaxima: "1500px",
    espaco: "18px"
  },

  /*
   * As imagens são SVGs embutidos.
   * Assim, não dependem de ficheiros externos e continuam
   * centralizadas neste único ficheiro de dados.
   */
  imagens: {
    sol: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g fill="none" stroke="#FFB914" stroke-width="7" stroke-linecap="round">
          <path d="M50 5v13M50 82v13M5 50h13M82 50h13M18 18l9 9M73 73l9 9M82 18l-9 9M27 73l-9 9"/>
        </g>
        <circle cx="50" cy="50" r="25" fill="#FFD84A" stroke="#F39A00" stroke-width="5"/>
        <circle cx="42" cy="45" r="3" fill="#6B4A20"/>
        <circle cx="58" cy="45" r="3" fill="#6B4A20"/>
        <path d="M43 57q7 7 14 0" fill="none" stroke="#6B4A20" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `),

    home: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M16 45 50 16l34 29v39H59V60H41v24H16z" fill="#fff"/>
        <path d="M11 47 50 13l39 34" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `),

    settings: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path fill="#fff" d="M44 7h12l3 11q6 2 10 6l10-5 8 8-5 10q4 5 6 11l11 3v12l-11 3q-2 6-6 11l5 10-8 8-10-5q-5 4-11 6l-3 11H44l-3-11q-6-2-11-6l-10 5-8-8 5-10q-4-5-6-11L0 63V51l11-3q2-6 6-11l-5-10 8-8 10 5q5-4 11-6z"/>
        <circle cx="50" cy="57" r="14" fill="none" stroke="#0B76C8" stroke-width="8"/>
      </svg>
    `),

    preEscolar: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <circle cx="60" cy="65" r="35" fill="#A86B3D"/>
        <circle cx="31" cy="37" r="18" fill="#A86B3D"/>
        <circle cx="89" cy="37" r="18" fill="#A86B3D"/>
        <circle cx="32" cy="37" r="9" fill="#F0B06A"/>
        <circle cx="88" cy="37" r="9" fill="#F0B06A"/>
        <ellipse cx="60" cy="68" rx="21" ry="18" fill="#D99657"/>
        <circle cx="48" cy="60" r="4" fill="#342018"/>
        <circle cx="72" cy="60" r="4" fill="#342018"/>
        <ellipse cx="60" cy="68" rx="7" ry="5" fill="#342018"/>
        <path d="M53 76q7 8 14 0" fill="none" stroke="#342018" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `),

    primeiro: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <rect x="24" y="20" width="72" height="82" rx="10" fill="#0B76C8"/>
        <rect x="29" y="25" width="62" height="72" rx="7" fill="#fff"/>
        <rect x="38" y="33" width="22" height="22" rx="4" fill="#2BC5F6"/>
        <rect x="64" y="33" width="22" height="22" rx="4" fill="#1FC84A"/>
        <rect x="38" y="60" width="22" height="22" rx="4" fill="#FFB914"/>
        <rect x="64" y="60" width="22" height="22" rx="4" fill="#F5339A"/>
        <text x="49" y="50" text-anchor="middle" font-size="18" font-weight="800" fill="#0B76C8">1</text>
        <text x="75" y="50" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">2</text>
        <text x="49" y="77" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">2</text>
        <text x="75" y="77" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">3</text>
      </svg>
    `),

    segundo: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <path d="M22 31 51 17l17 9-29 15z" fill="#31BDF0"/>
        <path d="M22 31v58l29 14V45z" fill="#238DD5"/>
        <path d="M51 17v28l29-15V29z" fill="#72D8F7"/>
        <path d="M51 45 80 30v58l-29 15z" fill="#fff"/>
        <path d="M33 53h31M33 64h31M33 75h20" stroke="#1A72B6" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `),

    terceiro: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <path d="M15 82c19-31 25-48 46-54 17-5 28 5 44 27" fill="none" stroke="#159D3A" stroke-width="9" stroke-linecap="round"/>
        <path d="M21 91c18-16 30-18 48-17 14 1 25 5 31 10" fill="none" stroke="#159D3A" stroke-width="9" stroke-linecap="round"/>
        <circle cx="80" cy="48" r="26" fill="#39BEEB" stroke="#fff" stroke-width="4"/>
        <path d="M66 39q14 12 27 0M62 51q18 13 36 0M68 62q12 8 25 0" fill="none" stroke="#43C83E" stroke-width="4"/>
      </svg>
    `),

    quarto: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="43" fill="#4DBDEB"/>
        <path d="M60 18c-9 17-8 31 0 42 8-11 9-25 0-42zM102 60c-17-9-31-8-42 0 11 8 25 9 42 0zM60 102c9-17 8-31 0-42-8 11-9 25 0 42zM18 60c17 9 31 8 42 0-11-8-25-9-42 0z" fill="#48C83D"/>
        <path d="M40 82q20 12 40-2" fill="none" stroke="#1D8D3B" stroke-width="7" stroke-linecap="round"/>
      </svg>
    `),

    estrelas: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="m50 8 10 26 28 2-22 18 7 28-23-15-23 15 7-28-22-18 28-2z" fill="#FFB914" stroke="#E38C00" stroke-width="5" stroke-linejoin="round"/>
      </svg>
    `),

    info: svg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="43" fill="#0B76C8"/>
        <text x="50" y="69" text-anchor="middle" font-size="64" font-weight="900" fill="#fff">i</text>
      </svg>
    `)
  },

  anos: [
    {
      id: "pre-escolar",
      nome: "Pré-Escolar",
      idade: "3 – 5 anos",
      cor: "#FFB914",
      corEscura: "#EF7E12",
      imagem: "preEscolar",
      destino: "pre-escolar.html"
    },
    {
      id: "1-ano",
      nome: "1.º Ano",
      idade: "6 – 7 anos",
      cor: "#13B7F1",
      corEscura: "#0B76C8",
      imagem: "primeiro",
      destino: "ano-1.html"
    },
    {
      id: "2-ano",
      nome: "2.º Ano",
      idade: "7 – 8 anos",
      cor: "#43C83E",
      corEscura: "#159D3A",
      imagem: "segundo",
      destino: "ano-2.html"
    },
    {
      id: "3-ano",
      nome: "3.º Ano",
      idade: "8 – 9 anos",
      cor: "#A54BEF",
      corEscura: "#7130B7",
      imagem: "terceiro",
      destino: "ano-3.html"
    },
    {
      id: "4-ano",
      nome: "4.º Ano",
      idade: "9 – 10 anos",
      cor: "#F5339A",
      corEscura: "#C61770",
      imagem: "quarto",
      destino: "ano-4.html"
    }
  ]
};


/* ============================================================
   CSS — também centralizado neste ficheiro
   ============================================================ */
const CSS = `
:root {
  --fundo: ${DADOS.cores.fundo};
  --fundo-topo: ${DADOS.cores.fundoTopo};
  --branco: ${DADOS.cores.branco};
  --texto: ${DADOS.cores.texto};
  --texto-2: ${DADOS.cores.textoSecundario};
  --linha: ${DADOS.cores.linha};
  --sombra: ${DADOS.cores.sombra};
  --raio: ${DADOS.dimensoes.raioCartao};
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Trebuchet MS", "Arial Rounded MT Bold", Arial, sans-serif;
  background: var(--fundo);
  color: var(--texto);
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

button {
  font: inherit;
}

.app {
  position: relative;
  width: min(100%, ${DADOS.dimensoes.larguraMaxima});
  min-height: 100vh;
  margin: 0 auto;
  padding: 22px 22px 18px;
  background:
    radial-gradient(circle at 12% 4%, rgba(255,255,255,.95) 0 38px, transparent 39px),
    radial-gradient(circle at 17% 7%, rgba(255,255,255,.85) 0 50px, transparent 51px),
    linear-gradient(180deg, var(--fundo-topo) 0 31%, var(--fundo) 62%);
}

.topbar {
  min-height: 88px;
  display: grid;
  grid-template-columns: 72px 1fr 72px;
  align-items: center;
  gap: 16px;
}

.round-button {
  width: 64px;
  height: 64px;
  border: 3px solid rgba(255,255,255,.65);
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 5px 12px var(--sombra);
  transition: transform .15s ease, filter .15s ease;
}

.round-button:hover {
  transform: translateY(-2px) scale(1.03);
  filter: brightness(1.06);
}

.home-button {
  background: linear-gradient(180deg, #168AD6, #0863A9);
}

.settings-button {
  justify-self: end;
  background: linear-gradient(180deg, #168AD6, #0863A9);
}

.round-button img {
  width: 38px;
  height: 38px;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #07559A;
  text-align: left;
}

.brand-image {
  width: 68px;
  height: 68px;
  flex: 0 0 68px;
}

.brand-image img {
  width: 100%;
  height: 100%;
}

.brand h1 {
  margin: 0;
  font-size: clamp(28px, 3.1vw, 45px);
  line-height: 1;
  letter-spacing: -.8px;
  text-shadow: 0 2px 0 rgba(255,255,255,.75);
}

.brand p {
  margin: 6px 0 0;
  font-size: clamp(13px, 1.25vw, 19px);
  font-weight: 800;
}

.hero {
  position: relative;
  text-align: center;
  margin: 8px auto 28px;
  max-width: 800px;
}

.hero h2 {
  display: inline-block;
  margin: 0;
  padding: 10px 30px;
  border-radius: 18px;
  background: linear-gradient(#FFFBEA, #FFEFC4);
  border: 2px solid rgba(235, 153, 18, .42);
  color: #79450C;
  font-size: clamp(18px, 2vw, 29px);
  box-shadow: 0 4px 10px rgba(124, 83, 16, .12);
}

.hero p {
  margin: 8px 0 0;
  color: #0D619C;
  font-size: 14px;
  font-weight: 700;
}

.year-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${DADOS.dimensoes.espaco};
  align-items: stretch;
  max-width: 1420px;
  margin: 0 auto 28px;
}

.year-card {
  min-width: 0;
}

.year-card-button {
  width: 100%;
  min-height: 350px;
  border: 3px solid rgba(255,255,255,.9);
  border-radius: var(--raio);
  padding: 25px 16px 22px;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  box-shadow:
    0 9px 16px var(--sombra),
    inset 0 1px 0 rgba(255,255,255,.6);
  position: relative;
  overflow: hidden;
  transition: transform .17s ease, box-shadow .17s ease;
}

.year-card-button::before {
  content: "";
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: rgba(255,255,255,.18);
  top: -62px;
  right: -38px;
}

.year-card-button:hover {
  transform: translateY(-5px);
  box-shadow:
    0 14px 24px rgba(20,91,140,.24),
    inset 0 1px 0 rgba(255,255,255,.7);
}

.year-image {
  width: min(56%, 160px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  margin-bottom: 12px;
  filter: drop-shadow(0 6px 3px rgba(0,0,0,.13));
}

.year-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.year-name {
  position: relative;
  font-size: clamp(19px, 2vw, 29px);
  line-height: 1.05;
  font-weight: 900;
  text-shadow: 0 2px 1px rgba(0,0,0,.15);
  text-align: center;
}

.year-age {
  position: relative;
  font-size: clamp(14px, 1.4vw, 19px);
  font-weight: 800;
  opacity: .98;
}

.bottom-bar {
  max-width: 1420px;
  margin: 0 auto;
  padding: 12px 18px;
  min-height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 16px;
  border: 2px solid var(--linha);
  border-radius: 16px;
  background: rgba(255,255,255,.82);
  box-shadow: 0 5px 14px rgba(20,91,140,.09);
}

.bottom-message,
.bottom-info {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 800;
}

.bottom-info {
  justify-content: flex-end;
  color: var(--texto-2);
}

.bottom-icon,
.info-icon {
  width: 29px;
  height: 29px;
  flex: 0 0 29px;
}

.bottom-icon img,
.info-icon img {
  width: 100%;
  height: 100%;
}

@media (max-width: 1050px) {
  .year-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .year-card-button {
    min-height: 300px;
  }
}

@media (max-width: 700px) {
  .app {
    padding: 12px;
  }

  .topbar {
    grid-template-columns: 52px 1fr 52px;
    min-height: 70px;
  }

  .round-button {
    width: 48px;
    height: 48px;
  }

  .round-button img {
    width: 29px;
    height: 29px;
  }

  .brand-image {
    width: 50px;
    height: 50px;
    flex-basis: 50px;
  }

  .brand {
    gap: 7px;
  }

  .brand h1 {
    font-size: 23px;
  }

  .brand p {
    font-size: 10px;
  }

  .hero {
    margin-bottom: 17px;
  }

  .year-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .year-card-button {
    min-height: 235px;
    padding: 16px 8px;
    border-radius: 18px;
  }

  .year-image {
    width: 90px;
    margin-bottom: 4px;
  }

  .bottom-bar {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .bottom-info {
    justify-content: flex-start;
  }
}

@media (max-width: 430px) {
  .year-grid {
    grid-template-columns: 1fr;
  }

  .year-card-button {
    min-height: 185px;
    flex-direction: row;
    justify-content: flex-start;
    padding: 14px 22px;
  }

  .year-image {
    width: 90px;
    flex-basis: 90px;
    margin: 0;
  }

  .year-name,
  .year-age {
    text-align: left;
  }
}
`;


/* ============================================================
   Motor da página
   ============================================================ */

function svg(markup) {
  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(markup.trim());
}

function criarImagem(nome, classe = "") {
  const img = document.createElement("img");
  img.src = DADOS.imagens[nome];
  img.alt = "";
  img.className = classe;
  img.draggable = false;
  return img;
}

function aplicarEstilos() {
  const style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);
}

function preencherTexto() {
  document.querySelector("[data-brand-title]").textContent = DADOS.pagina.titulo;
  document.querySelector("[data-brand-subtitle]").textContent = DADOS.pagina.subtitulo;
  document.querySelector("[data-page-title]").textContent = DADOS.pagina.tituloMenu;
  document.querySelector("[data-page-subtitle]").textContent = DADOS.pagina.subtituloMenu;
  document.querySelector("[data-footer-message]").textContent = DADOS.pagina.mensagemRodape;
  document.querySelector("[data-footer-info]").textContent = DADOS.pagina.infoRodape;
}

function preencherImagensFixas() {
  document.querySelector(".home-button").appendChild(criarImagem("home"));
  document.querySelector(".settings-button").appendChild(criarImagem("settings"));
  document.querySelector(".brand-image").appendChild(criarImagem("sol"));
  document.querySelector(".bottom-icon").appendChild(criarImagem("estrelas"));
  document.querySelector(".info-icon").appendChild(criarImagem("info"));
}

function criarCartoes() {
  const grid = document.querySelector(".year-grid");
  const template = document.querySelector("#year-card-template");

  DADOS.anos.forEach((ano) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".year-card");
    const button = fragment.querySelector(".year-card-button");

    card.dataset.ano = ano.id;
    button.dataset.destino = ano.destino;
    button.style.background =
      `linear-gradient(155deg, ${ano.cor} 0%, ${ano.corEscura} 100%)`;

    fragment.querySelector(".year-image").appendChild(criarImagem(ano.imagem));
    fragment.querySelector(".year-name").textContent = ano.nome;
    fragment.querySelector(".year-age").textContent = ano.id === "pre-escolar"
      ? ano.idade
      : ano.idade;

    button.addEventListener("click", () => {
      // Mantém a navegação preparada; se a página ainda não existir,
      // não quebra o menu.
      if (ano.destino) {
        window.location.href = ano.destino;
      }
    });

    grid.appendChild(fragment);
  });
}

function ligarAcoes() {
  document.querySelector('[data-action="home"]').addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.querySelector('[data-action="settings"]').addEventListener("click", () => {
    // Ponto de extensão para o futuro ecrã de definições.
    document.dispatchEvent(new CustomEvent("abrir-definicoes"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarEstilos();
  preencherTexto();
  preencherImagensFixas();
  criarCartoes();
  ligarAcoes();
});
