// ==========================================
// CONFIGURAÇÕES E ESTADO GLOBAL DO JOGO
// ==========================================
const JOGO_CONFIG = {
  nomeDoJogo: "Grafismos Divertidos",
  descricao: "Treina os teus traços e diverte-te a completar os grafismos seguindo as linhas com precisão!",
  caminhoSons: "../../../../icons/", // Ajustado conforme a estrutura de pastas
  caminhoIconsMenu: "../../../../icons/",
  sons: {
    acerto: "em.png", // Substituir pelo som correto se necessário
    erro: "gatos&caes.png",
    clique: "avancorrio.png"
  },
  relatorios: [
    { min: 0, max: 5, mensagem: "Continua a treinar, tu consegues!" },
    { min: 6, max: 9, mensagem: "Muito bem! Excelente trabalho!" },
    { min: 10, max: 10, mensagem: "Perfeito! És um verdadeiro artista!" }
  ]
};

const DADOS_JOGO = {
  somInstrucoes: "em.png"
};

let jogoAtivo = false;
let rondaAtual = 1, totalRondas = 10, certos = 0, erros = 0, ajudasUsadas = 0;
let itemDestaque = null;
let audioInstrucoes = null;

let canvas, ctx;
let isDrawing = false;
let ajudaEmCurso = false; 
let posFinalX = 0, posFinalY = 0;
let posAtualX = 0, posAtualY = 0;

let pontosCaminho = []; 
let saiuDoCaminho = false;
let simuTimer = null; 
let sequenciaNiveis = [];

// ==========================================
// ESTILOS VISUAIS INJETADOS
// ==========================================
const style = document.createElement('style');
style.innerHTML = `
    .grafismo-area {
        position: relative; width: 100%; max-width: 750px; height: 280px;
        background: #fdfdfd; border: 4px dashed #B4E4F8; border-radius: 20px;
        margin: 0 auto; display: flex; justify-content: space-between; align-items: center;
        padding: 0 40px; overflow: hidden;
    }

    .ponto-inicio {
        width: 35px; height: 35px; border-radius: 50%; 
        background: #0F8BD3; border: 4px solid #fff; 
        box-shadow: 0 0 0 5px rgba(15,139,211,0.3), 0 4px 10px rgba(0,0,0,0.2); 
        z-index: 10; position: relative; flex-shrink: 0;
    }
    
    .ponto-fim { 
        font-size: 3rem; color: #d0d0d0; z-index: 10; position: relative; 
        transition: 0.3s; flex-shrink: 0; display: flex; align-items: center; justify-content: center;
    }

    .animating { animation: pulse 1s infinite alternate; }
    @keyframes pulse { from { transform: scale(1); } to { transform: scale(1.3); } }

    canvas { position: absolute; top: 0; left: 0; z-index: 5; cursor: pointer; touch-action: none; }
    canvas:active { cursor: grabbing; }

    /* Barra Superior Personalizada Estilo Rosa/Fuchsia da Imagem */
    .barra-jogo-topo {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #E81C82;
      padding: 10px 16px;
      border-radius: 40px;
      box-shadow: inset 0 3px 5px rgba(0,0,0,0.2);
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }

    .bloco-estrelas-pontos {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #B80F5D;
      padding: 6px 16px;
      border-radius: 25px;
      color: #FFFFFF;
      font-weight: 900;
      font-size: 18px;
    }

    .estrelas-nivel {
      display: flex;
      gap: 4px;
      font-size: 18px;
      opacity: 0.5;
    }
    .estrelas-nivel .ativa { opacity: 1; }

    .container-progresso-jogo {
      flex: 1;
      max-width: 200px;
      height: 16px;
      background: #B80F5D;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
    }

    .barra-progresso-interna {
      width: 0%;
      height: 100%;
      background: #FFD700;
      border-radius: 10px;
      transition: width 0.3s ease;
    }

    .contador-rondas {
      background: #B80F5D;
      color: #FFFFFF;
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 900;
      font-size: 15px;
    }

    .botoes-acao-jogo {
      display: flex;
      gap: 8px;
    }

    .botao-acao-jogo {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: #B80F5D;
      color: #FFFFFF;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      transition: transform 0.1s ease;
    }
    .botao-acao-jogo:active { transform: scale(0.92); }

    @media screen and (max-width: 500px) {
        .grafismo-area { height: 200px; padding: 0 20px; }
        .ponto-inicio { width: 25px; height: 25px; }
        .ponto-fim { font-size: 2rem; }
    }
`;
document.head.appendChild(style);

// ==========================================
// GESTÃO DE ESTADOS DO JOGO (ENGINE SIMULADA)
// ==========================================
const Engine = {
  showStatusBar: (ronda, total, c, e) => {
    const progressoPercent = ((ronda - 1) / total) * 100;
    const barraInt = document.getElementById('barra-progresso-interna');
    const rondasEl = document.getElementById('contador-rondas');
    const pontosEl = document.getElementById('pontos-jogo');
    
    if (barraInt) barraInt.style.width = `${progressoPercent}%`;
    if (rondasEl) rondasEl.textContent = `${ronda}/${total}`;
    if (pontosEl) pontosEl.textContent = c * 10;
  },

  showResults: (c, e, ajudas, rel) => {
    const contentor = document.getElementById('contentor-jogo');
    if (!contentor) return;
    contentor.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#062B42; text-align:center; padding:20px;">
        <h2 style="font-size: 2.2rem; font-weight:900; margin-bottom:10px;">Fim do Jogo! 🎉</h2>
        <p style="font-size: 1.3rem; font-weight:800; margin-bottom:20px;">${rel.mensagem}</p>
        <p style="font-size: 1.1rem; font-weight:700;">Acertos: ${c} | Erros: ${e}</p>
        <button onclick="iniciarJogo()" style="margin-top:20px; padding:12px 30px; border-radius:25px; background:#0F8BD3; color:#fff; border:none; font-weight:900; font-size:1.1rem; cursor:pointer;">Jogar Novamente</button>
      </div>
    `;
  }
};

// ==========================================
// INICIALIZAÇÃO E CAPA DO JOGO
// ==========================================
function carregarCapaJogo() {
  const contentor = document.getElementById('contentor-jogo');
  if (!contentor) return;

  contentor.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:100%; padding: 10px;">
        <div class="grafismo-area" id="simu-area" style="transform: scale(0.9); height: 200px; margin-bottom: 10px;">
            <div class="ponto-inicio" id="simu-inicio"></div>
            <canvas id="simu-canvas"></canvas>
            <div class="ponto-fim" id="simu-fim">➡️</div>
            <div id="simu-hand" style="position:absolute; font-size:2.5rem; z-index:100; pointer-events:none; transition: opacity 0.3s;">👆</div>
        </div>
        <p style="color:#062B42; font-weight:800; text-align:center; font-size:1.1rem; max-width: 500px; margin-bottom: 15px;">
            ${JOGO_CONFIG.descricao}
        </p>
        <button class="btn-play-rect" onclick="iniciarJogo()" style="padding: 12px 35px; border-radius: 25px; background: #0F8BD3; color: white; border: none; font-size: 1.3rem; font-weight: 900; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">JOGAR</button>
    </div>
  `;

  setTimeout(iniciarSimulacaoAnimada, 100);
}

function iniciarSimulacaoAnimada() {
    const sCanvas = document.getElementById('simu-canvas');
    if(!sCanvas) return;
    const sCtx = sCanvas.getContext('2d');
    const sArea = document.getElementById('simu-area');
    
    sCanvas.width = sArea.clientWidth; sCanvas.height = sArea.clientHeight;
    
    const startEl = document.getElementById('simu-inicio');
    const endEl = document.getElementById('simu-fim');
    
    const startX = startEl.offsetLeft + (startEl.offsetWidth / 2);
    const startY = sCanvas.height / 2; 
    const endX = endEl.offsetLeft + 5;
    const endY = sCanvas.height / 2;

    const path = gerarPontosGrafismos("trapezio", startX, startY, endX, endY);
    
    function desenhaFundo(ctx) {
        ctx.beginPath(); ctx.setLineDash([12, 12]); ctx.lineWidth = 5; ctx.strokeStyle = "#c0c0c0";
        ctx.moveTo(path[0].x, path[0].y); path.forEach(p => ctx.lineTo(p.x, p.y)); ctx.stroke(); ctx.setLineDash([]);
    }

    desenhaFundo(sCtx);

    const hand = document.getElementById('simu-hand');
    let step = 0;
    
    function animar() {
        if (!document.getElementById('simu-canvas')) return; 
        if (step === 0) {
            sCtx.clearRect(0,0, sCanvas.width, sCanvas.height);
            desenhaFundo(sCtx);
            sCtx.beginPath(); sCtx.lineWidth = 12; sCtx.strokeStyle = "#0F8BD3"; sCtx.lineCap = "round"; sCtx.lineJoin = "round";
            sCtx.moveTo(path[0].x, path[0].y);
            if (hand) { hand.style.opacity = 1; hand.innerText = "👆"; }
        }

        if (step < path.length && hand) {
            const pt = path[step];
            hand.style.left = (pt.x - 15) + "px"; 
            hand.style.top = (pt.y - 5) + "px"; 
            if(step > 5) hand.innerText = "✊"; 
            sCtx.lineTo(pt.x, pt.y); sCtx.stroke();
            step++;
            simuTimer = setTimeout(animar, 15); 
        } else if (hand) {
            hand.style.opacity = 0; step = 0;
            simuTimer = setTimeout(animar, 1500); 
        }
    }
    animar();
}

// ==========================================
// LÓGICA DO JOGO PRINCIPAL
// ==========================================
function iniciarJogo() {
    clearTimeout(simuTimer); 
    jogoAtivo = true; rondaAtual = 1; certos = 0; erros = 0; ajudasUsadas = 0; 
    totalRondas = 10; 
    ajudaEmCurso = false;
    
    const padroes = ["reta", "quadrado", "quadrado_inv", "ziguezague", "dente_vert", "dente_diag", "trapezio"];
    sequenciaNiveis = [];
    let deck = [...padroes, ...padroes]; 
    deck.sort(() => Math.random() - 0.5);
    for(let i=0; i<10; i++) sequenciaNiveis.push({ tipo: deck[i] });

    proximaRonda();
}

function proximaRonda() {
    if (rondaAtual > totalRondas) { finalizarJogo(); return; }
    
    ajudaEmCurso = false;
    const contentor = document.getElementById('contentor-jogo');
    itemDestaque = sequenciaNiveis[rondaAtual - 1]; 
    
    contentor.innerHTML = `
      <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; width:100%;">
        <div class="barra-jogo-topo">
          <div class="bloco-estrelas-pontos">
            <span>⭐</span>
            <span id="pontos-jogo">0</span>
          </div>
          <div class="estrelas-nivel">
            <span class="ativa">⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <div class="container-progresso-jogo">
            <div class="barra-progresso-interna" id="barra-progresso-interna"></div>
          </div>
          <div class="contador-rondas" id="contador-rondas">${rondaAtual}/${totalRondas}</div>
          <div class="botoes-acao-jogo">
            <button class="botao-acao-jogo" onclick="tocarAudioInstrucoes()">🔊</button>
            <button class="botao-acao-jogo" onclick="darAjuda()">❓</button>
          </div>
        </div>

        <div class="grafismo-area" id="area-desenho">
            <div class="ponto-inicio" id="ponto-inicio"></div>
            <canvas id="linhaCanvas"></canvas>
            <div class="ponto-fim" id="ponto-fim">➡️</div>
            <div id="game-hand" style="position:absolute; font-size:2.5rem; z-index:100; pointer-events:none; opacity:0; transition: opacity 0.3s;">👆</div>
        </div>
      </div>
    `;

    Engine.showStatusBar(rondaAtual, totalRondas, certos, erros);
    setTimeout(configurarCanvas, 100); 
}

function desenharGuiasJogo() {
    ctx.beginPath(); ctx.lineWidth = 35; ctx.strokeStyle = "#ffffff"; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.moveTo(pontosCaminho[0].x, pontosCaminho[0].y);
    pontosCaminho.forEach(pt => ctx.lineTo(pt.x, pt.y));
    ctx.stroke();

    ctx.beginPath(); ctx.setLineDash([12, 12]); ctx.lineWidth = 5; ctx.strokeStyle = "#c0c0c0"; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.moveTo(pontosCaminho[0].x, pontosCaminho[0].y);
    pontosCaminho.forEach(pt => ctx.lineTo(pt.x, pt.y));
    ctx.stroke(); ctx.setLineDash([]);
}

function configurarCanvas() {
    const container = document.getElementById('area-desenho');
    canvas = document.getElementById('linhaCanvas');
    if (!canvas || !container) return;
    ctx = canvas.getContext('2d');
    canvas.width = container.clientWidth; canvas.height = container.clientHeight;

    const startEl = document.getElementById('ponto-inicio');
    const endEl = document.getElementById('ponto-fim');
    
    const startX = startEl.offsetLeft + (startEl.offsetWidth / 2);
    const startY = canvas.height / 2;
    posFinalX = endEl.offsetLeft + 5; 
    posFinalY = canvas.height / 2;

    pontosCaminho = gerarPontosGrafismos(itemDestaque.tipo, startX, startY, posFinalX, posFinalY);
    desenharGuiasJogo();

    canvas.addEventListener('mousedown', startDrawing); canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing); canvas.addEventListener('mouseleave', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing, {passive: false});
    canvas.addEventListener('touchmove', draw, {passive: false});
    canvas.addEventListener('touchend', stopDrawing);
}

function gerarPontosGrafismos(tipo, sX, sY, eX, eY) {
    let nodes = [];
    const w = eX - sX;
    const h = 70; 
    const ciclos = 3; 
    const cw = w / ciclos;

    nodes.push({x: sX, y: sY}); 

    if (tipo === "reta") nodes.push({x: eX, y: eY});
    else if (tipo === "quadrado") { 
        for(let i=0; i<ciclos; i++) {
            let bx = sX + (i * cw);
            nodes.push({x: bx, y: sY - h}); nodes.push({x: bx + cw/2, y: sY - h});
            nodes.push({x: bx + cw/2, y: sY}); nodes.push({x: bx + cw, y: sY});
        }
    }
    else if (tipo === "quadrado_inv") { 
        for(let i=0; i<ciclos; i++) {
            let bx = sX + (i * cw);
            nodes.push({x: bx, y: sY + h}); nodes.push({x: bx + cw/2, y: sY + h});
            nodes.push({x: bx + cw/2, y: sY}); nodes.push({x: bx + cw, y: sY});
        }
    }
    else if (tipo === "trapezio") { 
        for(let i=0; i<ciclos; i++) {
            let bx = sX + (i * cw);
            nodes.push({x: bx + cw*0.25, y: sY - h}); nodes.push({x: bx + cw*0.75, y: sY - h}); nodes.push({x: bx + cw, y: sY});
        }
    }
    else if (tipo === "ziguezague") { 
        let picos = 3; let zw = w / (picos * 2); 
        for(let i=1; i<=picos*2; i++) nodes.push({x: sX + (i*zw), y: (i%2 !== 0) ? sY - h : sY});
    }
    else if (tipo === "dente_vert") { 
        for(let i=0; i<ciclos; i++) {
            let bx = sX + (i * cw);
            nodes.push({x: bx, y: sY - h}); nodes.push({x: bx + cw, y: sY});
        }
    }
    else if (tipo === "dente_diag") { 
        for(let i=0; i<ciclos; i++) {
            let bx = sX + (i * cw);
            nodes.push({x: bx + cw, y: sY - h}); nodes.push({x: bx + cw, y: sY});
        }
    }

    nodes.push({x: eX, y: eY}); 

    let pts = []; let totalDist = 0; let segDist = [];
    for(let i = 0; i < nodes.length - 1; i++) {
        let d = Math.hypot(nodes[i+1].x - nodes[i].x, nodes[i+1].y - nodes[i].y);
        totalDist += d; segDist.push(d);
    }

    const steps = 150;
    for(let i = 0; i <= steps; i++) {
        let targetD = totalDist * (i / steps); let currD = 0;
        for(let j = 0; j < nodes.length - 1; j++) {
            if (currD + segDist[j] >= targetD || j === nodes.length - 2) {
                let prog = Math.max(0, Math.min(1, (targetD - currD) / segDist[j]));
                pts.push({ x: nodes[j].x + (nodes[j+1].x - nodes[j].x) * prog, y: nodes[j].y + (nodes[j+1].y - nodes[j].y) * prog, hit: false });
                break;
            }
            currD += segDist[j];
        }
    }
    return pts;
}

function getClientOffset(e) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

function startDrawing(e) {
    if (!jogoAtivo || ajudaEmCurso) return; 
    e.preventDefault();
    
    const pos = getClientOffset(e);
    const startPt = pontosCaminho[0];
    if (Math.hypot(pos.x - startPt.x, pos.y - startPt.y) > 50) return; 

    isDrawing = true; saiuDoCaminho = false;
    pontosCaminho.forEach(p => p.hit = false); 
    posAtualX = pos.x; posAtualY = pos.y;
    
    ctx.beginPath(); ctx.moveTo(pos.x, pos.y);
    ctx.lineWidth = 12; ctx.strokeStyle = "#0F8BD3"; ctx.lineCap = "round"; ctx.lineJoin = "round";
}

function draw(e) {
    if (!isDrawing || !jogoAtivo || ajudaEmCurso) return;
    e.preventDefault();
    const pos = getClientOffset(e);
    
    let dist = Math.hypot(pos.x - posAtualX, pos.y - posAtualY);
    let steps = Math.max(1, Math.floor(dist / 5)); 
    
    for(let s = 1; s <= steps; s++) {
        let chkX = posAtualX + (pos.x - posAtualX)*(s/steps); let chkY = posAtualY + (pos.y - posAtualY)*(s/steps);
        
        let minDist = Infinity; let closestIdx = -1;
        for(let i=0; i<pontosCaminho.length; i++) {
            let d = Math.hypot(chkX - pontosCaminho[i].x, chkY - pontosCaminho[i].y);
            if(d < minDist) { minDist = d; closestIdx = i; }
        }
        
        if (minDist > 40) saiuDoCaminho = true; 
        else if (closestIdx !== -1) pontosCaminho[closestIdx].hit = true; 
    }
    posAtualX = pos.x; posAtualY = pos.y;
    ctx.lineTo(pos.x, pos.y); ctx.stroke();
}

function stopDrawing(e) {
    if (!isDrawing || ajudaEmCurso) return;
    isDrawing = false;
    ctx.closePath();
    avaliarJogada();
}

function avaliarJogada() {
    const distanciaFim = Math.hypot(posFinalX - posAtualX, posFinalY - posAtualY);
    let pontosAtingidos = pontosCaminho.filter(p => p.hit).length;
    let accuracia = pontosAtingidos / pontosCaminho.length;
    let accuraciaNecessaria = (itemDestaque.tipo === "reta") ? 0.40 : 0.70;
    
    if (distanciaFim < 80 && accuracia >= accuraciaNecessaria && !saiuDoCaminho) {
        jogoAtivo = false; certos++; 
        const endEl = document.getElementById('ponto-fim');
        if (endEl) { endEl.style.color = "#8cc63f"; endEl.classList.add('animating'); }
        
        setTimeout(() => { rondaAtual++; jogoAtivo = true; proximaRonda(); }, 1500);
    } else {
        erros++; 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        desenharGuiasJogo(); 
        Engine.showStatusBar(rondaAtual, totalRondas, certos, erros);
    }
}

function darAjuda() {
    if (!jogoAtivo || ajudaEmCurso) return;
    ajudasUsadas++; 
    ajudaEmCurso = true;
    isDrawing = false; 
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharGuiasJogo();
    
    const hand = document.getElementById('game-hand');
    if(hand) { hand.style.opacity = 1; hand.innerText = "👆"; }
    
    let step = 0;
    function animarAjuda() {
        if (!jogoAtivo || !document.getElementById('game-hand')) {
            ajudaEmCurso = false; return;
        }
        
        if (step === 0) {
            ctx.beginPath(); ctx.lineWidth = 12; ctx.strokeStyle = "#0F8BD3"; 
            ctx.lineCap = "round"; ctx.lineJoin = "round";
            ctx.moveTo(pontosCaminho[0].x, pontosCaminho[0].y);
        }

        if (step < pontosCaminho.length && hand) {
            const pt = pontosCaminho[step];
            hand.style.left = (pt.x - 15) + "px"; 
            hand.style.top = (pt.y - 5) + "px";
            if(step > 5) hand.innerText = "✊"; 
            ctx.lineTo(pt.x, pt.y); ctx.stroke();
            
            step += 2; 
            if (step >= pontosCaminho.length) step = pontosCaminho.length - 1;
            
            if (step < pontosCaminho.length - 1) {
                setTimeout(animarAjuda, 12); 
            } else {
                const lastPt = pontosCaminho[pontosCaminho.length - 1];
                hand.style.left = (lastPt.x - 15) + "px"; hand.style.top = (lastPt.y - 5) + "px";
                ctx.lineTo(lastPt.x, lastPt.y); ctx.stroke();
                
                setTimeout(() => {
                    hand.style.opacity = 0;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    desenharGuiasJogo();
                    ajudaEmCurso = false; 
                }, 800);
            }
        }
    }
    animarAjuda();
}

function tocarAudioInstrucoes() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance("Começa na bola e arrasta o dedo pela linha até à seta, sem saíres do traço!");
    utter.lang = 'pt-PT'; window.speechSynthesis.speak(utter);
}

function finalizarJogo() {
    jogoAtivo = false;
    const rel = JOGO_CONFIG.relatorios.find(r => certos >= r.min && certos <= r.max);
    Engine.showResults(certos, erros, ajudasUsadas, rel);
}

// Iniciar a capa logo após carregar o script
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(carregarCapaJogo, 200);
});

// Se já estiver carregado, dispara de imediato
if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(carregarCapaJogo, 200);
}
