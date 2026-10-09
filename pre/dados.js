const DADOS = {
  pagina: {
    browserTitulo: "Pré-Escolar - Jogos Educativos",
    titulo: "Pré-Escolar",
    subtitulo: "Aprender • Jogar • Descobrir",
    tituloMenu: "Escolhe o Jogo",
    mensagem: "Escolhe um jogo e diverte-te a aprender!",
    informacao: "Jogos educativos para o Pré-Escolar"
  },

  icons: {
    cabecalho: "../icons/iconpre.png",
    menu: "../icons/menu.png",
    seta: "../icons/seta.png",
    menuAnos: {
      inicio: "../icons/inicio.png",
      pre: "../icons/iconpre.png",
      ano1: "../icons/icon1.png",
      ano2: "../icons/icon2.png",
      ano3: "../icons/icon3.png",
      ano4: "../icons/icon4.png"
    }
  },

  cores: {
    fundo: "#FFFBF2",
    ceu1: "#FEE8C7",
    ceu2: "#FFF4E2",
    header: "#FFF4E2",
    headerTopo: "#FEE8C7",
    azulHeader: "#F59B0E",
    texto: "#7A4B06",
    textoEscuro: "#4A2D03",
    branco: "#FFFFFF",
    creme: "#FDF0D8",
    linha: "#F8DDAA",
    sombra: "rgba(245,155,14,.18)",
    sombraForte: "rgba(245,155,14,.28)"
  },

  dimensoes: {
    larguraMaxima: 1200,
    alturaAnoDesktop: 209,
    raioAno: 23,
    tamanhoIconAnoDesktop: 130
  },

  fases: [
    {
      tituloFase: "Fase 1",
      jogos: [
        { nome: "Jogo 1", idade: "Subtítulo 1", imagem: "iconjogos/jogo1.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo1/" },
        { nome: "Jogo 2", idade: "Subtítulo 2", imagem: "iconjogos/jogo2.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo2/" },
        { nome: "Jogo 3", idade: "Subtítulo 3", imagem: "iconjogos/jogo3.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo3/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo4/" },
        { nome: "Jogo 5", idade: "Subtítulo 5", imagem: "iconjogos/jogo5.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo5/" },
        { nome: "Jogo 6", idade: "Subtítulo 6", imagem: "iconjogos/jogo6.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo6/" }
      ]
    },
    {
      tituloFase: "Fase 2",
      jogos: [
        { nome: "Jogo 1", idade: "Subtítulo 1", imagem: "iconjogos/jogo1.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo1/" },
        { nome: "Jogo 2", idade: "Subtítulo 2", imagem: "iconjogos/jogo2.png", cor: "#FD6746", cor2: "#D94328", pagina: "jogo2/" },
        { nome: "Jogo 3", idade: "Subtítulo 3", imagem: "iconjogos/jogo3.png", cor: "#62D733", cor2: "#36A918", pagina: "jogo3/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#FFB400", cor2: "#E09A00", pagina: "jogo4/" },
        { nome: "Jogo 5", idade: "Subtítulo 5", imagem: "iconjogos/jogo5.png", cor: "#9B51E0", cor2: "#7B39C8", pagina: "jogo5/" }
      ]
    },
    {
      tituloFase: "Fase 3",
      jogos: [
        { nome: "Jogo 1", idade: "Subtítulo 1", imagem: "iconjogos/jogo1.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo1/" },
        { nome: "Jogo 2", idade: "Subtítulo 2", imagem: "iconjogos/jogo2.png", cor: "#FD6746", cor2: "#D94328", pagina: "jogo2/" },
        { nome: "Jogo 3", idade: "Subtítulo 3", imagem: "iconjogos/jogo3.png", cor: "#62D733", cor2: "#36A918", pagina: "jogo3/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#FFB400", cor2: "#E09A00", pagina: "jogo4/" }
      ]
    },
    {
      tituloFase: "Fase 4",
      jogos: [
        { nome: "Jogo 1", idade: "Subtítulo 1", imagem: "iconjogos/jogo1.png", cor: "#F59B0E", cor2: "#C67B07", pagina: "jogo1/" },
        { nome: "Jogo 2", idade: "Subtítulo 2", imagem: "iconjogos/jogo2.png", cor: "#FD6746", cor2: "#D94328", pagina: "jogo2/" },
        { nome: "Jogo 3", idade: "Subtítulo 3", imagem: "iconjogos/jogo3.png", cor: "#62D733", cor2: "#36A918", pagina: "jogo3/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#FFB400", cor2: "#E09A00", pagina: "jogo4/" }
      ]
    }
  ],

  menuAnos: [
    { id: "inicio", nome: "Início", icon: "inicio", pagina: "../" },
    { id: "pre", nome: "Pré-Escolar", icon: "pre", pagina: "../pre/" },
    { id: "ano1", nome: "1.º Ano", icon: "ano1", pagina: "../1/" },
    { id: "ano2", nome: "2.º Ano", icon: "ano2", pagina: "../2/" },
    { id: "ano3", nome: "3.º Ano", icon: "ano3", pagina: "../3/" },
    { id: "ano4", nome: "4.º Ano", icon: "ano4", pagina: "../4/" }
  ]
};
