// ADICIONAR TAREFA NA LISTA
const buttonAddTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');

const addTask = () => {
  const valueInput = input.value
  createListItem(valueInput)
  clearInput()
} 

buttonAddTask.addEventListener('click', addTask)
