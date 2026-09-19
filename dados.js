/*
================================================================
  RECURSOS DO CÃO — DADOS E APRESENTAÇÃO DO MENU PRINCIPAL
================================================================

  index.html = apenas estrutura.

  Este ficheiro contém:
  - textos
  - cores
  - dimensões
  - sombras
  - fundos
  - nomes/caminhos dos icons
  - definição dos 5 cartões
  - CSS
  - comportamento de navegação

  ICONS:
    /icons/iconpre.png
    /icons/icon1.png
    /icons/icon2.png
    /icons/icon3.png
    /icons/icon4.png

  Os botões mantêm SEMPRE a proporção 16:9.
  No telemóvel, tablet e computador a proporção do cartão
  não é alterada; apenas muda o número de colunas.
*/

const DADOS = {

  pagina: {
    titulo: "Recursos do Cão",
    subtitulo: "Aprender • Explorar • Descobrir",

    tituloMenu: "Escolha o ano",

    mensagem: "Escolha o ano e comece a aprender!",
    informacao: "Recursos educativos para o 1.º ciclo"
  },

  /* ==========================================================
     CORES
     ========================================================== */
  cores: {
    fundo: "#EAF8FF",

    ceuTopo: "#68D9F7",
    ceuMeio: "#AEEFFF",

    texto: "#07589B",
    textoClaro: "#FFFFFF",

    amarelo: "#FFB91A",
    amareloEscuro: "#ED8B0C",

    azul: "#19B9F0",
    azulEscuro: "#0879C8",

    verde: "#45C83D",
    verdeEscuro: "#169B3A",

    roxo: "#A94BED",
    roxoEscuro: "#7332B7",

    rosa: "#F4379C",
    rosaEscuro: "#C71870",

    creme: "#FFF8DD",
    cremeEscuro: "#F4D993",

    linha: "#A4DFF8",

    sombra: "rgba(7, 87, 145, .22)",
    sombraForte: "rgba(7, 87, 145, .30)"
  },

  /* ==========================================================
     IMAGENS
     ========================================================== */
  imagens: {
    pre: "icons/iconpre.png",
    ano1: "icons/icon1.png",
    ano2: "icons/icon2.png",
    ano3: "icons/icon3.png",
    ano4: "icons/icon4.png"
  },

  /* ==========================================================
     DIMENSÕES
     ========================================================== */
  dimensoes: {
    larguraMaxima: 1500,

    /* Os cartões são obrigatoriamente 16:9 */
    proporcaoCartao: "16 / 9",

    raioCartao: 22,
    raioTitulo: 16,

    espacamentoCartoes: 13,

    alturaCabecalho: 88
  },

  /* ==========================================================
     ANOS
     ========================================================== */
  anos: [
    {
      id: "pre",
      nome: "Pré-Escolar",
      idade: "3 – 5 anos",
      icon: "pre",
      cor: "#FFB91A",
      cor2: "#ED8B0C",
      pagina: "pre-escolar.html"
    },
    {
      id: "ano1",
      nome: "1.º Ano",
      idade: "6 – 7 anos",
      icon: "ano1",
      cor: "#19B9F0",
      cor2: "#0879C8",
      pagina: "ano-1.html"
    },
    {
      id: "ano2",
      nome: "2.º Ano",
      idade: "7 – 8 anos",
      icon: "ano2",
      cor: "#45C83D",
      cor2: "#169B3A",
      pagina: "ano-2.html"
    },
    {
      id: "ano3",
      nome: "3.º Ano",
      idade: "8 – 9 anos",
      icon: "ano3",
      cor: "#A94BED",
      cor2: "#7332B7",
      pagina: "ano-3.html"
    },
    {
      id: "ano4",
      nome: "4.º Ano",
      idade: "9 – 10 anos",
      icon: "ano4",
      cor: "#F4379C",
      cor2: "#C71870",
      pagina: "ano-4.html"
    }
  ]
};


/* ============================================================
   CSS
   ============================================================ */

const CSS = `
:root {
  --fundo: ${DADOS.cores.fundo};
  --ceu-topo: ${DADOS.cores.ceuTopo};
  --ceu-meio: ${DADOS.cores.ceuMeio};

  --texto: ${DADOS.cores.texto};
  --branco: ${DADOS.cores.textoClaro};

  --amarelo: ${DADOS.cores.amarelo};
  --azul: ${DADOS.cores.azul};
  --verde: ${DADOS.cores.verde};
  --roxo: ${DADOS.cores.roxo};
  --rosa: ${DADOS.cores.rosa};

  --creme: ${DADOS.cores.creme};
  --creme-escuro: ${DADOS.cores.cremeEscuro};

  --linha: ${DADOS.cores.linha};
  --sombra: ${DADOS.cores.sombra};
  --sombra-forte: ${DADOS.cores.sombraForte};

  --raio: ${DADOS.dimensoes.raioCartao}px;
  --espaco: ${DADOS.dimensoes.espacamentoCartoes}px;
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--fundo);
}

body {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;

  font-family:
    "Trebuchet MS",
    "Arial Rounded MT Bold",
    Arial,
    sans-serif;

  color: var(--texto);
  background: var(--fundo);
}

button {
  font: inherit;
}

#app {
  width: min(100%, ${DADOS.dimensoes.larguraMaxima}px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 16px 18px 17px;

  position: relative;
  overflow: hidden;

  background:
    radial-gradient(
      ellipse at 14% 3%,
      rgba(255,255,255,.95) 0 40px,
      transparent 41px
    ),
    radial-gradient(
      ellipse at 20% 5%,
      rgba(255,255,255,.80) 0 56px,
      transparent 57px
    ),
    radial-gradient(
      ellipse at 78% 8%,
      rgba(255,255,255,.55) 0 48px,
      transparent 49px
    ),
    linear-gradient(
      180deg,
      var(--ceu-topo) 0%,
      var(--ceu-meio) 25%,
      var(--fundo) 48%,
      var(--fundo) 100%
    );
}

/* ============================================================
   CABEÇALHO
   ============================================================ */

.cabecalho {
  height: ${DADOS.dimensoes.alturaCabecalho}px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 2;
}

.marca {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
}

.marca-sol {
  width: 64px;
  height: 64px;
  position: relative;
  flex: 0 0 64px;
}

.marca-sol::before {
  content: "☀";
  position: absolute;
  inset: 0;

  display: grid;
  place-items: center;

  color: #FFB91A;
  font-size: 67px;
  line-height: 1;

  filter:
    drop-shadow(0 2px 0 rgba(255,255,255,.8))
    drop-shadow(0 3px 2px rgba(100,80,0,.14));
}

.marca-texto {
  text-align: left;
}

.marca-texto h1 {
  margin: 0;

  color: #07599E;

  font-size: clamp(28px, 3.15vw, 46px);
  line-height: .98;
  font-weight: 900;
  letter-spacing: -.9px;

  text-shadow: 0 2px 0 rgba(255,255,255,.85);
}

.marca-texto p {
  margin: 6px 0 0;

  color: #0964A8;

  font-size: clamp(13px, 1.25vw, 19px);
  line-height: 1;
  font-weight: 800;
}

/* ============================================================
   ÁREA DO MENU
   ============================================================ */

.area-menu {
  position: relative;
  z-index: 1;

  width: 100%;
}

.titulo-menu {
  width: fit-content;
  margin: 4px auto 20px;
  padding: 8px 30px 9px;

  border: 2px solid rgba(222, 157, 39, .45);
  border-radius: var(--raioTitulo);

  background:
    linear-gradient(
      180deg,
      #FFFDEB 0%,
      var(--creme) 100%
    );

  box-shadow:
    0 3px 7px rgba(118, 88, 17, .13),
    inset 0 1px 0 rgba(255,255,255,.9);

  position: relative;
}

.titulo-menu::before,
.titulo-menu::after {
  content: "✦";

  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  color: rgba(255,255,255,.65);
  font-size: 19px;
}

.titulo-menu::before {
  left: -38px;
}

.titulo-menu::after {
  right: -38px;
}

.titulo-menu h2 {
  margin: 0;

  color: #74440C;

  font-size: clamp(17px, 1.75vw, 27px);
  line-height: 1;
  font-weight: 900;
  text-align: center;
}

/* pequenos elementos decorativos do céu */
.decoracao {
  position: absolute;
  pointer-events: none;
  opacity: .72;
}

.decoracao-esquerda {
  left: 1%;
  top: 2px;
  width: 65px;
  height: 45px;

  background:
    radial-gradient(circle at 20% 70%, #fff 0 12px, transparent 13px),
    radial-gradient(circle at 48% 48%, #fff 0 19px, transparent 20px),
    radial-gradient(circle at 77% 70%, #fff 0 13px, transparent 14px);
}

.decoracao-direita {
  right: 2%;
  top: 0;
  width: 85px;
  height: 65px;

  opacity: .32;

  background:
    radial-gradient(circle at 25% 50%, #fff 0 7px, transparent 8px),
    radial-gradient(circle at 50% 35%, #fff 0 12px, transparent 13px),
    radial-gradient(circle at 76% 55%, #fff 0 9px, transparent 10px);
}

/* ============================================================
   GRELHA DOS 5 CARTÕES
   ============================================================ */

.anos {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: var(--espaco);

  align-items: start;
}

.ano {
  min-width: 0;
}

/*
  IMPORTANTE:
  aspect-ratio: 16 / 9 é mantido em todos os tamanhos.
  Não usamos alturas fixas nos botões.
*/
.botao-ano {
  width: 100%;
  aspect-ratio: ${DADOS.dimensoes.proporcaoCartao};

  min-width: 0;
  min-height: 0;

  padding: clamp(10px, 1.35vw, 19px);

  border: 3px solid rgba(255,255,255,.92);
  border-radius: var(--raio);

  color: #fff;

  display: grid;
  grid-template-columns: 31% 1fr;
  grid-template-rows: 1fr auto;
  column-gap: 4%;
  align-items: center;

  position: relative;
  overflow: hidden;

  cursor: pointer;

  background: linear-gradient(
    145deg,
    var(--cor-1),
    var(--cor-2)
  );

  box-shadow:
    0 8px 13px var(--sombra),
    inset 0 1px 1px rgba(255,255,255,.68),
    inset 0 -2px 5px rgba(0,0,0,.08);

  transition:
    transform .16s ease,
    box-shadow .16s ease,
    filter .16s ease;
}

/* brilho e decoração */
.botao-ano::before {
  content: "";

  position: absolute;
  width: 130%;
  height: 140%;
  left: -75%;
  top: -85%;

  border-radius: 50%;

  background: rgba(255,255,255,.13);
  pointer-events: none;
}

.botao-ano::after {
  content: "";

  position: absolute;
  width: 65px;
  height: 65px;
  right: -25px;
  top: -27px;

  border-radius: 50%;

  background: rgba(255,255,255,.12);
  pointer-events: none;
}

.botao-ano:hover {
  transform: translateY(-4px);

  box-shadow:
    0 12px 18px var(--sombra-forte),
    inset 0 1px 1px rgba(255,255,255,.72);
}

.botao-ano:active {
  transform: translateY(-1px) scale(.99);
}

/* ============================================================
   ICONS DOS ANOS
   ============================================================ */

.icone-ano {
  width: 100%;
  height: 100%;

  min-width: 0;
  min-height: 0;

  display: grid;
  place-items: center;

  position: relative;
  z-index: 1;
}

.icone-ano img {
  width: min(100%, 150px);
  height: min(100%, 150px);

  object-fit: contain;

  display: block;

  filter:
    drop-shadow(0 5px 3px rgba(0,0,0,.17));
}

/* ============================================================
   TEXTO DOS CARTÕES
   ============================================================ */

.nome-ano {
  position: relative;
  z-index: 1;

  align-self: end;

  font-size: clamp(16px, 1.55vw, 24px);
  line-height: 1.05;
  font-weight: 900;

  text-align: left;

  text-shadow: 0 2px 1px rgba(0,0,0,.18);
}

.idade-ano {
  grid-column: 2;
  grid-row: 2;

  position: relative;
  z-index: 1;

  font-size: clamp(11px, 1.1vw, 16px);
  line-height: 1;

  font-weight: 800;

  text-align: left;

  text-shadow: 0 1px 1px rgba(0,0,0,.12);
}

/* ============================================================
   RODAPÉ
   ============================================================ */

.rodape {
  width: 100%;
  min-height: 54px;

  margin-top: 23px;
  padding: 9px 17px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: center;

  border: 2px solid var(--linha);
  border-radius: 15px;

  background: rgba(255,255,255,.78);

  box-shadow:
    0 4px 10px rgba(16,103,150,.08),
    inset 0 1px 0 rgba(255,255,255,.9);

  font-size: clamp(11px, 1vw, 14px);
  font-weight: 800;
}

.rodape-item {
  display: flex;
  align-items: center;
  gap: 8px;

  min-width: 0;
}

.rodape-info {
  justify-content: flex-end;
  color: #16649D;
}

.estrela {
  width: 26px;
  height: 26px;
  flex: 0 0 26px;

  position: relative;
}

.estrela::before {
  content: "★";

  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;

  color: #FFB91A;

  font-size: 27px;
  line-height: 1;

  text-shadow:
    0 1px 0 #D98600,
    0 2px 2px rgba(90,65,0,.13);
}

.info {
  width: 25px;
  height: 25px;
  flex: 0 0 25px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  color: #fff;
  background: #0879C8;

  font-family: Arial, sans-serif;
  font-size: 17px;
  font-weight: 900;
}

/* ============================================================
   TABLET HORIZONTAL
   ============================================================

   Mantemos os 5 cartões lado a lado quando há largura suficiente.
   O aspect-ratio 16:9 continua intacto.
*/
@media (max-width: 1100px) and (min-width: 701px) {
  #app {
    padding-left: 14px;
    padding-right: 14px;
  }

  .anos {
    gap: 9px;
  }

  .botao-ano {
    padding: 8px;
    border-width: 2px;
  }

  .nome-ano {
    font-size: clamp(13px, 1.75vw, 19px);
  }

  .idade-ano {
    font-size: clamp(9px, 1.25vw, 13px);
  }

  .rodape {
    margin-top: 16px;
  }
}

/* ============================================================
   TABLET VERTICAL / ECRÃ MÉDIO
   ============================================================ */

@media (max-width: 900px) and (min-width: 601px) {
  .anos {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 13px;
  }

  .botao-ano {
    grid-template-columns: 34% 1fr;
  }

  .nome-ano {
    font-size: clamp(15px, 2.25vw, 22px);
  }

  .idade-ano {
    font-size: clamp(10px, 1.55vw, 14px);
  }
}

/* ============================================================
   TELEMÓVEL
   ============================================================ */

@media (max-width: 600px) {
  #app {
    padding: 9px 10px 12px;

    background:
      radial-gradient(
        ellipse at 12% 2%,
        rgba(255,255,255,.9) 0 30px,
        transparent 31px
      ),
      linear-gradient(
        180deg,
        var(--ceu-topo) 0%,
        var(--ceu-meio) 21%,
        var(--fundo) 40%
      );
  }

  .cabecalho {
    height: 64px;
  }

  .marca {
    gap: 7px;
  }

  .marca-sol {
    width: 46px;
    height: 46px;
    flex-basis: 46px;
  }

  .marca-sol::before {
    font-size: 49px;
  }

  .marca-texto h1 {
    font-size: 25px;
    letter-spacing: -.5px;
  }

  .marca-texto p {
    margin-top: 4px;
    font-size: 10px;
  }

  .titulo-menu {
    margin: 3px auto 13px;
    padding: 7px 22px 8px;
    border-radius: 13px;
  }

  .titulo-menu h2 {
    font-size: 17px;
  }

  .titulo-menu::before,
  .titulo-menu::after {
    display: none;
  }

  .anos {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px;
  }

  /*
    O cartão continua 16:9.
    Nunca é transformado num botão quadrado.
  */
  .botao-ano {
    aspect-ratio: 16 / 9;

    padding: 7px 8px;

    border-width: 2px;
    border-radius: 15px;

    grid-template-columns: 33% 1fr;
    column-gap: 5%;
  }

  .icone-ano img {
    width: 100%;
    height: 100%;
  }

  .nome-ano {
    font-size: clamp(13px, 4vw, 18px);
  }

  .idade-ano {
    font-size: clamp(9px, 2.8vw, 12px);
  }

  .rodape {
    margin-top: 13px;
    padding: 7px 9px;

    min-height: 0;

    grid-template-columns: 1fr;
    gap: 5px;

    border-radius: 12px;

    font-size: 10px;
  }

  .rodape-info {
    justify-content: flex-start;
  }

  .estrela,
  .info {
    transform: scale(.82);
    transform-origin: left center;
  }
}

/* ============================================================
   TELEMÓVEL MUITO PEQUENO
   ============================================================ */

@media (max-width: 380px) {
  .marca-texto h1 {
    font-size: 22px;
  }

  .marca-texto p {
    font-size: 9px;
  }

  .botao-ano {
    padding: 5px 6px;
  }

  .nome-ano {
    font-size: 12px;
  }

  .idade-ano {
    font-size: 8px;
  }
}

/* Acessibilidade: foco */
.botao-ano:focus-visible {
  outline: 4px solid rgba(255,255,255,.95);
  outline-offset: 3px;
}
`;


/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

function inserirCSS() {
  const style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);
}

function preencherCabecalho() {
  document.querySelector("[data-marca]").textContent =
    DADOS.pagina.titulo;

  document.querySelector("[data-submarca]").textContent =
    DADOS.pagina.subtitulo;

  document.querySelector("[data-titulo-menu]").textContent =
    DADOS.pagina.tituloMenu;

  document.querySelector("[data-mensagem]").textContent =
    DADOS.pagina.mensagem;

  document.querySelector("[data-informacao]").textContent =
    DADOS.pagina.informacao;
}

function criarCartoes() {
  const zona = document.querySelector("#anos");
  const modelo = document.querySelector("#modelo-ano");

  DADOS.anos.forEach((ano) => {
    const fragmento = modelo.content.cloneNode(true);

    const artigo = fragmento.querySelector(".ano");
    const botao = fragmento.querySelector(".botao-ano");
    const iconBox = fragmento.querySelector(".icone-ano");

    artigo.dataset.ano = ano.id;

    botao.style.setProperty("--cor-1", ano.cor);
    botao.style.setProperty("--cor-2", ano.cor2);

    botao.setAttribute(
      "aria-label",
      `${ano.nome}, ${ano.idade}`
    );

    const imagem = document.createElement("img");
    imagem.src = DADOS.imagens[ano.icon];
    imagem.alt = "";
    imagem.draggable = false;

    iconBox.appendChild(imagem);

    fragmento.querySelector(".nome-ano").textContent =
      ano.nome;

    fragmento.querySelector(".idade-ano").textContent =
      ano.idade;

    botao.addEventListener("click", () => {
      if (ano.pagina) {
        window.location.href = ano.pagina;
      }
    });

    zona.appendChild(fragmento);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inserirCSS();
  preencherCabecalho();
  criarCartoes();
});
