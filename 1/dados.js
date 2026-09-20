/* =========================================================
   1.º ANO
   Todos os dados, estilos e comportamentos ficam neste ficheiro.
   ========================================================= */

const DADOS = {

    pagina: {
        titulo: "1.º Ano",
        subtitulo: "Aprender • Explorar • Descobrir"
    },

    icons: {
        ano: "../icons/icon1.png",
        nuvem: "../icons/nuvem.png",
        menu: "../icons/menu.png",
        seta: "../icons/seta.png",
        portugues: "../icons/pt.png",
        matematica: "../icons/mat.png",
        estudo: "../icons/em.png"
    },

    cores: {
        fundo: "#EAF8FF",
        azul: "#0358A9",
        portugues: "#01B1FB",
        amarelo: "#FDCE2C",
        texto: "#16405F"
    },

    areas: [

        {
            id: "portugues",
            nome: "Português",
            icon: "../icons/pt.png",
            cor: "#01B1FB",
            pagina: "portugues/"
        },

        {
            id: "matematica",
            nome: "Matemática",
            icon: "../icons/mat.png",
            cor: "#FDCE2C",
            pagina: "matematica/"
        },

        {
            id: "estudo",
            nome: "Estudo do Meio",
            icon: "../icons/em.png",
            cor: "#FDCE2C",
            pagina: "estudo/"
        }

    ],

    nuvens: [

        {
            left: "7%",
            top: "55px",
            largura: "105px",
            rotacao: "-2deg",
            duracao: "19s",
            atraso: "0s"
        },

        {
            left: "48%",
            top: "100px",
            largura: "90px",
            rotacao: "1deg",
            duracao: "23s",
            atraso: "-7s"
        },

        {
            left: "84%",
            top: "48px",
            largura: "120px",
            rotacao: "2deg",
            duracao: "21s",
            atraso: "-12s"
        }

    ]

};


/* =========================================================
   CSS
   ========================================================= */

const CSS = `

@import url(
    'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap'
);


/* =========================================================
   RESET
   ========================================================= */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    min-height: 100%;
}

body {

    font-family:
        "Nunito",
        "Segoe UI",
        Arial,
        sans-serif;

    background: #EAF8FF;

    color: #16405F;

    overflow-x: hidden;
}


/* =========================================================
   APP
   ========================================================= */

#app {

    position: relative;

    width: 100%;
    min-height: 100vh;

    overflow: hidden;

    background:
        linear-gradient(
            180deg,
            #DFF5FF 0%,
            #EAF8FF 42%,
            #F8FDFF 100%
        );
}


/* =========================================================
   NUVENS
   ========================================================= */

.camada-nuvens {

    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    overflow: hidden;

    pointer-events: none;

    z-index: 0;
}

.nuvem-pequena {

    position: absolute;

    display: block;

    width: var(--largura);

    height: auto;

    opacity: 0.82;

    object-fit: contain;

    transform:
        rotate(var(--rotacao))
        translateX(0);

    animation:
        moverNuvem
        var(--duracao)
        ease-in-out
        var(--atraso)
        infinite alternate;

    filter:
        drop-shadow(
            0 2px 2px
            rgba(80,130,160,0.08)
        );
}

@keyframes moverNuvem {

    0% {
        transform:
            rotate(var(--rotacao))
            translateX(-6px);
    }

    50% {
        transform:
            rotate(var(--rotacao))
            translateX(5px);
    }

    100% {
        transform:
            rotate(var(--rotacao))
            translateX(-3px);
    }

}


/* =========================================================
   CABEÇALHO
   ========================================================= */

.cabecalho {

    position: relative;

    z-index: 2;

    width: 100%;

    min-height: 150px;

    display: grid;

    grid-template-columns:
        80px
        1fr
        80px;

    align-items: center;

    padding:
        20px
        35px
        10px;
}


/* =========================================================
   BOTÕES MENU / VOLTAR
   ========================================================= */

.botao-cabecalho {

    width: 52px;
    height: 52px;

    border: none;

    border-radius: 50%;

    background: #0358A9;

    display: flex;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    box-shadow:
        0 5px 12px
        rgba(3,88,169,0.22);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.botao-cabecalho:hover {

    transform:
        scale(1.07);

    box-shadow:
        0 7px 16px
        rgba(3,88,169,0.30);
}

.botao-cabecalho:active {

    transform:
        scale(0.94);
}

.botao-cabecalho img {

    width: 27px;
    height: 27px;

    object-fit: contain;
}


/* =========================================================
   CENTRO DO CABEÇALHO
   ========================================================= */

.centro-cabecalho {

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;
}

.titulo-principal {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    color: #0358A9;

    font-size:
        clamp(
            31px,
            4vw,
            48px
        );

    font-weight: 900;

    line-height: 1.1;
}

.icone-ano {

    width: 48px;
    height: 48px;

    object-fit: contain;
}

.subtitulo {

    margin-top: 7px;

    font-size:
        clamp(
            15px,
            2vw,
            19px
        );

    font-weight: 700;

    color: #5B7890;
}


/* =========================================================
   CONTEÚDO
   ========================================================= */

.conteudo {

    position: relative;

    z-index: 2;

    width: 100%;

    padding:
        0 35px 35px;
}


/* =========================================================
   ZONA "ESCOLHE UMA ÁREA"
   ========================================================= */

.titulo-menu {

    position: relative;

    width: fit-content;

    min-width: 290px;

    margin:
        0 auto 28px;

    padding:
        13px 38px;

    text-align: center;

    background:
        rgba(255,255,255,0.92);

    border-radius:
        50px;

    box-shadow:
        0 5px 15px
        rgba(41,105,140,0.10);

    border:
        2px solid
        rgba(3,88,169,0.08);
}

.titulo-menu h2 {

    color: #0358A9;

    font-size:
        clamp(
            21px,
            2.5vw,
            28px
        );

    font-weight: 900;

    line-height: 1.1;
}

.titulo-menu p {

    margin-top: 4px;

    color: #6D879A;

    font-size: 14px;

    font-weight: 700;
}


/* =========================================================
   CARTÕES
   ========================================================= */

.areas {

    position: relative;

    z-index: 2;

    width: 100%;

    max-width: 1250px;

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}

.cartao-area {

    position: relative;

    height: 300px;

    border: none;

    border-radius: 30px;

    overflow: hidden;

    cursor: pointer;

    background:
        var(--cor);

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    text-decoration: none;

    box-shadow:
        0 10px 22px
        rgba(39,93,120,0.15);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.cartao-area::before {

    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,0.30),
            transparent 45%,
            rgba(0,0,0,0.06)
        );

    pointer-events: none;
}

.cartao-area:hover {

    transform:
        translateY(-7px);

    box-shadow:
        0 17px 30px
        rgba(39,93,120,0.20);
}

.conteudo-cartao {

    position: relative;

    z-index: 2;

    width: 100%;

    padding: 25px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;
}

.icone-area {

    width: 125px;
    height: 125px;

    object-fit: contain;

    margin-bottom: 20px;

    filter:
        drop-shadow(
            0 5px 4px
            rgba(0,0,0,0.10)
        );

    transition:
        transform 0.25s ease;
}

.cartao-area:hover .icone-area {

    transform:
        scale(1.07)
        rotate(-2deg);
}

.nome-area {

    color: #FFFFFF;

    font-size:
        clamp(
            23px,
            2.5vw,
            32px
        );

    font-weight: 900;

    text-shadow:
        0 2px 3px
        rgba(0,0,0,0.12);
}


/* =========================================================
   FOOTER
   ========================================================= */

.rodape {

    position: relative;

    z-index: 2;

    width: 100%;

    margin-top: 30px;

    padding:
        18px 20px;

    background:
        #0358A9;

    color: #FFFFFF;

    text-align: center;

    font-size: 15px;

    font-weight: 800;

    box-shadow:
        0 -4px 15px
        rgba(3,88,169,0.12);
}

.rodape-conteudo {

    max-width: 1250px;

    margin: auto;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;
}

.rodape-icone {

    width: 22px;
    height: 22px;

    object-fit: contain;
}


/* =========================================================
   MENU LATERAL
   ========================================================= */

.menu-lateral {

    position: fixed;

    z-index: 20;

    top: 0;
    left: 0;

    width: 310px;

    max-width: 85vw;

    height: 100vh;

    padding: 25px;

    background:
        rgba(255,255,255,0.98);

    box-shadow:
        8px 0 30px
        rgba(0,0,0,0.15);

    transform:
        translateX(-105%);

    transition:
        transform 0.3s ease;
}

.menu-lateral.aberto {

    transform:
        translateX(0);
}

.menu-fundo {

    position: fixed;

    z-index: 19;

    inset: 0;

    background:
        rgba(20,35,45,0.30);

    opacity: 0;

    pointer-events: none;

    transition:
        opacity 0.3s ease;
}

.menu-fundo.aberto {

    opacity: 1;

    pointer-events: auto;
}

.menu-topo {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 30px;
}

.menu-titulo {

    color: #0358A9;

    font-size: 25px;

    font-weight: 900;
}

.botao-fechar {

    width: 42px;
    height: 42px;

    border: none;

    border-radius: 50%;

    background: #0358A9;

    color: white;

    font-size: 25px;

    cursor: pointer;
}

.menu-link {

    display: block;

    padding:
        15px 17px;

    margin-bottom: 10px;

    border-radius: 14px;

    color: #16405F;

    background: #EEF8FD;

    text-decoration: none;

    font-weight: 800;

    transition:
        transform 0.2s ease,
        background 0.2s ease;
}

.menu-link:hover {

    background: #DDF2FC;

    transform:
        translateX(4px);
}


/* =========================================================
   TABLET HORIZONTAL
   ========================================================= */

@media
(min-width: 768px)
and (max-width: 1199px)
and (orientation: landscape) {

    .cabecalho {

        min-height: 125px;

        grid-template-columns:
            65px 1fr 65px;

        padding:
            15px 25px 8px;
    }

    .botao-cabecalho {

        width: 47px;
        height: 47px;
    }

    .botao-cabecalho img {

        width: 24px;
        height: 24px;
    }

    .conteudo {

        padding:
            0 25px 25px;
    }

    .titulo-menu {

        margin-bottom: 18px;

        padding:
            10px 32px;
    }

    .areas {

        gap: 18px;
    }

    .cartao-area {

        height: 245px;

        border-radius: 25px;
    }

    .icone-area {

        width: 95px;
        height: 95px;

        margin-bottom: 14px;
    }

    .nome-area {

        font-size: 24px;
    }

}


/* =========================================================
   TELEMÓVEL HORIZONTAL
   ========================================================= */

@media
(max-width: 900px)
and (orientation: landscape) {

    .cabecalho {

        min-height: 95px;

        grid-template-columns:
            50px 1fr 50px;

        padding:
            8px 15px 4px;
    }

    .botao-cabecalho {

        width: 40px;
        height: 40px;
    }

    .botao-cabecalho img {

        width: 21px;
        height: 21px;
    }

    .titulo-principal {

        font-size: 27px;
    }

    .icone-ano {

        width: 32px;
        height: 32px;
    }

    .subtitulo {

        font-size: 12px;

        margin-top: 2px;
    }

    .conteudo {

        padding:
            0 15px 15px;
    }

    .titulo-menu {

        margin-bottom: 10px;

        padding:
            7px 25px;
    }

    .titulo-menu h2 {

        font-size: 18px;
    }

    .titulo-menu p {

        display: none;
    }

    .areas {

        gap: 12px;
    }

    .cartao-area {

        height: 175px;

        border-radius: 19px;
    }

    .conteudo-cartao {

        padding: 10px;
    }

    .icone-area {

        width: 65px;
        height: 65px;

        margin-bottom: 8px;
    }

    .nome-area {

        font-size: 18px;
    }

    .rodape {

        display: none;
    }

}


/* =========================================================
   TELEMÓVEL VERTICAL
   ========================================================= */

@media
(max-width: 767px)
and (orientation: portrait) {

    .cabecalho {

        min-height: 125px;

        grid-template-columns:
            52px 1fr 52px;

        padding:
            13px 12px 8px;
    }

    .botao-cabecalho {

        width: 42px;
        height: 42px;
    }

    .botao-cabecalho img {

        width: 23px;
        height: 23px;
    }

    .titulo-principal {

        font-size: 30px;

        gap: 7px;
    }

    .icone-ano {

        width: 35px;
        height: 35px;
    }

    .subtitulo {

        font-size: 13px;
    }

    .conteudo {

        padding:
            0 15px 25px;
    }

    .titulo-menu {

        min-width: 240px;

        margin-bottom: 15px;

        padding:
            10px 25px;
    }

    .titulo-menu h2 {

        font-size: 21px;
    }

    .titulo-menu p {

        font-size: 12px;
    }

    .areas {

        grid-template-columns: 1fr;

        gap: 15px;
    }

    .cartao-area {

        height: 175px;

        border-radius: 23px;
    }

    .icone-area {

        width: 78px;
        height: 78px;

        margin-bottom: 10px;
    }

    .nome-area {

        font-size: 23px;
    }

    .rodape {

        margin-top: 10px;

        padding:
            15px;
    }

}


/* =========================================================
   ECRÃS MUITO PEQUENOS
   ========================================================= */

@media
(max-width: 380px) {

    .cabecalho {

        grid-template-columns:
            45px 1fr 45px;

        min-height: 115px;
    }

    .botao-cabecalho {

        width: 38px;
        height: 38px;
    }

    .botao-cabecalho img {

        width: 20px;
        height: 20px;
    }

    .titulo-principal {

        font-size: 27px;
    }

    .icone-ano {

        width: 31px;
        height: 31px;
    }

    .subtitulo {

        font-size: 12px;
    }

    .cartao-area {

        height: 155px;
    }

    .icone-area {

        width: 68px;
        height: 68px;
    }

    .nome-area {

        font-size: 20px;
    }

}


/* =========================================================
   REDUZIR ANIMAÇÕES
   ========================================================= */

@media
(prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {

        animation-duration:
            0.01ms !important;

        animation-iteration-count:
            1 !important;

        transition-duration:
            0.01ms !important;
    }

}

`;


/* =========================================================
   INSERIR CSS
   ========================================================= */

function inserirCSS() {

    const estilo =
        document.createElement("style");

    estilo.id =
        "estilos-pagina";

    estilo.textContent =
        CSS;

    document.head.appendChild(estilo);

}


/* =========================================================
   CABEÇALHO
   ========================================================= */

function criarCabecalho() {

    const cabecalho =
        document.getElementById(
            "cabecalho"
        );

    cabecalho.innerHTML = `

        <button
            class="botao-cabecalho"
            id="botao-menu"
            type="button"
            aria-label="Abrir menu">

            <img
                src="${DADOS.icons.menu}"
                alt="Menu">

        </button>


        <div class="centro-cabecalho">

            <div class="titulo-principal">

                <img
                    class="icone-ano"
                    src="${DADOS.icons.ano}"
                    alt="">

                <span>
                    ${DADOS.pagina.titulo}
                </span>

            </div>

            <div class="subtitulo">
                ${DADOS.pagina.subtitulo}
            </div>

        </div>


        <button
            class="botao-cabecalho"
            id="botao-voltar"
            type="button"
            aria-label="Voltar">

            <img
                src="${DADOS.icons.seta}"
                alt="Voltar">

        </button>

    `;

}


/* =========================================================
   CONTEÚDO
   ========================================================= */

function criarConteudo() {

    const conteudo =
        document.getElementById(
            "conteudo"
        );

    const cartoes =
        DADOS.areas.map(
            area => `

                <a
                    class="cartao-area"
                    href="${area.pagina}"
                    style="--cor:${area.cor}"
                    aria-label="${area.nome}">

                    <div
                        class="conteudo-cartao">

                        <img
                            class="icone-area"
                            src="${area.icon}"
                            alt="">

                        <div class="nome-area">
                            ${area.nome}
                        </div>

                    </div>

                </a>

            `
        ).join("");


    conteudo.innerHTML = `

        <div class="titulo-menu">

            <h2>
                Escolhe uma área
            </h2>

            <p>
                Aprende, explora e descobre novos desafios!
            </p>

        </div>


        <section
            class="areas"
            aria-label="Áreas do 1.º ano">

            ${cartoes}

        </section>

    `;

}


/* =========================================================
   FOOTER
   ========================================================= */

function criarRodape() {

    const rodape =
        document.getElementById(
            "rodape"
        );

    rodape.innerHTML = `

        <div class="rodape-conteudo">

            <span>
                @recursos digitais
            </span>

        </div>

    `;

}


/* =========================================================
   NUVENS
   ========================================================= */

function criarNuvens() {

    const camada =
        document.getElementById(
            "camada-nuvens"
        );

    camada.innerHTML = "";

    DADOS.nuvens.forEach(
        nuvem => {

            const imagem =
                document.createElement("img");

            imagem.className =
                "nuvem-pequena";

            imagem.src =
                DADOS.icons.nuvem;

            imagem.alt = "";

            imagem.setAttribute(
                "aria-hidden",
                "true"
            );

            imagem.style.left =
                nuvem.left;

            imagem.style.top =
                nuvem.top;

            imagem.style.setProperty(
                "--largura",
                nuvem.largura
            );

            imagem.style.setProperty(
                "--rotacao",
                nuvem.rotacao
            );

            imagem.style.setProperty(
                "--duracao",
                nuvem.duracao
            );

            imagem.style.setProperty(
                "--atraso",
                nuvem.atraso
            );

            camada.appendChild(
                imagem
            );

        }
    );

}


/* =========================================================
   MENU LATERAL
   ========================================================= */

function criarMenuLateral() {

    const fundo =
        document.createElement("div");

    fundo.className =
        "menu-fundo";

    fundo.id =
        "menu-fundo";


    const menu =
        document.createElement("aside");

    menu.className =
        "menu-lateral";

    menu.id =
        "menu-lateral";

    menu.innerHTML = `

        <div class="menu-topo">

            <div class="menu-titulo">
                Menu
            </div>

            <button
                class="botao-fechar"
                id="botao-fechar-menu"
                type="button"
                aria-label="Fechar menu">

                ×

            </button>

        </div>


        <a
            class="menu-link"
            href="../">

            🏠 Página inicial

        </a>


        <a
            class="menu-link"
            href="./">

            📚 1.º Ano

        </a>

    `;


    document.body.appendChild(
        fundo
    );

    document.body.appendChild(
        menu
    );


    const botaoMenu =
        document.getElementById(
            "botao-menu"
        );

    const botaoFechar =
        document.getElementById(
            "botao-fechar-menu"
        );


    function abrirMenu() {

        menu.classList.add(
            "aberto"
        );

        fundo.classList.add(
            "aberto"
        );

    }


    function fecharMenu() {

        menu.classList.remove(
            "aberto"
        );

        fundo.classList.remove(
            "aberto"
        );

    }


    botaoMenu.addEventListener(
        "click",
        abrirMenu
    );

    botaoFechar.addEventListener(
        "click",
        fecharMenu
    );

    fundo.addEventListener(
        "click",
        fecharMenu
    );


    document.addEventListener(
        "keydown",
        evento => {

            if (
                evento.key === "Escape"
            ) {

                fecharMenu();

            }

        }
    );

}


/* =========================================================
   BOTÃO VOLTAR
   ========================================================= */

function configurarBotaoVoltar() {

    const botao =
        document.getElementById(
            "botao-voltar"
        );


    botao.addEventListener(
        "click",
        () => {

            if (
                window.history.length > 1
            ) {

                window.history.back();

            } else {

                window.location.href =
                    "../";

            }

        }
    );

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

function iniciarPagina() {

    inserirCSS();

    criarNuvens();

    criarCabecalho();

    criarConteudo();

    criarRodape();

    criarMenuLateral();

    configurarBotaoVoltar();

}


if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        iniciarPagina
    );

} else {

    iniciarPagina();

}
