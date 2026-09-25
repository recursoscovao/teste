const DADOS = {
  pagina: {
    titulo: "2.º Ano",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolhe a área",
    mensagem: "Escolhe a área e comece a aprender!",
    informacao: "Recursos educativos para o 2.º ano"
  },

  icons: {
    cabecalho: "../icons/icon2.png",
    menu: "../icons/menu.png",
    seta: "../icons/seta.png",
    anos: {
      portugues: "../icons/pt.png",
      matematica: "../icons/mat.png",
      estudoMeio: "../icons/em.png"
    },
    menuAnos: {
      inicio: "../icons/inicio.png",
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

  dimensoes: {
    larguraMaxima: 1650,
    alturaAnoDesktop: 300,
    alturaAnoTabletHorizontal: 245,
    alturaAnoTelemovelHorizontal: 175,
    raioAno: 23,
    raioDestaques: 26,
    tamanhoIconAnoDesktop: 170,
    tamanhoIconAnoTablet: 100,
    tamanhoIconAnoTelemovelHorizontal: 76,
    tamanhoIconJogo: 76,
    tamanhoIconJogoTablet: 64,
    tamanhoIconJogoTelemovel: 54
  },

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

  menuAnos: [
    { id: "inicio", nome: "Início", icon: "inicio", pagina: "../" },
    { id: "pre", nome: "Pré-Escolar", icon: "pre", pagina: "../pre/" },
    { id: "ano1", nome: "1.º Ano", icon: "ano1", pagina: "../1/" },
    { id: "ano2", nome: "2.º Ano", icon: "ano2", pagina: "../2/" },
    { id: "ano3", nome: "3.º Ano", icon: "ano3", pagina: "../3/" },
    { id: "ano4", nome: "4.º Ano", icon: "ano4", pagina: "../4/" }
  ],

  destaques: [
    { id: "rastros", nome: "Rastros", icon: "rastros", estrelas: 5, pagina: "jogos/rastros/index.html" },
    { id: "gatosCaes", nome: "Gatos&Cães", icon: "gatosCaes", estrelas: 5, pagina: "jogos/gatos-caes/index.html" },
    { id: "dominio", nome: "Dominório", icon: "dominorio", estrelas: 5, pagina: "jogos/dominio/index.html" },
    { id: "semaforo", nome: "Semáforo", icon: "semaforo", estrelas: 5, pagina: "jogos/semaforo/index.html" },
    { id: "quelhas", nome: "Quellhas", icon: "quelhas", estrelas: 5, pagina: "jogos/quelhas/index.html" },
    { id: "avanco", nome: "Avanço", icon: "avanco", estrelas: 5, pagina: "jogos/avanco/index.html" }
  ]
};
