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
  for (let i = 1; i <= 2; i++) {
    // Seleciona a resposta marcada para a pergunta atual
    const respostaSelecionada = document.querySelector(
      `input[name="q${i}"]:checked`
    );

    // Se há uma resposta selecionada
    if (respostaSelecionada) {
      // Obtém o valor da resposta (A, B, C, etc.)
      const valorResposta = respostaSelecionada.value;

      // Encontra o índice da resposta (A = 0, B = 1, C = 2, etc.)
      const indiceResposta = "ABCDEFG".indexOf(valorResposta);

      // Obtém a categoria correspondente à resposta selecionada
      const categoria = pontuacoesCategorias[indiceResposta];

      // Adiciona a pontuação da resposta à categoria correspondente
      switch (categoria) {
        case "Fantasia":
          pontuacaoFantasia += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case "Ficção Científica / Distopia":
          pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
      }
    }
  }

  // Retorna a pontuação calculada para cada categoria (se necessário)
  return {
    Fantasia: pontuacaoFantasia,
    "Ficção Científica / Distopia": pontuacaoFiccaoCientifica,
  };
}

// Função que retorna a pontuação de uma resposta para uma pergunta específica
function obterPontuacaoPorPergunta(perguntaNumero, indiceResposta) {
  switch (perguntaNumero) {
    case 1:
      return pergunta1[indiceResposta];
    case 2:
    default:
      return 0;
  }
}
