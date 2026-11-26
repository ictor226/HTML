// atv 01
 // Criando o array inicial vazio para armazenar os nomes
    let nomes = [];

    function fnSalvarNome() {
      // Pega o elemento do campo de texto e o valor digitado
      let input = document.getElementById("campoNome");
      let novoNome = input.value;

      // Verifica se o campo não está vazio antes de salvar
      if (novoNome !== "") {

        // Adiciona o novo nome ao array
        nomes.push(novoNome);

        // Exibe o conteúdo atual do array na tela
        document.getElementById("listaNomes").innerText = "Nomes cadastrados: " + nomes.join(", ");

        // Exibe a quantidade de itens do array na tela
        document.getElementById("quantidadeNomes").innerText = "Quantidade de itens: " + nomes.length;

        // Limpa o campo de texto e devolve o foco para facilitar o próximo cadastro
        input.value = "";
        input.focus();

      } else {
        alert("Por favor, digite um nome antes de salvar!");
      }
    }
// ----------------------------------------------------------






























// atv 02
 // Criando o array inicial vazio para armazenar os nomes
    let nomes = [];

    function fnSalvarNome() {
      // Pega o elemento do campo de texto e o valor digitado
      let input = document.getElementById("campoNome");
      let novoNome = input.value;

      // Verifica se o campo não está vazio antes de salvar
      if (novoNome !== "") {

        // Adiciona o novo nome ao array
        nomes.push(novoNome);

        // Exibe o conteúdo atual do array na tela
        document.getElementById("listaNomes").innerText = "Nomes cadastrados: " + nomes.join(", ");

        // Exibe a quantidade de itens do array na tela
        document.getElementById("quantidadeNomes").innerText = "Quantidade de itens: " + nomes.length;

        // Limpa o campo de texto e devolve o foco para facilitar o próximo cadastro
        input.value = "";
        input.focus();



        
      } else {
        alert("Por favor, digite um nome antes de salvar!");
      }
    }























