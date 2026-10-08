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
    },
    jogos: {
      rastros: "../icons/rastros.png",
      gatosCaes: "../icons/gatos&caes.png",
      dominorio: "../icons/dominorio.png",
      semaforo: "../icons/semaforo.png",
      quelhas: "../icons/quelhas.png",
      avanco: "../icons/avanco.png"
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
    larguraMaxima: 1200,
    tamanhoIconJogo: 76
  },

  menuAnos: [
    { id: "inicio", nome: "Início", icon: "inicio", pagina: "../" },
    { id: "pre", nome: "Pré-Escolar", icon: "pre", pagina: "../pre/" },
    { id: "ano1", nome: "1.º Ano", icon: "ano1", pagina: "../1/" },
    { id: "ano2", nome: "2.º Ano", icon: "ano2", pagina: "../2/" },
    { id: "ano3", nome: "3.º Ano", icon: "ano3", pagina: "../3/" },
    { id: "ano4", nome: "4.º Ano", icon: "ano4", pagina: "../4/" }
  ],

  // Secções de jogos (até 5 secções com 6 cartões por linha)
  seccoesJogos: [
    {
      titulo: "Primeiras Letras",
      iconeTitulo: "🔤",
      jogos: [
        { id: "rastros", nome: "Rastros", icon: "rastros", estrelas: 5, pagina: "jogos/rastros/index.html" },
        { id: "gatosCaes", nome: "Gatos&Cães", icon: "gatosCaes", estrelas: 5, pagina: "jogos/gatos-caes/index.html" },
        { id: "dominio", nome: "Dominório", icon: "dominorio", estrelas: 5, pagina: "jogos/dominio/index.html" },
        { id: "semaforo", nome: "Semáforo", icon: "semaforo", estrelas: 5, pagina: "jogos/semaforo/index.html" },
        { id: "quelhas", nome: "Quellhas", icon: "quelhas", estrelas: 5, pagina: "jogos/quelhas/index.html" },
        { id: "avanco", nome: "Avanço", icon: "avanco", estrelas: 5, pagina: "jogos/avanco/index.html" }
      ]
    },
    {
      titulo: "Primeiros Sons",
      iconeTitulo: "🔊",
      jogos: [
        { id: "rastros", nome: "Rastros", icon: "rastros", estrelas: 5, pagina: "jogos/rastros/index.html" },
        { id: "gatosCaes", nome: "Gatos&Cães", icon: "gatosCaes", estrelas: 5, pagina: "jogos/gatos-caes/index.html" },
        { id: "dominio", nome: "Dominório", icon: "dominorio", estrelas: 5, pagina: "jogos/dominio/index.html" },
        { id: "semaforo", nome: "Semáforo", icon: "semaforo", estrelas: 5, pagina: "jogos/semaforo/index.html" },
        { id: "quelhas", nome: "Quellhas", icon: "quelhas", estrelas: 5, pagina: "jogos/quelhas/index.html" },
        { id: "avanco", nome: "Avanço", icon: "avanco", estrelas: 5, pagina: "jogos/avanco/index.html" }
      ]
    },
    {
      titulo: "Sílabas Simples",
      iconeTitulo: "📖",
      jogos: [
        { id: "rastros", nome: "Rastros", icon: "rastros", estrelas: 5, pagina: "jogos/rastros/index.html" },
        { id: "gatosCaes", nome: "Gatos&Cães", icon: "gatosCaes", estrelas: 5, pagina: "jogos/gatos-caes/index.html" },
        { id: "dominio", nome: "Dominório", icon: "dominorio", estrelas: 5, pagina: "jogos/dominio/index.html" },
        { id: "semaforo", nome: "Semáforo", icon: "semaforo", estrelas: 5, pagina: "jogos/semaforo/index.html" },
        { id: "quelhas", nome: "Quellhas", icon: "quelhas", estrelas: 5, pagina: "jogos/quelhas/index.html" },
        { id: "avanco", nome: "Avanço", icon: "avanco", estrelas: 5, pagina: "jogos/avanco/index.html" }
      ]
    },
    {
      titulo: "Palavras e Frases",
      iconeTitulo: "📝",
      jogos: [
        { id: "rastros", nome: "Rastros", icon: "rastros", estrelas: 5, pagina: "jogos/rastros/index.html" },
        { id: "gatosCaes", nome: "Gatos&Cães", icon: "gatosCaes", estrelas: 5, pagina: "jogos/gatos-caes/index.html" },
        { id: "dominio", nome: "Dominório", icon: "dominorio", estrelas: 5, pagina: "jogos/dominio/index.html" },
        { id: "semaforo", nome: "Semáforo", icon: "semaforo", estrelas: 5, pagina: "jogos/semaforo/index.html" },
        { id: "quelhas", nome: "Quellhas", icon: "quelhas", estrelas: 5, pagina: "jogos/quelhas/index.html" },
        { id: "avanco", nome: "Avanço", icon: "avanco", estrelas: 5, pagina: "jogos/avanco/index.html" }
      ]
    },
    {
      titulo: "Leitura Divertida",
      iconeTitle: "📚",
      jogos: [
        { id: "rastros", nome: "Rastros", icon: "rastros", estrelas: 5, pagina: "jogos/rastros/index.html" },
        { id: "gatosCaes", nome: "Gatos&Cães", icon: "gatosCaes", estrelas: 5, pagina: "jogos/gatos-caes/index.html" },
        { id: "dominio", nome: "Dominório", icon: "dominorio", estrelas: 5, pagina: "jogos/dominio/index.html" },
        { id: "semaforo", nome: "Semáforo", icon: "semaforo", estrelas: 5, pagina: "jogos/semaforo/index.html" },
        { id: "quelhas", nome: "Quellhas", icon: "quelhas", estrelas: 5, pagina: "jogos/quelhas/index.html" },
        { id: "avanco", nome: "Avanço", icon: "avanco", estrelas: 5, pagina: "jogos/avanco/index.html" }
      ]
    }
  ]
};
