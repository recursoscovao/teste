const DADOS = {
  pagina: {
    browserTitulo: "Português - 1.º Ano",
    titulo: "Português",
    subtitulo: "1.º Ano • Aprender a Ler e a Escrever",
    tituloMenu: "Escolhe a categoria",
    mensagem: "Escolhe uma atividade e diverte-te a aprender!",
    informacao: "Recursos educativos de Português"
  },

  icons: {
    cabecalho: "../icons/pt.png",
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
    fundo: "#F2F8FC",
    ceu1: "#B6E2F9",
    ceu2: "#DEF3FF",
    header: "#DEF3FF",
    headerTopo: "#B6E2F9",
    azulHeader: "#0F8BD3",
    texto: "#0B4B71",
    textoEscuro: "#062B42",
    branco: "#FFFFFF",
    linha: "#B4E4F8",
    sombra: "rgba(15,139,211,.18)",
    sombraForte: "rgba(15,139,211,.28)"
  },

  dimensoes: {
    larguraMaxima: 1400
  },

  menuAnos: [
    { id: "inicio", nome: "Início", icon: "inicio", pagina: "../" },
    { id: "pre", nome: "Pré-Escolar", icon: "pre", pagina: "../pre/" },
    { id: "ano1", nome: "1.º Ano", icon: "ano1", pagina: "../1/" },
    { id: "ano2", nome: "2.º Ano", icon: "ano2", pagina: "../2/" },
    { id: "ano3", nome: "3.º Ano", icon: "ano3", pagina: "../3/" },
    { id: "ano4", nome: "4.º Ano", icon: "ano4", pagina: "../4/" }
  ],

  // Secções de jogos com 6 cartões por linha e estilo baseado na imagem
  seccoesJogos: [
    {
      titulo: "Sons, Letras e Formas Básicas",
      corPonto: "#E91E63",
      jogos: [
        { numero: 1, nome: "Grafismos", descricao: "Liga as linhas retas", icon: "grafismos1.png", pagina: "jogos/rastros/index.html" },
        { numero: 2, nome: "Grafismos", descricao: "Liga as linhas curvas", icon: "grafismos2.png", pagina: "jogos/gatos-caes/index.html" },
        { numero: 3, nome: "Grafismos das Letras", descricao: "Desenha as letras", icon: "grafismos3.png", pagina: "jogos/dominio/index.html" },
        { numero: 4, nome: "Primeira Letra", descricao: "Escolhe a letra correta.", icon: "primeira-letra.png", pagina: "jogos/semaforo/index.html" },
        { numero: 5, nome: "Letra Inicial", descricao: "Qual é a primeira letra desse desenho?", icon: "letra-inicial.png", pagina: "jogos/quelhas/index.html" },
        { numero: 6, nome: "Toupeira das Letras", descricao: "Bata nas toupeiras corretas.", icon: "toupeira.png", pagina: "jogos/avanco/index.html" }
      ]
    },
    {
      titulo: "Descobertas e Sequências",
      corPonto: "#FF9800",
      jogos: [
        { numero: 7, nome: "Estoura-Balão", descricao: "Estoure desenhos correspondentes.", icon: "estoura-balao.png", pagina: "jogos/rastros/index.html" },
        { numero: 8, nome: "Letra Inicial", descricao: "Qual é a primeira letra desse desenho?", icon: "letra-inicial.png", pagina: "jogos/gatos-caes/index.html" },
        { numero: 9, nome: "Toupeira das Letras", descricao: "Bata nas toupeiras corretas.", icon: "toupeira.png", pagina: "jogos/dominio/index.html" },
        { numero: 10, nome: "Estoura-Balão", descricao: "Estoure desenhos correspondentes.", icon: "estoura-balao.png", pagina: "jogos/semaforo/index.html" },
        { numero: 11, nome: "Letra Inicial", descricao: "Qual é a primeira letra desse desenho?", icon: "letra-inicial.png", pagina: "jogos/quelhas/index.html" },
        { numero: 12, nome: "Toupeira das Letras", descricao: "Bata nas toupeiras corretas.", icon: "toupeira.png", pagina: "jogos/avanco/index.html" }
      ]
    }
  ]
};
