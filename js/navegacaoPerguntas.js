// Variável para armazenar o índice da pergunta atual
let perguntaAtual = 0;

// Função para mostrar a pergunta atual e esconder as outras
function mostrarPergunta() {
  // Seleciona todos os elementos de pergunta
  const perguntas = document.querySelectorAll(".question");

  // Esconde todas as perguntas
  perguntas.forEach((pergunta, index) => {
    if (index === perguntaAtual) {
      pergunta.classList.remove("d-none"); // Mostra a pergunta atual
    } else {
      pergunta.classList.add("d-none"); // Esconde as outras perguntas
    }
  });

  // Atualiza a visibilidade dos botões de navegação
  atualizarBotoesNavegacao(perguntas.length);
  
  // Oculta o aviso sempre que uma nova pergunta é mostrada
  ocultarAviso();
}

// Função para verificar se a pergunta atual foi respondida
function perguntaRespondida() {
  const perguntaAtualElement = document.querySelectorAll(".question")[perguntaAtual];
  const inputs = perguntaAtualElement.querySelectorAll("input[type='radio'], input[type='checkbox']");
  return Array.from(inputs).some(input => input.checked);
}

// Função para mostrar a próxima pergunta
function proximaPergunta() {
  // Verifica se a pergunta foi respondida
  if (!perguntaRespondida()) {
    // Mostra o alerta se a pergunta não foi respondida
    const aviso = document.getElementById('aviso');
    aviso.style.display = 'block'; // Mostra o alerta

    // Remove o alerta após 3 segundos
    setTimeout(() => {
      aviso.style.display = 'none'; // Oculta o alerta
    }, 3000);
    
    return; // Impede que a função prossiga para a próxima pergunta
  }

  // Incrementa o índice da pergunta atual
  perguntaAtual++;
  // Chama a função para atualizar a exibição das perguntas
  mostrarPergunta();
}

// Função para mostrar a pergunta anterior
function perguntaAnterior() {
  // Decrementa o índice da pergunta atual
  perguntaAtual--;
  // Chama a função para atualizar a exibição das perguntas
  mostrarPergunta();
}

// Função para atualizar a visibilidade dos botões de navegação
function atualizarBotoesNavegacao(totalPerguntas) {
  const botaoAnterior = document.getElementById("botaoAnterior");
  const botaoProximo = document.getElementById("botaoProximo");
  const botaoFinalizar = document.getElementById("botaoFinalizar");

  // Se estiver na primeira pergunta, esconde o botão de "Anterior"
  botaoAnterior.style.display = perguntaAtual === 0 ? "none" : "inline-block";

  // Se estiver na última pergunta, esconde o botão de "Próximo" e mostra o botão de "Finalizar"
  if (perguntaAtual === totalPerguntas - 1) {
    botaoProximo.style.display = "none";
    botaoFinalizar.style.display = "inline-block";
  } else {
    botaoProximo.style.display = "inline-block";
    botaoFinalizar.style.display = "none";
  }
}

// Função para ocultar o aviso
function ocultarAviso() {
  const aviso = document.getElementById('aviso');
  aviso.style.display = 'none'; // Oculta o aviso
}

// Inicializa a exibição da primeira pergunta quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
  mostrarPergunta(); // Mostra a primeira pergunta
  ocultarAviso(); // Garante que o aviso comece oculto
});
