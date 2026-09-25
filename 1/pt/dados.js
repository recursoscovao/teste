/*
================================================================
 RECURSOS Covão — DADOS E APRESENTAÇÃO
================================================================

 Este ficheiro concentra:
 - textos
 - cores
 - dimensões
 - caminhos dos icons
 - definição dos anos
 - menu de navegação
 - jogos em destaque
 - CSS
 - JavaScript

 O index.html contém apenas a estrutura HTML.
================================================================
*/


/* ==============================================================
   DADOS PRINCIPAIS
   ============================================================== */

const DADOS = {


  /* ============================================================
     INFORMAÇÕES DA PÁGINA
     ============================================================ */

  pagina: {

    titulo: "1.º Ano",

    subtitulo: "Aprender • Explorar • Descobrir",

    tituloMenu: "Escolhe a área",

    mensagem: "Escolhe a área e comece a aprender!",

    informacao: "Recursos educativos para o 1.º ano"

  },


  /* ============================================================
     ICONS
     ============================================================ */

  icons: {

    cabecalho: "../icons/icon1.png",

    menu: "../icons/menu.png",

    seta: "../icons/seta.png",


    /* ----------------------------------------------------------
       ICONS DAS ÁREAS
       ---------------------------------------------------------- */

    anos: {

      portugues: "../icons/pt.png",

      matematica: "../icons/mat.png",

      estudoMeio: "../icons/em.png"

    },


    /* ----------------------------------------------------------
       ICONS DO MENU DOS ANOS
       ---------------------------------------------------------- */

    menuAnos: {

      inicio: "../icons/inicio.png",

      pre: "../icons/iconpre.png",

      ano1: "../icons/icon1.png",

      ano2: "../icons/icon2.png",

      ano3: "../icons/icon3.png",

      ano4: "../icons/icon4.png"

    },


    /* ----------------------------------------------------------
       ICONS DOS JOGOS
       ---------------------------------------------------------- */

    destaques: {

      rastros: "../icons/rastros.png",

      gatosCaes: "../icons/gatos&caes.png",

      dominorio: "../icons/dominorio.png",

      semaforo: "../icons/semaforo.png",

      quelhas: "../icons/quelhas.png",

      avanco: "../icons/avanco.png"

    }

  },


  /* ============================================================
     CORES
     ============================================================ */

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

    portugues: "#11CBFC",

    portugues2: "#079BC8",

    matematica: "#FD6746",

    matematica2: "#D94328",

    estudoMeio: "#62D733",

    estudoMeio2: "#36A918",

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

    sombra: "rgba(15,88,139,.20)",

    sombraForte: "rgba(15,88,139,.30)"

  },


  /* ============================================================
     DIMENSÕES
     ============================================================ */

  dimensoes: {

    larguraMaxima: 1650,

    alturaAnoDesktop: 300,

    alturaAnoTabletHorizontal: 245,

    alturaAnoTelemovelHorizontal: 175,

    /* Valor retirado do código original */

    raioAno: 23,

    raioDestaques: 26,


    /* ----------------------------------------------------------
       ICONS DOS CARTÕES
       ---------------------------------------------------------- */

    tamanhoIconAnoDesktop: 170,

    tamanhoIconAnoTablet: 100,

    tamanhoIconAnoTelemovelHorizontal: 76,


    /* ----------------------------------------------------------
       ICONS DOS JOGOS
       ---------------------------------------------------------- */

    tamanhoIconJogo: 76,

    tamanhoIconJogoTablet: 64,

    tamanhoIconJogoTelemovel: 54

  },


  /* ============================================================
     ÁREAS
     ============================================================ */

  anos: [

    {

      id: "portugues",

      nome: "Português",

      idade: "6 - 7 anos",

      icon: "portugues",

      cor: "#11CBFC",

      cor2: "#079BC8",

      pagina: "pt/"

    },


    {

      id: "matematica",

      nome: "Matemática",

      idade: "",

      icon: "matematica",

      cor: "#FD6746",

      cor2: "#D94328",

      pagina: "mat/"

    },


    {

      id: "estudoMeio",

      nome: "Estudo do Meio",

      idade: "",

      icon: "estudoMeio",

      cor: "#62D733",

      cor2: "#36A918",

      pagina: "em/"

    }

  ],


  /* ============================================================
     MENU DOS ANOS
     ============================================================ */

  menuAnos: [

    {

      id: "inicio",

      nome: "Início",

      icon: "inicio",

      pagina: "../"

    },


    {

      id: "pre",

      nome: "Pré-Escolar",

      icon: "pre",

      pagina: "../pre/"

    },


    {

      id: "ano1",

      nome: "1.º Ano",

      icon: "ano1",

      pagina: "../1/"

    },


    {

      id: "ano2",

      nome: "2.º Ano",

      icon: "ano2",

      pagina: "../2/"

    },


    {

      id: "ano3",

      nome: "3.º Ano",

      icon: "ano3",

      pagina: "../3/"

    },


    {

      id: "ano4",

      nome: "4.º Ano",

      icon: "ano4",

      pagina: "../4/"

    }

  ],


  /* ============================================================
     JOGOS EM DESTAQUE
     ============================================================ */

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


/* ==============================================================
   CSS
   ============================================================== */

function inserirCSS() {

  const estilo = document.createElement("style");

  estilo.textContent = `


    /* ==========================================================
       RESET
       ========================================================== */

    *{
      box-sizing:border-box;
    }


    html,
    body{

      margin:0;

      padding:0;

      width:100%;

      min-height:100%;

      font-family:"Nunito",Arial,sans-serif;

    }


    body{

      background:${DADOS.cores.fundo};

      color:${DADOS.cores.texto};

      overflow-x:hidden;

    }


    button{

      font-family:inherit;

    }


    /* ==========================================================
       MAIN
       ========================================================== */

    #app{

      min-height:100vh;

      width:100%;

      position:relative;

      overflow:hidden;

      background:

        linear-gradient(

          180deg,

          ${DADOS.cores.ceu1} 0%,

          ${DADOS.cores.ceu2} 24%,

          ${DADOS.cores.fundo} 55%,

          ${DADOS.cores.fundo} 100%

        );

    }


    /* ==========================================================
       HEADER
       ========================================================== */

    .cabecalho{

      position:relative;

      width:100%;

      height:82px;

      background:

        linear-gradient(

          180deg,

          ${DADOS.cores.headerTopo} 0%,

          ${DADOS.cores.header} 100%

        );

      display:flex;

      align-items:center;

      justify-content:center;

      border-bottom:2px solid rgba(255,255,255,.65);

      box-shadow:0 3px 10px rgba(15,88,139,.12);

      z-index:20;

    }


    /* ==========================================================
       BOTÕES DO HEADER
       ========================================================== */

    .botao-menu,
    .botao-seta{

      position:absolute;

      top:50%;

      transform:translateY(-50%);

      width:58px;

      height:58px;

      padding:0;

      border:0;

      border-radius:50%;

      background:${DADOS.cores.azulHeader};

      cursor:pointer;

      box-shadow:0 3px 7px rgba(0,0,0,.18);

      transition:

        transform .18s ease,

        box-shadow .18s ease;

      z-index:25;

    }


    .botao-menu{

      left:18px;

    }


    .botao-seta{

      right:18px;

    }


    .botao-menu:hover,
    .botao-seta:hover{

      transform:translateY(-50%) scale(1.05);

      box-shadow:0 5px 11px rgba(0,0,0,.22);

    }


    .botao-menu:active,
    .botao-seta:active{

      transform:translateY(-50%) scale(.96);

    }


    /* ==========================================================
       HAMBÚRGUER
       ========================================================== */

    .botao-menu::before{

      content:"";

      position:absolute;

      width:56%;

      height:56%;

      left:22%;

      top:22%;

      background-image:url("${DADOS.icons.menu}");

      background-size:contain;

      background-position:center;

      background-repeat:no-repeat;

    }


    /* ==========================================================
       SETA
       ========================================================== */

    .botao-seta::before{

      content:"";

      position:absolute;

      width:58%;

      height:58%;

      left:21%;

      top:21%;

      background-image:url("${DADOS.icons.seta}");

      background-size:contain;

      background-position:center;

      background-repeat:no-repeat;

    }


    /* ==========================================================
       MARCA
       ========================================================== */

    .marca{

      display:flex;

      align-items:center;

      justify-content:center;

      gap:12px;

      min-width:0;

      max-width:75%;

    }


    .marca-sol{

      width:52px;

      height:52px;

      flex:0 0 52px;

      background-image:url("${DADOS.icons.cabecalho}");

      background-size:contain;

      background-position:center;

      background-repeat:no-repeat;

    }


    .marca-texto{

      text-align:left;

    }


    .marca-texto h1{

      margin:0;

      font-size:26px;

      line-height:1.05;

      font-weight:900;

      color:${DADOS.cores.textoEscuro};

    }


    .marca-texto p{

      margin:5px 0 0;

      font-size:13px;

      line-height:1.1;

      font-weight:700;

      color:${DADOS.cores.texto};

    }


    /* ==========================================================
       MENU ACORDEÃO
       ========================================================== */

    .menu-acordeao{

      position:absolute;

      top:72px;

      left:18px;

      width:300px;

      padding:0;

      background:rgba(255,255,255,.98);

      border:2px solid ${DADOS.cores.linha};

      border-top:4px solid ${DADOS.cores.azulHeader};

      border-radius:0 0 20px 20px;

      box-shadow:0 10px 25px rgba(15,88,139,.24);

      opacity:0;

      visibility:hidden;

      transform:translateY(-12px) scale(.98);

      transform-origin:top left;

      transition:

        opacity .22s ease,

        transform .22s ease,

        visibility .22s ease;

      overflow:hidden;

      z-index:30;

    }


    .menu-acordeao.aberto{

      opacity:1;

      visibility:visible;

      transform:translateY(0) scale(1);

    }


    .menu-acordeao-topo{

      padding:15px 18px 13px;

      background:

        linear-gradient(

          180deg,

          #EAF8FD,

          #FFFFFF

        );

      border-bottom:1px solid ${DADOS.cores.linha};

    }


    .menu-acordeao-titulo{

      font-size:19px;

      font-weight:900;

      color:${DADOS.cores.textoEscuro};

    }


    .menu-acordeao-subtitulo{

      margin-top:3px;

      font-size:12px;

      font-weight:700;

      color:#5791B6;

    }


    .menu-anos{

      display:flex;

      flex-direction:column;

      padding:8px;

      gap:5px;

    }


    .menu-ano{

      width:100%;

      min-height:54px;

      display:flex;

      align-items:center;

      gap:13px;

      padding:6px 11px;

      border:0;

      border-radius:13px;

      background:#FFFFFF;

      color:${DADOS.cores.textoEscuro};

      font-size:15px;

      font-weight:800;

      text-align:left;

      cursor:pointer;

      transition:

        background .16s ease,

        transform .16s ease;

    }


    .menu-ano:hover{

      background:#EAF7FC;

      transform:translateX(3px);

    }


    .menu-ano:active{

      transform:scale(.98);

    }


    .menu-ano-icon{

      width:45px;

      height:45px;

      flex:0 0 45px;

      display:flex;

      align-items:center;

      justify-content:center;

      border-radius:12px;

      background:#F1FAFD;

      overflow:hidden;

    }


    .menu-ano-icon img{

      width:100%;

      height:100%;

      object-fit:contain;

    }


    .menu-ano-nome{

      flex:1;

    }


    /* ==========================================================
       ÁREA
       ========================================================== */

    .area-menu{

      position:relative;

      width:100%;

      padding:0 0 24px;

    }


    .titulo-menu{

      width:fit-content;

      margin:20px auto 19px;

      padding:8px 30px;

      border:2px solid rgba(222,157,39,.42);

      border-radius:16px;

      background:

        linear-gradient(

          180deg,

          #FFFDEC,

          ${DADOS.cores.creme}

        );

      box-shadow:

        0 4px 10px rgba(120,100,40,.10);

    }


    .titulo-menu h2{

      margin:0;

      font-size:22px;

      line-height:1.1;

      font-weight:900;

      color:${DADOS.cores.textoEscuro};

      text-align:center;

    }


    /* ==========================================================
       DECORAÇÕES
       ========================================================== */

    .decoracao{

      position:absolute;

      width:90px;

      height:10px;

      border-radius:20px;

      opacity:.45;

      pointer-events:none;

    }


    .decoracao-esquerda{

      left:4%;

      top:66px;

      background:${DADOS.cores.portugues};

      transform:rotate(-4deg);

    }


    .decoracao-direita{

      right:4%;

      top:66px;

      background:${DADOS.cores.estudoMeio};

      transform:rotate(4deg);

    }


    /* ==========================================================
       CARTÕES
       ========================================================== */

    .anos{

      width:90%;

      max-width:${DADOS.dimensoes.larguraMaxima}px;

      margin:0 auto;

      display:grid;

      grid-template-columns:repeat(3,1fr);

      gap:18px;

    }


    .ano{

      min-width:0;

    }


    .botao-ano{

      --cor-1:${DADOS.cores.portugues};

      --cor-2:${DADOS.cores.portugues2};

      position:relative;

      width:100%;

      height:${DADOS.dimensoes.alturaAnoDesktop}px;

      padding:22px;

      border:4px solid #FFFFFF;

      border-radius:${DADOS.dimensoes.raioAno}px;

      background:

        linear-gradient(

          145deg,

          var(--cor-1) 0%,

          var(--cor-2) 100%

        );

      display:flex;

      flex-direction:column;

      align-items:center;

      justify-content:center;

      gap:9px;

      color:#FFFFFF;

      cursor:pointer;

      overflow:hidden;

      box-shadow:

        0 6px 12px ${DADOS.cores.sombra};

      transition:

        transform .18s ease,

        box-shadow .18s ease;

    }


    .botao-ano::after{

      content:"";

      position:absolute;

      width:170px;

      height:170px;

      right:-65px;

      top:-80px;

      border-radius:50%;

      background:rgba(255,255,255,.14);

      pointer-events:none;

    }


    .botao-ano:hover{

      transform:translateY(-4px);

      box-shadow:

        0 11px 20px ${DADOS.cores.sombraForte};

    }


    .botao-ano:active{

      transform:translateY(-1px);

    }


    .icone-ano{

      width:${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

      height:${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

      display:flex;

      align-items:center;

      justify-content:center;

      position:relative;

      z-index:1;

    }


    .icone-ano img{

      width:100%;

      height:100%;

      object-fit:contain;

      filter:drop-shadow(0 4px 4px rgba(0,0,0,.14));

    }


    .texto-ano{

      position:relative;

      z-index:1;

      text-align:center;

    }


    .nome-ano{

      font-size:27px;

      line-height:1.05;

      font-weight:900;

      text-shadow:0 2px 2px rgba(0,0,0,.12);

    }


    .idade-ano{

      margin-top:4px;

      font-size:13px;

      font-weight:700;

      opacity:.92;

    }


    /* ==========================================================
       JOGOS
       ========================================================== */

    .destaques{

      width:100%;

      max-width:${DADOS.dimensoes.larguraMaxima}px;

      margin:0 auto;

      padding:8px 5% 26px;

    }


    .titulo-destaques{

      width:100%;

      display:flex;

      align-items:center;

      justify-content:center;

      gap:15px;

      margin-bottom:18px;

    }


    .titulo-destaques .linha{

      flex:1;

      max-width:250px;

      height:2px;

      background:${DADOS.cores.linha};

      border-radius:10px;

    }


    .titulo-destaques h2{

      margin:0;

      font-size:21px;

      line-height:1.1;

      color:${DADOS.cores.textoEscuro};

      font-weight:900;

      white-space:nowrap;

    }


    .jogos{

      display:grid;

      grid-template-columns:repeat(6,1fr);

      gap:14px;

    }


    .jogo{

      min-width:0;

      min-height:145px;

      padding:13px 8px 11px;

      border-radius:${DADOS.dimensoes.raioDestaques}px;

      background:#FFFFFF;

      border:2px solid rgba(165,217,248,.70);

      box-shadow:0 5px 12px rgba(15,88,139,.10);

      display:flex;

      flex-direction:column;

      align-items:center;

      justify-content:center;

      cursor:pointer;

      transition:

        transform .18s ease,

        box-shadow .18s ease;

    }


    .jogo:hover{

      transform:translateY(-4px);

      box-shadow:0 9px 18px rgba(15,88,139,.17);

    }


    .icone-jogo{

      width:${DADOS.dimensoes.tamanhoIconJogo}px;

      height:${DADOS.dimensoes.tamanhoIconJogo}px;

      display:flex;

      align-items:center;

      justify-content:center;

    }


    .icone-jogo img{

      width:100%;

      height:100%;

      object-fit:contain;

    }


    .nome-jogo{

      margin-top:8px;

      font-size:15px;

      font-weight:900;

      color:${DADOS.cores.textoEscuro};

      text-align:center;

      line-height:1.05;

    }


    .estrelas{

      margin-top:5px;

      font-size:13px;

      line-height:1;

      letter-spacing:1px;

      color:${DADOS.cores.amarelo};

    }


    /* ==========================================================
       RODAPÉ
       ========================================================== */

    .rodape{

      width:100%;

      min-height:58px;

      padding:12px 5%;

      display:flex;

      align-items:center;

      justify-content:space-between;

      gap:20px;

      background:

        linear-gradient(

          180deg,

          #DDF5FC,

          #C8EDF8

        );

      border-top:2px solid rgba(165,217,248,.75);

      color:${DADOS.cores.texto};

      font-size:13px;

      font-weight:800;

    }


    .rodape-item{

      display:flex;

      align-items:center;

      gap:7px;

      min-width:0;

    }


    .estrela{

      color:${DADOS.cores.amarelo};

      font-size:17px;

    }


    .info{

      width:21px;

      height:21px;

      display:flex;

      align-items:center;

      justify-content:center;

      border:2px solid ${DADOS.cores.texto};

      border-radius:50%;

      font-size:12px;

      font-weight:900;

    }


    /* ==========================================================
       TABLET HORIZONTAL
       ========================================================== */

    @media (min-width:601px) and (max-width:1100px) and (orientation:landscape){

      .cabecalho{

        height:70px;

      }


      .botao-menu,
      .botao-seta{

        width:50px;

        height:50px;

      }


      .botao-menu{

        left:14px;

      }


      .botao-seta{

        right:14px;

      }


      .marca-sol{

        width:44px;

        height:44px;

        flex-basis:44px;

      }


      .marca-texto h1{

        font-size:22px;

      }


      .marca-texto p{

        font-size:11px;

      }


      .menu-acordeao{

        top:62px;

        left:14px;

      }


      .anos{

        width:90%;

        gap:13px;

      }


      .botao-ano{

        height:${DADOS.dimensoes.alturaAnoTabletHorizontal}px;

      }


      .icone-ano{

        width:${DADOS.dimensoes.tamanhoIconAnoTablet}px;

        height:${DADOS.dimensoes.tamanhoIconAnoTablet}px;

      }


      .nome-ano{

        font-size:22px;

      }


      .jogos{

        grid-template-columns:repeat(3,1fr);

      }


      .icone-jogo{

        width:${DADOS.dimensoes.tamanhoIconJogoTablet}px;

        height:${DADOS.dimensoes.tamanhoIconJogoTablet}px;

      }

    }


    /* ==========================================================
       TELEMÓVEL HORIZONTAL
       ========================================================== */

    @media (max-width:900px) and (orientation:landscape){

      .cabecalho{

        height:64px;

      }


      .botao-menu,
      .botao-seta{

        width:48px;

        height:48px;

      }


      .botao-menu{

        left:12px;

      }


      .botao-seta{

        right:12px;

      }


      .marca-sol{

        width:39px;

        height:39px;

        flex-basis:39px;

      }


      .marca-texto h1{

        font-size:20px;

      }


      .marca-texto p{

        font-size:10px;

      }


      .menu-acordeao{

        top:56px;

        left:12px;

        width:270px;

      }


      .titulo-menu{

        margin-top:15px;

        margin-bottom:14px;

        padding:7px 22px;

      }


      .titulo-menu h2{

        font-size:19px;

      }


      .anos{

        width:90%;

        gap:10px;

      }


      .botao-ano{

        height:${DADOS.dimensoes.alturaAnoTelemovelHorizontal}px;

        padding:12px;

      }


      .icone-ano{

        width:${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

        height:${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

      }


      .nome-ano{

        font-size:18px;

      }


      .idade-ano{

        font-size:10px;

      }


      .jogos{

        grid-template-columns:repeat(3,1fr);

      }


      .jogo{

        min-height:120px;

      }


      .icone-jogo{

        width:${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;

        height:${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;

      }


      .nome-jogo{

        font-size:13px;

      }


      .rodape{

        font-size:11px;

      }

    }


    /* ==========================================================
       TABLET VERTICAL
       ========================================================== */

    @media (max-width:900px) and (orientation:portrait){

      .cabecalho{

        height:70px;

      }


      .botao-menu,
      .botao-seta{

        width:50px;

        height:50px;

      }


      .botao-menu{

        left:14px;

      }


      .botao-seta{

        right:14px;

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

        font-size:11px;

      }


      .menu-acordeao{

        top:62px;

        left:14px;

      }


      /* --------------------------------------------------------
         CARTÕES — TABLET VERTICAL

         5px de cada lado
         Raio original: 23px
         Ícone original: 100px
         -------------------------------------------------------- */

      .anos{

        width:calc(100% - 10px);

        grid-template-columns:1fr;

        gap:9px;

      }


      .botao-ano{

        height:126px;

        border:4px solid #FFFFFF;

        border-radius:${DADOS.dimensoes.raioAno}px;

        flex-direction:row;

        justify-content:flex-start;

        padding:10px 16px;

        gap:14px;

      }


      .icone-ano{

        width:${DADOS.dimensoes.tamanhoIconAnoTablet}px;

        height:${DADOS.dimensoes.tamanhoIconAnoTablet}px;

        flex:0 0 ${DADOS.dimensoes.tamanhoIconAnoTablet}px;

      }


      .texto-ano{

        text-align:left;

      }


      .nome-ano{

        font-size:24px;

      }


      .idade-ano{

        font-size:11px;

      }


      .jogos{

        grid-template-columns:repeat(3,1fr);

      }

    }


    /* ==========================================================
       TELEMÓVEL VERTICAL
       ========================================================== */

    @media (max-width:600px) and (orientation:portrait){

      .cabecalho{

        height:62px;

      }


      .botao-menu,
      .botao-seta{

        width:43px;

        height:43px;

      }


      .botao-menu{

        left:10px;

      }


      .botao-seta{

        right:10px;

      }


      .botao-menu::before{

        width:55%;

        height:55%;

        left:22.5%;

        top:22.5%;

      }


      .botao-seta::before{

        width:58%;

        height:58%;

        left:21%;

        top:21%;

      }


      .marca{

        gap:7px;

      }


      .marca-sol{

        width:36px;

        height:36px;

        flex-basis:36px;

      }


      .marca-texto h1{

        font-size:18px;

      }


      .marca-texto p{

        margin-top:3px;

        font-size:9px;

      }


      .menu-acordeao{

        top:54px;

        left:10px;

        width:calc(100vw - 20px);

        max-width:300px;

      }


      .titulo-menu{

        margin-top:20px;

        margin-bottom:14px;

        padding:7px 19px;

      }


      .titulo-menu h2{

        font-size:18px;

      }


      /* --------------------------------------------------------
         CARTÕES — TELEMÓVEL VERTICAL

         5px de cada lado
         Raio original: 23px
         Ícone original: 76px
         -------------------------------------------------------- */

      .anos{

        width:calc(100% - 10px);

        grid-template-columns:1fr;

        gap:8px;

      }


      .botao-ano{

        height:100px;

        border:4px solid #FFFFFF;

        border-radius:${DADOS.dimensoes.raioAno}px;

        padding:8px 12px;

        gap:10px;

        flex-direction:row;

        justify-content:flex-start;

      }


      .icone-ano{

        width:${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

        height:${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

        flex:0 0 ${DADOS.dimensoes.tamanhoIconAnoTelemovelHorizontal}px;

      }


      .texto-ano{

        text-align:left;

      }


      .nome-ano{

        font-size:20px;

      }


      .idade-ano{

        font-size:9px;

      }


      .destaques{

        padding-left:4%;

        padding-right:4%;

      }


      .titulo-destaques{

        gap:9px;

      }


      .titulo-destaques h2{

        font-size:17px;

      }


      .titulo-destaques .linha{

        max-width:none;

      }


      .jogos{

        grid-template-columns:repeat(2,1fr);

        gap:9px;

      }


      .jogo{

        min-height:118px;

        border-radius:20px;

      }


      .icone-jogo{

        width:${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;

        height:${DADOS.dimensoes.tamanhoIconJogoTelemovel}px;

      }


      .nome-jogo{

        font-size:12px;

      }


      .estrelas{

        font-size:11px;

      }


      .rodape{

        padding:10px 4%;

        flex-direction:column;

        justify-content:center;

        gap:5px;

        font-size:10px;

        text-align:center;

      }

    }


  `;


  document.head.appendChild(estilo);

}


/* ==============================================================
   PREENCHER TEXTOS
   ============================================================== */

function preencherTextos() {


  const marca =
    document.querySelector("[data-marca]");


  const submarca =
    document.querySelector("[data-submarca]");


  const titulo =
    document.querySelector("[data-titulo-menu]");


  const mensagem =
    document.querySelector("[data-mensagem]");


  const informacao =
    document.querySelector("[data-informacao]");


  if (marca) {

    marca.textContent =
      DADOS.pagina.titulo;

  }


  if (submarca) {

    submarca.textContent =
      DADOS.pagina.subtitulo;

  }


  if (titulo) {

    titulo.textContent =
      DADOS.pagina.tituloMenu;

  }


  if (mensagem) {

    mensagem.textContent =
      DADOS.pagina.mensagem;

  }


  if (informacao) {

    informacao.textContent =
      DADOS.pagina.informacao;

  }

}


/* ==============================================================
   CRIAR CARTÕES DAS ÁREAS
   ============================================================== */

function criarCartoesAno() {


  const recipiente =
    document.getElementById("anos");


  const modelo =
    document.getElementById("modelo-ano");


  if (!recipiente || !modelo) return;


  recipiente.innerHTML = "";


  DADOS.anos.forEach(ano => {


    const cartao =
      modelo.content.cloneNode(true);


    const botao =
      cartao.querySelector(".botao-ano");


    const icone =
      cartao.querySelector(".icone-ano");


    const texto =
      cartao.querySelector(".nome-ano");


    const idade =
      cartao.querySelector(".idade-ano");


    botao.style.setProperty(
      "--cor-1",
      ano.cor
    );


    botao.style.setProperty(
      "--cor-2",
      ano.cor2
    );


    const imagem =
      document.createElement("img");


    imagem.src =
      DADOS.icons.anos[ano.icon];


    imagem.alt =
      ano.nome;


    imagem.draggable = false;


    icone.appendChild(imagem);


    texto.textContent =
      ano.nome;


    idade.textContent =
      ano.idade;


    botao.addEventListener(
      "click",
      () => {

        window.location.href =
          ano.pagina;

      }
    );


    recipiente.appendChild(cartao);

  });

}


/* ==============================================================
   CRIAR MENU DOS ANOS
   ============================================================== */

function criarMenuAnos() {


  const recipiente =
    document.getElementById("menu-anos");


  const modelo =
    document.getElementById("modelo-menu-ano");


  if (!recipiente || !modelo) return;


  recipiente.innerHTML = "";


  DADOS.menuAnos.forEach(ano => {


    const item =
      modelo.content.cloneNode(true);


    const botao =
      item.querySelector(".menu-ano");


    const icone =
      item.querySelector(".menu-ano-icon");


    const nome =
      item.querySelector(".menu-ano-nome");


    const imagem =
      document.createElement("img");


    imagem.src =
      DADOS.icons.menuAnos[ano.icon];


    imagem.alt = "";


    imagem.draggable = false;


    icone.appendChild(imagem);


    nome.textContent =
      ano.nome;


    botao.addEventListener(
      "click",
      () => {

        window.location.href =
          ano.pagina;

      }
    );


    recipiente.appendChild(item);

  });

}


/* ==============================================================
   CONFIGURAR MENU + SETA
   ============================================================== */

function configurarMenu() {


  const botaoMenu =
    document.querySelector(".botao-menu");


  const menu =
    document.querySelector(".menu-acordeao");


  const botaoSeta =
    document.querySelector(".botao-seta");


  /* ------------------------------------------------------------
     MENU HAMBÚRGUER
     ------------------------------------------------------------ */

  if (botaoMenu && menu) {


    botaoMenu.addEventListener(
      "click",
      event => {

        event.stopPropagation();


        const aberto =
          menu.classList.toggle("aberto");


        botaoMenu.setAttribute(
          "aria-expanded",
          aberto ? "true" : "false"
        );


        menu.setAttribute(
          "aria-hidden",
          aberto ? "false" : "true"
        );

      }
    );


    /* ----------------------------------------------------------
       FECHAR AO CLICAR FORA
       ---------------------------------------------------------- */

    document.addEventListener(
      "click",
      event => {


        if (

          menu.classList.contains("aberto") &&

          !menu.contains(event.target) &&

          !botaoMenu.contains(event.target)

        ) {


          menu.classList.remove("aberto");


          botaoMenu.setAttribute(
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


  /* ------------------------------------------------------------
     SETA — RECUAR UMA PASTA
     ------------------------------------------------------------ */

  if (botaoSeta) {


    botaoSeta.addEventListener(
      "click",
      () => {

        window.location.href = "../";

      }
    );

  }

}


/* ==============================================================
   CRIAR JOGOS EM DESTAQUE
   ============================================================== */

function criarDestaques() {


  const recipiente =
    document.getElementById("jogos");


  const modelo =
    document.getElementById("modelo-jogo");


  if (!recipiente || !modelo) return;


  recipiente.innerHTML = "";


  DADOS.destaques.forEach(jogo => {


    const item =
      modelo.content.cloneNode(true);


    const cartao =
      item.querySelector(".jogo");


    const imagem =
      item.querySelector(
        ".icone-jogo img"
      );


    const nome =
      item.querySelector(
        ".nome-jogo"
      );


    const estrelas =
      item.querySelector(
        ".estrelas"
      );


    imagem.src =
      DADOS.icons.destaques[jogo.icon];


    imagem.alt =
      jogo.nome;


    imagem.draggable = false;


    nome.textContent =
      jogo.nome;


    estrelas.textContent =
      "★".repeat(jogo.estrelas);


    estrelas.setAttribute(
      "aria-label",
      `${jogo.estrelas} estrelas`
    );


    cartao.addEventListener(
      "click",
      () => {

        window.location.href =
          jogo.pagina;

      }
    );


    recipiente.appendChild(item);

  });

}


/* ==============================================================
   INICIALIZAÇÃO
   ============================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    inserirCSS();

    preencherTextos();

    criarCartoesAno();

    criarMenuAnos();

    configurarMenu();

    criarDestaques();

  }
);
