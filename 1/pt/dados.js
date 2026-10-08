const DADOS = {
  pagina: {
    browserTitulo: "1.º Ano - Recursos Educativos",
    titulo: "1.º Ano",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolhe a área",
    mensagem: "Escolhe a área e comece a aprender!",
    informacao: "Recursos educativos para o 1.º ano"
  },

  icons: {
    cabecalho: "../../icons/icon1.png",
    menu: "../../icons/menu.png",
    seta: "../../icons/seta.png",
    anos: {
      portugues: "../../icons/pt.png",
      matematica: "../../icons/mat.png",
      estudoMeio: "../../icons/em.png"
    },
    menuAnos: {
      inicio: "../../icons/inicio.png",
      pre: "../../icons/iconpre.png",
      ano1: "../../icons/icon1.png",
      ano2: "../../icons/icon2.png",
      ano3: "../../icons/icon3.png",
      ano4: "../../icons/icon4.png"
    }
  },

  cores: {
    fundo: "#F2F8FC",
    ceu1: "#B6E2F9",
    ceu2: "#DEF3FF",
    header: "#DEF3FF",
    headerTopo: "#B6E2F9",
    azulHeader: "#0F8BD3",
    texto: "#0B4B71",
    textoEscuro: "#062B42",
    branco: "#FFFFFF",
    portugues: "#11CBFC",
    portugues2: "#079BC8",
    matematica: "#FD6746",
    matematica2: "#D94328",
    estudoMeio: "#62D733",
    estudoMeio2: "#36A918",
    creme: "#E1F2FA",
    linha: "#B4E4F8",
    sombra: "rgba(15,139,211,.18)",
    sombraForte: "rgba(15,139,211,.28)"
  },

  dimensoes: {
    larguraMaxima: 1200,
    alturaAnoDesktop: 270,
    raioAno: 23,
    tamanhoIconAnoDesktop: 153
  },

  anos: [
    {
      id: "portugues",
      nome: "Português",
      idade: "6 - 7 anos",
      icon: "portugues",
      cor: "#11CBFC",
      cor2: "#079BC8",
      pagina: "#"
    },
    {
      id: "matematica",
      nome: "Matemática",
      idade: "",
      icon: "matematica",
      cor: "#FD6746",
      cor2: "#D94328",
      pagina: "../mat/"
    },
    {
      id: "estudoMeio",
      nome: "Estudo do Meio",
      idade: "",
      icon: "estudoMeio",
      cor: "#62D733",
      cor2: "#36A918",
      pagina: "../em/"
    }
  ],

  menuAnos: [
    { id: "inicio", nome: "Início", icon: "inicio", pagina: "../../" },
    { id: "pre", nome: "Pré-Escolar", icon: "pre", pagina: "../../pre/" },
    { id: "ano1", nome: "1.º Ano", icon: "ano1", pagina: "../../1/" },
    { id: "ano2", nome: "2.º Ano", icon: "ano2", pagina: "../../2/" },
    { id: "ano3", nome: "3.º Ano", icon: "ano3", pagina: "../../3/" },
    { id: "ano4", nome: "4.º Ano", icon: "ano4", pagina: "../../4/" }
  ]
};
