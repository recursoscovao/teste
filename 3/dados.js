const DADOS = {
  pagina: {
    browserTitulo: "3.º Ano - Recursos Educativos",
    titulo: "3.º Ano",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolhe a área",
    mensagem: "Escolhe a área e comece a aprender!",
    informacao: "Recursos educativos para o 3.º ano"
  },

  icons: {
    cabecalho: "../icons/icon3.png",
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
    fundo: "#F6F2FC",
    ceu1: "#D6B6F9",
    ceu2: "#EFE0FD",
    header: "#EFE0FD",
    headerTopo: "#D6B6F9",
    azulHeader: "#833BC9",
    texto: "#551C8C",
    textoEscuro: "#2F0B52",
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
    roxo: "#833BC9",
    roxo2: "#512080",
    rosa: "#F43A9D",
    rosa2: "#C81970",
    creme: "#F4EBFD",
    creme2: "#D2A6F0",
    linha: "#DFC1F8",
    sombra: "rgba(131,59,201,.18)",
    sombraForte: "rgba(131,59,201,.28)"
  },

  dimensoes: {
    larguraMaxima: 1200,
    alturaAnoDesktop: 270,
    raioAno: 23,
    raioDestaques: 26,
    tamanhoIconAnoDesktop: 153,
    tamanhoIconJogo: 76
  },

  anos: [
    {
      id: "portugues",
      nome: "Português",
      idade: "8 - 9 anos",
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
