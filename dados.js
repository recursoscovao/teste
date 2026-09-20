```javascript
/*
================================================================
 RECURSOS Covão — DADOS E APRESENTAÇÃO
================================================================

 A estrutura HTML está em index.html.

 ORGANIZAÇÃO DESTE FICHEIRO:

 1. CONFIGURAÇÃO
 2. TEXTOS
 3. ICONS — TODOS OS CAMINHOS
 4. LINKS — TODOS OS LINKS
 5. CORES
 6. DIMENSÕES
 7. ANOS
 8. JOGOS EM DESTAQUE
 9. CSS
10. JAVASCRIPT

 Assim, para alterar um icon ou um link,
 basta procurar a respetiva secção no início do ficheiro.
================================================================
*/


/* ============================================================
   1. CONFIGURAÇÃO
   ============================================================ */

const DADOS = {


  /* ==========================================================
     2. TEXTOS
     ========================================================== */

  pagina: {

    titulo: "Recursos Covão",

    subtitulo:
      "Aprender • Explorar • Descobrir",

    tituloMenu:
      "Escolhe o ano",

    mensagem:
      "Escolhe o ano e comece a aprender!",

    informacao:
      "Recursos educativos para o 1.º ciclo"

  },


  /* ==========================================================
     3. ICONS — TODOS OS CAMINHOS
     ==========================================================

     ALTERAR ICONS:
     Basta alterar o caminho entre aspas.

     Exemplo:

     ano1: "icons/novo-icon1.png"

  ========================================================== */

  icons: {

    /* --------------------------------------------------------
       ICONS DOS ANOS
       -------------------------------------------------------- */

    anos: {

      pre:
        "icons/iconpre.png",

      ano1:
        "icons/icon1.png",

      ano2:
        "icons/icon2.png",

      ano3:
        "icons/icon3.png",

      ano4:
        "icons/icon4.png"

    },


    /* --------------------------------------------------------
       ICONS DOS JOGOS EM DESTAQUE
       -------------------------------------------------------- */

    destaques: {

      rastros:
        "icons/rastros.png",

      gatosCaes:
        "icons/gatos&caes.png",

      dominorio:
        "icons/dominorio.png",

      semaforo:
        "icons/semaforo.png",

      quelhas:
        "icons/quelhas.png",

      avanco:
        "icons/avanco.png"

    },


    /* --------------------------------------------------------
       ICON DAS NUVENS
       -------------------------------------------------------- */

    nuvem:
      "icons/nuvem.png"

  },


  /* ==========================================================
     4. LINKS — TODOS OS LINKS
     ==========================================================

     ALTERAR LINKS:
     Todos os links estão reunidos aqui.

     Não é necessário procurar os links no código.

  ========================================================== */

  links: {


    /* --------------------------------------------------------
       PÁGINAS DOS ANOS
       -------------------------------------------------------- */

    anos: {

      pre:
        "pre,

      ano1:
        "1",

      ano2:
        "ano-2.html",

      ano3:
        "ano-3.html",

      ano4:
        "ano-4.html"

    },


    /* --------------------------------------------------------
       JOGOS EM DESTAQUE
       --------------------------------------------------------

       Coloca aqui o endereço de cada jogo.

       Pode ser:

       "jogos/rastros/index.html"

       ou:

       "https://recursosdigitaiscovao.github.io/..."

    -------------------------------------------------------- */

    destaques: {

      rastros:
        "#",

      gatosCaes:
        "#",

      dominorio:
        "#",

      semaforo:
        "#",

      quelhas:
        "#",

      avanco:
        "#"

    }

  },


  /* ==========================================================
     5. NUVENS
     ========================================================== */

  nuvens: {

    quantidade: 3,

    larguraMin: 72,

    larguraMax: 125,

    alturaMin: 38,

    alturaMax: 66,

    topoMin: 24,

    topoMax: 145,

    margemHorizontal: 12

  },


  /* ==========================================================
     6. CORES
     ========================================================== */

  cores: {

    fundo: "#EAF5FC",

    ceu1: "#78DDF7",

    ceu2: "#BCEEF9",

    texto: "#07569A",

    textoEscuro: "#064B8A",

    branco: "#FFFFFF",

    amarelo: "#FFBA16",

    amarelo2: "#EF8709",

    azul: "#20B9EF",

    azul2: "#087AC9",

    verde: "#45C83D",

    verde2: "#169A3A",

    roxo: "#A74BEF",

    roxo2: "#7434B8",

    rosa: "#F43A9D",

    rosa2: "#C81970",

    creme: "#FFF9E1",

    creme2: "#F5D996",

    linha: "#A5D9F8",

    sombra:
      "rgba(15, 88, 139, .20)",

    sombraForte:
      "rgba(15, 88, 139, .30)"

  },


  /* ==========================================================
     7. DIMENSÕES
     ========================================================== */

  dimensoes: {

    larguraMaxima: 1650,

    alturaAnoDesktop: 300,

    alturaAnoTabletHorizontal: 245,

    alturaAnoTelemovelHorizontal: 175,

    raioAno: 23,

    raioDestaques: 26,

    tamanhoIconAnoDesktop: 128,

    tamanhoIconAnoTablet: 100,

    tamanhoIconAnoTelemovelHorizontal: 76,

    tamanhoIconJogo: 76,

    tamanhoIconJogoTablet: 64,

    tamanhoIconJogoTelemovel: 54

  },


  /* ==========================================================
     8. ANOS
     ========================================================== */

  anos: [

    {
      id: "pre",

      nome: "Pré-Escolar",

      idade: "3 – 5 anos",

      icon: "pre",

      cor: "#FFBA16",

      cor2: "#EF8709",

      link: "pre"

    },

    {
      id: "ano1",

      nome: "1.º Ano",

      idade: "6 – 7 anos",

      icon: "ano1",

      cor: "#20B9EF",

      cor2: "#087AC9",

      link: "ano1"

    },

    {
      id: "ano2",

      nome: "2.º Ano",

      idade: "7 – 8 anos",

      icon: "ano2",

      cor: "#45C83D",

      cor2: "#169A3A",

      link: "ano2"

    },

    {
      id: "ano3",

      nome: "3.º Ano",

      idade: "8 – 9 anos",

      icon: "ano3",

      cor: "#A74BEF",

      cor2: "#7434B8",

      link: "ano3"

    },

    {
      id: "ano4",

      nome: "4.º Ano",

      idade: "9 – 10 anos",

      icon: "ano4",

      cor: "#F43A9D",

      cor2: "#C81970",

      link: "ano4"

    }

  ],


  /* ==========================================================
     9. JOGOS EM DESTAQUE
     ========================================================== */

  destaques: [

    {
      id: "rastros",

      nome: "Rastros",

      icon: "rastros",

      link: "rastros",

      estrelas: 5

    },

    {
      id: "gatosCaes",

      nome: "Gatos&Cães",

      icon: "gatosCaes",

      link: "gatosCaes",

      estrelas: 5

    },

    {
      id: "dominorio",

      nome: "Dominório",

      icon: "dominorio",

      link: "dominorio",

      estrelas: 5

    },

    {
      id: "semaforo",

      nome: "Semáforo",

      icon: "semaforo",

      link: "semaforo",

      estrelas: 5

    },

    {
      id: "quelhas",

      nome: "Quellhas",

      icon: "quelhas",

      link: "quelhas",

      estrelas: 5

    },

    {
      id: "avanco",

      nome: "Avanço",

      icon: "avanco",

      link: "avanco",

      estrelas: 5

    }

  ]

};
```

### O que muda na prática

Agora, no início do ficheiro, tens uma zona muito simples:

**ICONS**

```javascript
icons: {

  anos: {
    pre: "icons/iconpre.png",
    ano1: "icons/icon1.png",
    ano2: "icons/icon2.png",
    ano3: "icons/icon3.png",
    ano4: "icons/icon4.png"
  },

  destaques: {
    rastros: "icons/rastros.png",
    gatosCaes: "icons/gatos&caes.png",
    dominorio: "icons/dominorio.png",
    semaforo: "icons/semaforo.png",
    quelhas: "icons/quelhas.png",
    avanco: "icons/avanco.png"
  },

  nuvem: "icons/nuvem.png"

},
```

E logo a seguir:

**LINKS**

```javascript
links: {

  anos: {
    pre: "pre-escolar.html",
    ano1: "ano-1.html",
    ano2: "ano-2.html",
    ano3: "ano-3.html",
    ano4: "ano-4.html"
  },

  destaques: {
    rastros: "#",
    gatosCaes: "#",
    dominorio: "#",
    semaforo: "#",
    quelhas: "#",
    avanco: "#"
  }

},
```

Assim, quando quiseres mudar um icon, vais **sempre à secção ICONS**.
Quando quiseres mudar um endereço, vais **sempre à secção LINKS**.

**Importante:** neste momento coloquei `"#"` nos jogos porque não tenho os endereços que queres usar para cada um. Não vou inventar esses links.

### E há uma alteração necessária no JavaScript

Como queremos que **o icon inteiro do jogo em destaque seja clicável**, a função `criarDestaques()` deve criar o link usando `jogo.link`.

E nos anos vamos deixar de guardar o endereço diretamente em cada ano: o `link: "ano1"` vai procurar o endereço na secção `links.anos`.

Portanto, **não precisas de alterar o teu CSS**. Só substituímos as duas funções por estas:

```javascript
/* ============================================================
   CRIAR CARTÕES DOS ANOS
   ============================================================ */

function criarCartoesAno() {

  const zona =
    document.querySelector("#anos");

  const modelo =
    document.querySelector("#modelo-ano");

  DADOS.anos.forEach((ano) => {

    const fragmento =
      modelo.content.cloneNode(true);

    const artigo =
      fragmento.querySelector(".ano");

    const botao =
      fragmento.querySelector(".botao-ano");

    const caixaIcon =
      fragmento.querySelector(".icone-ano");

    artigo.dataset.ano =
      ano.id;

    botao.style.setProperty(
      "--cor-1",
      ano.cor
    );

    botao.style.setProperty(
      "--cor-2",
      ano.cor2
    );

    botao.setAttribute(
      "aria-label",
      `${ano.nome}, ${ano.idade}`
    );

    const img =
      document.createElement("img");

    img.src =
      DADOS.icons.anos[ano.icon];

    img.alt = "";

    img.draggable = false;

    caixaIcon.appendChild(img);

    fragmento
      .querySelector(".nome-ano")
      .textContent =
      ano.nome;

    fragmento
      .querySelector(".idade-ano")
      .textContent =
      ano.idade;

    /* --------------------------------------------------------
       LINK DO ANO
       -------------------------------------------------------- */

    botao.addEventListener(
      "click",
      () => {

        window.location.href =
          DADOS.links.anos[ano.link];

      }
    );

    zona.appendChild(fragmento);

  });
}


/* ============================================================
   CRIAR DESTAQUES
   ============================================================ */

function criarDestaques() {

  const zona =
    document.querySelector("#jogos");

  const modelo =
    document.querySelector("#modelo-jogo");

  DADOS.destaques.forEach((jogo) => {

    const fragmento =
      modelo.content.cloneNode(true);

    const artigo =
      fragmento.querySelector(".jogo");

    const img =
      fragmento.querySelector(
        ".icone-jogo img"
      );

    const nome =
      fragmento.querySelector(
        ".nome-jogo"
      );

    const estrelas =
      fragmento.querySelector(
        ".estrelas"
      );


    /* --------------------------------------------------------
       ICON
       -------------------------------------------------------- */

    img.src =
      DADOS.icons.destaques[jogo.icon];

    img.alt =
      jogo.nome;


    /* --------------------------------------------------------
       NOME
       -------------------------------------------------------- */

    nome.textContent =
      jogo.nome;


    /* --------------------------------------------------------
       ESTRELAS
       -------------------------------------------------------- */

    estrelas.textContent =
      "★".repeat(jogo.estrelas);

    estrelas.setAttribute(
      "aria-label",
      `${jogo.estrelas} estrelas`
    );


    /* --------------------------------------------------------
       LINK DO JOGO
       --------------------------------------------------------

       O cartão inteiro passa a ser clicável.

    -------------------------------------------------------- */

    artigo.style.cursor =
      "pointer";

    artigo.setAttribute(
      "role",
      "link"
    );

    artigo.setAttribute(
      "tabindex",
      "0"
    );

    artigo.addEventListener(
      "click",
      () => {

        if (
          jogo.link &&
          jogo.link !== "#"
        ) {

          window.location.href =
            DADOS.links.destaques[jogo.link];

        }

      }
    );

    artigo.addEventListener(
      "keydown",
      (evento) => {

        if (
          evento.key === "Enter" ||
          evento.key === " "
        ) {

          evento.preventDefault();

          if (
            jogo.link &&
            jogo.link !== "#"
          ) {

            window.location.href =
              DADOS.links.destaques[jogo.link];

          }

        }

      }
    );


    zona.appendChild(fragmento);

  });
}
```

**O resto do teu `CSS` e do JavaScript das nuvens/textos/inicialização fica exatamente como está.**

E a grande vantagem é que, daqui para a frente, se quiseres trocar, por exemplo, o jogo **Rastros**, só tens de alterar:

```javascript
rastros: "icons/rastros.png",
```

e o respetivo endereço:

```javascript
rastros: "endereco-do-jogo",
```

Sem andar à procura do link perdido no meio do código.
