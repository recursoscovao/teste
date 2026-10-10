// Lista de palavras de Português de Portugal com contagem de sílabas
const listaPalavras = [
  { palavra: "Pão", silabas: 1 },
  { sol: "Sol", palavra: "Sol", silabas: 1 },
  { palavra: "Mão", silabas: 1 },
  { palavra: "Bola", silabas: 2 },
  { palavra: "Gato", silabas: 2 },
  { palavra: "Casa", silabas: 2 },
  { palavra: "Janela", silabas: 3 },
  { palavra: "Boneca", silabas: 3 },
  { palavra: "Caneta", silabas: 3 },
  { palavra: "Computador", silabas: 4 },
  { palavra: "Elefante", silabas: 4 },
  { palavra: "Borboleta", silabas: 4 }
];

let indiceAtual = 0;
let pontuacao = 0;
let palavraAtual = {};

function iniciarJogo() {
  // Baralhar as palavras para tornar o jogo dinâmico
  listaPalavras.sort(() => Math.random() - 0.5);
  indiceAtual = 0;
  pontuacao = 0;
  atualizarPontuacao();
  carregarNovaPalavra();
}

function carregarNovaPalavra() {
  if (indiceAtual >= listaPalavras.length) {
    indiceAtual = 0; // Reinicia o ciclo se acabar
    listaPalavras.sort(() => Math.random() - 0.5);
  }

  palavraAtual = listaPalavras[indiceAtual];
  document.getElementById("palavra-alvo").textContent = palavraAtual.palavra;
  document.getElementById("feedback").textContent = "";
}

function verificarResposta(silabasEscolhidas) {
  const feedbackEl = document.getElementById("feedback");

  if (silabasEscolhidas === palavraAtual.silabas) {
    pontuacao += 10;
    feedbackEl.style.color = "#28A745";
    feedbackEl.textContent = "🎉 Muito bem! Resposta certa!";
    atualizarPontuacao();

    setTimeout(() => {
      indiceAtual++;
      carregarNovaPalavra();
    }, 1200);
  } else {
    feedbackEl.style.color = "#DC3545";
    feedbackEl.textContent = `❌ Quase! Tem ${palavraAtual.silabas} sílabas. Tenta outra!`;
  }
}

function atualizarPontuacao() {
  document.getElementById("pontuacao").textContent = `Pontos: ${pontuacao}`;
}

// Iniciar o jogo quando a página estiver pronta
document.addEventListener("DOMContentLoaded", iniciarJogo);
