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

 let listAcao = ["Escreveu título", "Aplicou negrito", "Inseriu tabela",]

 fnDesfazerAcao(listAcao)


