// Vetores separados por categoria
const categorias = [
  "Fantasia",
  "Ficção Científica / Distopia",
  "Romance",
  "Misterio",
  "Suspense",
  "Acao",
  "Drama",
  "Psicologia",
];

// Pontuações para cada categoria
const pontuacaoFantasiaTotal = [5, 14, 15, 19, 20, 24, 25, 29, 30, 34];
const pontuacaoFiccaoCientificaTotal = [5, 16, 17, 23, 24, 30];
const pontuacaoRomanceTotal = [];
const pontuacaoMisterioTotal = [];
const pontuacaoSuspenseTotal = [];
const pontuacaoAcaoTotal = [];
const pontuacaoDramaTotal = [];
const pontuacaoPsicologiaTotal = [];

// Livros recomendados por categoria
const livrosFantasia = ["Harry Potter e a Pedra Filosofal", "Lua nova"];
const livrosFiccaoCientifica = ["Querido e Devotado Dexter, Bird Box"];
const livrosRomance = ["Vermelho, Branco e Sangue azul", "Nao se apega, nao"];
const livrosMisterio = ["A queda"];
const livrosSuspense = ["Visitante Inesperado"];
const livrosAcao = [""];
const livrosDrama = ["O Lado Bom da Vida"];
const livrosPsicologia = ["Avat e Psicologia"];

// URLs para livros recomendados por categoria
const urlsFantasia = [
  "../html/livros/harry-potter.html",
  "../html/livros/luanova.html",
];
const urlsFiccaoCientifica = [
  "../html/livros/dexter.html",
  "../livros/birdbox.html",
];
const urlsRomance = ["../html/livros/vermelhobranco.html"];
const urlsMisterio = [
  "../html/livros/aqueda.html",
  "../html/livros/nnaoseapeganao",
];
const urlsSuspense = ["../html/livros/visitanteinesperado/html"];
const urlsAcao = [""];
const urlsDrama = ["../html/livros/oladobomdavida"];
const urlsPsicologia = ["../html/livros/avatarepsicologia"];

// Função para recomendar um livro com base na pontuação calculada
function recomendarLivro(pontuacao) {
  // Variáveis para determinar a categoria com a maior pontuação
  let categoriaFavorita = "";
  let maiorPontuacao = 0;

  // Itera sobre cada categoria para encontrar a que tem a maior pontuação
  for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];

    // Acessa a pontuação da categoria correspondente a partir do objeto 'pontuacao'
    const categoriaPontuacao = pontuacao[categoria];

    // Se a pontuação dessa categoria for maior que a maiorPontuacao, atualize
    if (categoriaPontuacao > maiorPontuacao) {
      maiorPontuacao = categoriaPontuacao;
      categoriaFavorita = categoria;
    }
  }

  // Inicializa a variável para armazenar a URL da recomendação de livro
  let urlLivroRecomendado = "../html/livros/nao-encontrado.html"; // Página genérica

  // Identifica o índice da categoria favorita
  const categoriaIndex = categorias.indexOf(categoriaFavorita);

  if (categoriaIndex !== -1) {
    // Seleciona os vetores de livros e URLs correspondentes à categoria favorita
    let urlsCategoria = [];

    switch (categoriaFavorita) {
      case "Fantasia":
        urlsCategoria = urlsFantasia;
        break;
      case "Ficção Científica / Distopia":
        urlsCategoria = urlsFiccaoCientifica;
        break;
      case "Romance":
        urlsCategoria = urlsRomance;
        break;
      case "Misterio":
        urlsCategoria = urlsMisterio;
        break;
      case "Suspense":
        urlsCategoria = urlsSuspense;
        break;
      case "Acao":
        urlsCategoria = urlsAcao;
        break;
      case "Drama":
        urlsCategoria = urlsDrama;
        break;
      case "Psicologia":
        urlsCategoria = urlsPsicologia;
        break;
      default:
        urlsCategoria = [];
    }

    // Agora buscamos a recomendação com base na maior pontuação
    let pontuacaoCategoria = [];

    // Determina a pontuação correta para a categoria favorita (você pode usar arrays diferentes para cada categoria)
    switch (categoriaFavorita) {
      case "Fantasia":
        pontuacaoCategoria = pontuacaoFantasiaTotal;
        break;
      case "Ficção Científica / Distopia":
        pontuacaoCategoria = pontuacaoFiccaoCientificaTotal;
        break;
      case "Romance":
        pontuacaoCategoria = pontuacaoRomanceTotal;
        break;
      case "Misterio":
        pontuacaoCategoria = pontuacaoMisterioTotal;
        break;
      case "Suspense":
        pontuacaoCategoria = pontuacaoSuspenseTotal;
        break;
      case "Acao":
        pontuacaoCategoria = pontuacaoAcaoTotal;
        break;
      case "Drama":
        pontuacaoCategoria = pontuacaoDramaTotal;
        break;
      case "Psicologia":
        pontuacaoCategoria = pontuacaoPsicologiaTotal;
        break;
      default:
        pontuacaoCategoria = [];
    }

    // Itera sobre as pontuações para determinar a URL do livro recomendado
    for (let i = 0; i < pontuacaoCategoria.length; i++) {
      const intervalo = pontuacaoCategoria[i];

      // Se a maior pontuação corresponde à pontuação da categoria, seleciona o livro
      if (maiorPontuacao >= intervalo) {
        urlLivroRecomendado = urlsCategoria[i];
        break; // Sai do loop após encontrar a recomendação
      }
    }
  }

  // Redireciona para a página específica do livro recomendado
  window.location.href = urlLivroRecomendado;
}

// Função que processa o questionário e recomenda o livro
function processarQuestionario() {
  // Calcula a pontuação com base nas respostas
  const pontuacao = calcularPontuacao(); // Implementação dessa função deve estar em algum lugar

  // Recomenda um livro com base na pontuação
  recomendarLivro(pontuacao);
}

// Função que processa o questionário e recomenda o livro
function processarQuestionario() {
  // Calcula a pontuação com base nas respostas
  const pontuacao = calcularPontuacao(); // Implementação dessa função deve estar em algum lugar

  // Recomenda um livro com base na pontuação
  recomendarLivro(pontuacao);
}
