# Nova estrutura dos jogos

A ideia desta versão de teste é manter o design atual e separar:

- `index.html` → **sempre o mesmo modelo**
- `dados.js` → **é o único ficheiro que muda de jogo para jogo**
- `js/jogo.js` → motor comum dos jogos
- `css/jogo.css` → estilo/responsividade comum
- `img/`, `icons/`, `sons/` → recursos partilhados

## Estrutura de um novo jogo

```text
1/
└── pt/
    └── jogos/
        └── nome-do-jogo/
            ├── index.html
            └── dados.js
```

Não é necessário criar um `jogo.js` dentro de cada jogo.

## O que muda em `dados.js`

Exemplo:

```js
const dados = {
  titulo: "Ouvir e escrever",
  subtitulo: "Ouve a frase e escreve-a",
  tipo: "escrever-frase",
  niveis: [
    {
      nome: "Nível 1",
      perguntas: [
        { texto: "O gato corre.", pontos: 10 },
        { texto: "A Ana salta.", pontos: 10 }
      ]
    }
  ]
};
```

O motor lê estes dados e decide como apresentar o jogo.

## Primeiro jogo de teste

`1/pt/jogos/escreve-a-frase/`

Este jogo já usa exatamente o `index.html` do modelo e apenas altera o `dados.js`.

A leitura da frase é feita pela voz do próprio navegador através de `speechSynthesis`, pelo que não são necessários ficheiros de áudio para este primeiro teste.
