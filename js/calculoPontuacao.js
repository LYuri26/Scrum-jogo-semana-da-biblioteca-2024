// Vetor que mapeia as categorias na ordem: A, B, C, D, E, F, G
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
let pontuacaoFiccaoPolicial = 0; // Ficção Policial
let pontuacaoAventura = 0; // Aventura
let pontuacaoLiteraturaEspiritual = 0; // Literatura Espiritual
let pontuacaoRomance = 0; // Romance
let pontuacaoFantasia = 0; // Fantasia
let pontuacaoHorror = 0; // Horror
let pontuacaoFiccaoCientifica = 0; // Ficção Científica
let pontuacaoMisterio = 0; //Mistério

// Vetor de pontuação para cada pergunta
const pergunta1 = [1, 3, 1, 2, 0, 0, 0]; // Pergunta 1
const pergunta2 = [4, 2, 5, 0, 0, 0, 0]; // Pergunta 2
const pergunta3 = [2, 1, 2, 0, 0, 0, 0]; // Pergunta 3
const pergunta4 = [1, 4, 1, 0, 0, 0, 0]; // Pergunta 4
const pergunta5 = [3, 2, 4, 0, 0, 0, 0]; // Pergunta 5
const pergunta6 = [6, 1, 2, 0, 0, 0, 0]; // Pergunta 6
const pergunta7 = [2, 6, 1, 0, 0, 0, 0]; // Pergunta 7
const pergunta8 = [2, 2, 4, 0, 0, 0, 0]; // Pergunta 8


// Função para calcular a pontuação com base nas respostas do questionário
function calcularPontuacao() {
  // Itera sobre todas as perguntas (de 1 a 12)
  for (let i = 1; i <= 12; i++) {
    const respostaSelecionada = document.querySelector(
      `input[name="q${i}"]:checked`
    );

    // Se há uma resposta selecionada
    if (respostaSelecionada) {
      const valorResposta = respostaSelecionada.value;
      const indiceResposta = "ABCDEFGH".indexOf(valorResposta); // Ajuste aqui, removendo 'H'

      // Atualiza a pontuação de acordo com a resposta
      switch (indiceResposta) {
        case 0:
          pontuacaoFiccaoPolicial += obterPontuacaoPorPergunta(i, indiceResposta);
          break; // Ficção Policial
        case 1:
          pontuacaoAventura += obterPontuacaoPorPergunta(i, indiceResposta);
          break; // Aventura
        case 2:
          pontuacaoLiteraturaEspiritual += obterPontuacaoPorPergunta(i, indiceResposta);
          break; // Literatura Espiritual
        case 3:
          pontuacaoRomance += obterPontuacaoPorPergunta(i, indiceResposta);
          break; // Romance
        case 4:
          pontuacaoFantasia += obterPontuacaoPorPergunta(i, indiceResposta);
          break; // Fantasia
        case 5:
          pontuacaoHorror += obterPontuacaoPorPergunta(i, indiceResposta);
          break; // Horror
        case 6:
          pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(i, indiceResposta);
          break; // Ficção Científica
        case 7:
          pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(i, indiceResposta);
        break; // Mistério
      }
    }
  }

  // Retorna um vetor com a pontuação final de cada categoria
  return [
    pontuacaoFiccaoPolicial, // 0: Ficção Policial
    pontuacaoAventura, // 1: Aventura
    pontuacaoLiteraturaEspiritual, // 2: Literatura Espiritual
    pontuacaoRomance, // 3: Romance
    pontuacaoFantasia, // 4: Fantasia
    pontuacaoHorror, // 5: Horror
    pontuacaoFiccaoCientifica, // 6: Ficção Científica
    pontuacaoMisterio // 7. Mistério
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
