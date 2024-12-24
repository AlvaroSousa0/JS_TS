const inputTarefas = document.querySelector('.input-tarefas');
const addTarefas = document.querySelector('.adicionar-tarefa');
const tarefas = document.querySelector('.lista-tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function adicionaTarefa(tarefa) {
    const li = criaLi();
    li.innerText = tarefa;
    tarefas.appendChild(li);
    limparInput();
    botaoApagar(li);
    salvarTarefas();
}

function limparInput() {
    inputTarefas.value = '';
    inputTarefas.focus();
}

function botaoApagar(li) {
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
}

function salvarTarefas() {
    const tarefasLi = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of tarefasLi) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim()
        listaTarefas.push(textoTarefa);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function buscaTarefaSalva() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (let tarefa of listaTarefas) {
        adicionaTarefa(tarefa);
    }
}
buscaTarefaSalva(

)
addTarefas.addEventListener('click', function(e) {
    if (!inputTarefas.value) return;
    adicionaTarefa(inputTarefas.value);
})

inputTarefas.addEventListener('keypress', function(e) {
   if (e.keyCode === 13) {
    if (!inputTarefas.value) return;
    adicionaTarefa(inputTarefas.value);
   }
})

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})