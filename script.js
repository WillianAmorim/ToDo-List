// ADICIONAR TAREFA NA LISTA
const buttonAddTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const sortedList = document.getElementById('lista-tarefas');

const clearInput = () => {
  input.value = ''
}

const createListItem = (valueInput) => {
  const createLi = document.createElement('li')
  sortedList.appendChild(createLi)
  createLi.innerHTML = valueInput
}

const addTask = () => {
  const valueInput = input.value
  createListItem(valueInput)
  clearInput()
} 

buttonAddTask.addEventListener('click', addTask)
