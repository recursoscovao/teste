/*
================================================================
 RECURSOS Covão — DADOS E APRESENTAÇÃO
================================================================

 A estrutura HTML está em index.html.

 Este ficheiro concentra:
 - textos
 - cores
 - dimensões
 - caminhos de TODOS os icons
 - definição dos anos
 - definição dos jogos em destaque
 - CSS
 - comportamento

 Os PNG existentes na pasta /icons são usados diretamente.

 Estrutura esperada:

 /index.html
 /dados.js
 /icons/
    iconpre.png
    icon1.png
    icon2.png
    icon3.png
    icon4.png
    rastros.png
    gatos&caes.png
    dominorio.png
    semaforo.png
    quelhas.png
    avanco.png
*/

const DADOS = {
  nuvem: "../icons/nuvem.png",

  nuvens: {
    quantidade: 3,
    larguraMin: 72,
    larguraMax: 125,
    alturaMin: 38,
    alturaMax: 66,
    topoMin: 24,
    topoMax: 145,
    margemHorizontal: 12
  },

  pagina: {
    titulo: "Recursos Covão",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolhe o ano",
    mensagem: "Escolhe o ano e comece a aprender!",
    informacao: "Recursos educativos para o 1.º ciclo"
  },

  /* ==========================================================
     ICONS — todos centralizados aqui
     ========================================================== */

  icons: {
    anos: {
      pre: "../icons/iconpre.png",
      ano1: "../icons/icon1.png",
      ano2: "../icons/icon2.png",
      ano3: "../icons/icon3.png",
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

  /* ==========================================================
     CORES
     ========================================================== */

  cores: {
    fundo: "#EAF5FC",
    ceu1: "#78DDF7",
    ceu2: "#BCEEF9",

    texto: "#07569A",
    textoEscuro: "#064B8A",
    branco: "#FFFFFF",

    amarelo: "#FFBA16",
    amarelo2: "#EF8709",

    azul: "#20B9EF",
    azul2: "#087AC9",

    verde: "#45C83D",
    verde2: "#169A3A",

    roxo: "#A74BEF",
    roxo2: "#7434B8",

    rosa: "#F43A9D",
    rosa2: "#C81970",

    creme: "#FFF9E1",
    creme2: "#F5D996",

    linha: "#A5D9F8",

    sombra: "rgba(15, 88, 139, .20)",
    sombraForte: "rgba(15, 88, 139, .30)"
  },

  /* ==========================================================
     DIMENSÕES
     ========================================================== */

  dimensoes: {
    larguraMaxima: 1650,

    /*
      Cartões dos anos:
      não são 16:9.
      São mais altos para o aspeto do menu original.
    */

    alturaAnoDesktop: 300,
    alturaAnoTabletHorizontal: 245,
    alturaAnoTelemovelHorizontal: 175,

    raioAno: 23,
    raioDestaques: 26,

    tamanhoIconAnoDesktop: 128,
    tamanhoIconAnoTablet: 100,
    tamanhoIconAnoTelemovelHorizontal: 76,

    /* Ícones de destaque deliberadamente mais pequenos */

    tamanhoIconJogo: 76,
    tamanhoIconJogoTablet: 64,
    tamanhoIconJogoTelemovel: 54
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
      cor: "#FFBA16",
      cor2: "#EF8709",
      pagina: "pre"
    },

    {
      id: "ano1",
      nome: "Português",
      idade: "Ler • Escrever • Comunicar",
      icon: "ano1",
      cor: "#20B9EF",
      cor2: "#087AC9",
      pagina: "1"
    },

    {
      id: "ano2",
      nome: "Matemática",
      idade: "Pensar • Calcular • Resolver",
      icon: "ano2",
      cor: "#45C83D",
      cor2: "#169A3A",
      pagina: "2"
    },

    {
      id: "ano3",
      nome: "Estudo do Meio",
      idade: "Conhecer • Explorar • Descobrir",
      icon: "ano3",
      cor: "#A74BEF",
      cor2: "#7434B8",
      pagina: "ano-3.html"
    },

    {
      id: "ano4",
      nome: "4.º Ano",
      idade: "9 – 10 anos",
      icon: "ano4",
      cor: "#F43A9D",
      cor2: "#C81970",
      pagina: "ano-4.html"
    }
  ],

  /* ==========================================================
     JOGOS EM DESTAQUE
     ========================================================== */

  destaques: [
    {
      id: "rastros",
      nome: "Rastros",
      icon: "rastros",
      estrelas: 5,
      pagina: "jogos/rastros/index.html"
    },

    {
      id: "gatosCaes",
      nome: "Gatos&Cães",
      icon: "gatosCaes",
      estrelas: 5,
      pagina: "jogos/gatos-caes/index.html"
    },

    {
      id: "dominio",
      nome: "Dominório",
      icon: "dominorio",
      estrelas: 5,
      pagina: "jogos/dominio/index.html"
    },

    {
      id: "semaforo",
      nome: "Semáforo",
      icon: "semaforo",
      estrelas: 5,
      pagina: "jogos/semaforo/index.html"
    },

    {
      id: "quelhas",
      nome: "Quellhas",
      icon: "quelhas",
      estrelas: 5,
      pagina: "jogos/quelhas/index.html"
    },

    {
      id: "avanco",
      nome: "Avanço",
      icon: "avanco",
      estrelas: 5,
      pagina: "jogos/avanco/index.html"
    }
  ]
};


/* ============================================================
   CSS
   ============================================================ */

const CSS = `
:root {
  --fundo: ${DADOS.cores.fundo};
  --ceu1: ${DADOS.cores.ceu1};
  --ceu2: ${DADOS.cores.ceu2};

  --texto: ${DADOS.cores.texto};
  --texto-escuro: ${DADOS.cores.textoEscuro};
  --branco: ${DADOS.cores.branco};

  --creme: ${DADOS.cores.creme};
  --creme2: ${DADOS.cores.creme2};

  --linha: ${DADOS.cores.linha};

  --sombra: ${DADOS.cores.sombra};
  --sombra-forte: ${DADOS.cores.sombraForte};
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
    "Nunito",
    "Quicksand",
    "Arial Rounded MT Bold",
    "Trebuchet MS",
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
  padding: 13px 20px 16px;

  position: relative;
  overflow: hidden;

  background:
    linear-gradient(
      180deg,
      var(--ceu1) 0,
      var(--ceu2) 19%,
      #EAF5FC 38%,
      var(--fundo) 100%
    );
}


/* ============================================================
   NUVENS
   ============================================================ */

.camada-nuvens {
  position: absolute;
  inset: 0;

  overflow: hidden;
  pointer-events: none;

  z-index: 0;
}

.nuvem-pequena {
  position: absolute;

  display: block;

  object-fit: contain;

  opacity: .88;

  filter:
    drop-shadow(0 2px 1px rgba(80,130,160,.08));

  z-index: 0;

  transform:
    translate(-50%, -50%)
    rotate(var(--rotacao-nuvem));
}


/*
   Movimento suave das nuvens.

   A posição inicial continua sempre igual.
   Apenas existe uma pequena deslocação horizontal.
*/

@keyframes flutuar-nuvem {

  0%,
  100% {
    transform:
      translate(-50%, -50%)
      translateX(0)
      rotate(var(--rotacao-nuvem));
  }

  50% {
    transform:
      translate(-50%, -50%)
      translateX(18px)
      rotate(var(--rotacao-nuvem));
  }
}


/*
   Conteúdo sempre à frente das nuvens.
*/

.cabecalho {
  position: relative;
  z-index: 1;

  height: 82px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.titulo-menu {
  position: relative;
  z-index: 1;
}

.anos {
  position: relative;
  z-index: 1;
}

.destaques {
  position: relative;
  z-index: 1;
}

.rodape {
  position: relative;
  z-index: 1;
}


/* ============================================================
   CABEÇALHO
   ============================================================ */

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

.marca-sol {
  width: 62px;
  height: 62px;

  position: relative;

  flex: 0 0 62px;
}

.marca-sol::before {
  content: "☀";

  position: absolute;
  inset: 0;

  display: grid;
  place-items: center;

  color: #FFBA16;

  font-size: 65px;
  line-height: 1;

  filter:
    drop-shadow(0 2px 0 rgba(255,255,255,.8))
    drop-shadow(0 3px 2px rgba(100,80,0,.13));
}

.marca-texto h1 {
  margin: 0;

  color: #07579B;

  font-size: clamp(28px, 3vw, 45px);

  line-height: .98;

  font-weight: 900;

  letter-spacing: -.9px;

  text-shadow:
    0 2px 0 rgba(255,255,255,.8);
}

.marca-texto p {
  margin: 6px 0 0;

  color: #0963A6;

  font-size: clamp(13px, 1.2vw, 18px);

  line-height: 1;

  font-weight: 800;
}


/* ============================================================
   TÍTULO
   ============================================================ */

.titulo-menu {
  width: fit-content;

  margin: 1px auto 19px;

  padding: 8px 30px;

  border: 2px solid rgba(222,157,39,.42);

  border-radius: 16px;

  background:
    linear-gradient(
      180deg,
      #FFFDEC,
      var(--creme)
    );

  box-shadow:
    0 3px 7px rgba(118,88,17,.12),
    inset 0 1px 0 rgba(255,255,255,.95);
}

.titulo-menu h2 {
  margin: 0;

  color: #74440C;

  font-size: clamp(18px, 1.7vw, 27px);

  line-height: 1;

  font-weight: 900;
}


/* ============================================================
   CARTÕES DOS ANOS
   ============================================================ */

.anos {
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  gap: 14px;
}

.ano {
  min-width: 0;
}

.botao-ano {
  width: 100%;

  height:
    ${DADOS.dimensoes.alturaAnoDesktop}px;

  padding: 18px 12px 14px;

  border:
    3px solid rgba(255,255,255,.94);

  border-radius:
    ${DADOS.dimensoes.raioAno}px;

  color: #fff;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: space-between;

  position: relative;

  overflow: hidden;

  cursor: pointer;

  background:
    linear-gradient(
      145deg,
      var(--cor-1),
      var(--cor-2)
    );

  box-shadow:
    0 9px 15px var(--sombra),
    inset 0 1px 1px rgba(255,255,255,.7);

  transition:
    transform .15s ease,
    box-shadow .15s ease;
}

.botao-ano::before {
  content: "";

  position: absolute;

  width: 170%;
  height: 110%;

  left: -95%;
  top: -63%;

  border-radius: 50%;

  background:
    rgba(255,255,255,.15);

  pointer-events: none;
}

.botao-ano::after {
  content: "";

  position: absolute;

  width: 90px;
  height: 90px;

  right: -34px;
  top: -35px;

  border-radius: 50%;

  background:
    rgba(255,255,255,.10);

  pointer-events: none;
}

.botao-ano:hover {
  transform:
    translateY(-4px);

  box-shadow:
    0 13px 20px var(--sombra-forte),
    inset 0 1px 1px rgba(255,255,255,.75);
}

.botao-ano:active {
  transform:
    translateY(-1px);
}

.icone-ano {
  width:
    ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  height:
    ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  flex:
    0 0 ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  display: grid;

  place-items: center;

  position: relative;

  z-index: 1;
}

.icone-ano img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;

  filter:
    drop-shadow(0 5px 3px rgba(0,0,0,.16));
}

.texto-ano {
  position: relative;

  z-index: 1;

  text-align: center;
}

.nome-ano {
  font-family:
    "Nunito",
    "Quicksand",
    "Arial Rounded MT Bold",
    "Trebuchet MS",
    sans-serif;

  font-size:
    clamp(21px, 1.8vw, 29px);

  line-height: 1.05;

  font-weight: 800;

  letter-spacing: -.25px;

  text-shadow:
    0 2px 1px rgba(0,0,0,.17);
}

.idade-ano {
  margin-top: 7px;

  font-family:
    "Nunito",
    "Quicksand",
    "Trebuchet MS",
    sans-serif;

  font-size:
    clamp(14px, 1.2vw, 18px);

  line-height: 1;

  font-weight: 700;

  letter-spacing: .15px;

  text-shadow:
    0 1px 1px rgba(0,0,0,.12);
}


/* ============================================================
   JOGOS EM DESTAQUE
   ============================================================ */

.destaques {
  margin-top: 20px;

  padding: 23px 28px 25px;

  border-radius:
    ${DADOS.dimensoes.raioDestaques}px;

  background:
    rgba(255,255,255,.93);

  box-shadow:
    0 7px 18px rgba(25,100,150,.10),
    inset 0 1px 0 rgba(255,255,255,1);
}

.titulo-destaques {
  display: grid;

  grid-template-columns:
    1fr auto 1fr;

  align-items: center;

  gap: 28px;

  margin: 0 30px 25px;
}

.titulo-destaques .linha {
  height: 3px;

  background: #A7D5FA;

  border-radius: 99px;
}

.titulo-destaques h2 {
  margin: 0;

  color: #064F91;

  font-size:
    clamp(19px, 1.65vw, 26px);

  line-height: 1;

  font-weight: 900;

  white-space: nowrap;

  text-align: center;
}

.titulo-destaques h2 span {
  margin-right: 7px;

  font-size: .92em;
}

.jogos {
  display: grid;

  grid-template-columns:
    repeat(6, minmax(0, 1fr));

  gap: 20px;

  align-items: start;
}

.jogo {
  min-width: 0;

  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;
}

.icone-jogo {
  width:
    ${DADOS.dimensoes.tamanhoIconJogo}px;

  height:
    ${DADOS.dimensoes.tamanhoIconJogo}px;

  display: grid;

  place-items: center;

  margin-bottom: 10px;
}

.icone-jogo img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  display: block;
}

.nome-jogo {
  min-height: 25px;

  color: #064F91;

  font-size:
    clamp(15px, 1.25vw, 20px);

  line-height: 1.05;

  font-weight: 900;
}

.estrelas {
  margin-top: 7px;

  color: #FFB400;

  font-family: Arial, sans-serif;

  font-size:
    clamp(15px, 1.15vw, 18px);

  line-height: 1;

  letter-spacing: 1px;
}


/* ============================================================
   RODAPÉ
   ============================================================ */

.rodape {
  width: 100%;

  min-height: 53px;

  margin-top: 15px;

  padding: 8px 17px;

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 15px;

  align-items: center;

  border:
    2px solid var(--linha);

  border-radius: 14px;

  background:
    rgba(255,255,255,.78);

  box-shadow:
    0 4px 10px rgba(16,103,150,.08);

  font-size:
    clamp(11px, 1vw, 14px);

  font-weight: 800;
}

.rodape-item {
  display: flex;

  align-items: center;

  gap: 8px;
}

.rodape-info {
  justify-content: flex-end;
}

.estrela {
  color: #FFB400;

  font-size: 25px;

  line-height: 1;
}

.info {
  width: 25px;
  height: 25px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  color: #fff;

  background: #087AC9;

  font-family: Arial, sans-serif;

  font-weight: 900;
}


/* ============================================================
   TABLET HORIZONTAL
   ============================================================ */

@media (max-width: 1100px)
  and (min-width: 601px)
  and (orientation: landscape) {

  #app {
    padding:
      9px 13px 12px;
  }

  .cabecalho {
    height: 64px;
  }

  .marca-sol {
    width: 49px;
    height: 49px;

    flex-basis: 49px;
  }

  .marca-sol::before {
    font-size: 52px;
  }

  .marca-texto h1 {
    font-size: 28px;
  }

  .marca-texto p {
    font-size: 12px;

    margin-top: 4px;
  }

  .titulo-menu {
    margin-bottom: 12px;

    padding:
      7px 24px;
  }

  .titulo-menu h2 {
    font-size: 20px;
  }

  .anos {
    gap: 8px;
  }

  /*
     CARTÕES MAIS BAIXOS NO TABLET HORIZONTAL
  */

  .botao-ano {
    height:
      ${DADOS.dimensoes.alturaAnoTabletHorizontal}px;

    padding:
      10px 7px 9px;

    border-width: 2px;

    border-radius: 16px;
  }

  .icone-ano {
    width:
      ${DADOS.dimensoes.tamanhoIconAnoTablet}px;

    height:
      ${DADOS.dimensoes.tamanhoIconAnoTablet}px;

    flex-basis:
      ${DADOS.dimensoes.tamanhoIconAnoTablet}px;
  }

  .nome-ano {
    font-size:
      clamp(14px, 2vw, 20px);
  }

  .idade-ano {
    margin-top: 4px;

    font-size:
      clamp(10px, 1.3vw, 14px);
  }

  .destaques {
    margin-top: 12px;

    padding:
      15px 16px 17px;
  }

  .titulo-destaques {
    margin-bottom: 15px;

    gap: 16px;
  }

  .titulo-destaques h2 {
    font-size: 18px;
  }

  .jogos {
    gap: 10px;
  }

  .icone-jogo {
    width:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;

    height:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;

    margin-bottom: 5px;
  }

  .nome-jogo {
    font-size: 12px;
  }

  .estrelas {
    margin-top: 4px;

    font-size: 15px;
  }

  .rodape {
    margin-top: 9px;

    min-height: 42px;
  }
}


/* ============================================================
   TELEMÓVEL HORIZONTAL
   ============================================================

   Intencionalmente segue a mesma composição do tablet horizontal:
   - 5 cartões em linha
   - icon em cima
   - texto por baixo
   - jogos em 6 colunas
   ============================================================ */

@media (max-width: 600px)
  and (min-height: 360px)
  and (orientation: landscape) {

  #app {
    padding:
      7px 10px 9px;
  }

  .cabecalho {
    height: 50px;
  }

  .marca {
    gap: 6px;
  }

  .marca-sol {
    width: 39px;
    height: 39px;

    flex-basis: 39px;
  }

  .marca-sol::before {
    font-size: 42px;
  }

  .marca-texto h1 {
    font-size: 24px;
  }

  .marca-texto p {
    margin-top: 2px;

    font-size: 8px;
  }

  .titulo-menu {
    margin-bottom: 8px;

    padding:
      5px 18px;

    border-radius: 10px;
  }

  .titulo-menu h2 {
    font-size: 14px;
  }

  .anos {
    grid-template-columns:
      repeat(5, minmax(0, 1fr));

    gap: 5px;
  }

  /*
     CARTÕES MAIS BAIXOS NO TELEMÓVEL HORIZONTAL
  */

  .botao-ano {
    height:
      ${DADOS.dimensoes.alturaAnoTelemovelHorizontal}px;

    padding:
      6px 4px 5px;

    border-width: 2px;

    border-radius: 12px;
  }

  .icone-ano {
    width:
      ${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

    height:
      ${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

    flex-basis:
      ${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;
  }

  .nome-ano {
    font-size:
      clamp(10px, 2.9vw, 15px);
  }

  .idade-ano {
    margin-top: 3px;

    font-size:
      clamp(8px, 2vw, 11px);
  }

  .destaques {
    margin-top: 8px;

    padding:
      9px 9px 10px;

    border-radius: 16px;
  }

  .titulo-destaques {
    margin:
      0 7px 8px;

    gap: 8px;
  }

  .titulo-destaques .linha {
    height: 2px;
  }

  .titulo-destaques h2 {
    font-size: 13px;
  }

  .titulo-destaques h2 span {
    margin-right: 3px;
  }

  .jogos {
    grid-template-columns:
      repeat(6, minmax(0, 1fr));

    gap: 4px;
  }

  .icone-jogo {
    width: 52px;
    height: 52px;

    margin-bottom: 3px;
  }

  .nome-jogo {
    min-height: 14px;

    font-size: 8px;
  }

  .estrelas {
    margin-top: 2px;

    font-size: 8px;

    letter-spacing: 0;
  }

  .rodape {
    margin-top: 7px;

    min-height: 31px;

    padding:
      4px 7px;

    gap: 5px;

    font-size: 7px;

    border-radius: 9px;
  }

  .rodape-item {
    gap: 4px;
  }

  .estrela {
    font-size: 15px;
  }

  .info {
    width: 16px;
    height: 16px;

    font-size: 11px;
  }
}


/* ============================================================
   TABLET / TELEMÓVEL VERTICAL
   ============================================================

   Um cartão por linha:
   icon à esquerda + texto à direita.
   ============================================================ */

@media (max-width: 900px)
  and (orientation: portrait) {

  #app {
    padding:
      10px 12px 13px;
  }

  .cabecalho {
    height: 66px;
  }

  .marca-sol {
    width: 48px;
    height: 48px;

    flex-basis: 48px;
  }

  .marca-sol::before {
    font-size: 51px;
  }

  .marca-texto h1 {
    font-size: 25px;
  }

  .marca-texto p {
    font-size: 10px;
  }

  .titulo-menu {
    margin-bottom: 12px;

    padding:
      7px 21px;
  }

  .titulo-menu h2 {
    font-size: 17px;
  }

  .anos {
    grid-template-columns: 1fr;

    gap: 9px;
  }

  .botao-ano {
    width: 100%;

    height: 126px;

    padding:
      10px 18px;

    display: grid;

    grid-template-columns:
      88px 1fr;

    grid-template-rows: 1fr;

    column-gap: 15px;

    border-radius: 17px;
  }

  .icone-ano {
    width: 76px;
    height: 76px;

    flex: none;
  }

  .texto-ano {
    text-align: left;
  }

  .nome-ano {
    font-size: 22px;
  }

  .idade-ano {
    margin-top: 6px;

    font-size: 13px;
  }

  .destaques {
    margin-top: 12px;

    padding:
      14px 12px 16px;
  }

  .titulo-destaques {
    margin:
      0 10px 14px;

    gap: 10px;
  }

  .titulo-destaques h2 {
    font-size: 17px;
  }

  .jogos {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    row-gap: 18px;
  }

  .icone-jogo {
    width:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;

    height:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;
  }

  .nome-jogo {
    font-size: 13px;
  }

  .estrelas {
    font-size: 13px;
  }

  .rodape {
    margin-top: 11px;

    grid-template-columns: 1fr;

    gap: 5px;
  }

  .rodape-info {
    justify-content: flex-start;
  }
}


/* ============================================================
   TELEMÓVEL VERTICAL PEQUENO
   ============================================================ */

@media (max-width: 600px)
  and (orientation: portrait) {

  .cabecalho {
    height: 59px;
  }

  .marca-sol {
    width: 43px;
    height: 43px;

    flex-basis: 43px;
  }

  .marca-sol::before {
    font-size: 46px;
  }

  .marca-texto h1 {
    font-size: 22px;
  }

  .marca-texto p {
    font-size: 9px;
  }

  .titulo-menu {
    padding:
      6px 18px;

    border-radius: 11px;
  }

  .titulo-menu h2 {
    font-size: 15px;
  }

  .botao-ano {
    height: 94px;

    grid-template-columns:
      72px 1fr;

    column-gap: 10px;

    padding:
      7px 12px;

    border-radius: 14px;
  }

  .icone-ano {
    width: 58px;
    height: 58px;
  }

  .nome-ano {
    font-size: 18px;
  }

  .idade-ano {
    margin-top: 4px;

    font-size: 11px;
  }

  .destaques {
    padding:
      10px 8px 12px;

    border-radius: 17px;
  }

  .titulo-destaques {
    margin-bottom: 11px;
  }

  .titulo-destaques h2 {
    font-size: 14px;
  }

  .jogos {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    row-gap: 13px;
  }

  .icone-jogo {
    width:
      ${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;

    height:
      ${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;
  }

  .nome-jogo {
    font-size: 11px;
  }

  .estrelas {
    font-size: 10px;
  }

  .rodape {
    font-size: 9px;
  }
}


/* ============================================================
   FOCO
   ============================================================ */

.botao-ano:focus-visible {
  outline:
    4px solid rgba(255,255,255,.95);

  outline-offset: 3px;
}
`;


/* ============================================================
   JAVASCRIPT
   ============================================================ */


/*
================================================================
 NUVENS
================================================================

 IMPORTANTE:

 As posições são fixas.

 Não existe Math.random() nesta função.

 Assim:
 - ao abrir a página, as nuvens ficam sempre nos mesmos locais;
 - ao atualizar a página, continuam nos mesmos locais;
 - ao mudar de dispositivo, mantêm a posição percentual;
 - apenas fazem um pequeno movimento horizontal.
================================================================
*/

function criarNuvens() {

  const camada =
    document.querySelector(".camada-nuvens");

  if (!camada) return;

  const cfg =
    DADOS.nuvens;

  const posicoes = [

    {
      left: 12,
      top: 48,
      largura: 105,
      altura: 54,
      rotacao: -2,
      duracao: 18
    },

    {
      left: 50,
      top: 92,
      largura: 88,
      altura: 46,
      rotacao: 1,
      duracao: 22
    },

    {
      left: 86,
      top: 42,
      largura: 118,
      altura: 60,
      rotacao: 2,
      duracao: 20
    }

  ];

  posicoes
    .slice(0, cfg.quantidade)
    .forEach((posicao, i) => {

      const img =
        document.createElement("img");

      img.className =
        "nuvem-pequena";

      img.src =
        DADOS.nuvem;

      img.alt = "";

      img.draggable = false;

      img.style.left =
        `${posicao.left}%`;

      img.style.top =
        `${posicao.top}px`;

      img.style.width =
        `${posicao.largura}px`;

      img.style.height =
        `${posicao.altura}px`;

      img.style.setProperty(
        "--rotacao-nuvem",
        `${posicao.rotacao}deg`
      );

      img.style.animation =
        `flutuar-nuvem ${posicao.duracao}s ease-in-out infinite`;

      /*
         Faz com que cada nuvem comece
         numa fase diferente da animação.
      */

      img.style.animationDelay =
        `${i * -3}s`;

      camada.appendChild(img);
    });
}


/* ============================================================
   INSERIR CSS
   ============================================================ */

function inserirCSS() {

  const style =
    document.createElement("style");

  style.textContent =
    CSS;

  document.head.appendChild(style);
}


/* ============================================================
   PREENCHER TEXTOS
   ============================================================ */

function preencherTextos() {

  document
    .querySelector("[data-marca]")
    .textContent =
    DADOS.pagina.titulo;

  document
    .querySelector("[data-submarca]")
    .textContent =
    DADOS.pagina.subtitulo;

  document
    .querySelector("[data-titulo-menu]")
    .textContent =
    DADOS.pagina.tituloMenu;

  document
    .querySelector("[data-mensagem]")
    .textContent =
    DADOS.pagina.mensagem;

  document
    .querySelector("[data-informacao]")
    .textContent =
    DADOS.pagina.informacao;
}


/* ============================================================
   CRIAR CARTÕES DOS ANOS
   ============================================================ */

function criarCartoesAno() {

  const zona =
    document.querySelector("#anos");

  const modelo =
    document.querySelector("#modelo-ano");

  DADOS.anos
    .filter((ano) => ano.id !== "pre" && ano.id !== "ano4")
    .forEach((ano) => {

    const fragmento =
      modelo.content.cloneNode(true);

    const artigo =
      fragmento.querySelector(".ano");

    const botao =
      fragmento.querySelector(".botao-ano");

    const caixaIcon =
      fragmento.querySelector(".icone-ano");

    artigo.dataset.ano =
      ano.id;

    botao.style.setProperty(
      "--cor-1",
      ano.cor
    );

    botao.style.setProperty(
      "--cor-2",
      ano.cor2
    );

    botao.setAttribute(
      "aria-label",
      `${ano.nome}, ${ano.idade}`
    );

    const img =
      document.createElement("img");

    img.src =
      DADOS.icons.anos[ano.icon];

    img.alt = "";

    img.draggable = false;

    caixaIcon.appendChild(img);

    fragmento
      .querySelector(".nome-ano")
      .textContent =
      ano.nome;

    fragmento
      .querySelector(".idade-ano")
      .textContent =
      ano.idade;

    botao.addEventListener(
      "click",
      () => {

        window.location.href =
          ano.pagina;

      }
    );

    zona.appendChild(fragmento);

  });
}


/* ============================================================
   CRIAR DESTAQUES
   ============================================================ */

function criarDestaques() {

  const zona =
    document.querySelector("#jogos");

  const modelo =
    document.querySelector("#modelo-jogo");

  DADOS.destaques.forEach((jogo) => {

    const fragmento =
      modelo.content.cloneNode(true);

    const img =
      fragmento.querySelector(
        ".icone-jogo img"
      );

    const nome =
      fragmento.querySelector(
        ".nome-jogo"
      );

    const estrelas =
      fragmento.querySelector(
        ".estrelas"
      );

    img.src =
      DADOS.icons.destaques[jogo.icon];

    img.alt =
      jogo.nome;

    nome.textContent =
      jogo.nome;

    estrelas.textContent =
      "★".repeat(jogo.estrelas);

    estrelas.setAttribute(
      "aria-label",
      `${jogo.estrelas} estrelas`
    );

    /* Link do jogo — sem alterar o aspeto do cartão. */
    if (jogo.pagina) {
      const cartao = fragmento.querySelector(".jogo");

      if (cartao) {
        cartao.style.cursor = "pointer";
        cartao.setAttribute(
          "role",
          "link"
        );
        cartao.setAttribute(
          "tabindex",
          "0"
        );

        const abrirJogo = () => {
          window.location.href = jogo.pagina;
        };

        cartao.addEventListener(
          "click",
          abrirJogo
        );

        cartao.addEventListener(
          "keydown",
          (evento) => {
            if (
              evento.key === "Enter" ||
              evento.key === " "
            ) {
              evento.preventDefault();
              abrirJogo();
            }
          }
        );
      }
    }

    zona.appendChild(fragmento);

  });
}


/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    inserirCSS();

    criarNuvens();

    preencherTextos();

    criarCartoesAno();

    criarDestaques();

  }
);