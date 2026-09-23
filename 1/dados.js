/* ================================================================
   RECURSOS COVÃO — DADOS.JS
   Dados + CSS + JavaScript
   ================================================================ */


/* ================================================================
   1. DADOS GERAIS
   ================================================================ */

const DADOS = {

  /* ---------- IMAGENS ---------- */

  icones: {
    menu: "../icons/menu.png",
    seta: "../icons/seta.png",
    nuvem: "../icons/nuvem.png",

    anos: {
      pre: "../icons/iconpre.png",
      ano1: "../icons/pt.png",
      ano2: "../icons/mat.png",
      ano3: "../icons/em.png",
      ano4: "../icons/icon4.png"
    },

    destaques: {
      rastros: "../icons/rastros.png",
      gatosCaes: "../icons/gatos&caes.png",
      dominorio: "../icons/dominorio.png",
      semaforo: "../icons/semaforo.png",
      quelhas: "../icons/quelhas.png",
      avanco: "../icons/avanco.png"
    }
  },


  /* ---------- NUVENS ---------- */

  nuvens: {
    quantidade: 3,
    larguraMin: 88,
    larguraMax: 118,
    alturaMin: 46,
    alturaMax: 60,
    topoMin: 42,
    topoMax: 92,
    margemHorizontal: 8
  },


  /* ---------- TEXTOS ---------- */

  pagina: {
    titulo: "Recursos Covão",
    subtitulo: "Aprender • Explorar • Descobrir",
    menuTitulo: "Escolhe o ano",
    mensagem: "Escolhe o ano e comece a aprender!",
    informacao: "Recursos educativos para o 1.º ciclo"
  },


  /* ---------- CORES ---------- */

  cores: {
    fundo: "#EAF5FC",
    ceu: "#78DDF7",
    ceuClaro: "#BCEEF9",

    header: "#0358A9",
    texto: "#07569A",
    textoEscuro: "#064B8A",
    branco: "#FFFFFF",

    amarelo: "#FFBA16",
    amareloEscuro: "#EF8709",

    azul: "#20B9EF",
    azulEscuro: "#087AC9",

    verde: "#45C83D",
    verdeEscuro: "#169A3A",

    roxo: "#A74BEF",
    roxoEscuro: "#7434B8",

    rosa: "#F43A9D",
    rosaEscuro: "#C81970",

    creme: "#FFF9E1",
    cremeEscuro: "#F5D996",

    linha: "#A5D9F8",

    sombra: "rgba(0,80,150,.20)",
    sombraForte: "rgba(0,65,130,.30)"
  },


  /* ---------- DIMENSÕES ---------- */

  dimensoes: {
    larguraMaxima: "1650px",

    anoDesktop: 300,
    anoTablet: 245,
    anoMobile: 175,

    raioAno: 23,
    raioDestaque: 26,

    iconeAnoDesktop: 150,
    iconeAnoTablet: 115,
    iconeAnoMobile: 86,

    iconeJogo: 76,
    iconeJogoTablet: 64,
    iconeJogoMobile: 54
  },


  /* ================================================================
     2. ANOS
     ================================================================ */

  anos: {

    pre: {
      titulo: "Pré-Escolar",
      idade: "3 – 5 anos",
      icone: "pre",
      cor: "amarelo",
      pagina: "pre"
    },

    ano1: {
      titulo: "1.º Ano",
      idade: "6 – 7 anos",
      icone: "ano1",
      cor: "azul",
      pagina: "1"
    },

    ano2: {
      titulo: "2.º Ano",
      idade: "7 – 8 anos",
      icone: "ano2",
      cor: "verde",
      pagina: "2"
    },

    ano3: {
      titulo: "3.º Ano",
      idade: "8 – 9 anos",
      icone: "ano3",
      cor: "roxo",
      pagina: "ano-3.html"
    },

    ano4: {
      titulo: "4.º Ano",
      idade: "9 – 10 anos",
      icone: "ano4",
      cor: "rosa",
      pagina: "ano-4.html"
    }
  },


  /* ================================================================
     3. JOGOS EM DESTAQUE
     ================================================================ */

  destaques: [

    {
      titulo: "Rastros",
      icone: "rastros",
      pagina: "jogos/rastros/index.html",
      estrelas: 5
    },

    {
      titulo: "Gatos&Cães",
      icone: "gatosCaes",
      pagina: "jogos/gatos-caes/index.html",
      estrelas: 5
    },

    {
      titulo: "Dominório",
      icone: "dominorio",
      pagina: "jogos/dominio/index.html",
      estrelas: 5
    },

    {
      titulo: "Semáforo",
      icone: "semaforo",
      pagina: "jogos/semaforo/index.html",
      estrelas: 5
    },

    {
      titulo: "Quellhas",
      icone: "quelhas",
      pagina: "jogos/quelhas/index.html",
      estrelas: 5
    },

    {
      titulo: "Avanço",
      icone: "avanco",
      pagina: "jogos/avanco/index.html",
      estrelas: 5
    }
  ]
};


/* ================================================================
   4. CSS
   ================================================================ */

function inserirCSS() {

  const C = DADOS.cores;
  const D = DADOS.dimensoes;

  const css = document.createElement("style");

  css.textContent = `

    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
    }

    body {
      font-family: "Nunito", Arial, sans-serif;
      background: ${C.fundo};
      color: ${C.texto};
      overflow-x: hidden;
    }

    #app {
      width: 100%;
      min-height: 100vh;
      padding: 0 20px 16px;
      position: relative;
      overflow: hidden;
    }


    /* ============================================================
       HEADER
       ============================================================ */

    .cabecalho {
      position: relative;
      width: calc(100% + 40px);
      margin-left: -20px;
      margin-right: -20px;
      min-height: 112px;

      display: flex;
      align-items: center;
      justify-content: center;

      background:
        linear-gradient(
          180deg,
          #21C7F3 0%,
          #079FDB 48%,
          #0B8DCB 100%
        );

      border: 3px solid #087AC9;
      border-top: 0;

      border-radius: 0 0 16px 16px;

      box-shadow:
        inset 0 -8px 0 rgba(255,255,255,.12),
        0 4px 10px rgba(0,80,150,.18);

      overflow: hidden;
      z-index: 10;
    }


    /* brilho decorativo do header */

    .cabecalho::before {
      content: "";
      position: absolute;
      left: 4%;
      right: 4%;
      top: 7px;
      height: 32px;

      border-radius: 30px;

      background: rgba(255,255,255,.10);

      pointer-events: none;
    }


    /* zona esquerda */

    .header-esquerda {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
    }


    /* zona direita */

    .header-direita {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
    }


    /* círculos dos botões */

    .header-botao {
      width: 58px;
      height: 58px;

      border-radius: 50%;

      background: ${C.header};

      display: flex;
      align-items: center;
      justify-content: center;

      border: 2px solid rgba(255,255,255,.18);

      box-shadow:
        inset 0 2px 4px rgba(255,255,255,.18),
        0 3px 7px rgba(0,50,100,.25);

      cursor: pointer;

      transition:
        transform .18s ease,
        box-shadow .18s ease;
    }

    .header-botao:hover {
      transform: scale(1.06);
      box-shadow:
        inset 0 2px 4px rgba(255,255,255,.18),
        0 5px 10px rgba(0,50,100,.30);
    }

    .header-botao:active {
      transform: scale(.96);
    }

    .header-botao img {
      width: 32px;
      height: 32px;
      object-fit: contain;
      display: block;
    }


    /* conteúdo central */

    .header-centro {
      position: relative;
      z-index: 3;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 18px;

      min-width: 270px;
      max-width: 560px;
      width: 52%;

      min-height: 82px;

      padding: 8px 35px;

      border-radius: 45px;

      background: linear-gradient(
        90deg,
        rgba(0,105,190,.72),
        rgba(0,128,205,.82)
      );

      box-shadow:
        inset 0 3px 8px rgba(255,255,255,.10),
        inset 0 -4px 8px rgba(0,50,120,.12);
    }

    .header-icone {
      width: 72px;
      height: 72px;

      object-fit: contain;
      flex-shrink: 0;

      filter:
        drop-shadow(0 3px 2px rgba(0,50,100,.30));
    }

    .header-texto {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      color: #fff;

      line-height: 1.05;

      text-shadow:
        0 2px 2px rgba(0,60,120,.35);
    }

    .header-titulo {
      font-size: clamp(25px, 3vw, 42px);
      font-weight: 900;
      white-space: nowrap;
    }

    .header-subtitulo {
      margin-top: 4px;

      font-size: clamp(17px, 2vw, 25px);
      font-weight: 800;

      white-space: nowrap;
    }


    /* ============================================================
       NUVENS
       ============================================================ */

    .nuvem {
      position: absolute;
      pointer-events: none;
      z-index: 1;
      object-fit: contain;

      animation:
        flutuarNuvem var(--duracao) ease-in-out infinite alternate;
    }

    @keyframes flutuarNuvem {

      from {
        transform:
          translateX(-8px)
          rotate(var(--rotacao));
      }

      to {
        transform:
          translateX(8px)
          rotate(var(--rotacao));
      }
    }


    /* ============================================================
       TÍTULO DO MENU
       ============================================================ */

    .titulo-menu {
      position: relative;
      z-index: 3;

      width: fit-content;
      max-width: 90%;

      margin: 14px auto 19px;
      padding: 9px 38px;

      border-radius: 18px;

      background: linear-gradient(
        180deg,
        ${C.creme},
        #FFF3C8
      );

      border: 3px solid ${C.amarelo};

      color: #A8580A;

      font-size: clamp(24px, 3vw, 34px);
      font-weight: 900;

      text-align: center;

      box-shadow:
        0 4px 0 ${C.amareloEscuro},
        0 6px 10px ${C.sombra};
    }


    /* ============================================================
       CARTÕES DOS ANOS
       ============================================================ */

    .anos {
      position: relative;
      z-index: 3;

      width: 100%;
      max-width: ${D.larguraMaxima};

      margin: 0 auto;

      display: grid;
      grid-template-columns: repeat(3, 1fr);

      gap: 22px;

      justify-content: center;
    }

    .cartao-ano {
      position: relative;

      min-height: ${D.anoDesktop}px;

      border-radius: ${D.raioAno}px;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      text-align: center;

      padding: 18px;

      cursor: pointer;

      color: #fff;

      border: 5px solid rgba(255,255,255,.82);

      box-shadow:
        0 5px 0 var(--cor-escura),
        0 8px 15px ${C.sombra};

      overflow: hidden;

      transition:
        transform .18s ease,
        box-shadow .18s ease;
    }

    .cartao-ano::before {
      content: "";

      position: absolute;
      left: 5%;
      right: 5%;
      top: 5%;

      height: 28%;

      border-radius: 50%;

      background: rgba(255,255,255,.13);

      pointer-events: none;
    }

    .cartao-ano:hover {
      transform: translateY(-5px);

      box-shadow:
        0 8px 0 var(--cor-escura),
        0 13px 20px ${C.sombraForte};
    }

    .cartao-ano:active {
      transform: translateY(1px);
    }


    /* cores dos anos */

    .cartao-amarelo {
      background: linear-gradient(
        145deg,
        #FFC928,
        ${C.amareloEscuro}
      );

      --cor-escura: ${C.amareloEscuro};
    }

    .cartao-azul {
      background: linear-gradient(
        145deg,
        #29C8F5,
        ${C.azulEscuro}
      );

      --cor-escura: ${C.azulEscuro};
    }

    .cartao-verde {
      background: linear-gradient(
        145deg,
        #50DB48,
        ${C.verdeEscuro}
      );

      --cor-escura: ${C.verdeEscuro};
    }

    .cartao-roxo {
      background: linear-gradient(
        145deg,
        #B956F2,
        ${C.roxoEscuro}
      );

      --cor-escura: ${C.roxoEscuro};
    }

    .cartao-rosa {
      background: linear-gradient(
        145deg,
        #F84AAA,
        ${C.rosaEscuro}
      );

      --cor-escura: ${C.rosaEscuro};
    }


    .icone-ano {
      position: relative;
      z-index: 2;

      width: ${D.iconeAnoDesktop}px;
      height: ${D.iconeAnoDesktop}px;

      object-fit: contain;

      margin-bottom: 6px;

      filter:
        drop-shadow(0 4px 3px rgba(0,40,90,.25));
    }

    .nome-ano {
      position: relative;
      z-index: 2;

      font-size: clamp(25px, 3vw, 38px);
      font-weight: 900;

      line-height: 1.05;

      text-shadow:
        0 3px 2px rgba(0,50,100,.28);
    }

    .idade-ano {
      position: relative;
      z-index: 2;

      margin-top: 7px;

      font-size: clamp(17px, 2vw, 24px);
      font-weight: 800;

      text-shadow:
        0 2px 2px rgba(0,50,100,.25);
    }


    /* ============================================================
       DESTAQUES
       ============================================================ */

    .destaques {
      position: relative;
      z-index: 3;

      width: 100%;
      max-width: ${D.larguraMaxima};

      margin: 30px auto 0;

      display: grid;

      grid-template-columns:
        repeat(3, minmax(0, 1fr));

      gap: 18px;
    }

    .destaque {
      min-height: 125px;

      border-radius: ${D.raioDestaque}px;

      background: #fff;

      border: 3px solid ${C.linha};

      display: flex;
      align-items: center;

      gap: 15px;

      padding: 15px;

      cursor: pointer;

      box-shadow:
        0 5px 12px ${C.sombra};

      transition:
        transform .18s ease,
        box-shadow .18s ease;
    }

    .destaque:hover {
      transform: translateY(-4px);

      box-shadow:
        0 8px 16px ${C.sombraForte};
    }

    .icone-destaque {
      width: ${D.iconeJogo}px;
      height: ${D.iconeJogo}px;

      object-fit: contain;

      flex-shrink: 0;
    }

    .destaque-conteudo {
      flex: 1;
      min-width: 0;
    }

    .destaque-titulo {
      font-size: 22px;
      font-weight: 900;
      color: ${C.texto};
    }

    .estrelas {
      margin-top: 4px;
      font-size: 18px;
      color: ${C.amarelo};
      letter-spacing: 1px;
    }


    /* ============================================================
       FOOTER
       ============================================================ */

    .rodape {
      position: relative;
      z-index: 3;

      width: 100%;
      max-width: ${D.larguraMaxima};

      margin: 30px auto 0;

      padding: 12px;

      text-align: center;

      color: ${C.texto};

      font-size: 18px;
      font-weight: 700;
    }


    /* ============================================================
       TABLET
       ============================================================ */

    @media
      (max-width:1100px)
      and (min-width:601px)
      and (orientation:landscape) {

      .cartao-ano {
        min-height: ${D.anoTablet}px;
      }

      .icone-ano {
        width: ${D.iconeAnoTablet}px;
        height: ${D.iconeAnoTablet}px;
      }

      .anos {
        gap: 15px;
      }

      .destaques {
        gap: 12px;
      }
    }


    /* ============================================================
       MOBILE LANDSCAPE
       ============================================================ */

    @media
      (max-width:600px)
      and (min-height:360px)
      and (orientation:landscape) {

      .cabecalho {
        min-height: 82px;
      }

      .header-botao {
        width: 46px;
        height: 46px;
      }

      .header-botao img {
        width: 25px;
        height: 25px;
      }

      .header-centro {
        min-height: 62px;
        width: 55%;
        gap: 8px;
        padding: 5px 20px;
      }

      .header-icone {
        width: 52px;
        height: 52px;
      }

      .header-titulo {
        font-size: 22px;
      }

      .header-subtitulo {
        font-size: 15px;
      }

      .titulo-menu {
        margin: 9px auto 12px;
        padding: 6px 20px;
        font-size: 22px;
      }

      .anos {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }

      .cartao-ano {
        min-height: ${D.anoMobile}px;
        padding: 8px;
        border-width: 3px;
      }

      .icone-ano {
        width: ${D.iconeAnoMobile}px;
        height: ${D.iconeAnoMobile}px;
      }

      .nome-ano {
        font-size: 20px;
      }

      .idade-ano {
        font-size: 14px;
        margin-top: 3px;
      }

      .destaques {
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-top: 15px;
      }

      .destaque {
        min-height: 85px;
        padding: 8px;
        gap: 7px;
      }

      .icone-destaque {
        width: ${D.iconeJogoMobile}px;
        height: ${D.iconeJogoMobile}px;
      }

      .destaque-titulo {
        font-size: 15px;
      }

      .estrelas {
        font-size: 13px;
      }
    }


    /* ============================================================
       TABLET / MOBILE PORTRAIT
       ============================================================ */

    @media
      (max-width:900px)
      and (orientation:portrait) {

      .cabecalho {
        min-height: 95px;
      }

      .header-centro {
        width: 60%;
        gap: 10px;
      }

      .header-icone {
        width: 62px;
        height: 62px;
      }

      .header-titulo {
        font-size: 26px;
      }

      .header-subtitulo {
        font-size: 17px;
      }

      .anos {
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
      }

      .cartao-ano {
        min-height: ${D.anoTablet}px;
      }

      .icone-ano {
        width: ${D.iconeAnoTablet}px;
        height: ${D.iconeAnoTablet}px;
      }

      .destaques {
        grid-template-columns: repeat(2, 1fr);
      }
    }


    /* ============================================================
       PEQUENO TELEMÓVEL
       ============================================================ */

    @media
      (max-width:600px)
      and (orientation:portrait) {

      #app {
        padding: 0 10px 10px;
      }

      .cabecalho {
        width: calc(100% + 20px);
        margin-left: -10px;
        margin-right: -10px;

        min-height: 78px;

        border-radius: 0 0 12px 12px;
      }

      .header-esquerda {
        left: 7px;
      }

      .header-direita {
        right: 7px;
      }

      .header-botao {
        width: 44px;
        height: 44px;
      }

      .header-botao img {
        width: 24px;
        height: 24px;
      }

      .header-centro {
        min-height: 58px;
        width: 63%;
        padding: 5px 8px;
        gap: 6px;
        border-radius: 30px;
      }

      .header-icone {
        width: 46px;
        height: 46px;
      }

      .header-titulo {
        font-size: 20px;
      }

      .header-subtitulo {
        font-size: 13px;
      }

      .titulo-menu {
        margin: 10px auto 14px;
        padding: 6px 18px;
        font-size: 22px;
      }

      .anos {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }

      .cartao-ano {
        min-height: 175px;
        padding: 8px;
        border-width: 3px;
      }

      .icone-ano {
        width: 86px;
        height: 86px;
      }

      .nome-ano {
        font-size: 20px;
      }

      .idade-ano {
        font-size: 14px;
      }

      .destaques {
        grid-template-columns: 1fr;
      }
    }


    /* acessibilidade */

    :focus-visible {
      outline: 4px solid #FFD400;
      outline-offset: 3px;
    }

  `;

  document.head.appendChild(css);
}


/* ================================================================
   5. NUVENS
   ================================================================ */

function criarNuvens() {

  const posicoes = [
    {
      left: "12%",
      top: "48px",
      width: 105,
      height: 54,
      rotacao: "-2deg",
      duracao: "18s"
    },
    {
      left: "50%",
      top: "92px",
      width: 88,
      height: 46,
      rotacao: "1deg",
      duracao: "22s"
    },
    {
      left: "86%",
      top: "42px",
      width: 118,
      height: 60,
      rotacao: "2deg",
      duracao: "20s"
    }
  ];

  posicoes.forEach((n, i) => {

    const img = document.createElement("img");

    img.className = "nuvem";

    img.src = DADOS.icones.nuvem;
    img.alt = "";

    img.style.left = n.left;
    img.style.top = n.top;
    img.style.width = `${n.width}px`;
    img.style.height = `${n.height}px`;

    img.style.setProperty("--rotacao", n.rotacao);
    img.style.setProperty("--duracao", n.duracao);

    img.setAttribute("aria-hidden", "true");

    document.getElementById("app").appendChild(img);
  });
}


/* ================================================================
   6. HEADER
   ================================================================ */

function configurarHeader() {

  /*
    Procura o header existente.
    Se já existir, aproveita-o.
  */

  let header = document.querySelector(
    ".cabecalho, .header, header"
  );

  if (!header) return;

  header.classList.add("cabecalho");

  /*
    Substitui os antigos botões
    Casa / Definições
    por
    Menu / Seta
  */

  let esquerda = header.querySelector(
    ".header-esquerda"
  );

  let direita = header.querySelector(
    ".header-direita"
  );

  if (!esquerda) {
    esquerda = document.createElement("div");
    esquerda.className = "header-esquerda";
    header.appendChild(esquerda);
  }

  if (!direita) {
    direita = document.createElement("div");
    direita.className = "header-direita";
    header.appendChild(direita);
  }

  esquerda.innerHTML = `
    <button
      class="header-botao"
      type="button"
      aria-label="Abrir menu"
    >
      <img
        src="${DADOS.icones.menu}"
        alt="Menu"
      >
    </button>
  `;

  direita.innerHTML = `
    <button
      class="header-botao"
      type="button"
      aria-label="Avançar"
    >
      <img
        src="${DADOS.icones.seta}"
        alt="Avançar"
      >
    </button>
  `;

  /*
    Se existir um conteúdo central,
    aplica-lhe o novo formato.
  */

  let centro = header.querySelector(
    ".header-centro"
  );

  if (centro) {
    centro.classList.add("header-centro");
  }
}


/* ================================================================
   7. TEXTOS
   ================================================================ */

function preencherTextos() {

  const titulo = document.querySelector(".titulo-pagina");
  const subtitulo = document.querySelector(".subtitulo-pagina");
  const menuTitulo = document.querySelector(".titulo-menu");
  const mensagem = document.querySelector(".mensagem");
  const informacao = document.querySelector(".informacao");

  if (titulo) {
    titulo.textContent = DADOS.pagina.titulo;
  }

  if (subtitulo) {
    subtitulo.textContent = DADOS.pagina.subtitulo;
  }

  if (menuTitulo) {
    menuTitulo.textContent = DADOS.pagina.menuTitulo;
  }

  if (mensagem) {
    mensagem.textContent = DADOS.pagina.mensagem;
  }

  if (informacao) {
    informacao.textContent = DADOS.pagina.informacao;
  }
}


/* ================================================================
   8. CARTÕES DOS ANOS
   ================================================================ */

function criarCartoesAno() {

  const container = document.querySelector(
    ".anos"
  );

  if (!container) return;

  container.innerHTML = "";

  /*
    Na página principal são apresentados:
    1.º, 2.º e 3.º ano.
  */

  ["ano1", "ano2", "ano3"].forEach(chave => {

    const ano = DADOS.anos[chave];

    const card = document.createElement("div");

    card.className =
      `cartao-ano cartao-${ano.cor}`;

    card.tabIndex = 0;

    card.setAttribute(
      "role",
      "button"
    );

    card.innerHTML = `
      <img
        class="icone-ano"
        src="${DADOS.icones.anos[ano.icone]}"
        alt="${ano.titulo}"
      >

      <div class="nome-ano">
        ${ano.titulo}
      </div>

      <div class="idade-ano">
        ${ano.idade}
      </div>
    `;

    const abrir = () => {

      if (ano.pagina) {
        window.location.href = ano.pagina;
      }

    };

    card.addEventListener(
      "click",
      abrir
    );

    card.addEventListener(
      "keydown",
      e => {

        if (
          e.key === "Enter" ||
          e.key === " "
        ) {

          e.preventDefault();
          abrir();

        }

      }
    );

    container.appendChild(card);
  });
}


/* ================================================================
   9. DESTAQUES
   ================================================================ */

function criarDestaques() {

  const container =
    document.querySelector(".destaques");

  if (!container) return;

  container.innerHTML = "";

  DADOS.destaques.forEach(jogo => {

    const card =
      document.createElement("div");

    card.className = "destaque";

    card.tabIndex = 0;

    card.setAttribute(
      "role",
      "button"
    );

    const estrelas =
      "★".repeat(jogo.estrelas || 0);

    card.innerHTML = `
      <img
        class="icone-destaque"
        src="${DADOS.icones.destaques[jogo.icone]}"
        alt="${jogo.titulo}"
      >

      <div class="destaque-conteudo">

        <div class="destaque-titulo">
          ${jogo.titulo}
        </div>

        <div class="estrelas"
             aria-label="${jogo.estrelas} estrelas">
          ${estrelas}
        </div>

      </div>
    `;

    const abrir = () => {

      if (jogo.pagina) {
        window.location.href =
          jogo.pagina;
      }

    };

    card.addEventListener(
      "click",
      abrir
    );

    card.addEventListener(
      "keydown",
      e => {

        if (
          e.key === "Enter" ||
          e.key === " "
        ) {

          e.preventDefault();
          abrir();

        }

      }
    );

    container.appendChild(card);
  });
}


/* ================================================================
   10. INICIALIZAÇÃO
   ================================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    inserirCSS();

    criarNuvens();

    configurarHeader();

    preencherTextos();

    criarCartoesAno();

    criarDestaques();

  }
);
