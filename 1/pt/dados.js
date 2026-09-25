/*
================================================================
 RECURSOS COVÃO — DADOS E APRESENTAÇÃO
 Página: 1.º Ano / Português
 Ficheiro: dados.js
================================================================

 Este ficheiro concentra:
 - textos
 - cores
 - dimensões
 - caminhos dos ícones
 - menu dos anos
 - jogos
 - CSS
 - comportamento JavaScript

 O index.html mantém apenas a estrutura da página.
================================================================
*/


/* ================================================================
   DADOS PRINCIPAIS
================================================================ */

const DADOS = {

  /* --------------------------------------------------------------
     INFORMAÇÃO DA PÁGINA
  -------------------------------------------------------------- */

  pagina: {
    titulo: "1.º Ano",
    subtitulo: "Português • Aprender • Explorar • Descobrir",
    tituloMenu: "Escolhe um jogo",
    mensagem: "Escolhe um jogo e começa a aprender!",
    informacao: "Recursos educativos de Português para o 1.º ano"
  },


  /* --------------------------------------------------------------
     ÍCONES
  -------------------------------------------------------------- */

  icons: {

    cabecalho: "../../icons/icon1.png",

    menu: "../../icons/menu.png",

    seta: "../../icons/seta.png",

    menuAnos: {
      inicio: "../../icons/inicio.png",
      pre: "../../icons/iconpre.png",
      ano1: "../../icons/icon1.png",
      ano2: "../../icons/icon2.png",
      ano3: "../../icons/icon3.png",
      ano4: "../../icons/icon4.png"
    },

    jogos: {
      rastros: "../../icons/rastros.png",
      gatosCaes: "../../icons/gatos&caes.png",
      dominorio: "../../icons/dominorio.png",
      semaforo: "../../icons/semaforo.png",
      quelhas: "../../icons/quelhas.png",
      avanco: "../../icons/avanco.png"
    }
  },


  /* --------------------------------------------------------------
     CORES
  -------------------------------------------------------------- */

  cores: {

    fundo: "#EAF5FC",

    ceu1: "#A6EAF8",
    ceu2: "#D4F4FB",

    header: "#D4F4FB",
    headerTopo: "#A6EAF8",

    azulHeader: "#0358A9",

    texto: "#07569A",
    textoEscuro: "#064B8A",

    branco: "#FFFFFF",

    azul: "#20B9EF",
    azul2: "#087AC9",

    amarelo: "#FFBA16",
    amarelo2: "#EF8709",

    verde: "#45C83D",
    verde2: "#169A3A",

    roxo: "#A74BEF",
    roxo2: "#7434B8",

    rosa: "#F43A9D",
    rosa2: "#C81970",

    creme: "#FFF9E1",
    creme2: "#F5D996",

    linha: "#A5D9F8",

    sombra: "rgba(15,88,139,.20)",
    sombraForte: "rgba(15,88,139,.30)"
  },


  /* --------------------------------------------------------------
     DIMENSÕES
  -------------------------------------------------------------- */

  dimensoes: {

    larguraMaxima: 1650,

    alturaJogoDesktop: 250,
    alturaJogoTabletHorizontal: 220,
    alturaJogoTabletVertical: 180,
    alturaJogoTelemovel: 145,

    raioJogo: 23,

    tamanhoIconJogoDesktop: 135,
    tamanhoIconJogoTabletHorizontal: 110,
    tamanhoIconJogoTabletVertical: 92,
    tamanhoIconJogoTelemovel: 72
  },


  /* --------------------------------------------------------------
     MENU DOS ANOS
  -------------------------------------------------------------- */

  menuAnos: [

    {
      id: "inicio",
      nome: "Início",
      icon: "inicio",
      pagina: "../../"
    },

    {
      id: "pre",
      nome: "Pré-Escolar",
      icon: "pre",
      pagina: "../../pre/"
    },

    {
      id: "ano1",
      nome: "1.º Ano",
      icon: "ano1",
      pagina: "../../1/"
    },

    {
      id: "ano2",
      nome: "2.º Ano",
      icon: "ano2",
      pagina: "../../2/"
    },

    {
      id: "ano3",
      nome: "3.º Ano",
      icon: "ano3",
      pagina: "../../3/"
    },

    {
      id: "ano4",
      nome: "4.º Ano",
      icon: "ano4",
      pagina: "../../4/"
    }

  ],


  /* --------------------------------------------------------------
     JOGOS
  -------------------------------------------------------------- */

  jogos: [

    {
      id: "rastros",
      nome: "Rastros",
      descricao: "Lê, pensa e encontra o caminho.",
      icon: "rastros",
      cor: "#20B9EF",
      cor2: "#087AC9",
      pagina: "jogos/rastros/index.html"
    },

    {
      id: "gatosCaes",
      nome: "Gatos & Cães",
      descricao: "Descobre e aprende novas palavras.",
      icon: "gatosCaes",
      cor: "#45C83D",
      cor2: "#169A3A",
      pagina: "jogos/gatos-caes/index.html"
    },

    {
      id: "dominorio",
      nome: "Dominório",
      descricao: "Joga com palavras e associações.",
      icon: "dominorio",
      cor: "#A74BEF",
      cor2: "#7434B8",
      pagina: "jogos/dominio/index.html"
    },

    {
      id: "semaforo",
      nome: "Semáforo",
      descricao: "Lê e decide a resposta certa.",
      icon: "semaforo",
      cor: "#FFBA16",
      cor2: "#EF8709",
      pagina: "jogos/semaforo/index.html"
    },

    {
      id: "quelhas",
      nome: "Quellhas",
      descricao: "Explora palavras de forma divertida.",
      icon: "quelhas",
      cor: "#F43A9D",
      cor2: "#C81970",
      pagina: "jogos/quelhas/index.html"
    },

    {
      id: "avanco",
      nome: "Avanço",
      descricao: "Supera desafios e avança!",
      icon: "avanco",
      cor: "#11CBFC",
      cor2: "#079BC8",
      pagina: "jogos/avanco/index.html"
    }

  ]

};


/* ================================================================
   INSERIR CSS
================================================================ */

function inserirCSS() {

  const estilo = document.createElement("style");

  estilo.textContent = `

  /* ==============================================================
     BASE
  ============================================================== */

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    font-family: "Nunito", Arial, sans-serif;
  }

  body {
    background: ${DADOS.cores.fundo};
  }

  button {
    font-family: inherit;
  }


  /* ==============================================================
     PÁGINA
  ============================================================== */

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    background:
      linear-gradient(
        180deg,
        ${DADOS.cores.ceu1} 0%,
        ${DADOS.cores.ceu2} 28%,
        ${DADOS.cores.fundo} 100%
      );

    color: ${DADOS.cores.texto};
  }


  /* ==============================================================
     CABEÇALHO
  ============================================================== */

  .cabecalho {
    position: relative;

    width: 100%;
    min-height: 88px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 18px;

    background: linear-gradient(
      180deg,
      ${DADOS.cores.headerTopo},
      ${DADOS.cores.header}
    );

    border-bottom: 2px solid rgba(255,255,255,.65);

    z-index: 100;
  }


  /* ==============================================================
     BOTÕES DO CABEÇALHO
  ============================================================== */

  .botao-menu,
  .botao-seta {

    width: 58px;
    height: 58px;

    border: 0;
    border-radius: 50%;

    background: ${DADOS.cores.azulHeader};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    cursor: pointer;

    box-shadow:
      0 4px 10px ${DADOS.cores.sombra};

    transition:
      transform .2s ease,
      box-shadow .2s ease;
  }

  .botao-menu:hover,
  .botao-seta:hover {
    transform: scale(1.05);

    box-shadow:
      0 6px 14px ${DADOS.cores.sombraForte};
  }

  .botao-menu img,
  .botao-seta img {
    width: 56%;
    height: 56%;
    object-fit: contain;
  }


  /* ==============================================================
     MARCA / CENTRO DO CABEÇALHO
  ============================================================== */

  .marca {

    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 0 12px;
  }

  .marca-sol {

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    font-weight: 900;
    color: ${DADOS.cores.azulHeader};
  }

  .marca-sol img {

    width: 42px;
    height: 42px;

    object-fit: contain;
  }

  .marca-sol span {
    font-size: 22px;
  }

  .marca-subtitulo {

    margin-top: 2px;

    font-size: 14px;
    font-weight: 700;

    color: ${DADOS.cores.texto};
  }


  /* ==============================================================
     MENU ACORDEÃO
  ============================================================== */

  .menu-acordeao {

    position: absolute;

    top: calc(100% + 8px);
    left: 15px;

    width: 300px;

    display: none;

    background: rgba(255,255,255,.98);

    border-radius: 18px;

    padding: 10px;

    box-shadow:
      0 8px 25px rgba(0,0,0,.20);

    border: 2px solid ${DADOS.cores.linha};

    z-index: 500;
  }

  .menu-acordeao.aberto {
    display: block;
  }

  .menu-anos {

    display: flex;
    flex-direction: column;

    gap: 6px;
  }

  .item-menu-ano {

    width: 100%;

    display: flex;
    align-items: center;

    gap: 12px;

    padding: 9px 12px;

    border: 0;
    border-radius: 13px;

    background: transparent;

    color: ${DADOS.cores.textoEscuro};

    font-size: 16px;
    font-weight: 800;

    cursor: pointer;

    text-align: left;

    transition:
      background .2s ease,
      transform .2s ease;
  }

  .item-menu-ano:hover {

    background: ${DADOS.cores.ceu2};

    transform: translateX(3px);
  }

  .item-menu-ano img {

    width: 42px;
    height: 42px;

    object-fit: contain;
  }


  /* ==============================================================
     ÁREA PRINCIPAL
  ============================================================== */

  .area-menu {

    flex: 1;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 0 30px;
  }


  /* ==============================================================
     TÍTULO
  ============================================================== */

  .titulo-menu {

    margin: 20px 0 22px;

    padding: 8px 30px;

    border-radius: 18px;

    background:
      linear-gradient(
        180deg,
        ${DADOS.cores.creme},
        ${DADOS.cores.creme2}
      );

    color: ${DADOS.cores.textoEscuro};

    font-size: 24px;
    font-weight: 900;

    text-align: center;

    box-shadow:
      0 4px 10px ${DADOS.cores.sombra};
  }


  /* ==============================================================
     GRELHA DOS JOGOS
  ============================================================== */

  .anos {

    width: 90%;
    max-width: ${DADOS.dimensoes.larguraMaxima}px;

    display: grid;

    grid-template-columns: repeat(6, 1fr);

    gap: 18px;

    justify-items: center;
  }


  /* ==============================================================
     CARTÕES DOS JOGOS
  ============================================================== */

  .ano {

    width: 100%;
  }

  .botao-ano {

    width: 100%;
    height: ${DADOS.dimensoes.alturaJogoDesktop}px;

    border: 4px solid ${DADOS.cores.branco};

    border-radius: ${DADOS.dimensoes.raioJogo}px;

    background:
      linear-gradient(
        145deg,
        var(--cor-1),
        var(--cor-2)
      );

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 14px;

    color: ${DADOS.cores.branco};

    cursor: pointer;

    box-shadow:
      0 7px 15px ${DADOS.cores.sombraForte};

    transition:
      transform .2s ease,
      box-shadow .2s ease;
  }

  .botao-ano:hover {

    transform: translateY(-4px);

    box-shadow:
      0 11px 22px ${DADOS.cores.sombraForte};
  }

  .icone-ano {

    width: ${DADOS.dimensoes.tamanhoIconJogoDesktop}px;
    height: ${DADOS.dimensoes.tamanhoIconJogoDesktop}px;

    object-fit: contain;

    flex-shrink: 0;
  }

  .texto-ano {

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
  }

  .nome-ano {

    font-size: 23px;
    line-height: 1.1;

    font-weight: 900;

    text-shadow:
      0 2px 3px rgba(0,0,0,.15);
  }

  .idade-ano {

    margin-top: 4px;

    font-size: 14px;
    line-height: 1.2;

    font-weight: 700;

    opacity: .96;
  }


  /* ==============================================================
     RODAPÉ
  ============================================================== */

  footer {

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3px;

    padding: 14px 15px 18px;

    text-align: center;

    color: ${DADOS.cores.texto};

    font-size: 13px;
    font-weight: 700;
  }

  footer [data-mensagem] {
    font-size: 15px;
    font-weight: 900;
  }


  /* ==============================================================
     TABLET — HORIZONTAL
  ============================================================== */

  @media (max-width: 1200px) and (orientation: landscape) {

    .anos {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .botao-ano {
      height: ${DADOS.dimensoes.alturaJogoTabletHorizontal}px;
    }

    .icone-ano {
      width: ${DADOS.dimensoes.tamanhoIconJogoTabletHorizontal}px;
      height: ${DADOS.dimensoes.tamanhoIconJogoTabletHorizontal}px;
    }

    .nome-ano {
      font-size: 20px;
    }

    .idade-ano {
      font-size: 13px;
    }
  }


  /* ==============================================================
     TELEMÓVEL — HORIZONTAL
  ============================================================== */

  @media (max-width: 900px) and (orientation: landscape) {

    .cabecalho {
      min-height: 72px;
      padding: 7px 12px;
    }

    .botao-menu,
    .botao-seta {
      width: 48px;
      height: 48px;
    }

    .marca-sol img {
      width: 34px;
      height: 34px;
    }

    .marca-sol span {
      font-size: 18px;
    }

    .marca-subtitulo {
      font-size: 11px;
    }

    .area-menu {
      padding-top: 8px;
    }

    .titulo-menu {
      margin: 10px 0 14px;
      font-size: 20px;
      padding: 6px 20px;
    }

    .anos {
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .botao-ano {
      height: 220px;
      padding: 8px;
    }

    .icone-ano {
      width: 82px;
      height: 82px;
    }

    .nome-ano {
      font-size: 17px;
    }

    .idade-ano {
      font-size: 11px;
    }
  }


  /* ==============================================================
     TABLET — VERTICAL
  ============================================================== */

  @media (min-width: 601px) and (max-width: 1200px) and (orientation: portrait) {

    .cabecalho {
      min-height: 82px;
      padding: 9px 12px;
    }

    .botao-menu,
    .botao-seta {
      width: 54px;
      height: 54px;
    }

    .marca-sol img {
      width: 38px;
      height: 38px;
    }

    .marca-sol span {
      font-size: 20px;
    }

    .marca-subtitulo {
      font-size: 12px;
    }

    .titulo-menu {
      margin: 15px 0 18px;
      font-size: 22px;
    }

    .anos {

      width: calc(100% - 10px);

      grid-template-columns: repeat(2, 1fr);

      gap: 10px;
    }

    .botao-ano {

      height: ${DADOS.dimensoes.alturaJogoTabletVertical}px;

      padding: 8px;

      border-width: 4px;
    }

    .icone-ano {

      width: ${DADOS.dimensoes.tamanhoIconJogoTabletVertical}px;
      height: ${DADOS.dimensoes.tamanhoIconJogoTabletVertical}px;
    }

    .nome-ano {
      font-size: 18px;
    }

    .idade-ano {
      font-size: 12px;
    }
  }


  /* ==============================================================
     TELEMÓVEL — VERTICAL
  ============================================================== */

  @media (max-width: 600px) and (orientation: portrait) {

    .cabecalho {

      min-height: 70px;

      padding:
        6px 8px;
    }

    .botao-menu,
    .botao-seta {

      width: 48px;
      height: 48px;
    }

    .marca {
      padding: 0 7px;
    }

    .marca-sol {
      gap: 5px;
    }

    .marca-sol img {

      width: 32px;
      height: 32px;
    }

    .marca-sol span {
      font-size: 17px;
    }

    .marca-subtitulo {
      font-size: 10px;
    }

    .menu-acordeao {

      left: 8px;

      width: calc(100vw - 16px);

      max-width: 300px;
    }

    .area-menu {

      padding-top: 6px;
      padding-bottom: 20px;
    }

    .titulo-menu {

      margin: 10px 0 14px;

      padding: 6px 18px;

      font-size: 19px;
    }

    .anos {

      width: calc(100% - 10px);

      grid-template-columns: repeat(2, 1fr);

      gap: 8px;
    }

    .botao-ano {

      height: ${DADOS.dimensoes.alturaJogoTelemovel}px;

      padding: 6px;

      border-width: 4px;
    }

    .icone-ano {

      width: ${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;
      height: ${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;
    }

    .nome-ano {
      font-size: 16px;
    }

    .idade-ano {
      font-size: 10px;
    }

    footer {

      padding:
        10px 8px 14px;

      font-size: 11px;
    }

    footer [data-mensagem] {
      font-size: 13px;
    }
  }

  `;

  document.head.appendChild(estilo);
}


/* ================================================================
   PREENCHER TEXTOS
================================================================ */

function preencherTextos() {

  const marca = document.querySelector("[data-marca]");
  const submarca = document.querySelector("[data-submarca]");
  const tituloMenu = document.querySelector("[data-titulo-menu]");
  const mensagem = document.querySelector("[data-mensagem]");
  const informacao = document.querySelector("[data-informacao]");

  if (marca) {
    marca.textContent = DADOS.pagina.titulo;
  }

  if (submarca) {
    submarca.textContent = DADOS.pagina.subtitulo;
  }

  if (tituloMenu) {
    tituloMenu.textContent = DADOS.pagina.tituloMenu;
  }

  if (mensagem) {
    mensagem.textContent = DADOS.pagina.mensagem;
  }

  if (informacao) {
    informacao.textContent = DADOS.pagina.informacao;
  }

  const imagemCabecalho = document.querySelector(".marca-sol img");

  if (imagemCabecalho) {
    imagemCabecalho.src = DADOS.icons.cabecalho;
  }
}


/* ================================================================
   CRIAR CARTÕES DOS JOGOS
================================================================ */

function criarCartoesJogos() {

  const container = document.getElementById("anos");
  const modelo = document.getElementById("modelo-ano");

  if (!container || !modelo) {
    return;
  }

  container.innerHTML = "";

  DADOS.jogos.forEach(jogo => {

    const clone = modelo.content.cloneNode(true);

    const cartao = clone.querySelector(".botao-ano");
    const icone = clone.querySelector(".icone-ano");
    const nome = clone.querySelector(".nome-ano");
    const descricao = clone.querySelector(".idade-ano");

    if (cartao) {

      cartao.style.setProperty(
        "--cor-1",
        jogo.cor
      );

      cartao.style.setProperty(
        "--cor-2",
        jogo.cor2
      );

      cartao.setAttribute(
        "aria-label",
        "Abrir jogo " + jogo.nome
      );

      cartao.addEventListener(
        "click",
        () => {

          window.location.href =
            jogo.pagina;

        }
      );
    }

    if (icone) {

      icone.src =
        DADOS.icons.jogos[jogo.icon];

      icone.alt =
        jogo.nome;
    }

    if (nome) {
      nome.textContent =
        jogo.nome;
    }

    if (descricao) {
      descricao.textContent =
        jogo.descricao;
    }

    container.appendChild(clone);
  });
}


/* ================================================================
   CRIAR MENU DOS ANOS
================================================================ */

function criarMenuAnos() {

  const container =
    document.getElementById("menu-anos");

  const modelo =
    document.getElementById("modelo-menu-ano");

  if (!container || !modelo) {
    return;
  }

  container.innerHTML = "";

  DADOS.menuAnos.forEach(ano => {

    const clone =
      modelo.content.cloneNode(true);

    const botao =
      clone.querySelector(".item-menu-ano");

    const icone =
      clone.querySelector("img");

    const nome =
      clone.querySelector("span");

    if (icone) {

      icone.src =
        DADOS.icons.menuAnos[ano.icon];

      icone.alt =
        ano.nome;
    }

    if (nome) {
      nome.textContent =
        ano.nome;
    }

    if (botao) {

      botao.addEventListener(
        "click",
        () => {

          window.location.href =
            ano.pagina;

        }
      );
    }

    container.appendChild(clone);
  });
}


/* ================================================================
   CONFIGURAR MENU
================================================================ */

function configurarMenu() {

  const botaoMenu =
    document.querySelector(".botao-menu");

  const menu =
    document.querySelector(".menu-acordeao");

  const botaoSeta =
    document.querySelector(".botao-seta");

  if (botaoMenu && menu) {

    botaoMenu.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        menu.classList.toggle("aberto");

      }
    );

    document.addEventListener(
      "click",
      event => {

        if (
          menu.classList.contains("aberto") &&
          !menu.contains(event.target) &&
          !botaoMenu.contains(event.target)
        ) {

          menu.classList.remove("aberto");

        }

      }
    );
  }


  /* --------------------------------------------------------------
     BOTÃO SETA — VOLTAR
  -------------------------------------------------------------- */

  if (botaoSeta) {

    botaoSeta.addEventListener(
      "click",
      () => {

        window.location.href = "../";

      }
    );
  }
}


/* ================================================================
   INICIALIZAÇÃO
================================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    inserirCSS();

    preencherTextos();

    criarCartoesJogos();

    criarMenuAnos();

    configurarMenu();

  }
);
