const DADOS = {
  pagina: {
    browserTitulo: "1.º Ano - Jogos Educativos",
    titulo: "Estudo do Meio",
    subtitulo: "Atividades • 1º Ano",
    tituloMenu: "Escolhe o Jogo",
    mensagem: "Escolhe um jogo e diverte-te a aprender!",
    informacao: "Jogos educativos para o 1.º ano",
    tituloMenuAcordeao: "Menu",
    urlVoltar: "../",
    iconeEstrela: "★",
    iconeInfo: "i"
  },

  icons: {
    cabecalho: "../../icons/icon1.png",
    menu: "../../icons/menu.png",
    seta: "../../icons/seta.png",
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
    fundo: "#F3FAF0",
    ceu1: "#D5F2C8",
    ceu2: "#EBF9E4",
    header: "#EBF9E4",
    headerTopo: "#D5F2C8",
    azulHeader: "#4BBF25",
    texto: "#1F5910",
    textoEscuro: "#103306",
    branco: "#FFFFFF",
    creme: "#E4F7DB",
    linha: "#C2ECC0",
    sombra: "rgba(75,191,37,.18)",
    sombraForte: "rgba(75,191,37,.28)"
  },

  dimensoes: {
    larguraMaxima: 1200,
    raioAno: 23,
    
    // 1. PC
    pc: {
      alturaCartao: 209,
      tamanhoIcone: 125
    },

    // 2. Telemóvel Vertical
    telemovelVertical: {
      alturaCartao: 200,
      tamanhoIcone: 110
    },

    // 3. Telemóvel Horizontal
    telemovelHorizontal: {
      alturaCartao: 140,
      tamanhoIcone: 75
    },

    // 4. Tablet Vertical (3 colunas)
    tabletVertical: {
      alturaCartao: 240,
      tamanhoIcone: 110
    },

    // 5. Tablet Horizontal (5 colunas)
    tabletHorizontal: {
      alturaCartao: 220,
      tamanhoIcone: 130
    }
  },

  fases: [
    {
      tituloFase: "Fase 1",
      jogos: [
        { nome: "Grafismos", idade: "Linhas Retas", imagem: "iconjogos/f1_jogo01pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo01pt/" },
        { nome: "Grafismos", idade: "Linhas curvas", imagem: "iconjogos/f1_jogo02pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo02pt/" },
        { nome: "Grafismos", idade: "Letras", imagem: "iconjogos/f1_jogo03pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo03pt/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo4/" },
        { nome: "Jogo 5", idade: "Subtítulo 5", imagem: "iconjogos/jogo5.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo5/" },
        { nome: "Jogo 6", idade: "Subtítulo 6", imagem: "iconjogos/jogo6.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo6/" }
      ]
    },
    {
      tituloFase: "Fase 2",
      jogos: [
        { nome: "Grafismos", idade: "Linhas Retas", imagem: "iconjogos/f1_jogo01pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo01pt/" },
        { nome: "Grafismos", idade: "Linhas curvas", imagem: "iconjogos/f1_jogo02pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo02pt/" },
        { nome: "Grafismos", idade: "Letras", imagem: "iconjogos/f1_jogo03pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo03pt/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo4/" },
        { nome: "Jogo 5", idade: "Subtítulo 5", imagem: "iconjogos/jogo5.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo5/" },
        { nome: "Jogo 6", idade: "Subtítulo 6", imagem: "iconjogos/jogo6.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo6/" }
      ]
    },
    {
      tituloFase: "Fase 3",
      jogos: [
        { nome: "Grafismos", idade: "Linhas Retas", imagem: "iconjogos/f1_jogo01pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo01pt/" },
        { nome: "Grafismos", idade: "Linhas curvas", imagem: "iconjogos/f1_jogo02pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo02pt/" },
        { nome: "Grafismos", idade: "Letras", imagem: "iconjogos/f1_jogo03pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo03pt/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo4/" },
        { nome: "Jogo 5", idade: "Subtítulo 5", imagem: "iconjogos/jogo5.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo5/" },
        { nome: "Jogo 6", idade: "Subtítulo 6", imagem: "iconjogos/jogo6.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo6/" }
      ]
    },
    {
      tituloFase: "Fase 4",
      jogos: [
        { nome: "Grafismos", idade: "Linhas Retas", imagem: "iconjogos/f1_jogo01pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo01pt/" },
        { nome: "Grafismos", idade: "Linhas curvas", imagem: "iconjogos/f1_jogo02pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo02pt/" },
        { nome: "Grafismos", idade: "Letras", imagem: "iconjogos/f1_jogo03pt.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "f1_jogo03pt/" },
        { nome: "Jogo 4", idade: "Subtítulo 4", imagem: "iconjogos/jogo4.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo4/" },
        { nome: "Jogo 5", idade: "Subtítulo 5", imagem: "iconjogos/jogo5.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo5/" },
        { nome: "Jogo 6", idade: "Subtítulo 6", imagem: "iconjogos/jogo6.png", cor: "#11CBFC", cor2: "#079BC8", pagina: "jogo6/" }
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
