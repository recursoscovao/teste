/*
================================================================
 RECURSOS Covão — DADOS E APRESENTAÇÃO
================================================================

 Este ficheiro concentra:

 - textos
 - cores
 - dimensões
 - caminhos dos icons
 - áreas
 - anos do menu
 - jogos em destaque
 - CSS
 - JavaScript

================================================================
*/


const DADOS = {


  /* ============================================================
     TEXTOS
     ============================================================ */

  pagina: {

    titulo:
      "1.º Ano",

    subtitulo:
      "Aprender • Explorar • Descobrir",

    tituloMenu:
      "Escolhe a área",

    mensagem:
      "Escolhe a área e comece a aprender!",

    informacao:
      "Recursos educativos para o 1.º ano"

  },


  /* ============================================================
     ICONS
     ============================================================ */

  icons: {


    /* ----------------------------------------------------------
       CABEÇALHO
       ---------------------------------------------------------- */

    cabecalho:
      "../icons/icon1.png",

    menu:
      "../icons/menu.png",

    seta:
      "../icons/seta.png",


    /* ----------------------------------------------------------
       ICONS DOS CARTÕES
       ---------------------------------------------------------- */

    anos: {

      portugues:
        "../icons/pt.png",

      matematica:
        "../icons/mat.png",

      estudoMeio:
        "../icons/em.png"

    },


    /* ----------------------------------------------------------
       ICONS DO MENU DOS ANOS
       ---------------------------------------------------------- */

    menuAnos: {

      inicio:
        "../icons/inicio.png",

      pre:
        "../icons/iconpre.png",

      ano1:
        "../icons/icon1.png",

      ano2:
        "../icons/icon2.png",

      ano3:
        "../icons/icon3.png",

      ano4:
        "../icons/icon4.png"

    },


    /* ----------------------------------------------------------
       JOGOS EM DESTAQUE
       ---------------------------------------------------------- */

    destaques: {

      rastros:
        "../icons/rastros.png",

      gatosCaes:
        "../icons/gatos&caes.png",

      dominorio:
        "../icons/dominorio.png",

      semaforo:
        "../icons/semaforo.png",

      quelhas:
        "../icons/quelhas.png",

      avanco:
        "../icons/avanco.png"

    }

  },


  /* ============================================================
     CORES
     ============================================================ */

  cores: {

    fundo:
      "#EAF5FC",

    ceu1:
      "#78DDF7",

    ceu2:
      "#BCEEF9",


    /* ----------------------------------------------------------
       CABEÇALHO
       ---------------------------------------------------------- */

    header:
      "#BCEEF9",

    headerTopo:
      "#78DDF7",


    /* ----------------------------------------------------------
       BOTÕES DO CABEÇALHO
       ---------------------------------------------------------- */

    azulHeader:
      "#0358A9",


    /* ----------------------------------------------------------
       TEXTOS
       ---------------------------------------------------------- */

    texto:
      "#07569A",

    textoEscuro:
      "#064B8A",

    branco:
      "#FFFFFF",


    /* ----------------------------------------------------------
       CORES DOS CARTÕES
       ---------------------------------------------------------- */

    portugues:
      "#11CBFC",

    portugues2:
      "#079BC8",

    matematica:
      "#FD6746",

    matematica2:
      "#D94328",

    estudoMeio:
      "#62D733",

    estudoMeio2:
      "#36A918",


    /* ----------------------------------------------------------
       CORES DE APOIO
       ---------------------------------------------------------- */

    amarelo:
      "#FFBA16",

    amarelo2:
      "#EF8709",

    azul:
      "#20B9EF",

    azul2:
      "#087AC9",

    verde:
      "#45C83D",

    verde2:
      "#169A3A",

    roxo:
      "#A74BEF",

    roxo2:
      "#7434B8",

    rosa:
      "#F43A9D",

    rosa2:
      "#C81970",

    creme:
      "#FFF9E1",

    creme2:
      "#F5D996",

    linha:
      "#A5D9F8",

    sombra:
      "rgba(15,88,139,.20)",

    sombraForte:
      "rgba(15,88,139,.30)"

  },


  /* ============================================================
     DIMENSÕES
     ============================================================ */

  dimensoes: {

    larguraMaxima:
      1650,

    alturaAnoDesktop:
      300,

    alturaAnoTabletHorizontal:
      245,

    alturaAnoTelemovelHorizontal:
      175,

    raioAno:
      23,

    raioDestaques:
      26,


    /* ICONS DOS CARTÕES */

    tamanhoIconAnoDesktop:
      170,

    tamanhoIconAnoTablet:
      130,

    tamanhoIconAnoTelemovelHorizontal:
      96,


    /* ICONS DOS JOGOS */

    tamanhoIconJogo:
      76,

    tamanhoIconJogoTablet:
      64,

    tamanhoIconJogoTelemovel:
      54

  },


  /* ============================================================
     ÁREAS DO 1.º ANO
     ============================================================ */

  anos: [

    {
      id:
        "portugues",

      nome:
        "Português",

      idade:
        "",

      icon:
        "portugues",

      cor:
        "#11CBFC",

      cor2:
        "#079BC8",

      pagina:
        "pt/"

    },


    {
      id:
        "matematica",

      nome:
        "Matemática",

      idade:
        "",

      icon:
        "matematica",

      cor:
        "#FD6746",

      cor2:
        "#D94328",

      pagina:
        "mat/"

    },


    {
      id:
        "estudoMeio",

      nome:
        "Estudo do Meio",

      idade:
        "",

      icon:
        "estudoMeio",

      cor:
        "#62D733",

      cor2:
        "#36A918",

      pagina:
        "em/"

    }

  ],


  /* ============================================================
     ANOS DO MENU HAMBÚRGUER
     ============================================================ */

  menuAnos: [

    {
      id:
        "inicio",

      nome:
        "Início",

      icon:
        "inicio",

      pagina:
        "../"

    },


    {
      id:
        "pre",

      nome:
        "Pré-Escolar",

      icon:
        "pre",

      pagina:
        "../pre/"

    },


    {
      id:
        "ano1",

      nome:
        "1.º Ano",

      icon:
        "ano1",

      pagina:
        "../1/"

    },


    {
      id:
        "ano2",

      nome:
        "2.º Ano",

      icon:
        "ano2",

      pagina:
        "../2/"

    },


    {
      id:
        "ano3",

      nome:
        "3.º Ano",

      icon:
        "ano3",

      pagina:
        "../3/"

    },


    {
      id:
        "ano4",

      nome:
        "4.º Ano",

      icon:
        "ano4",

      pagina:
        "../4/"

    }

  ],


  /* ============================================================
     JOGOS EM DESTAQUE
     ============================================================ */

  destaques: [

    {
      id:
        "rastros",

      nome:
        "Rastros",

      icon:
        "rastros",

      estrelas:
        5,

      pagina:
        "jogos/rastros/index.html"

    },


    {
      id:
        "gatosCaes",

      nome:
        "Gatos&Cães",

      icon:
        "gatosCaes",

      estrelas:
        5,

      pagina:
        "jogos/gatos-caes/index.html"

    },


    {
      id:
        "dominio",

      nome:
        "Dominório",

      icon:
        "dominorio",

      estrelas:
        5,

      pagina:
        "jogos/dominio/index.html"

    },


    {
      id:
        "semaforo",

      nome:
        "Semáforo",

      icon:
        "semaforo",

      estrelas:
        5,

      pagina:
        "jogos/semaforo/index.html"

    },


    {
      id:
        "quelhas",

      nome:
        "Quellhas",

      icon:
        "quelhas",

      estrelas:
        5,

      pagina:
        "jogos/quelhas/index.html"

    },


    {
      id:
        "avanco",

      nome:
        "Avanço",

      icon:
        "avanco",

      estrelas:
        5,

      pagina:
        "jogos/avanco/index.html"

    }

  ]

};


/* ==============================================================
   CSS
   ============================================================== */

const CSS = `


/* ============================================================
   VARIÁVEIS
   ============================================================ */

:root{

  --fundo:${DADOS.cores.fundo};

  --ceu1:${DADOS.cores.ceu1};

  --ceu2:${DADOS.cores.ceu2};

  --header:${DADOS.cores.header};

  --header-topo:${DADOS.cores.headerTopo};

  --texto:${DADOS.cores.texto};

  --texto-escuro:${DADOS.cores.textoEscuro};

  --branco:${DADOS.cores.branco};

  --creme:${DADOS.cores.creme};

  --creme2:${DADOS.cores.creme2};

  --linha:${DADOS.cores.linha};

  --sombra:${DADOS.cores.sombra};

  --sombra-forte:${DADOS.cores.sombraForte};

}


/* ============================================================
   BASE
   ============================================================ */

*{
  box-sizing:border-box;
}


html{

  min-height:100%;

  background:
    var(--fundo);

}


body{

  margin:0;

  min-height:100vh;

  overflow-x:hidden;

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


button{
  font:inherit;
}


/* ============================================================
   APLICAÇÃO
   ============================================================ */

#app{

  width:
    min(
      100%,
      ${DADOS.dimensoes.larguraMaxima}px
    );

  min-height:100vh;

  margin:0 auto;

  padding:
    13px
    20px
    16px;

  position:relative;

  overflow:hidden;

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
   CABEÇALHO
   ============================================================ */

.cabecalho{

  position:relative;

  z-index:10;

  height:82px;

  width:
    calc(100% + 40px);

  margin-left:-20px;

  margin-top:-13px;

  padding:
    0 18px;

  display:flex;

  align-items:center;

  justify-content:center;

  background:
    linear-gradient(
      180deg,
      ${DADOS.cores.headerTopo} 0%,
      ${DADOS.cores.header} 100%
    );

  border-bottom:
    2px solid
    rgba(255,255,255,.55);

  box-shadow:
    0 2px 7px
    rgba(15,88,139,.12);

}


/* ============================================================
   BOTÕES DO CABEÇALHO
   ============================================================ */

.botao-menu,
.botao-seta{

  position:absolute;

  top:50%;

  transform:
    translateY(-50%);

  width:58px;

  height:58px;

  padding:0;

  border:0;

  border-radius:50%;

  background:
    ${DADOS.cores.azulHeader};

  cursor:pointer;

  box-shadow:
    0 3px 7px
    rgba(0,0,0,.18);

  transition:
    transform .15s ease,
    box-shadow .15s ease;

  z-index:20;

}


.botao-menu{

  left:18px;

}


.botao-seta{

  right:18px;

}


/* ------------------------------------------------------------
   ICON HAMBÚRGUER — MAIS PEQUENO
   ------------------------------------------------------------ */

.botao-menu::before{

  content:"";

  position:absolute;

  width:56%;

  height:56%;

  left:22%;

  top:22%;

  background-image:
    url("${DADOS.icons.menu}");

  background-position:center;

  background-repeat:no-repeat;

  background-size:contain;

}


/* ------------------------------------------------------------
   ICON SETA
   ------------------------------------------------------------ */

.botao-seta::before{

  content:"";

  position:absolute;

  width:68%;

  height:68%;

  left:16%;

  top:16%;

  background-image:
    url("${DADOS.icons.seta}");

  background-position:center;

  background-repeat:no-repeat;

  background-size:contain;

}


.botao-menu:hover,
.botao-seta:hover{

  transform:
    translateY(-50%)
    scale(1.05);

  box-shadow:
    0 5px 10px
    rgba(0,0,0,.22);

}


.botao-menu:active,
.botao-seta:active{

  transform:
    translateY(-50%)
    scale(.96);

}


/* ============================================================
   MENU HAMBÚRGUER
   ============================================================ */

.menu-acordeao{

  position:absolute;

  top:72px;

  left:18px;

  width:300px;

  padding:0;

  background:
    rgba(255,255,255,.98);

  border:
    2px solid
    #A5D9F8;

  border-top:
    4px solid
    ${DADOS.cores.azulHeader};

  border-radius:
    0 0 20px 20px;

  box-shadow:
    0 10px 25px
    rgba(15,88,139,.24);

  opacity:0;

  visibility:hidden;

  transform:
    translateY(-12px)
    scale(.98);

  transform-origin:
    top left;

  transition:
    opacity .22s ease,
    transform .22s ease,
    visibility .22s ease;

  overflow:hidden;

  z-index:15;

}


.menu-acordeao.aberto{

  opacity:1;

  visibility:visible;

  transform:
    translateY(0)
    scale(1);

}


/* ============================================================
   CABEÇALHO DO MENU
   ============================================================ */

.menu-acordeao-topo{

  padding:
    12px
    14px
    10px;

  text-align:center;

  background:
    linear-gradient(
      180deg,
      #F5FCFF,
      #EAF7FD
    );

  border-bottom:
    1px solid
    #D6EDF9;

}


.menu-acordeao-titulo{

  color:
    #07569A;

  font-size:19px;

  line-height:1.1;

  font-weight:900;

}


.menu-acordeao-subtitulo{

  margin-top:4px;

  color:
    #4B8CB7;

  font-size:11px;

  font-weight:700;

}


/* ============================================================
   LISTA DO MENU
   ============================================================ */

.menu-anos{

  display:flex;

  flex-direction:column;

  gap:4px;

  padding:
    8px;

}


.menu-ano{

  width:100%;

  min-height:55px;

  padding:
    5px
    10px;

  display:flex;

  align-items:center;

  gap:13px;

  border:
    1px solid
    transparent;

  border-radius:14px;

  background:
    transparent;

  color:
    #07569A;

  cursor:pointer;

  text-align:left;

  font-weight:800;

  transition:
    background .16s ease,
    border-color .16s ease,
    transform .16s ease,
    box-shadow .16s ease;

}


.menu-ano:hover{

  background:
    #EAF7FD;

  border-color:
    #C9E8F7;

  transform:
    translateX(3px);

  box-shadow:
    0 2px 6px
    rgba(15,88,139,.08);

}


.menu-ano:active{

  transform:
    translateX(1px)
    scale(.99);

}


/* ============================================================
   ICONS DO MENU
   ============================================================ */

.menu-ano-icon{

  width:45px;

  height:45px;

  flex:
    0 0 45px;

  display:flex;

  align-items:center;

  justify-content:center;

}


.menu-ano-icon img{

  width:100%;

  height:100%;

  object-fit:contain;

  display:block;

}


.menu-ano-nome{

  font-size:17px;

}


/* ============================================================
   MARCA
   ============================================================ */

.marca{

  display:flex;

  align-items:center;

  justify-content:center;

  gap:9px;

  text-align:left;

}


.marca-sol{

  width:54px;

  height:62px;

  position:relative;

  flex:
    0 0 54px;

}


.marca-sol::before{

  content:"";

  position:absolute;

  inset:0;

  background:
    url("${DADOS.icons.cabecalho}")
    center / contain
    no-repeat;

  filter:
    drop-shadow(
      0 2px 2px
      rgba(0,0,0,.12)
    );

}


.marca-texto h1{

  margin:0;

  color:#07569A;

  font-size:
    clamp(
      28px,
      3vw,
      45px
    );

  line-height:.98;

  font-weight:900;

  letter-spacing:-.9px;

  text-shadow:
    0 1px 0
    rgba(255,255,255,.75);

}


.marca-texto p{

  margin:
    5px
    0
    0;

  color:#07569A;

  font-size:
    clamp(
      13px,
      1.2vw,
      18px
    );

  line-height:1;

  font-weight:700;

}


/* ============================================================
   CAMADAS
   ============================================================ */

.titulo-menu,
.anos,
.destaques,
.rodape{

  position:relative;

  z-index:1;

}


/* ============================================================
   TÍTULO ESCOLHE A ÁREA
   ============================================================ */

.titulo-menu{

  width:fit-content;

  margin:
    20px
    auto
    19px;

  padding:
    8px
    30px;

  border:
    2px solid
    rgba(222,157,39,.42);

  border-radius:16px;

  background:
    linear-gradient(
      180deg,
      #FFFDEC,
      var(--creme)
    );

  box-shadow:
    0 3px 7px
    rgba(118,88,17,.12),

    inset
    0 1px 0
    rgba(255,255,255,.95);

}


.titulo-menu h2{

  margin:0;

  color:#74440C;

  font-size:
    clamp(
      18px,
      1.7vw,
      27px
    );

  line-height:1;

  font-weight:900;

}


/* ============================================================
   CARTÕES
   ============================================================ */

.anos{

  width:90%;

  margin:
    0 auto;

  display:grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0,1fr)
    );

  gap:18px;

}


.ano{

  min-width:0;

}


.botao-ano{

  width:100%;

  height:
    ${DADOS.dimensoes.alturaAnoDesktop}px;

  padding:
    10px
    10px
    12px;

  border:
    3px solid
    rgba(255,255,255,.94);

  border-radius:
    ${DADOS.dimensoes.raioAno}px;

  color:#fff;

  display:flex;

  flex-direction:column;

  align-items:center;

  justify-content:space-between;

  position:relative;

  overflow:hidden;

  cursor:pointer;

  background:
    linear-gradient(
      145deg,
      var(--cor-1),
      var(--cor-2)
    );

  box-shadow:
    0 9px 15px
    var(--sombra),

    inset
    0 1px 1px
    rgba(255,255,255,.7);

  transition:
    transform .15s ease,
    box-shadow .15s ease;

}


.botao-ano::before{

  content:"";

  position:absolute;

  width:170%;

  height:110%;

  left:-95%;

  top:-63%;

  border-radius:50%;

  background:
    rgba(255,255,255,.15);

  pointer-events:none;

}


.botao-ano::after{

  content:"";

  position:absolute;

  width:90px;

  height:90px;

  right:-34px;

  top:-35px;

  border-radius:50%;

  background:
    rgba(255,255,255,.10);

  pointer-events:none;

}


.botao-ano:hover{

  transform:
    translateY(-4px);

  box-shadow:
    0 13px 20px
    var(--sombra-forte),

    inset
    0 1px 1px
    rgba(255,255,255,.75);

}


.botao-ano:active{

  transform:
    translateY(-1px);

}


/* ============================================================
   ICONS DOS CARTÕES
   ============================================================ */

.icone-ano{

  width:
    ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  height:
    ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  flex:
    0 0
    ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  display:grid;

  place-items:center;

  position:relative;

  z-index:1;

}


.icone-ano img{

  width:100%;

  height:100%;

  display:block;

  object-fit:contain;

  filter:
    drop-shadow(
      0 5px 3px
      rgba(0,0,0,.16)
    );

}


/* ============================================================
   TEXTO DOS CARTÕES
   ============================================================ */

.texto-ano{

  position:relative;

  z-index:1;

  text-align:center;

}


.nome-ano{

  font-family:
    "Nunito",
    "Quicksand",
    "Arial Rounded MT Bold",
    "Trebuchet MS",
    sans-serif;

  font-size:
    clamp(
      21px,
      1.8vw,
      29px
    );

  line-height:1.05;

  font-weight:800;

  letter-spacing:-.25px;

  text-shadow:
    0 2px 1px
    rgba(0,0,0,.17);

}


.idade-ano{

  margin-top:7px;

  font-size:
    clamp(
      14px,
      1.2vw,
      18px
    );

  line-height:1;

  font-weight:700;

}


/* ============================================================
   DESTAQUES
   ============================================================ */

.destaques{

  margin-top:20px;

  padding:
    23px
    28px
    25px;

  border-radius:
    ${DADOS.dimensoes.raioDestaques}px;

  background:
    rgba(255,255,255,.93);

  box-shadow:
    0 7px 18px
    rgba(25,100,150,.10),

    inset
    0 1px 0
    rgba(255,255,255,1);

}


/* ============================================================
   TÍTULO DESTAQUES
   ============================================================ */

.titulo-destaques{

  display:grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items:center;

  gap:28px;

  margin:
    0
    30px
    25px;

}


.titulo-destaques .linha{

  height:3px;

  background:
    #A7D5FA;

  border-radius:99px;

}


.titulo-destaques h2{

  margin:0;

  color:#064F91;

  font-size:
    clamp(
      19px,
      1.65vw,
      26px
    );

  line-height:1;

  font-weight:900;

  white-space:nowrap;

  text-align:center;

}


.titulo-destaques h2 span{

  margin-right:7px;

  font-size:.92em;

}


/* ============================================================
   JOGOS
   ============================================================ */

.jogos{

  display:grid;

  grid-template-columns:
    repeat(
      6,
      minmax(0,1fr)
    );

  gap:20px;

  align-items:start;

}


.jogo{

  min-width:0;

  display:flex;

  flex-direction:column;

  align-items:center;

  text-align:center;

}


.icone-jogo{

  width:
    ${DADOS.dimensoes.tamanhoIconJogo}px;

  height:
    ${DADOS.dimensoes.tamanhoIconJogo}px;

  display:grid;

  place-items:center;

  margin-bottom:10px;

}


.icone-jogo img{

  width:100%;

  height:100%;

  object-fit:contain;

  display:block;

}


.nome-jogo{

  min-height:25px;

  color:#064F91;

  font-size:
    clamp(
      15px,
      1.25vw,
      20px
    );

  line-height:1.05;

  font-weight:900;

}


.estrelas{

  margin-top:7px;

  color:#FFB400;

  font-family:Arial,sans-serif;

  font-size:
    clamp(
      15px,
      1.15vw,
      18px
    );

  line-height:1;

  letter-spacing:1px;

}


/* ============================================================
   RODAPÉ
   ============================================================ */

.rodape{

  width:100%;

  min-height:53px;

  margin-top:15px;

  padding:
    8px
    17px;

  display:grid;

  grid-template-columns:
    1fr
    1fr;

  gap:15px;

  align-items:center;

  border:
    2px solid
    var(--linha);

  border-radius:14px;

  background:
    rgba(255,255,255,.78);

  box-shadow:
    0 4px 10px
    rgba(16,103,150,.08);

  font-size:
    clamp(
      11px,
      1vw,
      14px
    );

  font-weight:800;

}


.rodape-item{

  display:flex;

  align-items:center;

  gap:8px;

}


.rodape-info{

  justify-content:flex-end;

}


.estrela{

  color:#FFB400;

  font-size:25px;

}


.info{

  width:25px;

  height:25px;

  display:grid;

  place-items:center;

  border-radius:50%;

  color:#fff;

  background:#087AC9;

  font-family:Arial,sans-serif;

  font-weight:900;

}


/* ============================================================
   TABLET HORIZONTAL
   ============================================================ */

@media
(max-width:1100px)
and (min-width:601px)
and (orientation:landscape){

  #app{

    padding:
      9px
      13px
      12px;

  }


  .cabecalho{

    height:64px;

    width:
      calc(100% + 26px);

    margin-left:-13px;

    margin-top:-9px;

  }


  .botao-menu,
  .botao-seta{

    width:50px;

    height:50px;

  }


  .botao-menu{
    left:12px;
  }


  .botao-seta{
    right:12px;
  }


  .botao-menu::before{

    width:55%;

    height:55%;

    left:22.5%;

    top:22.5%;

  }


  .marca-sol{

    width:45px;

    height:52px;

    flex-basis:45px;

  }


  .marca-texto h1{
    font-size:28px;
  }


  .marca-texto p{
    font-size:12px;
  }


  .menu-acordeao{

    top:58px;

    left:12px;

    width:260px;

  }


  .anos{

    width:90%;

    gap:10px;

  }


  .botao-ano{

    height:
      ${DADOS.dimensoes.alturaAnoTabletHorizontal}px;

  }


  .icone-ano{

    width:
      ${DADOS.dimensoes.tamanhoIconAnoTablet}px;

    height:
      ${DADOS.dimensoes.tamanhoIconAnoTablet}px;

    flex-basis:
      ${DADOS.dimensoes.tamanhoIconAnoTablet}px;

  }


  .nome-ano{

    font-size:20px;

  }


  .destaques{

    margin-top:12px;

    padding:
      15px
      16px
      17px;

  }


  .titulo-destaques{

    margin-bottom:15px;

    gap:16px;

  }


  .titulo-destaques h2{
    font-size:18px;
  }


  .jogos{
    gap:10px;
  }


  .icone-jogo{

    width:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;

    height:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;

  }


  .nome-jogo{
    font-size:12px;
  }


  .estrelas{
    font-size:15px;
  }


  .rodape{

    margin-top:9px;

    min-height:42px;

  }

}


/* ============================================================
   TELEMÓVEL HORIZONTAL
   ============================================================ */

@media
(max-width:600px)
and (min-height:360px)
and (orientation:landscape){

  #app{

    padding:
      7px
      10px
      9px;

  }


  .cabecalho{

    height:50px;

    width:
      calc(100% + 20px);

    margin-left:-10px;

    margin-top:-7px;

  }


  .botao-menu,
  .botao-seta{

    width:42px;

    height:42px;

  }


  .botao-menu{
    left:8px;
  }


  .botao-seta{
    right:8px;
  }


  .botao-menu::before{

    width:54%;

    height:54%;

    left:23%;

    top:23%;

  }


  .marca-sol{

    width:34px;

    height:40px;

    flex-basis:34px;

  }


  .marca-texto h1{
    font-size:22px;
  }


  .marca-texto p{
    font-size:8px;
  }


  .menu-acordeao{

    top:45px;

    left:8px;

    width:235px;

  }


  .menu-ano{

    min-height:45px;

  }


  .menu-ano-icon{

    width:36px;

    height:36px;

    flex-basis:36px;

  }


  .menu-ano-nome{
    font-size:14px;
  }


  .titulo-menu{

    margin-top:20px;

    margin-bottom:8px;

    padding:
      5px
      18px;

  }


  .titulo-menu h2{
    font-size:14px;
  }


  .anos{

    width:90%;

    gap:5px;

  }


  .botao-ano{

    height:
      ${DADOS.dimensoes.alturaAnoTelemovelHorizontal}px;

  }


  .icone-ano{

    width:
      ${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

    height:
      ${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

    flex-basis:
      ${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

  }


  .nome-ano{
    font-size:15px;
  }


  .destaques{

    margin-top:8px;

    padding:
      9px;

  }


  .titulo-destaques{

    margin:
      0
      7px
      8px;

    gap:8px;

  }


  .titulo-destaques h2{
    font-size:13px;
  }


  .jogos{
    gap:4px;
  }


  .icone-jogo{

    width:52px;

    height:52px;

  }


  .nome-jogo{
    font-size:8px;
  }


  .estrelas{
    font-size:8px;
  }


  .rodape{

    margin-top:7px;

    min-height:31px;

    font-size:7px;

  }

}


/* ============================================================
   TABLET / TELEMÓVEL VERTICAL
   ============================================================ */

@media
(max-width:900px)
and (orientation:portrait){

  #app{

    padding:
      10px
      12px
      13px;

  }


  .cabecalho{

    height:66px;

    width:
      calc(100% + 24px);

    margin-left:-12px;

    margin-top:-10px;

  }


  .botao-menu,
  .botao-seta{

    width:48px;

    height:48px;

  }


  .botao-menu{
    left:10px;
  }


  .botao-seta{
    right:10px;
  }


  .botao-menu::before{

    width:54%;

    height:54%;

    left:23%;

    top:23%;

  }


  .marca-sol{

    width:48px;

    height:48px;

    flex-basis:48px;

  }


  .marca-texto h1{
    font-size:25px;
  }


  .marca-texto p{
    font-size:10px;
  }


  .menu-acordeao{

    top:60px;

    left:10px;

    width:
      calc(100% - 20px);

    max-width:340px;

  }


  .titulo-menu{

    margin-top:20px;

    margin-bottom:12px;

    padding:
      7px
      21px;

  }


  .titulo-menu h2{
    font-size:17px;
  }


  /* ----------------------------------------------------------
     AQUI VOLTAMOS À LARGURA ORIGINAL
     ---------------------------------------------------------- */

  .anos{

    width:100%;

    grid-template-columns:
      1fr;

    gap:9px;

  }


  .botao-ano{

    height:126px;

    padding:
      10px
      18px;

    display:grid;

    grid-template-columns:
      105px
      1fr;

    column-gap:15px;

  }


  .icone-ano{

    width:100px;

    height:100px;

    flex-basis:100px;

  }


  .texto-ano{
    text-align:left;
  }


  .nome-ano{
    font-size:22px;
  }


  .destaques{

    margin-top:12px;

    padding:
      14px
      12px
      16px;

  }


  .titulo-destaques{

    margin:
      0
      10px
      14px;

    gap:10px;

  }


  .titulo-destaques h2{
    font-size:17px;
  }


  .jogos{

    grid-template-columns:
      repeat(
        3,
        minmax(0,1fr)
      );

    row-gap:18px;

  }


  .icone-jogo{

    width:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;

    height:
      ${DADOS.dimensoes.tamanhoIconJogoTablet}px;

  }


  .nome-jogo{
    font-size:13px;
  }


  .estrelas{
    font-size:13px;
  }


  .rodape{

    margin-top:11px;

    grid-template-columns:
      1fr;

    gap:5px;

  }


  .rodape-info{
    justify-content:flex-start;
  }

}


/* ============================================================
   TELEMÓVEL VERTICAL PEQUENO
   ============================================================ */

@media
(max-width:600px)
and (orientation:portrait){

  .cabecalho{

    height:59px;

    width:
      calc(100% + 20px);

    margin-left:-10px;

    margin-top:-7px;

  }


  .botao-menu,
  .botao-seta{

    width:43px;

    height:43px;

  }


  .botao-menu{
    left:7px;
  }


  .botao-seta{
    right:7px;
  }


  .botao-menu::before{

    width:53%;

    height:53%;

    left:23.5%;

    top:23.5%;

  }


  .marca{

    gap:5px;

  }


  .marca-sol{

    width:43px;

    height:43px;

    flex-basis:43px;

  }


  .marca-texto h1{
    font-size:22px;
  }


  .marca-texto p{
    font-size:9px;
  }


  .menu-acordeao{

    top:53px;

    left:7px;

    width:
      calc(100% - 14px);

  }


  .menu-ano{

    min-height:48px;

  }


  .menu-ano-icon{

    width:38px;

    height:38px;

    flex-basis:38px;

  }


  .menu-ano-nome{
    font-size:15px;
  }


  .titulo-menu{

    margin-top:20px;

    padding:
      6px
      18px;

    border-radius:11px;

  }


  .titulo-menu h2{
    font-size:15px;
  }


  /* ----------------------------------------------------------
     TAMBÉM SEM REDUÇÃO DE 10% NO TELEMÓVEL
     ---------------------------------------------------------- */

  .anos{

    width:100%;

  }


  .botao-ano{

    height:100px;

    grid-template-columns:
      78px
      1fr;

    column-gap:10px;

    padding:
      7px
      12px;

  }


  .icone-ano{

    width:72px;

    height:72px;

    flex-basis:72px;

  }


  .nome-ano{
    font-size:18px;
  }


  .idade-ano{
    font-size:11px;
  }


  .destaques{

    padding:
      10px
      8px
      12px;

  }


  .titulo-destaques h2{
    font-size:14px;
  }


  .jogos{

    grid-template-columns:
      repeat(
        3,
        minmax(0,1fr)
      );

    row-gap:13px;

  }


  .icone-jogo{

    width:
      ${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;

    height:
      ${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;

  }


  .nome-jogo{
    font-size:11px;
  }


  .estrelas{
    font-size:10px;
  }


  .rodape{
    font-size:9px;
  }

}

`;


/* ==============================================================
   INSERIR CSS
   ============================================================== */

function inserirCSS(){

  const style =
    document.createElement("style");

  style.textContent =
    CSS;

  document.head.appendChild(style);

}


/* ==============================================================
   TEXTOS
   ============================================================== */

function preencherTextos(){

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


/* ==============================================================
   CARTÕES DAS ÁREAS
   ============================================================== */

function criarCartoesAno(){

  const zona =
    document.querySelector("#anos");


  const modelo =
    document.querySelector("#modelo-ano");


  DADOS.anos.forEach(
    (ano)=>{

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
        ano.nome
      );


      const img =
        document.createElement("img");


      img.src =
        DADOS.icons.anos[ano.icon];


      img.alt =
        "";


      img.draggable =
        false;


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
        ()=>{

          window.location.href =
            ano.pagina;

        }
      );


      zona.appendChild(fragmento);

    }
  );

}


/* ==============================================================
   MENU DOS ANOS
   ============================================================== */

function criarMenuAnos(){

  const zona =
    document.querySelector("#menu-anos");


  const modelo =
    document.querySelector(
      "#modelo-menu-ano"
    );


  DADOS.menuAnos.forEach(
    (ano)=>{

      const fragmento =
        modelo.content.cloneNode(true);


      const botao =
        fragmento.querySelector(
          ".menu-ano"
        );


      const caixaIcon =
        fragmento.querySelector(
          ".menu-ano-icon"
        );


      const nome =
        fragmento.querySelector(
          ".menu-ano-nome"
        );


      const img =
        document.createElement("img");


      img.src =
        DADOS.icons.menuAnos[
          ano.icon
        ];


      img.alt =
        "";


      img.draggable =
        false;


      caixaIcon.appendChild(img);


      nome.textContent =
        ano.nome;


      botao.addEventListener(
        "click",
        ()=>{

          window.location.href =
            ano.pagina;

        }
      );


      zona.appendChild(
        fragmento
      );

    }
  );

}


/* ==============================================================
   COMPORTAMENTO DO MENU
   ============================================================== */

function configurarMenu(){

  const botao =
    document.querySelector(
      ".botao-menu"
    );


  const menu =
    document.querySelector(
      ".menu-acordeao"
    );


  if(
    !botao ||
    !menu
  ){

    return;

  }


  botao.addEventListener(
    "click",
    (evento)=>{

      evento.stopPropagation();


      const aberto =
        menu.classList.toggle(
          "aberto"
        );


      botao.setAttribute(
        "aria-expanded",
        aberto
      );


      menu.setAttribute(
        "aria-hidden",
        !aberto
      );

    }
  );


  document.addEventListener(
    "click",
    (evento)=>{

      if(
        !menu.contains(
          evento.target
        ) &&
        !botao.contains(
          evento.target
        )
      ){

        menu.classList.remove(
          "aberto"
        );


        botao.setAttribute(
          "aria-expanded",
          "false"
        );


        menu.setAttribute(
          "aria-hidden",
          "true"
        );

      }

    }
  );

}


/* ==============================================================
   JOGOS EM DESTAQUE
   ============================================================== */

function criarDestaques(){

  const zona =
    document.querySelector(
      "#jogos"
    );


  const modelo =
    document.querySelector(
      "#modelo-jogo"
    );


  DADOS.destaques.forEach(
    (jogo)=>{

      const fragmento =
        modelo.content.cloneNode(
          true
        );


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
        DADOS.icons.destaques[
          jogo.icon
        ];


      img.alt =
        jogo.nome;


      nome.textContent =
        jogo.nome;


      estrelas.textContent =
        "★".repeat(
          jogo.estrelas
        );


      estrelas.setAttribute(
        "aria-label",
        `${jogo.estrelas} estrelas`
      );


      const cartao =
        fragmento.querySelector(
          ".jogo"
        );


      if(
        jogo.pagina &&
        cartao
      ){

        cartao.style.cursor =
          "pointer";


        cartao.addEventListener(
          "click",
          ()=>{

            window.location.href =
              jogo.pagina;

          }
        );

      }


      zona.appendChild(
        fragmento
      );

    }
  );

}


/* ==============================================================
   INICIALIZAÇÃO
   ============================================================== */

document.addEventListener(
  "DOMContentLoaded",
  ()=>{

    inserirCSS();

    preencherTextos();

    criarCartoesAno();

    criarMenuAnos();

    configurarMenu();

    criarDestaques();

  }
);
