/*
================================================================
  RECURSOS DO CÃO — MENU PRINCIPAL
================================================================

  index.html = estrutura.
  dados.js   = dados + cores + imagens + CSS + comportamento.

  ÍCONES DOS ANOS:
    icons/pre.png
    icons/1ano.png
    icons/2ano.png
    icons/3ano.png
    icons/4ano.png

  Os cartões dos anos NÃO usam 16:9.
  PC / tablet horizontal:
      5 cartões lado a lado, icon em cima e texto em baixo.
  Tablet vertical / telemóvel vertical:
      1 cartão por linha, icon à esquerda e texto à direita.

  Os icons têm uma caixa visual comum, por isso ficam todos
  alinhados e com tamanho aparente consistente mesmo que os
  PNG tenham áreas transparentes diferentes.
*/

const DADOS = {

  pagina: {
    titulo: "Recursos do Cão",
    subtitulo: "Aprender • Explorar • Descobrir",
    tituloMenu: "Escolha o ano",
    tituloJogos: "Jogos em destaque",
    mensagem: "Escolha o ano e comece a aprender!",
    informacao: "Recursos educativos para o 1.º ciclo"
  },

  cores: {
    fundo: "#EAF7FF",
    ceu1: "#59CFF2",
    ceu2: "#AEEBFA",

    texto: "#07569A",
    textoEscuro: "#073F79",
    branco: "#FFFFFF",

    amarelo: "#FFB817",
    amareloEscuro: "#E99500",

    azul: "#19B9F0",
    azulEscuro: "#0878C7",

    verde: "#49C83E",
    verdeEscuro: "#15983A",

    roxo: "#A84BED",
    roxoEscuro: "#7131B5",

    rosa: "#F3379B",
    rosaEscuro: "#C51770",

    creme: "#FFF7D8",
    cremeBorda: "#EFCB77",

    linha: "#A4D9FA",
    painel: "#FFFFFF",

    sombra: "rgba(8,76,126,.20)",
    sombraForte: "rgba(8,76,126,.30)"
  },

  dimensoes: {
    larguraMaxima: 1500,
    raioCartaoAno: 20,
    raioJogos: 27,
    gapAnos: 12,
    gapJogos: 18
  },

  imagens: {
    pre: "icons/pre.png",
    ano1: "icons/1ano.png",
    ano2: "icons/2ano.png",
    ano3: "icons/3ano.png",
    ano4: "icons/4ano.png"
  },

  anos: [
    {
      id: "pre",
      nome: "Pré-Escolar",
      idade: "3 – 5 anos",
      icon: "pre",
      cor: "#FFB817",
      cor2: "#F28C0A",
      pagina: "pre-escolar.html"
    },
    {
      id: "ano1",
      nome: "1.º Ano",
      idade: "6 – 7 anos",
      icon: "ano1",
      cor: "#1ABAF0",
      cor2: "#087AC8",
      pagina: "ano-1.html"
    },
    {
      id: "ano2",
      nome: "2.º Ano",
      idade: "7 – 8 anos",
      icon: "ano2",
      cor: "#49C83E",
      cor2: "#179B3B",
      pagina: "ano-2.html"
    },
    {
      id: "ano3",
      nome: "3.º Ano",
      idade: "8 – 9 anos",
      icon: "ano3",
      cor: "#A84BED",
      cor2: "#7131B5",
      pagina: "ano-3.html"
    },
    {
      id: "ano4",
      nome: "4.º Ano",
      idade: "9 – 10 anos",
      icon: "ano4",
      cor: "#F3379B",
      cor2: "#C51770",
      pagina: "ano-4.html"
    }
  ],

  /*
    Estes são os 6 exemplos da faixa "Jogos em destaque"
    mostrada na referência.

    imagem pode ser substituída diretamente por um PNG quando
    os teus previews dos jogos estiverem disponíveis.
  */
  jogos: [
    {
      id: "rastros",
      nome: "Rastros",
      imagem: "gerarPreviewRastros",
      pagina: "#"
    },
    {
      id: "gatos-caes",
      nome: "Gatos&Cães",
      imagem: "gerarPreviewGatos",
      pagina: "#"
    },
    {
      id: "dominio",
      nome: "Dominório",
      imagem: "gerarPreviewDominorio",
      pagina: "#"
    },
    {
      id: "semaforo",
      nome: "Semáforo",
      imagem: "gerarPreviewSemaforo",
      pagina: "#"
    },
    {
      id: "damas",
      nome: "Quellas",
      imagem: "gerarPreviewQuellas",
      pagina: "#"
    },
    {
      id: "avanco",
      nome: "Avanço",
      imagem: "gerarPreviewAvanco",
      pagina: "#"
    }
  ]
};


/* ============================================================
   PREVIEWS SVG DOS JOGOS
   ============================================================ */

function svg(markup) {
  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(markup.trim());
}

const PREVIEWS = {

  gerarPreviewRastros: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
      <rect width="120" height="100" rx="2" fill="#DCEAF5"/>
      <path d="M0 20h120M0 40h120M0 60h120M0 80h120M24 0v100M48 0v100M72 0v100M96 0v100"
            stroke="#7C9BB1" stroke-width="1"/>
      <circle cx="63" cy="43" r="6" fill="#111"/>
      <circle cx="40" cy="61" r="5" fill="#fff" stroke="#111" stroke-width="1"/>
      <text x="104" y="13" font-family="Arial" font-size="7" fill="#5590BF">2</text>
      <text x="12" y="91" font-family="Arial" font-size="7" fill="#5590BF">1</text>
    </svg>
  `),

  gerarPreviewGatos: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
      <rect width="120" height="100" fill="#FFF0C8"/>
      <path d="M0 20h120M0 40h120M0 60h120M0 80h120M20 0v100M40 0v100M60 0v100M80 0v100M100 0v100"
            stroke="#B99E6A" stroke-width="1"/>
      <path d="M25 20l5-8 6 8 7-3v10H23V17zM54 20l5-8 6 8 7-3v10H52V17z"
            fill="#161616"/>
      <path d="M54 40l5-6 5 6 5-2v9H49v-9z" fill="#111"/>
      <text x="55" y="70" font-family="Arial" font-size="10">×</text>
      <text x="72" y="55" font-family="Arial" font-size="10">×</text>
      <text x="91" y="91" font-family="Arial" font-size="8">🐶</text>
    </svg>
  `),

  gerarPreviewDominorio: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
      <rect width="120" height="100" fill="#D9F0DD"/>
      <path d="M0 20h120M0 40h120M0 60h120M0 80h120M24 0v100M48 0v100M72 0v100M96 0v100"
            stroke="#83B88D" stroke-width="1"/>
      <rect x="36" y="1" width="22" height="43" rx="4" fill="#4CB83F" stroke="#238F32"/>
      <circle cx="48" cy="13" r="2.4" fill="#fff"/>
      <circle cx="48" cy="29" r="2.4" fill="#fff"/>
      <circle cx="48" cy="35" r="2.4" fill="#fff"/>
      <rect x="61" y="58" width="43" height="22" rx="4" fill="#F04421" stroke="#C82D16"/>
      <circle cx="70" cy="69" r="2.4" fill="#fff"/>
      <circle cx="80" cy="65" r="2.4" fill="#fff"/>
      <circle cx="80" cy="73" r="2.4" fill="#fff"/>
      <circle cx="91" cy="65" r="2.4" fill="#fff"/>
      <circle cx="91" cy="73" r="2.4" fill="#fff"/>
    </svg>
  `),

  gerarPreviewSemaforo: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
      <rect width="120" height="100" fill="#E6E0F0"/>
      <path d="M0 20h120M0 40h120M0 60h120M0 80h120M24 0v100M48 0v100M72 0v100M96 0v100"
            stroke="#9A8BA9" stroke-width="1"/>
      <circle cx="16" cy="15" r="10" fill="#FF3346"/>
      <circle cx="103" cy="15" r="10" fill="#FF3346"/>
      <circle cx="47" cy="50" r="10" fill="#FFF32F"/>
      <circle cx="76" cy="50" r="10" fill="#FFF32F"/>
      <circle cx="16" cy="82" r="10" fill="#72BC39"/>
      <circle cx="103" cy="82" r="10" fill="#72BC39"/>
    </svg>
  `),

  gerarPreviewQuellas: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
      <rect width="120" height="100" fill="#D7EEEE"/>
      <path d="M0 20h120M0 40h120M0 60h120M0 80h120M24 0v100M48 0v100M72 0v100M96 0v100"
            stroke="#7EA7AA" stroke-width="1"/>
      <g fill="#111">
        <circle cx="68" cy="9" r="5"/><circle cx="82" cy="9" r="5"/><circle cx="96" cy="9" r="5"/>
        <circle cx="68" cy="22" r="5"/><circle cx="82" cy="22" r="5"/><circle cx="96" cy="22" r="5"/>
        <circle cx="96" cy="35" r="5"/><circle cx="96" cy="48" r="5"/><circle cx="96" cy="61" r="5"/>
      </g>
      <g fill="#fff" stroke="#555">
        <circle cx="10" cy="68" r="5"/><circle cx="23" cy="68" r="5"/>
        <circle cx="10" cy="81" r="5"/><circle cx="23" cy="81" r="5"/>
      </g>
    </svg>
  `),

  gerarPreviewAvanco: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
      <rect width="120" height="100" fill="#E7E0F0"/>
      <path d="M0 20h120M0 40h120M0 60h120M0 80h120M20 0v100M40 0v100M60 0v100M80 0v100M100 0v100"
            stroke="#9B8DA8" stroke-width="1"/>
      <g fill="#111">
        <circle cx="10" cy="10" r="5"/><circle cx="23" cy="10" r="5"/><circle cx="36" cy="10" r="5"/><circle cx="49" cy="10" r="5"/><circle cx="62" cy="10" r="5"/><circle cx="75" cy="10" r="5"/><circle cx="88" cy="10" r="5"/><circle cx="101" cy="10" r="5"/>
        <circle cx="10" cy="23" r="5"/><circle cx="23" cy="23" r="5"/><circle cx="36" cy="23" r="5"/><circle cx="49" cy="23" r="5"/><circle cx="62" cy="23" r="5"/><circle cx="75" cy="23" r="5"/><circle cx="88" cy="23" r="5"/><circle cx="101" cy="23" r="5"/>
      </g>
      <g fill="#fff" stroke="#777">
        <circle cx="10" cy="68" r="5"/><circle cx="23" cy="68" r="5"/><circle cx="36" cy="68" r="5"/><circle cx="49" cy="68" r="5"/><circle cx="62" cy="68" r="5"/><circle cx="75" cy="68" r="5"/><circle cx="88" cy="68" r="5"/><circle cx="101" cy="68" r="5"/>
        <circle cx="10" cy="81" r="5"/><circle cx="23" cy="81" r="5"/><circle cx="36" cy="81" r="5"/><circle cx="49" cy="81" r="5"/><circle cx="62" cy="81" r="5"/><circle cx="75" cy="81" r="5"/><circle cx="88" cy="81" r="5"/><circle cx="101" cy="81" r="5"/>
      </g>
    </svg>
  `)
};


/* ============================================================
   CSS
   ============================================================ */

const CSS = `
:root {
  --fundo: ${DADOS.cores.fundo};
  --ceu1: ${DADOS.cores.ceu1};
  --ceu2: ${DADOS.cores.ceu2};
  --texto: ${DADOS.cores.texto};
  --texto-escuro: ${DADOS.cores.textoEscuro};
  --branco: ${DADOS.cores.branco};
  --amarelo: ${DADOS.cores.amarelo};
  --linha: ${DADOS.cores.linha};
  --sombra: ${DADOS.cores.sombra};
  --sombra-forte: ${DADOS.cores.sombraForte};
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
}

body {
  min-height: 100vh;
  overflow-x: hidden;

  font-family:
    "Trebuchet MS",
    "Arial Rounded MT Bold",
    Arial,
    sans-serif;

  color: var(--texto);
  background: var(--fundo);
}

button {
  font: inherit;
}

#app {
  position: relative;
  isolation: isolate;
  overflow: hidden;

  width: min(100%, ${DADOS.dimensoes.larguraMaxima}px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 12px 18px 18px;

  background:
    linear-gradient(
      180deg,
      var(--ceu1) 0px,
      var(--ceu2) 170px,
      #E9F7FF 390px,
      var(--fundo) 100%
    );
}

/* ============================================================
   NUVENS — volumosas e com várias camadas para parecerem
   nuvens reais, em vez de simples círculos.
   ============================================================ */

.ceu {
  position: absolute;
  z-index: -1;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.nuvem {
  position: absolute;
  width: 190px;
  height: 48px;

  border-radius: 50px;

  opacity: .82;

  background:
    radial-gradient(
      ellipse at 24% 65%,
      #FFFFFF 0 23px,
      rgba(255,255,255,.97) 24px,
      rgba(255,255,255,.80) 39px,
      transparent 40px
    ),
    radial-gradient(
      ellipse at 47% 45%,
      #FFFFFF 0 34px,
      rgba(255,255,255,.94) 35px,
      rgba(255,255,255,.65) 52px,
      transparent 53px
    ),
    radial-gradient(
      ellipse at 70% 63%,
      #FFFFFF 0 25px,
      rgba(255,255,255,.94) 26px,
      rgba(255,255,255,.55) 43px,
      transparent 44px
    ),
    linear-gradient(
      180deg,
      rgba(255,255,255,.96),
      rgba(238,250,255,.82)
    );

  filter: blur(.15px) drop-shadow(0 7px 8px rgba(70,137,166,.12));
}

.nuvem::after {
  content: "";
  position: absolute;
  left: 25px;
  right: 25px;
  bottom: -5px;
  height: 18px;

  border-radius: 50%;

  background: rgba(255,255,255,.72);
  filter: blur(5px);
}

.nuvem-1 {
  top: 33px;
  left: -35px;
  transform: scale(1.05);
}

.nuvem-2 {
  top: 75px;
  right: -58px;
  transform: scale(.78);
  opacity: .58;
}

.nuvem-3 {
  top: 150px;
  left: 29%;
  transform: scale(.54);
  opacity: .43;
}

.nuvem-4 {
  top: 180px;
  right: 18%;
  transform: scale(.43);
  opacity: .34;
}

/* ============================================================
   CABEÇALHO
   ============================================================ */

.cabecalho {
  height: 78px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 2;
}

.marca {
  display: flex;
  align-items: center;
  gap: 10px;
}

.marca-sol {
  width: 58px;
  height: 58px;
  flex: 0 0 58px;
  position: relative;
}

.marca-sol::before {
  content: "☀";

  position: absolute;
  inset: 0;

  display: grid;
  place-items: center;

  color: #FFBB17;
  font-size: 62px;
  line-height: 1;

  filter:
    drop-shadow(0 2px 0 rgba(255,255,255,.8))
    drop-shadow(0 3px 2px rgba(102,75,0,.16));
}

.marca-texto h1 {
  margin: 0;

  color: #07579D;

  font-size: clamp(27px, 3.1vw, 45px);
  line-height: .95;
  font-weight: 900;
  letter-spacing: -.8px;

  text-shadow: 0 2px 0 rgba(255,255,255,.88);
}

.marca-texto p {
  margin: 6px 0 0;

  color: #0963A6;

  font-size: clamp(12px, 1.2vw, 18px);
  line-height: 1;
  font-weight: 800;
}

/* ============================================================
   MENU DOS ANOS
   ============================================================ */

.area-menu {
  position: relative;
  z-index: 2;
}

.titulo-menu {
  width: max-content;
  margin: 6px auto 18px;
  padding: 8px 30px 9px;

  border: 2px solid rgba(222,157,39,.47);
  border-radius: 15px;

  background:
    linear-gradient(
      180deg,
      #FFFDEC 0%,
      #FFF0C7 100%
    );

  box-shadow:
    0 3px 8px rgba(111,81,17,.13),
    inset 0 1px 0 rgba(255,255,255,.95);
}

.titulo-menu h2 {
  margin: 0;

  color: #74440C;

  font-size: clamp(17px, 1.7vw, 26px);
  line-height: 1;
  font-weight: 900;
}

/* ============================================================
   CARTÕES DOS ANOS
   ============================================================ */

.anos {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${DADOS.dimensoes.gapAnos}px;
}

.ano {
  min-width: 0;
}

.botao-ano {
  --cor-1: #19B9F0;
  --cor-2: #0878C7;

  width: 100%;
  height: 185px;

  padding: 13px 12px 12px;

  border: 3px solid rgba(255,255,255,.92);
  border-radius: ${DADOS.dimensoes.raioCartaoAno}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  cursor: pointer;

  background:
    linear-gradient(
      150deg,
      var(--cor-1) 0%,
      var(--cor-2) 100%
    );

  box-shadow:
    0 8px 14px var(--sombra),
    inset 0 1px 1px rgba(255,255,255,.72),
    inset 0 -3px 6px rgba(0,0,0,.08);

  position: relative;
  overflow: hidden;

  transition:
    transform .16s ease,
    box-shadow .16s ease;
}

.botao-ano::before {
  content: "";

  position: absolute;
  width: 150%;
  height: 100%;
  left: -70%;
  top: -64%;

  border-radius: 50%;

  background: rgba(255,255,255,.15);
  pointer-events: none;
}

.botao-ano::after {
  content: "";

  position: absolute;
  width: 70px;
  height: 70px;
  top: -34px;
  right: -27px;

  border-radius: 50%;
  background: rgba(255,255,255,.12);
}

.botao-ano:hover {
  transform: translateY(-4px);

  box-shadow:
    0 12px 19px var(--sombra-forte),
    inset 0 1px 1px rgba(255,255,255,.78);
}

.icone-ano {
  width: 104px;
  height: 104px;

  flex: 0 0 104px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 1;
}

.icone-ano img {
  /*
    Caixa igual para todos.
    object-fit contain evita que um PNG grande ocupe mais
    espaço visual do que outro.
  */
  width: 92px;
  height: 92px;

  object-fit: contain;
  display: block;

  filter:
    drop-shadow(0 5px 3px rgba(0,0,0,.15));
}

.texto-ano {
  position: relative;
  z-index: 1;

  width: 100%;

  text-align: center;
}

.nome-ano {
  font-size: clamp(17px, 1.55vw, 24px);
  line-height: 1;
  font-weight: 900;

  text-shadow: 0 2px 1px rgba(0,0,0,.17);
}

.idade-ano {
  margin-top: 6px;

  font-size: clamp(11px, 1.02vw, 15px);
  line-height: 1;
  font-weight: 800;
}

/* ============================================================
   JOGOS EM DESTAQUE
   ============================================================ */

.jogos-destaque {
  margin-top: 25px;
  padding: 28px 28px 24px;

  border-radius: ${DADOS.dimensoes.raioJogos}px;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.98),
      rgba(255,255,255,.94)
    );

  box-shadow:
    0 7px 18px rgba(30,102,148,.12),
    inset 0 0 0 1px rgba(205,229,244,.55);
}

.titulo-seccao {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 30px;

  margin: 0 30px 28px;
}

.titulo-linha {
  height: 3px;
  border-radius: 10px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #A7D6F7 12%,
      #A7D6F7 88%,
      transparent
    );
}

.titulo-seccao h2 {
  margin: 0;

  display: flex;
  align-items: center;
  gap: 11px;

  white-space: nowrap;

  color: #084F92;

  font-size: clamp(20px, 2vw, 28px);
  line-height: 1;
  font-weight: 900;
}

.gamepad {
  font-size: 29px;
  filter: drop-shadow(0 2px 1px rgba(0,0,0,.13));
}

.jogos-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${DADOS.dimensoes.gapJogos}px;
}

.jogo {
  min-width: 0;
}

.botao-jogo {
  width: 100%;

  padding: 0;

  border: 0;
  background: transparent;

  color: #074F94;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform .15s ease;
}

.botao-jogo:hover {
  transform: translateY(-3px);
}

.preview-jogo {
  width: min(100%, 120px);
  aspect-ratio: 1 / .82;

  display: grid;
  place-items: center;

  overflow: hidden;

  border: 1px solid rgba(70,100,125,.35);

  background: #E5EDF3;

  box-shadow:
    0 2px 5px rgba(40,80,110,.11);
}

.preview-jogo img {
  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;
}

.nome-jogo {
  margin-top: 14px;

  font-size: clamp(14px, 1.25vw, 20px);
  line-height: 1;
  font-weight: 900;

  white-space: nowrap;
}

.estrelas-jogo {
  margin-top: 10px;

  color: #FFB400;

  font-family: Arial, sans-serif;
  font-size: clamp(15px, 1.25vw, 20px);
  line-height: 1;
  letter-spacing: 1px;

  white-space: nowrap;
}

/* ============================================================
   RODAPÉ
   ============================================================ */

.rodape {
  margin-top: 17px;
  padding: 8px 16px;

  min-height: 52px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: center;

  border: 2px solid ${DADOS.cores.linha};
  border-radius: 15px;

  background: rgba(255,255,255,.78);

  box-shadow:
    0 4px 10px rgba(16,103,150,.08);

  font-size: 13px;
  font-weight: 800;
}

.rodape-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rodape-info {
  justify-content: flex-end;
  color: #17649D;
}

.estrela {
  color: #FFB817;
  font-size: 26px;
  line-height: 1;
  text-shadow: 0 1px 0 #D98A00;
}

.info {
  width: 25px;
  height: 25px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  color: #fff;
  background: #0879C8;

  font: 900 17px Arial, sans-serif;
}

/* ============================================================
   TABLET HORIZONTAL
   ============================================================ */

@media (max-width: 1100px) and (min-width: 701px) {
  #app {
    padding-left: 12px;
    padding-right: 12px;
  }

  .anos {
    gap: 8px;
  }

  .botao-ano {
    height: 145px;
    padding: 8px 6px;
    border-width: 2px;
  }

  .icone-ano {
    width: 78px;
    height: 78px;
    flex-basis: 78px;
  }

  .icone-ano img {
    width: 70px;
    height: 70px;
  }

  .nome-ano {
    font-size: clamp(12px, 1.7vw, 17px);
  }

  .idade-ano {
    margin-top: 4px;
    font-size: clamp(8px, 1.1vw, 11px);
  }

  .jogos-destaque {
    padding: 21px 17px 18px;
    margin-top: 18px;
  }

  .titulo-seccao {
    margin-bottom: 20px;
    gap: 15px;
  }

  .jogos-grid {
    gap: 9px;
  }

  .preview-jogo {
    max-width: 94px;
  }

  .nome-jogo {
    margin-top: 9px;
    font-size: 12px;
  }

  .estrelas-jogo {
    margin-top: 7px;
    font-size: 13px;
  }
}

/* ============================================================
   TABLET VERTICAL
   ============================================================ */

@media (max-width: 900px) and (min-width: 601px) {
  .anos {
    grid-template-columns: 1fr;
    gap: 9px;
  }

  /*
    Aqui deixa de ser cartão vertical:
    icon à esquerda + texto à direita.
  */
  .botao-ano {
    height: 112px;
    padding: 8px 20px;

    flex-direction: row;
    justify-content: flex-start;
    gap: 18px;
  }

  .icone-ano {
    width: 86px;
    height: 86px;
    flex: 0 0 86px;
  }

  .icone-ano img {
    width: 78px;
    height: 78px;
  }

  .texto-ano {
    text-align: left;
  }

  .nome-ano {
    font-size: 21px;
  }

  .idade-ano {
    font-size: 13px;
    margin-top: 6px;
  }

  .jogos-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 25px;
  }
}

/* ============================================================
   TELEMÓVEL VERTICAL
   ============================================================ */

@media (max-width: 600px) {
  #app {
    padding: 8px 9px 12px;

    background:
      linear-gradient(
        180deg,
        var(--ceu1) 0,
        var(--ceu2) 130px,
        #E9F7FF 290px,
        var(--fundo) 390px
      );
  }

  .cabecalho {
    height: 59px;
  }

  .marca {
    gap: 6px;
  }

  .marca-sol {
    width: 43px;
    height: 43px;
    flex-basis: 43px;
  }

  .marca-sol::before {
    font-size: 46px;
  }

  .marca-texto h1 {
    font-size: 23px;
  }

  .marca-texto p {
    margin-top: 4px;
    font-size: 9px;
  }

  .titulo-menu {
    margin: 4px auto 11px;
    padding: 7px 20px 8px;
    border-radius: 13px;
  }

  .titulo-menu h2 {
    font-size: 16px;
  }

  .anos {
    grid-template-columns: 1fr;
    gap: 7px;
  }

  .botao-ano {
    /*
      Não 16:9.
      Um cartão baixo, largo e confortável para toque.
    */
    height: 88px;

    padding: 7px 15px;

    border-width: 2px;
    border-radius: 14px;

    flex-direction: row;
    justify-content: flex-start;
    gap: 13px;
  }

  .icone-ano {
    width: 70px;
    height: 70px;
    flex: 0 0 70px;
  }

  .icone-ano img {
    width: 63px;
    height: 63px;
  }

  .texto-ano {
    text-align: left;
  }

  .nome-ano {
    font-size: 17px;
  }

  .idade-ano {
    margin-top: 5px;
    font-size: 10px;
  }

  .jogos-destaque {
    margin-top: 14px;
    padding: 17px 10px 16px;
    border-radius: 20px;
  }

  .titulo-seccao {
    grid-template-columns: 1fr;
    gap: 7px;
    margin: 0 5px 18px;
  }

  .titulo-seccao h2 {
    justify-content: center;
    font-size: 19px;
  }

  .titulo-linha {
    height: 2px;
  }

  .jogos-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 23px 11px;
  }

  .preview-jogo {
    width: min(100%, 105px);
  }

  .nome-jogo {
    margin-top: 9px;
    font-size: 14px;
  }

  .estrelas-jogo {
    margin-top: 7px;
    font-size: 14px;
  }

  .rodape {
    grid-template-columns: 1fr;
    gap: 5px;

    margin-top: 12px;
    padding: 7px 9px;

    font-size: 10px;
  }

  .rodape-info {
    justify-content: flex-start;
  }
}

/* ============================================================
   ECRÃ MUITO PEQUENO
   ============================================================ */

@media (max-width: 360px) {
  .marca-texto h1 {
    font-size: 21px;
  }

  .botao-ano {
    height: 82px;
  }

  .icone-ano {
    width: 64px;
    height: 64px;
    flex-basis: 64px;
  }

  .icone-ano img {
    width: 57px;
    height: 57px;
  }

  .nome-ano {
    font-size: 15px;
  }

  .idade-ano {
    font-size: 9px;
  }
}

.botao-ano:focus-visible,
.botao-jogo:focus-visible {
  outline: 4px solid rgba(255,255,255,.95);
  outline-offset: 3px;
}
`;


/* ============================================================
   MOTOR
   ============================================================ */

function inserirCSS() {
  const style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);
}

function preencherTextos() {
  document.querySelector("[data-marca]").textContent =
    DADOS.pagina.titulo;

  document.querySelector("[data-submarca]").textContent =
    DADOS.pagina.subtitulo;

  document.querySelector("[data-titulo-menu]").textContent =
    DADOS.pagina.tituloMenu;

  document.querySelector("[data-titulo-jogos]").textContent =
    DADOS.pagina.tituloJogos;

  document.querySelector("[data-mensagem]").textContent =
    DADOS.pagina.mensagem;

  document.querySelector("[data-informacao]").textContent =
    DADOS.pagina.informacao;
}

function criarCartoesAnos() {
  const zona = document.querySelector("#anos");
  const modelo = document.querySelector("#modelo-ano");

  DADOS.anos.forEach((ano) => {
    const fragmento = modelo.content.cloneNode(true);

    const botao = fragmento.querySelector(".botao-ano");
    const imagemBox = fragmento.querySelector(".icone-ano");

    botao.style.setProperty("--cor-1", ano.cor);
    botao.style.setProperty("--cor-2", ano.cor2);

    botao.setAttribute(
      "aria-label",
      `${ano.nome}, ${ano.idade}`
    );

    const imagem = document.createElement("img");
    imagem.src = DADOS.imagens[ano.icon];
    imagem.alt = "";
    imagem.draggable = false;

    imagemBox.appendChild(imagem);

    fragmento.querySelector(".nome-ano").textContent =
      ano.nome;

    fragmento.querySelector(".idade-ano").textContent =
      ano.idade;

    botao.addEventListener("click", () => {
      window.location.href = ano.pagina;
    });

    zona.appendChild(fragmento);
  });
}

function criarJogos() {
  const zona = document.querySelector("#jogos");
  const modelo = document.querySelector("#modelo-jogo");

  DADOS.jogos.forEach((jogo) => {
    const fragmento = modelo.content.cloneNode(true);

    const botao = fragmento.querySelector(".botao-jogo");
    const preview = fragmento.querySelector(".preview-jogo");

    const imagem = document.createElement("img");
    imagem.src = PREVIEWS[jogo.imagem];
    imagem.alt = "";
    imagem.draggable = false;

    preview.appendChild(imagem);

    fragmento.querySelector(".nome-jogo").textContent =
      jogo.nome;

    botao.addEventListener("click", () => {
      if (jogo.pagina && jogo.pagina !== "#") {
        window.location.href = jogo.pagina;
      }
    });

    zona.appendChild(fragmento);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inserirCSS();
  preencherTextos();
  criarCartoesAnos();
  criarJogos();
});
