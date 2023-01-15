// ADICIONAR TAREFA NA LISTA
const buttonAddTask = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const sortedList = document.getElementById('lista-tarefas');

const selectedItem = (event) => {
  const li = document.querySelectorAll('li')
  const itemClicked = event.target

  if(!itemClicked.classList.contains('selected')) {
    for (let i = 0; i < li.length; i++) {
      if (li[i].classList.contains('selected')) {
        li[i].classList.remove('selected');
      }
    }
  }

  itemClicked.classList.add('selected')
}

const completeItem = (event) => {
  const itemSelected = event.target;
  if(!itemSelected.classList.contains('completed')){
    itemSelected.classList.add('completed');
  } else {
    itemSelected.classList.remove('completed');
  }
}

const clearInput = () => {
  input.value = ''
}

const createListItem = (valueInput) => {
  const createLi = document.createElement('li');
  createLi.setAttribute('onClick', 'selectedItem(event)');
  createLi.setAttribute('ondblclick', 'completeItem(event)');
  sortedList.appendChild(createLi);
  createLi.innerHTML = valueInput;
}

const addTask = () => {
  const valueInput = input.value
  createListItem(valueInput)
  clearInput()
} 

buttonAddTask.addEventListener('click', addTask)

