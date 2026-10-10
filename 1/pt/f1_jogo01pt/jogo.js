let rondaAtual = 1;
let pontuacao = 0;
let indicePalavra = 0;

function inicializarJogo() {
  document.getElementById("nome-jogo").textContent = DADOS_JOGO.informacoes.tituloJogo;
  carregarRonda();
}

function carregarRonda() {
  if (rondaAtual > DADOS_JOGO.informacoes.totalRondas) {
    mostrarFimJogo();
    return;
  }

  const item = DADOS_JOGO.palavras[indicePalavra % DADOS_JOGO.palavras.length];
  document.getElementById("palavra-alvo").textContent = item.palavra;
  document.getElementById("feedback").textContent = "";

  atualizarBarraProgresso();
}

function responder(opcaoseleccionada) {
  const item = DADOS_JOGO.palavras[indicePalavra % DADOS_JOGO.palavras.length];
  const feedbackEl = document.getElementById("feedback");

  if (opcaoseleccionada === item.silabas) {
    pontuacao += 10;
    document.getElementById("pontos-contador").textContent = pontuacao;
    feedbackEl.style.color = "#28A745";
    feedbackEl.textContent = "🎉 Certo! Muito bem!";

    setTimeout(() => {
      rondaAtual++;
      indicePalavra++;
      carregarRonda();
    }, 1000);
  } else {
    feedbackEl.style.color = "#E74C3C";
    feedbackEl.textContent = "❌ Tenta outra vez!";
  }
}

function atualizarBarraProgresso() {
  const total = DADOS_JOGO.informacoes.totalRondas;
  const percentagem = (rondaAtual / total) * 100;
  document.getElementById("barra-progresso").style.width = percentagem + "%";
  document.getElementById("texto-ronda").textContent = `${rondaAtual}/${total}`;
}

function mostrarFimJogo() {
  const recetor = document.querySelector(".recetor-jogo");
  recetor.innerHTML = `
    <h2>🏆 Parabéns!</h2>
    <p class="instrucao">Completaste as ${DADOS_JOGO.informacoes.totalRondas} rondas!</p>
    <p style="font-size:24px; font-weight:900; color:#0F8BD3; margin-bottom:20px;">Pontuação Final: ${pontuacao} pontos</p>
    <button class="botao-resposta" onclick="location.reload()">Jogar Novamente</button>
  `;
}

function tocarSom() {
  alert("A reproduzir áudio da palavra...");
}

function mostrarAjuda() {
  alert("Conta quantas vezes abres a boca para pronunciar a palavra!");
}
