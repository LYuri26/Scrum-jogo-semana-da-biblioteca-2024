// Vetores separados por categoria
const categorias = [
  "Ficção Policial", // A
  "Ficção Científica", // B
  "Literatura Espiritual", // C
  "Romance", // D
  "Fantasia", // E
  "Horror", // F
  "Mistério", // G
  "Aventura" // H
];

// Pontuações para cada categoria
const pontuacaoFiccaoPolicialTotal = [0, 0, 0]; // Exemplo de pontuação
const pontuacaoAventuraTotal = [0, 0]; // Exemplo de pontuação
const pontuacaoLiteraturaEspiritualTotal = [0, 0]; // Exemplo de pontuação
const pontuacaoRomanceTotal = [0, 0, 0]; // Exemplo de pontuação
const pontuacaoFantasiaTotal = [0, 0]; // Exemplo de pontuação
const pontuacaoHorrorTotal = [0, 0]; // Exemplo de pontuação
const pontuacaoFiccaoCientificaTotal = [0]; // Exemplo de pontuação
const pontuacaoMisterio = [0];

// Livros recomendados por categoria
const livrosFiccaoPolicial = [
  "Dexter: Um Assassino",
  "O Xangô de Baker Street",
  "Hannibal",
];
const livrosAventura = [
  "A Volta ao Mundo em 80 Dias",
  "Viagem ao Centro da Terra",
];
const livrosLiteraturaEspiritual = ["A Cabana", "Depois, Silêncio"];

const livrosRomance = [
  "O Melhor de Mim",
  "Um Homem de Sorte",
  "O Lado Bom da Vida",
];

const livrosFantasia = ["Harry Potter", "Lua Nova"];

const livrosHorror = ["Hyde", "Bird Box"];

const livrosFiccaoCientifica = ["Avatar"];

const livrosMisterio = ["O visitante inesperado"];

// URLs para livros recomendados por categoria
const urlsFiccaoPolicial = [
  "../html/livros/dexter-um-assassino.html",
  "../html/livros/o-xango-de-baker-street.html",
  "../html/livros/hannibal.html",
];
const urlsAventura = [
  "../html/livros/a-volta-ao-mundo-em-80-dias.html",
  "../html/livros/viagem-ao-centro-da-terra.html",
];
const urlsLiteraturaEspiritual = [
  "../html/livros/a-cabana.html",
  "../html/livros/depois-silencio.html",
];
const urlsRomance = [
  "../html/livros/o-melhor-de-mim.html",
  "../html/livros/um-homem-de-sorte.html",
  "../html/livros/o-lado-bom-da-vida.html",
];
const urlsFantasia = [
  "../html/livros/harry-potter.html",
  "../html/livros/lua-nova.html",
];
const urlsHorror = ["../html/livros/hyde.html", "../html/livros/birdbox.html"];
const urlsFiccaoCientifica = ["../html/livros/avatar.html"];
const urlsMisterio = ["../html/livros/o-visitante-inesperado.html"];

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
      case "Ficção Policial":
        urlsCategoria = urlsFiccaoPolicial;
        break;
      case "Aventura":
        urlsCategoria = urlsAventura;
        break;
      case "Literatura Espiritual":
        urlsCategoria = urlsLiteraturaEspiritual;
        break;
      case "Romance":
        urlsCategoria = urlsRomance;
        break;
      case "Fantasia":
        urlsCategoria = urlsFantasia;
        break;
      case "Horror":
        urlsCategoria = urlsHorror;
        break;
      case "Ficção Científica":
        urlsCategoria = urlsFiccaoCientifica;
        break;
        case "Mistério":
        urlsCategoria = urlsMisterio;
        break;
      default:
        urlsCategoria = [];
    }

    // Agora buscamos a recomendação com base na maior pontuação
    let pontuacaoCategoria = [];

    // Determina a pontuação correta para a categoria favorita
    switch (categoriaFavorita) {
      case "Ficção Policial":
        pontuacaoCategoria = pontuacaoFiccaoPolicialTotal;
        break;
      case "Aventura":
        pontuacaoCategoria = pontuacaoAventuraTotal;
        break;
      case "Literatura Espiritual":
        pontuacaoCategoria = pontuacaoLiteraturaEspiritualTotal;
        break;
      case "Romance":
        pontuacaoCategoria = pontuacaoRomanceTotal;
        break;
      case "Fantasia":
        pontuacaoCategoria = pontuacaoFantasiaTotal;
        break;
      case "Horror":
        pontuacaoCategoria = pontuacaoHorrorTotal;
        break;
      case "Ficção Científica":
        pontuacaoCategoria = pontuacaoFiccaoCientificaTotal;
        break;
        case "Mistério":
        pontuacaoCategoria = pontuacaoMisterio;
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
