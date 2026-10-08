const DADOS = {
  pagina: {
    browserTitulo: "1.º Ano - Jogos Educativos",
    titulo: "Português",
    subtitulo: "Aprender • Jogar • Descobrir",
    tituloMenu: "Escolhe o Jogo",
    mensagem: "Escolhe um jogo e diverte-te a aprender!",
    informacao: "Jogos educativos para o 1.º ano"
  },

  icons: {
    cabecalho: "../../icons/icon1.png",
    menu: "../../icons/menu.png",
    seta: "../../icons/seta.png",
    jogos: {
      jogo1: "iconjogos/jogo1.png",
      jogo2: "iconjogos/jogo2.png",
      jogo3: "iconjogos/jogo3.png",
      jogo4: "iconjogos/jogo4.png",
      jogo5: "iconjogos/jogo5.png",
      jogo6: "iconjogos/jogo6.png"
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
    creme: "#E1F2FA",
    linha: "#B4E4F8",
    sombra: "rgba(15,139,211,.18)",
    sombraForte: "rgba(15,139,211,.28)"
  },

  dimensoes: {
    larguraMaxima: 1200,
    alturaAnoDesktop: 220,
    raioAno: 23,
    tamanhoIconAnoDesktop: 110
  },

  // Distribuição solicitada: 6 na 1ª fase, 5 na 2ª fase, 4 na 3ª fase e 4 na 4ª fase
  fases: [
    {
      tituloFase: "Fase 1",
      jogos: [
        { id: "jogo1", nome: "Jogo 1", idade: "Subtítulo 1", icon: "jogo1", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo1/" },
        { id: "jogo2", nome: "Jogo 2", idade: "Subtítulo 2", icon: "jogo2", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo2/" },
        { id: "jogo3", nome: "Jogo 3", idade: "Subtítulo 3", icon: "jogo3", cor: "#62D733", cor2: "#36A918", pagina: "jogo3/" },
        { id: "jogo4", nome: "Jogo 4", idade: "Subtítulo 4", icon: "jogo4", cor: "#FFB400", cor2: "#E09A00", pagina: "jogo4/" },
        { id: "jogo5", nome: "Jogo 5", idade: "Subtítulo 5", icon: "jogo5", cor: "#9B51E0", cor2: "#7B39C8", pagina: "jogo5/" },
        { id: "jogo6", nome: "Jogo 6", idade: "Subtítulo 6", icon: "jogo6", cor: "#EB5757", cor2: "#C53B3B", pagina: "jogo6/" }
      ]
    },
    {
      tituloFase: "Fase 2",
      jogos: [
        { id: "jogo1", nome: "Jogo 1", idade: "Subtítulo 1", icon: "jogo1", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo1/" },
        { id: "jogo2", nome: "Jogo 2", idade: "Subtítulo 2", icon: "jogo2", cor: "#FD6746", cor2: "#D94328", pagina: "jogo2/" },
        { id: "jogo3", nome: "Jogo 3", idade: "Subtítulo 3", icon: "jogo3", cor: "#62D733", cor2: "#36A918", pagina: "jogo3/" },
        { id: "jogo4", nome: "Jogo 4", idade: "Subtítulo 4", icon: "jogo4", cor: "#FFB400", cor2: "#E09A00", pagina: "jogo4/" },
        { id: "jogo5", nome: "Jogo 5", idade: "Subtítulo 5", icon: "jogo5", cor: "#9B51E0", cor2: "#7B39C8", pagina: "jogo5/" }
      ]
    },
    {
      tituloFase: "Fase 3",
      jogos: [
        { id: "jogo1", nome: "Jogo 1", idade: "Subtítulo 1", icon: "jogo1", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo1/" },
        { id: "jogo2", nome: "Jogo 2", idade: "Subtítulo 2", icon: "jogo2", cor: "#FD6746", cor2: "#D94328", pagina: "jogo2/" },
        { id: "jogo3", nome: "Jogo 3", idade: "Subtítulo 3", icon: "jogo3", cor: "#62D733", cor2: "#36A918", pagina: "jogo3/" },
        { id: "jogo4", nome: "Jogo 4", idade: "Subtítulo 4", icon: "jogo4", cor: "#FFB400", cor2: "#E09A00", pagina: "jogo4/" }
      ]
    },
    {
      tituloFase: "Fase 4",
      jogos: [
        { id: "jogo1", nome: "Jogo 1", idade: "Subtítulo 1", icon: "jogo1", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo1/" },
        { id: "jogo2", nome: "Jogo 2", idade: "Subtítulo 2", icon: "jogo2", cor: "#FD6746", cor2: "#D94328", pagina: "jogo2/" },
        { id: "jogo3", nome: "Jogo 3", idade: "Subtítulo 3", icon: "jogo3", cor: "#62D733", cor2: "#36A918", pagina: "jogo3/" },
        { id: "jogo4", nome: "Jogo 4", idade: "Subtítulo 4", icon: "jogo4", cor: "#FFB400", cor2: "#E09A00", pagina: "jogo4/" }
      ]
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
