let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista'); // Adicionei a referência ao elemento main

function addTarefa() {
  // PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value; // Corrigi o nome da variável para ser consistente

  // SE NÃO FOR VAZIO, NEM NULO, NEM UNDEFINED
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador; // Inclui o contador a cada tarefa adicionada
    let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcartarefa(${contador})" class="item-icone">
          <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>

        <div onclick="marcartarefa(${contador})" class="item-nome">${valorInput}</div>

        <div class="item-botao">
          <button onclick="deletar(${contador})" class="delete">
            <i class="mdi mdi-delete">Deletar</i>
          </button>
        </div>
      </div>`;

    main.innerHTML += novoItem; // Adiciona o novo item ao elemento main
    input.value = ""; // Limpa o campo de input após adicionar a tarefa
    input.focus(); // Foca novamente no campo de input
  }
}

function deletar(id) {
  var tarefa = document.getElementById(id); // Seleciona o item pelo ID
  if (tarefa) {
    tarefa.remove(); // Remove o item do DOM
  }
}

function marcartarefa (id) {
  var item = document.getElementById(id); // Seleciona o item pelo ID
  var classe = item.getAttribute("class"); // Pega a classe do item
  console.log(classe); // Exibe a classe no console para depuração

  if (classe == "item"){
    item.classList.add("clicado"); // Adiciona a classe clicada

    var icone = document.getElementById("icone_" + id); // Seleciona o ícone pelo ID  
    icone.classList.remove("mdi-circle-outline"); // Remove o ícone de círculo
    icone.classList.add("mdi-check-circle"); // Adiciona o ícone de check 

item.parentNode.appendChild(item); // Move o item para o final da lista

  } else {
    item.classList.remove("clicado"); // Remove a classe clicada

    var icone = document.getElementById("icone_" + id); // Seleciona o ícone pelo ID
    icone.classList.remove("mdi-check-circle"); // Remove o ícone de check
    icone.classList.add("mdi-circle-outline"); // Adiciona o ícone de círculo
  }
}


input.addEventListener('keyup', function (event) {
  // 13 é o número da tecla Enter
  // Se o usuário pressionar a tecla Enter, adiciona a tarefa.
  if (event.keyCode === 13) {
    event.preventDefault(); // Previne o comportamento padrão do Enter
    btnAdd.click(); // Adiciona a tarefa ao pressionar Enter
  }
})



