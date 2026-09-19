/* ============================================================
   RECURSOS DO COVÃO — Página 1.º Ano
   Todos os textos, cores, imagens, dimensões e estilos desta
   página estão centralizados neste ficheiro.
   ============================================================ */

const DADOS = {
  navegacao: {
    inicio: ".../icons/inicio.png",
    pre: ".../icons/iconpre.png",
    ano1: ".../icons/icon1.png",
    ano2: ".../icons/icon2.png",
    ano3: ".../icons/icon3.png",
    ano4: ".../icons/icon4.png"
  },

  pagina: {
    titulo: "1.º Ano",
    faixaEtaria: "6 - 7 anos",
    tituloEscolha: "Escolhe a disciplina",
    rodapeEsquerda: "Volta ao menu principal!",
    rodapeDireita: "Aprender é crescer!"
  },

  imagens: {
    portugues: ".../icons/pt.png",
    matematica: ".../icons/mat.png",
    estudoMeio: ".../icons/em.png"
  },

  disciplinas: [
    {
      id: "portugues",
      nome: "Português",
      imagem: ".../icons/pt.png",
      classe: "rosa"
    },
    {
      id: "matematica",
      nome: "Matemática",
      imagem: ".../icons/mat.png",
      classe: "azul"
    },
    {
      id: "estudo-meio",
      nome: "Estudo do Meio",
      imagem: ".../icons/em.png",
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
    alturaCartoesDesktop: 330,
    alturaCartoesTablet: 270,
    alturaCartoesVertical: 92
  }
};



/* Caminhos dos icons: index.html e a pasta icons estão no mesmo nível. */
function caminhoIcone(nome) {
  return `.../icons/${nome}`;
}


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


/* Refinacao visual baseada diretamente na referencia da pagina por ano */
.cabecalho{
  position:relative; min-height:92px; padding:8px 90px;
  display:flex; align-items:center; justify-content:center;
  box-sizing:border-box; overflow:hidden;
  background:linear-gradient(180deg,#11a0e2 0%,#0878c9 100%);
  border-radius:26px 26px 18px 18px;
}
.cabecalho:after{
  content:""; position:absolute; left:0; right:0; bottom:0; height:24px;
  background:rgba(0,91,174,.18); pointer-events:none;
}
.titulo{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff}
.titulo-linha{display:flex;align-items:center;justify-content:center;gap:9px;width:max-content;margin:0 auto}
.titulo-linha .titulo-icone{width:56px;height:56px;margin:0;object-fit:contain;flex:0 0 56px}
.titulo-linha .ano{color:#fff;font-size:clamp(22px,2.5vw,34px);font-weight:900;line-height:1.05;white-space:nowrap;text-align:left}
.titulo .idade{display:block;width:100%;margin-top:3px;color:#fff;font-size:clamp(14px,1.45vw,20px);font-weight:800;line-height:1.05;text-align:center}

.botao-voltar{
  position:absolute;right:18px;top:18px;z-index:30;width:54px;height:54px;
  padding:0;border:0;border-radius:50%;
  background:linear-gradient(180deg,#0879c9,#07559e);
  box-shadow:0 3px 8px rgba(0,0,0,.2);
  display:flex;align-items:center;justify-content:center
}
.botao-voltar img{width:30px;height:30px;object-fit:contain;display:block}

#rodape{
  display:grid !important;grid-template-columns:1fr 1fr !important;
  align-items:center !important;gap:0 !important;width:100%;box-sizing:border-box
}
.rodape-esquerda,.rodape-direita{
  display:flex !important;align-items:center !important;min-height:32px;
  line-height:1;white-space:nowrap
}
.rodape-esquerda{justify-content:flex-start !important;text-align:left !important;padding-left:18px}
.rodape-direita{justify-content:flex-end !important;text-align:right !important;padding-right:18px}
.rodape-esquerda .estrela,.rodape-direita .info{flex:0 0 auto;margin-right:7px}

.menu-hamburger{left:18px;top:18px;z-index:30}
.hamburger-botao{background:linear-gradient(180deg,#0879c9,#07559e)}

@media(max-width:700px){
  .cabecalho{min-height:76px;padding:7px 65px;border-radius:20px 20px 15px 15px}
  .titulo-linha .titulo-icone{width:44px;height:44px;flex-basis:44px}
  .titulo-linha{gap:6px}
  .titulo-linha .ano{font-size:clamp(18px,5.5vw,27px)}
  .titulo .idade{font-size:clamp(12px,3.7vw,17px)}
  .botao-voltar{width:44px;height:44px;right:9px;top:9px}
  .botao-voltar img{width:25px;height:25px}
  .menu-hamburger{left:9px;top:9px}
  .rodape-esquerda{padding-left:9px}
  .rodape-direita{padding-right:9px}
}


/* ===== Ajuste final: icons + altura dos botões ===== */
.disciplina {
  height: 330px;
  padding-top: 24px;
  padding-bottom: 20px;
}
.icone-wrap {
  height: 170px;
}
.icone-wrap img {
  width: 155px;
  height: 155px;
}

/* Garante que o nome das disciplinas não fica demasiado baixo. */
.disciplina > div:last-child {
  position: relative;
  z-index: 3;
}

@media (min-width: 700px) and (max-width: 1100px) and (orientation: landscape) {
  .disciplina {
    height: 270px;
    padding: 16px 10px 13px;
  }
  .icone-wrap {
    height: 130px;
  }
  .icone-wrap img {
    width: 112px;
    height: 112px;
  }
}

@media (max-width: 699px), (orientation: portrait) and (max-width: 1000px) {
  .disciplina {
    height: 92px;
    min-height: 92px;
  }
  .icone-wrap {
    height: 72px;
  }
  .icone-wrap img {
    width: 68px;
    height: 68px;
  }
}

/* Se um servidor/browser demorar a resolver a imagem, mantém o espaço
   estável em vez de alterar a altura do cartão. */
.icone-wrap img,
.titulo-linha .titulo-icone,
.botao-voltar img,
.menu-dropdown img {
  flex-shrink: 0;
}


/* ============================================================
   AJUSTE CIRÚRGICO — referência visual da página por ano
   ============================================================ */

html, body {
  background: #c9f1fc;
}

body {
  background:
    linear-gradient(180deg, #bcecf9 0%, #dff8ff 55%, #c8f0fb 100%);
}

/* Faixa superior azul separada do azul claro do corpo. */
#topo {
  background: linear-gradient(180deg, #18a7df 0%, #0b91d1 100%);
  border-radius: 0 0 28px 28px;
  box-shadow: inset 0 -8px 18px rgba(0,95,155,.10);
}

/* Cápsula central do título. */
.cabecalho {
  width: min(63%, 720px);
  height: 72px;
  border-radius: 40px;
  background: linear-gradient(180deg, #087fca 0%, #066bb7 100%);
  border: 3px solid rgba(255,255,255,.72);
  box-shadow:
    inset 0 2px 0 rgba(255,255,255,.20),
    0 4px 10px rgba(0,75,130,.16);
  gap: 0;
}

/* Icon ocupa a altura visual das duas linhas; textos ficam à direita. */
.titulo {
  width: auto;
}
.titulo-linha {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  width: max-content;
  margin: 0 auto;
}
.titulo-linha .titulo-icone {
  width: 58px;
  height: 58px;
  flex: 0 0 58px;
  margin: 0;
  object-fit: contain;
}
.titulo-textos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 185px;
  line-height: 1;
}
.titulo-textos .ano,
.titulo-textos .idade {
  width: 100%;
  text-align: left;
}
.titulo-textos .ano {
  font-size: clamp(27px, 3vw, 38px);
  font-weight: 900;
  line-height: .98;
}
.titulo-textos .idade {
  margin-top: 5px;
  font-size: clamp(16px, 1.55vw, 21px);
  font-weight: 800;
  line-height: 1;
}

/* Botões laterais azuis, não brancos. */
.home,
.engrenagem,
.botao-voltar,
.hamburger-botao {
  background: linear-gradient(180deg, #0d70bc 0%, #07559f 100%);
  border: 3px solid rgba(255,255,255,.72);
  box-shadow: 0 3px 7px rgba(0,60,110,.22);
}

/* Padding inferior dos 3 menus para o texto respirar junto ao fundo. */
.disciplina {
  padding-bottom: 38px;
}
.disciplina .nome {
  margin-top: 5px;
}

/* Tablet horizontal */
@media (min-width: 700px) and (max-width: 1100px) and (orientation: landscape) {
  .cabecalho {
    width: min(72%, 620px);
    height: 64px;
  }
  .titulo-linha .titulo-icone {
    width: 50px;
    height: 50px;
    flex-basis: 50px;
  }
  .titulo-textos {
    min-width: 155px;
  }
  .titulo-textos .ano {
    font-size: 25px;
  }
  .titulo-textos .idade {
    font-size: 15px;
    margin-top: 3px;
  }
  .disciplina {
    padding-bottom: 28px;
  }
}

/* Vertical */
@media (max-width: 699px), (orientation: portrait) and (max-width: 1000px) {
  .cabecalho {
    width: calc(100% - 86px);
    height: 62px;
  }
  .titulo-linha {
    gap: 7px;
  }
  .titulo-linha .titulo-icone {
    width: 46px;
    height: 46px;
    flex-basis: 46px;
  }
  .titulo-textos {
    min-width: 125px;
  }
  .titulo-textos .ano {
    font-size: 23px;
  }
  .titulo-textos .idade {
    font-size: 14px;
    margin-top: 3px;
  }
  .disciplina {
    padding-bottom: 12px;
  }
}


/* ============================================================
   HEADER — ajuste de acordo com a referência fornecida
   ============================================================ */

/* Corpo inteiro na cor azul pedida. */
html,
body {
  background: #016DC2 !important;
}

/* Faixa superior: #3BC7FD, largura total, com curva suave
   apenas na parte inferior. */
#topo {
  width: 100%;
  background: #3BC7FD !important;
  border-radius: 0 0 24px 24px !important;
  box-shadow: none !important;
}

/* Zona do título: azul #016DC2, sem borda. */
.cabecalho {
  background: #016DC2 !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 38px !important;
}

/* Mantém o icon e as duas linhas compactos e centrados. */
.titulo-linha {
  gap: 10px;
}
.titulo-linha .titulo-icone {
  object-fit: contain;
}
.titulo-textos .ano,
.titulo-textos .idade {
  color: #fff;
}

/* Rodapé: base azul; cada zona fica visualmente separada.
   A zona da direita recebe a forma branca arredondada. */
.rodape {
  background: #016DC2 !important;
  border-radius: 0 0 22px 22px;
  overflow: hidden;
}

.rodape .rodape-esquerda {
  background: transparent !important;
  border-radius: 0 !important;
}

.rodape .rodape-direita {
  background: #fff !important;
  color: #016DC2 !important;
  border-radius: 28px 28px 0 0 !important;
  padding: 12px 22px 10px !important;
}

/* Texto esquerdo */
.rodape .rodape-esquerda {
  color: #fff !important;
}

/* Caso os nomes usados no layout sejam estes. */
.rodape .esquerda,
.rodape .direita {
  color: inherit;
}

/* Não alterar o resto dos cartões nesta etapa. */


/* ============================================================
   V9 — reprodução visual da referência fornecida
   Os dois botões laterais do header ficam fora deste ajuste.
   ============================================================ */

html, body {
  margin: 0 !important;
  min-height: 100%;
}

body {
  background:
    radial-gradient(circle at 8% 31%, rgba(255,255,255,.20) 0 2px, transparent 3px),
    radial-gradient(circle at 88% 34%, rgba(255,255,255,.18) 0 3px, transparent 4px),
    linear-gradient(180deg, #a9ecfa 0%, #d8f7fc 55%, #eefcff 100%) !important;
  color: #075aa5;
}

/* A página da referência tem uma moldura azul muito fina e cantos arredondados. */
#app {
  width: calc(100% - 8px) !important;
  min-height: calc(100vh - 8px) !important;
  margin: 4px auto !important;
  padding: 0 8px 0 !important;
  border: 4px solid #159fe2;
  border-radius: 14px !important;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(116,222,248,.35), rgba(255,255,255,.20)),
    #dff8ff;
}

/* Faixa azul clara do topo. */
#topo {
  height: 92px !important;
  width: calc(100% + 16px) !important;
  margin-left: -8px !important;
  background: #3BC7FD !important;
  border-radius: 0 0 22px 22px !important;
  box-shadow: none !important;
}

/* Cápsula azul escura do título. */
.cabecalho {
  width: 62% !important;
  max-width: 390px !important;
  height: 70px !important;
  border-radius: 38px !important;
  background: #016DC2 !important;
  border: none !important;
  box-shadow: none !important;
  gap: 10px !important;
}

/* O icon do ano e as duas linhas de texto formam um bloco único. */
.titulo-linha {
  gap: 9px !important;
  align-items: center !important;
}
.titulo-linha .titulo-icone {
  width: 58px !important;
  height: 58px !important;
  flex: 0 0 58px !important;
  object-fit: contain !important;
}
.titulo-textos {
  min-width: 145px !important;
  align-items: flex-start !important;
}
.titulo-textos .ano {
  font-size: 28px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
  color: #fff !important;
  text-align: left !important;
}
.titulo-textos .idade {
  margin-top: 4px !important;
  font-size: 17px !important;
  line-height: 1 !important;
  font-weight: 800 !important;
  color: #fff !important;
  text-align: left !important;
}

/* Área central da referência. */
#conteudo {
  padding: 0 18px !important;
}

/* Placa creme "Escolhe a disciplina". */
.titulo-escolha {
  margin: 8px auto 18px !important;
  padding: 7px 42px 8px !important;
  border-radius: 22px !important;
  background: linear-gradient(#fffbe8, #ffe5a0) !important;
  border: 3px solid #f3c15a !important;
  box-shadow: 0 3px 7px rgba(130,89,0,.16) !important;
  color: #6f3f13 !important;
  font-size: 24px !important;
  line-height: 1 !important;
}

/* Três cartões: proporções, cores e cantos da imagem. */
.disciplinas {
  gap: 12px !important;
}

.disciplina {
  height: 198px !important;
  border-radius: 24px !important;
  border: 4px solid rgba(255,255,255,.94) !important;
  box-shadow:
    0 4px 0 rgba(0,0,0,.08),
    0 7px 12px rgba(0,80,130,.13),
    inset 0 0 0 2px rgba(255,255,255,.20) !important;
  padding: 20px 10px 17px !important;
}

.disciplina.rosa {
  background: linear-gradient(145deg, #ff4ca9 0%, #e80d7c 100%) !important;
}
.disciplina.azul {
  background: linear-gradient(145deg, #2bc8f0 0%, #079be1 100%) !important;
}
.disciplina.verde {
  background: linear-gradient(145deg, #73df36 0%, #24b62d 100%) !important;
}

.icone-wrap {
  height: 128px !important;
}
.icone-wrap img {
  width: 112px !important;
  height: 112px !important;
  object-fit: contain !important;
}

.disciplina .nome {
  font-size: 23px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
  text-shadow: 0 2px 1px rgba(0,0,0,.15) !important;
}
.disciplina .descricao {
  display: none !important;
}

/* Rodapé exatamente como painel branco com topo arredondado. */
.rodape {
  min-height: 52px !important;
  margin: 14px -4px 0 !important;
  padding: 0 16px !important;
  border: none !important;
  border-radius: 24px 24px 0 0 !important;
  background: #fff !important;
  box-shadow: 0 -1px 0 rgba(255,255,255,.8) !important;
  color: #0869ae !important;
  font-size: 14px !important;
}
.rodape .rodape-esquerda,
.rodape .rodape-direita {
  background: transparent !important;
  color: #0869ae !important;
  border-radius: 0 !important;
  padding: 0 !important;
}
.rodape .rodape-direita {
  justify-content: flex-end !important;
}
.estrela {
  color: #ffb400 !important;
  font-size: 28px !important;
}
.info {
  width: 29px !important;
  height: 29px !important;
  background: #087fc9 !important;
  color: #fff !important;
}

/* Tablet horizontal */
@media (min-width: 700px) and (max-width: 1100px) and (orientation: landscape) {
  #topo { height: 86px !important; }
  .cabecalho { width: 58% !important; height: 64px !important; }
  .titulo-linha .titulo-icone { width: 52px !important; height: 52px !important; flex-basis: 52px !important; }
  .titulo-textos .ano { font-size: 25px !important; }
  .titulo-textos .idade { font-size: 15px !important; }
  .titulo-escolha { font-size: 21px !important; margin-bottom: 14px !important; }
  .disciplina { height: 155px !important; padding: 12px 8px 13px !important; }
  .icone-wrap { height: 100px !important; }
  .icone-wrap img { width: 88px !important; height: 88px !important; }
  .disciplina .nome { font-size: 19px !important; }
}

/* Vertical: preserva a versão horizontal dos cartões, mas compacta. */
@media (max-width: 699px), (orientation: portrait) and (max-width: 1000px) {
  #topo { height: 86px !important; }
  .cabecalho { width: calc(100% - 82px) !important; height: 62px !important; }
  .titulo-linha .titulo-icone { width: 46px !important; height: 46px !important; flex-basis: 46px !important; }
  .titulo-textos { min-width: 125px !important; }
  .titulo-textos .ano { font-size: 23px !important; }
  .titulo-textos .idade { font-size: 14px !important; }
  #conteudo { padding: 0 8px !important; }
  .titulo-escolha { font-size: 20px !important; padding: 7px 25px !important; margin-bottom: 12px !important; }
  .disciplinas { grid-template-columns: 1fr !important; gap: 9px !important; }
  .disciplina { height: 86px !important; min-height: 86px !important; padding: 7px 12px !important; }
  .icone-wrap { height: 70px !important; }
  .icone-wrap img { width: 66px !important; height: 66px !important; }
  .disciplina .nome { font-size: 22px !important; }
  .rodape { margin-top: 10px !important; }
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
          <img class="titulo-icone" src=".../icons/icon1.png" alt="">
          <div class="titulo-textos">
            <div class="ano">${DADOS.pagina.titulo}</div>
            <div class="idade">${DADOS.pagina.faixaEtaria}</div>
          </div>
        </div>
      </div>
    </div>

    <button class="botao-voltar" type="button" aria-label="Voltar ao menu principal">
      <img src=".../icons/seta.png" alt="">
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
