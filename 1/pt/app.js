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
  padding: 20px 20px 30px;
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
.menu-anos { display: flex; flex-direction: column; padding: 8px; gap: 5px; max-height: 65vh; overflow-y: auto; }
.menu-ano {
  width: 100%; min-height: 54px; display: flex; align-items: center; gap: 13px; padding: 6px 11px;
  border: 0; border-radius: 13px; background: #FFFFFF; color: ${DADOS.cores.textoEscuro};
  font-size: 15px; font-weight: 800; text-align: left; cursor: pointer; transition: background .16s ease;
}
.menu-ano:hover { background: #E6F4FA; transform: translateX(3px); }
.menu-ano-icon { width: 45px; height: 45px; flex: 0 0 45px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: #F0F9FC; }
.menu-ano-icon img { width: 100%; height: 100%; object-fit: contain; }
.menu-ano-nome { flex: 1; }

/* SECÇÕES E ESTILO DOS CARTÕES (6 POR LINHA) */
.bloco-seccao { margin-bottom: 35px; }

.cabecalho-seccao {
  display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
  background: #FFFFFF; width: fit-content; padding: 8px 20px 8px 14px;
  border-radius: 30px; box-shadow: 0 3px 10px rgba(15,139,211,.08);
}
.ponto-seccao { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
.titulo-seccao { margin: 0; font-size: clamp(15px, 1.4vw, 19px); font-weight: 900; color: ${DADOS.cores.textoEscuro}; text-transform: uppercase; letter-spacing: .5px; }

/* GRELHA COM 6 CARTÕES POR LINHA */
.grelha-jogos { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 18px; align-items: stretch; }

.cartao-jogo {
  background: #FFFFFF; border-radius: 20px; padding: 14px;
  display: flex; flex-direction: column; justify-content: space-between;
  box-shadow: 0 6px 16px rgba(15,139,211,.10); border: 2px solid rgba(255,255,255,1);
  transition: transform .15s ease, box-shadow .15s ease;
}
.cartao-jogo:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 22px rgba(15,139,211,.18);
}

.imagem-jogo-container {
  width: 100%; aspect-ratio: 1; background: #F8FBFE; border-radius: 14px;
  display: grid; place-items: center; padding: 10px; border: 1px solid #EAF2F8;
}
.imagem-jogo { width: 100%; height: 100%; object-fit: contain; }

.conteudo-jogo { text-align: center; padding: 10px 0; flex-grow: 1; display: flex; flex-direction: column; justify-content: center; }
.nome-jogo { margin: 0 0 4px; font-size: clamp(14px, 1.1vw, 17px); font-weight: 900; color: ${DADOS.cores.textoEscuro}; line-height: 1.1; }
.descricao-jogo { margin: 0; font-size: clamp(11px, 0.9vw, 13px); font-weight: 700; color: #5A7E94; line-height: 1.2; }

.rodape-cartao-jogo { display: flex; align-items: center; gap: 8px; margin-top: 6px; }

.badge-numero {
  width: 32px; height: 32px; min-width: 32px; border-radius: 50%;
  display: grid; place-items: center; font-weight: 900; font-size: 14px; color: #FFFFFF;
  box-shadow: 0 2px 5px rgba(0,0,0,.15);
}

.botao-jogar {
  flex-grow: 1; height: 34px; border: 0; border-radius: 17px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 5px;
  font-weight: 900; font-size: 13px; color: #FFFFFF;
  box-shadow: 0 3px 6px rgba(0,0,0,.15); transition: filter .12s ease;
}
.botao-jogar:hover { filter: brightness(1.1); }
.icone-play { font-size: 10px; }

.rodape {
  width: 100%; min-height: 53px; margin-top: 25px; padding: 8px 17px;
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

@media (max-width: 1200px) {
  .grelha-jogos { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 768px) {
  .cabecalho { height: 70px; }
  .botao-menu, .botao-seta { width: 48px; height: 48px; }
  .botao-menu { left: 12px; }
  .botao-seta { right: 12px; }
  .grelha-jogos { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
}

@media (max-width: 480px) {
  .grelha-jogos { grid-template-columns: 1fr; }
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
    const ponto = blocoSeccao.querySelector(".ponto-seccao");
    const titulo = blocoSeccao.querySelector(".titulo-seccao");
    const grelha = blocoSeccao.querySelector(".grelha-jogos");

    if (ponto) ponto.style.backgroundColor = seccao.corPonto || "#0F8BD3";
    if (titulo) titulo.textContent = seccao.titulo;

    seccao.jogos.forEach(jogo => {
      const cartao = modeloJogo.content.cloneNode(true);
      const imagem = cartao.querySelector(".imagem-jogo");
      const nome = cartao.querySelector(".nome-jogo");
      const descricao = cartao.querySelector(".descricao-jogo");
      const badge = cartao.querySelector(".badge-numero");
      const botaoJogar = cartao.querySelector(".botao-jogar");

      // Caminho correto para a pasta iconjogos criada na mesma diretoria
      imagem.src = `iconjogos/${jogo.icon}`;
      imagem.alt = jogo.nome;
      imagem.draggable = false;

      nome.textContent = jogo.nome;
      descricao.textContent = jogo.descricao;
      badge.textContent = jogo.numero;
      badge.style.backgroundColor = seccao.corPonto || "#0F8BD3";
      botaoJogar.style.backgroundColor = seccao.corPonto || "#0F8BD3";

      if (jogo.pagina) {
        const artigo = cartao.querySelector(".cartao-jogo");
        if (artigo) {
          artigo.style.cursor = "pointer";
          artigo.addEventListener("click", () => { window.location.href = jogo.pagina; });
        }
      }

      grelha.appendChild(cartao);
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
