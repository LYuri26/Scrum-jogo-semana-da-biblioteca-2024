// Vetor que mapeia as categorias na ordem: A, B, C, D, E, F, G
const pontuacoesCategorias = [
  "Fantasia",                  // A
  "Ficção Científica / Distopia" // B
];

// Variáveis para armazenar a pontuação de cada categoria de livro
let pontuacaoFantasia = 0;          // Fantasia
let pontuacaoFiccaoCientifica = 0;  // Ficção Científica / Distopia
// Vetor de pontuação para cada pergunta com pesos diferentes (baseados na quantidade de livros relacionados)
const pergunta1 = [5, 3];  // Pergunta 1
const pergunta2 = [3, 4];  // Pergunta 2

// Função para calcular a pontuação com base nas respostas do questionário
function calcularPontuacao() {
  // Itera sobre todas as perguntas (de 1 a 8)
  for (let i = 1; i <= 8; i++) {
    const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);

    // Se há uma resposta selecionada
    if (respostaSelecionada) {
      const valorResposta = respostaSelecionada.value;
      const indiceResposta = "ABCDEFG".indexOf(valorResposta);

      // Atualiza a pontuação de acordo com a resposta
      switch (indiceResposta) {
        case 0: pontuacaoFantasia += obterPontuacaoPorPergunta(i, indiceResposta); break; // Fantasia
        case 1: pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(i, indiceResposta); break; // Ficção Científica
      }
    }  
  }

  // Retorna um vetor com a pontuação final de cada categoria
  return [
    pontuacaoFantasia,                // 0: Fantasia
    pontuacaoFiccaoCientifica,        // 1: Ficção Científica / Distopia
  ];
}


// Função que retorna a pontuação de uma resposta para uma pergunta específica
function obterPontuacaoPorPergunta(perguntaNumero, indiceResposta) {
  switch (perguntaNumero) {
    case 1:
      return pergunta1[indiceResposta];
    case 2:
      return pergunta2[indiceResposta];
    default:
      return 0;
  }
}
