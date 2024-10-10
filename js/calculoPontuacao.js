// Vetor que mapeia as categorias na ordem: A, B, C, D, E, F, G, H
const pontuacoesCategorias = [
  "Fantasia", // A
  "Ficção Científica / Distopia", // B
  "Romance", // C
  "Misterio", // D
  "Suspense", // E
  "Acao", // F
  "Drama", // G
  "Psicologia", // H
];

// Variáveis para armazenar a pontuação de cada categoria de livro
let pontuacaoFantasia = 0; // Fantasia
let pontuacaoFiccaoCientifica = 0; // Ficção Científica / Distopia
let pontuacaoRomance = 0; // Romance
let pontuacaoMisterio = 0; // Mistério
let pontuacaoSuspense = 0; // Suspense
let pontuacaoAcao = 0; // Ação
let pontuacaoDrama = 0; // Drama
let pontuacaoPsicologia = 0; //Psicologia

// Vetor de pontuação para cada pergunta com pesos diferentes (baseados na quantidade de livros relacionados)
const pergunta1 = [5, 3, 7, 8]; // Pergunta 1
const pergunta2 = [3, 4, 7, 9]; // Pergunta 2
const pergunta3 = [3, 4, 7, 9]; // Pergunta 3
const pergunta4 = [3, 4, 7, 9]; // Pergunta 4
const pergunta5 = [5, 3, 7, 8]; // Pergunta 5
const pergunta6 = [3, 4, 7, 9]; // Pergunta 6
const pergunta7 = [3, 4, 7, 9]; // Pergunta 7
const pergunta8 = [3, 4, 7, 9]; // Pergunta 8

// Função para calcular a pontuação com base nas respostas do questionário
function calcularPontuacao() {
  // Itera sobre todas as perguntas (de 1 a 8)
  for (let i = 1; i <= 8; i++) {
    const respostaSelecionada = document.querySelector(
      `input[name="q${i}"]:checked`
    );

    // Se há uma resposta selecionada
    if (respostaSelecionada) {
      const valorResposta = respostaSelecionada.value;
      const indiceResposta = "ABCDE".indexOf(valorResposta);

      // Atualiza a pontuação de acordo com a resposta
      switch (indiceResposta) {
        case 1:
          pontuacaoFantasia += obterPontuacaoPorPergunta(i, indiceResposta);
          break; //Fantasia
        case 2:
          pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(
            i,
            indiceResposta
          );
          break; //Ficção Científica
        case 3:
          pontuacaoRomance += obterPontuacaoPorPergunta(i, indiceResposta);
          break; //Romance
        case 4:
          pontuacaoMisterio += obterPontuacaoPorPergunta(i, indiceResposta);
          break; //Mistério
        case 5:
          pontuacaoSuspense += obterPontuacaoPorPergunta(i, indiceResposta);
          break; //Suspense
        case 6:
          pontuacaoAcao += obterPontuacaoPorPergunta(i, indiceResposta);
          break; //Ação
        case 7:
          pontuacaoDrama += obterPontuacaoPorPergunta(i, indiceResposta);
          break; //Drama
        case 8:
          pontuacaoPsicologia += obterPontuacaoPorPergunta(i, indiceResposta);
          break; //Psicologia
      }
    }
  }

  // Retorna um vetor com a pontuação final de cada categoria
  return [
    pontuacaoFantasia, // 0: Fantasia
    pontuacaoFiccaoCientifica, // 1: Ficção Científica / Distopia
    pontuacaoRomance, // 2: Romance
    pontuacaoMisterio, // 3: Mistério
    pontuacaoSuspense, // 4: Suspense
    pontuacaoAcao, // 5: Ação
    pontuacaoDrama, // 6: Drama
    pontuacaoPsicologia, // 7: Psicologia
  ];
}

// Função que retorna a pontuação de uma resposta para uma pergunta específica
function obterPontuacaoPorPergunta(perguntaNumero, indiceResposta) {
  switch (perguntaNumero) {
    case 1:
      return pergunta1[indiceResposta];
    case 2:
      return pergunta2[indiceResposta];
    case 3:
      return pergunta3[indiceResposta];
    case 4:
      return pergunta4[indiceResposta];
    case 5:
      return pergunta5[indiceResposta];
    case 6:
      return pergunta6[indiceResposta];
    case 7:
      return pergunta7[indiceResposta];
    case 8:
      return pergunta8[indiceResposta];
    default:
      return 0;
  }
}
