// Vetores separados por categoria
const categorias = [
  "Romance", // A
  "Ficção Científica", // B
  "Literatura Espiritual", // C
  "Horror", // D
  "Fantasia", // E
  "Ficção Policial", // F
  "Mistério", // G
  "Aventura" // H
];

// Pontuações para cada categoria
const pontuacaoFiccaoPolicialTotal = [6, 8, 9, 10, 12]; // Exemplo de pontuação
const pontuacaoAventuraTotal = [6, 12]; // Exemplo de pontuação
const pontuacaoLiteraturaEspiritualTotal = [6, 12]; // Exemplo de pontuação
const pontuacaoRomanceTotal = [6, 8, 9, 10, 12]; // Exemplo de pontuação
const pontuacaoFantasiaTotal = [6, 12]; // Exemplo de pontuação
const pontuacaoHorrorTotal = [6, 12]; // Exemplo de pontuação
const pontuacaoFiccaoCientificaTotal = [12]; // Exemplo de pontuação
const pontuacaoMisterioTotal = [6, 12]; // A variável já foi declarada corretamente

// Livros recomendados por categoria
const livrosFiccaoPolicial = [
  "Dexter: Um Assassino",
  "O Xangô de Baker Street",
  "Querido e devotado Dexter",
  "A queda",
  "Hannibal",
];
const livrosAventura = [
  "A Volta ao Mundo em 80 Dias",
  "Viagem ao Centro da Terra",
];
const livrosLiteraturaEspiritual = ["A Cabana", 
  "Depois, Silêncio"];

const livrosRomance = [
  "O Melhor de Mim",
  "Um Homem de Sorte",
  "Não se apega, não", 
  "Vermelho Branco e Sangue Azul",
  "O Lado Bom da Vida",
];

const livrosFantasia = ["Harry Potter", 
  "Lua Nova"];

const livrosHorror = ["Hyde", 
  "Bird Box"];

const livrosFiccaoCientifica = ["Avatar"];
const livrosMisterio = ["A Vingança", 
  "O visitante inesperado"];

// URLs para livros recomendados por categoria
const urlsFiccaoPolicial = [
  "../html/livros/dexter-um-assassino.html",
  "../html/livros/o-xango-de-baker-street.html",
  "../html/livros/querido-e-devotado-dexter.html",
  "../html/livros/a-queda.html",
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
  "../html/livros/nao-se-apega.html",
  "../html/livros/vermelho-branco.html",
  "../html/livros/o-lado-bom-da-vida.html",
];
const urlsFantasia = [
  "../html/livros/harry-potter.html",
  "../html/livros/lua-nova.html",
];
const urlsHorror = ["../html/livros/hyde.html", 
  "../html/livros/bird-box.html"];
const urlsFiccaoCientifica = ["../html/livros/avatar.html"];
const urlsMisterio = ["../html/livros/a-vinganca.html", 
  "../html/livros/o-visitante-inesperado.html"];

// Função para recomendar um livro com base na pontuação calculada
function recomendarLivro(pontuacao) {
  console.log("Pontuação por Categoria:", pontuacao); // Exibe a pontuação de cada categoria no console

  let categoriaFavorita = "";
  let maiorPontuacao = 0;
  let categoriasEmpatadas = []; // Armazena categorias com pontuações iguais

  // Itera sobre cada categoria para encontrar a que tem a maior pontuação
  for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];
    const categoriaPontuacao = pontuacao[i]; // Pontuação para cada categoria

    console.log(`Categoria: ${categoria}, Pontuação: ${categoriaPontuacao}`);

    if (categoriaPontuacao > maiorPontuacao) {
      // Se essa categoria tiver a maior pontuação, atualize
      maiorPontuacao = categoriaPontuacao;
      categoriasEmpatadas = [categoria]; // Reinicia a lista com essa categoria
    } else if (categoriaPontuacao === maiorPontuacao) {
      // Se empatar, adicione a categoria à lista
      categoriasEmpatadas.push(categoria);
    }
  }

  console.log(`Categorias Empatadas: ${categoriasEmpatadas}, Pontuação: ${maiorPontuacao}`);

  // Se houver empate entre 2 categorias, redireciona para "não encontrado"
  if (categoriasEmpatadas.length === 2) {
    console.log("Empate entre 2 categorias, redirecionando para página de livro não encontrado.");
    window.location.href = "../html/livros/nao-encontrado.html"; // Página genérica
    return;
  }

  // Se houver 3 ou mais categorias empatadas, sorteia uma delas
  if (categoriasEmpatadas.length >= 3) {
    const indiceSorteado = Math.floor(Math.random() * categoriasEmpatadas.length);
    categoriaFavorita = categoriasEmpatadas[indiceSorteado]; // Sorteia uma categoria favorita
    console.log(`Empate entre 3 ou mais categorias, categoria sorteada: ${categoriaFavorita}`);
  } else {
    // Se não houver 3 ou mais categorias empatadas, apenas usa a categoria favorita
    categoriaFavorita = categoriasEmpatadas[0];
  }

  // Inicializa a variável para armazenar a URL da recomendação de livro
  let urlLivroRecomendado = "../html/livros/nao-encontrado.html"; // Página genérica

  // Identifica o índice da categoria favorita
  const categoriaIndex = categorias.indexOf(categoriaFavorita);

  if (categoriaIndex !== -1) {
    let urlsCategoria = [];
    let pontuacaoCategoria = [];

    // Seleciona os vetores de URLs e pontuações correspondentes à categoria favorita
    switch (categoriaFavorita) {
      case "Ficção Policial":
        urlsCategoria = urlsFiccaoPolicial;
        pontuacaoCategoria = pontuacaoFiccaoPolicialTotal;
        break;
      case "Aventura":
        urlsCategoria = urlsAventura;
        pontuacaoCategoria = pontuacaoAventuraTotal;
        break;
      case "Literatura Espiritual":
        urlsCategoria = urlsLiteraturaEspiritual;
        pontuacaoCategoria = pontuacaoLiteraturaEspiritualTotal;
        break;
      case "Romance":
        urlsCategoria = urlsRomance;
        pontuacaoCategoria = pontuacaoRomanceTotal;
        break;
      case "Fantasia":
        urlsCategoria = urlsFantasia;
        pontuacaoCategoria = pontuacaoFantasiaTotal;
        break;
      case "Horror":
        urlsCategoria = urlsHorror;
        pontuacaoCategoria = pontuacaoHorrorTotal;
        break;
      case "Ficção Científica":
        urlsCategoria = urlsFiccaoCientifica;
        pontuacaoCategoria = pontuacaoFiccaoCientificaTotal;
        break;
      case "Mistério":
        urlsCategoria = urlsMisterio;
        pontuacaoCategoria = pontuacaoMisterioTotal;
        break;
    }

    // Encontra a melhor recomendação de livro com base na maior pontuação
    let menorDiferenca = Infinity;
    for (let i = 0; i < pontuacaoCategoria.length; i++) {
      const intervalo = pontuacaoCategoria[i];
      const diferenca = Math.abs(maiorPontuacao - intervalo);

      if (diferenca < menorDiferenca) {
        menorDiferenca = diferenca;
        urlLivroRecomendado = urlsCategoria[i]; // Atribui a URL correspondente
      }
    }
  }

  // Redireciona para a página específica do livro recomendado
  console.log(`Redirecionando para: ${urlLivroRecomendado}`);
  window.location.href = urlLivroRecomendado;
}

// Função que processa o questionário e recomenda o livro
function processarQuestionario() {
  // Calcula a pontuação com base nas respostas
  const pontuacao = calcularPontuacao(); // A função calcularPontuacao deve estar definida
  console.log("Pontuação calculada pelo questionário:", pontuacao);

  // Recomenda um livro com base na pontuação
  recomendarLivro(pontuacao);
}
