function inserirCSS() {
  const estilo = document.createElement("style");

  estilo.textContent = `
* { box-sizing: border-box; }
html, body {
  margin: 0; padding: 0; width: 100%; min-height: 100%;
  font-family: "Nunito", "Quicksand", "Arial Rounded MT Bold", sans-serif;
}
body { background: ${DADOS.cores.fundo}; color: ${DADOS.cores.texto}; overflow-x: hidden; }
button { font-family: inherit; }

#app {
  min-height: 100vh;
  width: min(100%, ${DADOS.dimensoes.larguraMaxima}px);
  margin: 0 auto;
  padding: 0 0 16px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, ${DADOS.cores.ceu1} 0%, ${DADOS.cores.ceu2} 19%, #EAF5FC 38%, ${DADOS.cores.fundo} 100%);
}

.cabecalho {
  position: relative; width: 100%; height: 82px;
  background: linear-gradient(180deg, ${DADOS.cores.headerTopo} 0%, ${DADOS.cores.header} 100%);
  display: flex; align-items: center; justify-content: center;
  border-bottom: 2px solid rgba(255,255,255,.65);
  box-shadow: 0 3px 10px rgba(15,88,139,.12); z-index: 20;
}

.botao-menu, .botao-seta {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 58px; height: 58px; padding: 0; border: 0; border-radius: 50%;
  background: ${DADOS.cores.azulHeader}; cursor: pointer;
  box-shadow: 0 3px 7px rgba(0,0,0,.18);
  transition: transform .18s ease, box-shadow .18s ease; z-index: 25;
}
.botao-menu { left: 18px; }
.botao-seta { right: 18px; }

.botao-menu::before {
  content: ""; position: absolute; width: 56%; height: 56%; left: 22%; top: 22%;
  background-image: url("${DADOS.icons.menu}"); background-size: contain; background-repeat: no-repeat;
}
.botao-seta::before {
  content: ""; position: absolute; width: 58%; height: 58%; left: 21%; top: 21%;
  background-image: url("${DADOS.icons.seta}"); background-size: contain; background-repeat: no-repeat;
}

.marca { display: flex; align-items: center; justify-content: center; gap: 12px; min-width: 0; max-width: 75%; }
.marca-sol { width: 52px; height: 52px; flex: 0 0 52px; background-image: url("${DADOS.icons.cabecalho}"); background-size: contain; background-repeat: no-repeat; }
.marca-texto h1 { margin: 0; font-size: clamp(28px, 3vw, 45px); line-height: .98; font-weight: 900; color: ${DADOS.cores.textoEscuro}; text-shadow: 0 2px 0 rgba(255,255,255,.8); }
.marca-texto p { margin: 6px 0 0; font-size: clamp(13px, 1.2vw, 18px); line-height: 1; font-weight: 800; color: ${DADOS.cores.texto}; }

.menu-acordeao {
  position: absolute; top: 72px; left: 18px; width: 300px; padding: 0;
  background: rgba(255,255,255,.98); border: 2px solid ${DADOS.cores.linha};
  border-top: 4px solid ${DADOS.cores.azulHeader}; border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 25px rgba(15,88,139,.24);
  opacity: 0; visibility: hidden; transform: translateY(-12px) scale(.98);
  transform-origin: top left; transition: opacity .22s ease, transform .22s ease, visibility .22s ease;
  z-index: 30;
}
.menu-acordeao.aberto { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }
.menu-acordeao-topo { padding: 15px 18px 13px; background: linear-gradient(180deg, #EAF8FD, #FFFFFF); border-bottom: 1px solid ${DADOS.cores.linha}; }
.menu-acordeao-titulo { font-size: 19px; font-weight: 900; color: ${DADOS.cores.textoEscuro}; }
.menu-acordeao-subtitulo { margin-top: 3px; font-size: 12px; font-weight: 700; color: #5791B6; }
.menu-anos { display: flex; flex-direction: column; padding: 8px; gap: 5px; }
.menu-ano {
  width: 100%; min-height: 54px; display: flex; align-items: center; gap: 13px; padding: 6px 11px;
  border: 0; border-radius: 13px; background: #FFFFFF; color: ${DADOS.cores.textoEscuro};
  font-size: 15px; font-weight: 800; text-align: left; cursor: pointer; transition: background .16s ease;
}
.menu-ano:hover { background: #EAF7FC; transform: translateX(3px); }
.menu-ano-icon { width: 45px; height: 45px; flex: 0 0 45px; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: #F1FAFD; }
.menu-ano-icon img { width: 100%; height: 100%; object-fit: contain; }
.menu-ano-nome { flex: 1; }

.area-menu { position: relative; width: 100%; margin-top: 20px; padding: 0 20px; }
.titulo-menu {
  width: fit-content; margin: 1px auto 19px; padding: 8px 30px;
  border: 2px solid rgba(222,157,39,.42); border-radius: 16px;
  background: linear-gradient(180deg, #FFFDEC, ${DADOS.cores.creme});
  box-shadow: 0 3px 7px rgba(118,88,17,.12);
}
.titulo-menu h2 { margin: 0; font-size: clamp(18px, 1.7vw, 27px); font-weight: 900; color: #74440C; text-align: center; }

.anos { width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.botao-ano {
  --cor-1: ${DADOS.cores.portugues}; --cor-2: ${DADOS.cores.portugues2};
  position: relative; width: 100%; height: ${DADOS.dimensoes.alturaAnoDesktop}px;
  padding: 18px 12px 14px; border: 3px solid rgba(255,255,255,.94);
  border-radius: ${DADOS.dimensoes.raioAno}px;
  background: linear-gradient(145deg, var(--cor-1) 0%, var(--cor-2) 100%);
  display: flex; flex-direction: column; align-items: center; justify-content: space-between;
  color: #FFFFFF; cursor: pointer; overflow: hidden;
  box-shadow: 0 9px 15px ${DADOS.cores.sombra};
  transition: transform .15s ease, box-shadow .15s ease;
}
.botao-ano:hover { transform: translateY(-4px); box-shadow: 0 13px 20px ${DADOS.cores.sombraForte}; }
.icone-ano {
  width: ${DADOS.dimensoes.tamanhoIconAnoDesktop}px; height: ${DADOS.dimensoes.tamanhoIconAnoDesktop}px;
  flex: 0 0 ${DADOS.dimensoes.tamanhoIconAnoDesktop}px; display: grid; place-items: center; position: relative; z-index: 1;
}
.icone-ano img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 5px 3px rgba(0,0,0,.16)); }
.texto-ano { position: relative; z-index: 1; text-align: center; }
.nome-ano { font-size: clamp(21px, 1.8vw, 29px); font-weight: 800; text-shadow: 0 2px 1px rgba(0,0,0,.17); }
.idade-ano { margin-top: 7px; font-size: clamp(14px, 1.2vw, 18px); font-weight: 700; text-shadow: 0 1px 1px rgba(0,0,0,.12); }

.destaques {
  margin: 20px; padding: 23px 28px 25px; border-radius: ${DADOS.dimensoes.raioDestaques}px;
  background: rgba(255,255,255,.93); box-shadow: 0 7px 18px rgba(25,100,150,.10);
}
.titulo-destaques { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 28px; margin: 0 30px 25px; }
.titulo-destaques .linha { height: 3px; background: #A7D5FA; border-radius: 99px; }
.titulo-destaques h2 { margin: 0; color: #064F91; font-size: clamp(19px, 1.65vw, 26px); font-weight: 900; }
.jogos { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 20px; align-items: start; }
.jogo { display: flex; flex-direction: column; align-items: center; text-align: center; cursor: pointer; }
.icone-jogo { width: ${DADOS.dimensoes.tamanhoIconJogo}px; height: ${DADOS.dimensoes.tamanhoIconJogo}px; display: grid; place-items: center; margin-bottom: 10px; }
.icone-jogo img { width: 100%; height: 100%; object-fit: contain; }
.nome-jogo { margin-top: 0; min-height: 25px; color: #064F91; font-size: clamp(15px, 1.25vw, 20px); font-weight: 900; }
.estrelas { margin-top: 7px; color: #FFB400; font-size: clamp(15px, 1.15vw, 18px); letter-spacing: 1px; }

.rodape {
  width: calc(100% - 40px); min-height: 53px; margin: 15px 20px 0; padding: 8px 17px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 15px; align-items: center;
  border: 2px solid ${DADOS.cores.linha}; border-radius: 14px; background: rgba(255,255,255,.78);
  font-size: clamp(11px, 1vw, 14px); font-weight: 800;
}
.rodape-item { display: flex; align-items: center; gap: 8px; }
.rodape-info { justify-content: flex-end; }
.estrela { color: #FFB400; font-size: 25px; }
.info { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: #087AC9; font-size: 12px; font-weight: 900; }

/* AJUSTES PARA TELEMÓVEL VERTICAL (ÍCONES DOS CARTÕES OTIMIZADOS E PROPORCIONAIS) */
@media (max-width: 600px) and (orientation: portrait) {
  .cabecalho { height: 62px; }
  .botao-menu, .botao-seta { width: 43px; height: 43px; }
  .marca-sol { width: 36px; height: 36px; }
  .marca-texto h1 { font-size: 18px; }
  .marca-texto p { font-size: 9px; margin-top: 3px; }
  .menu-acordeao { top: 54px; left: 10px; width: calc(100vw - 20px); max-width: 300px; }
  
  .anos { grid-template-columns: 1fr; gap: 8px; }
  .botao-ano { height: 92px; padding: 8px 14px; gap: 10px; flex-direction: row; justify-content: flex-start; }
  
  /* Ícone do cartão em tamanho ideal para telemóvel vertical (não fica grande!) */
  .icone-ano { width: 52px; height: 52px; flex: 0 0 52px; }
  
  .nome-ano { font-size: 18px; }
  .idade-ano { font-size: 11px; margin-top: 2px; }
  
  .destaques { padding: 12px 10px; border-radius: 17px; }
  .jogos { grid-template-columns: repeat(3, 1fr); row-gap: 13px; }
  .nome-jogo { font-size: 11px; }
  .estrelas { font-size: 10px; }
}
  `;

  document.head.appendChild(estilo);
}

function preencherTextos() {
  // Altera o título da aba do browser dinamicamente
  if (DADOS.pagina.browserTitulo) {
    document.title = DADOS.pagina.browserTitulo;
  }

  const marca = document.querySelector("[data-marca]");
  const submarca = document.querySelector("[data-submarca]");
  const titulo = document.querySelector("[data-titulo-menu]");
  const mensagem = document.querySelector("[data-mensagem]");
  const informacao = document.querySelectorAll("[data-informacao]"); // Suporta múltiplos elementos se necessário

  if (marca) marca.textContent = DADOS.pagina.titulo;
  if (submarca) submarca.textContent = DADOS.pagina.subtitulo;
  if (titulo) titulo.textContent = DADOS.pagina.tituloMenu;
  if (mensagem) mensagem.textContent = DADOS.pagina.mensagem;
  
  informacao.forEach(el => {
    el.textContent = DADOS.pagina.informacao;
  });
}

function criarCartoesAno() {
  const recipiente = document.getElementById("anos");
  const modelo = document.getElementById("modelo-ano");
  if (!recipiente || !modelo) return;

  recipiente.innerHTML = "";
  DADOS.anos.forEach(ano => {
    const cartao = modelo.content.cloneNode(true);
    const botao = cartao.querySelector(".botao-ano");
    const icone = cartao.querySelector(".icone-ano");
    const texto = cartao.querySelector(".nome-ano");
    const idade = cartao.querySelector(".idade-ano");

    botao.style.setProperty("--cor-1", ano.cor);
    botao.style.setProperty("--cor-2", ano.cor2);

    const imagem = document.createElement("img");
    imagem.src = DADOS.icons.anos[ano.icon];
    imagem.alt = ano.nome;
    imagem.draggable = false;
    icone.appendChild(imagem);

    texto.textContent = ano.nome;
    idade.textContent = ano.idade;

    botao.addEventListener("click", () => { window.location.href = ano.pagina; });
    recipiente.appendChild(cartao);
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

function criarDestaques() {
  const recipiente = document.getElementById("jogos");
  const modelo = document.getElementById("modelo-jogo");
  if (!recipiente || !modelo) return;

  recipiente.innerHTML = "";
  DADOS.destaques.forEach(jogo => {
    const item = modelo.content.cloneNode(true);
    const imagem = item.querySelector(".icone-jogo img");
    const nome = item.querySelector(".nome-jogo");
    const estrelas = item.querySelector(".estrelas");

    imagem.src = DADOS.icons.destaques[jogo.icon];
    imagem.alt = jogo.nome;
    imagem.draggable = false;

    nome.textContent = jogo.nome;
    estrelas.textContent = "★".repeat(jogo.estrelas);

    if (jogo.pagina) {
      const cartao = item.querySelector(".jogo");
      if (cartao) {
        cartao.addEventListener("click", () => { window.location.href = jogo.pagina; });
      }
    }
    recipiente.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inserirCSS();
  preencherTextos();
  criarCartoesAno();
  criarMenuAnos();
  configurarMenu();
  criarDestaques();
});
