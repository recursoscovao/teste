/*
================================================================
 RECURSOS Covão — CONFIGURAÇÃO
================================================================

 Este ficheiro contém apenas os dados/configurações do site:

 - textos
 - cores
 - dimensões
 - caminhos dos icons
 - definição dos anos
 - definição dos jogos em destaque
 - links

 O HTML, CSS e JavaScript ficam no index.html.

 Assim, para alterar conteúdos, cores, tamanhos, icons ou links,
 não é necessário mexer no index.html.
================================================================
*/

const DADOS = {

  /* ============================================================
     CONFIGURAÇÃO GERAL
     ============================================================ */

  pagina: {
    titulo: "Recursos Covão",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolhe o ano",
    mensagem: "Escolhe o ano e comece a aprender!",
    informacao: "Recursos educativos para o 1.º ciclo"
  },


  /* ============================================================
     NUVENS
     ============================================================ */

  nuvem: "icons/nuvem.png",

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


  /* ============================================================
     ICONS — TODOS CENTRALIZADOS AQUI
     ============================================================ */

  icons: {

    /* ----------------------------------------------------------
       Icons dos anos
       ---------------------------------------------------------- */

    anos: {
      pre: "icons/iconpre.png",
      ano1: "icons/icon1.png",
      ano2: "icons/icon2.png",
      ano3: "icons/icon3.png",
      ano4: "icons/icon4.png"
    },


    /* ----------------------------------------------------------
       Icons dos jogos em destaque
       ---------------------------------------------------------- */

    destaques: {
      rastros: "icons/rastros.png",
      gatosCaes: "icons/gatos&caes.png",
      dominorio: "icons/dominorio.png",
      semaforo: "icons/semaforo.png",
      quelhas: "icons/quelhas.png",
      avanco: "icons/avanco.png"
    }

  },


  /* ============================================================
     CORES
     ============================================================ */

  cores: {

    /* Fundo */
    fundo: "#EAF5FC",
    ceu1: "#78DDF7",
    ceu2: "#BCEEF9",

    /* Textos */
    texto: "#07569A",
    textoEscuro: "#064B8A",
    branco: "#FFFFFF",

    /* Amarelo */
    amarelo: "#FFBA16",
    amarelo2: "#EF8709",

    /* Azul */
    azul: "#20B9EF",
    azul2: "#087AC9",

    /* Verde */
    verde: "#45C83D",
    verde2: "#169A3A",

    /* Roxo */
    roxo: "#A74BEF",
    roxo2: "#7434B8",

    /* Rosa */
    rosa: "#F43A9D",
    rosa2: "#C81970",

    /* Creme */
    creme: "#FFF9E1",
    creme2: "#F5D996",

    /* Linhas e sombras */
    linha: "#A5D9F8",
    sombra: "rgba(15, 88, 139, .20)",
    sombraForte: "rgba(15, 88, 139, .30)"
  },


  /* ============================================================
     DIMENSÕES
     ============================================================ */

  dimensoes: {

    larguraMaxima: 1650,

    /* ----------------------------------------------------------
       Cartões dos anos
       ---------------------------------------------------------- */

    alturaAnoDesktop: 300,
    alturaAnoTabletHorizontal: 245,
    alturaAnoTelemovelHorizontal: 175,

    raioAno: 23,
    raioDestaques: 26,

    tamanhoIconAnoDesktop: 128,
    tamanhoIconAnoTablet: 100,
    tamanhoIconAnoTelemovelHorizontal: 76,

    /* ----------------------------------------------------------
       Icons dos jogos em destaque
       ---------------------------------------------------------- */

    tamanhoIconJogo: 76,
    tamanhoIconJogoTablet: 64,
    tamanhoIconJogoTelemovel: 54
  },


  /* ============================================================
     ANOS
     ============================================================ */

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
      nome: "1.º Ano",
      idade: "6 – 7 anos",
      icon: "ano1",
      cor: "#20B9EF",
      cor2: "#087AC9",
      pagina: "1"
    },

    {
      id: "ano2",
      nome: "2.º Ano",
      idade: "7 – 8 anos",
      icon: "ano2",
      cor: "#45C83D",
      cor2: "#169A3A",
      pagina: "2"
    },

    {
      id: "ano3",
      nome: "3.º Ano",
      idade: "8 – 9 anos",
      icon: "ano3",
      cor: "#A74BEF",
      cor2: "#7434B8",
      pagina: "3"
    },

    {
      id: "ano4",
      nome: "4.º Ano",
      idade: "9 – 10 anos",
      icon: "ano4",
      cor: "#F43A9D",
      cor2: "#C81970",
      pagina: "4"
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
