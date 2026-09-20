/*
================================================================
 RECURSOS DO CÃO
 1.º ANO
================================================================

 Áreas:
 - Português
 - Matemática
 - Estudo do Meio

 Estrutura:

 /index.html
 /dados.js

 /icons/
    icon1.png
    pt.png
    mat.png
    em.png
    nuvem.png

================================================================
*/


const DADOS = {

  /* ==========================================================
     PÁGINA
     ========================================================== */

  pagina: {

    titulo: "1.º Ano",

    subtitulo:
      "Aprender • Explorar • Descobrir",

    tituloMenu:
      "Escolhe uma área",

    mensagem:
      "Escolhe uma área e começa a aprender!"

  },


  /* ==========================================================
     ICONS
     ========================================================== */

  icons: {

    ano:
      "icons/icon1.png",

    nuvem:
      "icons/nuvem.png",

    areas: {

      portugues:
        "icons/pt.png",

      matematica:
        "icons/mat.png",

      estudo:
        "icons/em.png"

    }

  },


  /* ==========================================================
     CORES
     ========================================================== */

  cores: {

    fundo:
      "#EAF5FC",

    ceu1:
      "#78DDF7",

    ceu2:
      "#BCEEF9",

    texto:
      "#07569A",

    branco:
      "#FFFFFF",

    sombra:
      "rgba(15, 88, 139, .20)",

    sombraForte:
      "rgba(15, 88, 139, .30)"

  },


  /* ==========================================================
     NUVENS
     ========================================================== */

  nuvens: {

    quantidade:
      3

  },


  /* ==========================================================
     ÁREAS DO 1.º ANO
     ========================================================== */

  areas: [

    {
      id:
        "portugues",

      nome:
        "Português",

      icon:
        "portugues",

      cor:
        "#01B1FB",

      cor2:
        "#008DD0",

      /*
       * Página a abrir.
       *
       * Podemos alterar estes caminhos
       * quando definires a estrutura final.
       */

      pagina:
        "portugues.html"
    },


    {
      id:
        "matematica",

      nome:
        "Matemática",

      icon:
        "matematica",

      cor:
        "#FDCE2C",

      cor2:
        "#EBAE00",

      pagina:
        "matematica.html"
    },


    {
      id:
        "estudo",

      nome:
        "Estudo do Meio",

      icon:
        "estudo",

      cor:
        "#FDCE2C",

      cor2:
        "#EBAE00",

      pagina:
        "estudo-do-meio.html"
    }

  ]

};


/* ============================================================
   CSS
   ============================================================ */

const CSS = `

/* ============================================================
   VARIÁVEIS
   ============================================================ */

:root {

  --fundo:
    ${DADOS.cores.fundo};

  --ceu1:
    ${DADOS.cores.ceu1};

  --ceu2:
    ${DADOS.cores.ceu2};

  --texto:
    ${DADOS.cores.texto};

  --branco:
    ${DADOS.cores.branco};

  --sombra:
    ${DADOS.cores.sombra};

  --sombra-forte:
    ${DADOS.cores.sombraForte};

}


/* ============================================================
   BASE
   ============================================================ */

* {
  box-sizing: border-box;
}


html {

  min-height:
    100%;

  background:
    var(--fundo);

}


body {

  margin:
    0;

  min-height:
    100vh;

  overflow-x:
    hidden;

  font-family:
    "Nunito",
    "Quicksand",
    "Arial Rounded MT Bold",
    "Trebuchet MS",
    Arial,
    sans-serif;

  color:
    var(--texto);

  background:
    var(--fundo);

}


button {

  font:
    inherit;

}


/* ============================================================
   APLICAÇÃO
   ============================================================ */

#app {

  width:
    min(100%, 1450px);

  min-height:
    100vh;

  margin:
    0 auto;

  padding:
    15px 24px 20px;

  position:
    relative;

  overflow:
    hidden;

  background:
    linear-gradient(
      180deg,
      var(--ceu1) 0%,
      var(--ceu2) 18%,
      #EAF5FC 38%,
      var(--fundo) 100%
    );

}


/* ============================================================
   NUVENS
   ============================================================ */

.camada-nuvens {

  position:
    absolute;

  inset:
    0;

  overflow:
    hidden;

  pointer-events:
    none;

  z-index:
    0;

}


.nuvem-pequena {

  position:
    absolute;

  display:
    block;

  object-fit:
    contain;

  opacity:
    .88;

  filter:
    drop-shadow(
      0 2px 1px
      rgba(80,130,160,.08)
    );

  z-index:
    0;

  transform:
    translate(-50%, -50%)
    rotate(var(--rotacao-nuvem));

}


/* ============================================================
   MOVIMENTO DAS NUVENS
   ============================================================ */

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


/* ============================================================
   CABEÇALHO
   ============================================================ */

.cabecalho {

  height:
    112px;

  position:
    relative;

  z-index:
    2;

  display:
    grid;

  grid-template-columns:
    1fr auto 1fr;

  align-items:
    center;

  width:
    100%;

}


/* ============================================================
   BOTÕES DE NAVEGAÇÃO
   ============================================================ */

.botao-navegacao {

  width:
    58px;

  height:
    58px;

  border:
    0;

  border-radius:
    18px;

  display:
    grid;

  place-items:
    center;

  color:
    #07569A;

  background:
    rgba(255,255,255,.88);

  box-shadow:
    0 5px 12px
    rgba(15,88,139,.16),

    inset 0 1px 0
    rgba(255,255,255,.95);

  cursor:
    pointer;

  transition:
    transform .15s ease,
    box-shadow .15s ease;

}


.botao-navegacao:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 8px 16px
    rgba(15,88,139,.23);

}


.botao-navegacao:active {

  transform:
    translateY(0);

}


.botao-menu {

  justify-self:
    start;

}


.botao-voltar {

  justify-self:
    end;

}


.icone-hamburguer {

  font-family:
    Arial,
    sans-serif;

  font-size:
    31px;

  line-height:
    1;

  font-weight:
    700;

}


.icone-seta {

  font-family:
    Arial,
    sans-serif;

  font-size:
    39px;

  line-height:
    .8;

  font-weight:
    400;

}


/* ============================================================
   MARCA / 1.º ANO
   ============================================================ */

.marca {

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    15px;

}


.marca-icon {

  width:
    92px;

  height:
    92px;

  flex:
    0 0 92px;

  display:
    grid;

  place-items:
    center;

}


.marca-icon img {

  width:
    100%;

  height:
    100%;

  display:
    block;

  object-fit:
    contain;

  filter:
    drop-shadow(
      0 4px 3px
      rgba(0,0,0,.13)
    );

}


.marca-texto {

  text-align:
    left;

}


.marca-texto h1 {

  margin:
    0;

  color:
    #07569A;

  font-size:
    clamp(29px, 3vw, 47px);

  line-height:
    1;

  font-weight:
    900;

  letter-spacing:
    -.8px;

  text-shadow:
    0 2px 0
    rgba(255,255,255,.8);

}


.marca-texto p {

  margin:
    7px 0 0;

  color:
    #0963A6;

  font-size:
    clamp(13px, 1.25vw, 18px);

  line-height:
    1;

  font-weight:
    800;

}


/* ============================================================
   TÍTULO
   ============================================================ */

.titulo-area {

  position:
    relative;

  z-index:
    2;

  display:
    flex;

  justify-content:
    center;

  margin:
    5px 0 22px;

}


.titulo-caixa {

  padding:
    10px 32px;

  border:
    2px solid
    rgba(100,170,210,.35);

  border-radius:
    17px;

  background:
    rgba(255,255,255,.86);

  box-shadow:
    0 4px 9px
    rgba(15,88,139,.10);

}


.titulo-caixa h2 {

  margin:
    0;

  color:
    #07569A;

  font-size:
    clamp(19px, 1.8vw, 27px);

  line-height:
    1;

  font-weight:
    900;

}


/* ============================================================
   MENUS
   ============================================================ */

.menus {

  position:
    relative;

  z-index:
    2;

  width:
    100%;

  display:
    grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap:
    22px;

}


.menu-area {

  min-width:
    0;

}


.botao-area {

  width:
    100%;

  height:
    330px;

  padding:
    25px 18px 23px;

  position:
    relative;

  overflow:
    hidden;

  border:
    4px solid
    rgba(255,255,255,.95);

  border-radius:
    28px;

  color:
    #fff;

  display:
    flex;

  flex-direction:
    column;

  align-items:
    center;

  justify-content:
    space-between;

  cursor:
    pointer;

  background:
    linear-gradient(
      145deg,
      var(--cor-1),
      var(--cor-2)
    );

  box-shadow:
    0 10px 18px
    var(--sombra),

    inset 0 1px 1px
    rgba(255,255,255,.75);

  transition:
    transform .16s ease,
    box-shadow .16s ease;

}


.botao-area:hover {

  transform:
    translateY(-5px);

  box-shadow:
    0 15px 24px
    var(--sombra-forte),

    inset 0 1px 1px
    rgba(255,255,255,.85);

}


.botao-area:active {

  transform:
    translateY(-1px);

}


/* ============================================================
   DECORAÇÕES DOS MENUS
   ============================================================ */

.botao-area::before {

  content:
    "";

  position:
    absolute;

  width:
    190%;

  height:
    105%;

  left:
    -80%;

  top:
    -65%;

  border-radius:
    50%;

  background:
    rgba(255,255,255,.15);

  pointer-events:
    none;

}


.botao-area::after {

  content:
    "";

  position:
    absolute;

  width:
    130px;

  height:
    130px;

  right:
    -55px;

  top:
    -50px;

  border-radius:
    50%;

  background:
    rgba(255,255,255,.11);

  pointer-events:
    none;

}


/* ============================================================
   BRILHO
   ============================================================ */

.brilho-area {

  position:
    absolute;

  inset:
    0;

  pointer-events:
    none;

}


/* ============================================================
   ICONS DAS ÁREAS
   ============================================================ */

.icone-area {

  width:
    165px;

  height:
    165px;

  display:
    grid;

  place-items:
    center;

  position:
    relative;

  z-index:
    1;

}


.icone-area img {

  width:
    100%;

  height:
    100%;

  object-fit:
    contain;

  display:
    block;

  filter:
    drop-shadow(
      0 7px 4px
      rgba(0,0,0,.17)
    );

}


/* ============================================================
   TEXTO DOS MENUS
   ============================================================ */

.texto-area {

  position:
    relative;

  z-index:
    1;

  text-align:
    center;

}


.nome-area {

  font-size:
    clamp(23px, 2vw, 31px);

  line-height:
    1.05;

  font-weight:
    900;

  text-shadow:
    0 2px 2px
    rgba(0,0,0,.16);

}


/* ============================================================
   MENSAGEM
   ============================================================ */

.mensagem {

  position:
    relative;

  z-index:
    2;

  display:
    flex;

  justify-content:
    center;

  margin-top:
    22px;

}


.mensagem-caixa {

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    9px;

  padding:
    10px 23px;

  border-radius:
    15px;

  color:
    #07569A;

  background:
    rgba(255,255,255,.83);

  box-shadow:
    0 4px 9px
    rgba(15,88,139,.08);

  font-size:
    clamp(13px, 1.2vw, 17px);

  font-weight:
    800;

}


.mensagem-estrela {

  color:
    #FFB400;

  font-size:
    23px;

  line-height:
    1;

}


/* ============================================================
   RODAPÉ
   ============================================================ */

.rodape {

  position:
    relative;

  z-index:
    2;

  margin-top:
    18px;

  padding:
    9px 16px;

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  border:
    2px solid
    #A5D9F8;

  border-radius:
    13px;

  background:
    rgba(255,255,255,.72);

  color:
    #07569A;

  font-size:
    12px;

  font-weight:
    800;

}


/* ============================================================
   TABLET HORIZONTAL
   ============================================================ */

@media
  (max-width: 1100px)
  and (min-width: 601px)
  and (orientation: landscape) {

  #app {

    padding:
      10px 15px 14px;

  }


  .cabecalho {

    height:
      82px;

  }


  .botao-navegacao {

    width:
      50px;

    height:
      50px;

    border-radius:
      15px;

  }


  .marca-icon {

    width:
      70px;

    height:
      70px;

    flex-basis:
      70px;

  }


  .marca {

    gap:
      10px;

  }


  .marca-texto h1 {

    font-size:
      31px;

  }


  .marca-texto p {

    margin-top:
      4px;

    font-size:
      12px;

  }


  .titulo-area {

    margin:
      2px 0 13px;

  }


  .titulo-caixa {

    padding:
      7px 24px;

  }


  .menus {

    gap:
      12px;

  }


  .botao-area {

    height:
      245px;

    padding:
      14px 10px 13px;

    border-width:
      3px;

    border-radius:
      20px;

  }


  .icone-area {

    width:
      120px;

    height:
      120px;

  }


  .nome-area {

    font-size:
      20px;

  }


  .mensagem {

    margin-top:
      13px;

  }


  .rodape {

    margin-top:
      10px;

    padding:
      6px 12px;

  }

}


/* ============================================================
   TELEMÓVEL HORIZONTAL
   ============================================================ */

@media
  (max-width: 600px)
  and (min-height: 360px)
  and (orientation: landscape) {

  #app {

    padding:
      6px 9px 8px;

  }


  .cabecalho {

    height:
      58px;

  }


  .botao-navegacao {

    width:
      39px;

    height:
      39px;

    border-radius:
      11px;

  }


  .icone-hamburguer {

    font-size:
      23px;

  }


  .icone-seta {

    font-size:
      28px;

  }


  .marca {

    gap:
      7px;

  }


  .marca-icon {

    width:
      46px;

    height:
      46px;

    flex-basis:
      46px;

  }


  .marca-texto h1 {

    font-size:
      22px;

  }


  .marca-texto p {

    margin-top:
      2px;

    font-size:
      8px;

  }


  .titulo-area {

    margin:
      1px 0 7px;

  }


  .titulo-caixa {

    padding:
      5px 17px;

    border-radius:
      10px;

  }


  .titulo-caixa h2 {

    font-size:
      13px;

  }


  .menus {

    gap:
      5px;

  }


  .botao-area {

    height:
      175px;

    padding:
      7px 4px 6px;

    border-width:
      2px;

    border-radius:
      12px;

  }


  .icone-area {

    width:
      82px;

    height:
      82px;

  }


  .nome-area {

    font-size:
      clamp(10px, 2.5vw, 15px);

  }


  .mensagem {

    margin-top:
      7px;

  }


  .mensagem-caixa {

    padding:
      5px 10px;

    gap:
      4px;

    font-size:
      8px;

    border-radius:
      8px;

  }


  .mensagem-estrela {

    font-size:
      13px;

  }


  .rodape {

    margin-top:
      6px;

    padding:
      4px 7px;

    font-size:
      7px;

    border-radius:
      7px;

  }

}


/* ============================================================
   TABLET / TELEMÓVEL VERTICAL
   ============================================================ */

@media
  (max-width: 900px)
  and (orientation: portrait) {

  #app {

    padding:
      9px 12px 13px;

  }


  .cabecalho {

    height:
      85px;

  }


  .botao-navegacao {

    width:
      48px;

    height:
      48px;

    border-radius:
      14px;

  }


  .marca-icon {

    width:
      64px;

    height:
      64px;

    flex-basis:
      64px;

  }


  .marca {

    gap:
      8px;

  }


  .marca-texto h1 {

    font-size:
      27px;

  }


  .marca-texto p {

    font-size:
      10px;

    margin-top:
      4px;

  }


  .titulo-area {

    margin:
      4px 0 14px;

  }


  .menus {

    grid-template-columns:
      1fr;

    gap:
      10px;

  }


  .botao-area {

    height:
      145px;

    display:
      grid;

    grid-template-columns:
      105px 1fr;

    align-items:
      center;

    column-gap:
      15px;

    padding:
      10px 18px;

    border-radius:
      19px;

  }


  .icone-area {

    width:
      92px;

    height:
      92px;

  }


  .texto-area {

    text-align:
      left;

  }


  .nome-area {

    font-size:
      23px;

  }


  .mensagem {

    margin-top:
      12px;

  }


  .rodape {

    margin-top:
      10px;

  }

}


/* ============================================================
   TELEMÓVEL VERTICAL
   ============================================================ */

@media
  (max-width: 600px)
  and (orientation: portrait) {

  .cabecalho {

    height:
      75px;

  }


  .botao-navegacao {

    width:
      42px;

    height:
      42px;

    border-radius:
      12px;

  }


  .icone-hamburguer {

    font-size:
      25px;

  }


  .icone-seta {

    font-size:
      30px;

  }


  .marca-icon {

    width:
      55px;

    height:
      55px;

    flex-basis:
      55px;

  }


  .marca {

    gap:
      7px;

  }


  .marca-texto h1 {

    font-size:
      23px;

  }


  .marca-texto p {

    font-size:
      8px;

  }


  .titulo-caixa {

    padding:
      6px 18px;

  }


  .titulo-caixa h2 {

    font-size:
      15px;

  }


  .botao-area {

    height:
      112px;

    grid-template-columns:
      75px 1fr;

    column-gap:
      10px;

    padding:
      7px 12px;

    border-radius:
      15px;

  }


  .icone-area {

    width:
      67px;

    height:
      67px;

  }


  .nome-area {

    font-size:
      20px;

  }


  .mensagem-caixa {

    padding:
      7px 12px;

    font-size:
      10px;

  }


  .rodape {

    font-size:
      8px;

  }

}


/* ============================================================
   FOCO
   ============================================================ */

.botao-area:focus-visible,
.botao-navegacao:focus-visible {

  outline:
    4px solid
    rgba(255,255,255,.95);

  outline-offset:
    3px;

}

`;


/* ============================================================
   NUVENS
   ============================================================ */

function criarNuvens() {

  const camada =
    document.querySelector(".camada-nuvens");

  if (!camada) return;


  /*
   * POSIÇÕES FIXAS
   *
   * Não usamos Math.random().
   *
   * Assim as nuvens ficam sempre nos
   * mesmos locais.
   */

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
    .slice(0, DADOS.nuvens.quantidade)
    .forEach((posicao, indice) => {

      const img =
        document.createElement("img");


      img.className =
        "nuvem-pequena";


      img.src =
        DADOS.icons.nuvem;


      img.alt =
        "";


      img.draggable =
        false;


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


      img.style.animationDelay =
        `${indice * -3}s`;


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
   CRIAR OS 3 MENUS
   ============================================================ */

function criarMenus() {

  const zona =
    document.querySelector("#menus");

  const modelo =
    document.querySelector("#modelo-menu");


  if (!zona || !modelo) return;


  DADOS.areas.forEach((area) => {

    const fragmento =
      modelo.content.cloneNode(true);


    const botao =
      fragmento.querySelector(
        ".botao-area"
      );


    const imagem =
      fragmento.querySelector(
        ".icone-area img"
      );


    const nome =
      fragmento.querySelector(
        ".nome-area"
      );


    /*
     * Cores do menu
     */

    botao.style.setProperty(
      "--cor-1",
      area.cor
    );


    botao.style.setProperty(
      "--cor-2",
      area.cor2
    );


    /*
     * Icon
     */

    imagem.src =
      DADOS.icons.areas[area.icon];


    imagem.alt =
      area.nome;


    /*
     * Nome
     */

    nome.textContent =
      area.nome;


    /*
     * Ação do botão
     */

    botao.addEventListener(
      "click",
      () => {

        if (area.pagina) {

          window.location.href =
            area.pagina;

        }

      }
    );


    zona.appendChild(
      fragmento
    );

  });

}


/* ============================================================
   BOTÃO MENU
   ============================================================ */

function configurarMenu() {

  const botao =
    document.querySelector(
      "#botao-menu"
    );


  if (!botao) return;


  botao.addEventListener(
    "click",
    () => {

      /*
       * Aqui vamos ligar posteriormente
       * ao menu hamburger.
       */

      console.log(
        "Menu hamburger"
      );

    }
  );

}


/* ============================================================
   BOTÃO VOLTAR
   ============================================================ */

function configurarVoltar() {

  const botao =
    document.querySelector(
      "#botao-voltar"
    );


  if (!botao) return;


  botao.addEventListener(
    "click",
    () => {

      /*
       * Volta para a página anterior.
       */

      if (
        window.history.length > 1
      ) {

        window.history.back();

      }

    }
  );

}


/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    inserirCSS();

    criarNuvens();

    criarMenus();

    configurarMenu();

    configurarVoltar();

  }
);
