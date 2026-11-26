function fnExibirChamada() {
  let alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"];

  // Consulta o primeiro aluno (posição 0)
  console.log("Primeiro aluno: " + alunos[0]);

  // Consulta o último aluno usando .length - 1
  console.log("Último aluno: " + alunos[alunos.length - 1]);

  // Faz a contagem total de estudantes no array
  console.log("Total de estudantes cadastrados: " + alunos.length);
}

// Chamando a função para testar
fnExibirChamada();
// ----------------------------------------------------------------------------------

function fnAdicionarProduto(lista, novoItem) {
  // push adiciona mais um valor ao final do array
  lista.push(novoItem);

  // Mostra a lista atualizada no terminal
  console.log(lista);
}

// Criando o array inicial e chamando a função
let pedido = ["Teclado Mecânico", "Mouse Gamer"];
fnAdicionarProduto(pedido, "Headset USB");


//------------------------------------------------------------------------------------------

function fnEncaixarPrioridade(Fila, nomePaciente) {

  // push adiciona mais um valor ao final do array
  Fila.unshift(nomePaciente);

  // Mostra a Fila atualizada no terminal
  console.log(Fila);
}

// Criando o array inicial e chamando a função
let prioridade = ["Marcos", "Juliana", "Roberto"];

fnEncaixarPrioridade(prioridade, "Dona clara");


//-------------------------------------------------------------------------------------------

function fnChamarProximo(fila) {

  // shift remove o primeiro valor do array e guarda na variável
  let chamado = fila.shift();

  // Exibe quem foi chamado e quem continua na fila
  console.log("Paciente chamado: " + chamado);
  console.log("Continuam aguardando: " + fila);
}

// Criando a fila inicial e chamando a função
let filaAtendimento = ["Dona Clara (Idosa)", "Marcos", "Juliana", "Roberto"];

fnChamarProximo(filaAtendimento);

// ------------------------------------------------------------------------------------------------
 


function fnDesfazerAcao(lista, listaAcao){
    
  //faz a ação de apagar 
  lista.pop(listaAcao);

  //mostra a lista atualizada
  console.log(lista);
 }

 let listAcao1 = ["Escreveu título", "Aplicou negrito", "Inseriu tabela",]

 fnDesfazerAcao(listAcao1)

// ------------------------------------------------------------------------------------------------
function fnDesfazerAcao(lista) {

  // pop remove o último elemento do array
  lista.pop();

  // Mostra a lista atualizada no terminal
  console.log(lista);
}

// Criando o array inicial e chamando a função
let listAcao = ["Escreveu título", "Aplicou negrito", "Inseriu tabela"];

fnDesfazerAcao(listAcao);

// ----------------------------------------------------------------------------------
function fnVerificarEstoque(lista) {

  // length verifica a quantidade total de elementos do array
  console.log("Quantidade total de itens no estoque: " + lista.length);
}

// Criando o array inicial e chamando a função
let estoque = ["Camiseta", "Calça", "Tênis", "Boné"];

fnVerificarEstoque(estoque);

// ----------------------------------------------------------------------------------
function fnEstaNaLista(lista, nome) {

  // includes verifica se o nome existe dentro do array
  let verificar = lista.includes(nome);

  // Exibe o resultado da consulta
  console.log(nome + " está na lista? " + verificar);
}

// Criando o array inicial e chamando a função
let convidados = ["Lucas", "Mariana", "Thiago", "Beatriz"];

fnEstaNaLista(convidados, "Mariana");
fnEstaNaLista(convidados, "Rafael");

// ----------------------------------------------------------------------------------
function fnConsultarCorredor(lista, item) {

  // indexOf procura a posição do item dentro do array
  let posicao = lista.indexOf(item);

  // Verifica se o item foi encontrado
  if (posicao !== -1) {

    // Mostra a posição encontrada
    console.log(item + " está na posição: " + posicao);

  } else {

    // Mostra um aviso caso o item não exista no array
    console.log(item + " não está no array");
  }
}

// Criando o array inicial e chamando a função
let corredor = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"];

fnConsultarCorredor(corredor, "Café");
fnConsultarCorredor(corredor, "Macarrão");

// ----------------------------------------------------------------------------------
function fnAtualizarPreco(lista, indice, novoValor) {

  // Altera o valor do array na posição informada
  lista[indice] = novoValor;

  // Mostra o array com o preço atualizado no terminal
  console.log(lista);
}

// Criando o array inicial e chamando a função
let precos = [15.00, 25.00, 40.00];

fnAtualizarPreco(precos, 1, 28.50);

// ----------------------------------------------------------------------------------
function fnCriarBoletim(nota1, nota2, nota3) {

  // Cria um array armazenando as três notas do estudante
  let boletim = [nota1, nota2, nota3];

  // Mostra o boletim no terminal
  console.log(boletim);
}

// Chamando a função para testar
fnCriarBoletim(8.0, 7.5, 9.0);

// ----------------------------------------------------------------------------------




