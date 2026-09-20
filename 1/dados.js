/* =========================================================
   RECURSOS COVÃO
   Página de seleção de áreas
   Português | Matemática | Estudo do Meio
   ========================================================= */


/* =========================================================
   DADOS PRINCIPAIS
   ========================================================= */

const pagina = {

  titulo: "1.º Ano",

  marca: "Recursos Covão",

  submarca: "Aprender pode ser divertido!",

  tituloMenu: "Escolhe uma área",

  mensagem: "Aprender, descobrir e divertir!",

  informacao: "Recursos digitais educativos"


};


/* =========================================================
   ÍCONES
   ========================================================= */

const icons = {

  areas: {

    portugues: "../icons/pt.png",

    matematica: "../icons/mat.png",

    estudoMeio: "../icons/em.png"

  },


  destaques: {

    rastros: "../icons/rastros.png",

    gatosCaes: "../icons/gatos&caes.png",

    dominio: "../icons/dominorio.png",

    semaforo: "../icons/semaforo.png",

    quelhas: "../icons/quelhas.png",

    avanco: "../icons/avanco.png"

  }

};


/* =========================================================
   ÁREAS
   ========================================================= */

const areas = [

  {

    id: "portugues",

    nome: "Português",

    descricao: "Ler • Escrever • Comunicar",

    icon: "portugues",

    cor: "#20B9EF",

    cor2: "#087AC9",

    pagina: "portugues.html"

  },


  {

    id: "matematica",

    nome: "Matemática",

    descricao: "Pensar • Calcular • Resolver",

    icon: "matematica",

    cor: "#45C83D",

    cor2: "#169A3A",

    pagina: "matematica.html"

  },


  {

    id: "estudoMeio",

    nome: "Estudo do Meio",

    descricao: "Conhecer • Explorar • Descobrir",

    icon: "estudoMeio",

    cor: "#A74BEF",

    cor2: "#7434B8",

    pagina: "estudo-do-meio.html"

  }

];


/* =========================================================
   JOGOS EM DESTAQUE
   ========================================================= */

const destaques = [

  {

    id: "rastros",

    nome: "Rastros",

    icon: "rastros",

    pagina: "jogos/rastros.html"

  },


  {

    id: "gatosCaes",

    nome: "Gatos & Cães",

    icon: "gatosCaes",

    pagina: "jogos/gatos-caes.html"

  },


  {

    id: "dominio",

    nome: "Dominório",

    icon: "dominio",

    pagina: "jogos/dominorio.html"

  },


  {

    id: "semaforo",

    nome: "Semáforo",

    icon: "semaforo",

    pagina: "jogos/semaforo.html"

  },


  {

    id: "quelhas",

    nome: "Quelhas",

    icon: "quelhas",

    pagina: "jogos/quelhas.html"

  },


  {

    id: "avanco",

    nome: "Avanço",

    icon: "avanco",

    pagina: "jogos/avanco.html"

  }

];


/* =========================================================
   CRIAR NUVENS
   ========================================================= */

function criarNuvens() {

  const camada = document.querySelector(".camada-nuvens");

  if (!camada) return;


  const quantidade = 7;


  for (let i = 0; i < quantidade; i++) {

    const nuvem = document.createElement("img");

    nuvem.src = "../icons/nuvem.png";

    nuvem.alt = "";

    nuvem.className = "nuvem";

    nuvem.setAttribute("aria-hidden", "true");


    nuvem.style.left = `${Math.random() * 100}%`;

    nuvem.style.top = `${5 + Math.random() * 35}%`;

    nuvem.style.width = `${70 + Math.random() * 100}px`;

    nuvem.style.animationDelay = `${Math.random() * 8}s`;

    nuvem.style.animationDuration = `${18 + Math.random() * 15}s`;


    camada.appendChild(nuvem);

  }

}


/* =========================================================
   INSERIR CSS
   ========================================================= */

function inserirCSS() {

  const style = document.createElement("style");


  style.textContent = `

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }


    html,
    body {
      min-height: 100%;
    }


    body {

      font-family: "Nunito", "Arial Rounded MT Bold", Arial, sans-serif;

      background:
        linear-gradient(
          180deg,
          #75D9FF 0%,
          #BCEEFF 45%,
          #EAF9FF 100%
        );

      color: #17466B;

      overflow-x: hidden;

    }


    body::before {

      content: "";

      position: fixed;

      inset: 0;

      pointer-events: none;

      background:
        radial-gradient(
          circle at 20% 15%,
          rgba(255,255,255,.45),
          transparent 25%
        );

      z-index: -1;

    }


    /* =====================================================
       APP
       ===================================================== */

    #app {

      min-height: 100vh;

      position: relative;

      overflow: hidden;

    }


    /* =====================================================
       NUVENS
       ===================================================== */

    .camada-nuvens {

      position: absolute;

      inset: 0;

      overflow: hidden;

      pointer-events: none;

      z-index: 0;

    }


    .nuvem {

      position: absolute;

      opacity: .75;

      user-select: none;

      animation:
        moverNuvem linear infinite;

    }


    @keyframes moverNuvem {

      from {
        transform: translateX(-30px);
      }

      to {
        transform: translateX(100px);
      }

    }


    /* =====================================================
       CABEÇALHO
       ===================================================== */

    .cabecalho {

      position: relative;

      z-index: 2;

      padding: 25px 25px 10px;

    }


    .marca {

      display: flex;

      align-items: center;

      justify-content: center;

      gap: 18px;

    }


    .marca-sol {

      width: 72px;

      height: 72px;

      border-radius: 50%;

      background:
        radial-gradient(
          circle,
          #FFF76A 0%,
          #FFD83D 65%,
          #FFB52B 100%
        );

      box-shadow:
        0 5px 0 rgba(224,155,0,.25),
        0 0 25px rgba(255,230,60,.45);

      position: relative;

      flex-shrink: 0;

    }


    .marca-sol::before {

      content: "☀";

      position: absolute;

      inset: 0;

      display: flex;

      align-items: center;

      justify-content: center;

      font-size: 42px;

      color: #FFF;

    }


    .marca-texto {

      text-align: left;

    }


    .marca-texto h1 {

      font-size: clamp(28px, 5vw, 46px);

      font-weight: 900;

      color: #0358A9;

      line-height: 1;

      text-shadow:
        2px 3px 0 rgba(255,255,255,.8);

    }


    .marca-texto p {

      margin-top: 6px;

      font-size: clamp(14px, 2.5vw, 20px);

      font-weight: 700;

      color: #28749D;

    }


    /* =====================================================
       ÁREA DO MENU
       ===================================================== */

    .area-menu {

      position: relative;

      z-index: 2;

      width: min(1180px, 94%);

      margin: 15px auto 0;

    }


    .titulo-menu {

      display: flex;

      justify-content: center;

      margin-bottom: 25px;

    }


    .titulo-menu h2 {

      background: #0358A9;

      color: white;

      padding: 12px 35px;

      border-radius: 40px;

      font-size: clamp(20px, 3vw, 30px);

      font-weight: 900;

      box-shadow:
        0 6px 0 rgba(3,88,169,.25);

      text-align: center;

    }


    /* =====================================================
       DECORAÇÕES
       ===================================================== */

    .decoracao {

      position: absolute;

      width: 100px;

      height: 100px;

      border-radius: 50%;

      opacity: .18;

      pointer-events: none;

    }


    .decoracao-esquerda {

      left: -60px;

      top: 60px;

      background: #20B9EF;

    }


    .decoracao-direita {

      right: -60px;

      bottom: 20px;

      background: #A74BEF;

    }


    /* =====================================================
       CARTÕES DAS ÁREAS
       ===================================================== */

    .areas {

      display: grid;

      grid-template-columns:
        repeat(3, minmax(0, 1fr));

      gap: 25px;

    }


    .area {

      min-width: 0;

    }


    .botao-area {

      width: 100%;

      min-height: 220px;

      border: 0;

      border-radius: 28px;

      padding: 25px 20px;

      cursor: pointer;

      background: white;

      box-shadow:
        0 8px 0 rgba(0,80,140,.15),
        0 12px 25px rgba(0,90,140,.15);

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 15px;

      transition:
        transform .2s ease,
        box-shadow .2s ease;

      font-family: inherit;

    }


    .botao-area:hover {

      transform: translateY(-7px);

      box-shadow:
        0 13px 0 rgba(0,80,140,.15),
        0 18px 30px rgba(0,90,140,.2);

    }


    .botao-area:active {

      transform: translateY(2px);

      box-shadow:
        0 5px 0 rgba(0,80,140,.15),
        0 8px 15px rgba(0,90,140,.15);

    }


    .botao-area:focus-visible {

      outline: 4px solid #FFD83D;

      outline-offset: 4px;

    }


    .icone-area {

      width: 125px;

      height: 125px;

      display: flex;

      align-items: center;

      justify-content: center;

    }


    .icone-area img {

      width: 100%;

      height: 100%;

      object-fit: contain;

      user-select: none;

      pointer-events: none;

    }


    .texto-area {

      text-align: center;

    }


    .nome-area {

      font-size: clamp(23px, 3vw, 31px);

      font-weight: 900;

      color: #0358A9;

    }


    .descricao-area {

      margin-top: 5px;

      font-size: 15px;

      font-weight: 700;

      color: #6A8BA0;

    }


    /* =====================================================
       JOGOS EM DESTAQUE
       ===================================================== */

    .destaques {

      position: relative;

      z-index: 2;

      width: min(1180px, 94%);

      margin: 45px auto 0;

    }


    .titulo-destaques {

      display: flex;

      align-items: center;

      gap: 15px;

      margin-bottom: 25px;

    }


    .titulo-destaques h2 {

      color: #0358A9;

      font-size: clamp(19px, 3vw, 27px);

      font-weight: 900;

      white-space: nowrap;

    }


    .linha {

      flex: 1;

      height: 4px;

      background: rgba(3,88,169,.25);

      border-radius: 5px;

    }


    .jogos {

      display: grid;

      grid-template-columns:
        repeat(6, minmax(0, 1fr));

      gap: 15px;

    }


    .jogo {

      background: white;

      border-radius: 20px;

      padding: 15px 10px;

      text-align: center;

      cursor: pointer;

      box-shadow:
        0 5px 0 rgba(0,80,140,.12),
        0 8px 15px rgba(0,90,140,.10);

      transition:
        transform .2s ease,
        box-shadow .2s ease;

      outline: none;

    }


    .jogo:hover {

      transform: translateY(-5px);

      box-shadow:
        0 9px 0 rgba(0,80,140,.12),
        0 14px 20px rgba(0,90,140,.15);

    }


    .jogo:focus-visible {

      outline: 4px solid #FFD83D;

      outline-offset: 3px;

    }


    .icone-jogo {

      width: 90px;

      height: 90px;

      margin: auto;

      display: flex;

      align-items: center;

      justify-content: center;

    }


    .icone-jogo img {

      width: 100%;

      height: 100%;

      object-fit: contain;

      user-select: none;

      pointer-events: none;

    }


    .nome-jogo {

      margin-top: 8px;

      font-size: 16px;

      font-weight: 900;

      color: #0358A9;

      min-height: 20px;

    }


    .estrelas {

      margin-top: 4px;

      font-size: 14px;

      letter-spacing: 1px;

      color: #FFD23F;

    }


    /* =====================================================
       RODAPÉ
       ===================================================== */

    .rodape {

      position: relative;

      z-index: 2;

      width: min(1180px, 94%);

      margin: 40px auto 0;

      padding: 20px 10px 30px;

      display: flex;

      justify-content: space-between;

      align-items: center;

      gap: 20px;

      color: #39728F;

      font-size: 14px;

      font-weight: 700;

    }


    .rodape-item {

      display: flex;

      align-items: center;

      gap: 8px;

    }


    .estrela {

      color: #FFC928;

      font-size: 20px;

    }


    .info {

      width: 22px;

      height: 22px;

      border-radius: 50%;

      background: #0358A9;

      color: white;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      font-weight: 900;

      font-size: 14px;

    }


    /* =====================================================
       TABLET
       ===================================================== */

    @media (max-width: 900px) {

      .areas {

        gap: 18px;

      }


      .botao-area {

        min-height: 200px;

        padding: 20px 15px;

      }


      .icone-area {

        width: 105px;

        height: 105px;

      }


      .jogos {

        grid-template-columns:
          repeat(3, minmax(0, 1fr));

      }

    }


    /* =====================================================
       TELEMÓVEL
       ===================================================== */

    @media (max-width: 650px) {

      .cabecalho {

        padding-top: 18px;

      }


      .marca {

        gap: 10px;

      }


      .marca-sol {

        width: 55px;

        height: 55px;

      }


      .marca-sol::before {

        font-size: 32px;

      }


      .areas {

        grid-template-columns: 1fr;

        gap: 15px;

      }


      .botao-area {

        min-height: 145px;

        flex-direction: row;

        justify-content: flex-start;

        padding: 15px 25px;

        text-align: left;

      }


      .icone-area {

        width: 90px;

        height: 90px;

        flex-shrink: 0;

      }


      .texto-area {

        text-align: left;

      }


      .nome-area {

        font-size: 24px;

      }


      .descricao-area {

        font-size: 14px;

      }


      .titulo-destaques {

        gap: 8px;

      }


      .titulo-destaques h2 {

        font-size: 19px;

      }


      .jogos {

        grid-template-columns:
          repeat(2, minmax(0, 1fr));

        gap: 12px;

      }


      .icone-jogo {

        width: 75px;

        height: 75px;

      }


      .nome-jogo {

        font-size: 15px;

      }


      .rodape {

        flex-direction: column;

        justify-content: center;

        text-align: center;

        margin-top: 25px;

      }

    }


    /* =====================================================
       TELEMÓVEL PEQUENO
       ===================================================== */

    @media (max-width: 380px) {

      .botao-area {

        padding: 12px 15px;

      }


      .icone-area {

        width: 75px;

        height: 75px;

      }


      .nome-area {

        font-size: 21px;

      }


      .descricao-area {

        font-size: 12px;

      }


      .jogos {

        gap: 9px;

      }

    }

  `;


  document.head.appendChild(style);

}


/* =========================================================
   PREENCHER TEXTOS
   ========================================================= */

function preencherTextos() {

  const marca = document.querySelector("[data-marca]");

  const submarca = document.querySelector("[data-submarca]");

  const tituloMenu = document.querySelector("[data-titulo-menu]");

  const mensagem = document.querySelector("[data-mensagem]");

  const informacao = document.querySelector("[data-informacao]");


  if (marca) {

    marca.textContent = pagina.marca;

  }


  if (submarca) {

    submarca.textContent = pagina.submarca;

  }


  if (tituloMenu) {

    tituloMenu.textContent = pagina.tituloMenu;

  }


  if (mensagem) {

    mensagem.textContent = pagina.mensagem;

  }


  if (informacao) {

    informacao.textContent = pagina.informacao;

  }

}


/* =========================================================
   CRIAR CARTÕES DAS ÁREAS
   ========================================================= */

function criarCartoesAreas() {

  const container = document.getElementById("areas");

  const template = document.getElementById("modelo-area");


  if (!container || !template) return;


  areas.forEach((area) => {

    const clone =
      template.content.cloneNode(true);


    const artigo =
      clone.querySelector(".area");

    const botao =
      clone.querySelector(".botao-area");

    const imagem =
      clone.querySelector(".icone-area img");

    const nome =
      clone.querySelector(".nome-area");

    const descricao =
      clone.querySelector(".descricao-area");


    /* ÍCONE */

    imagem.src = icons.areas[area.icon];

    imagem.alt = area.nome;


    /* TEXTO */

    nome.textContent = area.nome;

    descricao.textContent = area.descricao;


    /* COR DO CARTÃO */

    botao.style.setProperty(
      "--cor-area",
      area.cor
    );

    botao.style.setProperty(
      "--cor-area2",
      area.cor2
    );


    /* ACESSIBILIDADE */

    botao.setAttribute(
      "aria-label",
      `Abrir ${area.nome}`
    );


    /* NAVEGAÇÃO */

    botao.addEventListener("click", () => {

      if (area.pagina) {

        window.location.href = area.pagina;

      }

    });


    artigo.dataset.area = area.id;


    container.appendChild(clone);

  });

}


/* =========================================================
   CRIAR JOGOS EM DESTAQUE
   ========================================================= */

function criarDestaques() {

  const container =
    document.getElementById("jogos");

  const template =
    document.getElementById("modelo-jogo");


  if (!container || !template) return;


  destaques.forEach((jogo) => {

    const clone =
      template.content.cloneNode(true);


    const artigo =
      clone.querySelector(".jogo");

    const imagem =
      clone.querySelector(".icone-jogo img");

    const nome =
      clone.querySelector(".nome-jogo");


    /* ÍCONE */

    imagem.src =
      icons.destaques[jogo.icon];

    imagem.alt =
      jogo.nome;


    /* NOME */

    nome.textContent =
      jogo.nome;


    /* ACESSIBILIDADE */

    artigo.setAttribute(
      "role",
      "link"
    );

    artigo.setAttribute(
      "tabindex",
      "0"
    );

    artigo.setAttribute(
      "aria-label",
      `Abrir jogo ${jogo.nome}`
    );


    /* CLIQUE */

    artigo.addEventListener(
      "click",
      () => {

        if (jogo.pagina) {

          window.location.href =
            jogo.pagina;

        }

      }
    );


    /* TECLADO */

    artigo.addEventListener(
      "keydown",
      (evento) => {

        if (
          evento.key === "Enter" ||
          evento.key === " "
        ) {

          evento.preventDefault();

          if (jogo.pagina) {

            window.location.href =
              jogo.pagina;

          }

        }

      }
    );


    container.appendChild(clone);

  });

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    inserirCSS();

    preencherTextos();

    criarNuvens();

    criarCartoesAreas();

    criarDestaques();

  }
);
