```javascript
/*
================================================================
 RECURSOS Covão — DADOS E APRESENTAÇÃO
================================================================
 Estrutura HTML: index.html

 Este ficheiro concentra:
 - textos
 - cores
 - dimensões
 - caminhos dos icons
 - anos
 - jogos em destaque
 - CSS
 - comportamento
================================================================
*/


/* ==============================================================
   DADOS GERAIS
   ============================================================== */

const DADOS = {

  /* --------------------------------------------------------------
     NUVENS
     -------------------------------------------------------------- */

  nuvem: "../icons/nuvem.png",

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


  /* --------------------------------------------------------------
     TEXTOS DA PÁGINA
     -------------------------------------------------------------- */

  pagina: {
    titulo: "Recursos Covão",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolhe o ano",
    mensagem: "Escolhe o ano e comece a aprender!",
    informacao: "Recursos educativos para o 1.º ciclo"
  },


  /* --------------------------------------------------------------
     ICONS
     Todos os caminhos ficam centralizados aqui.
     -------------------------------------------------------------- */

  icons: {

    anos: {
      pre: "../icons/iconpre.png",
      ano1: "../icons/pt.png",
      ano2: "../icons/mat.png",
      ano3: "../icons/em.png",
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


  /* --------------------------------------------------------------
     CORES
     -------------------------------------------------------------- */

  cores: {

    fundo: "#EAF5FC",
    ceu1: "#78DDF7",
    ceu2: "#BCEEF9",

    cabecalho: "#0358A9",

    texto: "#07569A",
    textoEscuro: "#064B8A",
    branco: "#FFFFFF",

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

    sombra: "rgba(15, 88, 139, .20)",
    sombraForte: "rgba(15, 88, 139, .30)"

  },


  /* --------------------------------------------------------------
     DIMENSÕES
     -------------------------------------------------------------- */

  dimensoes: {

    larguraMaxima: 1650,

    alturaAnoDesktop: 300,
    alturaAnoTabletHorizontal: 245,
    alturaAnoTelemovelHorizontal: 175,

    raioAno: 23,
    raioDestaques: 26,

    tamanhoIconAnoDesktop: 150,
    tamanhoIconAnoTablet: 115,
    tamanhoIconAnoTelemovelHorizontal: 86,

    tamanhoIconJogo: 76,
    tamanhoIconJogoTablet: 64,
    tamanhoIconJogoTelemovel: 54

  },


  /* --------------------------------------------------------------
     ANOS
     -------------------------------------------------------------- */

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
      pagina: "ano-3.html"
    },

    {
      id: "ano4",
      nome: "4.º Ano",
      idade: "9 – 10 anos",
      icon: "ano4",
      cor: "#F43A9D",
      cor2: "#C81970",
      pagina: "ano-4.html"
    }

  ],


  /* --------------------------------------------------------------
     JOGOS EM DESTAQUE
     -------------------------------------------------------------- */

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
      id: "dominorio",
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


/* ==============================================================
   CSS
   ============================================================== */

const CSS = `

/* ==============================================================
   BASE
   ============================================================== */

:root {
  --fundo: ${DADOS.cores.fundo};
  --ceu1: ${DADOS.cores.ceu1};
  --ceu2: ${DADOS.cores.ceu2};
  --cabecalho: ${DADOS.cores.cabecalho};
  --texto: ${DADOS.cores.texto};
  --texto-escuro: ${DADOS.cores.textoEscuro};
  --branco: ${DADOS.cores.branco};
  --creme: ${DADOS.cores.creme};
  --creme2: ${DADOS.cores.creme2};
  --linha: ${DADOS.cores.linha};
  --sombra: ${DADOS.cores.sombra};
  --sombra-forte: ${DADOS.cores.sombraForte};
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  background: var(--fundo);
}

body {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  font-family:
    "Nunito",
    "Quicksand",
    "Arial Rounded MT Bold",
    "Trebuchet MS",
    Arial,
    sans-serif;
  color: var(--texto);
  background: var(--fundo);
}

button {
  font: inherit;
}


/* ==============================================================
   APLICAÇÃO
   ============================================================== */

#app {
  width: min(100%, ${DADOS.dimensoes.larguraMaxima}px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  position: relative;
  overflow: hidden;

  background:
    linear-gradient(
      180deg,
      var(--ceu1) 0,
      var(--ceu2) 19%,
      #EAF5FC 38%,
      var(--fundo) 100%
    );
}


/* ==============================================================
   CAMADA DAS NUVENS
   ============================================================== */

.camada-nuvens {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.nuvem-pequena {
  position: absolute;
  display: block;
  object-fit: contain;
  opacity: .88;

  filter:
    drop-shadow(0 2px 1px rgba(80,130,160,.08));

  z-index: 0;

  transform:
    translate(-50%, -50%)
    rotate(var(--rotacao-nuvem));
}

@keyframes flutuar-nuvem {

  0%,
  100% {
    transform:
      translate(-50%, -50%)
      translateX(0)
      rotate(var(--rotacao-nuvem));
  }

  50% {
    transform:
      translate(-50%, -50%)
      translateX(18px)
      rotate(var(--rotacao-nuvem));
  }

}


/* ==============================================================
   CONTEÚDO À FRENTE DAS NUVENS
   ============================================================== */

.cabecalho,
.titulo-menu,
.anos,
.destaques,
.rodape {
  position: relative;
  z-index: 1;
}


/* ==============================================================
   CABEÇALHO
   ============================================================== */

.cabecalho {
  width: 100%;
  height: 82px;
  margin: 0;
  padding: 0;

  background: var(--cabecalho);

  display: flex;
  align-items: center;
  justify-content: center;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

.marca-sol {
  width: 62px;
  height: 62px;
  position: relative;
  flex: 0 0 62px;
}

.marca-sol::before {
  content: "☀";
  position: absolute;
  inset: 0;

  display: grid;
  place-items: center;

  color: #FFBA16;
  font-size: 65px;
  line-height: 1;

  filter:
    drop-shadow(0 2px 0 rgba(255,255,255,.8))
    drop-shadow(0 3px 2px rgba(100,80,0,.13));
}

.marca-texto h1 {
  margin: 0;
  color: #FFFFFF;

  font-size: clamp(28px, 3vw, 45px);
  line-height: .98;
  font-weight: 900;
  letter-spacing: -.9px;

  text-shadow:
    0 2px 0 rgba(255,255,255,.8);
}

.marca-texto p {
  margin: 6px 0 0;
  color: #FFFFFF;

  font-size: clamp(13px, 1.2vw, 18px);
  line-height: 1;
  font-weight: 800;
}


/* ==============================================================
   TÍTULO
   ============================================================== */

.titulo-menu {
  width: fit-content;
  margin: 14px auto 19px;
  padding: 8px 30px;

  border: 2px solid rgba(222,157,39,.42);
  border-radius: 16px;

  background:
    linear-gradient(
      180deg,
      #FFFDEC,
      var(--creme)
    );

  box-shadow:
    0 3px 7px rgba(118,88,17,.12),
    inset 0 1px 0 rgba(255,255,255,.95);
}

.titulo-menu h2 {
  margin: 0;
  color: #74440C;

  font-size: clamp(18px, 1.7vw, 27px);
  line-height: 1;
  font-weight: 900;
}


/* ==============================================================
   CARTÕES DOS ANOS
   ============================================================== */

.anos {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 14px;
}

.ano {
  min-width: 0;
}

.botao-ano {
  width: 100%;
  height: ${DADOS.dimensoes.alturaAnoDesktop}px;

  padding: 18px 12px 14px;

  border: 3px solid rgba(255,255,255,.94);
  border-radius: ${DADOS.dimensoes.raioAno}px;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  cursor: pointer;

  background:
    linear-gradient(
      145deg,
      var(--cor-1),
      var(--cor-2)
    );

  box-shadow:
    0 9px 15px var(--sombra),
    inset 0 1px 1px rgba(255,255,255,.7);

  transition:
    transform .15s ease,
    box-shadow .15s ease;
}

.botao-ano::before {
  content: "";
  position: absolute;

  width: 170%;
  height: 110%;
  left: -95%;
  top: -63%;

  border-radius: 50%;
  background: rgba(255,255,255,.15);

  pointer-events: none;
}

.botao-ano::after {
  content: "";
  position: absolute;

  width: 90px;
  height: 90px;

  right: -34px;
  top: -35px;

  border-radius: 50%;
  background: rgba(255,255,255,.10);

  pointer-events: none;
}

.botao-ano:hover {
  transform: translateY(-4px);

  box-shadow:
    0 13px 20px var(--sombra-forte),
    inset 0 1px 1px rgba(255,255,255,.75);
}

.botao-ano:active {
  transform: translateY(-1px);
}

.icone-ano {
  width: ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;
  height: ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  flex: 0 0 ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;

  display: grid;
  place-items: center;

  position: relative;
  z-index: 1;
}

.icone-ano img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;

  filter:
    drop-shadow(0 5px 3px rgba(0,0,0,.16));
}

.texto-ano {
  position: relative;
  z-index: 1;
  text-align: center;
}

.nome-ano {
  font-family:
    "Nunito",
    "Quicksand",
    "Arial Rounded MT Bold",
    "Trebuchet MS",
    sans-serif;

  font-size: clamp(21px, 1.8vw, 29px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -.25px;

  text-shadow:
    0 2px 1px rgba(0,0,0,.17);
}

.idade-ano {
  margin-top: 7px;

  font-family:
    "Nunito",
    "Quicksand",
    "Trebuchet MS",
    sans-serif;

  font-size: clamp(14px, 1.2vw, 18px);
  line-height: 1;
  font-weight: 700;
  letter-spacing: .15px;

  text-shadow:
    0 1px 1px rgba(0,0,0,.12);
}


/* ==============================================================
   JOGOS EM DESTAQUE
   ============================================================== */

.destaques {
  margin-top: 20px;
  padding: 23px 28px 25px;

  border-radius: ${DADOS.dimensoes.raioDestaques}px;

  background: rgba(255,255,255,.93);

  box-shadow:
    0 7px 18px rgba(25,100,150,.10),
    inset 0 1px 0 rgba(255,255,255,1);
}

.titulo-destaques {
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  align-items: center;
  gap: 28px;

  margin: 0 30px 25px;
}

.titulo-destaques .linha {
  height: 3px;
  background: #A7D5FA;
  border-radius: 99px;
}

.titulo-destaques h2 {
  margin: 0;
  color: #064F91;

  font-size: clamp(19px, 1.65vw, 26px);
  line-height: 1;
  font-weight: 900;

  white-space: nowrap;
  text-align: center;
}

.titulo-destaques h2 span {
  margin-right: 7px;
  font-size: .92em;
}

.jogos {
  display: grid;
  grid-template-columns:
    repeat(6, minmax(0, 1fr));

  gap: 20px;
  align-items: start;
}

.jogo {
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}

.icone-jogo {
  width: ${DADOS.dimensoes.tamanhoIconJogo}px;
  height: ${DADOS.dimensoes.tamanhoIconJogo}px;

  display: grid;
  place-items: center;

  margin-bottom: 10px;
}

.icone-jogo img {
  width: 100%;
  height: 100%;

  object-fit: contain;
  display: block;
}

.nome-jogo {
  min-height: 25px;
  color: #064F91;

  font-size: clamp(15px, 1.25vw, 20px);
  line-height: 1.05;
  font-weight: 900;
}

.estrelas {
  margin-top: 7px;
  color: #FFB400;

  font-family: Arial, sans-serif;
  font-size: clamp(15px, 1.15vw, 18px);
  line-height: 1;
  letter-spacing: 1px;
}


/* ==============================================================
   RODAPÉ
   ============================================================== */

.rodape {
  width: 100%;
  min-height: 53px;

  margin-top: 15px;
  padding: 8px 17px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 15px;
  align-items: center;

  border: 2px solid var(--linha);
  border-radius: 14px;

  background: rgba(255,255,255,.78);

  box-shadow:
    0 4px 10px rgba(16,103,150,.08);

  font-size: clamp(11px, 1vw, 14px);
  font-weight: 800;
}

.rodape-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rodape-info {
  justify-content: flex-end;
}

.estrela {
  color: #FFB400;
  font-size: 25px;
  line-height: 1;
}

.info {
  width: 25px;
  height: 25px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  color: #fff;
  background: #087AC9;

  font-family: Arial, sans-serif;
  font-weight: 900;
}


/* ==============================================================
   TABLET HORIZONTAL
   ============================================================== */

@media (max-width: 1100px) and (min-width: 601px) and (orientation: landscape) {

  #app {
    padding: 0 13px 12px;
  }

  .cabecalho {
    height: 64px;
  }

  .marca-sol {
    width: 49px;
    height: 49px;
    flex-basis: 49px;
  }

  .marca-sol::before {
    font-size: 52px;
  }

  .marca-texto h1 {
    font-size: 28px;
  }

  .marca-texto p {
    font-size: 12px;
    margin-top: 4px;
  }

  .titulo-menu {
    margin-bottom: 12px;
    padding: 7px 24px;
  }

  .titulo-menu h2 {
    font-size: 2
```
