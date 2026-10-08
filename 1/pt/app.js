function inserirCSS() {
  const estilo = document.createElement("style");

  estilo.textContent = `
* { box-sizing: border-box; }
html, body {
  margin: 0; padding: 0; width: 100%; min-height: 100vh;
  font-family: "Nunito", "Quicksand", "Arial Rounded MT Bold", sans-serif;
}

html {
  background: linear-gradient(180deg, ${DADOS.cores.ceu1} 0%, ${DADOS.cores.ceu2} 19%, #F2F8FC 38%, ${DADOS.cores.fundo} 100%);
  background-attachment: fixed;
}

body { 
  background: transparent; 
  color: ${DADOS.cores.texto}; 
  overflow-x: hidden; 
}

button { font-family: inherit; }

#app {
  min-height: calc(100vh - 82px);
  width: min(100%, ${DADOS.dimensoes.larguraMaxima}px);
  margin: 0 auto;
  padding: 10px 0 16px;
  position: relative;
  overflow: hidden;
  background: transparent;
}

.cabecalho {
  position: relative; width: 100%; height: 82px;
  background: linear-gradient(180deg, ${DADOS.cores.headerTopo} 0%, ${DADOS.cores.header} 100%);
  display: flex; align-items: center; justify-content: center;
  border-bottom: 2px solid rgba(255,255,255,.65);
  box-shadow: 0 3px 10px rgba(15,139,211,.12); z-index: 20;
}

.botao-menu, .botao-seta {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 58px; height: 58px; padding: 0; border: 0; border-radius: 50%;
  background: ${DADOS.cores.azulHeader}; cursor: pointer;
  box-shadow: 0 3px 7px rgba(0,0,0,.18);
  transition: transform .12s ease, box-shadow .12s ease; z-index: 25;
}
.botao-menu { left: 18px; }
.botao-seta { right: 18px; }

.botao-menu:active, .botao-seta:active {
  transform: translateY(calc(-50% + 3px)) scale(0.95);
  box-shadow: 0 1px 3px rgba(0,0,0,.25);
}

.botao-menu::before {
  content: ""; position: absolute; width: 56%; height: 56%; left: 22%; top: 22%;
  background-image: url("${DADOS.icons.menu}"); background-size: contain; background-repeat: no-repeat;
}
.botao-seta::before {
  content: ""; position: absolute; width: 58%; height: 58%; left: 21%; top: 21%;
  background-image: url("${DADOS.icons.seta}"); background-size: contain; background-repeat: no-repeat;
}

.marca { display: flex; align-items: center; justify-content: center; gap: 12px; min-width: 0; max-width: 65%; padding: 0 50px; }
.marca-sol { width: 52px; height: 52px; flex: 0 0 52px; background-image: url("${DADOS.icons.cabecalho}"); background-size: contain; background-repeat: no-repeat; background-position: center; }
.marca-texto { display: flex; flex-direction: column; justify-content: center; min-width: 0; }
.marca-texto h1 { margin: 0; font-size: clamp(26px, 2.8vw, 42px); line-height: 1.1; font-weight: 900; color: ${DADOS.cores.textoEscuro}; text-shadow: 0 2px 0 rgba(255,255,255,.8); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.marca-texto p { margin: 3px 0 0; font-size: clamp(12px, 1.1vw, 16px); line-height: 1.1; font-weight: 800; color: ${DADOS.cores.texto}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.menu-acordeao {
  position: absolute; top: 72px; left: 18px; width: 300px; padding: 0;
  background: rgba(255,255,255,.98); border: 2px solid ${DADOS.cores.linha};
  border-top: 4px solid ${DADOS.cores.azulHeader}; border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 25px rgba(15,139,211,.24);
  opacity: 0; visibility: hidden; transform: translateY(-12px) scale(.98);
  transform-origin: top left; transition: opacity .22s ease, transform .22s ease, visibility .22s ease;
  z-index: 30;
}
.menu-acordeao.aberto { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }
.menu-acordeao-topo { padding: 15px 18px 13px; background: linear-gradient(180deg, #E6F4FA, #FFFFFF); border-bottom: 1px solid ${DADOS.cores.linha}; }
.menu-acordeao-titulo { font-size: 19px; font-weight: 900; color: ${DADOS.cores.textoEscuro}; }
.menu-acordeao-subtitulo { margin-top: 3px; font-size: 12px; font-weight: 700; color: #0F8BD3; }
.menu-anos { display: flex; flex-direction: column; padding: 8px; gap: 5px; max-height: 60vh; overflow-y: auto; }
.menu-ano {
  width: 100%; min-height: 54px; display: flex; align-items: center; gap: 13px; padding: 6px 11px;
  border: 0; border-radius: 13px; background: #FFFFFF; color: ${DADOS.cores.textoEscuro};
  font-size: 15px; font-weight: 800; text-align: left; cursor: pointer; transition: background .16s ease;
}
.menu-ano:hover { background: #E6F4FA; transform: translateX(3px); }
.menu-ano-icon { width: 45px; height: 45px; flex: 0 0 45px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: #F0F9FC; }
.menu-ano-icon img { width: 100%; height: 100%; object-fit: contain; }
.menu-ano-nome { flex: 1; }

/* SECÇÕES E JOGOS (6 COLUNAS) */
.destaques {
  margin: 15px 20px; padding: 23px 28px 25px; border-radius: 26px;
  background: rgba(255,255,255,.93); box-shadow: 0 7px 18px rgba(15,139,211,.10);
}
.titulo-destaques { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 28px; margin: 0 30px 25px; }
.titulo-destaques .linha { height: 3px; background: #96D5F0; border-radius: 99px; }
.titulo-destaques h2 { margin: 0; color: ${DADOS.cores.textoEscuro}; font-size: clamp(19px, 1.65vw, 26px); font-weight: 900; display: flex; align-items: center; gap: 8px; }

/* EXATAMENTE 6 CARTÕES POR LINHA */
.jogos { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 20px; align-items: start; }
.jogo { display: flex; flex-direction: column; align-items: center; text-align: center; cursor: pointer; transition: transform .12s ease; }
.jogo:hover { transform: translateY(-3px); }

.icone-jogo { width: ${DADOS.dimensoes.tamanhoIconJogo}px; height: ${DADOS.dimensoes.tamanhoIconJogo}px; display: grid; place-items: center; margin-bottom: 10px; }
.icone-jogo img { width: 100%; height: 100%; object-fit: contain; }
.nome-jogo { margin-top: 0; min-height: 25px; color: ${DADOS.cores.textoEscuro}; font-size: clamp(14px, 1.1vw, 18px); font-weight: 900; }
.estrelas { margin-top: 5px; color: #FFB400; font-size: clamp(14px, 1vw, 17px); letter-spacing: 1px; }

.rodape {
  width: calc(100% - 40px); min-height: 53px; margin: 20px 20px 0; padding: 8px 17px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 15px; align-items: center;
  border: 2px solid ${DADOS.cores.linha}; border-radius: 14px; background: rgba(255,255,255,.78);
  font-size: clamp(11px, 1vw, 14px); font-weight: 800;
}
.rodape-item { display: flex; align-items: center; gap: 8px; }
.rodape-info { justify-content: flex-end; }
.estrela { color: #FFB400; font-size: 25px; }
.info { 
  width: 25px; height: 25px; min-width: 25px; min-height: 25px;
  display: inline-flex; align-items: center; justify-content: center; 
  border-radius: 50% !important; color: #fff; background: ${DADOS.cores.azulHeader}; 
  font-size: 12px; font-weight: 900; overflow: hidden; flex-shrink: 0;
}

@media (max-width: 1024px) {
  .jogos { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 16px; }
}

@media (max-width: 768px) {
  .cabecalho { height: 70px; }
  .botao-menu, .botao-seta { width: 48px; height: 48px; }
  .botao-menu { left: 12px; }
  .botao-seta { right: 12px; }
  .marca { padding: 0 44px; gap: 8px; max-width: 72%; }
  .marca-sol { width: 42px; height: 42px; flex: 0 0 42px; }
  .marca-texto h1 { font-size: 20px; }
  .marca-texto p { font-size: 10px; }
  .menu-acordeao { top: 62px; left: 12px; width: calc(100vw - 24px); max-width: 280px; }
}

@media (max-width: 900px) and (orientation: portrait), (max-width: 600px) {
  .cabecalho { height: 62px; }
  .botao-menu, .botao-seta { width: 42px; height: 42px; }
  .botao-menu { left: 10px; }
  .botao-seta { right: 10px; }
  .marca { padding: 0 38px; gap: 6px; max-width: 70%; }
  .marca-sol { width: 36px; height: 36px; flex: 0 0 36px; }
  .marca-texto h1 { font-size: 16px; }
  .marca-texto p { font-size: 9px; margin-top: 1px; }
  .menu-acordeao { top: 54px; left: 10px; width: calc(100vw - 20px); max-width: 260px; }
  
  .destaques { margin: 12px 16px; padding: 18px 14px; border-radius: 16px; }
  .jogos { grid-template-columns: repeat(3, 1fr); row-gap: 12px; column-gap: 8px; }
  .nome-jogo { font-size: 11px; min-height: 20px; }
  .estrelas { font-size: 10px; margin-top: 3px; }
  .rodape { width: calc(100% - 32px); margin: 10px 16px 0; padding: 8px 12px; font-size: 11px; }
  
  .info {
    width: 22px !important;
    height: 22px !important;
    min-width: 22px !important;
    min-height: 22px !important;
    border-radius: 50% !important;
  }
}
  `;

  document.head.appendChild(estilo);
}

function preencherTextos() {
  if (DADOS.pagina.browserTitulo) {
    document.title = DADOS.pagina.browserTitulo;
  }

  const marca = document.querySelector("[data-marca]");
  const submarca = document.querySelector("[data-submarca]");
  const mensagem = document.querySelector("[data-mensagem]");
  const informacoes = document.querySelectorAll("[data-informacao]");

  if (marca) marca.textContent = DADOS.pagina.titulo;
  if (submarca) submarca.textContent = DADOS.pagina.subtitulo;
  if (mensagem) mensagem.textContent = DADOS.pagina.mensagem;
  
  informacoes.forEach(el => {
    el.textContent = DADOS.pagina.informacao;
  });
}

function criarMenuAnos() {
  const recipiente = document.getElementById("menu-anos");
  const modelo = document.getElementById("modelo-menu-ano");
  if (!recipiente || !modelo) return;

  recipiente.innerHTML = "";
  DADOS.menuAnos.forEach(ano => {
    const item = modelo.content.cloneNode(true);
    const botao = item.querySelector(".menu-ano");
    const icone = item.querySelector(".menu-ano-icon");
    const nome = item.querySelector(".menu-ano-nome");

    const imagem = document.createElement("img");
    imagem.src = DADOS.icons.menuAnos[ano.icon];
    imagem.alt = "";
    imagem.draggable = false;
    icone.appendChild(imagem);

    nome.textContent = ano.nome;
    botao.addEventListener("click", () => { window.location.href = ano.pagina; });
    recipiente.appendChild(item);
  });
}

function configurarMenu() {
  const botaoMenu = document.querySelector(".botao-menu");
  const menu = document.querySelector(".menu-acordeao");
  const botaoSeta = document.querySelector(".botao-seta");

  if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", event => {
      event.stopPropagation();
      menu.classList.toggle("aberto");
    });
    document.addEventListener("click", event => {
      if (menu.classList.contains("aberto") && !menu.contains(event.target) && !botaoMenu.contains(event.target)) {
        menu.classList.remove("aberto");
      }
    });
  }

  if (botaoSeta) {
    botaoSeta.addEventListener("click", () => { window.location.href = "../"; });
  }
}

function criarSeccoesJogos() {
  const container = document.getElementById("container-seccoes");
  const modeloSeccao = document.getElementById("modelo-seccao");
  const modeloJogo = document.getElementById("modelo-jogo");

  if (!container || !modeloSeccao || !modeloJogo) return;

  container.innerHTML = "";

  DADOS.seccoesJogos.forEach(seccao => {
    const blocoSeccao = modeloSeccao.content.cloneNode(true);
    const iconeSec = blocoSeccao.querySelector(".icone-seccao");
    const nomeSec = blocoSeccao.querySelector(".nome-seccao");
    const containerJogos = blocoSeccao.querySelector(".jogos");

    if (iconeSec) iconeSec.textContent = seccao.iconeTitulo || "⭐";
    if (nomeSec) nomeSec.textContent = seccao.titulo;

    seccao.jogos.forEach(jogo => {
      const itemJogo = modeloJogo.content.cloneNode(true);
      const imagem = itemJogo.querySelector(".icone-jogo img");
      const nome = itemJogo.querySelector(".nome-jogo");
      const estrelas = itemJogo.querySelector(".estrelas");

      imagem.src = DADOS.icons.jogos[jogo.icon];
      imagem.alt = jogo.nome;
      imagem.draggable = false;

      nome.textContent = jogo.nome;
      estrelas.textContent = "★".repeat(jogo.estrelas);

      if (jogo.pagina) {
        const cartao = itemJogo.querySelector(".jogo");
        if (cartao) {
          cartao.addEventListener("click", () => { window.location.href = jogo.pagina; });
        }
      }
      containerJogos.appendChild(itemJogo);
    });

    container.appendChild(blocoSeccao);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inserirCSS();
  preencherTextos();
  criarMenuAnos();
  configurarMenu();
  criarSeccoesJogos();
});
