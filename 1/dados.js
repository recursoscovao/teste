/* ============================================================
   RECURSOS DO COVÃO — Página 1.º Ano
   Todos os textos, cores, imagens, dimensões e estilos desta
   página estão centralizados neste ficheiro.
   ============================================================ */

const DADOS = {
  navegacao: {
    inicio: "icons/inicio.png",
    pre: "icons/iconpre.png",
    ano1: "icons/icon1.png",
    ano2: "icons/icon2.png",
    ano3: "icons/icon3.png",
    ano4: "icons/icon4.png"
  },

  pagina: {
    titulo: "1.º Ano",
    faixaEtaria: "6 - 7 anos",
    tituloEscolha: "Escolhe a disciplina",
    rodapeEsquerda: "Volta ao menu principal!",
    rodapeDireita: "Aprender é crescer!"
  },

  imagens: {
    portugues: "icons/pt.png",
    matematica: "icons/mat.png",
    estudoMeio: "icons/em.png"
  },

  disciplinas: [
    {
      id: "portugues",
      nome: "Português",
      imagem: "icons/pt.png",
      classe: "rosa"
    },
    {
      id: "matematica",
      nome: "Matemática",
      imagem: "icons/mat.png",
      classe: "azul"
    },
    {
      id: "estudo-meio",
      nome: "Estudo do Meio",
      imagem: "icons/em.png",
      classe: "verde"
    }
  ],

  cores: {
    fundoTopo: "#0b83c8",
    fundoBase: "#e9f9ff",
    azulEscuro: "#075aa5",
    azul: "#079de2",
    azulClaro: "#55cdf1",
    branco: "#ffffff",
    creme: "#fff2c9",
    cremeBorda: "#f4b948",

    portugues: {
      principal: "#ec1687",
      claro: "#ff4aa9",
      escuro: "#c90069"
    },

    matematica: {
      principal: "#08aeea",
      claro: "#28c9f2",
      escuro: "#0088d0"
    },

    estudoMeio: {
      principal: "#55cf24",
      claro: "#8be84d",
      escuro: "#22a82e"
    }
  },

  tamanhos: {
    maxLargura: 1500,
    alturaCabecalho: 112,
    alturaCartoesDesktop: 430,
    alturaCartoesTablet: 350,
    alturaCartoesVertical: 112
  }
};


/* ============================================================
   ESTILOS
   ============================================================ */

const CSS = `
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
}

body {
  min-height: 100vh;
  font-family: "Trebuchet MS", "Arial Rounded MT Bold", Arial, sans-serif;
  color: #075aa5;
  background:
    radial-gradient(circle at 50% 7%, rgba(255,255,255,.55), transparent 26%),
    linear-gradient(180deg, #a8ecfa 0%, #dff8ff 46%, #edfaff 100%);
  overflow-x: hidden;
}

body::before,
body::after {
  content: "";
  position: fixed;
  pointer-events: none;
  z-index: 0;
  opacity: .58;
}

body::before {
  width: 180px;
  height: 75px;
  left: -28px;
  top: 40px;
  border-radius: 60% 55% 45% 45%;
  background: rgba(255,255,255,.88);
  box-shadow:
    45px 8px 0 -4px rgba(255,255,255,.88),
    88px -5px 0 -10px rgba(255,255,255,.88);
}

body::after {
  width: 155px;
  height: 64px;
  right: -35px;
  top: 82px;
  border-radius: 55%;
  background: rgba(255,255,255,.78);
  box-shadow:
    -46px 6px 0 -7px rgba(255,255,255,.78),
    -88px -6px 0 -14px rgba(255,255,255,.78);
}

#app {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  width: min(100%, ${DADOS.tamanhos.maxLargura}px);
  margin: 0 auto;
  padding: 0 18px 24px;
}

#topo {
  height: ${DADOS.tamanhos.alturaCabecalho}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cabecalho {
  width: min(92%, 850px);
  height: 78px;
  border-radius: 44px;
  background: linear-gradient(180deg, #1599df 0%, #057bc4 100%);
  border: 4px solid rgba(255,255,255,.82);
  box-shadow: 0 5px 0 rgba(0,91,150,.18), 0 9px 20px rgba(0,88,145,.16);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #fff;
}

.cabecalho .livro {
  width: 64px;
  height: 58px;
  border-radius: 15px;
  background: linear-gradient(145deg, #fff, #d9f4ff);
  border: 3px solid #0a6db0;
  position: relative;
  box-shadow: inset 0 0 0 3px rgba(255,255,255,.8);
}

.cabecalho .livro::before,
.cabecalho .livro::after {
  content: "";
  position: absolute;
  top: 7px;
  bottom: 7px;
  width: 22px;
  background: #f7fdff;
  border: 2px solid #7fc7e9;
}

.cabecalho .livro::before {
  left: 7px;
  border-radius: 7px 2px 2px 7px;
}

.cabecalho .livro::after {
  right: 7px;
  border-radius: 2px 7px 7px 2px;
}

.titulo {
  text-align: left;
  line-height: 1;
}

.titulo .ano {
  font-size: clamp(27px, 3vw, 39px);
  font-weight: 900;
  letter-spacing: .2px;
}

.titulo .idade {
  display: block;
  margin-top: 7px;
  font-size: clamp(17px, 1.6vw, 22px);
  font-weight: 800;
}

.circulo {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(0,71,132,.75);
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  border: 3px solid rgba(255,255,255,.8);
}

.home {
  position: absolute;
  left: 2px;
  top: 25px;
}

.engrenagem {
  position: absolute;
  right: 2px;
  top: 25px;
  font-size: 27px;
}

.titulo-escolha {
  width: fit-content;
  margin: 6px auto 22px;
  padding: 9px 48px 10px;
  border-radius: 24px;
  background: linear-gradient(#fff9df, #ffe8a9);
  border: 3px solid #f4c65b;
  box-shadow: 0 4px 8px rgba(130,89,0,.14);
  color: #754313;
  font-size: clamp(21px, 2vw, 28px);
  font-weight: 900;
  text-align: center;
}

.disciplinas {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;
}

.disciplina {
  position: relative;
  min-width: 0;
  height: ${DADOS.tamanhos.alturaCartoesDesktop}px;
  border-radius: 27px;
  border: 4px solid rgba(255,255,255,.9);
  box-shadow:
    0 5px 0 rgba(0,0,0,.08),
    0 11px 18px rgba(0,80,130,.16),
    inset 0 0 0 2px rgba(255,255,255,.18);
  overflow: hidden;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 42px 16px 27px;
  cursor: pointer;
  user-select: none;
  transition: transform .16s ease, filter .16s ease;
}

.disciplina:hover {
  transform: translateY(-3px);
  filter: brightness(1.03);
}

.disciplina:active {
  transform: translateY(1px);
}

.disciplina::before {
  content: "";
  position: absolute;
  width: 155%;
  height: 62%;
  left: -28%;
  top: -26%;
  border-radius: 50%;
  background: rgba(255,255,255,.13);
  pointer-events: none;
}

.disciplina::after {
  content: "";
  position: absolute;
  width: 95px;
  height: 95px;
  right: -28px;
  top: -26px;
  border-radius: 50%;
  background: rgba(255,255,255,.10);
  pointer-events: none;
}

.disciplina.rosa {
  background: linear-gradient(180deg, #ff3b9e 0%, #d50b74 100%);
}

.disciplina.azul {
  background: linear-gradient(180deg, #25c3f0 0%, #0798df 100%);
}

.disciplina.verde {
  background: linear-gradient(180deg, #77dc3d 0%, #18a72d 100%);
}

.icone-wrap {
  position: relative;
  z-index: 2;
  height: 210px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.icone-wrap img {
  display: block;
  width: 185px;
  height: 185px;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 5px 2px rgba(0,0,0,.16));
}

.disciplina .nome {
  position: relative;
  z-index: 2;
  font-size: clamp(25px, 2.3vw, 35px);
  line-height: 1.04;
  font-weight: 900;
  text-shadow: 0 3px 1px rgba(0,0,0,.18);
}

.disciplina .descricao {
  position: relative;
  z-index: 2;
  margin-top: 8px;
  font-size: clamp(18px, 1.55vw, 23px);
  line-height: 1;
  font-weight: 800;
}

.rodape {
  margin-top: 25px;
  min-height: 62px;
  border-radius: 18px;
  border: 2px solid rgba(255,255,255,.9);
  background: rgba(255,255,255,.72);
  box-shadow: 0 3px 10px rgba(0,88,145,.09);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 20px;
  color: #0767ae;
  font-weight: 800;
  font-size: clamp(14px, 1.2vw, 18px);
}

.rodape div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rodape div:last-child {
  justify-content: flex-end;
}

.estrela {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  color: #ffad00;
  font-size: 27px;
}

.info {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #087fc9;
  color: white;
  font-weight: 900;
}


/* Tablet horizontal */
@media (min-width: 700px) and (max-width: 1100px) and (orientation: landscape) {
  #app { padding: 0 12px 18px; }
  #topo { height: 92px; }
  .cabecalho { height: 66px; }
  .circulo { width: 46px; height: 46px; }
  .home, .engrenagem { top: 22px; }

  .titulo-escolha {
    margin-bottom: 16px;
    padding: 7px 34px 8px;
  }

  .disciplinas { gap: 12px; }

  .disciplina {
    height: ${DADOS.tamanhos.alturaCartoesTablet}px;
    border-radius: 23px;
    padding: 24px 10px 18px;
  }

  .icone-wrap {
    height: 155px;
  }

  .icone-wrap img {
    width: 130px;
    height: 130px;
  }

  .disciplina .nome { font-size: clamp(19px, 2.5vw, 27px); }
  .disciplina .descricao { font-size: clamp(15px, 1.8vw, 19px); }

  .rodape { min-height: 54px; }
}


/* Vertical — cartão horizontal: icon à esquerda, texto à direita */
@media (max-width: 699px), (orientation: portrait) and (max-width: 1000px) {
  #app { padding: 0 10px 16px; }
  #topo {
    height: 86px;
  }

  .cabecalho {
    width: calc(100% - 86px);
    height: 62px;
    gap: 10px;
    border-radius: 34px;
  }

  .cabecalho .livro {
    width: 48px;
    height: 44px;
  }

  .circulo {
    width: 42px;
    height: 42px;
    font-size: 23px;
  }

  .home, .engrenagem {
    top: 22px;
  }

  .titulo .ano { font-size: 24px; }
  .titulo .idade { font-size: 15px; }

  .titulo-escolha {
    margin: 5px auto 13px;
    padding: 7px 27px;
    font-size: 21px;
  }

  .disciplinas {
    grid-template-columns: 1fr;
    gap: 11px;
  }

  .disciplina {
    height: ${DADOS.tamanhos.alturaCartoesVertical}px;
    min-height: ${DADOS.tamanhos.alturaCartoesVertical}px;
    border-radius: 20px;
    padding: 9px 16px 9px 11px;
    display: grid;
    grid-template-columns: 105px 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    text-align: left;
  }

  .icone-wrap {
    height: 90px;
    align-items: center;
  }

  .icone-wrap img {
    width: 82px;
    height: 82px;
  }

  .disciplina .nome {
    font-size: 23px;
    text-shadow: 0 2px 1px rgba(0,0,0,.16);
  }

  .disciplina .descricao {
    font-size: 16px;
    margin-top: 4px;
  }

  .rodape {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 9px 13px;
  }

  .rodape div:last-child {
    justify-content: flex-start;
  }
}


/* Telemóvel muito pequeno */
@media (max-width: 430px) {
  .disciplina {
    grid-template-columns: 86px 1fr;
    height: 100px;
    min-height: 100px;
  }

  .icone-wrap {
    height: 76px;
  }

  .icone-wrap img {
    width: 68px;
    height: 68px;
  }

  .disciplina .nome { font-size: 20px; }
  .disciplina .descricao { font-size: 14px; }
}

/* ============================================================
   NAVEGAÇÃO E AJUSTES — versão corrigida
   ============================================================ */

.menu-hamburger {
  position: absolute;
  left: 18px;
  top: 14px;
  z-index: 20;
}

.hamburger-botao {
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 50%;
  background: #0d5aa7;
  box-shadow: 0 3px 8px rgba(0,0,0,.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
}

.hamburger-botao span {
  display: block;
  width: 24px;
  height: 3px;
  border-radius: 3px;
  background: #fff;
}

.menu-dropdown {
  position: absolute;
  top: 60px;
  left: 0;
  width: 225px;
  padding: 8px;
  border-radius: 16px;
  background: rgba(255,255,255,.98);
  border: 2px solid #d7ecfa;
  box-shadow: 0 8px 24px rgba(0,0,0,.18);
}

.menu-dropdown[hidden] {
  display: none;
}

.menu-dropdown a {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 43px;
  padding: 5px 8px;
  border-radius: 10px;
  color: #075aa5;
  text-decoration: none;
  font-weight: 800;
}

.menu-dropdown a:hover {
  background: #eef8ff;
}

.menu-dropdown img {
  width: 34px;
  height: 34px;
  object-fit: contain;
  flex: 0 0 34px;
}

.botao-voltar {
  position: absolute;
  right: 18px;
  top: 14px;
  z-index: 20;
  width: 52px;
  height: 52px;
  border: 0;
  border-radius: 50%;
  background: #0d5aa7;
  color: #fff;
  font-size: 31px;
  font-weight: 800;
  line-height: 1;
  box-shadow: 0 3px 8px rgba(0,0,0,.18);
  cursor: pointer;
}

.cabecalho .titulo {
  text-align: center;
}

.cabecalho .ano,
.cabecalho .idade {
  text-align: center;
}

.cabecalho .titulo-icone {
  width: 54px;
  height: 54px;
  object-fit: contain;
  display: block;
  margin: 0 auto 3px;
}

@media (max-width: 700px) {
  .menu-hamburger { left: 9px; top: 9px; }
  .botao-voltar { right: 9px; top: 9px; }
  .hamburger-botao,
  .botao-voltar {
    width: 44px;
    height: 44px;
  }
  .hamburger-botao span { width: 21px; }
  .cabecalho .titulo-icone {
    width: 46px;
    height: 46px;
  }
}


/* Ajustes finais solicitados — não alteram os cartões */
.titulo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.titulo-linha {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: max-content;
  margin: 0 auto;
}
.titulo-linha .titulo-icone {
  width: 52px;
  height: 52px;
  margin: 0;
  object-fit: contain;
  flex: 0 0 52px;
}
.titulo-linha .ano {
  text-align: left;
  white-space: nowrap;
}
.titulo .idade {
  display: block;
  width: 100%;
  text-align: center;
}

.botao-voltar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.botao-voltar img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  display: block;
}

.rodape {
  display: grid !important;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
  align-items: center !important;
  width: 100%;
  box-sizing: border-box;
}
.rodape-esquerda,
.rodape-direita {
  display: flex !important;
  align-items: center;
  gap: 9px;
  min-width: 0;
}
.rodape-esquerda {
  justify-content: flex-start !important;
  text-align: left;
}
.rodape-direita {
  justify-content: flex-end !important;
  text-align: right;
}
.rodape-esquerda > span:last-child,
.rodape-direita > span:last-child {
  white-space: nowrap;
}

@media (max-width: 700px) {
  .titulo-linha {
    gap: 6px;
  }
  .titulo-linha .titulo-icone {
    width: 44px;
    height: 44px;
    flex-basis: 44px;
  }
  .botao-voltar img {
    width: 25px;
    height: 25px;
  }
  .rodape {
    grid-template-columns: 1fr 1fr !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    font-size: clamp(11px, 3vw, 15px) !important;
  }
  .rodape-esquerda,
  .rodape-direita {
    gap: 5px;
  }
  .estrela {
    width: 22px;
    height: 22px;
    font-size: 21px;
    flex: 0 0 22px;
  }
  .info {
    width: 22px;
    height: 22px;
    flex: 0 0 22px;
  }
}

`;

const style = document.createElement("style");
style.textContent = CSS;
document.head.appendChild(style);


/* ============================================================
   RENDERIZAÇÃO
   ============================================================ */

function criarTopo() {
  document.getElementById("topo").innerHTML = `
    <nav class="menu-hamburger" aria-label="Navegação principal">
      <button class="hamburger-botao" type="button" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
      <div class="menu-dropdown" hidden>
        <a href="../index.html"><img src="${DADOS.navegacao.inicio}" alt="">Início</a>
        <a href="#"><img src="${DADOS.navegacao.pre}" alt="">Pré-Escolar</a>
        <a href="#"><img src="${DADOS.navegacao.ano1}" alt="">1.º Ano</a>
        <a href="#"><img src="${DADOS.navegacao.ano2}" alt="">2.º Ano</a>
        <a href="#"><img src="${DADOS.navegacao.ano3}" alt="">3.º Ano</a>
        <a href="#"><img src="${DADOS.navegacao.ano4}" alt="">4.º Ano</a>
      </div>
    </nav>

    <div class="cabecalho">
      <div class="titulo">
        <div class="titulo-linha">
          <img class="titulo-icone" src="${DADOS.navegacao.ano1}" alt="">
          <div class="ano">${DADOS.pagina.titulo}</div>
        </div>
        <span class="idade">${DADOS.pagina.faixaEtaria}</span>
      </div>
    </div>

    <button class="botao-voltar" type="button" aria-label="Voltar ao menu principal">
      <img src="icons/seta.png" alt="">
    </button>
  `;
}

function criarConteudo() {
  const cards = DADOS.disciplinas.map(d => `
    <article class="disciplina ${d.classe}" data-disciplina="${d.id}" tabindex="0">
      <div class="icone-wrap">
        <img src="${d.imagem}" alt="${d.nome}">
      </div>
      <div>
        <div class="nome">${d.nome}</div>
      </div>
    </article>
  `).join("");

  document.getElementById("conteudo").innerHTML = `
    <div class="titulo-escolha">${DADOS.pagina.tituloEscolha}</div>
    <section class="disciplinas" aria-label="Disciplinas">
      ${cards}
    </section>
  `;
}

function criarRodape() {
  document.getElementById("rodape").innerHTML = `
    <div class="rodape-esquerda">
      <span class="estrela">★</span><span>${DADOS.pagina.rodapeEsquerda}</span>
    </div>
    <div class="rodape-direita">
      <span class="info">i</span><span>${DADOS.pagina.rodapeDireita}</span>
    </div>
  `;
}

function configurarNavegacao() {
  const botaoMenu = document.querySelector(".hamburger-botao");
  const menu = document.querySelector(".menu-dropdown");
  const botaoVoltar = document.querySelector(".botao-voltar");

  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", (evento) => {
      evento.stopPropagation();
      menu.hidden = !menu.hidden;
    });

    document.addEventListener("click", (evento) => {
      if (!evento.target.closest(".menu-hamburger")) {
        menu.hidden = true;
      }
    });
  }

  if (botaoVoltar) {
    botaoVoltar.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  }
}

function iniciar() {
  criarTopo();
  criarConteudo();
  criarRodape();
  configurarNavegacao();
}

document.addEventListener("DOMContentLoaded", iniciar);
