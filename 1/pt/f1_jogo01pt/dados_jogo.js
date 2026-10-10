const DADOS_JOGO = {
  informacoes: {
    tituloJogo: "Divisão Silábica",
    subtitulo: "Grafismos • Linhas Retas",
    destinado: "1.º Ano",
    totalRondas: 10
  },

  coresJogo: {
    corPrimaria: "#11CBFC",
    corSecundaria: "#079BC8",
    fundoRecetor: "#FFFFFF"
  },

  // Definições de responsividade geridas centralmente nos dados do jogo
  dimensoes: {
    pc: {
      larguraRecetor: 750,
      paddingRecetor: 30,
      tamanhoPalavra: 54
    },
    tabletVertical: {
      larguraRecetor: 90, // %
      paddingRecetor: 25,
      tamanhoPalavra: 46
    },
    tabletHorizontal: {
      larguraRecetor: 700,
      paddingRecetor: 25,
      tamanhoPalavra: 50
    },
    telemovelVertical: {
      larguraRecetor: 100, // %
      paddingRecetor: 18,
      tamanhoPalavra: 32
    },
    telemovelHorizontal: {
      larguraRecetor: 550,
      paddingRecetor: 12,
      tamanhoPalavra: 26
    }
  },

  palavras: [
    { palavra: "Pão", silabas: 1 },
    { palavra: "Sol", silabas: 1 },
    { palavra: "Bola", silabas: 2 },
    { palavra: "Gato", silabas: 2 },
    { palavra: "Casa", silabas: 2 },
    { palavra: "Janela", silabas: 3 },
    { palavra: "Boneca", silabas: 3 },
    { palavra: "Caneta", silabas: 3 },
    { palavra: "Computador", silabas: 4 },
    { palavra: "Borboleta", silabas: 4 }
  ]
};
