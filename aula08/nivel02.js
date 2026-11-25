
// 11. Somar valores de uma compra

function fnSomarCompra(lista) {

  // Cria uma variável para acumular o valor total
  let total = 0;

  // Percorre todos os valores do array
  for (let i = 0; i < lista.length; i++) {

    // Soma cada valor ao total
    total += lista[i];
  }

  // Exibe o valor final formatado no terminal
  console.log("Total da compra: R$ " + total.toFixed(2));
}

// Criando o array inicial e chamando a função
let valoresCompra = [29.90, 54.00, 15.50, 80.00];

fnSomarCompra(valoresCompra);

// ----------------------------------------------------------------------------------


// 12. Calcular média e verificar aprovação

function fnVerificarAprovacao(lista) {

  // Cria uma variável para acumular as notas
  let soma = 0;

  // Percorre todas as notas do array
  for (let i = 0; i < lista.length; i++) {

    // Soma as notas
    soma += lista[i];
  }

  // Calcula a média das notas
  let media = soma / lista.length;

  // Exibe a média no terminal
  console.log("Média do aluno: " + media.toFixed(2));

  // Verifica se o aluno foi aprovado ou reprovado
  if (media >= 6.0) {
    console.log("Aluno aprovado!");
  } else {
    console.log("Aluno reprovado!");
  }
}

// Criando o array inicial e chamando a função
let notas = [6.5, 5.0, 7.5, 6.0];

fnVerificarAprovacao(notas);

// ----------------------------------------------------------------------------------


// 13. Separar pessoas maiores de idade

function fnFiltrarMaioridade(lista) {

  // Cria um novo array vazio para armazenar as idades
  let maiores = [];

  // Percorre todas as idades do array
  for (let i = 0; i < lista.length; i++) {

    // Verifica se a idade é maior ou igual a 18
    if (lista[i] >= 18) {

      // Adiciona a idade ao novo array
      maiores.push(lista[i]);
    }
  }

  // Mostra o novo array no terminal
  console.log("Idades maiores ou iguais a 18: " + maiores);
}

// Criando o array inicial e chamando a função
let idades = [14, 18, 25, 16, 32, 17, 19];

fnFiltrarMaioridade(idades);

// ----------------------------------------------------------------------------------


// 14. Verificar se o login já existe

function fnVerificarLogin(lista, novoLogin) {

  // includes verifica se o login já existe no array
  if (lista.includes(novoLogin)) {

    // Informa que o login já está cadastrado
    console.log("Login indisponível!");

  } else {

    // Adiciona o novo login ao array
    lista.push(novoLogin);

    // Confirma que o cadastro foi realizado
    console.log("Login cadastrado com sucesso!");

    // Mostra a lista atualizada no terminal
    console.log(lista);
  }
}

// Criando o array inicial e chamando a função
let logins = ["joao.silva", "maria.souza", "pedro.lima"];

fnVerificarLogin(logins, "carlos.santos");
fnVerificarLogin(logins, "maria.souza");

// ----------------------------------------------------------------------------------


// 15. Aplicar desconto de 15% nos preços

function fnAplicarDesconto(lista) {

  // Cria um novo array vazio para armazenar os preços promocionais
  let promocao = [];

  // Percorre todos os preços do array original
  for (let i = 0; i < lista.length; i++) {

    // Calcula o desconto de 15% sem alterar o valor original
    let novoPreco = lista[i] * 0.85;

    // Adiciona o novo preço ao array promocional
    promocao.push(novoPreco);
  }

  // Mostra os preços promocionais no terminal
  console.log("Preços promocionais: " + promocao);
}

// Criando o array inicial e chamando a função
let precosOriginais = [100, 200, 50, 80];

fnAplicarDesconto(precosOriginais);

// ----------------------------------------------------------------------------------


// 16. Contar números pares e ímpares

function fnContarParesImpares(lista) {

  // Cria variáveis para contar os números pares e ímpares
  let pares = 0;
  let impares = 0;

  // Percorre todos os números do array
  for (let i = 0; i < lista.length; i++) {

    // Verifica se o número é divisível por 2
    if (lista[i] % 2 === 0) {

      // Se for divisível, aumenta a contagem de pares
      pares++;

    } else {

      // Caso contrário, aumenta a contagem de ímpares
      impares++;
    }
  }

  // Exibe as quantidades no terminal
  console.log("Quantidade de números pares: " + pares);
  console.log("Quantidade de números ímpares: " + impares);
}

// Criando o array inicial e chamando a função
let numeros = [12, 7, 5, 20, 33, 8, 11, 4];

fnContarParesImpares(numeros);

// ----------------------------------------------------------------------------------


// 17. Encontrar maior e menor temperatura

function fnConsultarTemperaturas(lista) {

  // Inicializa as variáveis com o primeiro valor do array
  let maior = lista[0];
  let menor = lista[0];

  // Percorre as temperaturas do array
  for (let i = 1; i < lista.length; i++) {

    // Verifica se encontrou uma temperatura maior
    if (lista[i] > maior) {
      maior = lista[i];
    }

    // Verifica se encontrou uma temperatura menor
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  // Exibe a maior e a menor temperatura no terminal
  console.log("Maior temperatura: " + maior + "°C");
  console.log("Menor temperatura: " + menor + "°C");
}

// Criando o array inicial e chamando a função
let temperaturas = [22, 29, 18, 31, 24, 19];

fnConsultarTemperaturas(temperaturas);

// ----------------------------------------------------------------------------------


// 18. Remover item do pedido

function fnCancelarPedido(lista, item) {

  // indexOf procura a posição do item dentro do array
  let posicao = lista.indexOf(item);

  // Verifica se o item foi encontrado
  if (posicao !== -1) {

    // splice remove o item da posição encontrada
    lista.splice(posicao, 1);

    // Mostra uma mensagem de confirmação
    console.log(item + " foi removido do pedido!");

    // Mostra o pedido atualizado no terminal
    console.log(lista);

  } else {

    // Informa que o item não foi encontrado
    console.log(item + " não está no pedido!");
  }
}

// Criando o array inicial e chamando a função
let pedidoCliente = ["Hambúrguer", "Batata Frita", "Refrigerante", "Sobremesa"];

fnCancelarPedido(pedidoCliente, "Batata Frita");

// ----------------------------------------------------------------------------------


// 19. Filtrar nomes pela inicial

function fnFiltrarNomes(lista, inicial) {

  // Cria um novo array vazio para armazenar os nomes encontrados
  let nomesFiltrados = [];

  // Percorre todos os nomes do array
  for (let i = 0; i < lista.length; i++) {

    // Verifica se o nome começa com a inicial informada
    if (lista[i].startsWith(inicial)) {

      // Adiciona o nome ao novo array
      nomesFiltrados.push(lista[i]);
    }
  }

  // Exibe os nomes filtrados no terminal
  console.log("Nomes encontrados: " + nomesFiltrados);
}

// Criando o array inicial e chamando a função
let nomes = ["Amanda", "Carlos", "Arthur", "Bruna", "Alice", "Diego"];

fnFiltrarNomes(nomes, "A");

// ----------------------------------------------------------------------------------


// 20. Consultar produtos disponíveis no estoque

function fnConsultarEstoque(lista) {

  // Percorre todos os produtos do array
  for (let i = 0; i < lista.length; i++) {

    // Verifica se a quantidade em estoque é maior que zero
    if (lista[i].quantidade > 0) {

      // Exibe somente os produtos disponíveis
      console.log(
        "Produto: " + lista[i].nome +
        " | Quantidade: " + lista[i].quantidade
      );
    }
  }
}

// Criando o array inicial com os produtos e suas quantidades
let produtos = [
  { nome: "Notebook", quantidade: 4 },
  { nome: "Webcam", quantidade: 0 },
  { nome: "Mousepad", quantidade: 12 },
  { nome: "Cabo HDMI", quantidade: 0 }
];

// Chamando a função para consultar o estoque
fnConsultarEstoque(produtos);

// ----------------------------------------------------------------------------------
