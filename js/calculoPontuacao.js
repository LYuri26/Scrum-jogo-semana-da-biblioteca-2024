// Vetor que mapeia as categorias na ordem: A, B, C, D, E, F, G, H
const pontuacoesCategorias = [
  "Romance", // A
  "Ficção Científica", // B
  "Literatura Espiritual", // C
  "Horror", // D
  "Fantasia", // E
  "Ficção Policial", // F
  "Mistério", // G
  "Aventura" // H
];

// Variáveis para armazenar a pontuação de cada categoria de livro
let pontuacaoFiccaoPolicial = 0; 
let pontuacaoAventura = 0;
let pontuacaoLiteraturaEspiritual = 0;
let pontuacaoRomance = 0;
let pontuacaoFantasia = 0;
let pontuacaoHorror = 0;
let pontuacaoFiccaoCientifica = 0;
let pontuacaoMisterio = 0;

// Vetor de pontuação para cada pergunta
const pergunta1 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 1
const pergunta2 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 2
const pergunta3 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 3
const pergunta4 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 4
const pergunta5 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 5
const pergunta6 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 6
const pergunta7 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 7
const pergunta8 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 8
const pergunta9 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 9
const pergunta10 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 10
const pergunta11 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 11
const pergunta12 = [1, 1, 1, 1, 1, 1, 1, 1]; // Pergunta 12

// Função para calcular a pontuação com base nas respostas do questionário
function calcularPontuacao() {
  // Itera sobre todas as perguntas (de 1 a 12)
  for (let i = 1; i <= 12; i++) {
    const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);

    // Se há uma resposta selecionada
    if (respostaSelecionada) {
      const valorResposta = respostaSelecionada.value;
      const indiceResposta = "ABCDEFGH".indexOf(valorResposta); 

      // Atualiza a pontuação de acordo com a resposta
      switch (indiceResposta) {
        case 0: // Romance
          pontuacaoRomance += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case 1: // Ficção Científica
          pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case 2: // Literatura Espiritual
          pontuacaoLiteraturaEspiritual += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case 3: // Horror
          pontuacaoHorror += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case 4: // Fantasia
          pontuacaoFantasia += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case 5: // Ficção Policial
          pontuacaoFiccaoPolicial += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case 6: // Mistério
          pontuacaoMisterio += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case 7: // Aventura
          pontuacaoAventura += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
      }
    }
  }

  // Retorna a pontuação final de cada categoria na ordem correta
  const resultadoPontuacao = [
    pontuacaoRomance,
    pontuacaoFiccaoCientifica,
    pontuacaoLiteraturaEspiritual,
    pontuacaoHorror,
    pontuacaoFantasia,
    pontuacaoFiccaoPolicial,
    pontuacaoMisterio,
    pontuacaoAventura
  ];

  return resultadoPontuacao;
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
    case 9:
      return pergunta9[indiceResposta];
    case 10:
      return pergunta10[indiceResposta];
    case 11:
      return pergunta11[indiceResposta];
    case 12:
      return pergunta12[indiceResposta]; 
    default:
      return 0;
  }
}
